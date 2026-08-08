import type { Metadata } from "next";
import LegalClinicSuccess from "@/components/LegalClinicSuccess";

export const metadata: Metadata = {
  title: "Terima Kasih | Legal Clinic Kalih Signature",
  description: "Pendaftaran Legal Clinic Anda telah kami terima.",
  // Halaman ini hanya berarti setelah submit, jadi jangan sampai muncul di
  // hasil pencarian (dan sengaja tidak didaftarkan di app/sitemap.ts).
  robots: { index: false, follow: false },
};

export default function LegalClinicTerimaKasihPage() {
  return <LegalClinicSuccess />;
}
