"use client";

import React from "react";
import { SimpleCardData } from "../types";

export function BlushArchCard({ data }: { data: SimpleCardData }) {
  return (
    <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-b from-[#fff5f2] via-[#ffede6] to-[#fde5dc] text-stone-900 p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-rose-200/80 relative overflow-hidden select-none">
      {/* Modern Sun Arch Background Shape */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 rounded-b-full bg-gradient-to-b from-rose-200/50 to-amber-200/30 pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 text-center pt-2">
        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-rose-700/80 block">
          CELEBRATE & SHINE
        </span>
      </div>

      {/* Main Center */}
      <div className="relative z-10 my-auto text-center space-y-3 py-2">
        <div className="text-2xl">☀️ 🎂</div>
        <h3 className="text-3xl sm:text-4xl font-serif font-black text-rose-950 tracking-tight leading-tight">
          Happy Birthday, <br />
          <span className="text-rose-600">{data.recipientName || "Sophia"}</span>!
        </h3>

        <p className="text-xs sm:text-sm font-sans font-normal text-stone-700 leading-relaxed max-w-xs mx-auto px-2">
          &ldquo;{data.message}&rdquo;
        </p>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-rose-200/60 pt-3 flex items-center justify-between text-[11px] font-sans text-stone-600">
        <span>Sent with love</span>
        <span className="font-serif font-bold text-rose-950 text-xs">
          {data.senderName || "Julian"}
        </span>
      </div>
    </div>
  );
}
