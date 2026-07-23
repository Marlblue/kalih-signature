"use client";

import { useState } from "react";
import {
  BUSINESS_HOURS,
  WHATSAPP_NUMBER_DISPLAY,
  WHATSAPP_RESERVATION_URL,
} from "@/lib/constants";

/**
 * Draft answers — the source design only listed questions with no content
 * and no open/close behaviour. Wording below is a reasonable first pass
 * based on facts already stated elsewhere on the page; flag for client
 * review before launch (see PRD.md, "Aset & Konten").
 */
const FAQ_ITEMS = [
  {
    question: "Apakah saya perlu melakukan reservasi?",
    answer: `Untuk kunjungan santai, walk-in selalu welcome. Namun untuk meeting room, rooftop, atau rombongan besar, kami sarankan reservasi lebih dulu via WhatsApp di ${WHATSAPP_NUMBER_DISPLAY} agar tempat terjamin.`,
  },
  {
    question: "Apakah tersedia area outdoor yang ramah anak?",
    answer:
      "Ya. Kami punya area outdoor rindang dengan kids area dan playground edukatif, plus menu anak yang sehat dan lezat.",
  },
  {
    question: "Berapa kecepatan WiFi di area working space?",
    answer:
      "Working space menggunakan koneksi dedicated hingga 100 Mbps, cukup stabil untuk video conference dan upload/download file besar.",
  },
  {
    question: "Bagaimana fasilitas parkir di Kalih Signature?",
    answer:
      "Kalih Signature menyediakan area parkir yang luas untuk mobil dan motor, sehingga Anda dapat berkunjung dengan nyaman, baik datang sendiri maupun bersama keluarga, komunitas, atau rombongan acara."
  },
  {
    question: "Apakah Kalih Signature bisa untuk mengadakan acara pribadi atau perusahaan? ",
    answer:
      "Tentu. Kalih Signature melayani berbagai kebutuhan acara seperti meeting perusahaan, workshop, gathering komunitas, engagement, intimate wedding, bridal shower, arisan, hingga berbagai momen spesial lainnya. Tim kami siap membantu menyesuaikan konsep acara sesuai kebutuhan."
  },
  {
    question: "Jam berapa Rooftop mulai beroperasi?",
    answer: `Rooftop mengikuti jam operasional utama, ${BUSINESS_HOURS}. Waktu terbaik untuk menikmati sunset adalah menjelang sore.`,
  },
  {
    question: "Apakah ada peraturan khusus untuk Kids Area?",
    answer:
      "Anak-anak tetap perlu didampingi orang tua/wali selama bermain di kids area demi keamanan bersama.",
  },
  {
    question: "Bagaimana cara melakukan booking untuk private event?",
    answer: `Hubungi tim kami via WhatsApp di ${WHATSAPP_NUMBER_DISPLAY} atau isi form Kemitraan & Kolaborasi di halaman ini, dan tim kami akan membantu menyusun kebutuhan event Anda.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" data-reveal className="py-24 bg-surface">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-primary mb-4 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="bg-white rounded-lg shadow-sm border border-black/5 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex justify-between items-center w-full px-8 py-6 text-left font-bold text-primary hover:bg-primary/5 transition-colors"
                >
                  <span>{item.question}</span>
                  <span
                    className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-8 pb-6 text-secondary leading-relaxed text-sm">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <p className="text-center text-xs text-secondary mt-8">
          Pertanyaan lain? Hubungi kami langsung via{" "}
          <a href={WHATSAPP_RESERVATION_URL} className="text-primary font-semibold underline">
            WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  );
}
