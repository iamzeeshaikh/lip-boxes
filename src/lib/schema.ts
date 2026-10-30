/**
 * JSON-LD builders.
 *
 * Every value emitted here must also be visible on the rendered page.
 * Nothing is invented: contact points, addresses, ratings, review counts,
 * SKUs and GTINs are omitted unless real data exists in `site.ts` or the
 * product data file. Price, shipping and returns come from src/data/order.ts.
 */
import { site, sameAs, abs } from '../data/site';
import type { Product } from '../data/types';
import { hasReviews } from '../data/products';
import { productOffer, SHIPPING } from '../data/order';

export interface Crumb {
  name: string;
  /** Root-relative, trailing-slashed path. Omit on the current page. */
  path?: string;
}

export function organizationSchema() {
  const org: Record<string, unknown> = {
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: `${site.url}/`,
    description: site.shortDescription,
    logo: {
      '@type': 'ImageObject',
      url: abs('/social/lip-boxes-logo.png'),
      width: 512,
      height: 512,
    },
    areaServed: SHIPPING.destinations.map((d) => ({ '@type': 'Country', name: d.name })),
  };

  const contactPoint: Record<string, unknown> = {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: site.email,
    availableLanguage: 'English',
    areaServed: SHIPPING.destinations.map((d) => d.code),
  };
  if (site.phone) contactPoint.telephone = site.phone;
  org.contactPoint = contactPoint;
  org.email = site.email;
  if (site.phone) org.telephone = site.phone;

  if (site.address) {
    org.address = {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    };
  }
  if (sameAs.length) org.sameAs = sameAs;

  return org;
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: `${site.url}/`,
    name: site.name,
    description: site.shortDescription,
    inLanguage: site.locale,
    publisher: { '@id': `${site.url}/#organization` },
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      ...(crumb.path ? { item: abs(crumb.path) } : {}),
    })),
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'FAQPage' | 'CheckoutPage';
  primaryImage?: string;
}) {
  const url = abs(opts.path);
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': `${site.url}/#website` },
    inLanguage: site.locale,
    ...(opts.primaryImage
      ? { primaryImageOfPage: { '@type': 'ImageObject', url: abs(opts.primaryImage) } }
      : {}),
  };
}

/**
 * Product + Offer. The Offer comes from src/data/order.ts, the same constants
 * as the order band, /checkout/ and the Merchant feed: 100 boxes for $30.00,
 * free shipping with handling and transit times for the US, UK, Canada and
 * Australia, and the defective-only return policy.
 */
export function productSchema(product: Product, images: string[]) {
  const url = abs(`/${product.slug}/`);
  const offer = productOffer(url, { '@id': `${site.url}/#organization` }, site.priceValidUntil);

  const schema: Record<string, unknown> = {
    '@type': 'Product',
    '@id': `${url}#product`,
    name: product.h1,
    description: product.metaDescription,
    url,
    sku: product.slug,
    category: `${product.group} Packaging`,
    image: images.map((src) => abs(src)),
    brand: { '@type': 'Brand', name: site.name },
    manufacturer: { '@id': `${site.url}/#organization` },
    isRelatedTo: product.related.map((slug) => ({
      '@type': 'Product',
      '@id': `${abs(`/${slug}/`)}#product`,
    })),
    additionalProperty: product.specs.map((spec) => ({
      '@type': 'PropertyValue',
      name: spec.label,
      value: spec.value,
    })),
    offers: offer,
  };

  // AggregateRating and Review are emitted only when genuine, visible review
  // data has been supplied for this specific product.
  if (hasReviews(product.reviews)) {
    const r = product.reviews;
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: r.ratingValue,
      reviewCount: r.reviewCount,
      bestRating: r.bestRating ?? 5,
    };
    schema.review = r.reviews.map((review) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: review.author },
      datePublished: review.datePublished,
      reviewBody: review.body,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.ratingValue,
        bestRating: r.bestRating ?? 5,
      },
    }));
  }

  return schema;
}

/** FAQPage built from the same question and answer text rendered on the page. */
export function faqSchema(faqs: { q: string; a: string }[], pageUrl: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${abs(pageUrl)}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a.replace(/<[^>]+>/g, '') },
    })),
  };
}

export function blogPostingSchema(opts: {
  path: string;
  headline: string;
  description: string;
  published: string;
  modified?: string;
  image: string;
  wordCount?: number;
}) {
  const url = abs(opts.path);
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: opts.headline,
    description: opts.description,
    url,
    mainEntityOfPage: { '@id': `${url}#webpage` },
    datePublished: opts.published,
    dateModified: opts.modified ?? opts.published,
    image: abs(opts.image),
    inLanguage: site.locale,
    // Attributed to the organization: no named individual authors are claimed.
    author: { '@id': `${site.url}/#organization` },
    publisher: { '@id': `${site.url}/#organization` },
    isPartOf: { '@id': `${site.url}/#website` },
    ...(opts.wordCount ? { wordCount: opts.wordCount } : {}),
  };
}

/** Wraps one or more schema objects in a single @graph document. */
export function graph(...nodes: unknown[]) {
  return { '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) };
}
