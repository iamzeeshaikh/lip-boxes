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

  /** Visible starting unit price used in copy and Offer schema. */
  startingPrice: '0.30',
  startingPriceStatement:
    'Price starts from $0.30 per piece for large-volume orders. Final pricing depends on size, material, printing, and quantity.',

  /* ---------------------------------------------------------------------- *
   * Contact details — supply real values before launch.                     *
   * A `null` value removes the channel from the header, footer and schema.  *
   * ---------------------------------------------------------------------- */
  email: 'info@lipboxes.com',
  phone: null as string | null,
  phoneDisplay: null as string | null,
  whatsapp: null as string | null,
  /** Postal address. Leave `null` until a real address is confirmed. */
  address: null as null | {
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
