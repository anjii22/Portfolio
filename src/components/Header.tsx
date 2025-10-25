import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const sections = ["home", "about", "skills", "projects", "contact"];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Detect scroll blur
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Observe sections to detect which is active
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          { threshold: 0.26 }
        );
        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-8">
          {sections.map((section) => (
            <Button
              key={section}
              variant="ghost"
              onClick={() => scrollToSection(section)}
              className={`text-foreground transition-colors ${
                activeSection === section
                  ? "text-primary font-semibold underline underline-offset-4"
                  : "hover:text-primary"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
