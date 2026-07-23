"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { WHATSAPP_RESERVATION_URL } from "@/lib/constants";

const LINES = ["Satu Tempat.", "Banyak Alasan untuk Datang."];
const TYPING_SPEED = 60; // ms per character
const PAUSE_BETWEEN_LINES = 600; // ms pause after finishing a line

function useTypewriter(lines: string[], speed: number, pause: number) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;

    const currentLine = lines[lineIndex];

    if (charIndex < currentLine.length) {
      const timer = setTimeout(() => setCharIndex((c) => c + 1), speed);
      return () => clearTimeout(timer);
    }

    // Finished current line
    if (lineIndex < lines.length - 1) {
      const timer = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, pause);
      return () => clearTimeout(timer);
    }

    // All lines done
    setDone(true);
  }, [lineIndex, charIndex, done, lines, speed, pause]);

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
    LINES,
    TYPING_SPEED,
    PAUSE_BETWEEN_LINES
  );

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 sm:pt-24 sm:pb-10"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images-hero/hero.webp"
          alt="Kalih Signature"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      <div className="relative z-10 text-center text-white px-gutter max-w-5xl">
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
            Satu Tempat. Banyak Alasan untuk Datang.
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed font-light">
          Coffee berkualitas, makanan favorit keluarga, working space nyaman, meeting room
          profesional, rooftop, area outdoor rindang, kids area, dan berbagai event dalam satu
          destinasi.
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
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <span className="material-symbols-outlined text-yellow-400 fill-1">star</span>
            <span className="text-sm font-medium">4.8 Google Rating</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <span className="material-symbols-outlined">wifi</span>
            <span className="text-sm font-medium">Free High-Speed WiFi</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <span className="material-symbols-outlined">family_restroom</span>
            <span className="text-sm font-medium">Family Friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
