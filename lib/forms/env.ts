/**
 * URL Apps Script dibaca sebagai env server-only (tanpa prefix NEXT_PUBLIC_),
 * supaya endpoint-nya tidak lagi ikut ter-inline ke bundle JavaScript client
 * dan hanya bisa dipanggil lewat route handler di app/api.
 *
 * Fallback ke nama NEXT_PUBLIC_ lama disengaja agar deployment yang masih pakai
 * variabel itu tidak langsung mati saat rilis; hapus fallback-nya setelah env di
 * Vercel diganti ke nama yang baru.
 */

export const COLLAB_SCRIPT_URL =
  process.env.COLLAB_SCRIPT_URL ?? process.env.NEXT_PUBLIC_COLLAB_SCRIPT_URL ?? "";

export const LEGAL_CLINIC_SCRIPT_URL =
  process.env.LEGAL_CLINIC_SCRIPT_URL ?? process.env.NEXT_PUBLIC_LEGAL_CLINIC_SCRIPT_URL ?? "";

/**
 * Kata sandi bersama antara route handler dan Apps Script. Selama masih kosong
 * di salah satu sisi, pemeriksaannya tidak aktif — jadi ini bisa dipasang tanpa
 * mematikan form yang sedang berjalan (lihat scripts/apps-script/*.gs).
 */
export const FORMS_SHARED_SECRET = process.env.FORMS_SHARED_SECRET ?? "";
