/**
 * Typed content model for the resources library and the location directory.
 *
 * Both reuse the existing `ContentBlock` union, so a resource guide and a
 * location page can each pick a different set of block types in a different
 * order. That is deliberate: it is what stops forty location pages reading as
 * one template with the place name swapped.
 */
import type { ContentBlock, Faq } from './types';

/* ------------------------------------------------------------------ *
 * Resources                                                           *
 * ------------------------------------------------------------------ */

export interface Resource {
  slug: string;
  title: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** The question this guide exists to answer, in the reader's words. */
  searchIntent: string;
  /** Grouping on the hub. Presentational only — creates no extra URL. */
  group: 'Sizing' | 'Planning' | 'Production' | 'Compliance' | 'Reference';

  seoTitle: string;
  metaDescription: string;
  ogTitle?: string;
  ogDescription?: string;

  /** One-sentence deck under the H1. */
  deck: string;
  /** Card copy on the hub. Never reused as the meta description. */
  cardDescription: string;
  /** Two or three scannable points shown in the hero. */
  highlights: string[];

  /** ISO date this guide was last reviewed. Only set when genuinely true. */
  updated: string;
  /** Estimated read time in minutes. */
  readingMinutes: number;

  /** Product photography used as the header illustration. */
  hero: { slug: string; file: string; alt: string };

  sections: ContentBlock[];
  faqs?: Faq[];

  /** Product slugs surfaced at the foot. Chosen per guide, never a default set. */
  related: string[];
  /** Other resource slugs worth reading next. */
  relatedResources: string[];

  indexable?: boolean;
  order: number;
}

/* ------------------------------------------------------------------ *
 * Locations                                                           *
 * ------------------------------------------------------------------ */

export interface Location {
  slug: string;
  type: 'state' | 'city';
  /** Display name, e.g. "California" or "New York City". */
  name: string;
  /** Full US state name. For a city, the state it sits in. */
  state: string;
  /** Two-letter postal abbreviation, used in copy and breadcrumbs. */
  stateCode: string;
  /** Slug of the parent state page, when that page exists. */
  parentState?: string;
  /** Slugs of city pages inside this state, for state pages. */
  cities?: string[];

  primaryKeyword: string;
  secondaryKeywords: string[];

  seoTitle: string;
  metaDescription: string;
  ogTitle?: string;
  ogDescription?: string;

  h1: string;
  /** One-sentence deck under the H1. Written per market, never templated. */
  deck: string;
  /** Card copy in the directory listings. */
  cardDescription: string;
  /**
   * The specific characteristic of this market that the page is built around.
   * Used in the directory and as the page's organising idea.
   */
  marketAngle: string;

  /** Ordered, market-specific body. Block selection differs between pages. */
  sections: ContentBlock[];
  faqs: Faq[];

  /** Product slugs chosen for this market, not a shared default. */
  related: string[];

  indexable?: boolean;
}

/* ------------------------------------------------------------------ */

export interface LocationGroup {
  region: string;
  states: string[];
}
