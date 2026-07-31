/**
 * Spam-signal audit.
 *
 * Checks the built pages against the patterns search engines actually
 * penalise, rather than against a general sense of quality:
 *
 *   1. keyword stuffing — how often a page's own primary keyword appears
 *      relative to its length, and whether it is repeated in title, H1,
 *      description and body all at once;
 *   2. thin content — body word count with chrome removed;
 *   3. doorway pattern — the share of a page's sentences that appear on any
 *      other page, which is the concrete form of "same page, place swapped";
 *   4. hidden text — copy pushed off-screen or set to near-invisible;
 *   5. link stuffing — internal link count relative to body length, and any
 *      exact-match commercial anchor repeated across many pages;
 *   6. auto-generation tells — near-identical sentence openings within a
 *      family, and headings that differ only by a place name.
 *
 * Exits non-zero on any hard failure so it can gate a deploy.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist/client');
const REPORTS = path.join(ROOT, 'reports');

/* Thresholds. Chosen to be stricter than the point at which a page is
   actually penalised, so a warning here is a prompt to look, not a verdict. */
const KEYWORD_DENSITY_FAIL = 0.03; // 3% of all words
const KEYWORD_DENSITY_WARN = 0.02;
const THIN_FAIL = 300; // body words
const THIN_WARN = 500;
const SHARED_SENTENCE_FAIL = 0.4; // share of sentences seen on another page
const SHARED_SENTENCE_WARN = 0.25;
const LINK_DENSITY_WARN = 0.08; // internal links per body word
const ANCHOR_REPEAT_WARN = 8;

if (!fs.existsSync(DIST)) {
  console.error('dist/client not found. Run `npm run build` first.');
  process.exit(1);
}

const failures = [];
const warnings = [];
const fail = (m) => failures.push(m);
const warn = (m) => warnings.push(m);

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
  return `/${rel.replace(/index\.html$/, '')}`;
}

const decode = (t) =>
  t
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–');

