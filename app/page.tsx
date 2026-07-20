import Hero from "@/components/Hero";
import IntentGrid from "@/components/IntentGrid";
import Facilities from "@/components/Facilities";
import FamilyFocus from "@/components/FamilyFocus";
import WorkMeeting from "@/components/WorkMeeting";
import CollaborationForm from "@/components/CollaborationForm";
import MenuShowcase from "@/components/MenuShowcase";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Articles from "@/components/Articles";
import LocationContact from "@/components/LocationContact";

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
      <Articles />
      <LocationContact />
    </>
  );
}
