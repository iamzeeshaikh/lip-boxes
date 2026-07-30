# Lip Boxes

Custom lip product packaging site for **https://lipboxes.com** — Astro, statically
generated, with one serverless endpoint for the quote forms.

40 pages: 11 product pages at the root, a format comparison hub, a product
directory, 8 specification and ordering pages, 8 blog articles, legal pages, a
quote form and a real 404.

---

## Quick start

```bash
nvm use          # Node 24, pinned in .nvmrc
npm ci
cp .env.example .env   # then fill in SMTP_PASS locally
npm run dev
```

---

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run check` | Astro + TypeScript diagnostics |
| `npm run images` | Rebuild `src/assets/products/` from the source folders |
| `npm run audit:site` | Crawl the build: links, orphans, metadata, H1s, canonicals, schema, sitemap, robots, banned copy, secret leaks |
| `npm run test:browser` | Responsive (375/768/1024/1440), keyboard, no-JS, console errors, reduced motion |
| `npm run test:form` | Quote endpoint behaviour against a running server |
| `npm run test:email` | End-to-end SMTP delivery against a throwaway local mail server |
| `npm run smtp:test` | Verify SMTP credentials without revealing them |
| `npm run lighthouse` | Mobile and desktop Lighthouse over 8 representative pages |
| `npm run audit:deps` | Dependency vulnerability check |
| `npm run reports` | Regenerate the reports in `reports/` |
| `npm run verify` | build → check → audit → browser tests → reports |

---

## Where things live

```
src/
  data/
    site.ts               Business details. Anything unconfirmed is null and hides itself.
    types.ts              Typed content model for products and blog posts.
    products.ts           Product registry, groupings, review-data gate.
    products/*.ts         One file per product: copy, specs, FAQs, images, links.
    blog.ts               Blog articles as structured data.
    nav.ts                Header and footer navigation.
    pages.ts              Static page registry, read by the sitemap.
  lib/
    schema.ts             JSON-LD builders. Emits nothing that is not visible on the page.
    images.ts             Resolves product photography; a missing image is a build error.
    server/               Server-only: SMTP transport, validation, rate limiting.
  pages/
    [product].astro       Every product page, generated from the data files.
    blog/[post].astro     Every blog post.
    api/quote.ts          POST-only quote endpoint (the only server-rendered route).
    sitemap.xml.ts        Sitemap with image entries, served at exactly /sitemap.xml.
scripts/                  Image preparation, audits and tests.
reports/                  Generated delivery reports (see below).
```

Source product folders in the project root are **read only**. `npm run images`
copies a curated selection out of them; nothing is written back.

---

## Adding a product

1. Add its images to the `MAP` in `scripts/prepare-images.mjs`, run `npm run images`.
2. Create `src/data/products/<slug>.ts` modelled on an existing one.
3. Register it in `src/data/products.ts` and `src/data/nav.ts`.
4. Add it to the `related` list of at least two other products.

The route, sitemap entry, directory card, related-product strips, social image
and structured data all follow. Run `npm run verify`.

---

## Reports

| File | Contents |
| --- | --- |
| `reports/01-url-list.md` | Every generated URL |
| `reports/02-product-inventory.md` | Source folder → product → slug → keyword → canonical, with merges |
| `reports/03-metadata-report.md` | Title, description, H1, canonical, indexability and schema per page |
| `reports/04-internal-link-map.md` | Inbound links per page and every contextual editorial link |
| `reports/05-image-report.md` | Optimisation pipeline, output sizes, excluded source images |
| `reports/06-lighthouse.md` | Mobile and desktop scores with Core Web Vitals |
| `reports/07-duplicate-intent-report.md` | Cannibalisation analysis and merge decisions |
| `reports/08-outstanding-items.md` | Business details still needed, and claims deliberately omitted |
| `reports/screenshots/` | Rendered pages at the four breakpoints |

Deployment, environment variables and security headers: **[DEPLOYMENT.md](./DEPLOYMENT.md)**.

---

## Conventions worth knowing

- **URLs.** Lowercase, hyphenated, trailing slash, root-level for products.
  Enforced by `npm run audit:site`.
- **Claims.** Nothing unverifiable is published. `site.ts` uses `null` for details
  the owner has not supplied, and the UI hides those elements rather than showing
  a placeholder. `reports/08-outstanding-items.md` lists what is missing and why.
- **Reviews.** `AggregateRating` and `Review` schema are emitted only when real
  review data exists in the product file *and* is rendered visibly on the page.
  The typed fields exist so ratings can be added later without template changes.
- **Content security.** `script-src 'self'` with no `'unsafe-inline'`. This relies
  on `vite.build.assetsInlineLimit: 0` keeping every script external — removing
  that will silently break the navigation in production.
- **Secrets.** SMTP configuration is read from `process.env` inside the server
  endpoint only. `npm run audit:site` fails the build if any SMTP identifier
  reaches the client bundle.
