"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flower2, Leaf, Heart, Feather, Sun, Sparkles, Award } from "lucide-react";
import { BirthdayWishData } from "../types";
import { playCelebrationSound } from "../SoundEffects";

interface WebpageProps {
  data: BirthdayWishData;
  onCelebration?: () => void;
}

export function BotanicalLetterPage({ data, onCelebration }: WebpageProps) {
  const handlePop = () => {
    playCelebrationSound(data.audioTheme === "none" ? "none" : "acoustic-harp");
    if (onCelebration) onCelebration();
  };

  return (
    <div className="w-full min-h-screen bg-[#f5f7f2] text-stone-900 font-serif p-4 sm:p-10 selection:bg-emerald-200">
      {/* Centered Luxury Letter Container */}
      <div className="max-w-3xl mx-auto bg-[#fefdfa] rounded-3xl p-8 sm:p-14 shadow-2xl border border-emerald-900/15 relative overflow-hidden">
        {/* Pressed botanical foliage corner decor */}
        <div className="absolute top-4 left-6 text-3xl opacity-30 select-none pointer-events-none">🌿</div>
        <div className="absolute top-4 right-6 text-3xl opacity-30 select-none pointer-events-none">🍃</div>
        <div className="absolute bottom-4 left-6 text-3xl opacity-25 select-none pointer-events-none">🌱</div>
        <div className="absolute bottom-4 right-6 text-3xl opacity-30 select-none pointer-events-none">🪻</div>

        {/* Deckle Edge Inset Border */}
        <div className="absolute inset-4 rounded-2xl border border-emerald-800/15 pointer-events-none" />

        {/* Top Crest / Monogram Header */}
        <div className="text-center space-y-2 mb-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-800/10 border border-emerald-800/20 text-emerald-900 text-xs font-serif tracking-widest uppercase">
            <Leaf className="w-3.5 h-3.5 text-emerald-700" />
            <span>{data.relationshipTag || "AN EPISTLE OF CELEBRATION"}</span>
          </div>

          <p className="text-xs uppercase tracking-[0.25em] text-emerald-800/70 font-sans font-medium">
            In Commemoration of {data.milestone || "25"} Splendid Years
          </p>

          <h1 className="text-4xl sm:text-5xl font-serif italic text-emerald-950 font-normal tracking-tight pt-2">
            Dearest {data.recipientName || "Friend"},
          </h1>
        </div>

        {/* Botanical Divider */}
        <div className="flex items-center justify-center gap-3 my-6 text-emerald-800/40">
          <span className="h-px w-16 bg-emerald-800/20" />
          <Flower2 className="w-4 h-4 text-emerald-700" />
          <span className="h-px w-16 bg-emerald-800/20" />
        </div>

        {/* Main Body of the Long-Form Letter */}
        <div className="relative z-10 space-y-6 text-stone-800 text-base sm:text-lg leading-relaxed font-serif px-2 sm:px-6">
          <p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-emerald-950 first-letter:font-serif italic">
            {data.message}
          </p>

          {/* Highlights / Reasons for Radiance */}
          {data.highlights && data.highlights.length > 0 && (
            <div className="my-8 p-6 rounded-2xl bg-[#f5f8f3] border border-emerald-800/15 space-y-3">
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-emerald-900 block">
                Treasured Virtues & Highlights:
              </span>
              <ul className="space-y-2 text-sm text-stone-700 font-sans">
                {data.highlights.map((hl: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-emerald-700">✦</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="italic text-stone-700 text-base">
            May peace, deep flourishing, sweet laughter, and radiant happiness walk with you in all the days of your unfolding new season.
          </p>
        </div>

        {/* Date and Signature Area */}
        <div className="relative z-10 mt-10 pt-6 border-t border-emerald-800/20 flex flex-wrap items-end justify-between gap-4 px-2 sm:px-6">
          <div>
            <span className="text-[10px] font-sans tracking-widest uppercase text-emerald-900/60 block">
              INSCRIBED THIS AUSPICIOUS DAY
            </span>
            <span className="text-sm font-medium text-stone-800">{data.date || "Season of Bloom"}</span>
          </div>

          <div className="text-right">
            <span className="text-[10px] font-sans tracking-widest uppercase text-emerald-900/60 block">
              WITH BOUNDLESS AFFECTION,
            </span>
            <span className="text-2xl font-serif italic font-bold text-emerald-950 block">
              {data.senderName || "Julian"}
            </span>
          </div>
        </div>

        {/* Bottom Interactive Sound Trigger */}
        <div className="relative z-10 mt-8 text-center">
          <button
            onClick={handlePop}
            className="px-6 py-2.5 rounded-full bg-emerald-900 hover:bg-emerald-800 text-emerald-50 text-xs font-sans font-semibold tracking-wide transition-all shadow-md active:scale-95 cursor-pointer inline-flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Play Celestial Chimes & Shower Confetti</span>
          </button>
        </div>
      </div>
    </div>
  );
}
