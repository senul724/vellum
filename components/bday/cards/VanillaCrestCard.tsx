"use client";

import React from "react";
import { Award, Feather } from "lucide-react";
import { SimpleCardData } from "../types";

export function VanillaCrestCard({ data }: { data: SimpleCardData }) {
  return (
    <div className="w-full aspect-[4/5] rounded-2xl bg-[#faf6ee] text-[#382b1f] p-6 sm:p-8 flex flex-col justify-between shadow-xl border-2 border-[#d5c3a5] relative overflow-hidden select-none">
      {/* Vintage Flourish Corners */}
      <div className="absolute top-3 left-4 text-[#9e7d52] text-xs">❖</div>
      <div className="absolute top-3 right-4 text-[#9e7d52] text-xs">❖</div>
      <div className="absolute bottom-3 left-4 text-[#9e7d52] text-xs">❖</div>
      <div className="absolute bottom-3 right-4 text-[#9e7d52] text-xs">❖</div>
      <div className="absolute inset-2.5 rounded-xl border border-dashed border-[#d5c3a5] pointer-events-none" />

      {/* Top Wax Seal Monogram */}
      <div className="relative z-10 text-center pt-2 flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 text-amber-100 flex items-center justify-center shadow-sm text-xs font-serif font-bold">
          ✦
        </div>
        <span className="text-[9px] font-serif uppercase tracking-[0.25em] text-[#876a44] mt-1.5 font-bold">
          HONORED SALUTATIONS
        </span>
      </div>

      {/* Main Center */}
      <div className="relative z-10 my-auto text-center space-y-2 py-1">
        <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#2d2116] tracking-tight leading-tight">
          {data.recipientName || "Sophia"}
        </h3>

        <div className="flex items-center justify-center gap-1.5 text-[#9e7d52]/60">
          <span className="h-px w-8 bg-[#bba27e]" />
          <span className="text-xs font-serif">❦</span>
          <span className="h-px w-8 bg-[#bba27e]" />
        </div>

        <p className="text-xs sm:text-sm font-serif italic text-[#46382a] leading-relaxed max-w-xs mx-auto px-2">
          &ldquo;{data.message}&rdquo;
        </p>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-[#d8c7ad] pt-3 flex items-center justify-between text-[11px] font-serif text-[#6e563d]">
        <span>Signed with warmth</span>
        <span className="font-bold text-[#2d2116] text-xs">
          {data.senderName || "Julian"}
        </span>
      </div>
    </div>
  );
}
