import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/portfolioData";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleHireMe = () => {
    window.location.href = "mailto:deepakhappy16@gmail.com";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border shadow-md"
          : "bg-transparent"
      }`}
      data-ocid="header-nav"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo("#home")}
          className="font-display font-bold text-xl tracking-tight text-foreground hover:text-accent transition-smooth"
          data-ocid="header-logo"
        >
          DK<span className="text-accent-glow">.</span>
        </button>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                type="button"
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 text-sm font-medium font-body rounded-md transition-smooth ${
                  isActive
                    ? "text-accent-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-ocid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA */}
        <Button
          type="button"
          size="sm"
          variant="outline"
          className="hidden md:inline-flex border-accent/40 text-accent hover:bg-accent/10 hover:border-accent font-mono text-xs transition-smooth"
          onClick={handleHireMe}
          data-ocid="header-cta"
        >
          Hire Me
        </Button>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-smooth"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          data-ocid="header-mobile-toggle"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-md border-b border-border px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`px-4 py-2.5 rounded-md text-sm font-medium transition-smooth text-left ${
                    isActive
                      ? "text-accent-glow bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  data-ocid={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              );
            })}
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="mt-2 w-full border-accent/40 text-accent hover:bg-accent/10 font-mono text-xs"
              onClick={handleHireMe}
            >
              Hire Me
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
