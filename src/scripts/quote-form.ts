/**
 * Progressive enhancement for the quote forms.
 *
 * Without JavaScript the form still posts to /api/quote/ and the endpoint
 * returns a rendered confirmation page, so the form is never decorative.
 * With JavaScript we add inline validation, a loading state, duplicate-submit
 * protection and an in-place result message.
 *
 * Server-side validation is authoritative; nothing here is trusted.
 */

const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;
const ALLOWED_EXTENSIONS = [
  'pdf', 'ai', 'eps', 'psd', 'svg', 'png', 'jpg', 'jpeg', 'doc', 'docx',
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

/** Where a successful submission lands. Matches the server-side redirect. */
const SUCCESS_PAGE = '/thank-you/';

function labelFor(field: HTMLElement): string {
  const id = field.getAttribute('id');
  if (id) {
    const label = document.querySelector<HTMLLabelElement>(`label[for="${id}"]`);
    if (label) return label.textContent?.replace('*', '').trim() ?? 'This field';
  }
  return 'This field';
}

function errorNodeFor(field: HTMLElement): HTMLElement | null {
  const wrapper = field.closest('.field');
  return wrapper?.querySelector<HTMLElement>('[data-error]') ?? null;
}

function setError(field: HTMLElement, message: string | null) {
  const node = errorNodeFor(field);
  if (message) {
    field.setAttribute('aria-invalid', 'true');
    if (node) {
      node.textContent = message;
      node.hidden = false;
    }
  } else {
    field.removeAttribute('aria-invalid');
    if (node) {
      node.textContent = '';
      node.hidden = true;
    }
  }
}

function validateField(field: HTMLElement): string | null {
  if (
    !(field instanceof HTMLInputElement) &&
    !(field instanceof HTMLTextAreaElement) &&
    !(field instanceof HTMLSelectElement)
  ) {
    return null;
  }

  const name = labelFor(field);

  if (field instanceof HTMLInputElement && field.type === 'checkbox') {
    if (field.required && !field.checked) {
      return 'Please tick this box so we can reply to your enquiry.';
    }
    return null;
  }

  if (field instanceof HTMLInputElement && field.type === 'file') {
    const file = field.files?.[0];
    if (!file) return null;
    const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return `${ext ? `.${ext}` : 'That file type'} is not accepted. Use PDF, AI, EPS, PSD, SVG, PNG, JPG, DOC or DOCX.`;
    }
    if (file.size > MAX_UPLOAD_BYTES) {
      const mb = (file.size / (1024 * 1024)).toFixed(1);
      return `That file is ${mb} MB. The limit is 10 MB — send a link instead if it is larger.`;
    }
    return null;
  }

  const value = field.value.trim();

  if (field.required && value === '') {
    return `${name} is required.`;
  }
  if (value !== '' && field instanceof HTMLInputElement) {
    if (field.type === 'email' && !EMAIL_RE.test(value)) {
      return 'Enter an email address in the form name@example.com.';
    }
    if (field.type === 'tel' && value.replace(/[^0-9]/g, '').length < 7) {
      return 'Enter a phone number we can reach you on, including the area code.';
    }
  }
  return null;
}

function showStatus(
  form: HTMLFormElement,
  tone: 'success' | 'error',
  message: string,
) {
  const status = form.querySelector<HTMLElement>('[data-status]');
  if (!status) return;
  status.textContent = message;
  status.dataset.tone = tone;
  status.hidden = false;
}

function clearStatus(form: HTMLFormElement) {
  const status = form.querySelector<HTMLElement>('[data-status]');
  if (!status) return;
  status.hidden = true;
  status.textContent = '';
  delete status.dataset.tone;
}

let initialised = false;

export function initQuoteForms() {
  if (initialised) return;
  initialised = true;

  for (const form of document.querySelectorAll<HTMLFormElement>('[data-quote-form]')) {
    // Record the page the enquiry came from, in case the form is rendered on
    // a route that differs from the value baked in at build time.
    const pageUrlField = form.querySelector<HTMLInputElement>('[data-page-url]');
    if (pageUrlField) pageUrlField.value = window.location.href;

    const fields = Array.from(
      form.querySelectorAll<HTMLElement>(
        'input:not([type="hidden"]):not([tabindex="-1"]), select, textarea',
      ),
    );

    for (const field of fields) {
      field.addEventListener('blur', () => setError(field, validateField(field)));
      field.addEventListener('input', () => {
        if (field.getAttribute('aria-invalid') === 'true') {
          setError(field, validateField(field));
        }
      });
      if (field instanceof HTMLInputElement && field.type === 'file') {
        field.addEventListener('change', () => setError(field, validateField(field)));
      }
    }

    let submitting = false;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (submitting) return;
      clearStatus(form);

      let firstInvalid: HTMLElement | null = null;
      for (const field of fields) {
        const message = validateField(field);
        setError(field, message);
        if (message && !firstInvalid) firstInvalid = field;
      }
      if (firstInvalid) {
        showStatus(form, 'error', 'Please correct the highlighted fields and try again.');
        firstInvalid.focus();
        return;
      }

      const button = form.querySelector<HTMLButtonElement>('[data-submit]');
      const label = form.querySelector<HTMLElement>('[data-submit-label]');
      const originalLabel = label?.textContent ?? '';

      submitting = true;
      button?.setAttribute('aria-disabled', 'true');
      if (label) label.textContent = 'Sending…';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        const payload = (await response.json().catch(() => null)) as
          | { ok?: boolean; message?: string; fieldErrors?: Record<string, string> }
          | null;

        if (response.ok && payload?.ok) {
          // Reset before navigating so a back-button return shows an empty
          // form rather than a filled one that looks unsent.
          form.reset();
          showStatus(
            form,
            'success',
            payload.message ?? 'Thanks — your enquiry has been sent.',
          );
          window.location.assign(SUCCESS_PAGE);
          return;
        }

        if (payload?.fieldErrors) {
          let focusTarget: HTMLElement | null = null;
          for (const [name, message] of Object.entries(payload.fieldErrors)) {
            const field = form.querySelector<HTMLElement>(`[name="${name}"]`);
            if (field) {
              setError(field, message);
              if (!focusTarget) focusTarget = field;
            }
          }
          focusTarget?.focus();
        }
        showStatus(
          form,
          'error',
          payload?.message ??
            'Your enquiry could not be sent. Please try again, or email us directly.',
        );
      } catch {
        showStatus(
          form,
          'error',
          'Your enquiry could not be sent — the connection failed. Please try again, or email us directly.',
        );
      } finally {
        submitting = false;
        button?.removeAttribute('aria-disabled');
        if (label) label.textContent = originalLabel;
      }
    });
  }
}
