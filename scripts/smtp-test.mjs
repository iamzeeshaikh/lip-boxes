/**
 * SMTP connection test.
 *
 * Verifies the configured mail server accepts the credentials, without printing
 * or otherwise revealing them. Run with `npm run smtp:test`.
 *
 *   npm run smtp:test              # verify the connection only
 *   npm run smtp:test -- --send    # also send one test message to SMTP_TO
 */
import fs from 'node:fs';
import path from 'node:path';
import nodemailer from 'nodemailer';

/* Load .env without adding a dependency. Existing process env wins. */
const envPath = path.join(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!match) continue;
    const [, key, rawValue] = match;
    if (process.env[key] !== undefined) continue;
    process.env[key] = rawValue.replace(/^["']|["']$/g, '');
  }
}

const REQUIRED = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_TO'];

/** Shows presence and shape only — never the value. */
function describe(key) {
  const value = process.env[key];
  if (!value) return 'not set';
  if (key === 'SMTP_PASS') return `set (${value.length} characters)`;
  if (key === 'SMTP_USER' || key === 'SMTP_TO' || key === 'SMTP_FROM_EMAIL') {
    const [local, domain] = value.split('@');
    return domain ? `${local.slice(0, 2)}…@${domain}` : 'set';
  }
  return value;
}

console.log('SMTP configuration');
console.log('------------------');
for (const key of [...REQUIRED, 'SMTP_SECURE', 'SMTP_FROM_NAME', 'SMTP_FROM_EMAIL']) {
  console.log(`${key.padEnd(16)} ${describe(key)}`);
}
console.log('');

const missing = REQUIRED.filter((key) => !process.env[key]);
if (missing.length) {
  console.error(`Missing required variables: ${missing.join(', ')}`);
  console.error('Set them in .env locally, or in the hosting environment for production.');
  process.exit(1);
}

const port = Number.parseInt(process.env.SMTP_PORT, 10);
const secure = process.env.SMTP_SECURE
  ? process.env.SMTP_SECURE.toLowerCase() === 'true'
  : port === 465;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port,
  secure,
  requireTLS: !secure,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  tls: { minVersion: 'TLSv1.2' },
  connectionTimeout: 15_000,
});

/** Strips the password from any message before it reaches a log. */
function redact(text) {
  const pass = process.env.SMTP_PASS;
  const message = String(text);
  return pass ? message.split(pass).join('[redacted]') : message;
}

try {
  console.log(`Connecting to ${process.env.SMTP_HOST}:${port} (${secure ? 'implicit TLS' : 'STARTTLS'})…`);
  await transporter.verify();
  console.log('Connection and authentication succeeded.');
} catch (error) {
  console.error('Connection or authentication failed.');
  console.error(redact(error instanceof Error ? `${error.name}: ${error.message}` : error));
  console.error('');
  console.error('For Gmail on port 587, SMTP_PASS must be a 16-character app password');
  console.error('generated with two-step verification enabled, not the account password.');
  process.exit(1);
}

if (process.argv.includes('--send')) {
  try {
    const displayName = (process.env.SMTP_FROM_NAME ?? 'Lip Boxes').replace(/["\\]/g, '');
    const fromEmail = process.env.SMTP_FROM_EMAIL ?? process.env.SMTP_USER;
    const sameIdentity = fromEmail.toLowerCase() === process.env.SMTP_USER.toLowerCase();

    const info = await transporter.sendMail({
      from: `"${displayName}" <${sameIdentity ? fromEmail : process.env.SMTP_USER}>`,
      ...(sameIdentity ? {} : { sender: fromEmail }),
      to: process.env.SMTP_TO,
      subject: 'Lip Boxes SMTP test',
      text: `SMTP delivery test sent at ${new Date().toISOString()}.\n\nIf you received this, the quote forms can deliver mail.\n`,
    });
    console.log(`Test message accepted for ${info.accepted.length} recipient(s).`);
    if (!sameIdentity) {
      console.log('');
      console.log(`Note: SMTP_FROM_EMAIL (${describe('SMTP_FROM_EMAIL')}) differs from`);
      console.log('SMTP_USER, so the From header uses the authenticated account.');
      console.log('To send as the branded address, verify it as a send-as alias');
      console.log('on the Gmail account first.');
    }
  } catch (error) {
    console.error('Sending failed.');
    console.error(redact(error instanceof Error ? `${error.name}: ${error.message}` : error));
    process.exit(1);
  }
}

transporter.close();
