"use client";

import { useState, type FormEvent } from "react";

/**
 * Submit is a stub: it only confirms the form was filled in correctly.
 * No data is sent anywhere yet — wiring this to an API route / CRM / email
 * is a follow-up task (see PRD.md, "Backlog").
 */
export default function ContactFormSection() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitted");
  };

  return (
    <section data-reveal className="py-24 bg-surface">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-primary/5 border border-black/5">
          {status === "submitted" ? (
            <div className="text-center py-10">
              <span className="material-symbols-outlined text-primary text-5xl mb-4 fill-1">
                check_circle
              </span>
              <p className="font-bold text-primary text-lg mb-2">Pesan terkirim!</p>
              <p className="text-secondary text-sm max-w-sm mx-auto">
                Terima kasih sudah menghubungi kami. Tim Kalih Signature akan segera merespons.
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full px-6 py-4 rounded-lg border border-black/10 bg-surface focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 rounded-lg border border-black/10 bg-surface focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                />
              </div>
              <input
                required
                name="subject"
                type="text"
                placeholder="Subjek"
                className="w-full px-6 py-4 rounded-lg border border-black/10 bg-surface focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
              />
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tulis pesan Anda..."
                className="w-full px-6 py-4 rounded-lg border border-black/10 bg-surface focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-5 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all active:scale-95 shadow-lg shadow-primary/20"
              >
                Kirim Pesan
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
