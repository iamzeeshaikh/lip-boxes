/**
 * POST /api/order/ — orders from /checkout/. Every line is re-priced here from
 * src/data/order.ts, so a tampered browser can never change what an order
 * costs. The team gets the order through the same SMTP transport, sender and
 * recipients (SMTP_TO) as /api/quote, and invoices by hand; the buyer gets a
 * copy. Spam signals only label the subject "[Possible spam]"; they never refuse
 * an order (owner's rule: never drop a lead). If delivery fails, the whole order
 * is written to the runtime log so it can be recovered.
 */
import type { APIRoute } from 'astro';
import { site } from '../../data/site';
import {
  PACK_QTY,
  PACK_PRICE,
  MAX_PACKS,
  PAYMENT_METHODS,
  SHIP_COUNTRIES,
  COD_COUNTRIES,
  ORDER_CATALOG,
  ORDER_UNITS,
  SHIPPING,
  PRODUCTION_TEXT,
  transitFor,
  money,
} from '../../data/order';
import {
  buildFrom,
  createTransport,
  readSmtpConfig,
  safeErrorMessage,
} from '../../lib/server/mailer';

export const prerender = false;

const MAX_FILE = 4 * 1024 * 1024;
const ALLOWED_EXT = /\.(pdf|ai|eps|svg|png|jpe?g|zip)$/i;
const FIELDS = ['name', 'email', 'phone', 'company', 'address1', 'address2', 'city', 'region', 'postal', 'country', 'notes', 'payment', 'items', 'ts', 'website'] as const;
const REQUIRED = ['name', 'email', 'phone', 'address1', 'city', 'postal'] as const;
const HOST = new URL(site.url).host;

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string);
const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim();
const json = (status: number, body: object) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });

function orderRef() {
  const d = new Date();
  const ymd = `${String(d.getUTCFullYear()).slice(2)}${String(d.getUTCMonth() + 1).padStart(2, '0')}${String(d.getUTCDate()).padStart(2, '0')}`;
  const abc = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return `LB-${ymd}-${Array.from(crypto.getRandomValues(new Uint8Array(4)), (b) => abc[b % abc.length]).join('')}`;
}

interface Mail {
  to?: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
  attachments?: { filename: string; content: Buffer }[];
}

/** Sends through the same SMTP configuration as /api/quote. */
async function send(mail: Mail): Promise<{ delivered: boolean; detail?: string }> {
  const configResult = readSmtpConfig(process.env);
  if (!configResult.ok) {
    return { delivered: false, detail: `SMTP not configured; missing ${configResult.missing.join(', ')}` };
  }
  const config = configResult.config;
  try {
    const transporter = createTransport(config);
    const { from, sender } = buildFrom(config);
    const info = await transporter.sendMail({
      from,
      ...(sender ? { sender } : {}),
      to: mail.to ?? config.to,
      subject: oneLine(mail.subject).slice(0, 200),
      text: mail.text,
      html: mail.html,
      ...(mail.replyTo ? { replyTo: mail.replyTo } : {}),
      ...(mail.attachments?.length ? { attachments: mail.attachments } : {}),
    });
    const accepted = Array.isArray(info.accepted) ? info.accepted.length : 0;
    if (accepted === 0) return { delivered: false, detail: 'SMTP server accepted no recipients' };
    return { delivered: true };
  } catch (error) {
    return { delivered: false, detail: safeErrorMessage(error, config) };
  }
}

