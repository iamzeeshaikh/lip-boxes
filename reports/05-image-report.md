# Image optimisation report

## Pipeline

1. Original photography in the source product folders is **never modified**.
2. `npm run images` copies a curated selection into `src/assets/products/<slug>/`
   with lowercase, hyphenated, descriptive filenames.
3. Astro's build pipeline generates responsive AVIF, WebP and PNG derivatives at
   the widths each layout actually requests.

## Output

| Format | Files | Total size |
| --- | --- | --- |
| AVIF | 210 | 2.36 MB |
| WebP | 461 | 5.72 MB |
| PNG (social and schema images) | 0 | 0.00 MB |
| **Normalised sources in `src/assets`** | 58 | 54.12 MB |

## Practices applied

- Every `<img>` carries explicit `width` and `height`; measured CLS is **0** on
  every audited page.
- Every content image ships a `srcset` and a `sizes` attribute.
- LCP images use `<Picture>` with AVIF first, `loading="eager"`,
  `fetchpriority="high"` and `decoding="sync"`, plus a matching
  `<link rel="preload" imagesrcset>` so the preload resolves to the same file.
- All below-the-fold images are `loading="lazy"` and `decoding="async"`.
- Alt text describes what is visible in each photograph. Purely decorative card
  images use an empty `alt`, with the accessible name on the card title link.
- Gallery images appear in the sitemap with `<image:image>` entries and captions.

## Excluded source images

Eight source photographs were deliberately not published because they carry
another company's branding or a promotional overlay:

| Source file | Reason |
| --- | --- |
| `Custom Lip Balm Boxes/Custom Lip Balm Boxes-3.png` | Shows a third-party cosmetic brand's product |
| `Rigid Lipstic Boxes/Rigid Lipstic Boxes-3.png` | Shows a third-party cosmetic brand's product |
| `Hang Tab Lipstick Box/Hang Tab Lipstick Box-3.png` | Carries a competing packaging supplier's logo |
| `lip balm labels/lip balm labels-TPB-2.png` | Carries a competing packaging supplier's logo |
| `Lip Gloss Boxes/Lip Gloss Boxes-4.png` | Carries a competing packaging supplier's logo |
| `custom lip balm labels/custom lip balm labels-1.png` | Carries another supplier's web address |
| `custom lip balm labels/custom lip balm labels-4.png` | Carries another supplier's web address; duplicate design of a used image |
| `lip balm labels/lip balm labels-TPB-5.png` | Duplicate design of an image already used |

`custom lip care packaging bulk-PBEE-BLG-2.png` was cropped to remove a
promotional text overlay before use. Originals remain untouched on disk.

## Per-image manifest

