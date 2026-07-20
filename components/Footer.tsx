import Link from "next/link";
import {
  BUSINESS_ADDRESS,
  BUSINESS_HOURS,
  GOOGLE_MAPS_URL,
  WHATSAPP_NUMBER_DISPLAY,
  WHATSAPP_RESERVATION_URL,
} from "@/lib/constants";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/event", label: "Event" },
  { href: "/artikel", label: "Artikel" },
  { href: "/contact-us", label: "Contact Us" },
];

const SOCIAL_LINKS = [
  { href: WHATSAPP_RESERVATION_URL, icon: "chat", label: "WhatsApp" },
  { href: GOOGLE_MAPS_URL, icon: "location_on", label: "Google Maps" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="font-display text-3xl font-bold tracking-tight mb-6">
              Kalih Signature
            </div>
            <p className="text-white/70 max-w-sm leading-relaxed">
              Destinasi gaya hidup terpadu di Tegal. Menghadirkan kualitas terbaik untuk setiap
              kunjungan Anda, dari kopi artisan hingga ruang kerja profesional.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Navigasi</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Kontak</h4>
            <ul className="space-y-4 text-white/70 text-sm">
              <li>{BUSINESS_ADDRESS}</li>
              <li>{BUSINESS_HOURS}</li>
              <li>
                <a
                  href={WHATSAPP_RESERVATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {WHATSAPP_NUMBER_DISPLAY} (WhatsApp)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-white/50">
            © {new Date().getFullYear()} Kalih Signature. Seluruh Hak Cipta Dilindungi.
          </div>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
