import CareersHero from "@/components/careers/CareersHero";
import CareersPerks from "@/components/careers/CareersPerks";
import CareersPositions from "@/components/careers/CareersPositions";
import CareersProcess from "@/components/careers/CareersProcess";
import CareersCTA from "@/components/careers/CareersCTA"; 

export const metadata = {
  title: "Careers | Code Warriors Tech",
  description: "Join our team of innovators. Explore open positions and career opportunities at Code Warriors Tech.",
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersPerks />
      <CareersPositions />
      <CareersProcess />
      <CareersCTA />
    </>
  );
}