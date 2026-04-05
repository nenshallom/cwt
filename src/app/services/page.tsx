import ServicesHero from "@/components/services/ServicesHero";
// import ServicesExpertise from "@/components/services/ServicesExpertise";
import ServicesWorkflow from "@/components/services/ServicesWorkflow";
import ServicesSection from "@/components/home/ServicesSection";
// import ServicesTechStack from "@/components/services/ServicesTechStack";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
  title: "Our Services | Code Warriors Tech",
  description: "Comprehensive digital services including software development, SaaS solutions, and mobile apps.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      {/* <ServicesExpertise /> */}
      <ServicesSection />
      <ServicesWorkflow />
      {/* <ServicesTechStack /> */}
      <ServicesCTA />
    </>
  );
}