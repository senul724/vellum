"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Mail, RotateCw, RotateCcw, ArrowRight, Check } from "lucide-react";
import { BirthdayCardSuite, ENVELOPE_COLORS } from "./types";
import { PaperlessPostCard } from "./PaperlessPostCard";
import { playWaxSealBreakSound, playCelebrationSound } from "./SoundEffects";

interface EnvelopeSuiteProps {
  data: BirthdayCardSuite;
  onOpenStateChange?: (isOpen: boolean) => void;
  triggerConfetti?: () => void;
  showInsideEnvelope?: boolean;
}

export function EnvelopeSuite({ data, onOpenStateChange, triggerConfetti, showInsideEnvelope = true }: EnvelopeSuiteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const envColor = ENVELOPE_COLORS[data.envelopeColor] || ENVELOPE_COLORS["alabaster"];

  const handleOpen = () => {
    if (isOpen || isOpening) return;
    setIsOpening(true);
    playWaxSealBreakSound();

    setTimeout(() => {
      setIsOpen(true);
      setIsOpening(false);
      if (data.soundEnabled) {
        playCelebrationSound("chimes-melody");
      }
      if (triggerConfetti) triggerConfetti();
      if (onOpenStateChange) onOpenStateChange(true);
    }, 550);
  };

  const handleReset = () => {
    setIsOpen(false);
    setIsOpening(false);
    setIsFlipped(false);
    if (onOpenStateChange) onOpenStateChange(false);
  };

  // Patterned Liner Background Generator
  const getLinerBackground = () => {
    switch (data.envelopeLiner) {
      case "hydrangea-watercolor":
        return "bg-[#e0e7ff] bg-[radial-gradient(#818cf8_1.5px,transparent_1.5px)] [background-size:16px_16px]";
      case "botanical-chintz":
        return "bg-[#ecfdf5] bg-[radial-gradient(#34d399_1.5px,transparent_1.5px)] [background-size:16px_16px]";
      case "gold-confetti":
        return "bg-[#fefce8] bg-[radial-gradient(#facc15_2px,transparent_2px)] [background-size:20px_20px]";
      case "vintage-stripe":
        return "bg-[#fffbeb] bg-[repeating-linear-gradient(45deg,#fef3c7,#fef3c7_10px,#fffbeb_10px,#fffbeb_20px)]";
      case "solid-cream":
      default:
        return "bg-[#fcf8f0]";
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-[640px] p-2 sm:p-6">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* ================= SEALED ENVELOPE (Unopened) ================= */
          <motion.div
            key="sealed"
            initial={{ scale: 0.94, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.04, opacity: 0, y: -15, transition: { duration: 0.35 } }}
            className={`relative w-full max-w-[460px] aspect-[4/3] rounded-3xl ${envColor.bgClass} p-6 sm:p-8 flex flex-col justify-between items-center shadow-2xl border-2 ${envColor.borderClass} overflow-hidden cursor-pointer group select-none`}
            onClick={handleOpen}
            role="button"
            tabIndex={0}
            aria-label="Click to break wax seal and open card"
          >
            {/* Triangular Flap */}
            <div
              className={`absolute inset-x-0 top-0 h-1/2 ${envColor.bgClass} origin-top border-b-2 ${envColor.borderClass} shadow-xs [clip-path:polygon(0_0,100%_0,50%_100%)] transition-transform duration-500 group-hover:scale-y-105`}
            />

            {/* Top Postage Stamp and Delivery Bar */}
            <div className="relative z-10 flex items-center justify-between w-full">
              <div className="flex items-center gap-1.5 text-xs font-serif uppercase tracking-widest text-stone-600">
                <Mail className="w-3.5 h-3.5" />
                <span>Special Invitation</span>
              </div>

              {/* Vintage Postage Stamp (Paperless Post Style) */}
              <div className="w-11 h-14 bg-white border-2 border-dashed border-stone-300 rounded-sm shadow-xs p-1 flex flex-col items-center justify-between text-center">
                <span className="text-[7px] font-mono uppercase text-stone-400">USA 50¢</span>
                <span className="text-sm">🌸</span>
                <span className="text-[6px] font-serif uppercase text-stone-500">B-DAY</span>
              </div>
            </div>

            {/* Center Golden Wax Monogram Seal */}
            <div className="relative z-20 my-auto flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={isOpening ? { scale: [1, 1.25, 0], opacity: [1, 1, 0] } : {}}
                transition={{ duration: 0.45 }}
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 p-1 shadow-[0_8px_30px_rgba(217,119,6,0.4),inset_0_2px_4px_rgba(255,255,255,0.8)] flex items-center justify-center"
              >
                <div className="w-full h-full rounded-full border border-amber-200/60 flex flex-col items-center justify-center bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 text-amber-50 shadow-inner">
                  <Sparkles className="w-5 h-5 text-amber-300 animate-pulse mb-0.5" />
                  <span className="text-[10px] font-serif font-bold tracking-widest uppercase text-amber-100">
                    OPEN
                  </span>
                </div>
              </motion.div>

              <div className="mt-3 text-center space-y-0.5">
                <p className="text-base sm:text-lg font-serif font-bold text-stone-900">
                  {data.recipientName || "Sophia Alexander"}
                </p>
                <p className="text-xs text-stone-600 font-sans">
                  From {data.senderName || "Julian Vance"} • Tap wax seal to open ✨
                </p>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="relative z-10 flex items-center gap-1.5 text-xs text-stone-700 font-semibold tracking-wider uppercase group-hover:translate-x-1 transition-transform">
              <span>View Invitation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        ) : (
          /* ================= OPENED CARD & ENVELOPE LINER VIEW ================= */
          <motion.div
            key="opened"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="flex flex-col items-center w-full max-w-lg"
          >
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between mb-4 px-2">
              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 transition-all shadow-xs cursor-pointer"
              >
                <RotateCw className="w-3.5 h-3.5 text-amber-600" />
                <span>{isFlipped ? "View Front Artwork" : "Flip to Back Note"}</span>
              </button>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-white hover:bg-stone-50 text-stone-700 border border-stone-300 transition-all shadow-xs cursor-pointer"
                title="Put card back into envelope"
              >
                <RotateCcw className="w-3.5 h-3.5 text-stone-500" />
                <span>Replay Envelope</span>
              </button>
            </div>

            {/* Card sitting in front of the open envelope liner (Paperless Post Signature Look) */}
            <div className="relative w-full flex justify-center items-center">
              {showInsideEnvelope && (
                <div
                  className={`absolute -top-10 w-[94%] max-w-[440px] h-[520px] rounded-t-3xl ${envColor.bgClass} border-2 ${envColor.borderClass} p-3 shadow-md -z-10`}
                >
                  {/* Patterned Envelope Liner Inset */}
                  <div
                    className={`w-full h-44 rounded-t-2xl border border-stone-300/40 ${getLinerBackground()} flex items-center justify-center opacity-80`}
                  />
                </div>
              )}

              {/* The Interactive Digital Card */}
              <PaperlessPostCard
                data={data}
                isFlipped={isFlipped}
                onFlipToggle={() => setIsFlipped(!isFlipped)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
