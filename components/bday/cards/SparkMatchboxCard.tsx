"use client";

import React from "react";
import { Flame, Sparkles } from "lucide-react";
import { SimpleCardData } from "../types";

export function SparkMatchboxCard({ data }: { data: SimpleCardData }) {
  return (
    <div className="w-full aspect-[4/5] rounded-3xl bg-[#fef6ee] p-4 sm:p-5 flex items-center justify-center select-none">
      {/* Retro Matchbox Sleeve */}
      <div className="w-full h-full rounded-2xl bg-gradient-to-b from-[#ea580c] via-[#c2410c] to-[#9a3412] text-amber-50 p-5 sm:p-6 flex flex-col justify-between shadow-2xl border-2 border-orange-400 relative overflow-hidden">
        {/* Match Striker Strip on Edge */}
        <div className="absolute right-0 top-0 bottom-0 w-3 bg-[#431407] border-l border-amber-900/50 [background:repeating-linear-gradient(45deg,#290b04,#290b04_3px,#431407_3px,#431407_6px)]" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-orange-400/40 pb-2">
          <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-amber-200 font-bold">
            <Flame className="w-3.5 h-3.5 text-yellow-300" />
            <span>SAFETY STRIKE MATCH</span>
          </div>
          <span className="font-mono text-[8px] bg-yellow-400 text-amber-950 font-bold px-2 py-0.5 rounded-full uppercase">
            EST. 2026
          </span>
        </div>

        {/* Center Flame & Match Graphic */}
        <div className="relative z-10 my-auto text-center space-y-2 py-1">
          {/* Lit Golden Match */}
          <div className="flex flex-col items-center">
            <div className="w-4 h-6 rounded-full bg-gradient-to-t from-orange-500 via-yellow-300 to-white shadow-[0_0_20px_#facc15] animate-pulse" />
            <div className="w-1.5 h-2 bg-stone-900 rounded-t-xs" />
            <div className="w-1 h-8 bg-amber-100 shadow-xs" />
          </div>

          <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-yellow-300 font-bold block">
            A SPARK FOR YOUR SPECIAL DAY
          </span>

          <h3 className="text-2xl sm:text-3xl font-serif font-black text-white tracking-tight uppercase leading-tight">
            {data.recipientName || "SOPHIA"}
          </h3>

          {/* Wish Box */}
          <div className="bg-[#431407]/70 backdrop-blur-xs p-3 rounded-xl border border-orange-400/40 text-left">
            <p className="text-xs font-sans text-amber-100 leading-relaxed italic">
              &ldquo;{data.message}&rdquo;
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 border-t border-orange-400/40 pt-2 flex items-center justify-between text-[9px] font-mono text-amber-200">
          <span>STRIKE A SPARK & CELEBRATE</span>
          <span className="font-bold text-white uppercase">— {data.senderName || "JULIAN"}</span>
        </div>
      </div>
    </div>
  );
}
