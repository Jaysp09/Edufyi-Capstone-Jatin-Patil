import { useState } from "react";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import AdminPanel from "@/components/portfolio/AdminPanel";
import Footer from "@/components/portfolio/Footer";

export default function Portfolio() {
  const [adminOpen, setAdminOpen] = useState(false);

  return (
    <div data-testid="portfolio-page" className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-500">
      <Navbar onAdminClick={() => setAdminOpen(true)} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
      <AdminPanel isOpen={adminOpen} onClose={() => setAdminOpen(false)} />
    </div>
  );
}
