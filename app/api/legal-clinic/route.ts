import { LEGAL_CLINIC_SCRIPT_URL } from "@/lib/forms/env";
import { handleFormSubmission } from "@/lib/forms/handler";
import { NAME_PATTERN, PHONE_ID_PATTERN, type FieldRules } from "@/lib/forms/validate";

// Kategori bisa berupa pilihan dari daftar atau teks bebas ketika pendaftar
// memilih "Lainnya" (client menukarnya sebelum submit), jadi yang dibatasi
// hanya panjangnya.
const RULES: FieldRules = {
  name: { required: true, minLength: 3, maxLength: 60, pattern: NAME_PATTERN },
  phone: { required: true, pattern: PHONE_ID_PATTERN },
  email: { maxLength: 80, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  domicile: { required: true, minLength: 3, maxLength: 60 },
  category: { required: true, minLength: 3, maxLength: 60 },
  // Tanpa minLength: sebagian pendaftar memang bisa merangkum masalahnya dalam
  // satu kalimat pendek, dan minimum 20 karakter sebelumnya menahan mereka di
  // form. Harus tetap sinkron dengan textarea di LegalClinicForm.tsx.
  message: { required: true, maxLength: 1500 },
  consent: { required: true, pattern: /^Ya$/ },
};

export async function POST(request: Request) {
  return handleFormSubmission(request, {
    label: "legal-clinic",
    scriptUrl: LEGAL_CLINIC_SCRIPT_URL,
    rules: RULES,
  });
}
