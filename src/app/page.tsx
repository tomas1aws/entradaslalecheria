import { EventDetails } from "@/components/EventDetails";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { SoldOutSection } from "@/components/SoldOutSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <SoldOutSection />
        <EventDetails />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
