import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import HubungiCollaborationForm from "@/components/HubungiCollaborationForm";

export const metadata: Metadata = {
  title: "Form Kolaborasi KOL & Brand | Kalih Signature",
  description:
    "Ajukan kolaborasi KOL, influencer, atau brand bersama Kalih Signature Tegal. Isi form proposal dan tim kami akan meninjau pengajuan Anda dalam 48 jam.",
};

export default function KolaborasiPage() {
  return (
    <>
      <PageHeader
        centered
        eyebrow="Partnership"
        title="Kolaborasi KOL & Brand"
        description="Kolaborasi bersama content creator, influencer, dan brand untuk aktivitas promosi di Kalih Signature."
      />
      <HubungiCollaborationForm />
    </>
  );
}
