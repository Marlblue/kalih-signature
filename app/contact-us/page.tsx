import type { Metadata } from "next";
import ContactHeader from "@/components/ContactHeader";
import LocationContact from "@/components/LocationContact";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact Us | Kalih Signature",
  description:
    "Hubungi Kalih Signature untuk reservasi, pertanyaan, atau kolaborasi. Temukan lokasi, jam operasional, dan kontak WhatsApp kami di Tegal.",
};

export default function ContactUsPage() {
  return (
    <>
      <ContactHeader />
      <LocationContact />
      <ContactFormSection />
    </>
  );
}
