"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { WHATSAPP_RESERVATION_URL } from "@/lib/constants";


function useTypewriter(lines: string[], speed: number, pause: number) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const currentLine = lines[lineIndex];
  const done = lineIndex === lines.length - 1 && charIndex >= currentLine.length;

  useEffect(() => {
    if (done) return;

    if (charIndex < currentLine.length) {
      const timer = setTimeout(() => setCharIndex((c) => c + 1), speed);
      return () => clearTimeout(timer);
    }

    // Finished current line, advance to the next one
    const timer = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, pause);
    return () => clearTimeout(timer);
  }, [lineIndex, charIndex, done, lines, speed, pause, currentLine]);

  // Build displayed lines
  const displayedLines: string[] = [];
  for (let i = 0; i <= lineIndex && i < lines.length; i++) {
    if (i < lineIndex) {
      displayedLines.push(lines[i]);
    } else {
      displayedLines.push(lines[i].slice(0, charIndex));
    }
  }

  return { displayedLines, done };
}

export default function Hero() {
  const { displayedLines, done } = useTypewriter(
    ["Selalu Ada Alasan ke Kalih Signature."],
    50,
    600
  );

  return (
    <section
      id="top"
      className="relative flex items-center justify-center pt-24 pb-16 sm:min-h-screen sm:pt-24 sm:pb-10"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images-hero/hero.webp"
          alt="Kalih Signature"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      <div className="relative z-10 min-w-0 w-full text-center text-white px-gutter max-w-5xl">
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-5 sm:mb-8 leading-[1.15] md:leading-[1.1] tracking-tight">
          {displayedLines.map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
              {/* Show blinking cursor at the end of the currently-typing line */}
              {i === displayedLines.length - 1 && !done && (
                <span className="typewriter-cursor" aria-hidden="true">
                  |
                </span>
              )}
            </span>
          ))}
          {/* Invisible full text for SEO / screen readers */}
          <span className="sr-only">
            Selalu Ada Alasan ke Kalih Signature.
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed font-light">
          Nikmati coffee berkualitas, menu favorit keluarga, working space nyaman, meeting room profesional, rooftop, area outdoor rindang, kids area, dan venue event di café  favorit di Tegal.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-10 sm:mb-16">
          <a
            href={WHATSAPP_RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all active:scale-95"
          >
            Reservasi Sekarang
          </a>
          <a
            href="#menu"
            className="border border-white/40 backdrop-blur-md text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all active:scale-95"
          >
            Menu Kalih
          </a>
        </div>
        <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-1.5 sm:gap-4 mb-8 overflow-x-auto no-scrollbar min-w-0">
          <div className="flex shrink-0 items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-md px-2 py-1 sm:px-4 sm:py-2 rounded-full border border-white/20">
            <span className="material-symbols-outlined text-yellow-400 fill-1 text-xs sm:text-xl">star</span>
            <span className="text-[10px] sm:text-sm font-medium whitespace-nowrap">
              <span className="sm:hidden">4.8 Rating</span>
              <span className="hidden sm:inline">4.8 Google Rating</span>
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-md px-2 py-1 sm:px-4 sm:py-2 rounded-full border border-white/20">
            <span className="material-symbols-outlined text-xs sm:text-xl">wifi</span>
            <span className="text-[10px] sm:text-sm font-medium whitespace-nowrap">
              <span className="sm:hidden">Free WiFi</span>
              <span className="hidden sm:inline">Free High-Speed WiFi</span>
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-md px-2 py-1 sm:px-4 sm:py-2 rounded-full border border-white/20">
            <span className="material-symbols-outlined text-xs sm:text-xl">family_restroom</span>
            <span className="text-[10px] sm:text-sm font-medium whitespace-nowrap">Family Friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
