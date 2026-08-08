import type { Metadata } from "next";
import LegalClinicHero from "@/components/LegalClinicHero";
import LegalClinicAbout from "@/components/LegalClinicAbout";
import LegalClinicForm from "@/components/LegalClinicForm";

export const metadata: Metadata = {
  title: "Legal Clinic bersama Prof. Dr. Margono, S.H., M.H. | Kalih Signature",
  description:
    "Konsultasi hukum privat GRATIS selama 30 menit bersama Prof. Dr. Margono, S.H., M.H. di Kalih Signature Tegal. Kuota terbatas, daftar sekarang.",
};

export default function LegalClinicPage() {
  return (
    <>
      <LegalClinicHero />
      <LegalClinicAbout />
      <LegalClinicForm />
    </>
  );
}
