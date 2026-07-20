"use client";

import { useState, type FormEvent } from "react";

/**
 * Submit is a stub: it only confirms the form was filled in correctly.
 * No data is sent anywhere yet — wiring this to an email provider is a
 * follow-up task (see PRD.md, "Backlog").
 */
export default function ArtikelNewsletter() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitted");
  };

  return (
    <section data-reveal className="mt-24 px-gutter max-w-container-max mx-auto">
      <div className="p-8 md:p-12 bg-surface rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="max-w-md text-center md:text-left">
          <h4 className="font-display text-2xl font-bold text-primary mb-2">Tetap Terhubung</h4>
          <p className="text-secondary">
            Dapatkan update mingguan tentang event eksklusif dan menu spesial langsung ke inbox
            Anda.
          </p>
        </div>
        {status === "submitted" ? (
          <p className="text-primary font-bold flex items-center gap-2">
            <span className="material-symbols-outlined fill-1">check_circle</span>
            Terima kasih sudah berlangganan!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input
              required
              type="email"
              name="email"
              placeholder="Email Anda"
              className="bg-white border border-black/10 rounded-full px-6 py-3 min-w-[260px] focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
            />
            <button
              type="submit"
              className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all active:scale-95"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
