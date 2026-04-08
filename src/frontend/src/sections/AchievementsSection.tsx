import { Card, CardContent } from "@/components/ui/card";
import { achievements, certifications } from "@/data/portfolioData";
import { Award, Medal, Trophy } from "lucide-react";
import { motion } from "motion/react";

export function AchievementsSection() {
  const [featured, ...rest] = achievements;

  return (
    <section
      id="achievements"
      className="py-24 bg-background"
      data-ocid="achievements-section"
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
            04. recognition
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            Achievements &{" "}
            <span className="underline-accent">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Achievements column */}
          <div>
            <h3 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-widest mb-5 flex items-center gap-2">
              <Trophy size={14} className="text-accent/60" />
              Achievements
            </h3>

            {/* Featured achievement */}
            {featured && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-4"
                data-ocid="achievement-featured"
              >
                <Card className="bg-accent/10 border-accent/40 overflow-hidden">
                  <div className="h-[3px] bg-gradient-to-r from-accent to-accent/20" />
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-lg bg-accent/20 flex-shrink-0 mt-0.5">
                        <Trophy size={18} className="text-accent" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs text-accent uppercase tracking-widest">
                            🏆 National Finalist
                          </span>
                        </div>
                        <p className="font-display font-bold text-base text-foreground leading-snug mb-1">
                          {featured.title}
                        </p>
                        {featured.description && (
                          <p className="text-muted-foreground text-sm font-body leading-relaxed">
                            {featured.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Other achievements */}
            <div className="space-y-3">
              {rest.map((ach, i) => (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                  data-ocid={`achievement-item-${i}`}
                >
                  <Card className="bg-card border-border hover:border-accent/25 transition-smooth">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Medal
                          size={15}
                          className="text-accent/60 flex-shrink-0 mt-0.5"
                        />
                        <div>
                          <p className="font-display font-semibold text-sm text-foreground mb-0.5">
                            {ach.title}
                          </p>
                          {ach.description && (
                            <p className="text-muted-foreground text-xs font-body">
                              {ach.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications column */}
          <div>
            <h3 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-widest mb-5 flex items-center gap-2">
              <Award size={14} className="text-accent/60" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  data-ocid={`cert-item-${i}`}
                >
                  <Card className="bg-card border-border hover:border-accent/25 transition-smooth">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-md bg-muted flex-shrink-0">
                          <Award size={15} className="text-accent/70" />
                        </div>
                        <div>
                          <p className="font-display font-semibold text-sm text-foreground mb-0.5">
                            {cert.title}
                          </p>
                          <p className="font-mono text-xs text-muted-foreground">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
