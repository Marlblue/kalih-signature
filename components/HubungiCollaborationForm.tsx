"use client";

import { useState, type FormEvent } from "react";
import { WHATSAPP_RESERVATION_URL } from "@/lib/constants";

const INTERESTS = [
  "Corporate Event",
  "EO/WO Partnership",
  "KOL & Influencer Collaboration",
  "Community Gathering",
];

const SCRIPT_URL = process.env.NEXT_PUBLIC_COLLAB_SCRIPT_URL;

export default function HubungiCollaborationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "submitted" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!SCRIPT_URL) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    const formData = new FormData(event.currentTarget);

    try {
      await fetch(SCRIPT_URL, { method: "POST", mode: "no-cors", body: formData });
      setStatus("submitted");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kolaborasi" className="px-gutter max-w-xl mx-auto mb-16 scroll-mt-24">
      <div className="bg-surface p-6 sm:p-8 rounded-2xl border border-outline-variant">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-primary mb-2">
          Form Kolaborasi
        </h2>
        <p className="text-secondary text-sm mb-6">
          Corporate, EO/WO, KOL, atau komunitas — ceritakan rencana kolaborasi Anda.
        </p>

        {status === "submitted" ? (
          <div className="text-center py-8">
            <span className="material-symbols-outlined text-primary text-5xl mb-4 fill-1">
              check_circle
            </span>
            <p className="font-bold text-primary text-lg mb-2">Terima kasih!</p>
            <p className="text-secondary text-sm max-w-sm mx-auto">
              Pesan Anda sudah kami catat. Tim Kalih Signature akan segera menghubungi Anda.
            </p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="hubungi-collab-name" className="sr-only">Nama Lengkap / Instansi</label>
              <input
                required
                id="hubungi-collab-name"
                name="name"
                type="text"
                placeholder="Nama Lengkap / Instansi"
                className="w-full px-4 py-3.5 rounded-lg border border-black/10 bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
              />
            </div>
            <div>
              <label htmlFor="hubungi-collab-contact" className="sr-only">No. WhatsApp / Email</label>
              <input
                required
                id="hubungi-collab-contact"
                name="contact"
                type="text"
                placeholder="No. WhatsApp / Email"
                className="w-full px-4 py-3.5 rounded-lg border border-black/10 bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
              />
            </div>
            <div className="relative">
              <label htmlFor="hubungi-collab-interest" className="sr-only">Minat Kolaborasi</label>
              <select
                required
                id="hubungi-collab-interest"
                name="interest"
                defaultValue=""
                className="w-full px-4 py-3.5 pr-11 rounded-lg border border-black/10 bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none appearance-none"
              >
                <option value="" disabled>
                  Minat Kolaborasi
                </option>
                {INTERESTS.map((interest) => (
                  <option key={interest} value={interest}>
                    {interest}
                  </option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-secondary">
                expand_more
              </span>
            </div>
            <div>
              <label htmlFor="hubungi-collab-message" className="sr-only">Detail Kolaborasi</label>
              <textarea
                required
                id="hubungi-collab-message"
                name="message"
                rows={4}
                placeholder="Ceritakan detail event atau ide kolaborasi Anda..."
                className="w-full px-4 py-3.5 rounded-lg border border-black/10 bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600">
                Gagal mengirim form. Silakan coba lagi atau hubungi kami langsung via{" "}
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
              className="w-full bg-primary text-on-primary font-bold py-4 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all active:scale-95 shadow-lg shadow-primary/20 disabled:opacity-60 disabled:pointer-events-none"
            >
              {status === "loading" ? "Mengirim..." : "Kirim Pesan Kolaborasi"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
