import PageHero from "@/components/ui/PageHero";

export default function EventHero() {
  return (
    <PageHero
      image={{ src: "/event-hero/event page.webp", alt: "Events at Kalih Signature Tegal" }}
      eyebrow="Events"
      title="Momen Baik, Tempatnya Juga Harus Baik."
      description="Rayakan bersama keluarga, teman, atau tim dalam suasana yang nyaman."
    >
      <a
        href="#booking"
        className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all active:scale-95"
      >
        Inquiry & Booking
        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </a>
    </PageHero>
  );
}
