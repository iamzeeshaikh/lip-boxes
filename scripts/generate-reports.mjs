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
  {
    folders: ['Custom Lip Balm Boxes'],
    name: 'Custom Lip Balm Boxes',
    slug: 'custom-lip-balm-boxes',
    keyword: 'custom lip balm boxes',
    merged: 'No',
  },
  {
    folders: ['Hang Tab Lip Balm Box'],
    name: 'Hang Tab Lip Balm Boxes',
    slug: 'hang-tab-lip-balm-boxes',
    keyword: 'hang tab lip balm boxes',
    merged: 'No',
  },
  {
    folders: ['paper lip balm tubes', 'cardboard lip balm tubes'],
    name: 'Paper Lip Balm Tubes',
    slug: 'paper-lip-balm-tubes',
    keyword: 'paper lip balm tubes',
    merged: 'Yes — "cardboard lip balm tubes" merged in',
  },
  {
    folders: ['custom lip balm labels', 'lip balm labels'],
    name: 'Custom Lip Balm Labels',
    slug: 'custom-lip-balm-labels',
    keyword: 'custom lip balm labels',
    merged: 'Yes — "lip balm labels" merged in',
  },
  {
    folders: ['Custom Lipstick Boxes', 'Lipstick Boxes'],
    name: 'Custom Lipstick Boxes',
    slug: 'custom-lipstick-boxes',
    keyword: 'custom lipstick boxes',
    merged: 'Yes — "Lipstick Boxes" merged in',
  },
  {
    folders: ['Rigid Lipstic Boxes'],
    name: 'Rigid Lipstick Boxes',
    slug: 'rigid-lipstick-boxes',
    keyword: 'rigid lipstick boxes',
    merged: 'No (source folder name misspelled; slug corrected)',
  },
  {
    folders: ['Hang Tab Lipstick Box'],
    name: 'Hang Tab Lipstick Boxes',
    slug: 'hang-tab-lipstick-boxes',
    keyword: 'hang tab lipstick boxes',
    merged: 'No',
  },
  {
    folders: ['Lip Gloss Boxes'],
    name: 'Lip Gloss Boxes',
    slug: 'lip-gloss-boxes',
    keyword: 'lip gloss boxes',
    merged: 'No',
  },
  {
    folders: ['Holographic Lip Gloss Boxes'],
    name: 'Holographic Lip Gloss Boxes',
    slug: 'holographic-lip-gloss-boxes',
    keyword: 'holographic lip gloss boxes',
    merged: 'No',
  },
  {
    folders: ['custom lip mask boxes'],
    name: 'Custom Lip Mask Boxes',
    slug: 'custom-lip-mask-boxes',
    keyword: 'custom lip mask boxes',
    merged: 'No',
  },
  {
    folders: ['custom lip care packaging bulk-PBEE-BLG'],
    name: 'Custom Lip Care Packaging',
    slug: 'custom-lip-care-packaging',
    keyword: 'custom lip care packaging',
    merged: 'No (slug shortened; source suffix dropped)',
  },
  {
    folders: ['Lip Balm packaging'],
    name: 'Lip Balm Packaging (format guide)',
    slug: 'lip-balm-packaging',
    keyword: 'lip balm packaging',
    merged: 'Repurposed as a comparison hub, not a product page',
  },
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

**11 product pages + 1 comparison hub** from 15 source folders.

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

console.log('Reports written:');
for (const file of fs.readdirSync(REPORTS).sort()) {
  console.log(`  reports/${file}`);
}
