/**
 * In-memory sliding-window rate limiter.
 *
 * On a serverless platform each instance keeps its own counters, so this
 * reduces bursts from a single client hitting one warm instance rather than
 * providing a global guarantee. Pair it with platform-level protection (Vercel
 * Firewall / WAF rules) for a hard limit — documented in DEPLOYMENT.md.
 */

interface Bucket {
  hits: number[];
}

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const MAX_BUCKETS = 2000;

const buckets = new Map<string, Bucket>();

export interface RateLimitResult {
  allowed: boolean;
  retryAfterSeconds: number;
}

export function checkRateLimit(key: string): RateLimitResult {
  const now = Date.now();

  // Bound memory growth: drop the oldest keys once the map gets large.
  if (buckets.size > MAX_BUCKETS) {
    const cutoff = Math.floor(buckets.size / 2);
    let removed = 0;
    for (const k of buckets.keys()) {
      buckets.delete(k);
      if (++removed >= cutoff) break;
    }
  }

  const bucket = buckets.get(key) ?? { hits: [] };
  bucket.hits = bucket.hits.filter((t) => now - t < WINDOW_MS);

  if (bucket.hits.length >= MAX_PER_WINDOW) {
    const oldest = bucket.hits[0];
    buckets.set(key, bucket);
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((WINDOW_MS - (now - oldest)) / 1000)),
    };
  }

  bucket.hits.push(now);
  buckets.set(key, bucket);
  return { allowed: true, retryAfterSeconds: 0 };
}

/** Best-effort client identity from proxy headers. */
export function clientKey(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip =
    forwarded?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    request.headers.get('cf-connecting-ip') ||
    'unknown';
  return ip.slice(0, 64);
}
