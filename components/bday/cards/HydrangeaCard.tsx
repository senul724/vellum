"use client";

import React from "react";
import { SimpleCardData } from "../types";

export function HydrangeaCard({ data }: { data: SimpleCardData }) {
  return (
    <div className="w-full aspect-[4/5] rounded-2xl bg-[#faf9f6] text-stone-900 p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-indigo-100 relative overflow-hidden select-none">
      {/* Top Botanical Watercolor Illustration */}
      <div className="relative z-10 w-full h-24 sm:h-28 flex items-center justify-center pt-2">
        <svg viewBox="0 0 200 90" className="w-48 h-full object-contain" xmlns="http://www.w3.org/2000/svg">
          {/* Leaves */}
          <path d="M100,60 Q70,75 50,65 Q60,45 100,55 Z" fill="#a7f3d0" opacity="0.8" />
          <path d="M100,60 Q130,75 150,65 Q140,45 100,55 Z" fill="#6ee7b7" opacity="0.8" />
          {/* Hydrangea Florets */}
          <circle cx="75" cy="38" r="11" fill="#c7d2fe" />
          <circle cx="90" cy="30" r="12" fill="#818cf8" />
          <circle cx="100" cy="40" r="13" fill="#6366f1" />
          <circle cx="112" cy="30" r="12" fill="#a5b4fc" />
          <circle cx="125" cy="38" r="11" fill="#818cf8" />
          <circle cx="100" cy="22" r="10" fill="#c7d2fe" />
          {/* Centers */}
          <circle cx="90" cy="30" r="2.5" fill="#ffffff" opacity="0.9" />
          <circle cx="100" cy="40" r="2.5" fill="#ffffff" opacity="0.9" />
          <circle cx="112" cy="30" r="2.5" fill="#ffffff" opacity="0.9" />
        </svg>
      </div>

      {/* Main Center */}
      <div className="relative z-10 my-auto text-center space-y-2 py-1">
        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-indigo-900/60 block">
          A BIRTHDAY TOAST FOR
        </span>

        <h3 className="text-3xl sm:text-4xl font-serif font-bold text-indigo-950 tracking-tight leading-tight">
          {data.recipientName || "Sophia"}
        </h3>

        <div className="w-8 h-px bg-indigo-200 mx-auto" />

        <p className="text-xs sm:text-sm font-serif italic text-stone-700 leading-relaxed max-w-xs mx-auto px-2">
          &ldquo;{data.message}&rdquo;
        </p>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-indigo-100 pt-3 flex items-center justify-between text-[11px] font-sans text-stone-500">
        <span>Warmest wishes</span>
        <span className="font-serif font-bold text-indigo-950 text-xs">
          {data.senderName || "Julian"}
        </span>
      </div>
    </div>
  );
}
