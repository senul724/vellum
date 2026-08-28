"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, PartyPopper, Cake, Heart, Flame, Volume2, Wind } from "lucide-react";
import { BirthdayWishData } from "../types";
import { playCandleBlowSound, playCelebrationSound } from "../SoundEffects";

interface WebpageProps {
  data: BirthdayWishData;
  onCelebration?: () => void;
}

export function PartyPopBashPage({ data, onCelebration }: WebpageProps) {
  const [candlesBlown, setCandlesBlown] = useState(false);

  const handleBlowCandle = () => {
    if (candlesBlown) return;
    setCandlesBlown(true);
    playCandleBlowSound();
    if (onCelebration) onCelebration();
  };

  const handlePop = () => {
    playCelebrationSound(data.audioTheme === "none" ? "none" : "celebration-fanfare");
    if (onCelebration) onCelebration();
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#fff7ed] via-[#fff1f2] to-[#fef3c7] text-stone-900 font-sans p-4 sm:p-8">
      {/* Top Celebratory Marquee Banner */}
      <div className="max-w-4xl mx-auto mb-6 bg-gradient-to-r from-rose-500 via-amber-500 to-pink-500 text-white rounded-2xl py-2 px-4 shadow-md flex items-center justify-between text-xs sm:text-sm font-bold uppercase tracking-widest">
        <span>🎉 OFFICIAL BIRTHDAY DISPATCH</span>
        <span className="hidden sm:inline">🌟 IT&apos;S TIME TO CELEBRATE 🌟</span>
        <span>LEVEL {data.milestone || "25"} UNLOCKED 🚀</span>
      </div>

      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-12 shadow-2xl border border-rose-200">
        {/* Main Hero Header */}
        <div className="text-center space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-300 text-rose-700 text-xs font-bold uppercase tracking-wider shadow-xs">
            <PartyPopper className="w-4 h-4 text-rose-500" />
            <span>{data.relationshipTag || "VIP Birthday Star"}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-rose-950 tracking-tight leading-none">
            HAPPY BIRTHDAY, <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-amber-500 bg-clip-text text-transparent">
              {data.recipientName || "SUPERSTAR"}!
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-stone-600 font-medium max-w-xl mx-auto">
            {data.headline || "Sending massive love, high fives, and endless celebratory cheer!"}
          </p>
        </div>

        {/* Interactive Center Stage: 3D Birthday Cake with Blowable Candles */}
        <div className="my-10 bg-gradient-to-b from-rose-50 to-amber-50 rounded-3xl p-6 sm:p-8 border border-rose-100 text-center flex flex-col items-center">
          <span className="text-xs font-bold font-mono uppercase tracking-widest text-rose-700 mb-2">
            INTERACTIVE BIRTHDAY RITUAL
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-4">
            Make a Wish & Blow Out the Candles! 🎂
          </h2>

          {/* Cake Display */}
          <div
            onClick={handleBlowCandle}
            className="cursor-pointer group select-none py-4 px-8 rounded-2xl bg-white shadow-lg border border-rose-100 hover:scale-105 transition-all"
            role="button"
            tabIndex={0}
          >
            {/* Candles Flame */}
            <div className="flex justify-center gap-4 h-12 items-end mb-1">
              {[1, 2, 3].map((c) => (
                <div key={c} className="flex flex-col items-center">
                  <AnimatePresence mode="wait">
                    {!candlesBlown ? (
                      <motion.div
                        key="flame"
                        animate={{
                          scale: [1, 1.2, 0.9, 1.1],
                          rotate: [-3, 3, -2, 2],
                        }}
                        transition={{ repeat: Infinity, duration: 0.7 + c * 0.1 }}
                        className="w-4 h-6 rounded-full bg-gradient-to-t from-amber-500 via-orange-400 to-yellow-200 shadow-[0_0_15px_#f59e0b]"
                      />
                    ) : (
                      <motion.div
                        key="smoke"
                        initial={{ opacity: 0.8, y: 0 }}
                        animate={{ opacity: 0, y: -20, scale: 1.5 }}
                        transition={{ duration: 1 }}
                        className="w-2.5 h-4 bg-stone-400 rounded-full blur-xs"
                      />
                    )}
                  </AnimatePresence>
                  <div className="w-0.5 h-2 bg-stone-700" />
                  <div className="w-3.5 h-7 rounded-t-sm bg-gradient-to-b from-pink-400 to-rose-500" />
                </div>
              ))}
            </div>

            {/* Cake Base */}
            <div className="w-44 h-12 bg-gradient-to-r from-amber-200 via-rose-200 to-amber-200 rounded-2xl border-2 border-rose-300 shadow-sm flex items-center justify-center font-bold text-xs text-rose-900 tracking-wider">
              {candlesBlown ? "✨ WISH SENT TO THE STARS! ✨" : "TAP TO BLOW CANDLES"}
            </div>
          </div>

          <div className="mt-4">
            {!candlesBlown ? (
              <span className="text-xs text-rose-600 font-semibold inline-flex items-center gap-1">
                <Wind className="w-3.5 h-3.5" /> Tap the cake to blow out candles and start the confetti party!
              </span>
            ) : (
              <span className="text-xs text-emerald-700 font-bold inline-flex items-center gap-1 bg-emerald-100 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Wish granted! May this year be your happiest chapter yet!
              </span>
            )}
          </div>
        </div>

        {/* The Birthday Wish Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4 my-8">
          <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-widest">
            <Cake className="w-4 h-4" />
            <span>A SPECIAL MESSAGE FROM {data.senderName?.toUpperCase() || "YOUR FRIEND"}</span>
          </div>

          <p className="text-base sm:text-xl font-serif text-stone-800 leading-relaxed font-normal">
            &ldquo;{data.message}&rdquo;
          </p>

          {/* Highlights / 3 Reasons Why */}
          {data.highlights && data.highlights.length > 0 && (
            <div className="pt-4 border-t border-stone-100 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Top Reasons Why You&apos;re Awesome:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {data.highlights.map((hl: string, idx: number) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-100 text-xs font-medium text-rose-950 flex items-start gap-2"
                  >
                    <span className="text-base">🎉</span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Button & Sign-off */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200">
          <div>
            <span className="text-xs text-stone-500 uppercase tracking-widest block">Celebration Inscribed By</span>
            <span className="font-bold font-serif text-xl text-rose-950">
              {data.senderName || "Julian"}
            </span>
          </div>

          <button
            onClick={handlePop}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 cursor-pointer transition-all active:scale-95"
          >
            <PartyPopper className="w-4 h-4" />
            <span>Launch Confetti Blast! 🎊</span>
          </button>
        </div>
      </div>
    </div>
  );
}
