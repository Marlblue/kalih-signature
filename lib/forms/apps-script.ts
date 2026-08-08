import { FORMS_SHARED_SECRET } from "./env";

/**
 * Meneruskan satu submit form ke Google Apps Script dari sisi server.
 *
 * Sebelumnya form mem-POST langsung dari browser dengan `mode: "no-cors"`,
 * yang selalu resolve — Apps Script balas 500, URL deployment kedaluwarsa, atau
 * kuota email habis pun pengunjung tetap melihat "Terima kasih" sementara
 * datanya tidak pernah masuk ke Sheet. Dari server tidak ada CORS, jadi status
 * dan body respons bisa benar-benar diperiksa.
 */

const TIMEOUT_MS = 10_000;

export type SubmitResult = { ok: true } | { ok: false; reason: string };

export async function postToAppsScript(
  scriptUrl: string,
  fields: Record<string, string>
): Promise<SubmitResult> {
  const body = new URLSearchParams(fields);
  if (FORMS_SHARED_SECRET) body.set("token", FORMS_SHARED_SECRET);

  let response: Response;
  try {
    response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      // Apps Script /exec selalu redirect ke script.googleusercontent.com,
      // jadi redirect harus diikuti untuk mendapat respons yang sebenarnya.
      redirect: "follow",
      cache: "no-store",
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch (error) {
    const reason = error instanceof Error ? error.message : "network error";
    return { ok: false, reason: `request gagal: ${reason}` };
  }

  if (!response.ok) {
    return { ok: false, reason: `HTTP ${response.status}` };
  }

  // Script yang error mengembalikan halaman HTML, bukan JSON — jadi respons
  // yang tidak bisa di-parse diperlakukan sebagai gagal, bukan sukses.
  const text = await response.text();
  try {
    const payload = JSON.parse(text) as { status?: string; error?: string };
    if (payload.status === "ok") return { ok: true };
    return { ok: false, reason: payload.error ?? `respons tidak terduga: ${text.slice(0, 200)}` };
  } catch {
    return { ok: false, reason: `respons bukan JSON: ${text.slice(0, 200)}` };
  }
}
