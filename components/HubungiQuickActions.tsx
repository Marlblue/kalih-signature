import { WHATSAPP_RESERVATION_URL } from "@/lib/constants";

export default function HubungiQuickActions() {
  return (
    <section className="px-gutter max-w-xl mx-auto space-y-4 mb-8">
      <a
        href={WHATSAPP_RESERVATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="shimmer-button flex items-center justify-between w-full bg-primary text-on-primary p-5 rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
      >
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined">chat</span>
          <span className="text-xs font-bold uppercase tracking-widest">Reservasi via WhatsApp</span>
        </div>
        <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
      </a>
      <a
        href="/hubungi/kolaborasi"
        className="flex items-center justify-between w-full bg-surface text-primary p-5 rounded-xl border border-outline-variant hover:bg-primary/5 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined">handshake</span>
          <span className="text-xs font-bold uppercase tracking-widest">Form Kolaborasi</span>
        </div>
        <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
      </a>
    </section>
  );
}
