/**
 * Server-side validation and sanitisation for quote submissions.
 * Runs on every request. The client-side checks are a convenience only.
 */

export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;

export const ALLOWED_UPLOADS: Record<string, string[]> = {
  pdf: ['application/pdf'],
  ai: ['application/postscript', 'application/illustrator', 'application/pdf', 'application/octet-stream'],
  eps: ['application/postscript', 'image/x-eps', 'application/eps', 'application/octet-stream'],
  psd: ['image/vnd.adobe.photoshop', 'application/x-photoshop', 'application/octet-stream'],
  svg: ['image/svg+xml'],
  png: ['image/png'],
  jpg: ['image/jpeg'],
  jpeg: ['image/jpeg'],
  doc: ['application/msword', 'application/octet-stream'],
  docx: [
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/octet-stream',
  ],
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

/** Every C0 control character plus DEL. */
const CONTROL_CHARS = /[\u0000-\u001F\u007F]/g;
/** Same, but keeps the line feed so multi-line text survives. */
const CONTROL_CHARS_KEEP_LF = /[\u0000-\u0009\u000B-\u001F\u007F]/g;

/** Strips control characters and CR/LF so a value can never inject a header. */
export function sanitizeHeaderValue(input: unknown, maxLength = 200): string {
  return String(input ?? '')
    .replace(CONTROL_CHARS, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength);
}

/** Normalises a multi-line text value: keeps newlines, drops control chars. */
export function sanitizeText(input: unknown, maxLength = 5000): string {
  return String(input ?? '')
    .replace(/\r\n/g, '\n')
    .replace(CONTROL_CHARS_KEEP_LF, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, maxLength);
}

/** Escapes a value for safe interpolation into the HTML email body. */
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function isValidEmail(value: string): boolean {
  return value.length <= 254 && EMAIL_RE.test(value);
}

export function isPlausiblePhone(value: string): boolean {
  const digits = value.replace(/[^0-9]/g, '');
  return digits.length >= 7 && digits.length <= 20;
}

export interface UploadCheck {
  ok: boolean;
  error?: string;
  extension?: string;
}

export function checkUpload(file: File): UploadCheck {
  if (file.size === 0) return { ok: true };
  if (file.size > MAX_UPLOAD_BYTES) {
    return {
      ok: false,
      error: `That file is larger than ${MAX_UPLOAD_BYTES / (1024 * 1024)} MB. Send a download link in the message instead.`,
    };
  }
  const extension = file.name.split('.').pop()?.toLowerCase() ?? '';
  const allowedTypes = ALLOWED_UPLOADS[extension];
  if (!allowedTypes) {
    return {
      ok: false,
      error:
        'That file type is not accepted. Use PDF, AI, EPS, PSD, SVG, PNG, JPG, DOC or DOCX.',
    };
  }
  // Browsers report inconsistent MIME types for design formats, so an empty
  // type is tolerated while a type that contradicts the extension is not.
  const reported = (file.type || '').toLowerCase();
  if (reported && !allowedTypes.includes(reported)) {
    return {
      ok: false,
      error: 'That file’s type does not match its extension, so it was not accepted.',
    };
  }
  return { ok: true, extension };
}

/** Only accept a page URL that belongs to this site. */
export function safePageUrl(value: unknown, siteUrl: string): string {
  const raw = sanitizeHeaderValue(value, 500);
  try {
    const url = new URL(raw);
    const expected = new URL(siteUrl);
    const allowedHosts = [expected.hostname, 'localhost', '127.0.0.1'];
    if (!allowedHosts.includes(url.hostname)) return '';
    url.hash = '';
    return url.toString();
  } catch {
    return '';
  }
}
