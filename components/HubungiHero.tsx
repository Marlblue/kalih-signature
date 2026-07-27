import Image from "next/image";
import { BUSINESS_HOURS } from "@/lib/constants";

export default function HubungiHero() {
  return (
    <header className="pt-24 sm:pt-32 pb-8 px-gutter flex flex-col items-center text-center max-w-2xl mx-auto">
      <div className="w-24 h-24 sm:w-28 sm:h-28 bg-primary rounded-full flex items-center justify-center mb-6">
        <Image
          src="/logos-navbar/kalih-new.webp"
          alt="Kalih Signature"
          width={300}
          height={159}
          priority
          className="h-9 sm:h-11 w-auto"
        />
      </div>
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-3 tracking-tight">
        Kalih Signature
      </h1>
      <p className="text-secondary max-w-xs sm:max-w-md">
        Tempat nyaman untuk ngopi, makan, kerja, meeting, dan merayakan momen spesial di Tegal.
      </p>
      <div className="mt-4 flex items-center gap-2 px-4 py-1.5 bg-surface border border-outline-variant rounded-full">
        <span className="material-symbols-outlined text-primary text-sm">schedule</span>
        <span className="text-xs font-bold text-primary uppercase tracking-widest">{BUSINESS_HOURS}</span>
      </div>
    </header>
  );
}