export const POST: APIRoute = async ({ request }) => {
  // The checkout posts JSON with the artwork base64-encoded. A plain multipart
  // form post is read too.
  const body: Record<string, unknown> = {};
  let upload: { name: string; bytes: Buffer } | null = null;
  try {
    if ((request.headers.get('content-type') ?? '').includes('application/json')) {
      Object.assign(body, (await request.json()) as Record<string, unknown>);
      if (typeof body.artwork === 'string' && body.artwork && typeof body.artworkName === 'string') {
        upload = { name: body.artworkName, bytes: Buffer.from(body.artwork, 'base64') };
      }
    } else {
      const form = await request.formData();
      for (const [k, val] of form.entries()) {
        if (typeof val === 'string') body[k] = val;
        else if (k === 'artwork' && val.size > 0) {
          upload = { name: val.name, bytes: Buffer.from(await val.arrayBuffer()) };
        }
      }
    }
  } catch {
    return json(400, { ok: false, error: 'Could not read the order' });
  }
  const v = Object.fromEntries(
    FIELDS.map((k) => {
      const raw = body[k];
      return [k, (typeof raw === 'string' ? raw : '').trim().slice(0, k === 'items' ? 8000 : 2000)];
    }),
  ) as Record<(typeof FIELDS)[number], string>;

  if (REQUIRED.some((k) => !v[k]) || !/^[^\s@,;<>"']+@[^\s@,;<>"']+\.[^\s@,;<>"']+$/.test(v.email)) {
    return json(422, { ok: false, error: 'Please fill in every required field' });
  }
  const country = SHIP_COUNTRIES.find((c) => c.code === (v.country || 'US'));
  if (!country) {
    return json(422, {
      ok: false,
      error: 'Online orders ship to the US, UK, Canada and Australia. Please request a quote for other countries',
    });
  }
  const method = PAYMENT_METHODS.find((m) => m.id === v.payment);
  if (!method) return json(422, { ok: false, error: 'Choose a payment method' });
  if (method.id === 'cod' && !COD_COUNTRIES.includes(country.code)) {
    return json(422, { ok: false, error: 'Cash on delivery is only for US and Canadian addresses' });
  }

  // Never trust the browser's prices: rebuild every line from the catalog.
  let raw: unknown = [];
  try {
    raw = JSON.parse(v.items || '[]');
  } catch {}
  const lines = (Array.isArray(raw) ? raw : [])
    .slice(0, 30)
    .map((l: { slug?: unknown; packs?: unknown }) => ({ slug: String(l?.slug ?? ''), packs: Math.floor(Number(l?.packs)) }))
    .filter((l) => ORDER_CATALOG[l.slug] && l.packs >= 1 && l.packs <= MAX_PACKS)
    .map((l) => ({
      name: ORDER_CATALOG[l.slug],
      url: `${site.url}/${l.slug}/`,
      qty: l.packs * PACK_QTY,
      unit: ORDER_UNITS[l.slug],
      total: l.packs * PACK_PRICE,
    }));
  if (!lines.length) return json(422, { ok: false, error: 'Your order is empty' });
  const total = lines.reduce((s, l) => s + l.total, 0);

  // Spam signals label the email; they never block it.
  const spam: string[] = [];
  if (v.website) spam.push('hidden field filled');
  const sentAt = Number(v.ts);
  if (Number.isFinite(sentAt) && sentAt > 0 && Date.now() - sentAt < 4000) {
    spam.push('submitted within 4 seconds of page load');
  }
  const attachments: { filename: string; content: Buffer }[] = [];
  if (upload && upload.bytes.length > 0) {
    if (upload.bytes.length <= MAX_FILE && ALLOWED_EXT.test(upload.name)) {
      attachments.push({ filename: upload.name.replace(/[^\w.\- ]+/g, '_').slice(-120), content: upload.bytes });
    } else {
      spam.push(`attachment not accepted (${oneLine(upload.name).slice(0, 60)}, ${upload.bytes.length} bytes)`);
    }
  }
  const spamLine = spam.length ? `Spam check: ${spam.join('; ')}` : '';

  const ref = orderRef();
  const transit = transitFor(country.code) ?? SHIPPING.destinations[0];
  const address = [v.address1, v.address2, [v.city, v.region, v.postal].filter(Boolean).join(', '), country.name]
    .filter(Boolean)
    .join('\n');
  const payLine =
    method.id === 'cod'
      ? 'Cash on delivery: the customer pays when the order arrives'
      : `${method.name}: send the invoice after the customer approves the proof`;
  const itemText = lines.map((l) => `- ${l.name}: ${l.qty.toLocaleString('en-US')} ${l.unit}, ${money(l.total)}`).join('\n');
  const td = 'style="padding:6px 12px;border-bottom:1px solid #e5e7eb"';
  const itemHtml = `<table style="font-family:Arial,sans-serif;border-collapse:collapse">${lines
    .map(
      (l) =>
        `<tr><td ${td}><a href="${l.url}">${esc(l.name)}</a></td><td ${td}>${l.qty.toLocaleString('en-US')} ${l.unit}</td><td ${td} align="right">${money(l.total)}</td></tr>`,
    )
    .join('')}<tr><td ${td}>Shipping</td><td ${td}></td><td ${td} align="right">Free</td></tr><tr><th align="left" ${td}>Total</th><td ${td}></td><th ${td} align="right">${money(total)}</th></tr></table>`;
  const office = [
    `PAYMENT: ${payLine}`,
    spamLine,
    `Order ${ref}`,
    '',
    itemText,
    `Total: ${money(total)} (free shipping)`,
    '',
    `Name: ${v.name}`,
    `Email: ${v.email}`,
    `Phone: ${v.phone}`,
    v.company ? `Company: ${v.company}` : '',
    '',
    'Ship to:',
    address,
    '',
    v.notes ? `Notes: ${v.notes}` : '',
    attachments.length ? `Artwork attached: ${attachments[0].filename}` : 'No artwork attached',
    `Site: ${HOST}`,
  ]
    .filter((x) => x !== '')
    .join('\n');

  const team = await send({
    subject: `${spam.length ? '[Possible spam] ' : ''}New order ${ref}: ${money(total)}, ${method.name}, ${country.code} – ${oneLine(v.name).slice(0, 80)} — ${HOST}`,
    text: office,
    html: `<div style="font-family:Arial,sans-serif;max-width:640px"><p style="font-size:16px;background:#fff4e5;padding:10px 12px"><b>PAYMENT:</b> ${esc(payLine)}</p>${spamLine ? `<p style="background:#fde3d8;padding:8px 12px">${esc(spamLine)}</p>` : ''}<h2>Order ${ref}</h2>${itemHtml}<p>${esc(v.name)}<br>${esc(v.email)}<br>${esc(v.phone)}${v.company ? `<br>${esc(v.company)}` : ''}</p><p><b>Ship to</b><br>${esc(address).replace(/\n/g, '<br>')}</p>${v.notes ? `<p><b>Notes</b><br>${esc(v.notes).replace(/\n/g, '<br>')}</p>` : ''}<p>${attachments.length ? `Artwork attached: ${esc(attachments[0].filename)}` : 'No artwork attached'}</p><p style="color:#6b7280;font-size:12px">Sent from the checkout at ${HOST}</p></div>`,
    replyTo: oneLine(v.email),
    attachments,
  });

  if (!team.delivered) {
    // Never drop an order: the whole thing goes to the runtime log so it can be
    // recovered, and the buyer is told to call rather than told it went through.
    console.error(`[order] NOT delivered: ${team.detail}`, { ref, office });
    return json(503, {
      ok: false,
      error: `We could not send your order just now. Please call ${site.phoneDisplay} or email ${site.email}`,
    });
  }
  console.log(`[order] ${ref} delivered${spam.length ? ' (possible spam)' : ''}`);

  // The buyer's copy is a courtesy; if it fails the order still stands.
  const steps = [
    'We check your artwork and email you a proof.',
    'You approve the proof or ask for changes. Nothing is printed before you approve.',
    method.detail,
    `Production takes ${PRODUCTION_TEXT}, then your order ships free to ${country.name} and arrives in ${transit.transitMin}–${transit.transitMax} business days.`,
  ];
  const buyer = await send({
    to: oneLine(v.email),
    replyTo: site.email,
    subject: `Your order ${ref} with ${site.name}`,
    text: [
      `Hi ${v.name},`,
      '',
      `Thank you for your order ${ref}.`,
      '',
      itemText,
      'Shipping: free',
      `Total: ${money(total)}`,
      `Payment: ${method.name}`,
      '',
      'What happens next:',
      ...steps.map((s, i) => `${i + 1}. ${s}`),
      '',
      `Ship to:\n${address}`,
      '',
      `Questions? Call ${site.phoneDisplay} or reply to this email.`,
      site.name,
    ].join('\n'),
    html: `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5"><p>Hi ${esc(v.name)},</p><p>Thank you for your order <b>${ref}</b>.</p>${itemHtml}<p><b>Payment:</b> ${esc(method.name)}</p><p><b>What happens next</b></p><ol>${steps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol><p><b>Ship to</b><br>${esc(address).replace(/\n/g, '<br>')}</p><p>Questions? Call ${esc(site.phoneDisplay ?? '')} or reply to this email.</p><p>${esc(site.name)}</p></div>`,
  });
  if (!buyer.delivered) console.error(`[order] buyer copy failed for ${ref}: ${buyer.detail}`);

  return json(200, { ok: true, ref, total, payment: method.id });
};

/** A GET on the endpoint is not a page; send visitors to the checkout. */
export const GET: APIRoute = () =>
  new Response(null, { status: 303, headers: { location: '/checkout/' } });
