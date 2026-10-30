/**
 * Google Merchant feed, built from the same product data and the same
 * src/data/order.ts constants as the product pages, their Offer JSON-LD, the
 * checkout and /api/order: one item per product page, 100 boxes for $30.00,
 * free shipping to the US, UK, Canada and Australia with handling and transit
 * times. Image links are the same stable WebP files the product JSON-LD lists,
 * in the same order.
 */
import type { APIRoute } from 'astro';
import { indexableProducts } from '../data/products';
import { publicImageUrl } from '../lib/images';
import { SITE, BRAND, PACK_QTY, PACK_PRICE_TEXT, UNIT_PRICE_TEXT, SHIPPING, feedId } from '../data/order';

export const prerender = true;

const x = (s: unknown) =>
  String(s ?? '').replace(
    /[<>&'"]/g,
    (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c] as string,
  );

export const GET: APIRoute = () => {
  const items = indexableProducts.map((p) => {
    const imgs = p.images.slice(0, 11).map((image) => SITE + encodeURI(publicImageUrl(p.slug, image.file)));
    return `  <item>
    <g:id>${x(feedId(p.slug))}</g:id>
    <title>${x(`${p.name}, Pack of ${PACK_QTY}`)}</title>
    <description>${x(`${p.metaDescription} Sold online in packs of ${PACK_QTY} boxes ($${UNIT_PRICE_TEXT} each), printed full color to your artwork after you approve a proof.`)}</description>
    <link>${SITE}/${x(p.slug)}/</link>
    <g:image_link>${x(imgs[0])}</g:image_link>${imgs
      .slice(1)
      .map((u) => `\n    <g:additional_image_link>${x(u)}</g:additional_image_link>`)
      .join('')}
    <g:availability>in_stock</g:availability>
    <g:condition>new</g:condition>
    <g:price>${PACK_PRICE_TEXT} USD</g:price>
    <g:multipack>${PACK_QTY}</g:multipack>
    <g:brand>${x(BRAND)}</g:brand>
    <g:identifier_exists>no</g:identifier_exists>
    <g:mpn>${x(p.slug)}</g:mpn>
    <g:product_type>${x(`Lip Packaging > ${p.group}`)}</g:product_type>
${SHIPPING.destinations
  .map(
    (d) =>
      `    <g:shipping><g:country>${d.code}</g:country><g:service>Free shipping</g:service><g:price>0.00 USD</g:price><g:min_transit_time>${d.transitMin}</g:min_transit_time><g:max_transit_time>${d.transitMax}</g:max_transit_time></g:shipping>`,
  )
  .join('\n')}
    <g:min_handling_time>${SHIPPING.handlingDaysMin}</g:min_handling_time>
    <g:max_handling_time>${SHIPPING.handlingDaysMax}</g:max_handling_time>
  </item>`;
  });
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
<channel>
  <title>${x(BRAND)}</title>
  <link>${SITE}/</link>
  <description>Custom printed lip product packaging, sold online in packs of ${PACK_QTY}.</description>
${items.join('\n')}
</channel>
</rss>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
