"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#videos", label: "Videos" },
  { href: "#specifications", label: "Specifications" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 backdrop-blur-md border-b border-primary/20 ${
        scrolled ? "bg-bg/95" : "bg-bg/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display text-xl font-bold tracking-tight text-primary transition-opacity duration-500 hover:opacity-70"
        >
          Twin Builders
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-xs uppercase tracking-[0.15em] text-text-muted hover:text-primary transition-colors duration-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-accent text-text-main font-body text-xs font-bold uppercase tracking-[0.15em] transition-opacity duration-700 hover:opacity-80"
          >
            Free Quote
          </a>
          <button
            className="md:hidden text-primary p-1 transition-opacity duration-300 hover:opacity-60"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t border-primary/20 overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 bg-bg" : "max-h-0"
        }`}
      >
        <nav className="px-6 py-6 flex flex-col gap-5" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-body text-xs uppercase tracking-[0.15em] text-text-muted hover:text-primary transition-colors duration-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center px-5 py-3 bg-accent text-text-main font-body text-xs font-bold uppercase tracking-[0.15em] mt-2 transition-opacity duration-500 hover:opacity-80"
          >
            Get a Free Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
