"use client";

import React from "react";
import { Gamepad2, Heart } from "lucide-react";
import { SimpleCardData } from "../types";

export function PixelArcadeCard({ data }: { data: SimpleCardData }) {
  return (
    <div className="w-full aspect-[4/5] rounded-3xl bg-[#2e3828] p-4 sm:p-5 flex flex-col justify-between shadow-2xl border-4 border-[#1f261b] select-none text-[#9bbc0f]">
      {/* 90s LCD Green Screen Display */}
      <div className="w-full h-full rounded-2xl bg-[#8bac0f] text-[#0f380f] p-5 flex flex-col justify-between border-4 border-[#306230] shadow-inner font-mono relative overflow-hidden">
        {/* Top Status Bar */}
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider border-b-2 border-[#0f380f]/40 pb-1.5">
          <div className="flex items-center gap-1">
            <span>♥ ♥ ♥</span>
            <span>PLAYER 1</span>
          </div>
          <span>LVL UP! ★</span>
        </div>

        {/* Center Pixel Stage */}
        <div className="my-auto text-center space-y-2 py-2">
          {/* Pixel Birthday Cake Graphic (SVG Pixel Art) */}
          <div className="text-3xl animate-bounce">👾 🎂 👾</div>

          <div className="text-xs font-black uppercase tracking-widest bg-[#0f380f] text-[#8bac0f] py-1 px-2 rounded-md inline-block">
            STAGE: {data.recipientName?.toUpperCase() || "SOPHIA"}
          </div>

          <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight uppercase pt-1">
            +1 YEAR UNLOCKED!
          </h3>

          {/* 8-bit Dialog Box for wish */}
          <div className="bg-[#9bbc0f] p-3 rounded-lg border-2 border-[#0f380f] shadow-xs text-left">
            <p className="text-[11px] leading-relaxed font-bold">
              &gt; {data.message}
            </p>
          </div>
        </div>

        {/* Footer High Score & Player 2 */}
        <div className="border-t-2 border-[#0f380f]/40 pt-1.5 flex items-center justify-between text-[9px] font-bold">
          <span>HIGH SCORE: 999999</span>
          <span>P2: {data.senderName?.toUpperCase() || "JULIAN"}</span>
        </div>
      </div>
    </div>
  );
}
