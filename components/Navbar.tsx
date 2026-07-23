"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WHATSAPP_RESERVATION_URL } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/event", label: "Event" },
  { href: "/artikel", label: "Artikel" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-xl border-b border-white/10 transition-all duration-500 ${isScrolled ? "h-16 shadow-lg shadow-black/10" : "h-20"
        }`}
    >
      <div className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-full">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logos-navbar/logo-new.webp"
            alt="Kalih Signature"
            width={128}
            height={160}
            priority
            className={`w-auto transition-all duration-500 ${
              isScrolled ? "h-12 md:h-14" : "h-16 md:h-20"
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
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-6">
          <a
            href={WHATSAPP_RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary text-sm font-semibold px-8 py-3 rounded-full hover:shadow-xl hover:shadow-black/10 transition-all active:scale-95"
          >
            Reservasi Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}
