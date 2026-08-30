"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Volume2, VolumeX } from "lucide-react";
import { useBirthdayAudio } from "./BirthdayAudio";

interface NavbarProps {
  onReplayEnvelope?: () => void;
}

export function Navbar({ onReplayEnvelope }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isPlaying, toggleMusic } = useBirthdayAudio();

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
    { name: "Milestone Toast", href: "#toast" },
    { name: "Party Itinerary", href: "#itinerary" },
    { name: "Rooftop Venue", href: "#venue" },
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
      className="fixed top-0 left-0 right-0 z-50 bg-[#120F18]/85 backdrop-blur-xl shadow-xl border-b border-white/10 py-3.5 transition-colors"
    >
      {/* Top Scroll Progress Line in Electric Sunset Gradient */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#FF3366] via-[#F59E0B] to-[#A855F7] origin-left z-50 shadow-[0_0_10px_rgba(255,51,102,0.8)]"
        style={{ scaleX }}
      />

      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Monogram Logo in Vibrant Sunset Gradient */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-2.5 text-white transition-opacity hover:opacity-90"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF3366] via-[#FF758F] to-[#F59E0B] flex items-center justify-center font-serif text-sm font-bold text-white shadow-[0_0_15px_rgba(255,51,102,0.5)]">
            S
          </span>
          <span className="font-serif tracking-widest text-sm font-semibold uppercase text-white/95">
            Sophia &bull; 25th
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors font-medium relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#FF3366] to-[#F59E0B] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Actions: Audio Toggle & RSVP CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Background Audio Control with Neon Equalizer */}
          <button
            onClick={toggleMusic}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 text-xs font-medium text-white transition-all cursor-pointer shadow-xs backdrop-blur-md"
            title={isPlaying ? "Mute Birthday Audio" : "Play Birthday Audio"}
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#FF758F]" />
                <span className="hidden sm:inline text-[11px] font-mono text-white/90">Party Audio</span>
                <span className="flex items-center gap-0.5 ml-0.5">
                  <span className="w-1 h-2.5 bg-[#FF3366] rounded-full animate-pulse" />
                  <span className="w-1 h-3.5 bg-[#F59E0B] rounded-full" />
                  <span className="w-1 h-2 bg-[#A855F7] rounded-full animate-pulse" />
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-white/50" />
                <span className="hidden sm:inline text-[11px] font-mono text-white/50">Muted</span>
              </>
            )}
          </button>

          {/* Quick RSVP CTA in Vibrant Sunset Gradient */}
          <a
            href="#rsvp"
            onClick={(e) => scrollToSection(e, "#rsvp")}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF3366] to-[#FF758F] hover:from-[#E62E5C] hover:to-[#FF5C7A] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-[0_0_15px_rgba(255,51,102,0.4)] hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-3 h-3 text-amber-200" />
            <span>RSVP</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full border border-white/20 text-white hover:text-[#FF758F] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-[#120F18]/95 px-6 py-4 space-y-3 backdrop-blur-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-sm uppercase tracking-widest text-white/80 hover:text-[#FF758F] py-1 font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10">
              <a
                href="#rsvp"
                onClick={(e) => scrollToSection(e, "#rsvp")}
                className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#FF3366] to-[#FF758F] text-white text-center text-xs uppercase tracking-widest font-semibold block shadow-md"
              >
                RSVP to Sophia&apos;s 25th
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
