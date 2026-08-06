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
    description: "Meeting, training, gathering, dan corporate event dengan fasilitas lengkap.",
  },
  {
    title: "EO & WO",
    description: "Venue yang fleksibel untuk wedding, engagement, seminar, dan berbagai event profesional."
  },
  {
    title: "KOL & Brand",
    description: "Kolaborasi bersama content creator, influencer, dan brand untuk aktivitas promosi."
  },
  {
    title: "Community",
    description: "Tempat berkumpul untuk komunitas, workshop, diskusi, hingga networking."
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

    const waUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER_INTL}&text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setStatus("submitted");
  };

  return (
    <section id="collaboration" data-reveal className="py-24 bg-white">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="bg-surface p-4 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-2xl shadow-primary/5 border border-primary/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
            <div className="order-2 lg:order-1 bg-white p-5 sm:p-8 rounded-2xl shadow-xl shadow-primary/5">
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
                <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="collab-name" className="sr-only">Nama Lengkap / Instansi</label>
                    <input
                      required
                      id="collab-name"
                      name="name"
                      type="text"
                      placeholder="Nama Lengkap / Instansi"
                      className="w-full px-4 py-3.5 sm:px-6 sm:py-4 rounded-lg border border-black/10 bg-surface focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="collab-email" className="sr-only">Email</label>
                    <input
                      required
                      id="collab-email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3.5 sm:px-6 sm:py-4 rounded-lg border border-black/10 bg-surface focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="collab-interest" className="sr-only">Minat Kolaborasi</label>
                    <select
                      required
                      id="collab-interest"
                      name="interest"
                      defaultValue=""
                      className="w-full px-4 py-3.5 sm:px-6 sm:py-4 pr-11 sm:pr-12 rounded-lg border border-black/10 bg-surface focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none appearance-none"
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
                    <span className="material-symbols-outlined absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 pointer-events-none text-secondary">
                      expand_more
                    </span>
                  </div>
                  <div>
                    <label htmlFor="collab-message" className="sr-only">Detail Kolaborasi</label>
                    <textarea
                      required
                      id="collab-message"
                      name="message"
                      rows={4}
                      placeholder="Ceritakan detail event atau ide kolaborasi Anda..."
                      className="w-full px-4 py-3.5 sm:px-6 sm:py-4 rounded-lg border border-black/10 bg-surface focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-bold py-4 sm:py-5 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all active:scale-95 shadow-lg shadow-primary/20"
                  >
                    Kirim Pesan Kolaborasi
                  </button>
                </form>
              )}
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 sm:mb-6 tracking-tight leading-tight">
                Kemitraan &amp; Kolaborasi Strategis
              </h2>
              <p className="text-secondary text-base sm:text-lg mb-6 sm:mb-10 leading-relaxed">
                Solusi venue premium untuk Corporate, EO, WO, dan KOL. Wujudkan event berkelas
                dengan fasilitas lengkap di Kalih Signature.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 sm:gap-y-8">
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
