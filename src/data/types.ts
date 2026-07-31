/**
 * Typed content model for Lip Boxes.
 *
 * Page templates read from these types only. Adding a product means adding one
 * data file — no template work, no new route file, and the sitemap, product
 * directory, related-product links and structured data all pick it up.
 */

export interface ProductImage {
  /** Path relative to `src/assets/products/`, resolved by the image loader. */
  file: string;
  /** Describes what is actually visible in the photograph. */
  alt: string;
  /** Short caption shown under the gallery on product pages. */
  caption?: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Spec {
  label: string;
  value: string;
}

/* ------------------------------------------------------------------ *
 * Content blocks. Each product picks the blocks that suit it, in the  *
 * order that suits it, so no two product pages share a layout rhythm. *
 * ------------------------------------------------------------------ */

interface BlockBase {
  /** Anchor id, also used by the on-page contents nav. */
  id: string;
  heading: string;
  /** Optional short label for the sticky contents nav. */
  navLabel?: string;
}

/** Heading plus paragraphs. Paragraph strings may contain a single anchor. */
export interface ProseBlock extends BlockBase {
  type: 'prose';
  body: string[];
}

/** Heading, optional intro, and a grid of titled points. */
export interface FeatureBlock extends BlockBase {
  type: 'features';
  intro?: string;
  items: { title: string; text: string }[];
  /** Icon set applied to the grid. */
  icon?:
    | 'check'
    | 'layers'
    | 'sparkle'
    | 'shield'
    | 'leaf'
    | 'ruler'
    | 'palette'
    | 'box'
    | 'clock'
    | 'truck'
    | 'droplet'
    | 'file-text'
    | 'scissors';
}

/** Heading, optional intro, and a two-column checklist. */
export interface ListBlock extends BlockBase {
  type: 'list';
  intro?: string;
  items: string[];
  outro?: string;
}

/** Heading and paragraphs beside a supporting photograph. */
export interface SplitBlock extends BlockBase {
  type: 'split';
  body: string[];
  image: ProductImage;
  /** Which side the image sits on at desktop widths. */
  imageSide?: 'left' | 'right';
}

/** Numbered process steps. */
export interface StepsBlock extends BlockBase {
  type: 'steps';
  intro?: string;
  steps: { title: string; text: string }[];
}

/** Comparison table for options a buyer has to choose between. */
export interface CompareBlock extends BlockBase {
  type: 'compare';
  intro?: string;
  columns: string[];
  rows: string[][];
  outro?: string;
}

export type ContentBlock =
  | ProseBlock
  | FeatureBlock
  | ListBlock
  | SplitBlock
  | StepsBlock
  | CompareBlock;

/* ------------------------------------------------------------------ *
 * Review data. Structured data is only emitted when real, visible     *
 * review content is supplied here — see `hasReviews()` in products.ts *
 * ------------------------------------------------------------------ */

export interface ProductReview {
  author: string;
  /** ISO date, e.g. "2026-04-18". */
  datePublished: string;
  ratingValue: number;
  body: string;
}

export interface ReviewData {
  /** Mean rating actually displayed on the page. */
  ratingValue: number | null;
  reviewCount: number | null;
  bestRating?: number;
  reviews: ProductReview[];
}

/* ------------------------------------------------------------------ */

export interface Product {
  slug: string;
  /** Exact H1 text. Contains the primary keyword. */
  h1: string;
  /** Short name used in navigation, cards and breadcrumbs. */
  name: string;
  primaryKeyword: string;
  secondaryKeywords: string[];

  /** ~50–60 characters. */
  seoTitle: string;
  /** ~120–130 characters. */
  metaDescription: string;
  /** Optional distinct social title/description. */
  ogTitle?: string;
  ogDescription?: string;

  /** One-sentence value proposition under the H1. */
  valueProp: string;
  /** Card copy in the product directory. Never reused as meta description. */
  cardDescription: string;

  /** Two to four scannable points beside the hero. */
  highlights: string[];

  images: ProductImage[];
  /** Index of the gallery image used for Open Graph. Defaults to 0. */
  ogImageIndex?: number;

  /** Ordered, product-specific page body. */
  blocks: ContentBlock[];

  specs: Spec[];
  faqs: Faq[];

  /** Slugs of related products, in the order they should appear. */
  related: string[];

  /** Overrides the sitewide starting price when a product warrants it. */
  startingPrice?: string;

  /** Populated only when genuine, publishable reviews exist. */
  reviews?: ReviewData;

  /** Set to false to keep a page out of the sitemap and add noindex. */
  indexable?: boolean;

  /** Sort weight in the product directory (lower shows first). */
  order: number;
  /** Directory grouping. Purely presentational — creates no extra URLs. */
  group: 'Lip Balm' | 'Lipstick' | 'Lip Gloss' | 'Lip Care';
}

export interface BlogPost {
  slug: string;
  title: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  /** ISO date the article was published. */
  published: string;
  updated?: string;
  /** Reading intent this article answers, shown as a deck under the H1. */
  deck: string;
  /** Estimated read time in minutes. */
  readingMinutes: number;
  /** Product slug whose photography illustrates the article. */
  heroFrom: { slug: string; file: string; alt: string };
  sections: BlogSection[];
  /** Related product slugs surfaced at the foot of the article. */
  related: string[];
}

export interface BlogSection {
  heading: string;
  id: string;
  body: string[];
  list?: string[];
  table?: { columns: string[]; rows: string[][] };
}
