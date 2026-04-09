import { personalInfo } from "@/data/portfolioData";
import { Linkedin, Mail, Phone } from "lucide-react";
import { SiGithub } from "react-icons/si";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-card border-t border-border" data-ocid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <p className="font-display font-bold text-2xl text-foreground mb-2">
              DK<span className="text-accent-glow">.</span>
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Full Stack Developer & Front-End React Developer passionate about
              building performant, user-centric web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-display font-semibold text-sm text-foreground uppercase tracking-widest mb-3">
              Navigate
            </p>
            <ul className="space-y-2">
              {["Projects", "Skills", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(item.toLowerCase())
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-muted-foreground hover:text-accent transition-smooth"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display font-semibold text-sm text-foreground uppercase tracking-widest mb-3">
              Get In Touch
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-smooth"
                  data-ocid="footer-email"
                >
                  <Mail size={14} />
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-smooth"
                  data-ocid="footer-phone"
                >
                  <Phone size={14} />
                  {personalInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-smooth"
                  data-ocid="footer-github"
                >
                  <SiGithub size={14} />
                  github.com/deepak3128
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-smooth"
                  data-ocid="footer-linkedin"
                >
                  <Linkedin size={14} />
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} Deepak Katiyar. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with love :revolving_hearts:
          </p>
        </div>
      </div>
    </footer>
  );
}
