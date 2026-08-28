"use client";

import React from "react";
import { Sparkles, Heart } from "lucide-react";
import { SimpleCardData } from "../types";

export function PolaroidStickerCard({ data }: { data: SimpleCardData }) {
  return (
    <div className="w-full aspect-[4/5] rounded-3xl bg-[#f5efe6] p-4 sm:p-6 flex flex-col justify-center items-center relative overflow-hidden select-none">
      {/* Taped Polaroid Instant Photo */}
      <div className="w-full h-full bg-white rounded-xl shadow-2xl p-4 pb-6 flex flex-col justify-between border border-stone-200 rotate-[-1.5deg] relative">
        {/* Washi Tape at Top Center */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-amber-300/80 -rotate-2 rounded-xs shadow-xs border-y border-amber-400/40 z-20" />

        {/* Fun Holographic Stickers on Corners */}
        <div className="absolute top-2 right-2 z-20 bg-gradient-to-r from-pink-400 via-purple-400 to-amber-300 text-stone-950 font-bold text-[9px] px-2 py-0.5 rounded-full shadow-md rotate-6 uppercase border border-white">
          🌟 100% ICON
        </div>

        <div className="absolute bottom-16 -left-2 z-20 bg-amber-400 text-stone-950 font-bold text-[9px] px-2 py-0.5 rounded-full shadow-md -rotate-12 uppercase border border-white">
          🎂 VIP EDITION
        </div>

        {/* Photo Area (Square) */}
        <div className="w-full aspect-[4/3] rounded-lg bg-gradient-to-br from-rose-100 via-amber-50 to-indigo-100 flex flex-col items-center justify-center p-3 relative overflow-hidden border border-stone-100 shadow-inner">
          <div className="text-4xl animate-bounce">🎂</div>
          <div className="text-xs font-sans font-bold text-stone-800 mt-1 uppercase tracking-wider">
            HAPPY BIRTHDAY!
          </div>
          <div className="text-[10px] text-stone-500 font-mono">✦ CELEBRATING YOU ✦</div>
        </div>

        {/* Polaroid Bottom Caption Margin (Handwritten style) */}
        <div className="my-auto pt-3 text-center space-y-1.5">
          <h3 className="font-[family-name:var(--font-handwriting)] text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
            Dearest {data.recipientName || "Sophia"} ✨
          </h3>

          <p className="font-[family-name:var(--font-handwriting)] text-base sm:text-lg text-stone-700 leading-snug line-clamp-3 px-1 font-semibold">
            &ldquo;{data.message}&rdquo;
          </p>
        </div>

        {/* Signature */}
        <div className="border-t border-stone-200/80 pt-2 flex items-center justify-between font-[family-name:var(--font-handwriting)] text-sm text-stone-600 font-bold">
          <span>Sent with love 💖</span>
          <span className="text-base text-stone-900">— {data.senderName || "Julian"}</span>
        </div>
      </div>
    </div>
  );
}
