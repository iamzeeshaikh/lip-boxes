import net from 'node:net';
import tls from 'node:tls';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { spawn } from 'node:child_process';

const SMTP_PORT = 2526;
const SITE_PORT = 4399;
const BASE = `http://localhost:${SITE_PORT}`;

let passed = 0;
const failures = [];
function check(name, condition, detail = '') {
  if (condition) {
    passed += 1;
    console.log(`  ok   ${name}`);
  } else {
    failures.push(name);
    console.log(`  FAIL ${name}${detail ? ` — ${detail}` : ''}`);
  }
}

/* ------------------------------------------------------------------ *
 * A self-signed certificate for the sink, generated into a temporary  *
 * directory. The endpoint requires STARTTLS on a submission port, so  *
 * the sink has to offer it — which is itself part of what we verify.  *
 * ------------------------------------------------------------------ */
const certDir = fs.mkdtempSync(path.join(os.tmpdir(), 'lipboxes-smtp-'));
const keyPath = path.join(certDir, 'key.pem');
const certPath = path.join(certDir, 'cert.pem');
execFileSync('openssl', [
  'req', '-x509', '-newkey', 'rsa:2048', '-nodes',
  '-keyout', keyPath, '-out', certPath, '-days', '1',
  '-subj', '/CN=localhost',
  '-addext', 'subjectAltName=DNS:localhost,IP:127.0.0.1',
], { stdio: 'ignore' });
const tlsOptions = {
  key: fs.readFileSync(keyPath),
  cert: fs.readFileSync(certPath),
};

/* ------------------------------------------------------------------ *
 * A minimal SMTP sink: enough of the protocol to accept one message   *
 * over STARTTLS.                                                      *
 * ------------------------------------------------------------------ */
const received = [];

function handleSession(socket, greet) {
  let buffer = '';
  let inData = false;
  let expectingAuthLine = false;
  let message = { envelope: [], data: '' };

  const send = (line) => socket.write(`${line}\r\n`);
  if (greet) send('220 localhost ESMTP test sink');

  socket.setEncoding('utf8');
  socket.on('data', (chunk) => {
    buffer += chunk;

    for (;;) {
      if (inData) {
        const end = buffer.indexOf('\r\n.\r\n');
        if (end === -1) return;
        message.data += buffer.slice(0, end);
        buffer = buffer.slice(end + 5);
        inData = false;
        received.push(message);
        message = { envelope: [], data: '' };
        send('250 2.0.0 Ok: queued');
        continue;
      }

      const lineEnd = buffer.indexOf('\r\n');
      if (lineEnd === -1) return;
      const line = buffer.slice(0, lineEnd);
      buffer = buffer.slice(lineEnd + 2);
      const command = line.toUpperCase();

      if (expectingAuthLine) {
        expectingAuthLine = false;
        send('235 2.7.0 Authentication successful');
      } else if (command.startsWith('EHLO') || command.startsWith('HELO')) {
        send('250-localhost');
        if (!socket.encrypted) send('250-STARTTLS');
        else send('250-AUTH PLAIN LOGIN');
        send('250-SIZE 26214400');
        send('250 8BITMIME');
      } else if (command === 'STARTTLS') {
        send('220 2.0.0 Ready to start TLS');
        const secured = new tls.TLSSocket(socket, { ...tlsOptions, isServer: true });
        secured.on('secure', () => handleSession(secured, false));
        secured.on('error', () => {});
        socket.removeAllListeners('data');
        return;
      } else if (command.startsWith('AUTH')) {
        if (line.split(' ').length > 2) send('235 2.7.0 Authentication successful');
        else {
          expectingAuthLine = true;
          send('334 VXNlcm5hbWU6');
        }
      } else if (command.startsWith('MAIL FROM') || command.startsWith('RCPT TO')) {
        message.envelope.push(line);
        send('250 2.1.0 Ok');
      } else if (command === 'DATA') {
        inData = true;
        send('354 End data with <CR><LF>.<CR><LF>');
      } else if (command === 'QUIT') {
        send('221 2.0.0 Bye');
        socket.end();
        return;
      } else {
        send('250 2.0.0 Ok');
      }
    }
  });
  socket.on('error', () => {});
}

const smtp = net.createServer((socket) => handleSession(socket, true));

