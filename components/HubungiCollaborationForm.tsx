"use client";

import { useState, type FormEvent } from "react";
import { WHATSAPP_RESERVATION_URL } from "@/lib/constants";

const PLATFORMS = ["Instagram", "TikTok", "YouTube", "X / Twitter", "Other"];

const SCRIPT_URL = process.env.NEXT_PUBLIC_COLLAB_SCRIPT_URL;

export default function HubungiCollaborationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "submitted" | "error">("idle");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!SCRIPT_URL) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    const formData = new FormData(event.currentTarget);
    formData.set("phone", `+62${phone}`);
    formData.set("username", `@${username}`);

    try {
      await fetch(SCRIPT_URL, { method: "POST", mode: "no-cors", body: formData });
      setStatus("submitted");
    } catch {
      setStatus("error");
    }
  };

  const underlineInput =
    "w-full border-0 border-b border-outline-variant bg-transparent py-2 px-0 focus:border-primary focus:ring-0 transition-colors outline-none placeholder:text-secondary/60";
  const underlineLabel = "block text-xs font-bold uppercase tracking-widest text-primary mb-2";

  return (
    <section data-reveal className="px-gutter max-w-2xl mx-auto py-16">
      <div className="bg-white p-6 sm:p-10 rounded-2xl border border-outline-variant shadow-2xl">
        <div className="mb-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-2">
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
                  minLength={3}
                  maxLength={60}
                  pattern="[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ.'\-\s]{2,59}"
                  title="Masukkan nama lengkap yang valid (minimal 3 huruf)"
                  placeholder="Your full name"
                  className={underlineInput}
                />
              </div>
              <div>
                <label htmlFor="hubungi-collab-phone" className={underlineLabel}>
                  No. Telp / WhatsApp
                </label>
                <div className="flex items-center border-b border-outline-variant focus-within:border-primary transition-colors">
                  <span className="py-2 pr-1 text-secondary select-none">+62</span>
                  <input
                    required
                    id="hubungi-collab-phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value.replace(/\D/g, ""))}
                    minLength={8}
                    maxLength={13}
                    pattern="(?!(\d)\1{7,12}$)8[0-9]{7,12}"
                    title="Masukkan nomor WhatsApp yang valid, harus diawali angka 8, contoh: 812xxxxxxxx"
                    placeholder="812xxxxxxxx"
                    className="w-full border-0 bg-transparent py-2 px-0 focus:ring-0 outline-none placeholder:text-secondary/60"
                  />
                </div>
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
                <div className="flex items-center border-b border-outline-variant focus-within:border-primary transition-colors">
                  <span className="py-2 pr-1 text-secondary select-none">@</span>
                  <input
                    required
                    id="hubungi-collab-username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value.replace(/^@+/, ""))}
                    pattern="[A-Za-z0-9._]{2,30}"
                    title="Masukkan username yang valid, contoh: yourhandle"
                    placeholder="yourhandle"
                    className="w-full border-0 bg-transparent py-2 px-0 focus:ring-0 outline-none placeholder:text-secondary/60"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="hubungi-collab-followers" className={underlineLabel}>
                  Jumlah Follower
                </label>
                <input
                  required
                  id="hubungi-collab-followers"
                  name="followers"
                  type="text"
                  pattern="[0-9]+([.,][0-9]+)?\s?(k|rb|jt|m)?"
                  title="Masukkan jumlah follower yang valid, contoh: 50k atau 1.2jt"
                  placeholder="e.g. 50k"
                  className={underlineInput}
                />
              </div>
              <div>
                <label htmlFor="hubungi-collab-domicile" className={underlineLabel}>
                  Domisili
                </label>
                <input
                  required
                  id="hubungi-collab-domicile"
                  name="domicile"
                  type="text"
                  minLength={3}
                  maxLength={60}
                  placeholder="Tegal"
                  className={underlineInput}
                />
              </div>
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
                minLength={10}
                maxLength={1000}
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
    </section>
  );
}
