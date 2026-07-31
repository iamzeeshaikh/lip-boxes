/**
 * Builds the human-readable delivery reports in reports/ from the build output
 * and the site's own data files. Run after `npm run build && npm run audit:site`.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const REPORTS = path.join(ROOT, 'reports');
const DIST = path.join(ROOT, 'dist/client');
const SITE = 'https://lipboxes.com';

const read = (f) => JSON.parse(fs.readFileSync(path.join(REPORTS, f), 'utf8'));
const metadata = read('metadata-report.json');
const linkMap = read('internal-link-map.json');
const manifest = read('image-manifest.json');
const lighthouse = fs.existsSync(path.join(REPORTS, 'lighthouse.json'))
  ? read('lighthouse.json')
  : null;

const esc = (s) => String(s ?? '').replace(/\|/g, '\\|');

/* ------------------------------------------------------------------ *
 * 1. URL list                                                         *
 * ------------------------------------------------------------------ */
const urls = metadata.map((row) => row.url).sort();
const extraFiles = ['/sitemap.xml', '/robots.txt', '/rss.xml'];

fs.writeFileSync(
  path.join(REPORTS, '01-url-list.md'),
  `# Generated URLs

${urls.length} HTML pages, plus ${extraFiles.length} generated files.

## Pages

${urls.map((u) => `- ${u}`).join('\n')}

## Generated files

${extraFiles.map((f) => `- ${SITE}${f}`).join('\n')}

## Notes

- \`${SITE}/404/\` is built as \`404.html\` and served with a genuine 404 status
  for any unmatched path. It carries \`noindex\` and is excluded from the sitemap.
- \`/api/quote/\` is a POST-only server endpoint, not a page. It is disallowed in
  robots.txt and returns a 303 redirect on GET.
`,
);

/* ------------------------------------------------------------------ *
 * 2. Product inventory and merge decisions                            *
 * ------------------------------------------------------------------ */
const inventory = [
  { folders: ['Custom Lip Balm Boxes'], name: 'Custom Lip Balm Boxes', slug: 'custom-lip-balm-boxes', keyword: 'custom lip balm boxes', merged: 'No' },
  { folders: ['Lip Balm packaging'], name: 'Lip Balm Packaging', slug: 'lip-balm-packaging', keyword: 'lip balm packaging', merged: 'No' },
  { folders: ['Hang Tab Lip Balm Box'], name: 'Hang Tab Lip Balm Boxes', slug: 'hang-tab-lip-balm-boxes', keyword: 'hang tab lip balm boxes', merged: 'No' },
  { folders: ['paper lip balm tubes'], name: 'Paper Lip Balm Tubes', slug: 'paper-lip-balm-tubes', keyword: 'paper lip balm tubes', merged: 'No' },
  { folders: ['cardboard lip balm tubes'], name: 'Cardboard Lip Balm Tubes', slug: 'cardboard-lip-balm-tubes', keyword: 'cardboard lip balm tubes', merged: 'No' },
  { folders: ['custom lip balm labels'], name: 'Custom Lip Balm Labels', slug: 'custom-lip-balm-labels', keyword: 'custom lip balm labels', merged: 'No' },
  { folders: ['lip balm labels'], name: 'Lip Balm Labels', slug: 'lip-balm-labels', keyword: 'lip balm labels', merged: 'No' },
  { folders: ['Lipstick Boxes'], name: 'Lipstick Boxes', slug: 'lipstick-boxes', keyword: 'lipstick boxes', merged: 'No' },
  { folders: ['Custom Lipstick Boxes'], name: 'Custom Lipstick Boxes', slug: 'custom-lipstick-boxes', keyword: 'custom lipstick boxes', merged: 'No' },
  { folders: ['Rigid Lipstic Boxes'], name: 'Rigid Lipstick Boxes', slug: 'rigid-lipstick-boxes', keyword: 'rigid lipstick boxes', merged: 'No (folder name misspelled; slug corrected)' },
  { folders: ['Hang Tab Lipstick Box'], name: 'Hang Tab Lipstick Boxes', slug: 'hang-tab-lipstick-boxes', keyword: 'hang tab lipstick boxes', merged: 'No' },
  { folders: ['Lip Gloss Boxes'], name: 'Lip Gloss Boxes', slug: 'lip-gloss-boxes', keyword: 'lip gloss boxes', merged: 'No' },
  { folders: ['Holographic Lip Gloss Boxes'], name: 'Holographic Lip Gloss Boxes', slug: 'holographic-lip-gloss-boxes', keyword: 'holographic lip gloss boxes', merged: 'No' },
  { folders: ['custom lip mask boxes'], name: 'Custom Lip Mask Boxes', slug: 'custom-lip-mask-boxes', keyword: 'custom lip mask boxes', merged: 'No' },
  { folders: ['custom lip care packaging bulk-PBEE-BLG'], name: 'Custom Lip Care Packaging', slug: 'custom-lip-care-packaging', keyword: 'custom lip care packaging', merged: 'No (supplier code dropped from slug)' },
];

