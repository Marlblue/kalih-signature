/**
 * Validasi field form di sisi server. Atribut `pattern`/`required` di HTML
 * hanya menahan pengunjung biasa — siapa pun bisa POST langsung ke endpoint
 * dengan curl, jadi aturan yang sama harus ditegakkan ulang di sini.
 */

export type Rule = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
};

export type FieldRules = Record<string, Rule>;

export type ValidationResult =
  | { ok: true; values: Record<string, string> }
  | { ok: false; field: string };

export function validateFields(form: FormData, rules: FieldRules): ValidationResult {
  const values: Record<string, string> = {};

  for (const [field, rule] of Object.entries(rules)) {
    const raw = form.get(field);
    // Entry non-string berarti file upload — form ini tidak pernah mengirim file.
    const value = typeof raw === "string" ? raw.trim() : "";

    if (!value) {
      if (rule.required) return { ok: false, field };
      values[field] = "";
      continue;
    }

    if (rule.minLength !== undefined && value.length < rule.minLength) {
      return { ok: false, field };
    }
    if (rule.maxLength !== undefined && value.length > rule.maxLength) {
      return { ok: false, field };
    }
    if (rule.pattern && !rule.pattern.test(value)) {
      return { ok: false, field };
    }

    values[field] = value;
  }

  return { ok: true, values };
}

/** Nomor WhatsApp Indonesia setelah client menempelkan prefix "+62". */
export const PHONE_ID_PATTERN = /^\+628\d{7,12}$/;

/** Nama orang/instansi: huruf, spasi, titik, apostrof, dan tanda hubung. */
export const NAME_PATTERN = /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ.'\-\s]{2,59}$/;

/**
 * Field jebakan (honeypot): tersembunyi dari pengunjung, tapi terlihat oleh bot
 * yang mengisi semua input begitu saja. Kalau terisi, submit-nya bot.
 */
export const HONEYPOT_FIELD = "website";

export function isBotSubmission(form: FormData): boolean {
  const value = form.get(HONEYPOT_FIELD);
  return typeof value === "string" && value.trim() !== "";
}
