import { ContactSection } from "@/components/ContactSection";
import { EventDetails } from "@/components/EventDetails";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { PurchaseOptions } from "@/components/PurchaseOptions";
import { TutorialSection } from "@/components/TutorialSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <EventDetails />
        <PurchaseOptions />
        <TutorialSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
