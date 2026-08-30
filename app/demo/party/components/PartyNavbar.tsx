"use client";

import { useState, useEffect } from "react";
import { Sparkles, Beer, Menu, X, BellOff, Check } from "lucide-react";

export function PartyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [oooStatus, setOooStatus] = useState("🌴 Out of Office");
  const [statusToast, setStatusToast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Vibes", href: "#vibes" },
    { name: "Perks", href: "#perks" },
    { name: "Schedule", href: "#schedule" },
    { name: "Venue", href: "#venue" },
    { name: "RSVP", href: "#rsvp" },
  ];

  const toggleStatus = () => {
    const statuses = [
      "🌴 Out of Office",
      "🍸 At the Open Bar",
      "🌮 Eating Midnight Tacos",
      "🎧 Requesting 90s Hip Hop",
      "🔕 Do Not Disturb (Ever)",
    ];
    const nextIdx = (statuses.indexOf(oooStatus) + 1) % statuses.length;
    setOooStatus(statuses[nextIdx]);
    setStatusToast(true);
    setTimeout(() => setStatusToast(false), 2500);
  };

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
          ? "bg-[#0B0E16]/90 backdrop-blur-xl border-b border-white/10 shadow-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 group"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-300 flex items-center justify-center font-mono text-xs font-black text-[#0B0E16] shadow-md shadow-emerald-500/20">
            VX
          </span>
          <div className="flex flex-col text-left">
            <span className="font-mono text-xs font-bold tracking-widest text-white uppercase leading-tight">
              Voxel Labs
            </span>
            <span className="text-[9px] font-mono tracking-wider text-emerald-400 uppercase">
              OOO Annual Party 2026
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-xs uppercase tracking-wider text-white/70 hover:text-white transition-colors font-mono font-medium relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-emerald-400 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Actions: Interactive Slack Status Toggle & RSVP */}
        <div className="flex items-center gap-3 relative">
          <button
            onClick={toggleStatus}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs font-mono text-emerald-300 transition-all cursor-pointer shadow-xs"
            title="Click to change your Slack status"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{oooStatus}</span>
          </button>

          {/* Toast Notification */}
          {statusToast && (
            <div className="absolute top-12 right-24 bg-emerald-950/95 border border-emerald-400 text-emerald-200 px-3 py-1.5 rounded-lg text-xs font-mono shadow-2xl whitespace-nowrap animate-in fade-in slide-in-from-top-1 z-50">
              Slack Status Updated: {oooStatus}
            </div>
          )}

          <a
            href="#rsvp"
            onClick={(e) => scrollToSection(e, "#rsvp")}
            className="px-5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#0B0E16] text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:scale-105 active:scale-95"
          >
            RSVP (Free Bar)
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg bg-white/10 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0B0E16]/98 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block text-sm uppercase tracking-wider text-white/80 hover:text-emerald-400 py-1 font-mono"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={toggleStatus}
              className="w-full py-2 rounded-lg bg-white/10 text-xs font-mono text-emerald-300 block mb-2"
            >
              Status: {oooStatus}
            </button>
            <a
              href="#rsvp"
              onClick={(e) => scrollToSection(e, "#rsvp")}
              className="block w-full py-2.5 rounded-lg bg-emerald-500 text-[#0B0E16] text-center text-xs font-mono font-bold uppercase tracking-wider"
            >
              RSVP For Your Drink Pass
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
