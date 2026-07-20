import PageHero from "@/components/ui/PageHero";
import { STOCK_IMAGES } from "@/lib/stock-images";

export default function EventHero() {
  return (
    <PageHero
      image={STOCK_IMAGES.galleryArsitektur2}
      eyebrow="Event Experiences"
      title="Setiap Event Punya Suasananya Sendiri."
      description="Ubah momen Anda menjadi kenangan abadi di tengah suasana modern yang tetap dekat dengan alam."
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
