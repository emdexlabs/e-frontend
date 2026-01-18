import HeroCarousel from "@/components/HeroCarousel";
import TeamExpertise from "@/components/TeamExpertise";
import IndustryGrid from "@/components/IndustryGrid";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroCarousel />
      <TeamExpertise />
      <IndustryGrid />
      <AboutSection />
      <Footer />
    </div>
  );
}
