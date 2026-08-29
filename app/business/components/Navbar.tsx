"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Menu, X, Calendar, Lock } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Credentials", href: "#badge" },
    { name: "Agenda", href: "#agenda" },
    { name: "The St. Regis", href: "#venue" },
    { name: "RSVP", href: "#rsvp" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#16181D]/95 backdrop-blur-md border-b border-black/60 shadow-[0_8px_20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Monogram Seal */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group"
        >
          {/* Skeuomorphic Brass Mini Seal */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-[#E2C889] via-[#C5A059] to-[#8C6D2D] p-0.5 shadow-[0_2px_6px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center">
            <div className="w-full h-full rounded-[6px] bg-[#1A1C20] flex items-center justify-center font-mono text-[10px] font-black text-[#E2C889]">
              NX
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-widest text-[#E6E4DF] uppercase leading-none">
              Nexus Summit
            </span>
            <span className="text-[9px] font-mono tracking-wider text-[#C5A059] uppercase pt-0.5">
              Leadership 2026
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-xs uppercase tracking-widest text-[#A8A5A0] hover:text-[#E6E4DF] transition-colors font-mono font-medium relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Tactile Skeuomorphic RSVP Button */}
        <div className="flex items-center gap-3">
          <a
            href="#rsvp"
            onClick={(e) => scrollToSection(e, "#rsvp")}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-b from-[#2E333D] to-[#1C1F26] border border-white/15 text-xs font-mono font-bold tracking-wider text-white shadow-[0_4px_0_#0D0E11,0_6px_10px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.25)] hover:from-[#353B47] hover:to-[#22262E] active:translate-y-[2px] active:shadow-[0_2px_0_#0D0E11] transition-all cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Confirm Attendance</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#1D2026] border border-white/10 text-[#E6E4DF]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/60 bg-[#16181D]/98 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block text-xs uppercase tracking-widest text-[#E6E4DF] py-1 font-mono"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <a
              href="#rsvp"
              onClick={(e) => scrollToSection(e, "#rsvp")}
              className="block w-full py-2.5 rounded-lg bg-gradient-to-b from-[#2E333D] to-[#1C1F26] text-white text-center text-xs font-mono font-bold tracking-wider border border-white/20"
            >
              Confirm Attendance
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
