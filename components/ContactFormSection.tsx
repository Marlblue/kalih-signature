"use client";

import { useState, type FormEvent } from "react";
import { WHATSAPP_NUMBER_INTL } from "@/lib/constants";

export default function ContactFormSection() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const waText = [
      `Halo Kalih Signature! 👋`,
      ``,
      `*Nama:* ${name}`,
      `*No. HP:* ${phone}`,
      `*Subjek:* ${subject}`,
      ``,
      `*Pesan:*`,
      message,
    ].join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
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
                <div>
                  <label htmlFor="contact-name" className="sr-only">Nama Lengkap</label>
                  <input
                    required
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Nama Lengkap"
                    className="w-full px-6 py-4 rounded-lg border border-black/10 bg-surface focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="sr-only">Nomor Telepon</label>
                  <input
                    required
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    pattern="[0-9+\-\s]{9,15}"
                    title="Masukkan nomor telepon yang valid, contoh: 0812xxxxxxxx"
                    placeholder="Nomor Telepon"
                    className="w-full px-6 py-4 rounded-lg border border-black/10 bg-surface focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="sr-only">Subjek</label>
                <input
                  required
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Subjek"
                  className="w-full px-6 py-4 rounded-lg border border-black/10 bg-surface focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">Pesan</label>
                <textarea
                  required
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tulis pesan Anda..."
                  className="w-full px-6 py-4 rounded-lg border border-black/10 bg-surface focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                />
              </div>
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
