import { AboutSection } from "@/sections/AboutSection";
import { AchievementsSection } from "@/sections/AchievementsSection";
import { ContactSection } from "@/sections/ContactSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SkillsSection } from "@/sections/SkillsSection";

export function PortfolioPage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <AchievementsSection />
      <ContactSection />
    </>
  );
}
