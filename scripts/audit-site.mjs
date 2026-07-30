/**
 * Post-build audit over the generated `dist/client` output.
 *
 * Checks the things a crawler would: broken internal links, orphans, duplicate
 * or missing metadata, H1 counts, canonicals, trailing slashes, product URL
 * depth, sitemap and robots correctness, JSON-LD validity against visible
 * content, image attributes, banned copy, and internal-link density rules.
 *
 * Writes machine-readable reports into `reports/` and exits non-zero on any
 * failure so it can gate a deploy.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist/client');
const REPORTS = path.join(ROOT, 'reports');
const SITE = 'https://lipboxes.com';

const failures = [];
const warnings = [];
const fail = (message) => failures.push(message);
const warn = (message) => warnings.push(message);

/* ------------------------------------------------------------------ *
 * Load the built output                                               *
 * ------------------------------------------------------------------ */

if (!fs.existsSync(DIST)) {
  console.error('dist/client not found. Run `npm run build` first.');
  process.exit(1);
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const allFiles = walk(DIST);
const htmlFiles = allFiles.filter((f) => f.endsWith('.html'));

/** Maps a built file to its canonical site path. */
function toRoute(file) {
  let rel = path.relative(DIST, file).split(path.sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel === '404.html') return '/404/';
  rel = rel.replace(/index\.html$/, '');
  return `/${rel}`;
}

const pages = htmlFiles.map((file) => {
  const html = fs.readFileSync(file, 'utf8');
  return { file, route: toRoute(file), html };
});

const routeSet = new Set(pages.map((p) => p.route));

/* ------------------------------------------------------------------ *
 * Tiny extraction helpers (regex over built HTML, no DOM needed)      *
 * ------------------------------------------------------------------ */

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&middot;/g, '·')
    .replace(/&nbsp;/g, ' ')
    .replace(/&times;/g, '×');

const stripTags = (s) => decode(s.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();

function meta(html, attr, value) {
  const re = new RegExp(
    `<meta[^>]*${attr}=["']${value}["'][^>]*content=["']([^"']*)["']`,
    'i',
  );
  const alt = new RegExp(
    `<meta[^>]*content=["']([^"']*)["'][^>]*${attr}=["']${value}["']`,
    'i',
  );
  const m = html.match(re) ?? html.match(alt);
  return m ? decode(m[1]) : null;
}

function title(html) {
  const m = html.match(/<title>([\s\S]*?)<\/title>/i);
  return m ? decode(m[1]).trim() : null;
}

function canonical(html) {
  const m = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  return m ? decode(m[1]) : null;
}

function h1s(html) {
  return [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => stripTags(m[1]));
}

function headings(html) {
  return [...html.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)].map((m) => ({
    level: Number(m[1][1]),
    text: stripTags(m[2]),
  }));
}

/** Body HTML with header, footer, nav and breadcrumb chrome removed. */
function editorialBody(html) {
  let body = html.match(/<main[^>]*>([\s\S]*)<\/main>/i)?.[1] ?? html;
  body = body
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '');
  return body;
}

function internalLinks(html) {
  return [...html.matchAll(/<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)]
    .map((m) => ({ href: decode(m[1]), text: stripTags(m[2]) }))
    .filter((link) => link.href.startsWith('/'));
}

function jsonLd(html) {
  return [...html.matchAll(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  )].map((m) => {
    try {
      return JSON.parse(m[1]);
    } catch (error) {
      fail(`Invalid JSON-LD: ${error.message}`);
      return null;
    }
  }).filter(Boolean);
}

function images(html) {
  return [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => {
    const tag = m[0];
    const get = (attr) => tag.match(new RegExp(`${attr}=["']([^"']*)["']`, 'i'))?.[1] ?? null;
    // An empty alt is emitted as a bare `alt` attribute. That is valid HTML and
    // is exactly how a decorative image should be marked, so treat it as "".
    const altValue = /\balt(?=[\s>])/.test(tag) && !/\balt=/.test(tag) ? '' : get('alt');
    return {
      tag,
      src: get('src'),
      alt: altValue,
      width: get('width'),
      height: get('height'),
      loading: get('loading'),
      srcset: get('srcset'),
      sizes: get('sizes'),
      fetchpriority: get('fetchpriority'),
    };
  });
}

