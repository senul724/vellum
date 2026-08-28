"use client";

import React from "react";
import { Ticket, Sparkles } from "lucide-react";
import { SimpleCardData } from "../types";

export function GoldenTicketCard({ data }: { data: SimpleCardData }) {
  return (
    <div className="w-full aspect-[4/5] rounded-3xl bg-[#f5efe6] p-4 sm:p-6 flex items-center justify-center select-none">
      {/* Golden Foil Pass Ticket */}
      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#fef3c7] via-[#fde68a] to-[#f59e0b] p-5 sm:p-6 text-amber-950 flex flex-col justify-between shadow-2xl border-2 border-amber-400 relative overflow-hidden">
        {/* Ticket Notches Cutout Circles on Left and Right */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#f5efe6] border border-amber-300 z-20" />
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#f5efe6] border border-amber-300 z-20" />

        {/* Shimmering Inset Line */}
        <div className="absolute inset-2.5 rounded-xl border border-dashed border-amber-700/30 pointer-events-none" />

        {/* Top Ticket Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-amber-800/20 pb-2.5">
          <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold tracking-widest text-amber-900">
            <Ticket className="w-4 h-4 text-amber-900" />
            <span>VIP ALL-ACCESS PASS</span>
          </div>
          <span className="font-mono text-[9px] font-bold bg-amber-900 text-amber-100 px-2 py-0.5 rounded-md uppercase">
            ADMIT ONE
          </span>
        </div>

        {/* Main Event Pass Body */}
        <div className="relative z-10 my-auto text-center space-y-2 py-2">
          <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-amber-900/80 font-bold block">
            OFFICIAL BIRTHDAY CELEBRATION
          </span>

          <h3 className="text-3xl sm:text-4xl font-serif font-black text-amber-950 tracking-tight leading-none uppercase">
            {data.recipientName || "SOPHIA"}
          </h3>

          <div className="bg-white/75 backdrop-blur-xs rounded-xl p-3 border border-amber-300/80 shadow-inner my-2">
            <p className="text-xs font-sans font-medium text-amber-950 leading-relaxed italic">
              &ldquo;{data.message}&rdquo;
            </p>
          </div>

          <div className="flex justify-between text-[9px] font-mono text-amber-900 px-2">
            <span>VENUE: ANYWHERE YOU ARE</span>
            <span>VALID: ALL YEAR ROUND</span>
          </div>
        </div>

        {/* Bottom Barcode & Issuer */}
        <div className="relative z-10 border-t border-dashed border-amber-800/30 pt-2 flex items-center justify-between">
          <div>
            <span className="text-[8px] font-mono uppercase text-amber-800 block">ISSUED WITH LOVE BY</span>
            <span className="font-serif font-bold text-xs text-amber-950">{data.senderName || "Julian"}</span>
          </div>

          {/* Barcode graphic */}
          <div className="font-mono tracking-widest text-[9px] font-bold text-amber-950 flex gap-0.5">
            <span className="inline-block w-1 h-5 bg-amber-950" />
            <span className="inline-block w-0.5 h-5 bg-amber-950" />
            <span className="inline-block w-1.5 h-5 bg-amber-950" />
            <span className="inline-block w-0.5 h-5 bg-amber-950" />
            <span className="inline-block w-1 h-5 bg-amber-950" />
            <span className="inline-block w-2 h-5 bg-amber-950" />
            <span className="inline-block w-0.5 h-5 bg-amber-950" />
            <span className="inline-block w-1 h-5 bg-amber-950" />
          </div>
        </div>
      </div>
    </div>
  );
}
