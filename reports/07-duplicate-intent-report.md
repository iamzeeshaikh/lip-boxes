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
