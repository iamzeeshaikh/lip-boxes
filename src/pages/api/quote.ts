/**
 * POST /api/quote/ — receives both the short product form and the full quote
 * form, validates and sanitises everything server-side, then delivers by SMTP.
 *
 * Runs server-side only. It never reports success unless the SMTP server
 * accepted the message, and it returns generic errors to the browser while
 * logging safe detail on the server.
 */
import type { APIRoute } from 'astro';
import { site } from '../../data/site';
import { products } from '../../data/products';
import {
  checkUpload,
  escapeHtml,
  isPlausiblePhone,
  isValidEmail,
  safePageUrl,
  sanitizeHeaderValue,
  sanitizeText,
} from '../../lib/server/validate';
import {
  buildFrom,
  createTransport,
  readSmtpConfig,
  safeErrorMessage,
} from '../../lib/server/mailer';
import { checkRateLimit, clientKey } from '../../lib/server/rate-limit';

export const prerender = false;

const GENERIC_FAILURE =
  'Your enquiry could not be sent right now. Please try again in a moment, or email us directly.';

const SUCCESS =
  'Thanks — your enquiry has reached us. We reply to quote requests in the order they arrive.';

/** Fields collected by the long form, in the order they appear in the email. */
const LONG_FIELDS: { name: string; label: string; max?: number }[] = [
  { name: 'businessName', label: 'Business name' },
  { name: 'product', label: 'Product' },
  { name: 'quantity', label: 'Quantity' },
  { name: 'dimensions', label: 'Dimensions' },
  { name: 'dimensionUnit', label: 'Unit' },
  { name: 'material', label: 'Material preference' },
  { name: 'printing', label: 'Printing requirements' },
  { name: 'finishing', label: 'Finishing requirements' },
  { name: 'artworkStatus', label: 'Artwork status' },
  { name: 'deliveryDate', label: 'Required delivery date' },
  { name: 'shippingDestination', label: 'Shipping destination' },
];

function json(body: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      ...headers,
    },
  });
}

/** Renders a self-contained result page for submissions made without JS. */
function htmlResult(ok: boolean, message: string, status: number) {
  const title = ok ? 'Enquiry sent' : 'Enquiry not sent';
  return new Response(
    `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${escapeHtml(title)} — Lip Boxes</title>
<style>
:root{color-scheme:light}
body{margin:0;min-height:100vh;display:grid;place-items:center;padding:2rem;
background:#fdfaf7;color:#241a26;
font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;line-height:1.6}
main{max-width:34rem;background:#fff;border:1px solid #e6dcd6;border-radius:5px;padding:2rem}
h1{font-size:1.5rem;margin:0 0 .75rem;color:#5c1f3c}
p{margin:0 0 1rem}
a.btn{display:inline-block;margin-top:.5rem;padding:.7rem 1.3rem;background:#5c1f3c;color:#fff;
border-radius:5px;text-decoration:none;font-weight:600}
a.btn:hover{background:#431529}
</style></head><body><main>
<h1>${escapeHtml(title)}</h1>
<p>${escapeHtml(message)}</p>
<p><a class="btn" href="/">Back to Lip Boxes</a></p>
</main></body></html>`,
    {
      status,
      headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' },
    },
  );
}

/** Where a successful submission lands. Matches the client-side redirect. */
const SUCCESS_PAGE = '/thank-you/';

function respond(
  request: Request,
  ok: boolean,
  message: string,
  status: number,
  fieldErrors?: Record<string, string>,
  headers?: Record<string, string>,
) {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  if (wantsJson) return json({ ok, message, fieldErrors }, status, headers);
  // Without JavaScript, follow POST/redirect/GET so a refresh cannot resubmit
  // the enquiry. Failures still render inline, because there is nowhere useful
  // to redirect an error to.
  if (ok) {
    return new Response(null, {
      status: 303,
      headers: { location: SUCCESS_PAGE, 'cache-control': 'no-store', ...headers },
    });
  }
  return htmlResult(ok, message, status);
}

