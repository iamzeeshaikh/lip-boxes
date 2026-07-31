# Duplicate intent and cannibalisation report

**Current structure: 15 product pages from 15 source folders, one page per folder.**

An earlier build merged three duplicate-intent pairs into single canonical pages.
That was reversed at the client's instruction so every source folder has its own
page. This report records what was done to keep the split defensible, and the
risk that remains.

## The three pairs that were previously merged

Each pair now has two pages. They were given genuinely different jobs rather
than the same content with a swapped keyword.

### 1. `/lipstick-boxes/` and `/custom-lipstick-boxes/`

| | `/lipstick-boxes/` | `/custom-lipstick-boxes/` |
| --- | --- | --- |
| Job | Category entry point: which construction do I need | Specification page for the printed folding carton |
| Intent | Commercial investigation | Transactional |
| Content | Compares folding, rigid, hang tab and multi-shade side by side | Sizing method, board grades, inserts, artwork, production |
| Routes to | The three construction pages | The quote form |
| Photography | `Lipstick Boxes` folder (4 images) | `Custom Lipstick Boxes` folder (3 images) |

### 2. `/lip-balm-labels/` and `/custom-lip-balm-labels/`

| | `/lip-balm-labels/` | `/custom-lip-balm-labels/` |
| --- | --- | --- |
| Job | Formats and stocks reference | The custom printing service |
| Content | Six label formats, stock comparison table, sizing method, adhesive selection | Artwork to a cutting template, proofing, variable data, multi-variant runs |
| Photography | `lip balm labels` folder (3 images) | `custom lip balm labels` folder (3 images) |

### 3. `/paper-lip-balm-tubes/` and `/cardboard-lip-balm-tubes/`

| | `/paper-lip-balm-tubes/` | `/cardboard-lip-balm-tubes/` |
| --- | --- | --- |
| Job | The decorated format for retail runs | The unbleached kraft format for small batches |
| Content | Full-colour printing on a curved surface, artwork seams, retail volumes | Plain and label-applied tubes, small-batch economics, plastic-free claim wording |
| Photography | `paper lip balm tubes` folder (6 images) | `cardboard lip balm tubes` folder (5 images) |

`/lip-balm-packaging/` was also converted from a comparison hub into a full
product page covering coordinated sets — the container, carton and label
specified and produced together.

## What was done to reduce the risk

- **No shared photography.** Every page draws images only from its own source
  folder. Verified by the image manifest.
- **Distinct primary keywords.** No two pages target the same primary term, and
  each states its own in the H1 and again in at least one H2.
- **Distinct FAQ sets.** No question text is repeated between sibling pages.
- **Explicit cross-links.** Each page in a pair links to its sibling in body copy
  with an anchor explaining the difference, so a visitor who lands on the wrong
  one moves across in a click, and search engines see the relationship.
- **Different content structures.** Sibling pages use different block types and
  section orders, so they do not read as one template with words swapped.
- **Redirects removed.** The three 301s that previously pointed the merged slugs
  at their canonical page have been deleted from `vercel.json`, since those URLs
  now resolve to real pages.

## The risk that remains

This is stated plainly because it is a real trade-off, not a solved problem.

Three pairs of pages describe overlapping products. Search engines may:

- pick the "wrong" page of a pair for a query, or
- split ranking signals between the two, so neither ranks as well as one
  consolidated page would have, or
- treat one as a near-duplicate and filter it from results.

The differentiation above is the mitigation, not a guarantee. The outcome
depends on how Google reads the pages once they are indexed.

## What to monitor after launch

In Search Console, watch the Performance report filtered by page and query.
For each pair, check whether both URLs receive impressions for the same query:

| Query to watch | Page that should win it |
| --- | --- |
| lipstick boxes | `/lipstick-boxes/` |
| custom lipstick boxes | `/custom-lipstick-boxes/` |
| lip balm labels | `/lip-balm-labels/` |
| custom lip balm labels | `/custom-lip-balm-labels/` |
| paper lip balm tubes | `/paper-lip-balm-tubes/` |
| cardboard lip balm tubes | `/cardboard-lip-balm-tubes/` |
| lip balm packaging | `/lip-balm-packaging/` |
| custom lip balm boxes | `/custom-lip-balm-boxes/` |

