"use client";

import { useState, type FormEvent } from "react";
import { BUSINESS_ADDRESS, BUSINESS_ADDRESS_LINE_2 } from "@/lib/constants";

const EVENT_TYPES = [
  "Corporate Meeting",
  "Birthday Celebration",
  "Engagement",
  "Community Workshop",
  "Rooftop Yoga",
  "Lainnya",
];

/**
 * Submit is a stub: it only confirms the form was filled in correctly.
 * No data is sent anywhere yet — wiring this to an API route / CRM / email
 * is a follow-up task (see PRD.md, "Backlog").
 */
export default function EventInquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitted");
  };

  return (
    <section id="booking" data-reveal className="py-24 px-gutter max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6 tracking-tight leading-tight">
            Rancang Momen Terbaik Anda.
          </h2>
          <p className="text-secondary text-lg mb-10 leading-relaxed">
            Ceritakan visi Anda. Tim event kami akan berkolaborasi untuk menyusun setiap detail
            pengalaman yang unik untuk Anda.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                  Lokasi
                </p>
                <p className="text-secondary">
                  {BUSINESS_ADDRESS}
                  <br />
                  {BUSINESS_ADDRESS_LINE_2}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">mail</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                  Inquiries
                </p>
                <p className="text-secondary">events@kalihsignature.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface p-8 md:p-10 rounded-2xl shadow-xl shadow-primary/5 border border-black/5">
          {status === "submitted" ? (
            <div className="text-center py-10">
              <span className="material-symbols-outlined text-primary text-5xl mb-4 fill-1">
                check_circle
              </span>
              <p className="font-bold text-primary text-lg mb-2">Terima kasih!</p>
              <p className="text-secondary text-sm max-w-sm mx-auto">
                Permintaan event Anda sudah kami catat. Tim Kalih Signature akan segera
                menghubungi Anda.
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
                  className="w-full px-6 py-4 rounded-lg border border-black/10 bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 rounded-lg border border-black/10 bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <select
                    required
                    name="eventType"
                    defaultValue=""
                    className="w-full px-6 py-4 rounded-lg border border-black/10 bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none appearance-none"
                  >
                    <option value="" disabled>
                      Jenis Event
                    </option>
                    {EVENT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-secondary">
                    expand_more
                  </span>
                </div>
                <input
                  required
                  name="date"
                  type="date"
                  className="w-full px-6 py-4 rounded-lg border border-black/10 bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
                />
              </div>
              <textarea
                required
                name="details"
                rows={4}
                placeholder="Ceritakan suasana yang ingin Anda ciptakan..."
                className="w-full px-6 py-4 rounded-lg border border-black/10 bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-5 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all active:scale-95 shadow-lg shadow-primary/20"
              >
                Kirim Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