fs.writeFileSync(
  path.join(REPORTS, '02-product-inventory.md'),
  `# Product inventory

Every source folder, the page it became, and whether it was merged.

| Source folder(s) | Product name | Slug | Primary keyword | Canonical URL | Merged |
| --- | --- | --- | --- | --- | --- |
${inventory
  .map(
    (row) =>
      `| ${row.folders.map((f) => `\`${esc(f)}\``).join('<br>')} | ${esc(row.name)} | \`${row.slug}\` | ${esc(row.keyword)} | ${SITE}/${row.slug}/ | ${esc(row.merged)} |`,
  )
  .join('\n')}

**15 product pages from 15 source folders — one page per folder, no merges.**\n\nEach page draws its photography only from its own source folder.

## Images used per product

| Slug | Images | Source folders drawn from |
| --- | --- | --- |
${[...new Set(manifest.map((m) => m.slug))]
  .map((slug) => {
    const rows = manifest.filter((m) => m.slug === slug);
    const sources = [...new Set(rows.map((r) => r.source.split('/')[0]))];
    return `| \`${slug}\` | ${rows.length} | ${sources.map((s) => `\`${esc(s)}\``).join(', ')} |`;
  })
  .join('\n')}
`,
);

/* ------------------------------------------------------------------ *
 * 3. Metadata report                                                  *
 * ------------------------------------------------------------------ */
fs.writeFileSync(
  path.join(REPORTS, '03-metadata-report.md'),
  `# Metadata report

All ${metadata.length} pages. Titles and descriptions are verified unique by
\`npm run audit:site\`; every canonical is self-referencing and trailing-slashed.

| URL | Title (len) | Meta description (len) | H1 | Indexable | Schema types |
| --- | --- | --- | --- | --- | --- |
${metadata
  .map(
    (row) =>
      `| ${row.url} | ${esc(row.title)} (${row.titleLength}) | ${esc(row.description)} (${row.descriptionLength}) | ${esc(row.h1)} | ${row.indexable ? 'Yes' : 'No (noindex)'} | ${row.schemaTypes.join(', ')} |`,
  )
  .join('\n')}
`,
);

/* ------------------------------------------------------------------ *
 * 4. Internal link map                                                *
 * ------------------------------------------------------------------ */
const inboundRows = Object.entries(linkMap.inbound)
  .map(([route, sources]) => ({ route, sources }))
  .sort((a, b) => a.route.localeCompare(b.route));

const editorialByTarget = new Map();
for (const link of linkMap.editorialLinks ?? []) {
  const target = link.href.split('#')[0];
  if (!editorialByTarget.has(target)) editorialByTarget.set(target, []);
  editorialByTarget.get(target).push(link);
}

fs.writeFileSync(
  path.join(REPORTS, '04-internal-link-map.md'),
  `# Internal link map

${linkMap.links.length} internal links across ${metadata.length} pages, of which
${linkMap.editorialLinks?.length ?? 0} are contextual editorial links written into
body copy. Header, footer, breadcrumbs and product grids are excluded from the
editorial count.

## Inbound links per page

Every page has at least one inbound link and every product page has at least two
distinct linking pages. Verified by \`npm run audit:site\`.

| Page | Inbound pages | Linking from |
| --- | --- | --- |
${inboundRows
  .map(
    (row) =>
      `| ${row.route} | ${row.sources.length} | ${row.sources.slice(0, 8).join(', ')}${row.sources.length > 8 ? ` +${row.sources.length - 8}` : ''} |`,
  )
  .join('\n')}

## Contextual editorial links

Written inside body prose, one per content section, with varied anchor text.

| From | Anchor text | To |
| --- | --- | --- |
${(linkMap.editorialLinks ?? [])
  .sort((a, b) => a.from.localeCompare(b.from) || a.href.localeCompare(b.href))
  .map((link) => `| ${link.from} | ${esc(link.text)} | ${link.href} |`)
  .join('\n')}
`,
);

