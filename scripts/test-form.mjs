/**
 * Functional tests for the quote endpoint against a running server.
 *
 *   node scripts/test-form.mjs [baseUrl]
 *
 * Covers required-field validation, email validation, file type and size
 * rejection, honeypot handling, rate limiting, header-injection sanitisation and
 * the SMTP-not-configured path. It never asserts that mail was delivered — only
 * that the endpoint behaves correctly and reports honestly.
 */
const BASE = process.argv[2] ?? 'http://localhost:4321';
const ENDPOINT = `${BASE}/api/quote/`;

let passed = 0;
const failures = [];

function check(name, condition, detail = '') {
  if (condition) {
    passed += 1;
    console.log(`  ok   ${name}`);
  } else {
    failures.push(`${name}${detail ? ` — ${detail}` : ''}`);
    console.log(`  FAIL ${name}${detail ? ` — ${detail}` : ''}`);
  }
}

/** A submission that is valid apart from the overrides supplied. */
function validForm(overrides = {}) {
  const form = new FormData();
  form.set('formType', 'short');
  form.set('product', 'Custom Lip Balm Boxes');
  form.set('pageUrl', `${BASE}/custom-lip-balm-boxes/`);
  form.set('name', 'Test Buyer');
  form.set('email', 'buyer@example.com');
  form.set('phone', '+1 415 555 0142');
  form.set('message', 'Please quote 5,000 boxes at 0.9 x 0.9 x 3 inches in kraft board.');
  form.set('consent', 'yes');
  for (const [key, value] of Object.entries(overrides)) {
    if (value === null) form.delete(key);
    else form.set(key, value);
  }
  return form;
}

/*
 * Astro's built-in origin check rejects cross-site POSTs, which is what we want
 * in production. Browsers always send Origin on a form submission, so the tests
 * send it too rather than disabling the protection.
 */
let clientCounter = 0;

/*
 * Each validation test simulates a different visitor, so the rate limiter does
 * not mask the behaviour under test. The rate-limit test below deliberately
 * reuses one client identity.
 */
async function post(form, headers = { Accept: 'application/json' }, client) {
  clientCounter += 1;
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    body: form,
    headers: {
      Origin: BASE,
      'X-Forwarded-For': client ?? `198.51.100.${clientCounter % 250}`,
      ...headers,
    },
  });
  const text = await response.text();
  let json = null;
  try {
    json = JSON.parse(text);
  } catch {
    /* HTML response for the no-JavaScript path */
  }
  return { status: response.status, json, text };
}

console.log(`Testing ${ENDPOINT}\n`);

/* ---------------------------------------------------------------- */
console.log('Required-field validation');
for (const field of ['name', 'email', 'phone', 'message', 'consent']) {
  const result = await post(validForm({ [field]: null }));
  check(
    `missing ${field} is rejected`,
    result.status === 422 && result.json?.ok === false && Boolean(result.json?.fieldErrors?.[field]),
    `status ${result.status}, fieldErrors ${JSON.stringify(result.json?.fieldErrors ?? {})}`,
  );
}
{
  const result = await post(validForm({ name: ' ' }));
  check('whitespace-only name is rejected', result.status === 422);
}

/* ---------------------------------------------------------------- */
console.log('\nEmail and phone validation');
for (const bad of ['notanemail', 'missing@tld', 'a b@example.com', '@example.com']) {
  const result = await post(validForm({ email: bad }));
  check(`invalid email "${bad}" is rejected`, result.status === 422 && Boolean(result.json?.fieldErrors?.email));
}
{
  const result = await post(validForm({ phone: '12' }));
  check('implausible phone is rejected', result.status === 422 && Boolean(result.json?.fieldErrors?.phone));
}

