import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolioData";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

function scrollToSection(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleScrollProjects() {
  scrollToSection("projects");
}

function handleScrollContact() {
  scrollToSection("contact");
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
      data-ocid="hero-section"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--accent)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Cyan gradient glow orb */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(var(--accent)) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <Badge
            className="bg-accent/10 text-accent border-accent/30 font-mono text-xs px-3 py-1 gap-1.5"
            data-ocid="hero-availability-badge"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse inline-block" />
            Available for React / Next.js Roles · May 2027
          </Badge>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-foreground leading-none mb-4"
        >
          Deepak
          <br />
          <span className="text-accent-glow">Katiyar</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="font-mono text-base sm:text-lg text-muted-foreground mb-6 tracking-wide"
        >
          <span className="text-accent/80">{"<"}</span>
          {personalInfo.title}
          <span className="text-accent/80">{" />"}</span>
        </motion.p>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-body"
        >
          Building scalable, responsive web apps with React & real-time tech.
          Strong in translating designs into reusable components and integrating
          REST APIs.{" "}
          <span className="text-foreground font-medium">
            National Finalist – SIH 2025.
          </span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button
            type="button"
            size="lg"
            onClick={handleScrollProjects}
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold px-8 shadow-lg hover:shadow-accent/30 transition-smooth"
            data-ocid="hero-cta-projects"
          >
            View My Work
            <ArrowDown size={16} className="ml-2" />
          </Button>
          <Button
            type="button"
            size="lg"
            variant="outline"
            onClick={handleScrollContact}
            className="border-border text-foreground hover:border-accent hover:text-accent font-display font-semibold px-8 transition-smooth"
            data-ocid="hero-cta-contact"
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center justify-center gap-5"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-smooth p-2 rounded-md hover:bg-accent/10"
            aria-label="GitHub profile"
            data-ocid="hero-github-link"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-smooth p-2 rounded-md hover:bg-accent/10"
            aria-label="LinkedIn profile"
            data-ocid="hero-linkedin-link"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted-foreground hover:text-accent transition-smooth p-2 rounded-md hover:bg-accent/10"
            aria-label="Send email"
            data-ocid="hero-email-link"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="font-mono text-xs text-muted-foreground/50 tracking-widest uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={14} className="text-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
