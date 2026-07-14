import { ContactSection } from "@/components/ContactSection";
import { EventDetails } from "@/components/EventDetails";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { PurchaseFlowSection } from "@/components/PurchaseFlowSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <EventDetails />
        <PurchaseFlowSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
