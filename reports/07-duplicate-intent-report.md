# Duplicate intent and cannibalisation report

The 15 source folders contained several pairs targeting the same or heavily
overlapping search intent. Every folder was inspected image by image before any
page was generated. This is what was decided and why.

## Merges made

### 1. `Custom Lipstick Boxes` + `Lipstick Boxes` → `/custom-lipstick-boxes/`

**Merged.** The `Lipstick Boxes` folder's files were named
`Hang Tab Lipstick Box-*.png`, which suggested a third product, but the
photographs show plain tuck-end lipstick cartons and lipstick range shots with no
hanging tab anywhere. They are the same product and the same commercial intent as
`Custom Lipstick Boxes`.

- Canonical page: `/custom-lipstick-boxes/`
- Six images drawn from both folders
- `/lipstick-boxes/` is **not** published. A 301 redirect to
  `/custom-lipstick-boxes/` is configured in `vercel.json`.

### 2. `custom lip balm labels` + `lip balm labels` → `/custom-lip-balm-labels/`

**Merged.** Both folders contain printed wrap labels for lip balm tubes, and two
designs appear in both folders. There is no product difference, only a keyword
variant.

- Canonical page: `/custom-lip-balm-labels/`
- Five images selected across both folders, avoiding the duplicated designs
- `/lip-balm-labels/` 301-redirects to `/custom-lip-balm-labels/`

### 3. `paper lip balm tubes` + `cardboard lip balm tubes` → `/paper-lip-balm-tubes/`

**Merged.** Both folders show the identical format: a rolled multi-ply paperboard
tube with a push-up base disc. "Paper" and "cardboard" are two names buyers use
for the same thing, and one brand's photography appears in both folders.

- Canonical page: `/paper-lip-balm-tubes/`
- Eight images across both folders
- "cardboard lip balm tubes" is carried as a secondary keyword, used naturally in
  the page copy where it belongs, and stated explicitly in the overview so the
  synonym is covered without a second page
- `/cardboard-lip-balm-tubes/` 301-redirects to `/paper-lip-balm-tubes/`

## Differentiated rather than merged

### 4. `Custom Lip Balm Boxes` vs `Lip Balm packaging`

**Not published as two competing product pages.** The `Lip Balm packaging` images
are slim tuck-end balm cartons — the same product as `Custom Lip Balm Boxes`.
Publishing both as product pages would have been direct cannibalisation.

Instead, `/lip-balm-packaging/` was built as a **format comparison hub** with a
different job and a different search intent:

| | `/custom-lip-balm-boxes/` | `/lip-balm-packaging/` |
| --- | --- | --- |
| Intent | Transactional — buy this carton | Commercial investigation — which format do I need |
| H1 | Custom Lip Balm Boxes | Lip Balm Packaging |
| Content | Sizing, board, printing, inserts, FAQs for one product | Compares four formats against each other and routes to each |
| Schema | `Product` + `Offer` | `CollectionPage` + `ItemList` (no Product, no Offer) |
| CTA | Short quote form on the page | Routes to the four product pages |

Only the hub carries the broad "lip balm packaging" term as its primary keyword;
the product page targets "custom lip balm boxes". No `Offer` markup exists on the
hub, so the two do not compete for product listings either.

### 5. `Hang Tab Lip Balm Box` vs `Custom Lip Balm Boxes`

**Kept separate.** The photographs show a genuinely different structure: a
die-cut euro slot in the top panel, pegboard merchandising and window cut-outs.
Distinct buyer, distinct retail channel, distinct engineering discussion (tab load
against packed weight). No overlap in the FAQ sets.

### 6. `Hang Tab Lipstick Box` vs `Custom Lipstick Boxes`

**Kept separate**, for the same reason. The hang-tab folder genuinely shows window
cartons with peg slots, unlike the `Lipstick Boxes` folder which did not despite
its filenames.

### 7. `Lip Gloss Boxes` vs `Holographic Lip Gloss Boxes`

**Kept separate.** Different substrate, different production process (metallised
board and opaque white underprint versus standard coated board), different price
bracket and different buyer question set.

### 8. `Rigid Lipstic Boxes` → `/rigid-lipstick-boxes/`

**Kept separate**, and the misspelling in the folder name was corrected in the
slug. Rigid construction is a different manufacturing category from folding
cartons, not a variant of one. `/rigid-lipstic-boxes/` 301-redirects to the
correct spelling.

### 9. `custom lip care packaging bulk-PBEE-BLG` → `/custom-lip-care-packaging/`

**Kept separate**, with the internal supplier code dropped from the slug. This
page targets multi-SKU and private label programmes rather than a single product,
so it does not compete with any individual product page.

## Rules applied throughout

- No two pages were created that differ only by the word "custom".
- No page targets a keyword that another page already targets as its primary.
- Each product page states its own primary keyword in the H1 and again naturally
  in at least one H2.
- Secondary keywords are used inside the canonical page rather than being spun
  into extra URLs.
- No source images were deleted or overwritten.

## Redirects configured for the merged and corrected URLs

All are single-hop 301s in `vercel.json` — no chains:

| From | To |
| --- | --- |
| `/lipstick-boxes` | `/custom-lipstick-boxes/` |
| `/lip-balm-labels` | `/custom-lip-balm-labels/` |
| `/cardboard-lip-balm-tubes` | `/paper-lip-balm-tubes/` |
| `/rigid-lipstic-boxes` | `/rigid-lipstick-boxes/` |
| `/hang-tab-lipstick-box` | `/hang-tab-lipstick-boxes/` |
| `/hang-tab-lip-balm-box` | `/hang-tab-lip-balm-boxes/` |
| `/custom-lip-care-packaging-bulk` | `/custom-lip-care-packaging/` |
| `/products/:slug` | `/:slug/` |
| `/product/:slug` | `/:slug/` |

## Monitoring recommendation

After launch, check Search Console for any query where two Lip Boxes URLs both
receive impressions. The pairs worth watching are:

- "lip balm packaging" — the hub should win it; the product page should win
  "custom lip balm boxes"
- "lipstick boxes" — `/custom-lipstick-boxes/` should be the only ranking URL
- "cardboard lip balm tubes" — `/paper-lip-balm-tubes/` should be the only one

If the wrong URL ranks for a term, adjust the on-page keyword emphasis rather
than adding a page.
