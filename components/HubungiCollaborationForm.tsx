"use client";

import { useEffect, useState, type FormEvent } from "react";
import { WHATSAPP_RESERVATION_URL } from "@/lib/constants";
import { useCollaborationModal } from "@/components/CollaborationModalContext";

const PLATFORMS = ["Instagram", "TikTok", "YouTube", "X / Twitter", "Other"];

const SCRIPT_URL = process.env.NEXT_PUBLIC_COLLAB_SCRIPT_URL;

export default function HubungiCollaborationForm() {
  const { isOpen, close } = useCollaborationModal();
  const [status, setStatus] = useState<"idle" | "loading" | "submitted" | "error">("idle");

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!SCRIPT_URL) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    const formData = new FormData(event.currentTarget);

    try {
      await fetch(SCRIPT_URL, { method: "POST", mode: "no-cors", body: formData });
      setStatus("submitted");
    } catch {
      setStatus("error");
    }
  };

  const handleClose = () => {
    close();
    setStatus("idle");
  };

  const underlineInput =
    "w-full border-0 border-b border-outline-variant bg-transparent py-2 px-0 focus:border-primary focus:ring-0 transition-colors outline-none placeholder:text-secondary/60";
  const underlineLabel = "block text-xs font-bold uppercase tracking-widest text-primary mb-2";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="kolaborasi-title"
    >
      <button
        type="button"
        aria-label="Tutup form kolaborasi"
        onClick={handleClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white p-6 sm:p-10 rounded-2xl border border-outline-variant shadow-2xl">
        <button
          type="button"
          aria-label="Tutup"
          onClick={handleClose}
          className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full text-secondary hover:bg-black/5 transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="mb-8 text-center">
          <h2 id="kolaborasi-title" className="font-display text-2xl sm:text-3xl font-bold text-primary mb-2">
            Kolaborasi KOL x Kalih Signature
          </h2>
          <p className="text-secondary text-sm max-w-md mx-auto">
            Lengkapi proposal di bawah ini dan tim kami akan meninjau pengajuan Anda dalam waktu 48 jam.
          </p>
        </div>

        {status === "submitted" ? (
          <div className="text-center py-8">
            <span className="material-symbols-outlined text-primary text-5xl mb-4 fill-1">
              check_circle
            </span>
            <p className="font-bold text-primary text-lg mb-2">Terima kasih!</p>
            <p className="text-secondary text-sm max-w-sm mx-auto">
              Pesan Anda sudah kami catat. Tim Kalih Signature akan segera menghubungi Anda.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-6 text-xs font-bold uppercase tracking-widest text-primary hover:opacity-70 transition-opacity"
            >
              Tutup
            </button>
          </div>
        ) : (
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="hubungi-collab-name" className={underlineLabel}>
                  Nama Lengkap
                </label>
                <input
                  required
                  id="hubungi-collab-name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  className={underlineInput}
                />
              </div>
              <div>
                <label htmlFor="hubungi-collab-phone" className={underlineLabel}>
                  No. Telp / WhatsApp
                </label>
                <input
                  required
                  id="hubungi-collab-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  pattern="[0-9+\-\s]{9,15}"
                  title="Masukkan nomor WhatsApp yang valid, contoh: 0812xxxxxxxx"
                  placeholder="+62 812..."
                  className={underlineInput}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="hubungi-collab-platform" className={underlineLabel}>
                  Platform Utama
                </label>
                <select
                  required
                  id="hubungi-collab-platform"
                  name="platform"
                  defaultValue=""
                  className={`${underlineInput} appearance-none pr-8`}
                >
                  <option value="" disabled>
                    Pilih platform
                  </option>
                  {PLATFORMS.map((platform) => (
                    <option key={platform} value={platform}>
                      {platform}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-0 bottom-2 pointer-events-none text-secondary text-lg">
                  expand_more
                </span>
              </div>
              <div>
                <label htmlFor="hubungi-collab-username" className={underlineLabel}>
                  Username
                </label>
                <input
                  required
                  id="hubungi-collab-username"
                  name="username"
                  type="text"
                  placeholder="@yourhandle"
                  className={underlineInput}
                />
              </div>
            </div>

            <div>
              <label htmlFor="hubungi-collab-followers" className={underlineLabel}>
                Jumlah Follower
              </label>
              <input
                required
                id="hubungi-collab-followers"
                name="followers"
                type="text"
                placeholder="e.g. 50k"
                className={underlineInput}
              />
            </div>

            <div>
              <label htmlFor="hubungi-collab-message" className={underlineLabel}>
                Pesan / Proposal
              </label>
              <textarea
                required
                id="hubungi-collab-message"
                name="message"
                rows={4}
                placeholder="Briefly describe your vision for this collaboration..."
                className={`${underlineInput} resize-none`}
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600">
                Gagal mengirim form. Silakan coba lagi atau hubungi kami langsung via{" "}
                <a
                  href={WHATSAPP_RESERVATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold"
                >
                  WhatsApp
                </a>
                .
              </p>
            )}

            <div className="pt-2 text-center">
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-primary text-on-primary px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:shadow-xl active:scale-95 disabled:opacity-60 disabled:pointer-events-none"
              >
                {status === "loading" ? "Mengirim..." : "Kirim Pengajuan"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
