import Link from "next/link";
import Image from "next/image";
import {
  BUSINESS_ADDRESS,
  BUSINESS_HOURS,
  FACEBOOK_URL,
  GOFOOD_URL,
  INSTAGRAM_URL,
  NAV_LINKS,
  TIKTOK_URL,
  WHATSAPP_NUMBER_DISPLAY,
  WHATSAPP_RESERVATION_URL,
} from "@/lib/constants";
import {
  FacebookIcon,
  GojekIcon,
  InstagramIcon,
  TiktokIcon,
  WhatsappIcon,
} from "@/components/icons/BrandIcons";

const SOCIAL_LINKS = [
  { href: INSTAGRAM_URL, icon: InstagramIcon, label: "Instagram" },
  { href: FACEBOOK_URL, icon: FacebookIcon, label: "Facebook" },
  { href: TIKTOK_URL, icon: TiktokIcon, label: "TikTok" },
  { href: WHATSAPP_RESERVATION_URL, icon: WhatsappIcon, label: "WhatsApp" },
  { href: GOFOOD_URL, icon: GojekIcon, label: "GoFood" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Image
              src="/logos-navbar/kalih-new.webp"
              alt="Kalih Signature"
              width={300}
              height={159}
              className="h-12 w-auto mb-6"
            />
            <p className="text-white/70 max-w-sm leading-relaxed">
              Cafe keluarga di Tegal dengan signature coffee, hidangan favorit, working space, meeting room, rooftop, kids area, dan venue untuk berbagai acara.
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
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