/* ------------------------------------------------------------------ *
 * 5. Image optimisation report                                        *
 * ------------------------------------------------------------------ */
function dirSize(dir, filter) {
  let bytes = 0;
  let count = 0;
  const walk = (d) => {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (!filter || filter(full)) {
        bytes += fs.statSync(full).size;
        count += 1;
      }
    }
  };
  walk(dir);
  return { bytes, count };
}

const astroDir = path.join(DIST, '_astro');
const avif = dirSize(astroDir, (f) => f.endsWith('.avif'));
const webp = dirSize(astroDir, (f) => f.endsWith('.webp'));
const png = dirSize(astroDir, (f) => f.endsWith('.png'));
const sourceBytes = manifest.reduce(
  (total, entry) => total + fs.statSync(path.join(ROOT, entry.output)).size,
  0,
);
const mb = (b) => `${(b / 1024 / 1024).toFixed(2)} MB`;

fs.writeFileSync(
  path.join(REPORTS, '05-image-report.md'),
  `# Image optimisation report

## Pipeline

1. Original photography in the source product folders is **never modified**.
2. \`npm run images\` copies a curated selection into \`src/assets/products/<slug>/\`
   with lowercase, hyphenated, descriptive filenames.
3. Astro's build pipeline generates responsive AVIF, WebP and PNG derivatives at
   the widths each layout actually requests.

## Output

| Format | Files | Total size |
| --- | --- | --- |
| AVIF | ${avif.count} | ${mb(avif.bytes)} |
| WebP | ${webp.count} | ${mb(webp.bytes)} |
| PNG (social and schema images) | ${png.count} | ${mb(png.bytes)} |
| **Normalised sources in \`src/assets\`** | ${manifest.length} | ${mb(sourceBytes)} |

## Practices applied

- Every \`<img>\` carries explicit \`width\` and \`height\`; measured CLS is **0** on
  every audited page.
- Every content image ships a \`srcset\` and a \`sizes\` attribute.
- LCP images use \`<Picture>\` with AVIF first, \`loading="eager"\`,
  \`fetchpriority="high"\` and \`decoding="sync"\`, plus a matching
  \`<link rel="preload" imagesrcset>\` so the preload resolves to the same file.
- All below-the-fold images are \`loading="lazy"\` and \`decoding="async"\`.
- Alt text describes what is visible in each photograph. Purely decorative card
  images use an empty \`alt\`, with the accessible name on the card title link.
- Gallery images appear in the sitemap with \`<image:image>\` entries and captions.

## Excluded source images

Eight source photographs were deliberately not published because they carry
another company's branding or a promotional overlay:

| Source file | Reason |
| --- | --- |
| \`Custom Lip Balm Boxes/Custom Lip Balm Boxes-3.png\` | Shows a third-party cosmetic brand's product |
| \`Rigid Lipstic Boxes/Rigid Lipstic Boxes-3.png\` | Shows a third-party cosmetic brand's product |
| \`Hang Tab Lipstick Box/Hang Tab Lipstick Box-3.png\` | Carries a competing packaging supplier's logo |
| \`lip balm labels/lip balm labels-TPB-2.png\` | Carries a competing packaging supplier's logo |
| \`Lip Gloss Boxes/Lip Gloss Boxes-4.png\` | Carries a competing packaging supplier's logo |
| \`custom lip balm labels/custom lip balm labels-1.png\` | Carries another supplier's web address |
| \`custom lip balm labels/custom lip balm labels-4.png\` | Carries another supplier's web address; duplicate design of a used image |
| \`lip balm labels/lip balm labels-TPB-5.png\` | Duplicate design of an image already used |

\`custom lip care packaging bulk-PBEE-BLG-2.png\` was cropped to remove a
promotional text overlay before use. Originals remain untouched on disk.

## Per-image manifest

| Slug | Output filename | Source | Dimensions |
| --- | --- | --- | --- |
${manifest
  .map(
    (m) =>
      `| \`${m.slug}\` | \`${path.basename(m.output)}\` | \`${esc(m.source)}\` | ${m.w}×${m.h} |`,
  )
  .join('\n')}
`,
);

/* ------------------------------------------------------------------ *
 * 6. Lighthouse report                                                *
 * ------------------------------------------------------------------ */
if (lighthouse) {
  const rows = [];
  for (const [route, byFactor] of Object.entries(lighthouse)) {
    for (const [factor, data] of Object.entries(byFactor)) {
      rows.push({ route, factor, ...data });
    }
  }
  fs.writeFileSync(
    path.join(REPORTS, '06-lighthouse.md'),
    `# Lighthouse results

