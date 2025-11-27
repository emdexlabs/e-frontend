import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import IndustryGrid from "@/components/IndustryGrid";
import ServicesAccordion from "@/components/ServicesAccordion";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroCarousel />
      <AboutSection />
      <IndustryGrid />
      <ServicesAccordion />
      <ContactForm />
      <Footer />
    </div>
  );
}