/* ---------------------------------------------------------------- */
console.log('\nFile upload validation');
{
  const form = validForm();
  form.set('artwork', new File([new Uint8Array(1024)], 'design.exe', { type: 'application/x-msdownload' }));
  const result = await post(form);
  check('disallowed extension is rejected', result.status === 422 && Boolean(result.json?.fieldErrors?.artwork));
}
{
  const form = validForm();
  form.set('artwork', new File(['<?php echo 1; ?>'], 'shell.php', { type: 'application/x-httpd-php' }));
  const result = await post(form);
  check('executable script upload is rejected', result.status === 422);
}
{
  const form = validForm();
  // Allowed extension but a contradicting declared MIME type.
  form.set('artwork', new File([new Uint8Array(64)], 'artwork.pdf', { type: 'text/html' }));
  const result = await post(form);
  check('extension/MIME mismatch is rejected', result.status === 422);
}
{
  const form = validForm();
  form.set('artwork', new File([new Uint8Array(11 * 1024 * 1024)], 'big.pdf', { type: 'application/pdf' }));
  const result = await post(form);
  check(
    'oversized file is rejected',
    result.status === 422 && /larger than 10 MB/i.test(result.json?.fieldErrors?.artwork ?? ''),
    result.json?.fieldErrors?.artwork,
  );
}

/* ---------------------------------------------------------------- */
console.log('\nSpam and abuse handling');
{
  const result = await post(validForm({ companyWebsite: 'http://spam.example' }));
  check(
    'honeypot submission is silently accepted without revealing the trap',
    result.status === 200 && result.json?.ok === true,
  );
}
{
  // A crafted header-injection attempt must be sanitised rather than rejected
  // outright, and must not surface in an error.
  const result = await post(
    validForm({ name: 'Buyer\r\nBcc: attacker@example.com' }),
  );
  check(
    'CRLF in a header field does not produce a server error',
    result.status !== 500,
    `status ${result.status}`,
  );
}

/* ---------------------------------------------------------------- */
console.log('\nSMTP configuration handling');
{
  const result = await post(validForm());
  const smtpConfigured = result.status === 200 && result.json?.ok === true;
  if (smtpConfigured) {
    check('valid submission accepted and mail sent', true);
  } else {
    check(
      'unconfigured SMTP returns a generic error rather than claiming success',
      result.status === 503 &&
        result.json?.ok === false &&
        /could not be sent/i.test(result.json?.message ?? ''),
      `status ${result.status}, message ${result.json?.message}`,
    );
    check(
      'error message does not name any credential',
      !/SMTP_|password|gmail|smtp\./i.test(result.json?.message ?? ''),
      result.json?.message,
    );
  }
}

/* ---------------------------------------------------------------- */
console.log('\nNo-JavaScript path');
{
  const result = await post(validForm(), { Accept: 'text/html' });
  check('HTML response returned without a JSON Accept header', /<!doctype html>/i.test(result.text));
  check('HTML result page is noindexed', /noindex/i.test(result.text));
  check('HTML result page exposes no credential', !/SMTP_|gmail/i.test(result.text));
}

/* ---------------------------------------------------------------- */
console.log('\nMethod handling');
{
  const response = await fetch(ENDPOINT, { method: 'GET', redirect: 'manual' });
  check('GET redirects to the quote page', response.status === 303, `status ${response.status}`);
}

/* ---------------------------------------------------------------- */
console.log('\nRate limiting');
{
  let limited = false;
  for (let i = 0; i < 10; i += 1) {
    const result = await post(validForm(), { Accept: 'application/json' }, '203.0.113.7');
    if (result.status === 429) {
      limited = true;
      check('rate limit message is user-appropriate', /wait a few minutes/i.test(result.json?.message ?? ''));
      break;
    }
  }
  check('repeated submissions are rate limited', limited);
}

/* ---------------------------------------------------------------- */
console.log(`\n${passed} passed, ${failures.length} failed`);
if (failures.length) {
  for (const failure of failures) console.log(`  ✗ ${failure}`);
  process.exit(1);
}
