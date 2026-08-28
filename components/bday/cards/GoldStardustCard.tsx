"use client";

import React from "react";
import { Sparkles, Heart } from "lucide-react";
import { SimpleCardData } from "../types";

export function GoldStardustCard({ data }: { data: SimpleCardData }) {
  return (
    <div className="w-full aspect-[4/5] rounded-2xl bg-[#fffefb] text-stone-900 p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-amber-200/80 relative overflow-hidden select-none">
      {/* Gold Foil Border Inset */}
      <div className="absolute inset-3 rounded-xl border border-amber-400/40 pointer-events-none" />
      <div className="absolute inset-4 rounded-lg border border-dashed border-amber-300/30 pointer-events-none" />

      {/* Foil Sparkles in Corners */}
      <div className="absolute top-4 left-4 text-amber-500/50 text-xs">✦</div>
      <div className="absolute top-4 right-4 text-amber-500/50 text-xs">✦</div>
      <div className="absolute bottom-4 left-4 text-amber-500/50 text-xs">✦</div>
      <div className="absolute bottom-4 right-4 text-amber-500/50 text-xs">✦</div>

      {/* Top Header */}
      <div className="relative z-10 text-center pt-2">
        <div className="flex items-center justify-center gap-1.5 text-amber-600 text-[10px] sm:text-xs font-sans font-semibold uppercase tracking-[0.3em]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>HAPPY BIRTHDAY</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Center Name & Wish */}
      <div className="relative z-10 my-auto text-center space-y-3 py-2">
        <h3 className="text-3xl sm:text-4xl font-serif font-bold text-amber-950 tracking-tight leading-tight px-1">
          {data.recipientName || "Sophia"}
        </h3>

        <div className="w-10 h-px bg-amber-400/50 mx-auto" />

        <p className="text-xs sm:text-sm font-serif italic text-stone-700 leading-relaxed max-w-xs mx-auto px-2">
          &ldquo;{data.message}&rdquo;
        </p>
      </div>

      {/* Footer Signature */}
      <div className="relative z-10 border-t border-amber-200/60 pt-3 flex items-center justify-between text-[11px] font-sans text-stone-500">
        <span>With love</span>
        <span className="font-serif font-bold text-amber-950 text-xs">
          {data.senderName || "Julian"}
        </span>
      </div>
    </div>
  );
}
