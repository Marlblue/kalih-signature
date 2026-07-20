"use client";

import { useState } from "react";
import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";

type Poster = { src: string; alt: string; label: string };

const SECTIONS: { id: string; eyebrow: string; title: string; posters: Poster[] }[] = [
  {
    id: "minuman",
    eyebrow: "Seduhan Pilihan",
    title: "Minuman",
    posters: [
      {
        src: "/poster-menu/artisantea-coffeemilk.png",
        alt: "Menu Artisan Tea dan Coffee Milk Kalih Signature",
        label: "Artisan Tea & Coffee Milk",
      },
      {
        src: "/poster-menu/creamymilky.png",
        alt: "Menu Creamy Milky Kalih Signature",
        label: "Creamy Milky",
      },
      {
        src: "/poster-menu/noncoffee.png",
        alt: "Menu Non Coffee dan Mocktail Kalih Signature",
        label: "Non Coffee & Mocktail",
      },
      {
        src: "/poster-menu/smoothies.png",
        alt: "Menu Smoothies Kalih Signature",
        label: "Smoothies",
      },
    ],
  },
  {
    id: "utama",
    eyebrow: "Cita Rasa Dunia, Jiwa Lokal",
    title: "Menu Utama",
    posters: [
      {
        src: "/poster-menu/ricemeals.png",
        alt: "Menu Rice Meals Kalih Signature",
        label: "Rice Meals",
      },
      {
        src: "/poster-menu/ricemeals2.png",
        alt: "Menu Rice Bowl dan Bento Kalih Signature",
        label: "Rice Bowl & Bento",
      },
      {
        src: "/poster-menu/noodlesandsoup.png",
        alt: "Menu Noodles dan Soup Kalih Signature",
        label: "Noodles & Soup",
      },
      {
        src: "/poster-menu/westerndishes.png",
        alt: "Menu Western Dishes Kalih Signature",
        label: "Western Dishes",
      },
    ],
  },
  {
    id: "snack",
    eyebrow: "Teman Bersantai",
    title: "Snack & Dessert",
    posters: [
      {
        src: "/poster-menu/savorysnack.png",
        alt: "Menu Savory Snack Kalih Signature",
        label: "Savory Snack",
      },
      {
        src: "/poster-menu/sweetsnack.png",
        alt: "Menu Sweet Snack Kalih Signature",
        label: "Sweet Snack",
      },
    ],
  },
];

export default function MenuPosterGallery() {
  const [active, setActive] = useState<Poster | null>(null);

  return (
    <>
      {SECTIONS.map((section) => (
        <section
          key={section.id}
          id={section.id}
          data-reveal
          className="py-24 px-gutter max-w-container-max mx-auto"
        >
          <div className="text-center mb-16">
            <Eyebrow tone="secondary">{section.eyebrow}</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary tracking-tight">
              {section.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {section.posters.map((poster) => (
              <button
                key={poster.src}
                type="button"
                onClick={() => setActive(poster)}
                className="group relative aspect-[210/297] rounded-2xl overflow-hidden shadow-xl shadow-black/10 text-left"
              >
                <Image
                  src={poster.src}
                  alt={poster.alt}
                  fill
                  sizes="(min-width: 640px) 45vw, 90vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-center justify-between">
                  <span className="text-white font-bold text-sm">{poster.label}</span>
                  <span className="material-symbols-outlined text-white text-lg">zoom_in</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      ))}

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/80 hover:text-white transition-colors"
            aria-label="Tutup"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          <div
            className="relative w-full max-w-lg aspect-[210/297] max-h-full"
            onClick={(event) => event.stopPropagation()}
          >
            <Image src={active.src} alt={active.alt} fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