export const POST: APIRoute = async ({ request }) => {
  /* ---------------------------------------------------------------- *
   * 1. Rate limiting                                                  *
   * ---------------------------------------------------------------- */
  const limit = checkRateLimit(clientKey(request));
  if (!limit.allowed) {
    return respond(
      request,
      false,
      'That is several enquiries in a short time. Please wait a few minutes before sending another, or email us directly.',
      429,
      undefined,
      { 'retry-after': String(limit.retryAfterSeconds) },
    );
  }

  /* ---------------------------------------------------------------- *
   * 2. Parse the multipart body                                       *
   * ---------------------------------------------------------------- */
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return respond(request, false, 'That submission could not be read. Please try again.', 400);
  }

  /* ---------------------------------------------------------------- *
   * 3. Honeypot — a filled hidden field is discarded quietly           *
   * ---------------------------------------------------------------- */
  if (sanitizeHeaderValue(form.get('companyWebsite')) !== '') {
    // Report success so an automated client learns nothing from the response.
    return respond(request, true, SUCCESS, 200);
  }

  /* ---------------------------------------------------------------- *
   * 4. Validate the required fields                                   *
   * ---------------------------------------------------------------- */
  const fieldErrors: Record<string, string> = {};

  const name = sanitizeHeaderValue(form.get('name'), 120);
  const email = sanitizeHeaderValue(form.get('email'), 254);
  const phone = sanitizeHeaderValue(form.get('phone'), 40);
  const message = sanitizeText(form.get('message'), 4000);
  const consent = sanitizeHeaderValue(form.get('consent'), 10);

  if (name.length < 2) fieldErrors.name = 'Please tell us your name.';
  if (!isValidEmail(email)) {
    fieldErrors.email = 'Enter an email address in the form name@example.com.';
  }
  if (!isPlausiblePhone(phone)) {
    fieldErrors.phone = 'Enter a phone number we can reach you on, including the area code.';
  }
  if (message.length < 5) {
    fieldErrors.message = 'Please add a short message so we know what to quote.';
  }
  if (consent !== 'yes') {
    fieldErrors.consent = 'Please tick the consent box so we can reply to your enquiry.';
  }

  /* ---------------------------------------------------------------- *
   * 5. Validate the upload                                            *
   * ---------------------------------------------------------------- */
  const upload = form.get('artwork');
  let attachment: { filename: string; content: Buffer } | null = null;

  if (upload instanceof File && upload.size > 0) {
    const check = checkUpload(upload);
    if (!check.ok) {
      fieldErrors.artwork = check.error!;
    } else {
      const bytes = Buffer.from(await upload.arrayBuffer());
      // Filenames are rebuilt from a safe character set, so an uploaded name
      // can never traverse a path or carry a second extension through.
      const extension = check.extension ?? 'bin';
      const base = upload.name
        .replace(/\.[^.]+$/, '')
        .replace(/[^a-zA-Z0-9._-]/g, '-')
        .replace(/-+/g, '-')
        .slice(0, 60) || 'artwork';
      attachment = { filename: `${base}.${extension}`, content: bytes };
    }
  }

  if (Object.keys(fieldErrors).length > 0) {
    return respond(
      request,
      false,
      'Some details still need correcting before we can send this.',
      422,
      fieldErrors,
    );
  }

  /* ---------------------------------------------------------------- *
   * 6. Build the email                                               *
   * ---------------------------------------------------------------- */
  const formType = sanitizeHeaderValue(form.get('formType'), 20) === 'full' ? 'full' : 'short';
  const pageUrl = safePageUrl(form.get('pageUrl'), site.url);

  // Only accept a product name that matches a published product, so the
  // subject line cannot be set to arbitrary text by a crafted request.
  const submittedProduct = sanitizeHeaderValue(form.get('product'), 120);
  const knownProduct = products.find(
    (p) => p.name.toLowerCase() === submittedProduct.toLowerCase(),
  );
  const productLabel = knownProduct
    ? knownProduct.name
    : submittedProduct
      ? `${submittedProduct} (not a listed product)`
      : 'Not specified';

  const rows: [string, string][] = [
    ['Name', name],
    ['Email', email],
    ['Phone', phone],
    ['Product', productLabel],
  ];

  if (formType === 'full') {
    for (const field of LONG_FIELDS) {
      if (field.name === 'product') continue;
      const value = sanitizeText(form.get(field.name), field.max ?? 400);
      if (value) rows.push([field.label, value]);
    }
  }

  rows.push(['Source page', pageUrl || 'Not recorded']);
  rows.push(['Submitted', new Date().toISOString()]);
  rows.push(['Attachment', attachment ? attachment.filename : 'None']);

  const subject = sanitizeHeaderValue(
    `Quote request — ${productLabel} — ${name}`,
    150,
  );

  const textBody = [
    `New ${formType === 'full' ? 'full' : 'quick'} quote request from lipboxes.com`,
    '',
    ...rows.map(([label, value]) => `${label}: ${value}`),
    '',
    'Message',
    '-------',
    message,
    '',
  ].join('\n');

  const htmlBody = `<!doctype html><html><body style="margin:0;padding:24px;background:#f8f1ea;font-family:Arial,Helvetica,sans-serif;color:#241a26">
<div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e6dcd6;border-radius:6px;padding:24px">
<h1 style="margin:0 0 4px;font-size:18px;color:#5c1f3c">New ${escapeHtml(formType === 'full' ? 'full' : 'quick')} quote request</h1>
<p style="margin:0 0 20px;font-size:13px;color:#6b5c6e">lipboxes.com</p>
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;font-size:14px">
${rows
  .map(
    ([label, value]) =>
      `<tr><th align="left" style="padding:8px 12px 8px 0;border-bottom:1px solid #f0e8e2;vertical-align:top;width:36%;color:#4c3f4f;font-weight:600">${escapeHtml(label)}</th><td style="padding:8px 0;border-bottom:1px solid #f0e8e2;vertical-align:top">${escapeHtml(value)}</td></tr>`,
  )
  .join('')}
</table>
<h2 style="margin:24px 0 8px;font-size:15px;color:#5c1f3c">Message</h2>
<div style="font-size:14px;line-height:1.6;white-space:pre-wrap;background:#fdfaf7;border:1px solid #f0e8e2;border-radius:4px;padding:14px">${escapeHtml(message)}</div>
</div></body></html>`;

  /* ---------------------------------------------------------------- *
   * 7. Deliver                                                       *
   * ---------------------------------------------------------------- */
  // Read from process.env at request time. Nothing SMTP-related is referenced
  // through import.meta.env, so no credential can be inlined into the bundle.
  const configResult = readSmtpConfig(process.env);
  if (!configResult.ok) {
    // Never name the values, only the keys that are unset.
    console.error(
      `[quote] SMTP is not configured. Missing environment variables: ${configResult.missing.join(', ')}`,
    );
    return respond(request, false, GENERIC_FAILURE, 503);
  }

  const config = configResult.config;

  try {
    const transporter = createTransport(config);
    const { from, sender } = buildFrom(config);

    const info = await transporter.sendMail({
      from,
      ...(sender ? { sender } : {}),
      to: config.to,
      // The visitor's address goes in Reply-To only, never in From.
      replyTo: `"${name.replace(/["\\]/g, '')}" <${email}>`,
      subject,
      text: textBody,
      html: htmlBody,
      ...(attachment
        ? { attachments: [{ filename: attachment.filename, content: attachment.content }] }
        : {}),
    });

    // Only claim success when the server actually accepted the recipient.
    const accepted = Array.isArray(info.accepted) ? info.accepted.length : 0;
    if (accepted === 0) {
      console.error('[quote] SMTP server accepted no recipients.');
      return respond(request, false, GENERIC_FAILURE, 502);
    }

    return respond(request, true, SUCCESS, 200);
  } catch (error) {
    console.error(`[quote] SMTP delivery failed — ${safeErrorMessage(error, config)}`);
    return respond(request, false, GENERIC_FAILURE, 502);
  }
};

/** A GET on the endpoint is not a page; send visitors to the form. */
export const GET: APIRoute = () =>
  new Response(null, { status: 303, headers: { location: '/request-a-quote/' } });
