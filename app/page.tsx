import { Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import IntentGrid from "@/components/IntentGrid";

const Facilities = dynamic(() => import("@/components/Facilities"));
const FamilyFocus = dynamic(() => import("@/components/FamilyFocus"));
const WorkMeeting = dynamic(() => import("@/components/WorkMeeting"));
const CollaborationForm = dynamic(() => import("@/components/CollaborationForm"));
const MenuShowcase = dynamic(() => import("@/components/MenuShowcase"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Articles = dynamic(() => import("@/components/Articles"));
const LocationContact = dynamic(() => import("@/components/LocationContact"));

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Hero />
      <IntentGrid />
      <Facilities />
      <FamilyFocus />
      <WorkMeeting />
      <CollaborationForm />
      <MenuShowcase />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Suspense fallback={null}>
        <Articles />
      </Suspense>
      <LocationContact />
    </>
  );
}
