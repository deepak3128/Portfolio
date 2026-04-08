import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/portfolioData";
import type { Project } from "@/types/portfolio";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <Card
        className="group bg-card border-border hover:border-accent/40 transition-smooth h-full flex flex-col overflow-hidden"
        data-ocid={`project-card-${project.id}`}
      >
        {/* Accent bar */}
        <div className="h-[3px] bg-gradient-to-r from-accent via-accent/60 to-transparent" />

        <CardContent className="flex flex-col flex-1 p-6 gap-4">
          {/* Header */}
          <div>
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-display font-bold text-lg text-foreground leading-snug group-hover:text-accent transition-smooth">
                {project.title}
              </h3>
              <span className="font-mono text-xs text-muted-foreground/60 flex-shrink-0 mt-1">
                {project.period}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              {project.description}
            </p>
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Badge
                key={t}
                className="bg-accent/10 text-accent border-accent/25 text-xs font-mono px-2 py-0.5"
              >
                {t}
              </Badge>
            ))}
          </div>

          {/* Bullets */}
          <ul className="space-y-2 flex-1">
            {project.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-2 text-sm text-muted-foreground/85 font-body"
              >
                <ArrowRight
                  size={14}
                  className="text-accent/60 flex-shrink-0 mt-0.5"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-2 border-t border-border/50">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={`project-live-${project.id}`}
              >
                <Button
                  type="button"
                  size="sm"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-mono text-xs gap-1.5 h-8 px-3 transition-smooth"
                >
                  <ExternalLink size={13} />
                  Live Demo
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={`project-github-${project.id}`}
              >
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  className="border-border text-muted-foreground hover:border-accent/40 hover:text-accent font-mono text-xs gap-1.5 h-8 px-3 transition-smooth"
                >
                  <Github size={13} />
                  GitHub
                </Button>
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 bg-background"
      data-ocid="projects-section"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-xs text-accent/80 uppercase tracking-widest mb-2">
            02. what i've built
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            Featured <span className="underline-accent">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/deepak3128"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="projects-github-profile"
          >
            <Button
              type="button"
              variant="outline"
              className="border-border text-muted-foreground hover:border-accent/50 hover:text-accent font-mono text-sm gap-2 transition-smooth"
            >
              <Github size={15} />
              View All on GitHub
              <ExternalLink size={13} />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
