"use client";

import { useState, type FormEvent } from "react";
import { WHATSAPP_NUMBER_INTL } from "@/lib/constants";

const INTERESTS = [
  "Corporate Event",
  "EO/WO Partnership",
  "KOL & Influencer Collaboration",
  "Community Gathering",
];

const CATEGORIES = [
  {
    title: "Corporate",
    description: "Venue & catering untuk meeting atau gathering perusahaan.",
  },
  {
    title: "EO/WO",
    description: "Kemitraan strategis untuk penyelenggara acara profesional.",
  },
  {
    title: "KOL",
    description: "Kolaborasi konten kreatif untuk influencer & content creator.",
  },
  {
    title: "Community",
    description: "Ruang berkumpul untuk hobi, diskusi, dan kegiatan komunitas.",
  },
];

export default function CollaborationForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const interest = formData.get("interest") as string;
    const message = formData.get("message") as string;

    const waText = [
      `Halo Kalih Signature! 👋`,
      ``,
      `Saya ingin mengajukan kolaborasi:`,
      ``,
      `*Nama / Instansi:* ${name}`,
      `*Email:* ${email}`,
      `*Minat Kolaborasi:* ${interest}`,
      ``,
      `*Detail:*`,
      message,
    ].join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setStatus("submitted");
  };

  return (
    <section id="collaboration" data-reveal className="py-24 bg-white">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="bg-surface p-8 md:p-12 rounded-3xl shadow-2xl shadow-primary/5 border border-primary/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-primary/5">
              {status === "submitted" ? (
                <div className="text-center py-10">
                  <span className="material-symbols-outlined text-primary text-5xl mb-4 fill-1">
                    check_circle
                  </span>
                  <p className="font-bold text-primary text-lg mb-2">Terima kasih!</p>
                  <p className="text-secondary text-sm max-w-sm mx-auto">
                    Pesan Anda sudah kami catat. Tim Kalih Signature akan segera menghubungi Anda.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Nama Lengkap / Instansi"
                    className="w-full px-6 py-4 rounded-lg border border-black/10 bg-surface focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                  />
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full px-6 py-4 rounded-lg border border-black/10 bg-surface focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                  />
                  <div className="relative">
                    <select
                      required
                      name="interest"
                      defaultValue=""
                      className="w-full px-6 py-4 rounded-lg border border-black/10 bg-surface focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none appearance-none"
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
                    <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-secondary">
                      expand_more
                    </span>
                  </div>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Ceritakan detail event atau ide kolaborasi Anda..."
                    className="w-full px-6 py-4 rounded-lg border border-black/10 bg-surface focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-bold py-5 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all active:scale-95 shadow-lg shadow-primary/20"
                  >
                    Kirim Pesan Kolaborasi
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="font-display text-4xl font-bold text-primary mb-6 tracking-tight leading-tight">
                Kemitraan &amp; Kolaborasi Strategis
              </h2>
              <p className="text-secondary text-lg mb-10 leading-relaxed">
                Solusi venue premium untuk Corporate, EO, WO, dan KOL. Wujudkan event berkelas
                dengan fasilitas lengkap di Kalih Signature.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                {CATEGORIES.map((category) => (
                  <div key={category.title}>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                      {category.title}
                    </p>
                    <p className="text-sm text-secondary leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
