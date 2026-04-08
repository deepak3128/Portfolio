import { skillCategories } from "@/data/portfolioData";
import { motion } from "motion/react";

const categoryIcons: Record<string, string> = {
  "Core Technologies": "⚛️",
  "APIs & Real-time": "🔌",
  "Mobile & State": "📱",
  "Backend & Databases": "🗄️",
  "Tools & Languages": "🛠️",
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 bg-muted/30"
      data-ocid="skills-section"
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
            03. what i know
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            Technical <span className="underline-accent">Skills</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: catIdx * 0.08 }}
              className="bg-card border border-border hover:border-accent/30 rounded-lg p-5 transition-smooth"
              data-ocid={`skills-category-${cat.category.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg" role="img" aria-hidden="true">
                  {categoryIcons[cat.category] ?? "💡"}
                </span>
                <h3 className="font-display font-semibold text-sm text-foreground tracking-wide">
                  {cat.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIdx * 0.08 + skillIdx * 0.04,
                    }}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-background border border-border text-muted-foreground hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-smooth cursor-default"
                    data-ocid={`skill-tag-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
