import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA"; 
export const metadata = {
  title: "Our Portfolio | Code Warriors Tech",
  description: "Explore our collection of successful projects and digital solutions.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioCTA /> 
    </>
  );
}