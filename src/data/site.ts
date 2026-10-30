/**
 * Central configuration for every business detail that appears on the site.
 *
 * Anything the owner still has to supply is set to `null` here rather than
 * invented. Components check for `null` and hide the related UI, so the site
 * never publishes a phone number, address or claim that has not been confirmed.
 */

export interface ContactChannel {
  /** E.164 or display value. `null` hides the channel sitewide. */
  value: string | null;
  label: string;
}

export const site = {
  name: 'Lip Boxes',
  legalName: 'Lip Boxes',
  url: 'https://lipboxes.com',
  locale: 'en-US',
  lang: 'en',
  country: 'US',
  currency: 'USD',

  tagline: 'Custom lip product packaging, made to order',
  shortDescription:
    'Custom printed boxes, cartons, paper tubes and labels for lip balm, lipstick, lip gloss and lip care brands across the United States.',

  /** Unit price of the online 100-box pack ($30.00 / 100). */
  startingPrice: '0.30',
  /** Date through which the advertised starting price is honored. */
  priceValidUntil: '2027-08-04',
  startingPriceStatement:
    '100 boxes: $30.00 ($0.30 each), with free shipping to the US, UK, Canada and Australia. Larger or custom runs are quoted on size, material, printing and quantity.',

  /* ---------------------------------------------------------------------- *
   * Contact details, confirmed by the owner on 2026-10-30.                   *
   * A `null` value removes the channel from the header, footer and schema.  *
   * ---------------------------------------------------------------------- */
  email: 'info@lipboxes.com',
  phone: '+15034614788' as string | null,
  phoneDisplay: '(503) 461-4788' as string | null,
  whatsapp: '+1 503-461-4788' as string | null,
  /** Postal address, as published on /contact/ and in the footer. */
  address: {
    street: '1639 70th St',
    city: 'Brooklyn',
    region: 'NY',
    postalCode: '11204',
    country: 'US',
  } as null | {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  },

  /** Public social profiles. Only non-null entries reach `sameAs`. */
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
    linkedin: null as string | null,
    pinterest: null as string | null,
  },

  /** Business hours shown on /contact/. Kept generic until confirmed. */
  supportHours: 'Monday to Friday, 9:00 AM to 6:00 PM Eastern Time',

  /**
   * Online pack offer (owner, 2026-10-30): 100 boxes for $30.00. Drives the red
   * "Order online" band, the product price note, the Offer JSON-LD, the
   * Merchant feed and /checkout/ through src/data/order.ts.
   */
  orderPack: {
    qty: 100,
    price: '30.00' as string | null,
    href: '/checkout/' as string,
  },

  /** Maximum accepted artwork upload size, in megabytes. */
  uploadLimitMb: 10,

  /*
   * Search engine ownership tokens. These are public by design — they appear in
   * the page source and prove control of the domain, they grant no access. Set
   * a value to null to stop emitting that tag.
   */
  verification: {
    google: 'GKasEn6o4HMbsbR7UMuE8uQj8mT-uJDtxMxH6uUvZlc',
    bing: null as string | null,
    pinterest: null as string | null,
  },
} as const;

export const sameAs = Object.values(site.social).filter(
  (v): v is string => typeof v === 'string' && v.length > 0,
);

/**
 * Absolute URL for an internal path.
 *
 * Page paths gain a trailing slash. Anything carrying a query string, a hash or
 * a file extension is left exactly as given — appending a slash after a query
 * string produces a URL that does not resolve.
 */
export function abs(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const p = path.startsWith('/') ? path : `/${path}`;
  const hasQueryOrHash = /[?#]/.test(p);
  const looksLikeFile = /\.[a-z0-9]{2,5}$/i.test(p.split(/[?#]/)[0]);
  if (p.endsWith('/') || hasQueryOrHash || looksLikeFile) return `${site.url}${p}`;
  return `${site.url}${p}/`;
}
