"use client";

import { motion } from "framer-motion";
import { Sparkles, Wine, Music, Gift } from "lucide-react";

export function MilestoneNote() {
  return (
    <section id="toast" className="relative py-20 sm:py-28 px-6 max-w-6xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-14 sm:mb-18">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-[#FF758F] to-[#FBBF24] bg-clip-text text-transparent block">
          A Milestone Reflection
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
          A Toast To Twenty-Five
        </h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-[#FF3366] to-[#F59E0B] mx-auto mt-3 shadow-[0_0_10px_rgba(255,51,102,0.8)]" />
      </div>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Single Stunning Portrait with Luxury Dark Glow Bezel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl p-3 bg-gradient-to-b from-white/10 to-white/5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] border border-white/15 group backdrop-blur-md">
            {/* Subtle Inner Glow Bezel */}
            <div className="absolute inset-2 border border-[#FF3366]/30 rounded-2xl pointer-events-none z-10" />

            <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-inner bg-[#1A1622]">
              <img
                src="/birthday-sophia.jpg"
                alt="Sophia celebrating her 25th birthday"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 select-none"
              />

              {/* Floating Caption Badge in Dark Glass */}
              <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#0E0C12]/80 backdrop-blur-xl border border-white/15 text-white text-left shadow-lg">
                <p className="font-serif italic text-sm text-[#FFB3C6]">
                  &ldquo;Here&apos;s to new chapters, cherished friends, and unforgettable nights.&rdquo;
                </p>
                <span className="text-[10px] uppercase tracking-widest text-white/70 font-mono mt-0.5 block">
                  Sophia Sinclair &bull; 25
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Thoughtful Note, Party Vibes & Details in Dark Glass */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          <div className="space-y-4 font-light text-base sm:text-lg text-white/80 leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-normal first-letter:text-[#FF758F] first-letter:mr-2 first-letter:float-left">
              Twenty-five feels like a meaningful turning of the page. Looking back, the brightest moments have always been the ones spent laughing around candlelit tables, dancing without care, and making memories with the people who make life truly vibrant.
            </p>
            <p>
              I can think of no better way to celebrate this milestone than gathering everyone I love in one room for an unforgettable evening under the city lights. Come dressed to celebrate, bring your best stories, and get ready for a night of extraordinary cocktails, dinner, and late-night dancing.
            </p>
          </div>

          {/* Party Vibe Cards in Frosted Dark Glass */}
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 shadow-xs space-y-1.5 backdrop-blur-md hover:border-[#FF3366]/40 transition-colors">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF758F]">
                <Wine className="w-4 h-4 text-[#FF3366]" />
                <span>Signature Cocktails</span>
              </div>
              <p className="text-xs sm:text-sm text-white/75 font-light">
                French 75, Spicy Mezcalita &amp; Espresso Martinis on pour all night.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 shadow-xs space-y-1.5 backdrop-blur-md hover:border-[#F59E0B]/40 transition-colors">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FBBF24]">
                <Sparkles className="w-4 h-4 text-[#F59E0B]" />
                <span>Dress Code</span>
              </div>
              <p className="text-xs sm:text-sm text-white/75 font-light">
                Cocktail Chic with touches of sunset rose, champagne, or gold.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 shadow-xs space-y-1.5 backdrop-blur-md hover:border-[#A855F7]/40 transition-colors">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C084FC]">
                <Music className="w-4 h-4 text-[#A855F7]" />
                <span>Soundtrack</span>
              </div>
              <p className="text-xs sm:text-sm text-white/75 font-light">
                Acoustic sunset jazz transitioning into disco &amp; deep house.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 shadow-xs space-y-1.5 backdrop-blur-md hover:border-[#06B6D4]/40 transition-colors">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#67E8F9]">
                <Gift className="w-4 h-4 text-[#06B6D4]" />
                <span>Gifts Note</span>
              </div>
              <p className="text-xs sm:text-sm text-white/75 font-light">
                Your presence and sharing this night are the only gift requested!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
