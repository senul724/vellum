"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Crown, Award, Stars, Quote, PartyPopper } from "lucide-react";
import { BirthdayWishData } from "../types";
import { playCelebrationSound } from "../SoundEffects";

interface WebpageProps {
  data: BirthdayWishData;
  onCelebration?: () => void;
}

export function MagazineEditorialPage({ data, onCelebration }: WebpageProps) {
  const handlePop = () => {
    playCelebrationSound(data.audioTheme === "none" ? "none" : "chimes-melody");
    if (onCelebration) onCelebration();
  };

  return (
    <div className="w-full min-h-screen bg-[#faf7f2] text-stone-900 font-serif selection:bg-stone-900 selection:text-white">
      {/* Magazine Issue Masthead Bar */}
      <header className="border-b-2 border-stone-900 py-3 px-4 sm:px-8 flex flex-wrap items-center justify-between text-xs font-mono tracking-widest uppercase bg-[#f6f2e9]">
        <div>ISSUE NO. {data.milestone || "25"} // SPECIAL COMMEMORATIVE EDITION</div>
        <div className="font-serif italic font-bold text-sm tracking-normal text-stone-900">THE CELEBRATION GAZETTE</div>
        <div>PUBLISHED ON {data.date || "TODAY"}</div>
      </header>

      {/* Main Magazine Hero Cover Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 pt-10 pb-16">
        {/* Top Tagline */}
        <div className="text-center space-y-2 mb-6">
          <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.35em] font-sans font-semibold text-stone-500 border-b border-stone-300 pb-1">
            {data.relationshipTag || "AN EXCLUSIVE TRIBUTE"}
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter uppercase text-stone-950 leading-[0.85] py-2">
            {data.recipientName || "THE ICON"}
          </h1>
          <p className="text-sm sm:text-lg font-serif italic text-stone-600 max-w-2xl mx-auto pt-2">
            &ldquo;{data.headline || "A tribute to brilliance, unmatched grace, and a milestone chapter."}&rdquo;
          </p>
        </div>

        {/* Editorial Feature Grid: Split Spread */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-10 border-t-2 border-b-2 border-stone-900 py-8">
          {/* Left Column: Pull Quotes & Stat Badges (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6 border-b md:border-b-0 md:border-r border-stone-300 pb-6 md:pb-0 md:pr-8">
            {/* Stat Callout */}
            <div className="bg-[#f0ebe1] p-6 rounded-2xl border border-stone-300 space-y-3">
              <div className="flex items-center gap-2 text-stone-700 font-mono text-xs uppercase tracking-wider">
                <Crown className="w-4 h-4 text-amber-700" />
                <span>MILESTONE REPORT</span>
              </div>
              <div className="text-4xl sm:text-5xl font-black font-sans tracking-tight text-stone-950">
                LEVEL {data.milestone || "25"}
              </div>
              <p className="text-xs font-sans text-stone-600 leading-relaxed">
                Officially entering another triumphant year with 100% certified main-character energy and pure radiance.
              </p>
            </div>

            {/* Pull Quote */}
            <div className="space-y-2 italic font-serif">
              <Quote className="w-8 h-8 text-stone-400 opacity-60" />
              <p className="text-lg text-stone-800 leading-snug font-medium">
                &ldquo;Generous in laughter, brilliant in thought, and endlessly uplifting to everyone lucky enough to know them.&rdquo;
              </p>
              <span className="block text-xs font-sans font-semibold tracking-widest text-stone-500 uppercase not-italic">
                — Feature Dispatch
              </span>
            </div>

            {/* Highlights List */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900 block border-b border-stone-300 pb-1">
                TOP HONORS OF THE YEAR
              </span>
              <ul className="space-y-2 text-xs font-sans text-stone-700">
                {data.highlights?.map((hl: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-800 font-mono font-bold">0{idx + 1}.</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: The Main Wish Essay (7 cols) */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6 md:pl-2">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-stone-500 block mb-2">
                COVER STORY // LETTER OF CELEBRATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-4 leading-snug">
                Happy Birthday to an Absolute Wonder
              </h2>

              {/* Styled Letter Content with Drop Cap */}
              <div className="text-stone-800 text-base sm:text-lg leading-relaxed space-y-4 font-serif">
                <p className="first-letter:text-5xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:font-serif first-letter:text-stone-950">
                  {data.message}
                </p>
              </div>
            </div>

            {/* Signature & Author Block */}
            <div className="pt-6 border-t border-stone-300 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-stone-500 block">
                  INSCRIBED WITH LOVE BY
                </span>
                <span className="text-xl font-bold font-serif text-stone-950">
                  {data.senderName || "Julian"}
                </span>
              </div>

              <button
                onClick={handlePop}
                className="px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-sans font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <PartyPopper className="w-4 h-4 text-amber-300" />
                <span>Pop Champagne & Confetti</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Banner */}
        <div className="text-center py-6 border border-dashed border-stone-400 rounded-3xl bg-[#f4efe4] space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-600 block">
            THE BIRTHDAY GAZETTE ARCHIVE
          </span>
          <p className="font-serif italic text-sm text-stone-800">
            May this new milestone chapter bring extraordinary triumph, unforgettable travels, and boundless joy.
          </p>
        </div>
      </section>
    </div>
  );
}
