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
        src: "/menu-kalih/menu-kalih-1.webp",
        alt: "Menu Espresso Based dan Manual Brew Kalih Signature",
        label: "Espresso Based & Manual Brew",
      },
      {
        src: "/menu-kalih/menu-kalih-2.webp",
        alt: "Menu Artisan Tea dan Coffee Milk Kalih Signature",
        label: "Artisan Tea & Coffee Milk",
      },
      {
        src: "/menu-kalih/menu-kalih-3.webp",
        alt: "Menu Non Coffee dan Mocktail Kalih Signature",
        label: "Non Coffee & Mocktail",
      },
      {
        src: "/menu-kalih/menu-kalih-4.webp",
        alt: "Menu Creamy Milky Kalih Signature",
        label: "Creamy Milky",
      },
      {
        src: "/menu-kalih/menu-kalih-5.webp",
        alt: "Menu Smoothies Kalih Signature",
        label: "Smoothies",
      },
      {
        src: "/menu-kalih/menu-kalih-6.webp",
        alt: "Menu Matcha Series Kalih Signature",
        label: "Matcha Series",
      },
    ],
  },
  {
    id: "utama",
    eyebrow: "Cita Rasa Dunia, Jiwa Lokal",
    title: "Menu Utama",
    posters: [
      {
        src: "/menu-kalih/menu-kalih-9.webp",
        alt: "Menu Rice Meals Kalih Signature",
        label: "Rice Meals",
      },
      {
        src: "/menu-kalih/menu-kalih-10.webp",
        alt: "Menu Rice Meals Premium Kalih Signature",
        label: "Rice Meals Premium",
      },
      {
        src: "/menu-kalih/menu-kalih-11.webp",
        alt: "Menu Noodles dan Soup Kalih Signature",
        label: "Noodles & Soup",
      },
      {
        src: "/menu-kalih/menu-kalih-12.webp",
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
        src: "/menu-kalih/menu-kalih-8.webp",
        alt: "Menu Savory Snack Kalih Signature",
        label: "Savory Snack",
      },
      {
        src: "/menu-kalih/menu-kalih-7.webp",
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
                className="group relative aspect-[210/297] rounded-2xl overflow-hidden shadow-xl shadow-black/10 text-left bg-white"
              >
                <Image
                  src={poster.src}
                  alt={poster.alt}
                  fill
                  sizes="(min-width: 640px) 45vw, 90vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
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
