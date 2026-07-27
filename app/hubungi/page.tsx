import type { Metadata } from "next";
import HubungiHero from "@/components/HubungiHero";
import HubungiQuickActions from "@/components/HubungiQuickActions";
import HubungiLinkGrid from "@/components/HubungiLinkGrid";
import HubungiSocials from "@/components/HubungiSocials";
import HubungiCollaborationForm from "@/components/HubungiCollaborationForm";
import HubungiLocation from "@/components/HubungiLocation";
import { CollaborationModalProvider } from "@/components/CollaborationModalContext";

export const metadata: Metadata = {
  title: "Hubungi Kami | Kalih Signature",
  description:
    "Semua tautan penting Kalih Signature dalam satu halaman: reservasi WhatsApp, menu, meeting room, event, rooftop, sosial media, dan lokasi di Tegal.",
};

export default function HubungiPage() {
  return (
    <CollaborationModalProvider>
      <HubungiHero />
      <HubungiQuickActions />
      <HubungiLinkGrid />
      <HubungiSocials />
      <HubungiCollaborationForm />
      <HubungiLocation />
    </CollaborationModalProvider>
  );
}