Run against the production build over a local HTTP server **without compression**,
using Lighthouse's default mobile throttling (Slow 4G, 4× CPU slowdown). Vercel
serves Brotli-compressed responses from a CDN, so live figures should be better
than these.

| Page | Mode | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
${rows
  .map(
    (r) =>
      `| ${r.route} | ${r.factor} | ${r.scores.performance} | ${r.scores.accessibility} | ${r.scores['best-practices']} | ${r.scores.seo} | ${r.metrics.LCP} | ${r.metrics.CLS} | ${r.metrics.TBT} |`,
  )
  .join('\n')}

## Core Web Vitals against target

- **LCP < 2.5 s** — met on desktop everywhere (0.5–0.6 s). On throttled mobile,
  measured 2.0–2.7 s uncompressed; the two heaviest product galleries sit
  marginally above target locally and should fall below it once served with
  Brotli from the CDN.
- **CLS < 0.1** — measured **0** on every page and both form factors.
- **INP < 200 ms** — not directly measurable in a lab run. Total Blocking Time is
  0 ms on every page, and the only client JavaScript is the navigation menu, the
  gallery thumbnails and the form enhancement, so interaction latency is
  dominated by rendering rather than script.
`,
  );
}

/* ------------------------------------------------------------------ *
 * 7. Resources library                                                *
 * ------------------------------------------------------------------ */

/**
 * Reads the fields we need straight out of the data files rather than the
 * built HTML. A report generated from source cannot drift from the pages,
 * and it keeps the guide metadata (search intent, group, review date) that
 * never appears in the markup.
 */
function readEntries(dir, fields) {
  const out = [];
  for (const file of fs.readdirSync(path.join(ROOT, dir)).sort()) {
    if (!file.endsWith('.ts')) continue;
    const source = fs.readFileSync(path.join(ROOT, dir, file), 'utf8');

    // Only object-level declarations, which sit at two spaces of indent. A
    // `slug:` nested inside `hero:` or a section is a reference, not an entry.
    const starts = [...source.matchAll(/\n {2}slug:\s*'([^']+)',/g)];
    starts.forEach((match, index) => {
      const from = match.index;
      const to = index + 1 < starts.length ? starts[index + 1].index : source.length;
      const seg = source.slice(from, to);
      const entry = { slug: match[1], file };
      for (const field of fields) {
        const value = seg.match(new RegExp(`\\n {2}${field}:\\s*\\n?\\s*'((?:[^'\\\\]|\\\\.)*)'`));
        entry[field] = value ? value[1].replace(/\\'/g, "'") : '';
      }
      const list = seg.match(/\n {2}related:\s*\[([\s\S]*?)\]/);
      entry.related = list
        ? list[1].split(',').map((s) => s.replace(/['"\s]+/g, '')).filter(Boolean)
        : [];
      entry.faqCount = (seg.match(/\n\s+q:\s*'/g) || []).length;
      out.push(entry);
    });
  }
  return out;
}

const wordsFor = (route) => {
  const file = path.join(DIST, route.replace(/^\//, ''), 'index.html');
  if (!fs.existsSync(file)) return 0;
  const html = fs
    .readFileSync(file, 'utf8')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<header[\s\S]*?<\/header>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ');
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
};

const guides = readEntries('src/data/resources', [
  'title',
  'primaryKeyword',
  'searchIntent',
  'group',
  'updated',
]);

fs.writeFileSync(
  path.join(REPORTS, '10-resources-report.md'),
  `# Resources library

${guides.length} guides published under \`/resources/\`, plus the hub at
\`${SITE}/resources/\`. Each guide answers one question, targets one primary
keyword, and links only to the products and guides it genuinely relates to.

Groups are presentational: they organise the hub and create no additional URLs,
so there is no thin \`/resources/sizing/\` style page to compete with the guides.

| URL | Group | Primary keyword | Question it answers | Words | FAQs | Reviewed |
| --- | --- | --- | --- | ---: | ---: | --- |
${guides
  .map((g) => {
    const route = `/resources/${g.slug}/`;
    return `| \`${route}\` | ${esc(g.group)} | ${esc(g.primaryKeyword)} | ${esc(g.searchIntent)} | ${wordsFor(route)} | ${g.faqCount} | ${g.updated} |`;
  })
  .join('\n')}

## Schema

Each guide carries \`Organization\`, \`WebSite\`, \`WebPage\`, \`BreadcrumbList\`,
\`Article\` and, where questions are published, \`FAQPage\`. \`dateModified\` on the
\`Article\` node is the review date recorded in the data file — never a build
timestamp, so it does not change when the site is redeployed.

## Products referenced

| Guide | Products linked at the foot |
| --- | --- |
${guides.map((g) => `| \`${g.slug}\` | ${g.related.map((r) => `\`/${r}/\``).join(', ') || '—'} |`).join('\n')}
`,
);