/* ------------------------------------------------------------------ *
 * 1. Product URLs live at the root                                    *
 * ------------------------------------------------------------------ */

const productSlugs = JSON.parse(
  fs.readFileSync(path.join(REPORTS, 'image-manifest.json'), 'utf8'),
).reduce((set, entry) => set.add(entry.slug), new Set());
// The hub is not a product page.
productSlugs.delete('lip-balm-packaging');

for (const slug of productSlugs) {
  const route = `/${slug}/`;
  if (!routeSet.has(route)) fail(`Missing product page: ${route}`);
  if (routeSet.has(`/products/${slug}/`)) {
    fail(`Product page also exists under /products/: /products/${slug}/`);
  }
}
for (const route of routeSet) {
  if (/^\/products\/.+/.test(route)) {
    fail(`Nested page under /products/ found: ${route}`);
  }
  if (route !== '/' && !route.endsWith('/')) {
    fail(`Route without a trailing slash: ${route}`);
  }
  if (/[A-Z]/.test(route) || route.includes('_') || /\.\w+\/$/.test(route)) {
    fail(`Route violates URL rules (case, underscore or extension): ${route}`);
  }
}

/* ------------------------------------------------------------------ *
 * 2. Metadata: uniqueness, length, canonical, H1                      *
 * ------------------------------------------------------------------ */

const metaRows = [];
const titleMap = new Map();
const descMap = new Map();

