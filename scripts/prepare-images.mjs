/**
 * Copies curated source photography into src/assets/products/<slug>/ with
 * normalized, descriptive filenames. Source folders are never modified.
 * Re-runnable: the destination tree is rebuilt from scratch each time.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const DEST = path.join(ROOT, 'src/assets/products');

/** slug -> ordered list of { folder, file, name, crop? } */
const MAP = {
  'custom-lip-balm-boxes': [
    ['Custom Lip Balm Boxes', 'Custom Lip Balm Boxes-1.png', 'custom-lip-balm-box-counter-display'],
    ['Custom Lip Balm Boxes', 'Custom Lip Balm Boxes-4.png', 'custom-lip-balm-box-slim-tuck-end'],
    ['Custom Lip Balm Boxes', 'Custom Lip Balm Boxes-2.png', 'custom-lip-balm-box-multipack-tray'],
  ],
  'lip-balm-packaging': [
    ['Lip Balm packaging', 'Lip Balm packaging-2.png', 'lip-balm-packaging-foil-stamped-carton'],
    ['Lip Balm packaging', 'Lip Balm packaging-1.png', 'lip-balm-packaging-blush-pink-cartons'],
    ['Lip Balm packaging', 'Lip Balm packaging-3.png', 'lip-balm-packaging-floral-print-carton'],
  ],
  'paper-lip-balm-tubes': [
    ['paper lip balm tubes', 'paper lip balm tubes-3.png', 'paper-lip-balm-tube-printed-kraft'],
    ['paper lip balm tubes', 'paper lip balm tubes-6.png', 'paper-lip-balm-tube-natural-kraft-open'],
    ['paper lip balm tubes', 'paper lip balm tubes-5.png', 'paper-lip-balm-tube-teal-printed'],
    ['paper lip balm tubes', 'paper lip balm tubes-2.png', 'paper-lip-balm-tube-full-colour-print'],
    ['cardboard lip balm tubes', 'cardboard lip balm tubes-2.png', 'cardboard-lip-balm-tube-wrap-labels'],
    ['cardboard lip balm tubes', 'cardboard lip balm tubes-1.png', 'cardboard-lip-balm-tube-push-up-base'],
    ['paper lip balm tubes', 'paper lip balm tubes-8.png', 'paper-lip-balm-tube-larger-format-stick'],
    ['cardboard lip balm tubes', 'cardboard lip balm tubes-5.png', 'cardboard-lip-balm-tube-illustrated'],
  ],
  'custom-lip-balm-labels': [
    ['lip balm labels', 'lip balm labels​-TPB-3.png', 'custom-lip-balm-label-die-cut-wraps'],
    ['custom lip balm labels', 'custom lip balm labels-2.png', 'custom-lip-balm-label-minimal-two-colour'],
    ['lip balm labels', 'lip balm labels​-TPB-4.png', 'custom-lip-balm-label-kraft-uncoated'],
    ['custom lip balm labels', 'custom lip balm labels-3.png', 'custom-lip-balm-label-roll-format'],
    ['lip balm labels', 'lip balm labels​-TPB-1.png', 'custom-lip-balm-label-watercolour-print'],
  ],
  'hang-tab-lip-balm-boxes': [
    ['Hang Tab Lip Balm Box', 'Hang Tab Lip Balm Box-2.png', 'hang-tab-lip-balm-box-window-kraft'],
    ['Hang Tab Lip Balm Box', 'Hang Tab Lip Balm Box-1.png', 'hang-tab-lip-balm-boxes-on-pegboard'],
    ['Hang Tab Lip Balm Box', 'Hang Tab Lip Balm Box-3.png', 'hang-tab-lip-balm-box-euro-slot'],
    ['Hang Tab Lip Balm Box', 'Hang Tab Lip Balm Box-5.png', 'hang-tab-lip-balm-box-two-piece-set'],
    ['Hang Tab Lip Balm Box', 'Hang Tab Lip Balm Box-4.png', 'hang-tab-lip-balm-box-tall-tuck-end'],
  ],
  'custom-lipstick-boxes': [
    ['Custom Lipstick Boxes', 'Custom Lipstick Boxes-1.png', 'custom-lipstick-box-reverse-tuck-end'],
    ['Custom Lipstick Boxes', 'Custom Lipstick Boxes-3.png', 'custom-lipstick-box-floral-print'],
    ['Custom Lipstick Boxes', 'Custom Lipstick Boxes-2.png', 'custom-lipstick-box-metallic-foil'],
    ['Lipstick Boxes', 'Hang Tab Lipstick Box-3.png', 'custom-lipstick-box-slim-carton'],
    ['Lipstick Boxes', 'Hang Tab Lipstick Box-5.png', 'custom-lipstick-boxes-matte-dark-range'],
    ['Lipstick Boxes', 'Hang Tab Lipstick Box-1.png', 'custom-lipstick-boxes-nude-collection'],
  ],
  'rigid-lipstick-boxes': [
    ['Rigid Lipstic Boxes', 'Rigid Lipstic Boxes-1.png', 'rigid-lipstick-box-magnetic-closure'],
    ['Rigid Lipstic Boxes', 'Rigid Lipstic Boxes-2.png', 'rigid-lipstick-box-sleeve-and-tray'],
    ['Rigid Lipstic Boxes', 'Rigid Lipstic Boxes-4.png', 'rigid-lipstick-box-two-piece-lid'],
  ],
  'hang-tab-lipstick-boxes': [
    ['Hang Tab Lipstick Box', 'Hang Tab Lipstick Box-2.png', 'hang-tab-lipstick-box-window-cutout'],
    ['Hang Tab Lipstick Box', 'Hang Tab Lipstick Box-1.png', 'hang-tab-lipstick-box-floral-pair'],
    ['Hang Tab Lipstick Box', 'Hang Tab Lipstick Box-5.png', 'hang-tab-lipstick-box-kraft-window'],
    ['Hang Tab Lipstick Box', 'Hang Tab Lipstick Box-4.png', 'hang-tab-lipstick-box-three-pack'],
  ],
  'lip-gloss-boxes': [
    ['Lip Gloss Boxes', 'Lip Gloss Boxes-2.png', 'lip-gloss-box-straight-tuck-end'],
    ['Lip Gloss Boxes', 'Lip Gloss Boxes-1.png', 'lip-gloss-box-tall-slim-carton'],
    ['Lip Gloss Boxes', 'Lip Gloss Boxes-3.png', 'lip-gloss-box-soft-pink-set'],
  ],
  'holographic-lip-gloss-boxes': [
    ['Holographic Lip Gloss Boxes', 'Holographic Lip Gloss Boxes-5.png', 'holographic-lip-gloss-box-rainbow-foil'],
    ['Holographic Lip Gloss Boxes', 'Holographic Lip Gloss Boxes-2.png', 'holographic-lip-gloss-box-iridescent-carton'],
    ['Holographic Lip Gloss Boxes', 'Holographic Lip Gloss Boxes-4.png', 'holographic-lip-gloss-box-metallic-print'],
    ['Holographic Lip Gloss Boxes', 'Holographic Lip Gloss Boxes-3.png', 'holographic-lip-gloss-rigid-box-insert'],
    ['Holographic Lip Gloss Boxes', 'Holographic Lip Gloss Boxes-1.png', 'holographic-lip-gloss-box-silver-mirror'],
  ],
  'custom-lip-mask-boxes': [
    ['custom lip mask boxes', 'custom lip mask boxes-2.png', 'custom-lip-mask-box-window-front'],
    ['custom lip mask boxes', 'custom lip mask boxes-3.png', 'custom-lip-mask-box-flat-carton'],
    ['custom lip mask boxes', 'custom lip mask boxes-1.png', 'custom-lip-mask-box-multi-patch-pack'],
    ['custom lip mask boxes', 'custom lip mask boxes-4.png', 'custom-lip-mask-box-single-sachet'],
    ['custom lip mask boxes', 'custom lip mask boxes-5.png', 'custom-lip-mask-mailer-box-open'],
  ],
  'custom-lip-care-packaging': [
    ['custom lip care packaging bulk-PBEE-BLG', 'custom lip care packaging bulk-PBEE-BLG-3.png', 'custom-lip-care-packaging-carton-range'],
    ['custom lip care packaging bulk-PBEE-BLG', 'custom lip care packaging bulk-PBEE-BLG-1.png', 'custom-lip-care-packaging-shade-family'],
    // Right-hand product area only: the left of this source frame carries a promotional text overlay.
    ['custom lip care packaging bulk-PBEE-BLG', 'custom lip care packaging bulk-PBEE-BLG-2.png', 'custom-lip-care-packaging-gift-set', { left: 585, top: 35, width: 615, height: 780 }],
  ],
};

fs.rmSync(DEST, { recursive: true, force: true });

let count = 0;
const manifest = [];
for (const [slug, entries] of Object.entries(MAP)) {
  const dir = path.join(DEST, slug);
  fs.mkdirSync(dir, { recursive: true });
  for (const [folder, file, name, crop] of entries) {
    const src = path.join(ROOT, folder, file);
    if (!fs.existsSync(src)) throw new Error(`Missing source image: ${src}`);
    const out = path.join(dir, `${name}.png`);
    let img = sharp(src);
    if (crop) img = img.extract(crop);
    await img.png({ compressionLevel: 9 }).toFile(out);
    const meta = await sharp(out).metadata();
    manifest.push({ slug, source: `${folder}/${file}`, output: path.relative(ROOT, out), w: meta.width, h: meta.height });
    count++;
  }
}
fs.writeFileSync(path.join(ROOT, 'reports/image-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Prepared ${count} product images across ${Object.keys(MAP).length} product sets.`);
