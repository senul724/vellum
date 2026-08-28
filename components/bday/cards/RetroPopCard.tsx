"use client";

import React from "react";
import { SimpleCardData } from "../types";

export function RetroPopCard({ data }: { data: SimpleCardData }) {
  return (
    <div className="w-full aspect-[4/5] rounded-2xl bg-[#fff8fa] text-stone-900 p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-pink-200 relative overflow-hidden select-none">
      {/* Playful Floating Confetti Dots */}
      <div className="absolute top-4 right-6 text-xl">🎈</div>
      <div className="absolute top-10 left-6 text-xl">🎉</div>
      <div className="absolute bottom-12 right-6 text-lg">✨</div>
      <div className="absolute bottom-10 left-6 text-lg">🍰</div>

      {/* Top Header */}
      <div className="relative z-10 text-center pt-2">
        <div className="inline-block px-3 py-0.5 rounded-full bg-pink-100 border border-pink-200 text-pink-700 font-sans font-bold text-[10px] uppercase tracking-wider">
          YAY! IT&apos;S YOUR DAY
        </div>
      </div>

      {/* Main Center */}
      <div className="relative z-10 my-auto text-center space-y-3 py-2">
        <h3 className="text-4xl sm:text-5xl font-sans font-black text-pink-950 tracking-tight leading-none">
          CHEERS TO <br />
          <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">
            {data.recipientName?.toUpperCase() || "SOPHIA"}!
          </span>
        </h3>

        <div className="flex justify-center gap-1 text-pink-300">
          <span>~*~</span>
        </div>

        <p className="text-xs sm:text-sm font-sans font-medium text-stone-700 leading-relaxed max-w-xs mx-auto px-2">
          &ldquo;{data.message}&rdquo;
        </p>
      </div>

      {/* Footer */}
      <div className="relative z-10 bg-white/80 rounded-xl p-2.5 border border-pink-100 flex items-center justify-between text-[11px] font-sans text-stone-600">
        <span>From your friend</span>
        <span className="font-bold text-pink-900 text-xs">
          {data.senderName || "Julian"}
        </span>
      </div>
    </div>
  );
}
