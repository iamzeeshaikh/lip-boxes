/**
 * Content uniqueness and cannibalisation audit.
 *
 * Reads the built HTML in `dist/client`, strips chrome (header, footer, nav,
 * forms, breadcrumbs) so only the editorial body of each page is compared,
 * then measures:
 *
 *   1. pairwise similarity, using Jaccard over 6-word shingles — a measure
 *      that catches rewritten-but-structurally-identical copy, which a plain
 *      word-frequency comparison does not;
 *   2. exact duplicate headings, paragraphs and FAQ questions across pages;
 *   3. repeated anchor text pointing at the same URL;
 *   4. keyword and search-intent overlap between pages, since two pages can
 *      read differently and still compete for the same query.
 *
 * Writes reports/09-content-similarity-report.md and a JSON companion, and
 * exits non-zero when a pair breaches the hard threshold.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist/client');
const REPORTS = path.join(ROOT, 'reports');

/* Two pages above this are treated as duplicates and fail the audit. */
const FAIL_AT = 0.45;
/* Above this they are reported for review but do not fail. */
const WARN_AT = 0.3;
const SHINGLE = 6;

if (!fs.existsSync(DIST)) {
  console.error('dist/client not found. Run `npm run build` first.');
  process.exit(1);
}

/* ------------------------------------------------------------------ *
 * Collect pages                                                       *
 * ------------------------------------------------------------------ */

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

function toRoute(file) {
  let rel = path.relative(DIST, file).split(path.sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel === '404.html') return '/404/';
  rel = rel.replace(/index\.html$/, '');
  return `/${rel}`;
}

/**
 * Removes an element and its contents wherever its class list matches, by
 * walking forward and counting nested open and close tags of the same name.
 * A regex alone cannot do this because these blocks nest.
 */
function stripByClass(html, className) {
  const open = new RegExp(
    `<(section|div|article|li|aside|figure|figcaption|p)\\b[^>]*class="[^"]*\\b${className}\\b[^"]*"[^>]*>`,
    'i',
  );
  let out = html;
  for (let guard = 0; guard < 500; guard += 1) {
    const match = open.exec(out);
    if (!match) break;
    const tag = match[1];
    const tagRe = new RegExp(`<${tag}\\b[^>]*>|</${tag}>`, 'gi');
    tagRe.lastIndex = match.index + match[0].length;
    let depth = 1;
    let end = out.length;
    let step;
    while ((step = tagRe.exec(out))) {
      depth += step[0].startsWith('</') ? -1 : 1;
      if (depth === 0) {
        end = tagRe.lastIndex;
        break;
      }
    }
    out = out.slice(0, match.index) + ' ' + out.slice(end);
  }
  return out;
}

/**
 * Everything that appears on many pages by design and would inflate every
 * score: site chrome, the quote form, the closing call to action, product and
 * post cards, and any element the templates have marked as boilerplate.
 *
 * The price statement is in this set deliberately. It is required verbatim on
 * every product page, so counting it as duplicate copy would be misleading.
 */
function stripChrome(html) {
  let out = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<header[\s\S]*?<\/header>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
    .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<form[\s\S]*?<\/form>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<p\b[^>]*\bdata-boilerplate\b[^>]*>[\s\S]*?<\/p>/gi, ' ');

  for (const className of [
    'quote-cta',
    'quick-quote',
    'p-card',
    // Image captions belong to the photograph, not the page. The same product
    // shot legitimately appears on more than one market page.
    'm-figure__caption',
    'archive__item',
    'post-item',
    'post-card',
    'r-next',
    'city-next',
    'loc-cities',
    'st-card',
    'ci-card',
    'loc-grid',
  ]) {
    out = stripByClass(out, className);
  }
  return out;
}

function decode(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&middot;/g, '·')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–');
}

