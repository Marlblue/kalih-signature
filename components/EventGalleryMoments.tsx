import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";

const MOMENTS = [
  { image: { src: "/event-moments/Meeting.webp", alt: "Meeting Moment" }, caption: "Meeting" },
  { image: { src: "/event-moments/Nobar.webp", alt: "Nobar Moment" }, caption: "Nobar" },
  { image: { src: "/event-moments/Sepeda.webp", alt: "Sepeda Moment" }, caption: "Sepeda" },
  { image: { src: "/event-moments/Special Moment.webp", alt: "Special Moment" }, caption: "Special Moment" },
];

export default function EventGalleryMoments() {
  return (
    <section data-reveal className="bg-surface py-24 overflow-hidden">
      <div className="px-gutter max-w-container-max mx-auto mb-10">
        <Eyebrow className="mb-2">Our Gallery</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary tracking-tight">
          Momen yang Telah Kami Abadikan
        </h2>
      </div>
      <div className="flex gap-6 overflow-x-auto px-gutter pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {MOMENTS.map((moment) => (
          <div
            key={moment.caption}
            className="min-w-[300px] md:min-w-[450px] aspect-video relative overflow-hidden rounded-xl group flex-shrink-0"
          >
            <Image
              src={moment.image.src}
              alt={moment.image.alt}
              fill
              sizes="(min-width: 768px) 450px, 300px"
              className="object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-sm font-bold uppercase tracking-widest">
                {moment.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
