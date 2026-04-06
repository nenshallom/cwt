import ServicesHero from "@/components/services/ServicesHero";
import ServicesWorkflow from "@/components/services/ServicesWorkflow";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA"; 

export const metadata = {
  title: "Our Services | Code Warriors Tech",
  description: "Comprehensive digital services including software development, SaaS solutions, and mobile apps.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesSection />
      <ServicesWorkflow />
      <PortfolioCTA />
    </>
  );
}