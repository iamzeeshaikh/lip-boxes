/**
 * Server-only SMTP delivery.
 *
 * Never imported from client code. Credentials come from environment
 * variables and are never logged, never returned in a response body, and
 * never inlined into the build.
 */
import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

export interface SmtpConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  to: string;
  fromName: string;
  fromEmail: string;
}

export type ConfigResult =
  | { ok: true; config: SmtpConfig }
  | { ok: false; missing: string[] };

/** Reads and checks SMTP configuration without ever exposing the password. */
export function readSmtpConfig(env: Record<string, string | undefined>): ConfigResult {
  const required = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_TO'] as const;
  const missing = required.filter((key) => !env[key] || env[key]!.trim() === '');
  if (missing.length) return { ok: false, missing };

  const port = Number.parseInt(env.SMTP_PORT!, 10);
  if (!Number.isFinite(port) || port <= 0 || port > 65535) {
    return { ok: false, missing: ['SMTP_PORT'] };
  }

  return {
    ok: true,
    config: {
      host: env.SMTP_HOST!.trim(),
      port,
      // Port 465 is implicit TLS; 587 uses STARTTLS, which nodemailer
      // negotiates when `secure` is false.
      secure: env.SMTP_SECURE
        ? env.SMTP_SECURE.trim().toLowerCase() === 'true'
        : port === 465,
      user: env.SMTP_USER!.trim(),
      pass: env.SMTP_PASS!,
      to: env.SMTP_TO!.trim(),
      fromName: (env.SMTP_FROM_NAME ?? 'Lip Boxes').trim(),
      fromEmail: (env.SMTP_FROM_EMAIL ?? env.SMTP_USER!).trim(),
    },
  };
}

export function createTransport(config: SmtpConfig): Transporter {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    // STARTTLS is required on the submission port; an unencrypted
    // fallback is refused rather than silently accepted.
    requireTLS: !config.secure,
    auth: { user: config.user, pass: config.pass },
    tls: { minVersion: 'TLSv1.2' },
    connectionTimeout: 15_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });
}

/**
 * Builds the From header. Many providers, Gmail included, reject or rewrite a
 * From address that differs from the authenticated account unless it has been
 * verified as a send-as alias. When they differ we keep the branded display
 * name but authenticate honestly with the account address, and surface the
 * intended address in Sender so nothing is hidden.
 */
export function buildFrom(config: SmtpConfig): { from: string; sender?: string } {
  const displayName = config.fromName.replace(/["\\]/g, '');
  if (config.fromEmail.toLowerCase() === config.user.toLowerCase()) {
    return { from: `"${displayName}" <${config.fromEmail}>` };
  }
  return {
    from: `"${displayName}" <${config.user}>`,
    sender: config.fromEmail,
  };
}

/** Redacts anything that could leak a credential into a log line. */
export function safeErrorMessage(error: unknown, config?: SmtpConfig): string {
  let message =
    error instanceof Error ? `${error.name}: ${error.message}` : String(error);
  if (config?.pass) {
    message = message.split(config.pass).join('[redacted]');
  }
  return message.slice(0, 500);
}
