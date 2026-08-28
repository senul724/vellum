"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Volume2, VolumeX } from "lucide-react";
import { useWeddingAudio } from "./WeddingAudio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isPlaying, toggleMusic } = useWeddingAudio();

  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Story", href: "#story" },
    { name: "Poruwa & Schedule", href: "#schedule" },
    { name: "Gallery", href: "#gallery" },
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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: scrolled ? 0 : -100,
        opacity: scrolled ? 1 : 0,
        pointerEvents: scrolled ? "auto" : "none",
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md shadow-sm border-b border-[#D4AF37]/25 py-3.5 transition-colors"
    >
      {/* Top Scroll Progress Line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] via-[#FFF3D1] to-[#D4AF37] origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Monogram Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 text-2xl tracking-widest text-[#2C3E35] transition-opacity hover:opacity-85"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          <span className="font-semibold">S</span>
          <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]/30 transition-transform group-hover:scale-120" />
          <span className="font-semibold">K</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase text-[#2C3E35]/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative py-1 transition-colors hover:text-[#D4AF37] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Background Music Toggle & RSVP CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleMusic}
            className={`p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer ${
              isPlaying
                ? "bg-[#D4AF37] text-white border-[#D4AF37] shadow-md shadow-[#D4AF37]/30"
                : "bg-white/70 text-[#2C3E35] border-[#D4AF37]/35 hover:border-[#D4AF37]"
            }`}
            title={isPlaying ? "Pause Wedding Music" : "Play Wedding Music"}
          >
            {isPlaying ? (
              <Volume2 className="w-4 h-4 text-white animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-[#2C3E35]/70" />
            )}
          </button>

          <a
            href="#rsvp"
            onClick={(e) => scrollToSection(e, "#rsvp")}
            className="inline-flex items-center justify-center px-5 py-2 text-xs font-semibold tracking-widest uppercase rounded-full border border-[#D4AF37] bg-[#D4AF37]/10 text-[#2C3E35] hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-sm"
          >
            RSVP
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleMusic}
            className="p-2 text-[#2C3E35] hover:text-[#D4AF37] transition-colors"
            title={isPlaying ? "Pause Music" : "Play Music"}
          >
            {isPlaying ? <Volume2 className="w-5 h-5 text-[#D4AF37] animate-pulse" /> : <VolumeX className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2C3E35] hover:text-[#D4AF37] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#FAF7F2]/95 backdrop-blur-lg border-b border-[#D4AF37]/20 px-6 py-6"
          >
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-base tracking-wider uppercase py-2 text-[#2C3E35] hover:text-[#D4AF37] transition-colors"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#rsvp"
                onClick={(e) => scrollToSection(e, "#rsvp")}
                className="mt-2 inline-block py-3 text-xs font-semibold tracking-widest uppercase rounded-full border border-[#D4AF37] bg-[#D4AF37] text-white hover:bg-[#C5A028] transition-colors shadow-md"
              >
                RSVP Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
