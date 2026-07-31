import type { Resource } from './content-types';

import { resource as lipProductPackagingGuide } from './resources/lip-product-packaging-guide';
import { resource as lipBalmBoxSizeGuide } from './resources/lip-balm-box-size-guide';
import { resource as lipstickBoxSizeGuide } from './resources/lipstick-box-size-guide';
import { resource as lipGlossBoxSizeGuide } from './resources/lip-gloss-box-size-guide';
import { resource as customPackagingCostGuide } from './resources/custom-packaging-cost-guide';
import { resource as packagingDielineGuide } from './resources/packaging-dieline-guide';
import { resource as prepressChecklist } from './resources/prepress-checklist';
import { resource as cosmeticPackagingLabelRequirements } from './resources/cosmetic-packaging-label-requirements';
import { resource as choosingPackagingInserts } from './resources/choosing-packaging-inserts';
import { resource as packagingGlossary } from './resources/packaging-glossary';

export const resources: Resource[] = [
  lipProductPackagingGuide,
  lipBalmBoxSizeGuide,
  lipstickBoxSizeGuide,
  lipGlossBoxSizeGuide,
  customPackagingCostGuide,
  packagingDielineGuide,
  prepressChecklist,
  cosmeticPackagingLabelRequirements,
  choosingPackagingInserts,
  packagingGlossary,
].sort((a, b) => a.order - b.order);

export const indexableResources = resources.filter((r) => r.indexable !== false);

export function getResource(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

/** Hub groupings. Presentational only — creates no extra URLs. */
export const resourceGroups: { name: Resource['group']; blurb: string }[] = [
  {
    name: 'Planning',
    blurb: 'Work out what you need, in what order, and what it will cost.',
  },
  {
    name: 'Sizing',
    blurb: 'Measure your container and get to a carton dimension a supplier can quote.',
  },
  {
    name: 'Production',
    blurb: 'How dielines and print files work, and how to check yours before it goes.',
  },
  {
    name: 'Compliance',
    blurb: 'What packaging has to carry, and how to fit it on a small surface.',
  },
  {
    name: 'Reference',
    blurb: 'Definitions for the terms that appear on quotes and proofs.',
  },
];

export function resourcesInGroup(group: Resource['group']): Resource[] {
  return indexableResources.filter((r) => r.group === group);
}
