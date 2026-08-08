"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { WHATSAPP_RESERVATION_URL } from "@/lib/constants";

const SUCCESS_PATH = "/hubungi/legal-clinic/terima-kasih";

const CATEGORIES = [
  "Hukum Keluarga",
  "Hukum Perdata",
  "Hukum Pidana",
  "Hukum Bisnis & Perusahaan",
  "Ketenagakerjaan",
  "Pertanahan & Properti",
  "Lainnya",
];

const BEFORE_REGISTERING = [
  <>Sesi berdurasi maksimal 30 menit dan bersifat sepenuhnya privat.</>,
  <>Tim kami akan menghubungi via WhatsApp untuk konfirmasi jadwal.</>,
  <>
    Terdapat Commitment Fee sebesar <strong className="font-bold">Rp100.000</strong>{" "}
    yang dapat ditukar 100% untuk Food &amp; Beverage di Kalih Signature saat acara.
  </>,
];

const SCRIPT_URL = process.env.NEXT_PUBLIC_LEGAL_CLINIC_SCRIPT_URL;

export default function LegalClinicForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!SCRIPT_URL) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    const formData = new FormData(event.currentTarget);
    formData.set("phone", `+62${phone}`);
    if (category === "Lainnya") {
      formData.set("category", formData.get("categoryOther") as string);
      formData.delete("categoryOther");
    }

    try {
      await fetch(SCRIPT_URL, { method: "POST", mode: "no-cors", body: formData });
      // Status sengaja dibiarkan "loading" sampai halaman berpindah, supaya
      // tombolnya tetap nonaktif dan form tidak bisa terkirim dua kali.
      router.push(SUCCESS_PATH);
    } catch {
      setStatus("error");
    }
  };

  const underlineInput =
    "w-full border-0 border-b border-outline-variant bg-transparent py-2 px-0 focus:border-primary focus:ring-0 transition-colors outline-none placeholder:text-secondary/60";
  const underlineLabel = "block text-xs font-bold uppercase tracking-widest text-primary mb-2";

  return (
    <section id="daftar" data-reveal className="px-gutter max-w-container-max mx-auto py-12 sm:py-16">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl border border-outline-variant shadow-2xl shadow-primary/5">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-8 pb-5 border-b border-outline-variant">
              Formulir Pendaftaran
            </h2>

            <div className="space-y-8">
              <div>
                <label htmlFor="legal-name" className={underlineLabel}>
                  Nama Lengkap *
                </label>
                <input
                  required
                  id="legal-name"
                  name="name"
                  type="text"
                  minLength={3}
                  maxLength={60}
                  pattern="[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ.'\-\s]{2,59}"
                  title="Masukkan nama lengkap yang valid (minimal 3 huruf)"
                  placeholder="John Doe"
                  className={underlineInput}
                />
              </div>

              <div>
                <label htmlFor="legal-phone" className={underlineLabel}>
                  Nomor WhatsApp *
                </label>
                <div className="flex items-center border-b border-outline-variant focus-within:border-primary transition-colors">
                  <span className="py-2 pr-1 text-secondary select-none">+62</span>
                  <input
                    required
                    id="legal-phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value.replace(/\D/g, ""))}
                    minLength={8}
                    maxLength={13}
                    pattern="(?!(\d)\1{7,12}$)8[0-9]{7,12}"
                    title="Masukkan nomor WhatsApp yang valid, harus diawali angka 8, contoh: 812xxxxxxxx"
                    placeholder="812xxxxxxxx"
                    className="w-full border-0 bg-transparent py-2 px-0 focus:ring-0 outline-none placeholder:text-secondary/60"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="legal-email" className={underlineLabel}>
                  Email (Opsional)
                </label>
                <input
                  id="legal-email"
                  name="email"
                  type="email"
                  maxLength={80}
                  placeholder="john@example.com"
                  className={underlineInput}
                />
              </div>

              <div>
                <label htmlFor="legal-domicile" className={underlineLabel}>
                  Domisili *
                </label>
                <input
                  required
                  id="legal-domicile"
                  name="domicile"
                  type="text"
                  minLength={3}
                  maxLength={60}
                  placeholder="Kota/Kabupaten"
                  className={underlineInput}
                />
              </div>

              <div>
                <label htmlFor="legal-category" className={underlineLabel}>
                  Kategori Konsultasi *
                </label>
                <div className="relative">
                  <select
                    required
                    id="legal-category"
                    name="category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className={`${underlineInput} appearance-none pr-8`}
                  >
                    <option value="" disabled>
                      Pilih Kategori
                    </option>
                    {CATEGORIES.map((categoryOption) => (
                      <option key={categoryOption} value={categoryOption}>
                        {categoryOption}
                      </option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-0 bottom-2 pointer-events-none text-secondary text-lg">
                    expand_more
                  </span>
                </div>
                {category === "Lainnya" && (
                  <input
                    required
                    id="legal-category-other"
                    name="categoryOther"
                    type="text"
                    minLength={3}
                    maxLength={60}
                    placeholder="Sebutkan kategori konsultasi Anda"
                    className={`${underlineInput} mt-3`}
                  />
                )}
              </div>

              <div>
                <label htmlFor="legal-message" className={underlineLabel}>
                  Jelaskan Permasalahan Anda *
                </label>
                <textarea
                  required
                  id="legal-message"
                  name="message"
                  rows={5}
                  minLength={20}
                  maxLength={1500}
                  placeholder="Ceritakan secara singkat mengenai hal yang ingin didiskusikan..."
                  className={`${underlineInput} resize-none`}
                />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-surface p-6 sm:p-8 rounded-2xl border border-outline-variant">
              <h3 className="font-display text-xl font-bold text-primary mb-6">Sebelum Mendaftar</h3>
              <ul className="space-y-4">
                {BEFORE_REGISTERING.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl shrink-0">
                      check_circle
                    </span>
                    <p className="text-sm text-secondary leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-outline-variant">
                <label htmlFor="legal-consent" className="flex items-start gap-3 cursor-pointer">
                  <input
                    required
                    id="legal-consent"
                    name="consent"
                    type="checkbox"
                    value="Ya"
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-outline-variant text-primary focus:ring-primary/30"
                  />
                  <span className="text-sm text-secondary leading-relaxed">
                    Saya telah membaca dan memahami informasi di atas.
                  </span>
                </label>
              </div>
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600">
                Gagal mengirim pendaftaran. Silakan coba lagi atau hubungi kami langsung via{" "}
                <a
                  href={WHATSAPP_RESERVATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold"
                >
                  WhatsApp
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-primary text-on-primary px-10 py-5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all hover:shadow-xl active:scale-95 disabled:opacity-60 disabled:pointer-events-none"
            >
              {status === "loading" ? "Mengirim..." : "Kirim Pendaftaran"}
            </button>
          </aside>
        </div>
      </form>
    </section>
  );
}
