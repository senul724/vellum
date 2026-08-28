"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-16 px-6 bg-[#2C3E35] text-[#FAF7F2] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Monogram */}
        <div
          className="inline-flex items-center justify-center gap-3 text-3xl font-serif text-[#D4AF37] mb-6"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          <span>A</span>
          <Heart className="w-4 h-4 fill-[#D4AF37]/40 text-[#D4AF37]" />
          <span>L</span>
        </div>

        {/* Closing Quote */}
        <blockquote
          className="text-2xl sm:text-3xl font-serif text-[#E8D8B0] italic max-w-xl mx-auto mb-6 leading-relaxed"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          &ldquo;Love is composed of a single soul inhabiting two bodies.&rdquo;
        </blockquote>

        <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-8 font-medium">
          #AmeliaAndLiam2026
        </p>

        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/60 font-light">
          <p>© 2026 Amelia &amp; Liam. All rights reserved.</p>
          <div className="flex items-center gap-1 text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Glasshouse at Willow Creek</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
