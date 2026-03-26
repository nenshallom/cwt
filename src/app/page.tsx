import Hero from '@/components/home/Hero'
import AboutSection from '@/components/home/AboutSection'
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import CareersSection from "@/components/home/CareersSection";
import ContactSection from "@/components/home/ContactSection";



export default function Home() {
  return (
    <main className="f">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <CareersSection />
      <ContactSection />
    </main>
  )
}