await new Promise((resolve) => smtp.listen(SMTP_PORT, '127.0.0.1', resolve));
console.log(`SMTP sink listening on 127.0.0.1:${SMTP_PORT}\n`);

/* ------------------------------------------------------------------ *
 * Start the dev server pointed at the sink                            *
 * ------------------------------------------------------------------ */
const server = spawn('npx', ['astro', 'dev', '--port', String(SITE_PORT)], {
  env: {
    ...process.env,
    SMTP_HOST: '127.0.0.1',
    SMTP_PORT: String(SMTP_PORT),
    SMTP_SECURE: 'false',
    SMTP_USER: 'sender@example.com',
    SMTP_PASS: 'test-app-password',
    SMTP_TO: 'orders@example.com',
    SMTP_FROM_NAME: 'Lip Boxes',
    SMTP_FROM_EMAIL: 'info@lipboxes.com',
    // The sink presents a self-signed certificate, so trust it for this run
    // only. Production verifies certificates normally.
    NODE_TLS_REJECT_UNAUTHORIZED: '0',
  },
  stdio: ['ignore', 'pipe', 'pipe'],
});
let serverLog = '';
server.stdout.on('data', (d) => { serverLog += d.toString(); });
server.stderr.on('data', (d) => { serverLog += d.toString(); });

