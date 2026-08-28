"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Wind } from "lucide-react";
import { playCandleBlowSound } from "./SoundEffects";

interface VirtualCandleProps {
  onBlownOut?: () => void;
  candleCount?: number;
  primaryColor?: string;
}

export function VirtualCandle({ onBlownOut, candleCount = 1, primaryColor = "#f59e0b" }: VirtualCandleProps) {
  const [isBlown, setIsBlown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleBlow = () => {
    if (isBlown) return;
    setIsBlown(true);
    playCandleBlowSound();
    if (onBlownOut) onBlownOut();
  };

  const candleItems = Array.from({ length: Math.min(Math.max(candleCount, 1), 5) });

  return (
    <div className="flex flex-col items-center my-3">
      <div
        className="relative group cursor-pointer select-none py-2 px-4 rounded-xl transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5"
        onClick={handleBlow}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="button"
        tabIndex={0}
        aria-label="Blow out the birthday candles and make a wish"
      >
        {/* Row of candles */}
        <div className="flex items-end justify-center gap-3 h-16">
          {candleItems.map((_, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              {/* Flame or Smoke */}
              <div className="h-7 flex items-end justify-center mb-0.5">
                <AnimatePresence mode="wait">
                  {!isBlown ? (
                    <motion.div
                      key="flame"
                      initial={{ scale: 0.8, opacity: 0.8 }}
                      animate={{
                        scale: isHovered ? [1, 1.25, 0.95, 1.1] : [1, 1.08, 0.96, 1],
                        rotate: [-2, 2, -1, 3, -2],
                        opacity: 1,
                      }}
                      exit={{ scale: 0, opacity: 0, y: -8 }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.6 + idx * 0.1,
                        ease: "easeInOut",
                      }}
                      className="relative w-4 h-6 rounded-[50%_50%_40%_40%/70%_70%_30%_30%] bg-gradient-to-t from-amber-500 via-orange-400 to-yellow-200 shadow-[0_0_15px_#fbbf24,0_0_30px_#f59e0b]"
                    >
                      {/* Inner white glow */}
                      <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-2.5 bg-white/90 rounded-full blur-[0.5px]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="smoke"
                      initial={{ opacity: 0.8, y: 0, scale: 0.8 }}
                      animate={{ opacity: 0, y: -24, scale: 1.8 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="w-2.5 h-4 bg-slate-400/40 rounded-full blur-[2px]"
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Wick */}
              <div className="w-0.5 h-1.5 bg-stone-700 dark:bg-stone-400" />

              {/* Candle Body */}
              <div
                className="w-3.5 h-8 rounded-t-sm shadow-sm relative overflow-hidden"
                style={{
                  background: `linear-gradient(180deg, #fff 0%, ${primaryColor} 40%, #ffffff 100%)`,
                }}
              >
                {/* Diagonal subtle spiral stripes */}
                <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(45deg,transparent,transparent_3px,#000_3px,#000_6px)]" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt or Wish Confirmation */}
        <div className="mt-2 text-center">
          <AnimatePresence mode="wait">
            {!isBlown ? (
              <motion.span
                key="prompt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/20 animate-pulse"
              >
                <Wind className="w-3 h-3" /> Tap to blow candle & make a wish!
              </motion.span>
            ) : (
              <motion.span
                key="wish-made"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" /> Wish Made & Sent to the Stars! ✨
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