const textOf = (html) =>
  decode(html.replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();

/** Body copy only: no header, footer, nav, form or inline SVG. */
function bodyOf(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<header[\s\S]*?<\/header>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
    .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<form[\s\S]*?<\/form>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ');
}

/**
 * Removes an element and its contents where its class matches, counting
 * nested tags so a card containing a div is removed whole.
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
 * Prose only, with every card and listing component removed.
 *
 * The distinction matters for the anchor check. A product card whose title is
 * the product name is a navigation affordance and every catalogue on the web
 * works that way. An exact-match keyword anchor dropped into running prose on
 * forty pages is the pattern that reads as a link scheme. Only the second is
 * measured as a failure; card anchors are reported separately as context.
 */
const CARD_CLASSES = [
  'p-card',
  'quote-cta',
  'quote-band',
  'quick-quote',
  'city-next',
  'loc-region-card',
  'loc-grid',
  'loc-cities',
  'st-card',
  'ci-card',
  'r-next',
  'm-figure',
  'archive__item',
  'post-item',
  'quote-band__aside',
  'breadcrumbs',
  'loc-toc',
  'r-toc',
];
function proseOf(body) {
  let out = body;
  for (const className of CARD_CLASSES) out = stripByClass(out, className);
  return out;
}

/* ------------------------------------------------------------------ *
 * Primary keywords, read from the data layer                          *
 * ------------------------------------------------------------------ */

function readKeywords() {
  const map = new Map();
  const add = (dir, urlFor) => {
    for (const file of fs.readdirSync(path.join(ROOT, dir))) {
      if (!file.endsWith('.ts')) continue;
      const source = fs.readFileSync(path.join(ROOT, dir, file), 'utf8');
      const starts = [...source.matchAll(/\n {2}slug:\s*'([^']+)',/g)];
      starts.forEach((match, index) => {
        const to = index + 1 < starts.length ? starts[index + 1].index : source.length;
        const seg = source.slice(match.index, to);
        const keyword = seg.match(/\n {2}primaryKeyword:\s*\n?\s*'((?:[^'\\]|\\.)*)'/);
        if (keyword) map.set(urlFor(match[1], seg), keyword[1].replace(/\\'/g, "'"));
      });
    }
  };
  add('src/data/products', (slug) => `/${slug}/`);
  add('src/data/resources', (slug) => `/resources/${slug}/`);
  add('src/data/locations', (slug, seg) =>
    /type:\s*'state'/.test(seg) ? `/locations/states/${slug}/` : `/locations/cities/${slug}/`,
  );
  return map;
}

const keywords = readKeywords();

/* ------------------------------------------------------------------ *
 * Build the page set                                                  *
 * ------------------------------------------------------------------ */

const pages = walk(DIST)
  .map((file) => {
    const html = fs.readFileSync(file, 'utf8');
    const route = toRoute(file);
    const body = bodyOf(html);
    const text = textOf(body);
    const words = text.toLowerCase().split(/\s+/).filter(Boolean);

    const sentencesOf = (source) =>
      source
        .split(/(?<=[.?!])\s+/)
        .map((s) => s.trim())
        .filter((s) => s.split(/\s+/).length >= 8);

    // Compared on prose, not on the whole body. A hub that lists card
    // excerpts is repeating them by design, and that is a listing, not a
    // doorway. The whole-body figure is still reported alongside it.
    const sentences = sentencesOf(textOf(proseOf(body)));
    const sentencesAll = sentencesOf(text);

    const linkRe = /<a[^>]+href="(\/[^"#?]*)"[^>]*>([\s\S]*?)<\/a>/gi;
    const internalLinks = [...body.matchAll(linkRe)].map((m) => ({
      href: m[1],
      text: textOf(m[2]).toLowerCase(),
    }));
    const proseLinks = [...proseOf(body).matchAll(linkRe)].map((m) => ({
      href: m[1],
      text: textOf(m[2]).toLowerCase(),
    }));

    return {
      route,
      html,
      title: decode((html.match(/<title>([\s\S]*?)<\/title>/i) || [, ''])[1]),
      description: decode(
        (html.match(/<meta name="description" content="([^"]*)"/i) || [, ''])[1],
      ),
      h1: textOf((body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [, ''])[1]),
      headings: [...body.matchAll(/<h([2-3])[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => textOf(m[2])),
      noindex: /<meta name="robots"[^>]*noindex/i.test(html),
      text,
      words,
      sentences,
      sentencesAll,
      internalLinks,
      proseLinks,
      keyword: keywords.get(route) ?? '',
    };
  })
  .filter((p) => !p.noindex && p.route !== '/404/')
  .sort((a, b) => a.route.localeCompare(b.route));

const family = (route) => {
  if (route.startsWith('/locations/cities/') && route !== '/locations/cities/') return 'City';
  if (route.startsWith('/locations/states/') && route !== '/locations/states/') return 'State';
  if (route.startsWith('/locations/')) return 'Location hub';
  if (route.startsWith('/resources/') && route !== '/resources/') return 'Guide';
  if (route.startsWith('/blog/') && route !== '/blog/') return 'Blog';
  if (keywords.has(route) && route.split('/').filter(Boolean).length === 1) return 'Product';
  return 'Static';
};

/* ------------------------------------------------------------------ *
 * 1. Keyword stuffing                                                 *
 * ------------------------------------------------------------------ */

function countPhrase(words, phrase) {
  const parts = phrase.toLowerCase().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 0;
  let hits = 0;
  for (let i = 0; i + parts.length <= words.length; i += 1) {
    let match = true;
    for (let j = 0; j < parts.length; j += 1) {
      if (words[i + j].replace(/[^a-z0-9]/g, '') !== parts[j].replace(/[^a-z0-9]/g, '')) {
        match = false;
        break;
      }
    }
    if (match) hits += 1;
  }
  return hits;
}

const rows = pages.map((page) => {
  const hits = page.keyword ? countPhrase(page.words, page.keyword) : 0;
  const keywordWords = page.keyword ? page.keyword.split(/\s+/).length : 1;
  const density = page.words.length ? (hits * keywordWords) / page.words.length : 0;
  return { ...page, hits, density };
});

for (const row of rows) {
  if (!row.keyword) continue;
  if (row.density >= KEYWORD_DENSITY_FAIL) {
    fail(
      `${row.route} — "${row.keyword}" is ${(row.density * 100).toFixed(1)}% of body words (${row.hits} occurrences)`,
    );
  } else if (row.density >= KEYWORD_DENSITY_WARN) {
    warn(
      `${row.route} — "${row.keyword}" is ${(row.density * 100).toFixed(1)}% of body words (${row.hits} occurrences)`,
    );
  }
}

/* ------------------------------------------------------------------ *
 * 2. Thin content                                                     *
 * ------------------------------------------------------------------ */

/*
 * Pages whose main content is the form itself. The form is stripped before
 * counting, so their body word count understates them by design rather than
 * because the page is thin.
 */
const FORM_PAGES = new Set(['/request-a-quote/', '/contact/', '/thank-you/']);

for (const row of rows) {
  if (FORM_PAGES.has(row.route)) continue;
  if (row.words.length < THIN_FAIL) fail(`${row.route} — ${row.words.length} body words (thin)`);
  else if (row.words.length < THIN_WARN) warn(`${row.route} — ${row.words.length} body words`);
}

/* ------------------------------------------------------------------ *
 * 3. Doorway pattern: sentences shared with any other page            *
 * ------------------------------------------------------------------ */

function ownerMap(field) {
  const owners = new Map();
  for (const row of rows) {
    for (const sentence of new Set(row[field].map((s) => s.toLowerCase()))) {
      if (!owners.has(sentence)) owners.set(sentence, new Set());
      owners.get(sentence).add(row.route);
    }
  }
  return owners;
}
const sentenceOwners = ownerMap('sentences');
const sentenceOwnersAll = ownerMap('sentencesAll');

for (const row of rows) {
  const unique = new Set(row.sentencesAll.map((s) => s.toLowerCase()));
  let shared = 0;
  for (const sentence of unique) {
    if (sentenceOwnersAll.get(sentence).size > 1) shared += 1;
  }
  row.sharedIncludingCards = unique.size ? shared / unique.size : 0;
}

for (const row of rows) {
  const unique = new Set(row.sentences.map((s) => s.toLowerCase()));
  if (unique.size === 0) continue;
  let shared = 0;
  for (const sentence of unique) {
    if (sentenceOwners.get(sentence).size > 1) shared += 1;
  }
  row.sharedSentenceRatio = shared / unique.size;
  row.sentenceCount = unique.size;
  if (row.sharedSentenceRatio >= SHARED_SENTENCE_FAIL) {
    fail(
      `${row.route} — ${(row.sharedSentenceRatio * 100).toFixed(0)}% of its sentences also appear on another page`,
    );
  } else if (row.sharedSentenceRatio >= SHARED_SENTENCE_WARN) {
    warn(
      `${row.route} — ${(row.sharedSentenceRatio * 100).toFixed(0)}% of its sentences also appear on another page`,
    );
  }
}

/* ------------------------------------------------------------------ *
 * 4. Hidden text                                                      *
 * ------------------------------------------------------------------ */

const HIDDEN_PATTERNS = [
  { name: 'text-indent off-screen', re: /text-indent:\s*-\d{4,}/i },
  { name: 'absolute far-left positioning', re: /left:\s*-\d{4,}px/i },
  { name: 'font-size: 0', re: /font-size:\s*0(px|rem|em)?[;}]/i },
  { name: 'display:none on a heading', re: /<h[1-3][^>]*style="[^"]*display:\s*none/i },
  { name: 'white text', re: /color:\s*#fff(fff)?[^;}]*;[^}]*background(-color)?:\s*#fff/i },
  { name: 'opacity: 0 on text', re: /opacity:\s*0[;}](?![.\d])/i },
];

for (const row of rows) {
  for (const pattern of HIDDEN_PATTERNS) {
    if (pattern.re.test(row.html)) warn(`${row.route} — possible hidden text: ${pattern.name}`);
  }
}

/* ------------------------------------------------------------------ *
 * 5. Link stuffing                                                    *
 * ------------------------------------------------------------------ */

for (const row of rows) {
  const density = row.internalLinks.length / Math.max(row.words.length, 1);
  row.linkDensity = density;
  if (density >= LINK_DENSITY_WARN) {
    warn(
      `${row.route} — ${row.internalLinks.length} internal links in ${row.words.length} words (${(density * 100).toFixed(1)} per 100)`,
    );
  }
}

function tallyAnchors(pick) {
  const tally = new Map();
  for (const row of rows) {
    for (const key of new Set(pick(row).map((l) => `${l.text}→${l.href}`))) {
      tally.set(key, (tally.get(key) ?? 0) + 1);
    }
  }
  return [...tally.entries()]
    .map(([key, count]) => {
      const [text, href] = key.split('→');
      const target = pages.find((p) => p.route === href);
      const exact = Boolean(target && target.keyword && text === target.keyword.toLowerCase());
      return { text, href, count, exact };
    })
    .sort((a, b) => b.count - a.count);
}

const cardAnchors = tallyAnchors((r) => r.internalLinks).filter(
  (a) => a.count > ANCHOR_REPEAT_WARN,
);
const proseAnchors = tallyAnchors((r) => r.proseLinks);

/* An exact-match keyword anchor repeated across many pages of running prose
   is the pattern that reads as a link scheme. Card titles are excluded. */
for (const entry of proseAnchors) {
  if (entry.exact && entry.count > ANCHOR_REPEAT_WARN) {
    fail(`Exact-match keyword anchor in prose: "${entry.text}" -> ${entry.href} on ${entry.count} pages`);
  } else if (entry.count > ANCHOR_REPEAT_WARN) {
    warn(`Prose anchor "${entry.text}" -> ${entry.href} repeated on ${entry.count} pages`);
  }
}

/* ------------------------------------------------------------------ *
 * 6. Auto-generation tells                                            *
 * ------------------------------------------------------------------ */

/** Headings reduced to a shape by removing capitalised words (place names). */
function headingShape(heading) {
  return heading
    .replace(/\b[A-Z][a-z]+\b/g, '·')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

for (const group of ['State', 'City', 'Guide', 'Product']) {
  const set = rows.filter((r) => family(r.route) === group);
  if (set.length < 3) continue;

  const shapes = new Map();
  for (const row of set) {
    for (const heading of row.headings) {
      const shape = headingShape(heading);
      if (shape.length < 8) continue;
      if (!shapes.has(shape)) shapes.set(shape, new Set());
      shapes.get(shape).add(row.route);
    }
  }
  const templated = [...shapes.entries()]
    .filter(([, routes]) => routes.size > set.length * 0.5)
    .map(([shape, routes]) => ({ shape, count: routes.size }));

  for (const entry of templated) {
    warn(
      `${group} pages — heading pattern "${entry.shape}" appears on ${entry.count} of ${set.length} pages`,
    );
  }

  // Opening sentences: if most pages in a family start the same way, the copy
  // was produced from a pattern rather than written.
  const openings = new Map();
  for (const row of set) {
    const first = (row.sentences[0] ?? '').split(/\s+/).slice(0, 5).join(' ').toLowerCase();
    if (!first) continue;
    openings.set(first, (openings.get(first) ?? 0) + 1);
  }
  for (const [opening, count] of openings) {
    if (count > Math.max(2, set.length * 0.25)) {
      warn(`${group} pages — ${count} of ${set.length} open with "${opening}…"`);
    }
  }
}

/* ------------------------------------------------------------------ *
 * Report                                                              *
 * ------------------------------------------------------------------ */

const byFamily = new Map();
for (const row of rows) {
  const key = family(row.route);
  if (!byFamily.has(key)) byFamily.set(key, []);
  byFamily.get(key).push(row);
}

const esc = (v) => String(v).replace(/\|/g, '\\|');
const avg = (list, pick) => list.reduce((sum, r) => sum + pick(r), 0) / list.length;

const lines = [];
lines.push('# Spam-signal audit');
lines.push('');
lines.push(
  `Generated from \`dist/client\`. ${rows.length} indexable pages checked against the patterns search engines penalise: keyword stuffing, thin content, doorway duplication, hidden text, link stuffing and auto-generation tells.`,
);
lines.push('');
lines.push('## Thresholds');
lines.push('');
lines.push('| Signal | Warn | Fail |');
lines.push('| --- | --- | --- |');
lines.push(`| Primary keyword density | ${KEYWORD_DENSITY_WARN * 100}% | ${KEYWORD_DENSITY_FAIL * 100}% |`);
lines.push(`| Body word count | under ${THIN_WARN} | under ${THIN_FAIL} |`);
lines.push(`| Sentences shared with another page | ${SHARED_SENTENCE_WARN * 100}% | ${SHARED_SENTENCE_FAIL * 100}% |`);
lines.push(`| Internal links per 100 words | ${LINK_DENSITY_WARN * 100} | — |`);
lines.push(`| Exact-match commercial anchor repeats | ${ANCHOR_REPEAT_WARN} | any |`);
lines.push('');

lines.push('## Result');
lines.push('');
if (failures.length === 0) {
  lines.push('No hard failures.');
} else {
  lines.push(`**${failures.length} failure(s):**`);
  lines.push('');
  for (const f of failures) lines.push(`- ${f}`);
}
lines.push('');
if (warnings.length > 0) {
  lines.push(`**${warnings.length} warning(s)** — worth reading, not blocking:`);
  lines.push('');
  for (const w of warnings) lines.push(`- ${w}`);
  lines.push('');
}

lines.push('## By page family');
lines.push('');
lines.push('| Family | Pages | Avg body words | Avg keyword density | Avg shared sentences | Avg links/100 words |');
lines.push('| --- | ---: | ---: | ---: | ---: | ---: |');
for (const [name, list] of [...byFamily.entries()].sort()) {
  lines.push(
    `| ${name} | ${list.length} | ${Math.round(avg(list, (r) => r.words.length))} | ${(avg(list, (r) => r.density) * 100).toFixed(2)}% | ${(avg(list, (r) => r.sharedSentenceRatio ?? 0) * 100).toFixed(1)}% | ${(avg(list, (r) => r.linkDensity ?? 0) * 100).toFixed(1)} |`,
  );
}
lines.push('');

lines.push('## Every page');
lines.push('');
lines.push('| URL | Family | Body words | Primary keyword | Times used | Density | Shared prose | Shared incl. cards | Links/100 words |');
lines.push('| --- | --- | ---: | --- | ---: | ---: | ---: | ---: | ---: |');
for (const row of rows) {
  lines.push(
    `| ${esc(row.route)} | ${family(row.route)} | ${row.words.length} | ${esc(row.keyword || '—')} | ${row.hits} | ${(row.density * 100).toFixed(2)}% | ${((row.sharedSentenceRatio ?? 0) * 100).toFixed(0)}% | ${((row.sharedIncludingCards ?? 0) * 100).toFixed(0)}% | ${((row.linkDensity ?? 0) * 100).toFixed(1)} |`,
  );
}
lines.push('');

lines.push('## Anchors in running prose');
lines.push('');
lines.push(
  'Card titles, breadcrumbs and contents lists are excluded here. A card whose title is the product name is how every catalogue works; an exact-match keyword anchor dropped into prose across many pages is the pattern that reads as a link scheme.',
);
lines.push('');
const topProse = proseAnchors.filter((a) => a.count > 2).slice(0, 25);
if (topProse.length === 0) {
  lines.push('No prose anchor is repeated on more than two pages.');
} else {
  lines.push('| Anchor text | Target | Pages | Exact keyword match |');
  lines.push('| --- | --- | ---: | --- |');
  for (const entry of topProse) {
    lines.push(
      `| ${esc(entry.text)} | ${esc(entry.href)} | ${entry.count} | ${entry.exact ? '**yes**' : 'no'} |`,
    );
  }
}
lines.push('');

lines.push('## Card and listing anchors, for context');
lines.push('');
lines.push('These are navigational. They are listed so the numbers above are not read in isolation.');
lines.push('');
if (cardAnchors.length === 0) {
  lines.push('None above the threshold.');
} else {
  lines.push('| Anchor text | Target | Pages |');
  lines.push('| --- | --- | ---: |');
  for (const entry of cardAnchors.slice(0, 20)) {
    lines.push(`| ${esc(entry.text)} | ${esc(entry.href)} | ${entry.count} |`);
  }
}
lines.push('');

fs.mkdirSync(REPORTS, { recursive: true });
fs.writeFileSync(path.join(REPORTS, '12-spam-signal-audit.md'), `${lines.join('\n')}\n`);

console.log(`Pages checked:        ${rows.length}`);
for (const [name, list] of [...byFamily.entries()].sort()) {
  console.log(
    `  ${name.padEnd(13)} ${String(list.length).padStart(3)} pages | ${Math.round(avg(list, (r) => r.words.length))} words | keyword ${(avg(list, (r) => r.density) * 100).toFixed(2)}% | shared ${(avg(list, (r) => r.sharedSentenceRatio ?? 0) * 100).toFixed(1)}%`,
  );
}
console.log('');
if (warnings.length > 0) {
  console.log(`WARNINGS (${warnings.length}):`);
  for (const w of warnings) console.log(`  · ${w}`);
  console.log('');
}
if (failures.length > 0) {
  console.error(`FAILURES (${failures.length}):`);
  for (const f of failures) console.error(`  ✗ ${f}`);
  process.exit(1);
}
console.log('No spam signals above threshold.');