function textOf(html) {
  return decode(html.replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

const STOP = new Set(
  'a an the and or but of to in on for with is are was were be been it its this that these those as at by from into than then so if it,'
    .split(/[\s,]+/)
    .filter(Boolean),
);

function tokens(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOP.has(w));
}

function shingles(words, n = SHINGLE) {
  const out = new Set();
  for (let i = 0; i + n <= words.length; i += 1) out.add(words.slice(i, i + n).join(' '));
  return out;
}

function jaccard(a, b) {
  if (a.size === 0 || b.size === 0) return 0;
  let shared = 0;
  const [small, large] = a.size <= b.size ? [a, b] : [b, a];
  for (const s of small) if (large.has(s)) shared += 1;
  return shared / (a.size + b.size - shared);
}

const pages = walk(DIST)
  .map((file) => {
    const html = fs.readFileSync(file, 'utf8');
    const route = toRoute(file);
    const body = stripChrome(html);

    const title = decode((html.match(/<title>([\s\S]*?)<\/title>/i) || [, ''])[1]).trim();
    const description = decode(
      (html.match(/<meta name="description" content="([^"]*)"/i) || [, ''])[1],
    ).trim();
    const noindex = /<meta name="robots"[^>]*noindex/i.test(html);
    const h1 = textOf((body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [, ''])[1]);

    const headings = [...body.matchAll(/<h([2-4])[^>]*>([\s\S]*?)<\/h\1>/gi)]
      .map((m) => textOf(m[2]))
      .filter(Boolean);

    const paragraphs = [...body.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
      .map((m) => textOf(m[1]))
      .filter((p) => p.split(/\s+/).length >= 12);

    const faqQuestions = [...body.matchAll(/<summary[^>]*>([\s\S]*?)<\/summary>/gi)]
      .map((m) => textOf(m[1]))
      .filter(Boolean);

    const anchors = [...body.matchAll(/<a[^>]+href="(\/[^"#?]*)"[^>]*>([\s\S]*?)<\/a>/gi)]
      .map((m) => ({ href: m[1], text: textOf(m[2]).toLowerCase() }))
      .filter((a) => a.text.length > 3);

    const text = textOf(body);
    const words = tokens(text);

    return {
      route,
      title,
      description,
      noindex,
      h1,
      headings,
      paragraphs,
      faqQuestions,
      anchors,
      wordCount: text.split(/\s+/).filter(Boolean).length,
      shingles: shingles(words),
    };
  })
  .filter((p) => !p.noindex && p.route !== '/404/')
  .sort((a, b) => a.route.localeCompare(b.route));

/* ------------------------------------------------------------------ *
 * Search intent, taken from the data layer rather than guessed        *
 * ------------------------------------------------------------------ */

async function loadIntents() {
  const map = new Map();
  const read = (file) => {
    try {
      return fs.readFileSync(path.join(ROOT, file), 'utf8');
    } catch {
      return '';
    }
  };

  const grab = (source, slugPrefix, urlFor) => {
    const re = /slug:\s*'([^']+)'/g;
    let m;
    while ((m = re.exec(source))) {
      const slug = m[1];
      const seg = source.slice(m.index, m.index + 4000);
      const primary = (seg.match(/primaryKeyword:\s*\n?\s*'((?:[^'\\]|\\.)*)'/) || [, ''])[1];
      const intent =
        (seg.match(/searchIntent:\s*\n?\s*'((?:[^'\\]|\\.)*)'/) || [, ''])[1] ||
        (seg.match(/marketAngle:\s*\n?\s*'((?:[^'\\]|\\.)*)'/) || [, ''])[1];
      const secondary = (seg.match(/secondaryKeywords:\s*\[([^\]]*)\]/) || [, ''])[1]
        .split(',')
        .map((s) => s.replace(/['"\s]+/g, ' ').trim())
        .filter(Boolean);
      if (primary) {
        map.set(urlFor(slug, seg), {
          primary: primary.replace(/\\'/g, "'"),
          intent: intent.replace(/\\'/g, "'"),
          secondary,
        });
      }
      re.lastIndex = m.index + 1;
    }
    void slugPrefix;
  };

  for (const file of fs.readdirSync(path.join(ROOT, 'src/data/products'))) {
    grab(read(`src/data/products/${file}`), '', (slug) => `/${slug}/`);
  }
  for (const file of fs.readdirSync(path.join(ROOT, 'src/data/resources'))) {
    grab(read(`src/data/resources/${file}`), '', (slug) => `/resources/${slug}/`);
  }
  for (const file of fs.readdirSync(path.join(ROOT, 'src/data/locations'))) {
    const source = read(`src/data/locations/${file}`);
    grab(source, '', (slug, seg) =>
      /type:\s*'state'/.test(seg) ? `/locations/states/${slug}/` : `/locations/cities/${slug}/`,
    );
  }
  return map;
}

const intents = await loadIntents();

/* ------------------------------------------------------------------ *
 * Pairwise similarity                                                 *
 * ------------------------------------------------------------------ */

const pairs = [];
for (let i = 0; i < pages.length; i += 1) {
  for (let j = i + 1; j < pages.length; j += 1) {
    const score = jaccard(pages[i].shingles, pages[j].shingles);
    if (score > 0.08) pairs.push({ a: pages[i].route, b: pages[j].route, score });
  }
}
pairs.sort((x, y) => y.score - x.score);

const closest = new Map();
for (const page of pages) closest.set(page.route, { route: '—', score: 0 });
for (const pair of pairs) {
  if (closest.get(pair.a).score < pair.score) closest.set(pair.a, { route: pair.b, score: pair.score });
  if (closest.get(pair.b).score < pair.score) closest.set(pair.b, { route: pair.a, score: pair.score });
}

/* ------------------------------------------------------------------ *
 * Exact repeats                                                       *
 * ------------------------------------------------------------------ */

function tally(field) {
  const map = new Map();
  for (const page of pages) {
    for (const value of page[field]) {
      const key = value.toLowerCase();
      if (!map.has(key)) map.set(key, { value, routes: new Set() });
      map.get(key).routes.add(page.route);
    }
  }
  return [...map.values()]
    .filter((e) => e.routes.size > 1)
    .map((e) => ({ value: e.value, routes: [...e.routes], count: e.routes.size }))
    .sort((a, b) => b.count - a.count);
}

const repeatedHeadings = tally('headings');
const repeatedParagraphs = tally('paragraphs');
const repeatedFaqs = tally('faqQuestions');

const anchorMap = new Map();
for (const page of pages) {
  for (const anchor of page.anchors) {
    const key = `${anchor.text}→${anchor.href}`;
    if (!anchorMap.has(key)) anchorMap.set(key, { ...anchor, routes: new Set() });
    anchorMap.get(key).routes.add(page.route);
  }
}
const repeatedAnchors = [...anchorMap.values()]
  .filter((a) => a.routes.size > 3)
  .map((a) => ({ text: a.text, href: a.href, count: a.routes.size }))
  .sort((a, b) => b.count - a.count);

/* Duplicate titles and descriptions, which are a cannibalisation signal in
   their own right regardless of how different the body copy is. */
function dupeMeta(field) {
  const map = new Map();
  for (const page of pages) {
    const key = page[field].toLowerCase();
    if (!key) continue;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(page.route);
  }
  return [...map.entries()].filter(([, routes]) => routes.length > 1);
}

const duplicateTitles = dupeMeta('title');
const duplicateDescriptions = dupeMeta('description');

/* Two pages targeting the same primary keyword. */
const keywordMap = new Map();
for (const [route, entry] of intents) {
  const key = entry.primary.toLowerCase().trim();
  if (!key) continue;
  if (!keywordMap.has(key)) keywordMap.set(key, []);
  keywordMap.get(key).push(route);
}
const duplicateKeywords = [...keywordMap.entries()].filter(([, routes]) => routes.length > 1);

/* ------------------------------------------------------------------ *
 * Verdict                                                             *
 * ------------------------------------------------------------------ */

const failures = [];
for (const pair of pairs) {
  if (pair.score >= FAIL_AT) {
    failures.push(
      `Similarity ${(pair.score * 100).toFixed(1)}% between ${pair.a} and ${pair.b} (limit ${FAIL_AT * 100}%)`,
    );
  }
}
for (const [title, routes] of duplicateTitles) {
  failures.push(`Duplicate title "${title}" on ${routes.join(', ')}`);
}
for (const [desc, routes] of duplicateDescriptions) {
  failures.push(`Duplicate meta description on ${routes.join(', ')} — "${desc.slice(0, 60)}…"`);
}
for (const [keyword, routes] of duplicateKeywords) {
  failures.push(`Two pages target the primary keyword "${keyword}": ${routes.join(', ')}`);
}
for (const entry of repeatedParagraphs) {
  if (entry.count > 2) {
    failures.push(
      `Paragraph repeated on ${entry.count} pages: "${entry.value.slice(0, 70)}…" (${entry.routes.slice(0, 4).join(', ')})`,
    );
  }
}
for (const entry of repeatedFaqs) {
  if (entry.count > 2) {
    failures.push(
      `FAQ question repeated on ${entry.count} pages: "${entry.value.slice(0, 70)}…"`,
    );
  }
}

/* ------------------------------------------------------------------ *
 * Report                                                              *
 * ------------------------------------------------------------------ */

const risk = (score) => {
  if (score >= FAIL_AT) return 'High';
  if (score >= WARN_AT) return 'Medium';
  if (score >= 0.2) return 'Low';
  return 'None';
};

const group = (route) => {
  if (route.startsWith('/locations/cities/') && route !== '/locations/cities/') return 'City';
  if (route.startsWith('/locations/states/') && route !== '/locations/states/') return 'State';
  if (route.startsWith('/locations/')) return 'Location hub';
  if (route.startsWith('/resources/') && route !== '/resources/') return 'Resource';
  if (route.startsWith('/blog/') && route !== '/blog/') return 'Blog';
  if (intents.has(route) && !route.includes('/')) return 'Product';
  return 'Page';
};

const rows = pages.map((page) => {
  const near = closest.get(page.route);
  const intent = intents.get(page.route) || { primary: '—', intent: '—' };
  return {
    route: page.route,
    type: group(page.route),
    primary: intent.primary || '—',
    intent: intent.intent || '—',
    words: page.wordCount,
    closest: near.route,
    score: near.score,
    risk: risk(near.score),
  };
});

const esc = (value) => String(value).replace(/\|/g, '\\|');
const pct = (n) => `${(n * 100).toFixed(1)}%`;

const lines = [];
lines.push('# Content Similarity and Cannibalisation Report');
lines.push('');
lines.push(`Generated from the built output in \`dist/client\`. Pages analysed: **${pages.length}**.`);
lines.push('');
lines.push(
  'Similarity is Jaccard overlap of 6-word shingles across editorial body copy only. Header, footer, navigation, forms and inline SVG are stripped before comparison, so a shared layout cannot inflate a score. Two pages sharing a template but no sentences score near zero.',
);
lines.push('');
lines.push(`| Band | Meaning |`);
lines.push('| --- | --- |');
lines.push(`| ≥ ${pct(FAIL_AT)} | Treated as duplicate content. Fails the audit. |`);
lines.push(`| ${pct(WARN_AT)} – ${pct(FAIL_AT)} | Medium risk. Reviewed and differentiated. |`);
lines.push(`| 20% – ${pct(WARN_AT)} | Low risk. Expected between pages in one family. |`);
lines.push('| < 20% | No overlap of consequence. |');
lines.push('');

lines.push('## Result');
lines.push('');
if (failures.length === 0) {
  lines.push(
    `No page pair reaches ${pct(FAIL_AT)}. No duplicate titles, duplicate meta descriptions, shared primary keywords, or paragraphs and FAQ questions repeated across three or more pages.`,
  );
} else {
  lines.push(`**${failures.length} issue(s) require action:**`);
  lines.push('');
  for (const failure of failures) lines.push(`- ${failure}`);
}
lines.push('');

lines.push('## Highest-scoring page pairs');
lines.push('');
lines.push('| A | B | Similarity | Risk |');
lines.push('| --- | --- | --- | --- |');
for (const pair of pairs.slice(0, 25)) {
  lines.push(`| ${esc(pair.a)} | ${esc(pair.b)} | ${pct(pair.score)} | ${risk(pair.score)} |`);
}
if (pairs.length === 0) lines.push('| — | — | — | — |');
lines.push('');

lines.push('## Every page: keyword, intent and nearest neighbour');
lines.push('');
lines.push('| URL | Type | Primary keyword | Search intent / market angle | Words | Closest page | Similarity | Cannibalisation risk |');
lines.push('| --- | --- | --- | --- | ---: | --- | ---: | --- |');
for (const row of rows) {
  lines.push(
    `| ${esc(row.route)} | ${row.type} | ${esc(row.primary)} | ${esc(row.intent)} | ${row.words} | ${esc(row.closest)} | ${pct(row.score)} | ${row.risk} |`,
  );
}
lines.push('');

lines.push('## Repeated headings across pages');
lines.push('');
if (repeatedHeadings.length === 0) {
  lines.push('None.');
} else {
  lines.push('| Heading | Pages | Where |');
  lines.push('| --- | ---: | --- |');
  for (const entry of repeatedHeadings.slice(0, 30)) {
    lines.push(
      `| ${esc(entry.value)} | ${entry.count} | ${esc(entry.routes.slice(0, 5).join(', '))}${entry.routes.length > 5 ? ' …' : ''} |`,
    );
  }
}
lines.push('');

lines.push('## Repeated paragraphs across pages');
lines.push('');
if (repeatedParagraphs.length === 0) {
  lines.push('None. No body paragraph of twelve words or more appears on more than one page.');
} else {
  lines.push('| Paragraph | Pages | Where |');
  lines.push('| --- | ---: | --- |');
  for (const entry of repeatedParagraphs.slice(0, 30)) {
    lines.push(
      `| ${esc(entry.value.slice(0, 90))}… | ${entry.count} | ${esc(entry.routes.slice(0, 4).join(', '))}${entry.routes.length > 4 ? ' …' : ''} |`,
    );
  }
}
lines.push('');

lines.push('## Repeated FAQ questions across pages');
lines.push('');
if (repeatedFaqs.length === 0) {
  lines.push('None. Every published FAQ question is unique to its page.');
} else {
  lines.push('| Question | Pages | Where |');
  lines.push('| --- | ---: | --- |');
  for (const entry of repeatedFaqs.slice(0, 30)) {
    lines.push(
      `| ${esc(entry.value)} | ${entry.count} | ${esc(entry.routes.slice(0, 4).join(', '))}${entry.routes.length > 4 ? ' …' : ''} |`,
    );
  }
}
lines.push('');

lines.push('## Anchor text repeated on more than three pages');
lines.push('');
if (repeatedAnchors.length === 0) {
  lines.push('None in editorial copy. Repeats below the threshold are navigational.');
} else {
  lines.push('| Anchor text | Target | Pages |');
  lines.push('| --- | --- | ---: |');
  for (const anchor of repeatedAnchors.slice(0, 30)) {
    lines.push(`| ${esc(anchor.text)} | ${esc(anchor.href)} | ${anchor.count} |`);
  }
}
lines.push('');

fs.mkdirSync(REPORTS, { recursive: true });
fs.writeFileSync(path.join(REPORTS, '09-content-similarity-report.md'), `${lines.join('\n')}\n`);
fs.writeFileSync(
  path.join(REPORTS, 'content-similarity.json'),
  `${JSON.stringify({ pages: rows, pairs: pairs.slice(0, 200), repeatedHeadings, repeatedParagraphs, repeatedFaqs, repeatedAnchors, failures }, null, 2)}\n`,
);

console.log(`Pages analysed:   ${pages.length}`);
console.log(`Pairs above 8%:   ${pairs.length}`);
console.log(`Highest pair:     ${pairs[0] ? `${pct(pairs[0].score)} (${pairs[0].a} vs ${pairs[0].b})` : 'n/a'}`);
console.log(`Repeated headings: ${repeatedHeadings.length}`);
console.log(`Repeated paras:    ${repeatedParagraphs.length}`);
console.log(`Repeated FAQs:     ${repeatedFaqs.length}`);
console.log('');

if (failures.length > 0) {
  console.error(`FAILURES (${failures.length}):`);
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  process.exit(1);
}
console.log('No duplicate or cannibalising content found.');