| Slug | Output filename | Source | Dimensions |
| --- | --- | --- | --- |
| `custom-lip-balm-boxes` | `custom-lip-balm-box-counter-display.png` | `Custom Lip Balm Boxes/Custom Lip Balm Boxes-1.png` | 1080×1080 |
| `custom-lip-balm-boxes` | `custom-lip-balm-box-slim-tuck-end.png` | `Custom Lip Balm Boxes/Custom Lip Balm Boxes-4.png` | 1080×1080 |
| `custom-lip-balm-boxes` | `custom-lip-balm-box-multipack-tray.png` | `Custom Lip Balm Boxes/Custom Lip Balm Boxes-2.png` | 1080×1080 |
| `lip-balm-packaging` | `lip-balm-packaging-foil-stamped-carton.png` | `Lip Balm packaging/Lip Balm packaging-2.png` | 1200×1200 |
| `lip-balm-packaging` | `lip-balm-packaging-blush-pink-cartons.png` | `Lip Balm packaging/Lip Balm packaging-1.png` | 1200×1200 |
| `lip-balm-packaging` | `lip-balm-packaging-floral-print-carton.png` | `Lip Balm packaging/Lip Balm packaging-3.png` | 1200×1200 |
| `paper-lip-balm-tubes` | `paper-lip-balm-tube-printed-kraft.png` | `paper lip balm tubes/paper lip balm tubes-3.png` | 1080×1080 |
| `paper-lip-balm-tubes` | `paper-lip-balm-tube-teal-printed.png` | `paper lip balm tubes/paper lip balm tubes-5.png` | 1080×1080 |
| `paper-lip-balm-tubes` | `paper-lip-balm-tube-full-colour-print.png` | `paper lip balm tubes/paper lip balm tubes-2.png` | 1080×1080 |
| `paper-lip-balm-tubes` | `paper-lip-balm-tube-larger-format-stick.png` | `paper lip balm tubes/paper lip balm tubes-8.png` | 1080×1080 |
| `paper-lip-balm-tubes` | `paper-lip-balm-tube-magenta-print.png` | `paper lip balm tubes/paper lip balm tubes-9.png` | 1080×1080 |
| `paper-lip-balm-tubes` | `paper-lip-balm-tube-natural-kraft-open.png` | `paper lip balm tubes/paper lip balm tubes-6.png` | 1080×1080 |
| `cardboard-lip-balm-tubes` | `cardboard-lip-balm-tube-wrap-labels.png` | `cardboard lip balm tubes/cardboard lip balm tubes-2.png` | 1080×1080 |
| `cardboard-lip-balm-tubes` | `cardboard-lip-balm-tube-push-up-base.png` | `cardboard lip balm tubes/cardboard lip balm tubes-1.png` | 1080×1080 |
| `cardboard-lip-balm-tubes` | `cardboard-lip-balm-tube-kraft-range.png` | `cardboard lip balm tubes/cardboard lip balm tubes-4.png` | 1080×1080 |
| `cardboard-lip-balm-tubes` | `cardboard-lip-balm-tube-illustrated-kraft.png` | `cardboard lip balm tubes/cardboard lip balm tubes-3.png` | 1080×1080 |
| `cardboard-lip-balm-tubes` | `cardboard-lip-balm-tube-floral-print.png` | `cardboard lip balm tubes/cardboard lip balm tubes-5.png` | 1080×1080 |
| `custom-lip-balm-labels` | `custom-lip-balm-label-minimal-two-colour.png` | `custom lip balm labels/custom lip balm labels-2.png` | 1080×1080 |
| `custom-lip-balm-labels` | `custom-lip-balm-label-watercolour-print.png` | `lip balm labels/lip balm labels​-TPB-1.png` | 1080×1080 |
| `custom-lip-balm-labels` | `custom-lip-balm-label-roll-format.png` | `custom lip balm labels/custom lip balm labels-3.png` | 1080×1080 |
| `lip-balm-labels` | `lip-balm-label-die-cut-wraps.png` | `lip balm labels/lip balm labels​-TPB-3.png` | 1080×1080 |
| `lip-balm-labels` | `lip-balm-label-kraft-uncoated.png` | `lip balm labels/lip balm labels​-TPB-4.png` | 1080×1080 |
| `lip-balm-labels` | `lip-balm-label-roll-and-jar-set.png` | `lip balm labels/lip balm labels​-TPB-5.png` | 1080×1080 |
| `hang-tab-lip-balm-boxes` | `hang-tab-lip-balm-box-window-kraft.png` | `Hang Tab Lip Balm Box/Hang Tab Lip Balm Box-2.png` | 1080×1080 |
| `hang-tab-lip-balm-boxes` | `hang-tab-lip-balm-boxes-on-pegboard.png` | `Hang Tab Lip Balm Box/Hang Tab Lip Balm Box-1.png` | 1080×1080 |
| `hang-tab-lip-balm-boxes` | `hang-tab-lip-balm-box-euro-slot.png` | `Hang Tab Lip Balm Box/Hang Tab Lip Balm Box-3.png` | 1080×1080 |
| `hang-tab-lip-balm-boxes` | `hang-tab-lip-balm-box-two-piece-set.png` | `Hang Tab Lip Balm Box/Hang Tab Lip Balm Box-5.png` | 1080×1080 |
| `hang-tab-lip-balm-boxes` | `hang-tab-lip-balm-box-tall-tuck-end.png` | `Hang Tab Lip Balm Box/Hang Tab Lip Balm Box-4.png` | 1080×1080 |
| `custom-lipstick-boxes` | `custom-lipstick-box-reverse-tuck-end.png` | `Custom Lipstick Boxes/Custom Lipstick Boxes-1.png` | 1080×1080 |
| `custom-lipstick-boxes` | `custom-lipstick-box-floral-print.png` | `Custom Lipstick Boxes/Custom Lipstick Boxes-3.png` | 1080×1080 |
| `custom-lipstick-boxes` | `custom-lipstick-box-metallic-foil.png` | `Custom Lipstick Boxes/Custom Lipstick Boxes-2.png` | 1080×1080 |
| `lipstick-boxes` | `lipstick-box-slim-printed-carton.png` | `Lipstick Boxes/Hang Tab Lipstick Box-3.png` | 900×900 |
| `lipstick-boxes` | `lipstick-box-single-shade-carton.png` | `Lipstick Boxes/Hang Tab Lipstick Box-4.png` | 1080×1080 |
| `lipstick-boxes` | `lipstick-boxes-matte-dark-range.png` | `Lipstick Boxes/Hang Tab Lipstick Box-5.png` | 1080×1080 |
| `lipstick-boxes` | `lipstick-boxes-nude-collection.png` | `Lipstick Boxes/Hang Tab Lipstick Box-1.png` | 1080×1080 |
| `rigid-lipstick-boxes` | `rigid-lipstick-box-magnetic-closure.png` | `Rigid Lipstic Boxes/Rigid Lipstic Boxes-1.png` | 1080×1080 |
| `rigid-lipstick-boxes` | `rigid-lipstick-box-sleeve-and-tray.png` | `Rigid Lipstic Boxes/Rigid Lipstic Boxes-2.png` | 1080×1080 |
| `rigid-lipstick-boxes` | `rigid-lipstick-box-two-piece-lid.png` | `Rigid Lipstic Boxes/Rigid Lipstic Boxes-4.png` | 1080×1080 |
| `hang-tab-lipstick-boxes` | `hang-tab-lipstick-box-window-cutout.png` | `Hang Tab Lipstick Box/Hang Tab Lipstick Box-2.png` | 1080×1080 |
| `hang-tab-lipstick-boxes` | `hang-tab-lipstick-box-floral-pair.png` | `Hang Tab Lipstick Box/Hang Tab Lipstick Box-1.png` | 1080×1080 |
| `hang-tab-lipstick-boxes` | `hang-tab-lipstick-box-kraft-window.png` | `Hang Tab Lipstick Box/Hang Tab Lipstick Box-5.png` | 1080×1080 |
| `hang-tab-lipstick-boxes` | `hang-tab-lipstick-box-three-pack.png` | `Hang Tab Lipstick Box/Hang Tab Lipstick Box-4.png` | 1080×1080 |
| `lip-gloss-boxes` | `lip-gloss-box-straight-tuck-end.png` | `Lip Gloss Boxes/Lip Gloss Boxes-2.png` | 1200×1200 |
| `lip-gloss-boxes` | `lip-gloss-box-tall-slim-carton.png` | `Lip Gloss Boxes/Lip Gloss Boxes-1.png` | 1200×1200 |
| `lip-gloss-boxes` | `lip-gloss-box-soft-pink-set.png` | `Lip Gloss Boxes/Lip Gloss Boxes-3.png` | 1200×1200 |
| `holographic-lip-gloss-boxes` | `holographic-lip-gloss-box-rainbow-foil.png` | `Holographic Lip Gloss Boxes/Holographic Lip Gloss Boxes-5.png` | 1080×1080 |
| `holographic-lip-gloss-boxes` | `holographic-lip-gloss-box-iridescent-carton.png` | `Holographic Lip Gloss Boxes/Holographic Lip Gloss Boxes-2.png` | 1080×1080 |
| `holographic-lip-gloss-boxes` | `holographic-lip-gloss-box-metallic-print.png` | `Holographic Lip Gloss Boxes/Holographic Lip Gloss Boxes-4.png` | 1080×1080 |
| `holographic-lip-gloss-boxes` | `holographic-lip-gloss-rigid-box-insert.png` | `Holographic Lip Gloss Boxes/Holographic Lip Gloss Boxes-3.png` | 1080×1080 |
| `holographic-lip-gloss-boxes` | `holographic-lip-gloss-box-silver-mirror.png` | `Holographic Lip Gloss Boxes/Holographic Lip Gloss Boxes-1.png` | 1080×1080 |
| `custom-lip-mask-boxes` | `custom-lip-mask-box-window-front.png` | `custom lip mask boxes/custom lip mask boxes-2.png` | 1080×1080 |
| `custom-lip-mask-boxes` | `custom-lip-mask-box-flat-carton.png` | `custom lip mask boxes/custom lip mask boxes-3.png` | 1080×1080 |
| `custom-lip-mask-boxes` | `custom-lip-mask-box-multi-patch-pack.png` | `custom lip mask boxes/custom lip mask boxes-1.png` | 1080×1080 |
| `custom-lip-mask-boxes` | `custom-lip-mask-box-single-sachet.png` | `custom lip mask boxes/custom lip mask boxes-4.png` | 1080×1080 |
| `custom-lip-mask-boxes` | `custom-lip-mask-mailer-box-open.png` | `custom lip mask boxes/custom lip mask boxes-5.png` | 1080×1080 |
| `custom-lip-care-packaging` | `custom-lip-care-packaging-carton-range.png` | `custom lip care packaging bulk-PBEE-BLG/custom lip care packaging bulk-PBEE-BLG-3.png` | 1200×850 |
| `custom-lip-care-packaging` | `custom-lip-care-packaging-shade-family.png` | `custom lip care packaging bulk-PBEE-BLG/custom lip care packaging bulk-PBEE-BLG-1.png` | 1200×850 |
| `custom-lip-care-packaging` | `custom-lip-care-packaging-gift-set.png` | `custom lip care packaging bulk-PBEE-BLG/custom lip care packaging bulk-PBEE-BLG-2.png` | 615×780 |
