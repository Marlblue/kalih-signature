/**
 * Rate limit sederhana per-IP, disimpan di memori proses.
 *
 * Catatan: di serverless setiap instance punya memorinya sendiri, jadi ini
 * bukan pembatas yang ketat — tujuannya menahan banjir submit dari satu sumber
 * (yang bisa menghabiskan kuota email harian Apps Script), bukan jadi lapisan
 * keamanan tunggal. Shared secret di route + Apps Script yang memegang itu.
 */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    hits.set(key, recent);
    return true;
  }

  recent.push(now);
  hits.set(key, recent);

  // Buang entry IP lain yang sudah kedaluwarsa supaya Map tidak tumbuh terus
  // selama instance-nya hidup.
  if (hits.size > 500) {
    for (const [otherKey, times] of hits) {
      if (times.every((time) => now - time >= WINDOW_MS)) hits.delete(otherKey);
    }
  }

  return false;
}
