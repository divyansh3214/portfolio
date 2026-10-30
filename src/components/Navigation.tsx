"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/90 backdrop-blur-md"
          : "bg-slate-950/60 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight text-white">
            Divyansh Sharma
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-sm text-slate-300 transition-colors hover:text-cyan-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-slate-300 transition-colors hover:text-cyan-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm text-slate-300 transition-colors hover:text-cyan-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-slate-300 transition-colors hover:text-cyan-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-slate-300 transition-colors hover:text-cyan-300"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="text-slate-200 transition-colors hover:text-cyan-300 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mt-4 border-t border-white/10 pb-4 pt-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-slate-300 transition-colors hover:text-cyan-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-slate-300 transition-colors hover:text-cyan-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-slate-300 transition-colors hover:text-cyan-300"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-slate-300 transition-colors hover:text-cyan-300"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-slate-300 transition-colors hover:text-cyan-300"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;