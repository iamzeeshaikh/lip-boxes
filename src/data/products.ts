import type { Product, ReviewData } from './types';

import { product as customLipBalmBoxes } from './products/custom-lip-balm-boxes';
import { product as lipBalmPackaging } from './products/lip-balm-packaging';
import { product as cardboardLipBalmTubes } from './products/cardboard-lip-balm-tubes';
import { product as lipBalmLabels } from './products/lip-balm-labels';
import { product as lipstickBoxes } from './products/lipstick-boxes';
import { product as hangTabLipBalmBoxes } from './products/hang-tab-lip-balm-boxes';
import { product as paperLipBalmTubes } from './products/paper-lip-balm-tubes';
import { product as customLipBalmLabels } from './products/custom-lip-balm-labels';
import { product as customLipstickBoxes } from './products/custom-lipstick-boxes';
import { product as rigidLipstickBoxes } from './products/rigid-lipstick-boxes';
import { product as hangTabLipstickBoxes } from './products/hang-tab-lipstick-boxes';
import { product as lipGlossBoxes } from './products/lip-gloss-boxes';
import { product as holographicLipGlossBoxes } from './products/holographic-lip-gloss-boxes';
import { product as customLipMaskBoxes } from './products/custom-lip-mask-boxes';
import { product as customLipCarePackaging } from './products/custom-lip-care-packaging';

export const products: Product[] = [
  customLipBalmBoxes,
  lipBalmPackaging,
  cardboardLipBalmTubes,
  lipBalmLabels,
  lipstickBoxes,
  hangTabLipBalmBoxes,
  paperLipBalmTubes,
  customLipBalmLabels,
  customLipstickBoxes,
  rigidLipstickBoxes,
  hangTabLipstickBoxes,
  lipGlossBoxes,
  holographicLipGlossBoxes,
  customLipMaskBoxes,
  customLipCarePackaging,
].sort((a, b) => a.order - b.order);

export const indexableProducts = products.filter((p) => p.indexable !== false);

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Directory groupings. Presentational only — no category URLs are created. */
export const productGroups: { name: Product['group']; blurb: string }[] = [
  {
    name: 'Lip Balm',
    blurb: 'Cartons, paper tubes and labels for stick, tin and pot formats.',
  },
  {
    name: 'Lipstick',
    blurb: 'Folding and rigid boxes built around bullet cases and shade ranges.',
  },
  {
    name: 'Lip Gloss',
    blurb: 'Tall cartons for wand applicators, in printed and iridescent finishes.',
  },
  {
    name: 'Lip Care',
    blurb: 'Treatment formats and bulk programmes covering a whole range.',
  },
];

export function productsInGroup(group: Product['group']): Product[] {
  return indexableProducts.filter((p) => p.group === group);
}

/**
 * True only when genuine, publishable review data exists for a product.
 * AggregateRating and Review structured data are withheld until this passes,
 * and the same data is rendered visibly on the page when it does.
 */
export function hasReviews(reviews?: ReviewData): reviews is ReviewData {
  return Boolean(
    reviews &&
      typeof reviews.ratingValue === 'number' &&
      typeof reviews.reviewCount === 'number' &&
      reviews.reviewCount > 0 &&
      reviews.reviews.length > 0,
  );
}
