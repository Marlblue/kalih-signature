import { postToAppsScript } from "./apps-script";
import { getClientIp, isRateLimited } from "./rate-limit";
import { isBotSubmission, validateFields, type FieldRules } from "./validate";

type HandlerOptions = {
  /** Dipakai sebagai prefix log server dan kunci rate limit per form. */
  label: string;
  scriptUrl: string;
  rules: FieldRules;
};

/**
 * Alur yang sama untuk semua form: tolak bot dan pengirim yang terlalu sering,
 * validasi ulang di server, lalu teruskan hanya field yang dikenali ke Apps
 * Script dan laporkan hasil sebenarnya ke client.
 */
export async function handleFormSubmission(
  request: Request,
  { label, scriptUrl, rules }: HandlerOptions
): Promise<Response> {
  if (!scriptUrl) {
    console.error(`[${label}] URL Apps Script belum diset di environment`);
    return jsonError("Form belum siap menerima pengiriman.", 500);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return jsonError("Data yang dikirim tidak valid.", 400);
  }

  // Balas seolah berhasil supaya bot tidak belajar bahwa jebakannya ketahuan,
  // tanpa meneruskan apa pun ke Sheet.
  if (isBotSubmission(form)) {
    console.warn(`[${label}] submit terjaring honeypot, diabaikan`);
    return Response.json({ ok: true });
  }

  if (isRateLimited(`${label}:${getClientIp(request)}`)) {
    return jsonError("Terlalu banyak pengiriman. Coba lagi beberapa saat lagi.", 429);
  }

  const validation = validateFields(form, rules);
  if (!validation.ok) {
    return jsonError(`Isian "${validation.field}" tidak valid.`, 400);
  }

  const result = await postToAppsScript(scriptUrl, validation.values);
  if (!result.ok) {
    // Detailnya hanya masuk log server (Vercel > Logs); pengunjung cukup tahu
    // pengirimannya gagal dan bisa lanjut lewat WhatsApp.
    console.error(`[${label}] gagal meneruskan ke Apps Script — ${result.reason}`);
    return jsonError("Pengiriman gagal diproses. Silakan coba lagi.", 502);
  }

  return Response.json({ ok: true });
}

function jsonError(error: string, status: number): Response {
  return Response.json({ ok: false, error }, { status });
}
