import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_RESERVATION_URL } from "@/lib/constants";

const LINKS = [
  {
    href: "/menu",
    external: false,
    title: "Menu",
    description: "Signature coffee & hidangan favorit.",
    cta: "Lihat Menu",
    src: "/images-intent/menu-fav.webp",
    alt: "Menu Kalih Signature",
  },
  {
    href: WHATSAPP_RESERVATION_URL,
    external: true,
    title: "Meeting Room",
    description: "Ruang privat untuk corporate meeting.",
    cta: "Reservasi",
    src: "/images-intent/meeting.webp",
    alt: "Meeting room Kalih Signature",
  },
  {
    href: WHATSAPP_RESERVATION_URL,
    external: true,
    title: "Event",
    description: "Gathering, ulang tahun, hingga engagement.",
    cta: "Reservasi",
    src: "/images-intent/event.webp",
    alt: "Event & gathering Kalih Signature",
  },
  {
    href: WHATSAPP_RESERVATION_URL,
    external: true,
    title: "Rooftop",
    description: "Suasana rooftop terbaik di Tegal.",
    cta: "Reservasi",
    src: "/images-intent/rooftop.webp",
    alt: "Rooftop Kalih Signature",
  },
];

export default function HubungiLinkGrid() {
  return (
    <section className="px-gutter max-w-container-max mx-auto mb-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {LINKS.map((link) => {
          const card = (
            <>
              <div className="relative overflow-hidden rounded-2xl aspect-square transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src={link.src}
                  alt={link.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col items-start flex-grow">
                <h3 className="font-display text-lg font-bold text-primary mb-1">{link.title}</h3>
                <p className="text-secondary text-sm mb-4 flex-grow">{link.description}</p>
                <span className="bg-surface text-primary text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest border border-outline-variant group-hover:bg-primary/5 transition-colors mt-auto">
                  {link.cta}
                </span>
              </div>
            </>
          );

          return link.external ? (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-4 group h-full"
            >
              {card}
            </a>
          ) : (
            <Link key={link.title} href={link.href} className="flex flex-col gap-4 group h-full">
              {card}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
