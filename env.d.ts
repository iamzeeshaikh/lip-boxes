/// <reference types="astro/client" />

/**
 * Server-only environment variables.
 *
 * These are read through `process.env` inside the quote endpoint so they are
 * resolved at request time and can never be inlined into client bundles. None
 * of them is prefixed with PUBLIC_, so Astro will not expose them.
 */
declare namespace NodeJS {
  interface ProcessEnv {
    SMTP_HOST?: string;
    SMTP_PORT?: string;
    SMTP_SECURE?: string;
    SMTP_USER?: string;
    SMTP_PASS?: string;
    SMTP_TO?: string;
    SMTP_FROM_NAME?: string;
    SMTP_FROM_EMAIL?: string;
  }
}
