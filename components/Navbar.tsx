"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, WHATSAPP_RESERVATION_URL } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-xl border-b border-white/10 transition-all duration-500 ${isScrolled ? "h-14 sm:h-16 shadow-lg shadow-black/10" : "h-16 sm:h-24"
        }`}
    >
      <div className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-full">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logos-navbar/kalih-new.webp"
            alt="Kalih Signature"
            width={176}
            height={93}
            className={`w-auto transition-all duration-500 ${isScrolled ? "h-9 sm:h-12 md:h-14" : "h-10 sm:h-16 md:h-22"
              }`}
          />
        </Link>
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${isActive ? "text-white" : "text-white/80 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={WHATSAPP_RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary text-sm font-semibold px-8 py-3 rounded-full hover:shadow-xl hover:shadow-black/10 transition-all active:scale-95"
          >
            Reservasi Sekarang
          </a>
        </div>
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          className="lg:hidden flex items-center justify-center w-11 h-11 -mr-2 text-white"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-primary/98 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-gutter py-6 flex flex-col gap-1 max-w-container-max mx-auto">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium py-3 border-b border-white/10 transition-colors ${isActive ? "text-white" : "text-white/80 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={WHATSAPP_RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary text-sm font-semibold px-8 py-3.5 rounded-full text-center hover:shadow-xl hover:shadow-black/10 transition-all active:scale-95 mt-5"
          >
            Reservasi Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}
