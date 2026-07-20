import type { Metadata } from "next";
import EventHero from "@/components/EventHero";
import EventCategories from "@/components/EventCategories";
import EventGalleryMoments from "@/components/EventGalleryMoments";
import EventInquiryForm from "@/components/EventInquiryForm";

export const metadata: Metadata = {
  title: "Event | Kalih Signature",
  description:
    "Rayakan corporate meeting, ulang tahun, engagement, hingga community workshop di Kalih Signature Tegal — venue premium yang dekat dengan alam.",
};

export default function EventPage() {
  return (
    <>
      <EventHero />
      <EventCategories />
      <EventGalleryMoments />
      <EventInquiryForm />
    </>
  );
}
