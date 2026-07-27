import {
  FACEBOOK_URL,
  GOFOOD_URL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  WHATSAPP_RESERVATION_URL,
} from "@/lib/constants";
import {
  FacebookIcon,
  GojekIcon,
  InstagramIcon,
  TiktokIcon,
  WhatsappIcon,
} from "@/components/icons/BrandIcons";

const SOCIALS = [
  { href: INSTAGRAM_URL, icon: InstagramIcon, label: "Instagram" },
  { href: FACEBOOK_URL, icon: FacebookIcon, label: "Facebook" },
  { href: TIKTOK_URL, icon: TiktokIcon, label: "TikTok" },
  { href: WHATSAPP_RESERVATION_URL, icon: WhatsappIcon, label: "WhatsApp" },
  { href: GOFOOD_URL, icon: GojekIcon, label: "GoFood" },
];

export default function HubungiSocials() {
  return (
    <section className="px-gutter max-w-xl mx-auto mb-12">
      <h2 className="text-xs font-bold uppercase tracking-widest text-center text-secondary mb-6">
        Stay Connected
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-surface rounded-2xl border border-outline-variant hover:bg-primary/5 transition-colors group"
          >
            <social.icon className="w-7 h-7 text-primary mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-primary">{social.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
