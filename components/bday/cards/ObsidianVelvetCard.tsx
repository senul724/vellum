"use client";

import React from "react";
import { Sparkles, Crown } from "lucide-react";
import { SimpleCardData } from "../types";

export function ObsidianVelvetCard({ data }: { data: SimpleCardData }) {
  return (
    <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-b from-[#15131b] via-[#1a1724] to-[#0f0e15] text-stone-100 p-6 sm:p-8 flex flex-col justify-between shadow-2xl border border-amber-400/30 relative overflow-hidden select-none">
      {/* Gold Inset Border */}
      <div className="absolute inset-3 rounded-xl border border-amber-400/20 pointer-events-none" />

      {/* Star Particles */}
      <div className="absolute top-4 left-5 text-amber-300/40 text-xs">✦</div>
      <div className="absolute top-4 right-5 text-amber-300/40 text-xs">✧</div>
      <div className="absolute bottom-4 left-5 text-amber-300/40 text-xs">✧</div>
      <div className="absolute bottom-4 right-5 text-amber-300/40 text-xs">✦</div>

      {/* Top Header */}
      <div className="relative z-10 text-center pt-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-[10px] font-sans uppercase tracking-[0.25em]">
          <Crown className="w-3 h-3 text-amber-400" />
          <span>A CELESTIAL TRIBUTE</span>
        </div>
      </div>

      {/* Main Center */}
      <div className="relative z-10 my-auto text-center space-y-3 py-2">
        <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-light text-amber-200/70 block">
          HAPPY BIRTHDAY
        </span>

        <h3 className="text-3xl sm:text-4xl font-serif font-medium bg-gradient-to-r from-amber-100 via-amber-200 to-yellow-300 bg-clip-text text-transparent tracking-tight leading-tight">
          {data.recipientName || "Sophia"}
        </h3>

        <div className="w-8 h-px bg-amber-400/40 mx-auto" />

        <p className="text-xs sm:text-sm font-serif italic text-stone-300/90 leading-relaxed max-w-xs mx-auto px-2">
          &ldquo;{data.message}&rdquo;
        </p>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-amber-500/20 pt-3 flex items-center justify-between text-[11px] font-sans text-amber-200/70">
        <span>Inscribed with admiration</span>
        <span className="font-serif font-bold text-amber-300 text-xs">
          {data.senderName || "Julian"}
        </span>
      </div>
    </div>
  );
}
