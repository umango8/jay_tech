import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PartnersSection from "@/components/sections/PartnersSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import ApproachSection from "@/components/sections/ApproachSection";
import IndustriesSection from "@/components/IndustriesSection";
import QualitySection from "@/components/sections/QualitySection";
import GallerySection from "@/components/sections/GallerySection";
import QuoteSection from "@/components/sections/QuoteSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <ProductsSection />
      <CapabilitiesSection />
      <ApproachSection />
      <IndustriesSection />
      <QualitySection />
      <GallerySection />
      <QuoteSection />
      <Footer />
      </main>
  );
}
