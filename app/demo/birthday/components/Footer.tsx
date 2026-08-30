"use client";

import { Sparkles, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-16 px-6 bg-[#08070A] text-[#FAF7F2] overflow-hidden z-10 border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[#FF3366]/15 via-[#F59E0B]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        {/* Monogram in Sunset Gradient */}
        <div className="inline-flex items-center justify-center gap-3 text-3xl font-serif text-white">
          <span className="bg-gradient-to-r from-[#FF758F] to-[#FBBF24] bg-clip-text text-transparent font-bold">
            S
          </span>
          <span className="text-xl text-[#FF758F]">&bull;</span>
          <span className="bg-gradient-to-r from-[#FBBF24] to-[#FF758F] bg-clip-text text-transparent font-bold">
            25
          </span>
        </div>

        {/* Closing Quote */}
        <blockquote className="text-xl sm:text-2xl font-serif text-white/90 italic max-w-lg mx-auto leading-relaxed">
          &ldquo;Here&apos;s to twenty-five years of memories, and the beginning of the best ones yet.&rdquo;
        </blockquote>

        <p className="text-xs uppercase tracking-[0.3em] text-[#FF8FA3] font-bold">
          #SophiaTurns25 &bull; October 24, 2026
        </p>

        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FF3366]/60 to-transparent mx-auto" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light pt-2">
          <p>© 2026 Sophia Sinclair. Created with Inviteside Studio.</p>
          <div className="flex items-center gap-1.5 text-[#FF758F]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Glasshouse Rooftop &bull; Los Angeles</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
