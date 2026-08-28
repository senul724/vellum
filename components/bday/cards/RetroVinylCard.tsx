"use client";

import React, { useState } from "react";
import { Disc3, Sparkles } from "lucide-react";
import { SimpleCardData } from "../types";

export function RetroVinylCard({ data }: { data: SimpleCardData }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full aspect-[4/5] rounded-3xl bg-[#1c1917] text-stone-100 p-6 sm:p-7 flex flex-col justify-between shadow-2xl border-4 border-[#292524] relative overflow-hidden select-none"
    >
      {/* Vinyl Disc Peeking Out From Right */}
      <div
        className={`absolute -right-16 top-1/2 -translate-y-1/2 w-48 h-48 sm:w-52 sm:h-52 rounded-full bg-[#0c0a09] border-4 border-[#292524] shadow-2xl transition-transform duration-500 flex items-center justify-center pointer-events-none ${
          isHovered ? "translate-x-4 rotate-45" : "translate-x-0 rotate-0"
        }`}
      >
        {/* Vinyl Grooves (Concentric Circles) */}
        <div className="w-40 h-40 rounded-full border border-stone-800 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full border border-stone-800 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border border-stone-800 flex items-center justify-center">
              {/* Center Record Label */}
              <div className="w-16 h-16 rounded-full bg-amber-400 text-stone-950 flex flex-col items-center justify-center text-center p-1 border-2 border-stone-900">
                <span className="text-[7px] font-bold uppercase tracking-wider">SIDE A</span>
                <span className="text-[8px] font-black leading-tight line-clamp-1">{data.recipientName || "SOPHIA"}</span>
                <div className="w-2.5 h-2.5 rounded-full bg-stone-900 mt-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Retro Album Sleeve Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-stone-700/80 pb-2">
        <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-amber-400 font-bold">
          <Disc3 className="w-3.5 h-3.5 animate-spin" />
          <span>STEREO // 33 RPM</span>
        </div>
        <span className="text-[9px] font-mono text-stone-400 uppercase bg-stone-800 px-2 py-0.5 rounded-md">
          SPECIAL RELEASE
        </span>
      </div>

      {/* Center Sleeve Content */}
      <div className="relative z-10 my-auto py-2 space-y-3 max-w-[70%]">
        <span className="text-[10px] font-mono tracking-widest uppercase text-stone-400 block">
          TRACK 01: CELEBRATION
        </span>

        <h3 className="text-3xl sm:text-4xl font-serif font-black text-amber-300 tracking-tight leading-none">
          HAPPY BIRTHDAY, <br />
          <span className="text-white">{data.recipientName?.toUpperCase() || "SOPHIA"}!</span>
        </h3>

        {/* Wish Note in Album Liner Box */}
        <div className="bg-[#292524]/90 backdrop-blur-xs p-3.5 rounded-2xl border border-stone-700 shadow-inner">
          <p className="text-xs font-sans text-stone-200 leading-relaxed italic">
            &ldquo;{data.message}&rdquo;
          </p>
        </div>
      </div>

      {/* Footer / Producer Tag */}
      <div className="relative z-10 border-t border-stone-700/80 pt-2.5 flex items-center justify-between text-[10px] font-mono text-stone-400">
        <span>PRODUCED WITH LOVE</span>
        <span className="text-amber-400 font-bold font-sans text-xs">
          BY {data.senderName?.toUpperCase() || "JULIAN"}
        </span>
      </div>
    </div>
  );
}
