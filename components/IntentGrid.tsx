import Image from "next/image";

type IntentCard =
  | { type: "photo"; title: string; description: string; src: string; alt: string }
  | { type: "icon"; title: string; description: string; icon: string; tone: "solid" | "subtle" };

const CARDS: IntentCard[] = [
  {
    type: "photo",
    title: "Makan Bersama Keluarga",
    description: "Tempat favorit untuk menikmati waktu bersama keluarga dengan fasilitas dan menu kid friendly.",
    src: "/images-intent/makan-bersama.webp",
    alt: "Keluarga makan bersama di Kalih Signature",
  },
  {
    type: "photo",
    title: "Kerja & WFC",
    description: "Kerja lebih fokus dengan WiFi cepat dan suasana yang mendukung.",
    src: "/images-intent/wfc.webp",
    alt: "Area kerja dan WFC di Kalih Signature",
  },
  {
    type: "photo",
    title: "Corporate Meeting & Workshop",
    description: "Meeting dan workshop jadi lebih nyaman dengan fasilitas lengkap.",
    src: "/images-intent/meeting.webp",
    alt: "Meeting room Kalih Signature",
  },
  {
    type: "photo",
    title: "Rooftop Experience",
    description: "Nikmati suasana rooftop terbaik sambil bersantai di Tegal.",
    src: "/images-intent/rooftop.webp",
    alt: "Rooftop Kalih Signature saat senja",
  },
  {
    type: "photo",
    title: "Event & Gathering",
    description: "Pilihan tepat untuk berbagai acara dan momen spesial.",
    src: "/images-intent/event.webp",
    alt: "Event & Gathering Kalih Signature"
  },
  {
    type: "photo",
    title: "Menu Favorit",
    description: "Temukan menu andalan yang siap menemani setiap kunjungan.",
    src: "/images-intent/menu-fav.webp",
    alt: "Menu kopi dan pastry favorit Kalih Signature",
  },
];

export default function IntentGrid() {
  // pt dipisah dari pb: di mobile pt-24 penuh menumpuk dengan padding bawah
  // LegalClinicTeaser dan jarak kartu teaser ke judul ini jadi ~144px. pb tetap
  // 24 karena di bawahnya Facilities butuh nafas penuh sebelum ganti warna.
  return (
    <section id="intent" data-reveal className="pt-12 pb-24 sm:pt-24 px-gutter max-w-container-max mx-auto">
      <div className="mb-16">
        <h2 className="font-display text-4xl font-bold text-primary mb-4">
          Mau ke Kalih untuk apa hari ini?
        </h2>
        <div className="w-20 h-1 bg-primary" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
        {CARDS.map((card) =>
          card.type === "photo" ? (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 p-3 sm:p-6 lg:p-8 text-white">
                <h3 className="text-base sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{card.title}</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                  {card.description}
                </p>
              </div>
            </div>
          ) : (
            <div
              key={card.title}
              className={`group relative overflow-hidden rounded-2xl aspect-[4/5] flex items-center justify-center p-8 text-center cursor-pointer border border-primary/5 hover:bg-primary hover:text-white transition-colors duration-500 ${card.tone === "solid" ? "bg-primary/5" : "bg-primary/10"
                }`}
            >
              <div>
                <span className="material-symbols-outlined text-5xl mb-6">{card.icon}</span>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-sm opacity-80">{card.description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