for (const page of pages) {
  const t = title(page.html);
  const d = meta(page.html, 'name', 'description');
  const c = canonical(page.html);
  const robots = meta(page.html, 'name', 'robots') ?? '';
  const noindex = robots.includes('noindex');
  const hs = h1s(page.html);
  const schemaTypes = jsonLd(page.html)
    .flatMap((graph) => graph['@graph'] ?? [graph])
    .map((node) => node['@type'])
    .filter(Boolean);

  if (!t) fail(`${page.route} — missing <title>`);
  if (!d) fail(`${page.route} — missing meta description`);
  if (!c) fail(`${page.route} — missing canonical`);
  if (hs.length !== 1) fail(`${page.route} — ${hs.length} H1 elements (expected 1)`);

  if (t) {
    if (!noindex && (t.length < 30 || t.length > 65)) {
      warn(`${page.route} — title is ${t.length} chars (target 50–60): "${t}"`);
    }
    if (titleMap.has(t)) fail(`Duplicate title on ${page.route} and ${titleMap.get(t)}: "${t}"`);
    else titleMap.set(t, page.route);
  }
  if (d) {
    if (!noindex && (d.length < 110 || d.length > 140)) {
      warn(`${page.route} — description is ${d.length} chars (target 120–130)`);
    }
    if (descMap.has(d)) fail(`Duplicate meta description on ${page.route} and ${descMap.get(d)}`);
    else descMap.set(d, page.route);
  }
  if (c) {
    const expected = `${SITE}${page.route}`;
    if (c !== expected) fail(`${page.route} — canonical is ${c}, expected ${expected}`);
    if (c.includes('?')) fail(`${page.route} — canonical contains a query string`);
    if (page.route !== '/' && c === `${SITE}/`) {
      fail(`${page.route} — canonicalised to the homepage`);
    }
  }

  // Heading order must not skip a level.
  const hs2 = headings(page.html);
  for (let i = 1; i < hs2.length; i += 1) {
    if (hs2[i].level - hs2[i - 1].level > 1) {
      warn(
        `${page.route} — heading jumps h${hs2[i - 1].level} to h${hs2[i].level}: "${hs2[i].text.slice(0, 50)}"`,
      );
    }
  }

  // Open Graph and Twitter cards.
  for (const [attr, key] of [
    ['property', 'og:title'],
    ['property', 'og:description'],
    ['property', 'og:image'],
    ['property', 'og:url'],
    ['name', 'twitter:card'],
    ['name', 'twitter:title'],
    ['name', 'twitter:image'],
  ]) {
    if (!meta(page.html, attr, key)) fail(`${page.route} — missing ${key}`);
  }

  if (!/<html[^>]*lang=["']en["']/i.test(page.html)) {
    fail(`${page.route} — missing or wrong html lang`);
  }
  if (!/class=["']skip-link["']/.test(page.html)) {
    fail(`${page.route} — missing skip-to-content link`);
  }

  metaRows.push({
    url: `${SITE}${page.route}`,
    title: t,
    titleLength: t?.length ?? 0,
    description: d,
    descriptionLength: d?.length ?? 0,
    h1: hs[0] ?? null,
    canonical: c,
    indexable: !noindex,
    schemaTypes: [...new Set(schemaTypes)],
  });
}

/* ------------------------------------------------------------------ *
 * 3. Internal links: broken, orphans, density, anchor quality         *
 * ------------------------------------------------------------------ */

const inbound = new Map([...routeSet].map((r) => [r, new Set()]));
const linkRows = [];
const publicFiles = new Set(
  allFiles.map((f) => '/' + path.relative(DIST, f).split(path.sep).join('/')),
);
const genericAnchors = ['click here', 'read more', 'more', 'view', 'explore', 'here', 'link', 'this page'];

/** Links inside body prose only — the editorial links the rules apply to. */
const editorialLinks = [];

for (const page of pages) {
  const links = internalLinks(page.html);
  for (const paragraph of editorialBody(page.html).match(/<p\b[^>]*>[\s\S]*?<\/p>/gi) ?? []) {
    // Paragraphs that are part of a repeated component (a form's alternative
    // route, an article footer, a section note) are template chrome rather than
    // editorial copy, so their anchors are not held to the variation rule.
    if (/class="[^"]*(qform__alt|a-footer|a-footer__nav|sec-head__note|feed-note|nf__note|channel__)/.test(paragraph)) {
      continue;
    }
    for (const link of internalLinks(paragraph)) {
      editorialLinks.push({ from: page.route, ...link });
    }
  }
  const contextualSelfLinks = internalLinks(editorialBody(page.html)).filter(
    (l) => l.href.split('#')[0].split('?')[0] === page.route,
  );
  for (const selfLink of contextualSelfLinks) {
    // Header, footer, breadcrumb and card links legitimately point at the
    // current page; a contextual body link should not.
    if (selfLink.text && !/^(Home|Products|Blog|Lip Boxes)$/i.test(selfLink.text)) {
      fail(`${page.route} — contextual link to itself: "${selfLink.text}"`);
    }
  }
  for (const link of links) {
    const target = link.href.split('#')[0].split('?')[0];
    if (target === '' || target === page.route) continue;
    const isFile = publicFiles.has(target);
    if (!routeSet.has(target) && !isFile) {
      fail(`${page.route} — broken internal link to ${target}`);
      continue;
    }
    if (routeSet.has(target)) inbound.get(target).add(page.route);
    if (!target.endsWith('/') && !isFile) {
      fail(`${page.route} — internal link without a trailing slash: ${target}`);
    }
    const anchor = link.text.toLowerCase().trim();
    if (genericAnchors.includes(anchor)) {
      fail(`${page.route} — generic anchor text "${link.text}" -> ${target}`);
    }
    linkRows.push({ from: page.route, to: target, anchor: link.text });
  }
}

for (const [route, sources] of inbound) {
  if (route === '/' || route === '/404/') continue;
  if (sources.size === 0) fail(`Orphan page (no internal links in): ${route}`);
  if (productSlugs.has(route.replace(/\//g, '')) && sources.size < 2) {
    fail(`Product page has fewer than 2 inbound pages: ${route}`);
  }
}

/* ------------------------------------------------------------------ *
 * 4. Editorial link density inside content sections                   *
 * ------------------------------------------------------------------ */

for (const page of pages) {
  const body = editorialBody(page.html);
  // One contextual link per <section>; product grids and cards are excluded.
  const sections = [...body.matchAll(/<section\b[\s\S]*?<\/section>/gi)].map((m) => m[0]);
  for (const section of sections) {
    if (
      /class="[^"]*(grid--products|info-cards|channels|ref-list|nf__list|post-list|archive|kv|footer-col|spec-grid)/.test(
        section,
      )
    ) {
      continue;
    }
    const paragraphs = [...section.matchAll(/<p\b[\s\S]*?<\/p>/gi)].map((m) => m[0]);
    let contextual = 0;
    for (const paragraph of paragraphs) {
      const count = (paragraph.match(/<a\b[^>]*href="\/[^"]*"/g) ?? []).length;
      if (count > 1) {
        fail(
          `${page.route} — ${count} internal links in one paragraph: ${stripTags(paragraph).slice(0, 90)}`,
        );
      }
      contextual += count;
    }
    for (const item of section.match(/<li\b[^>]*>[\s\S]*?<\/li>/gi) ?? []) {
      contextual += (item.match(/<a\b[^>]*href="\/[^"]*"/g) ?? []).length;
    }
    if (contextual > 1) {
      const heading = stripTags(section.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)?.[1] ?? '(no heading)');
      warn(
        `${page.route} — ${contextual} contextual links in section "${heading.slice(0, 60)}"`,
      );
    }
  }
}

/* ------------------------------------------------------------------ *
 * 5. Repeated exact-match anchors sitewide                            *
 * ------------------------------------------------------------------ */

/*
 * Only editorial anchors are checked. Header, footer, breadcrumb, product-grid
 * and repeated call-to-action anchors are template chrome, and the rules
 * exclude them from the one-link and varied-anchor requirements.
 */
const anchorCounts = new Map();
for (const link of editorialLinks) {
  const anchor = link.text.toLowerCase().trim();
  if (!anchor) continue;
  const key = `${anchor}|${link.href}`;
  const entry = anchorCounts.get(key) ?? { count: 0, pages: new Set() };
  entry.count += 1;
  entry.pages.add(link.from);
  anchorCounts.set(key, entry);
}
for (const [key, entry] of anchorCounts) {
  if (entry.count > 3) {
    warn(
      `Editorial anchor repeated ${entry.count} times: "${key.split('|')[0]}" -> ${key.split('|')[1]}`,
    );
  }
}

/* ------------------------------------------------------------------ *
 * 6. Images                                                           *
 * ------------------------------------------------------------------ */

const imageRows = [];
for (const page of pages) {
  const imgs = images(page.html);
  let firstContent = true;
  for (const img of imgs) {
    if (!img.width || !img.height) {
      fail(`${page.route} — image without width/height: ${img.src}`);
    }
    if (img.alt === null) {
      fail(`${page.route} — image with no alt attribute: ${img.src}`);
    }
    if (img.alt && img.alt.length > 125) {
      warn(`${page.route} — alt text over 125 chars: ${img.alt.slice(0, 60)}…`);
    }
    if (img.alt) {
      const words = img.alt.toLowerCase().split(/\s+/);
      const counts = {};
      for (const w of words) counts[w] = (counts[w] ?? 0) + 1;
      const stuffed = Object.entries(counts).find(([w, c]) => c > 2 && w.length > 3);
      if (stuffed) warn(`${page.route} — alt text repeats "${stuffed[0]}": ${img.alt}`);
    }
    if (firstContent && img.alt !== '') {
      if (img.loading === 'lazy') {
        warn(`${page.route} — first content image is lazy-loaded: ${img.src}`);
      }
      firstContent = false;
    }
    if (img.src && !img.srcset && img.alt !== '') {
      warn(`${page.route} — image without srcset: ${img.src}`);
    }
    imageRows.push({ page: page.route, ...img, tag: undefined });
  }
}

/* ------------------------------------------------------------------ *
 * 7. Structured data matches visible content                          *
 * ------------------------------------------------------------------ */

for (const page of pages) {
  const graphs = jsonLd(page.html);
  const nodes = graphs.flatMap((g) => g['@graph'] ?? [g]);
  if (page.route !== '/404/' && nodes.length === 0) {
    fail(`${page.route} — no JSON-LD`);
  }
  for (const graph of graphs) {
    if (!graph['@context']) fail(`${page.route} — JSON-LD missing @context`);
  }

  const visible = stripTags(page.html);

  const product = nodes.find((n) => n['@type'] === 'Product');
  if (product) {
    const offer = product.offers;
    if (!offer) fail(`${page.route} — Product without an Offer`);
    else {
      if (offer.price !== '0.30') fail(`${page.route} — Offer price is ${offer.price}, expected "0.30"`);
      if (offer.priceCurrency !== 'USD') fail(`${page.route} — Offer currency is not USD`);
      if (offer.itemCondition !== 'https://schema.org/NewCondition') {
        fail(`${page.route} — Offer itemCondition is not NewCondition`);
      }
      if (offer.url !== `${SITE}${page.route}`) {
        fail(`${page.route} — Offer url ${offer.url} does not match the canonical`);
      }
      if (!offer.availability) fail(`${page.route} — Offer without availability`);
      if (!offer.shippingDetails) warn(`${page.route} — Offer without shippingDetails`);
      if (!offer.hasMerchantReturnPolicy) warn(`${page.route} — Offer without hasMerchantReturnPolicy`);
      if (!offer.seller) fail(`${page.route} — Offer without a seller`);
    }
    if (!product.brand) fail(`${page.route} — Product without a brand`);
    if (!Array.isArray(product.image) || product.image.length === 0) {
      fail(`${page.route} — Product without images`);
    }
    if (product.name !== h1s(page.html)[0]) {
      fail(`${page.route} — Product name "${product.name}" does not match the H1 "${h1s(page.html)[0]}"`);
    }
    // The visible page must carry the pricing statement backing the Offer.
    if (!visible.includes('Price starts from $0.30 per piece for large-volume orders')) {
      fail(`${page.route} — Product page is missing the visible starting-price statement`);
    }
    // Ratings must never be asserted without visible review content.
    if (product.aggregateRating || product.review) {
      if (!/Customer reviews/.test(page.html)) {
        fail(`${page.route} — aggregateRating or review present without visible reviews`);
      }
    }
    for (const forbidden of ['sku', 'gtin', 'gtin13', 'gtin8', 'mpn', 'priceValidUntil']) {
      if (product[forbidden] || product.offers?.[forbidden]) {
        fail(`${page.route} — Product asserts an unverifiable "${forbidden}"`);
      }
    }
  }

  const faq = nodes.find((n) => n['@type'] === 'FAQPage');
  if (faq) {
    for (const question of faq.mainEntity ?? []) {
      if (!visible.includes(stripTags(question.name))) {
        fail(`${page.route} — FAQ question not visible on the page: "${question.name.slice(0, 60)}"`);
      }
      const answer = stripTags(question.acceptedAnswer.text);
      if (!visible.includes(answer.slice(0, 60))) {
        fail(`${page.route} — FAQ answer not visible on the page for "${question.name.slice(0, 50)}"`);
      }
    }
  }

  const crumb = nodes.find((n) => n['@type'] === 'BreadcrumbList');
  if (crumb) {
    for (const item of crumb.itemListElement) {
      if (item.item && !item.item.endsWith('/')) {
        fail(`${page.route} — breadcrumb URL without a trailing slash: ${item.item}`);
      }
    }
  }

  const org = nodes.find((n) => n['@type'] === 'Organization');
  if (org) {
    if (org.address) warn(`${page.route} — Organization asserts a postal address; verify it is real`);
    if (org.aggregateRating) fail(`${page.route} — Organization asserts an aggregateRating`);
  }
}

if (!routeSet.has('/')) fail('Missing homepage');
const home = pages.find((p) => p.route === '/');
const homeTypes = jsonLd(home.html).flatMap((g) => g['@graph'] ?? [g]).map((n) => n['@type']);
for (const required of ['Organization', 'WebSite']) {
  if (!homeTypes.includes(required)) fail(`Homepage missing ${required} schema`);
}

/* ------------------------------------------------------------------ *
 * 8. Sitemap and robots                                               *
 * ------------------------------------------------------------------ */

const sitemapPath = path.join(DIST, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) fail('Missing /sitemap.xml');
else {
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const seen = new Set();
  for (const loc of locs) {
    if (seen.has(loc)) fail(`Duplicate sitemap entry: ${loc}`);
    seen.add(loc);
    if (!loc.startsWith(`${SITE}/`)) fail(`Sitemap entry on the wrong host: ${loc}`);
    if (loc.includes('?')) fail(`Sitemap entry with a query string: ${loc}`);
    if (loc.includes('/_astro/')) continue;
    if (!loc.endsWith('/')) fail(`Sitemap entry without a trailing slash: ${loc}`);
    const route = loc.replace(SITE, '');
    if (!routeSet.has(route)) fail(`Sitemap entry that is not a built page: ${loc}`);
    const page = pages.find((p) => p.route === route);
    if (page && (meta(page.html, 'name', 'robots') ?? '').includes('noindex')) {
      fail(`Sitemap includes a noindex page: ${loc}`);
    }
  }
  if (locs.some((l) => l.includes('/404'))) fail('Sitemap includes a 404 page');
  for (const slug of productSlugs) {
    if (!seen.has(`${SITE}/${slug}/`)) fail(`Sitemap missing product URL: /${slug}/`);
  }
  const indexable = pages.filter(
    (p) => !(meta(p.html, 'name', 'robots') ?? '').includes('noindex'),
  );
  for (const page of indexable) {
    if (!seen.has(`${SITE}${page.route}`)) {
      fail(`Indexable page missing from the sitemap: ${page.route}`);
    }
  }
  if (!xml.includes('<image:image>')) warn('Sitemap has no image entries');
}

const robotsPath = path.join(DIST, 'robots.txt');
if (!fs.existsSync(robotsPath)) fail('Missing /robots.txt');
else {
  const txt = fs.readFileSync(robotsPath, 'utf8');
  if (!/^User-agent: \*/m.test(txt)) fail('robots.txt missing "User-agent: *"');
  if (!/^Allow: \/$/m.test(txt)) fail('robots.txt missing "Allow: /"');
  if (!txt.includes(`Sitemap: ${SITE}/sitemap.xml`)) fail('robots.txt missing the sitemap line');
  for (const blocked of ['/_astro', '.css', '.js', '/fonts', '.png', '.webp']) {
    if (new RegExp(`^Disallow: .*${blocked.replace('.', '\\.')}`, 'm').test(txt)) {
      fail(`robots.txt blocks a render-critical resource: ${blocked}`);
    }
  }
}

if (!fs.existsSync(path.join(DIST, '404.html'))) fail('Missing 404.html');
if (!fs.existsSync(path.join(DIST, 'rss.xml'))) warn('Missing /rss.xml');

/* ------------------------------------------------------------------ *
 * 9. Copy quality                                                     *
 * ------------------------------------------------------------------ */

const banned = [
  'introducing', 'functional', 'functionality', 'embrace', 'versatility',
  'look no further', 'unparalleled', 'function', 'functions', 'tailor-made',
  'robust', 'paramount', 'crafted', 'crafting', 'craftsmanship', 'discover',
  'discovering', 'elevate', 'elevates', 'elevating', 'elevated', 'aesthetic',
  'aesthetics', 'unleash', 'versatile', 'verstile', 'enhance', 'enhances',
  'enhancing', 'enhanced', 'enhancement', 'exquisite', 'precious', 'distinctive',
  'exceptional', 'dive into a world', 'bring', 'brings', 'bringing', 'arrays',
  'perfect for', 'expert', 'experts', 'expertise', 'best',
];
const placeholders = [
  'lorem ipsum', 'dolor sit amet', 'todo', 'tbd', 'fixme', 'coming soon',
  'placeholder', 'xxx', 'your text here', 'sample text', 'as an ai',
  'ai-generated', 'language model', 'add to cart', 'buy now',
];

for (const page of pages) {
  const text = stripTags(editorialBody(page.html));
  const lower = text.toLowerCase();
  for (const word of banned) {
    const re = new RegExp(`\\b${word.replace(/[-\s]/g, '[-\\s]')}\\b`, 'gi');
    const hits = text.match(re);
    if (hits) {
      // "MOOD ENHANCER MATTE" etc. can appear inside alt text describing a real
      // photographed product; flag it so it can be reviewed rather than failing.
      fail(`${page.route} — banned word "${word}" x${hits.length}`);
    }
  }
  for (const phrase of placeholders) {
    if (lower.includes(phrase)) fail(`${page.route} — placeholder or debug text: "${phrase}"`);
  }
  const words = text.split(/\s+/).filter(Boolean).length;
  if (words < 300 && page.route !== '/404/') {
    warn(`${page.route} — thin page: ${words} words`);
  }
  if (/(Conclusion|Final Thoughts)\s*<\/h[23]>/i.test(page.html)) {
    fail(`${page.route} — uses a Conclusion or Final Thoughts heading`);
  }
  if (/\p{Extended_Pictographic}/u.test(stripTags(page.html))) {
    warn(`${page.route} — contains an emoji character`);
  }
}

/* ------------------------------------------------------------------ *
 * 10. No secrets in client output                                     *
 * ------------------------------------------------------------------ */

const clientAssets = allFiles.filter((f) => /\.(js|mjs|css|html)$/.test(f));
const secretPatterns = [
  /SMTP_PASS/,
  /SMTP_HOST/,
  /SMTP_USER/,
  /SMTP_FROM_EMAIL/,
  /nodemailer/,
  /createTransport/,
];
// Also check for the configured mail addresses themselves, read from the
// environment so no real address is hardcoded in this repository.
for (const key of ['SMTP_TO', 'SMTP_USER', 'SMTP_HOST']) {
  const value = process.env[key];
  if (value && value.trim()) {
    secretPatterns.push(new RegExp(value.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
  }
}
for (const file of clientAssets) {
  const content = fs.readFileSync(file, 'utf8');
  for (const pattern of secretPatterns) {
    if (pattern.test(content)) {
      fail(`Server-only value leaked into client output: ${pattern} in ${path.relative(ROOT, file)}`);
    }
  }
}

/* ------------------------------------------------------------------ *
 * Reports                                                             *
 * ------------------------------------------------------------------ */

fs.mkdirSync(REPORTS, { recursive: true });
fs.writeFileSync(
  path.join(REPORTS, 'metadata-report.json'),
  JSON.stringify(metaRows.sort((a, b) => a.url.localeCompare(b.url)), null, 2) + '\n',
);
fs.writeFileSync(
  path.join(REPORTS, 'internal-link-map.json'),
  JSON.stringify(
    {
      editorialLinks,
      links: linkRows,
      inbound: Object.fromEntries(
        [...inbound].map(([route, sources]) => [route, [...sources].sort()]),
      ),
    },
    null,
    2,
  ) + '\n',
);
fs.writeFileSync(
  path.join(REPORTS, 'image-report.json'),
  JSON.stringify(imageRows, null, 2) + '\n',
);
fs.writeFileSync(
  path.join(REPORTS, 'url-list.txt'),
  [...routeSet].sort().map((r) => `${SITE}${r}`).join('\n') + '\n',
);

/* ------------------------------------------------------------------ */

console.log(`Pages crawled:      ${pages.length}`);
console.log(`Internal links:     ${linkRows.length}`);
console.log(`Images checked:     ${imageRows.length}`);
console.log(`Product pages:      ${productSlugs.size}`);
console.log('');

if (warnings.length) {
  console.log(`WARNINGS (${warnings.length}):`);
  for (const w of warnings) console.log(`  · ${w}`);
  console.log('');
}
if (failures.length) {
  console.log(`FAILURES (${failures.length}):`);
  for (const f of failures) console.log(`  ✗ ${f}`);
  process.exit(1);
}
console.log('All checks passed.');