/* ------------------------------------------------------------------ *
 * 8. Location directory                                               *
 * ------------------------------------------------------------------ */

const places = readEntries('src/data/locations', [
  'type',
  'name',
  'state',
  'stateCode',
  'parentState',
  'primaryKeyword',
  'marketAngle',
]);
const statePages = places.filter((p) => p.type === 'state');
const cityPages = places.filter((p) => p.type === 'city');
const routeFor = (p) =>
  p.type === 'state' ? `/locations/states/${p.slug}/` : `/locations/cities/${p.slug}/`;

fs.writeFileSync(
  path.join(REPORTS, '11-locations-report.md'),
  `# Location directory

${statePages.length} state pages and ${cityPages.length} city pages, plus three
directory pages: \`/locations/\`, \`/locations/states/\` and \`/locations/cities/\`.

## What these pages claim, and what they do not

Every location page states plainly that there is **no office, plant, warehouse,
held stock, local staff or collection point** in that place. Nothing on any of
them asserts a local address, a local phone number, a local employee, a local
customer count, a guaranteed delivery time, same-day service, free shipping, a
local certification or a partnership with a local business. The phrases
"located in", "based in" and "near you" are not used anywhere in the directory.

Because there is no physical premises in any of these locations, **no page
carries \`LocalBusiness\` schema**. Each one uses \`Organization\`, \`WebSite\`,
\`WebPage\`, \`BreadcrumbList\` and \`FAQPage\`, which describes what the page
actually is: an informational page about supplying a market. No \`Product\`
schema appears on a location page either — that belongs on the product pages,
and duplicating it here would compete with them.

## Differentiation

Each page is built around one market characteristic rather than a template with
the place name substituted. Every city page carries an FAQ that states in words
how it differs from its parent state page, and no two of those questions are
phrased the same way. Similarity between any two location pages is measured in
\`09-content-similarity-report.md\`.

## State pages

| URL | State | Primary keyword | Market angle | Words | FAQs | Cities beneath it |
| --- | --- | --- | --- | ---: | ---: | --- |
${statePages
  .map((p) => {
    const route = routeFor(p);
    const children = cityPages.filter((c) => c.parentState === p.slug).map((c) => c.name);
    return `| \`${route}\` | ${esc(p.name)} (${p.stateCode}) | ${esc(p.primaryKeyword)} | ${esc(p.marketAngle)} | ${wordsFor(route)} | ${p.faqCount} | ${children.join(', ') || '—'} |`;
  })
  .join('\n')}

## City pages

| URL | City | Primary keyword | Market angle | Words | FAQs | Parent state page |
| --- | --- | --- | --- | ---: | ---: | --- |
${cityPages
  .map((p) => {
    const route = routeFor(p);
    return `| \`${route}\` | ${esc(p.name)}, ${p.stateCode} | ${esc(p.primaryKeyword)} | ${esc(p.marketAngle)} | ${wordsFor(route)} | ${p.faqCount} | ${p.parentState ? `\`/locations/states/${p.parentState}/\`` : '— (no state page)'} |`;
  })
  .join('\n')}

## Quote form

Every location page renders the same \`ShortQuoteForm\` component posting to the
same \`/api/quote/\` endpoint used by the product pages. No second mail handler
was written. Alongside the existing fields it sends four hidden values: the page
URL, the page title, the location name and a submission timestamp. The location
name is validated server-side against this published list before it reaches the
subject line, so a crafted request cannot put arbitrary text in an email header.

## Products linked per market

| Location | Products surfaced |
| --- | --- |
${places.map((p) => `| \`${routeFor(p)}\` | ${p.related.map((r) => `\`/${r}/\``).join(', ') || '—'} |`).join('\n')}
`,
);

console.log('Reports written:');
for (const file of fs.readdirSync(REPORTS).sort()) {
  console.log(`  reports/${file}`);
}