**If both URLs of a pair appear for the same query**, that is signal splitting.
The fix is to sharpen the weaker page's angle further, or to consolidate with a
301 from the weaker URL to the stronger one. Both remain available.

**If one page of a pair gets no impressions at all after three months**, it is
likely being filtered as a near-duplicate. Consolidating at that point recovers
its links and signals rather than leaving them stranded.

## Redirects still in place

These handle URL variants and legacy paths, not merges. All single-hop 301s:

| From | To |
| --- | --- |
| `/rigid-lipstic-boxes` | `/rigid-lipstick-boxes/` |
| `/hang-tab-lipstick-box` | `/hang-tab-lipstick-boxes/` |
| `/hang-tab-lip-balm-box` | `/hang-tab-lip-balm-boxes/` |
| `/custom-lip-care-packaging-bulk` | `/custom-lip-care-packaging/` |
| `/products/:slug` | `/:slug/` |
| `/product/:slug` | `/:slug/` |
| `/sitemap-index.xml` | `/sitemap.xml` |
| `/feed` | `/rss.xml` |
| `/quote` | `/request-a-quote/` |
| `/faq` | `/faqs/` |
| `www.lipboxes.com/*` | `lipboxes.com/*` |

---

# Addendum: the resources library and the location directory

Fifty-three pages were added after this report was first written: ten guides
under `/resources/`, twenty state pages, twenty city pages and three directory
pages. Both families create obvious cannibalisation exposure, so both were built
against explicit separation rules and then measured.

## Guides against product pages

A guide and a product page can easily end up answering the same question. They
were separated by job:

| | Product page | Guide |
| --- | --- | --- |
| Question it answers | "Can you make this, and what does it cost?" | "How do I work out what I need?" |
| Intent | Transactional | Informational |
| Ends with | The quote form | A link to the products the guide applies to |
| Keyword shape | `custom lip balm boxes` | `lip balm box size` |
| Schema | `Product` + `Offer` | `Article` |

No guide targets a product page's primary keyword, and no product page targets a
guide's. The full keyword map is in `09-content-similarity-report.md`.

Guide groups (Planning, Sizing, Production, Compliance, Reference) are labels on
the hub. They create **no URLs**, so there is no thin category page competing
with either the guides or the products.

## State pages against city pages

The larger risk was forty location pages reading as one template. Three rules
were applied:

1. **One market angle per page.** Each page is built around a single
   characteristic of that market — peg-fixture engineering in Phoenix, freight
   consolidation in Jacksonville, planogram resets in Illinois — rather than a
   general description of the place. The full list is in
   `11-locations-report.md`.
2. **Different block types in a different order.** The content model lets each
   page pick from six block types. No two location pages use the same sequence.
3. **An explicit differentiation FAQ.** Every city page answers, in words, how it
   differs from its parent state page — and each of those questions is phrased
   differently, so the answer set is not itself a template.

## Measured outcome

From `09-content-similarity-report.md`, generated from the built HTML:

- The highest similarity between **any** two pages on the site is **12.7%**,
  between `/blog/printing-methods-for-cosmetic-packaging/` and
  `/printing-options/`. The duplicate threshold is 45%.
- No two location pages, and no two guides, exceed the low-risk band.
- No paragraph of twelve words or more appears on more than two pages.
- No FAQ question appears on more than two pages.
- No duplicate titles, no duplicate meta descriptions, and no two pages share a
  primary keyword.

## What this addendum does not claim

Low measured similarity means the pages are not duplicates of each other. It
does not guarantee that Google will index all forty location pages, or rank
them. Location pages without a physical presence are inherently weaker than
pages backed by a real address, and some may be treated as thin regardless of
word count. The honest expectation is that the strongest few earn traffic and
the rest sit in the index as supporting pages.

## What to monitor for these families

| Signal in Search Console | What it means | What to do |
| --- | --- | --- |
| A state page and its city page both appear for the same query | Signal splitting inside the directory | Sharpen the city page's angle, or fold it into the state page with a 301 |
| Location pages indexed but with zero impressions after three months | Treated as low-value | Consolidate to the fifteen or twenty strongest markets |
| "Crawled — currently not indexed" on many location URLs | Google sees them as thin | Same as above; reduce the count rather than adding more |
| A guide outranking its product page for a buying query | The guide is absorbing commercial intent | Move the commercial section of the guide onto the product page |
