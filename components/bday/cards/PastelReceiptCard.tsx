"use client";

import React from "react";
import { Receipt, Sparkles } from "lucide-react";
import { SimpleCardData } from "../types";

export function PastelReceiptCard({ data }: { data: SimpleCardData }) {
  return (
    <div className="w-full aspect-[4/5] rounded-3xl bg-[#fdf2f4] p-4 sm:p-5 flex items-center justify-center select-none font-mono">
      {/* Paper Receipt with Zigzag Top and Bottom */}
      <div className="w-full h-full bg-white rounded-xl shadow-xl p-5 sm:p-6 text-stone-800 flex flex-col justify-between border border-stone-200 relative overflow-hidden">
        {/* Receipt Header */}
        <div className="text-center border-b-2 border-dashed border-stone-300 pb-2.5">
          <div className="text-xl">🍰 ✨</div>
          <h4 className="font-bold text-xs uppercase tracking-widest text-stone-900 mt-0.5">
            CELEBRATION CAFE // ORDER #0825
          </h4>
          <span className="text-[9px] text-stone-400">TABLE FOR: {data.recipientName?.toUpperCase() || "SOPHIA"}</span>
        </div>

        {/* Itemized Order List */}
        <div className="my-auto py-2 space-y-1.5 text-[11px] text-stone-700">
          <div className="flex justify-between">
            <span>1x Unstoppable Energy</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between">
            <span>1x Iconic Sense of Humor</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between">
            <span>365x Days of Pure Magic</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between font-bold text-xs pt-1.5 border-t border-dashed border-stone-300 text-stone-950">
            <span>TOTAL PRICE:</span>
            <span>PRICELESS 💖</span>
          </div>

          {/* Heartfelt note block */}
          <div className="bg-pink-50/80 p-2.5 rounded-lg border border-pink-200 mt-2 text-[10px] text-stone-800 leading-snug">
            <span className="font-bold text-pink-700 block mb-0.5">SPECIAL NOTE:</span>
            &ldquo;{data.message}&rdquo;
          </div>
        </div>

        {/* Bottom Barcode */}
        <div className="border-t-2 border-dashed border-stone-300 pt-2 text-center space-y-1">
          <div className="font-mono tracking-widest text-[9px] font-bold text-stone-900 flex justify-center gap-0.5">
            <span className="inline-block w-1.5 h-6 bg-stone-900" />
            <span className="inline-block w-0.5 h-6 bg-stone-900" />
            <span className="inline-block w-1 h-6 bg-stone-900" />
            <span className="inline-block w-2 h-6 bg-stone-900" />
            <span className="inline-block w-0.5 h-6 bg-stone-900" />
            <span className="inline-block w-1 h-6 bg-stone-900" />
            <span className="inline-block w-1.5 h-6 bg-stone-900" />
            <span className="inline-block w-0.5 h-6 bg-stone-900" />
            <span className="inline-block w-2 h-6 bg-stone-900" />
            <span className="inline-block w-1 h-6 bg-stone-900" />
          </div>
          <span className="text-[9px] text-stone-400 block">
            THANK YOU FOR BEING AWESOME • LOVE, {data.senderName?.toUpperCase() || "JULIAN"}
          </span>
        </div>
      </div>
    </div>
  );
}
