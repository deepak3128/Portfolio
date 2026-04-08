import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo } from "@/data/portfolioData";
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "deepakhappy16@gmail.com",
    href: "mailto:deepakhappy16@gmail.com",
    ocid: "contact-email",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8318522320",
    href: "tel:+918318522320",
    ocid: "contact-phone",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/deepak3128",
    href: "https://github.com/deepak3128",
    external: true,
    ocid: "contact-github",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/deepak-katiyar",
    href: personalInfo.linkedin,
    external: true,
    ocid: "contact-linkedin",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-muted/30"
      data-ocid="contact-section"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <p className="font-mono text-xs text-accent/80 uppercase tracking-widest mb-2">
            05. let's connect
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            Get In <span className="underline-accent">Touch</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-12 font-body"
        >
          I'm actively seeking{" "}
          <span className="text-foreground font-medium">
            remote React / Next.js Developer
          </span>{" "}
          roles — full-time or internship. Available for IST and flexible US/EU
          time zones. Feel free to reach out!
        </motion.p>

        {/* Contact cards grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={link.ocid}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              >
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="block group"
                  data-ocid={link.ocid}
                >
                  <Card className="bg-card border-border group-hover:border-accent/40 transition-smooth text-left">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="p-2.5 rounded-md bg-accent/10 group-hover:bg-accent/20 transition-smooth flex-shrink-0">
                        <Icon size={18} className="text-accent" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-0.5">
                          {link.label}
                        </p>
                        <p className="text-sm text-foreground font-body group-hover:text-accent transition-smooth truncate">
                          {link.value}
                        </p>
                      </div>
                      {link.external && (
                        <ExternalLink
                          size={13}
                          className="text-muted-foreground/40 group-hover:text-accent/60 transition-smooth ml-auto flex-shrink-0"
                        />
                      )}
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <a
            href={`mailto:${personalInfo.email}`}
            data-ocid="contact-primary-cta"
          >
            <Button
              type="button"
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-semibold px-10 shadow-lg hover:shadow-accent/30 transition-smooth gap-2"
            >
              <Send size={16} />
              Say Hello
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
