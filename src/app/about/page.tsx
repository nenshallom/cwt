import AboutHero from "@/components/about/AboutHero";
import AboutPurpose from "@/components/about/AboutPurpose";
import AboutStats from "@/components/about/AboutStats";
import AboutTeam from "@/components/about/AboutTeam";
import AboutCTA from "@/components/about/AboutCTA"; // <-- Import it

export const metadata = {
  title: "About Us | Code Warriors Tech",
  description: "Learn about Code Warriors Tech, our mission, vision, and the expert team behind our digital solutions.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutPurpose />
      <AboutStats />
      <AboutTeam />
      <AboutCTA /> 
    </>
  );
}