async function waitForServer() {
  for (let i = 0; i < 60; i += 1) {
    try {
      const response = await fetch(`${BASE}/`);
      if (response.ok) return true;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  return false;
}

function cleanup(code) {
  server.kill('SIGTERM');
  smtp.close();
  fs.rmSync(certDir, { recursive: true, force: true });
  process.exit(code);
}

if (!(await waitForServer())) {
  console.error('Dev server did not start.');
  console.error(serverLog.slice(-2000));
  cleanup(1);
}

/* ------------------------------------------------------------------ *
 * Submit a realistic enquiry with an attachment                       *
 * ------------------------------------------------------------------ */
const PDF_BYTES = new TextEncoder().encode('%PDF-1.4\n% test artwork\n');

const form = new FormData();
form.set('formType', 'short');
form.set('product', 'Holographic Lip Gloss Boxes');
form.set('pageUrl', `${BASE}/holographic-lip-gloss-boxes/`);
// A crafted name that would inject a header if it were not sanitised.
form.set('name', 'Dana Reed\r\nBcc: attacker@example.com');
form.set('email', 'dana@brandexample.com');
form.set('phone', '+1 212 555 0188');
form.set('message', 'Quote 6,000 units. <script>alert(1)</script> Rainbow holo board, gloss laminate.');
form.set('consent', 'yes');
form.set('artwork', new File([PDF_BYTES], 'holo box artwork v3.pdf', { type: 'application/pdf' }));

const response = await fetch(`${BASE}/api/quote/`, {
  method: 'POST',
  body: form,
  headers: { Accept: 'application/json', Origin: BASE, 'X-Forwarded-For': '192.0.2.55' },
});
const payload = await response.json().catch(() => null);

console.log('Endpoint response');
check('submission accepted', response.status === 200 && payload?.ok === true,
  `status ${response.status} ${JSON.stringify(payload)}`);

await new Promise((r) => setTimeout(r, 600));

console.log('\nDelivered message');
check('exactly one message reached the SMTP server', received.length === 1, `got ${received.length}`);

if (received.length !== 1) {
  console.error(serverLog.slice(-2000));
  cleanup(1);
}

const mail = received[0];
const raw = mail.data;
const headerBlock = raw.split('\r\n\r\n')[0];
// Unfold headers, then decode RFC 2047 encoded-words so values can be matched.
const headers = decodeEncodedWords(headerBlock.replace(/\r\n[ \t]+/g, ' '));

/** Decodes RFC 2047 "=?UTF-8?Q?…?=" and "?B?…?=" header encoding. */
function decodeEncodedWords(text) {
  return text
    .replace(/(=\?[^?]+\?[QqBb]\?[^?]*\?=)\s+(?==\?)/g, '$1')
    .replace(/=\?[^?]+\?([QqBb])\?([^?]*)\?=/g, (_, kind, payload) => {
      if (kind.toUpperCase() === 'B') return Buffer.from(payload, 'base64').toString('utf8');
      return payload
        .replace(/_/g, ' ')
        .replace(/=([0-9A-Fa-f]{2})/g, (__, hex) => String.fromCharCode(parseInt(hex, 16)));
    });
}

/** Splits a multipart body into its parts so each can be asserted separately. */
function mimeParts(rawMessage) {
  const boundary = rawMessage.match(/boundary="?([^"\r\n;]+)"?/i)?.[1];
  if (!boundary) return [rawMessage];
  return rawMessage.split(`--${boundary}`).slice(1, -1);
}

function decodeQuotedPrintable(text) {
  return text
    .replace(/=\r\n/g, '')
    .replace(/=([0-9A-Fa-f]{2})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

const parts = mimeParts(raw).flatMap((part) =>
  /multipart\//i.test(part) ? mimeParts(part) : [part],
);
const textPart = decodeQuotedPrintable(
  parts.find((part) => /content-type:\s*text\/plain/i.test(part)) ?? '',
);
const htmlPart = decodeQuotedPrintable(
  parts.find((part) => /content-type:\s*text\/html/i.test(part)) ?? '',
);

check('envelope recipient is SMTP_TO', mail.envelope.some((l) => l.includes('orders@example.com')));
check(
  'Reply-To carries the visitor email',
  /^reply-to:.*dana@brandexample\.com/im.test(headers),
  headers.match(/^reply-to:.*/im)?.[0],
);
check(
  'From uses the authenticated account, not the visitor',
  /^from:.*sender@example\.com/im.test(headers) && !/^from:.*dana@brandexample/im.test(headers),
  headers.match(/^from:.*/im)?.[0],
);
check(
  'Sender header surfaces the intended branded address',
  /^sender:.*info@lipboxes\.com/im.test(headers),
  headers.match(/^sender:.*/im)?.[0],
);
check(
  'no Bcc header was injected',
  !/^bcc:/im.test(headerBlock.replace(/\r\n[ \t]+/g, ' ')),
  headerBlock.match(/^bcc:.*/im)?.[0],
);
check(
  'only the configured recipient is in the envelope',
  mail.envelope.filter((l) => /^RCPT TO/i.test(l)).length === 1 &&
    !mail.envelope.some((l) => l.includes('attacker@example.com')),
  mail.envelope.join(' | '),
);
check(
  'the CRLF in the name was collapsed rather than passed through',
  /Dana Reed Bcc: attacker@example\.com/.test(headers) &&
    !/Dana Reed\r\nBcc:/.test(headerBlock),
);
check(
  'subject names the product',
  /^subject:.*Holographic Lip Gloss Boxes/im.test(headers),
  headers.match(/^subject:.*/im)?.[0],
);
check('message is multipart with an attachment', /content-type:\s*multipart\//i.test(headers));
check('plain text part present', /content-type:\s*text\/plain/i.test(raw));
check('HTML part present', /content-type:\s*text\/html/i.test(raw));
check(
  'attachment filename sanitised and preserved',
  /filename="?holo-box-artwork-v3\.pdf"?/i.test(raw.replace(/=\r\n/g, '')),
  raw.match(/filename=[^\r\n;]+/i)?.[0],
);

const decoded = `${textPart}\n${htmlPart}`;

check('product name reaches the recipient in the body', decoded.includes('Holographic Lip Gloss Boxes'));
check('source page URL reaches the recipient', decoded.includes('/holographic-lip-gloss-boxes/'));
check('visitor phone reaches the recipient', decoded.includes('+1 212 555 0188'));
check('a timestamp is included', /Submitted: \d{4}-\d{2}-\d{2}T/.test(decoded));
check(
  'visitor HTML is escaped in the HTML part',
  htmlPart.includes('&lt;script&gt;alert(1)&lt;/script&gt;') &&
    !/<script>alert\(1\)<\/script>/.test(htmlPart),
);
check(
  'plain text part carries the message verbatim',
  textPart.includes('Quote 6,000 units.'),
);
check('no credential appears in the message', !/test-app-password/.test(raw));

console.log(`\n${passed} passed, ${failures.length} failed`);
if (failures.length) {
  for (const failure of failures) console.log(`  ✗ ${failure}`);
  console.log('\n--- server log tail ---');
  console.log(serverLog.slice(-1500));
}
cleanup(failures.length ? 1 : 0);
