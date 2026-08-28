"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Pin, Camera, Star, Gift, PartyPopper } from "lucide-react";
import { BirthdayWishData } from "../types";
import { playCelebrationSound } from "../SoundEffects";

interface WebpageProps {
  data: BirthdayWishData;
  onCelebration?: () => void;
}

export function ScrapbookPolaroidPage({ data, onCelebration }: WebpageProps) {
  const [stamps, setStamps] = useState<string[]>(["🎂", "✨", "💖", "🎈"]);

  const handlePop = () => {
    playCelebrationSound(data.audioTheme === "none" ? "none" : "chimes-melody");
    if (onCelebration) onCelebration();
  };

  const addStamp = (emoji: string) => {
    setStamps((prev) => [...prev, emoji]);
    handlePop();
  };

  return (
    <div className="w-full min-h-screen bg-[#f7f2e8] text-stone-800 font-sans selection:bg-amber-200 p-4 sm:p-8">
      {/* Decorative Washi Tape Bar at Top */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="h-4 w-48 mx-auto bg-amber-300/60 rotate-[-2deg] rounded-xs shadow-xs border-y border-amber-400/40" />
      </div>

      <div className="max-w-4xl mx-auto bg-[#fdfbf6] rounded-3xl p-6 sm:p-12 shadow-[0_20px_50px_rgba(100,70,30,0.1)] border-2 border-[#e6dbc8] relative overflow-hidden">
        {/* Corkboard / Paper texture touches */}
        <div className="absolute top-4 right-6 text-2xl rotate-12">📌</div>
        <div className="absolute top-4 left-6 text-2xl -rotate-12">📎</div>

        {/* Header Ribbon */}
        <div className="text-center space-y-3 mb-8">
          <div className="inline-block px-4 py-1 rounded-full bg-[#f0e4d0] border border-[#d8c5a8] text-[#785934] text-xs font-serif tracking-widest uppercase">
            {data.relationshipTag || "A Handcrafted Keepsake"}
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#3c2a18] tracking-tight">
            Happy Birthday, {data.recipientName}! 🎂
          </h1>

          <p className="text-sm sm:text-base font-serif italic text-stone-600">
            {data.date || "Today's Celebration"} • Milestone Edition: {data.milestone} Years Young!
          </p>
        </div>

        {/* Polaroid Memory Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
          {/* Polaroid 1 */}
          <motion.div
            whileHover={{ scale: 1.04, rotate: -2 }}
            className="bg-white p-3 pb-8 rounded-md shadow-md border border-stone-200 rotate-[-3deg] flex flex-col items-center text-center space-y-2 relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-rose-200/80 rounded-xs shadow-xs" />
            <div className="w-full aspect-square bg-gradient-to-br from-amber-100 to-rose-100 rounded-sm flex items-center justify-center text-5xl">
              🌟
            </div>
            <span className="font-[family-name:var(--font-handwriting)] text-stone-800 pt-2 text-lg font-bold">
              Pure Golden Energy ✨
            </span>
          </motion.div>

          {/* Polaroid 2 */}
          <motion.div
            whileHover={{ scale: 1.04, rotate: 1 }}
            className="bg-white p-3 pb-8 rounded-md shadow-md border border-stone-200 rotate-[2deg] flex flex-col items-center text-center space-y-2 relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-amber-200/80 rounded-xs shadow-xs" />
            <div className="w-full aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-sm flex items-center justify-center text-5xl">
              🎉
            </div>
            <span className="font-[family-name:var(--font-handwriting)] text-stone-800 pt-2 text-lg font-bold">
              Level {data.milestone || "25"} & Thriving!
            </span>
          </motion.div>

          {/* Polaroid 3 */}
          <motion.div
            whileHover={{ scale: 1.04, rotate: -1 }}
            className="bg-white p-3 pb-8 rounded-md shadow-md border border-stone-200 rotate-[-1deg] flex flex-col items-center text-center space-y-2 relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-emerald-200/80 rounded-xs shadow-xs" />
            <div className="w-full aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 rounded-sm flex items-center justify-center text-5xl">
              💖
            </div>
            <span className="font-[family-name:var(--font-handwriting)] text-stone-800 pt-2 text-lg font-bold">
              Favorite Human Award 🏆
            </span>
          </motion.div>
        </div>

        {/* Lined Stationery Note for Custom Wish */}
        <div className="bg-[#fffef7] rounded-2xl p-6 sm:p-8 border-2 border-dashed border-[#dfd2be] shadow-xs my-6 relative">
          <div className="absolute -top-3 right-8 w-20 h-5 bg-amber-200/90 rotate-[4deg] rounded-xs shadow-xs" />
          
          <h2 className="text-xs font-sans uppercase tracking-[0.25em] text-amber-900 font-bold mb-3">
            A NOTE FOR YOU // FROM {data.senderName?.toUpperCase() || "JULIAN"}
          </h2>

          <p className="text-xl sm:text-2xl font-[family-name:var(--font-handwriting)] text-stone-800 leading-relaxed font-bold">
            &ldquo;{data.message}&rdquo;
          </p>

          {/* Highlights Checklist */}
          {data.highlights && data.highlights.length > 0 && (
            <div className="mt-6 pt-4 border-t border-[#eedfc9] space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-sans block">
                Reasons why you are celebrated today:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {data.highlights.map((h: string, idx: number) => (
                  <div
                    key={idx}
                    className="bg-[#fcf7ec] p-2.5 rounded-xl border border-[#e8d8be] text-xs text-stone-700 font-sans flex items-center gap-1.5"
                  >
                    <span>✨</span>
                    <span className="font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Interactive Sticker Board */}
        <div className="mt-6 p-4 rounded-2xl bg-[#f7efe1] border border-[#e4d3ba] flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold font-serif text-stone-800 uppercase tracking-wider block">
              Leave a Celebration Stamp
            </span>
            <span className="text-[11px] text-stone-500 font-sans">
              Tap any sticker to add more celebration sparkles to this scrapbook!
            </span>
          </div>

          <div className="flex gap-2">
            {["🎂", "🥳", "✨", "🎁", "🥂"].map((emoji) => (
              <button
                key={emoji}
                onClick={() => addStamp(emoji)}
                className="w-9 h-9 rounded-xl bg-white hover:bg-amber-50 border border-stone-300 text-lg flex items-center justify-center shadow-xs hover:scale-110 active:scale-95 transition-all cursor-pointer"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Display Stamps */}
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {stamps.map((st, idx) => (
            <span key={idx} className="text-xl animate-bounce">
              {st}
            </span>
          ))}
        </div>

        {/* Footer Signature */}
        <div className="mt-8 pt-6 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500 font-serif">
          <span>Keepsake Scrapbook Edition</span>
          <span className="font-bold text-stone-800 text-sm">
            Love, {data.senderName || "Your Friend"}
          </span>
        </div>
      </div>
    </div>
  );
}
