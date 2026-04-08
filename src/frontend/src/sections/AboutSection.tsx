import { Card, CardContent } from "@/components/ui/card";
import { education, personalInfo } from "@/data/portfolioData";
import { Calendar, GraduationCap, MapPin, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30" data-ocid="about-section">
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
            01. who i am
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            About <span className="underline-accent">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Profile summary */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-foreground/85 text-base sm:text-lg leading-relaxed font-body mb-6">
              {personalInfo.summary}
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              📍 Kanpur, Uttar Pradesh, India
            </p>
            <p className="font-mono text-xs text-muted-foreground mt-1">
              🕐 {personalInfo.availability}
            </p>
          </motion.div>

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card
              className="bg-card border-border hover:border-accent/30 transition-smooth overflow-hidden"
              data-ocid="education-card"
            >
              {/* Card accent bar */}
              <div className="h-1 bg-gradient-to-r from-accent to-accent/20" />
              <CardContent className="pt-6 pb-7 px-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-md bg-accent/10">
                    <GraduationCap size={18} className="text-accent" />
                  </div>
                  <span className="font-mono text-xs text-accent/80 uppercase tracking-widest">
                    Education
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-foreground mb-1 leading-snug">
                  {education.institution}
                </h3>
                <p className="text-foreground/80 font-body text-sm mb-4">
                  {education.degree}
                </p>

                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin
                      size={13}
                      className="text-accent/60 flex-shrink-0"
                    />
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar
                      size={13}
                      className="text-accent/60 flex-shrink-0"
                    />
                    <span>
                      Expected Graduation:{" "}
                      <span className="text-foreground">
                        {education.graduation}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <TrendingUp
                      size={13}
                      className="text-accent/60 flex-shrink-0"
                    />
                    <span>
                      CGPA:{" "}
                      <span className="text-accent font-semibold font-mono">
                        {education.cgpa}
                      </span>
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
