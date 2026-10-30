/**
 * One price, one shipping story, one returns rule and one set of payment
 * methods for every surface that sells: the order band (home and every product
 * page), the product price note, the Product Offer JSON-LD, the Merchant feed
 * (/merchant-feed.xml), /checkout/, /order-confirmed/ and /api/order. Change a
 * number here and all of them follow, so the page, the structured data and the
 * feed cannot disagree.
 *
 * Owner's decisions, 2026-10-30: every lip box style sells online in packs of
 * 100 for $30.00 ($0.30 each); larger or custom runs are quoted. Free shipping
 * to the US, UK, Canada and Australia. Production (handling) is 5–7 business
 * days after proof approval, the owner's standard for these sites, because this
 * site published no fixed production time; transit is 5–7 business days in the
 * US and 7–10 to the UK, Canada and Australia. Paid by PayPal invoice or bank
 * transfer after proof approval, or cash on delivery for US and Canadian
 * addresses. Nothing is charged on the site; the team invoices by hand.
 * Returns are defective only: report within 14 days of delivery with photos.
 */
import { products } from './products';
import { site } from './site';

export const SITE = site.url;
export const BRAND = site.name;

export const PACK_QTY = site.orderPack.qty;
export const PACK_PRICE = Number(site.orderPack.price ?? '30.00');
export const MAX_PACKS = 50;
export const CURRENCY = 'USD';
export const money = (n: number) => `$${n.toFixed(2)}`;
export const PACK_PRICE_TEXT = PACK_PRICE.toFixed(2);
export const UNIT_PRICE_TEXT = (PACK_PRICE / PACK_QTY).toFixed(2);
/** The one price line every product page shows: "100 boxes: $30.00 ($0.30 each)". */
export const PRICE_LINE = `${PACK_QTY} boxes: ${money(PACK_PRICE)} ($${UNIT_PRICE_TEXT} each)`;

/** Days are business days. Handling = production after proof approval. */
export const SHIPPING = {
  rate: '0',
  currency: 'USD',
  handlingDaysMin: 5,
  handlingDaysMax: 7,
  destinations: [
    { code: 'US', name: 'United States', label: 'the US', transitMin: 5, transitMax: 7 },
    { code: 'GB', name: 'United Kingdom', label: 'the UK', transitMin: 7, transitMax: 10 },
    { code: 'CA', name: 'Canada', label: 'Canada', transitMin: 7, transitMax: 10 },
    { code: 'AU', name: 'Australia', label: 'Australia', transitMin: 7, transitMax: 10 },
  ],
} as const;

export const SHIP_COUNTRIES = SHIPPING.destinations.map((d) => ({ code: d.code, name: d.name }));
export const transitFor = (code: string) => SHIPPING.destinations.find((d) => d.code === code);

export const SHIP_LINE = 'Free shipping to the US, UK, Canada and Australia';
export const PRODUCTION_TEXT = `${SHIPPING.handlingDaysMin}–${SHIPPING.handlingDaysMax} business days`;
export const TRANSIT_US_TEXT = '5–7 business days';
export const TRANSIT_INTL_TEXT = '7–10 business days';

/** Returns: defective only (owner, 2026-10-30). */
export const RETURNS = {
  claimDays: 14,
  policyPath: '/refund-and-return-policy/',
  policyUrl: `${SITE}/refund-and-return-policy/`,
} as const;

export const PAYMENT_METHODS = [
  {
    id: 'paypal',
    name: 'PayPal invoice',
    detail:
      'Once you approve your proof, we email a PayPal invoice. Pay with your PayPal balance or a card through PayPal. Production starts when it is paid.',
  },
  {
    id: 'bank',
    name: 'Bank transfer',
    detail:
      'Once you approve your proof, we email an invoice with our bank details. Production starts when the transfer arrives.',
  },
  {
    id: 'cod',
    name: 'Cash on delivery',
    detail:
      'Nothing up front. You pay the order total when your boxes are delivered. Available for US and Canadian addresses only.',
  },
] as const;

/** Cash on delivery runs through a courier COD service that covers the US and Canada only. */
export const COD_COUNTRIES: string[] = ['US', 'CA'];

export const PAYMENT_LINE =
  'Pay by PayPal invoice or bank transfer after you approve your proof, or cash on delivery in the US and Canada. Nothing is charged on this site.';

/** slug -> product name, for the checkout and the server-side re-pricing. */
export const ORDER_CATALOG: Record<string, string> = Object.fromEntries(
  products.map((p) => [p.slug, p.name]),
);

/** Merchant item id, within Google's 50-character limit. */
export const feedId = (slug: string) => `LB-${slug}`.slice(0, 50);

/**
 * Product Offer for JSON-LD. The Merchant feed prints the same price, shipping
 * and handling numbers from the constants above.
 */
export function productOffer(url: string, seller: Record<string, unknown>, validUntil: string) {
  return {
    '@type': 'Offer',
    url,
    price: PACK_PRICE_TEXT,
    priceCurrency: CURRENCY,
    eligibleQuantity: { '@type': 'QuantitativeValue', value: PACK_QTY, unitCode: 'H87' },
    priceValidUntil: validUntil,
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    seller,
    shippingDetails: SHIPPING.destinations.map((d) => ({
      '@type': 'OfferShippingDetails',
      shippingRate: { '@type': 'MonetaryAmount', value: SHIPPING.rate, currency: SHIPPING.currency },
      shippingDestination: { '@type': 'DefinedRegion', addressCountry: d.code },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: {
          '@type': 'QuantitativeValue',
          minValue: SHIPPING.handlingDaysMin,
          maxValue: SHIPPING.handlingDaysMax,
          unitCode: 'DAY',
        },
        transitTime: {
          '@type': 'QuantitativeValue',
          minValue: d.transitMin,
          maxValue: d.transitMax,
          unitCode: 'DAY',
        },
      },
    })),
    // Custom printed packaging is made to the buyer's artwork and is not
    // returnable for change of mind; defective, damaged or misprinted orders
    // reported within RETURNS.claimDays are reprinted or refunded.
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: SHIPPING.destinations.map((d) => d.code),
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
      merchantReturnLink: RETURNS.policyUrl,
    },
  };
}
