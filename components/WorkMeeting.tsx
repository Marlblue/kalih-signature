"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ── Animated counter hook (0 → target) ── */
function useCounter(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
}

/* ── WiFi signal icon: bars light up sequentially ── */
function WifiSignalIcon({ animate }: { animate: boolean }) {
  const [activeBars, setActiveBars] = useState(0);
  const MAX_BARS = 4;

  useEffect(() => {
    if (!animate) return;

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setActiveBars(current);
      if (current >= MAX_BARS) clearInterval(interval);
    }, 350);

    return () => clearInterval(interval);
  }, [animate]);

  // SVG wifi arcs from small to large
  const bars = [
    // Dot (center)
    <circle
      key="dot"
      cx="12"
      cy="20"
      r="1.5"
      className={`transition-opacity duration-300 ${activeBars >= 1 ? "opacity-100" : "opacity-20"}`}
      fill="currentColor"
    />,
    // Arc 1 (smallest)
    <path
      key="arc1"
      d="M8.5 16.5a5 5 0 0 1 7 0"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      stroke="currentColor"
      className={`transition-opacity duration-300 ${activeBars >= 2 ? "opacity-100" : "opacity-20"}`}
    />,
    // Arc 2
    <path
      key="arc2"
      d="M5.5 13.5a9.5 9.5 0 0 1 13 0"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      stroke="currentColor"
      className={`transition-opacity duration-300 ${activeBars >= 3 ? "opacity-100" : "opacity-20"}`}
    />,
    // Arc 3 (largest)
    <path
      key="arc3"
      d="M2.5 10.5a14 14 0 0 1 19 0"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      stroke="currentColor"
      className={`transition-opacity duration-300 ${activeBars >= 4 ? "opacity-100" : "opacity-20"}`}
    />,
  ];

  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 sm:w-6 sm:h-6 text-primary"
      aria-hidden="true"
    >
      {bars}
    </svg>
  );
}

export default function WorkMeeting() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = badgeRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const count = useCounter(100, 1800, isVisible);

  return (
    <section data-reveal className="bg-primary text-white py-24">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold mb-8">Kolaborasi Bersama Kalih Signature</h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Jadikan Kalih Signature sebagai venue untuk meeting, workshop, gathering, event, hingga kolaborasi brand di Tegal. Tim kami siap membantu mewujudkan acara yang nyaman dan berkesan.
            </p>
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-2">Corporate Meeting Room</h3>

                <p className="text-sm text-white/70">
                  Meeting room privat dengan projector, sound system, WiFi cepat, whiteboard, dan kapasitas hingga 20 orang, ideal untuk meeting, presentasi, training, dan workshop.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h3 className="font-bold text-xl mb-2">Event & Gathering </h3>
                <p className="text-sm text-white/70">
                  Cocok untuk workshop, Enggagment, Moment Special, gathering komunitas, hingga acara perusahaan.
                </p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images-workmeeting/pusat-produktivitas.webp"
                alt="Meeting room dan working space Kalih Signature dengan koneksi WiFi cepat"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div
              ref={badgeRef}
              className="absolute bottom-2 right-2 sm:-bottom-3 sm:-right-3 bg-white text-primary p-1.5 sm:p-3 rounded-lg sm:rounded-xl shadow-xl flex flex-col items-center gap-0 sm:gap-0.5"
            >
              <WifiSignalIcon animate={isVisible} />
              <p className="text-xs sm:text-lg font-bold mb-0 tabular-nums">{count} Mbps</p>
              <p className="text-[7px] sm:text-[10px] font-bold uppercase tracking-widest opacity-60 whitespace-nowrap">
                Dedicated Connection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
