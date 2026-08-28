"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, Mail, Heart, RotateCcw, ArrowRight, Calendar, MapPin } from "lucide-react";
import { useWeddingAudio } from "./WeddingAudio";

interface EnvelopeOpenerProps {
  children: React.ReactNode;
}

export function EnvelopeOpener({ children }: EnvelopeOpenerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [animationStage, setAnimationStage] = useState<"closed" | "unfolding" | "extracting" | "expanding">("closed");
  const { playMusic } = useWeddingAudio();

  const handleOpenEnvelope = () => {
    if (isOpen || animationStage !== "closed") return;

    // Start background wedding music immediately on interaction
    playMusic();

    // Stage 1: Unfolding Flap & Wax Seal Sparkles
    setAnimationStage("unfolding");

    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.55 },
      colors: ["#D4AF37", "#F3E5AB", "#2C3E35", "#FFFFFF", "#E8D8B0"],
      ticks: 240,
      gravity: 0.7,
      scalar: 1.1,
    });

    // Stage 2: Slide letter card UP out of the envelope cavity (after flap finishes unfolding)
    setTimeout(() => {
      setAnimationStage("extracting");
    }, 1200);

    // Stage 3: Scale letter card into full screen viewport (gives time to appreciate extracted card)
    setTimeout(() => {
      setAnimationStage("expanding");
    }, 2800);

    // Final Stage: Smoothly dissolve into page content
    setTimeout(() => {
      setIsOpen(true);
      setAnimationStage("closed");
    }, 4200);
  };

  const handleReplay = () => {
    setIsOpen(false);
    setAnimationStage("closed");
  };

  const isOpening = animationStage !== "closed";

  return (
    <div className="relative min-h-screen font-sans">
      {/* Replay Envelope Floating Button (Visible when page is open) */}
      <AnimatePresence>
        {isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={handleReplay}
            className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-full bg-[#2C3E35] text-[#D4AF37] border border-[#D4AF37]/50 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-[#D4AF37] hover:text-[#2C3E35] transition-all duration-300 group flex items-center gap-2 text-xs font-semibold uppercase tracking-wider cursor-pointer backdrop-blur-md"
            title="Replay Envelope Opening Animation"
          >
            <RotateCcw className="w-4 h-4 text-[#D4AF37] group-hover:text-[#2C3E35] transition-colors" />
            <span className="hidden sm:inline">Replay Envelope</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Wedding Invitation Content */}
      <div className={!isOpen ? "h-screen overflow-hidden pointer-events-none" : ""}>
        {children}
      </div>

      {/* Full-Screen Interactive Sealed Envelope Overlay */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="envelope-modal"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.0, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-[#1E2B25] via-[#2C3E35] to-[#141F1A] overflow-hidden select-none"
            style={{ perspective: "1400px" }}
          >
            {/* Ambient Gold Glow & Floating Bokeh */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-gradient-to-r from-[#D4AF37]/25 to-[#F3E5AB]/10 rounded-full blur-[120px] animate-pulse" />
              <div className="absolute top-10 left-10 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl" />
              <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#D4AF37]/15 rounded-full blur-3xl" />
            </div>

            {/* Main Envelope Outer Container */}
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={
                animationStage === "expanding"
                  ? { scale: 1.8, opacity: 0, transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] } }
                  : { scale: 1, y: 0, opacity: 1 }
              }
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              onClick={handleOpenEnvelope}
              className="relative w-full max-w-xl aspect-[4/3] sm:aspect-[16/11] rounded-3xl p-6 sm:p-9 flex flex-col justify-between items-center shadow-[0_30px_90px_rgba(0,0,0,0.6)] cursor-pointer group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* ------------------ LAYER 1: ENVELOPE BACK BODY & INNER LINING ------------------ */}
              <div className="absolute inset-0 rounded-3xl bg-[#EFE7D8] border-2 border-[#D4AF37]/60 overflow-hidden shadow-inner z-0">
                {/* Traditional Gold Lotus / Geometric Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#2C3E35]/15 to-transparent" />
              </div>

              {/* ------------------ LAYER 2: INNER LETTER CARD (STARTS TUCKED INSIDE) ------------------ */}
              <motion.div
                initial={{ y: 25, scale: 0.92, opacity: 1 }}
                animate={
                  animationStage === "closed"
                    ? { y: 25, scale: 0.92, opacity: 1 }
                    : animationStage === "unfolding"
                    ? { y: 15, scale: 0.94, opacity: 1 }
                    : animationStage === "extracting"
                    ? { y: -160, scale: 1.02, opacity: 1 }
                    : { y: -240, scale: 2.4, opacity: 1 }
                }
                transition={{
                  duration: animationStage === "expanding" ? 1.3 : 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`absolute inset-x-8 top-10 bottom-10 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE4] rounded-2xl p-6 sm:p-8 border-2 border-[#D4AF37] shadow-[0_15px_35px_rgba(0,0,0,0.25)] flex flex-col justify-between items-center text-center overflow-hidden ${
                  animationStage === "expanding" ? "z-50" : "z-10"
                }`}
              >
                {/* Gold Foil Frame Trim */}
                <div className="absolute inset-2 border border-[#D4AF37]/40 rounded-xl pointer-events-none" />

                {/* Letter Header */}
                <div className="relative z-10 space-y-1 mt-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] block">
                    You Are Cordially Invited
                  </span>
                  <div className="w-12 h-[1px] bg-[#D4AF37]/60 mx-auto" />
                </div>

                {/* Main Calligraphy Title */}
                <div className="relative z-10 space-y-2">
                  <h3
                    className="text-3xl sm:text-4xl text-[#2C3E35] font-serif tracking-wide"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    Senuri &amp; Kaveen
                  </h3>
                  <p className="text-xs text-[#2C3E35]/70 italic tracking-widest font-serif">
                    Request the honour of your presence at their Poruwa Ceremony &amp; Wedding
                  </p>
                </div>

                {/* Key Wedding Quick Info */}
                <div className="relative z-10 flex items-center justify-center gap-4 sm:gap-6 text-xs text-[#2C3E35]/80 font-medium py-2 border-y border-[#D4AF37]/30 w-full max-w-xs">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>DEC 18, 2026</span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Colombo, Sri Lanka</span>
                  </div>
                </div>

                {/* Footer Monogram */}
                <div className="relative z-10 flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  <span>The Sacred Celebration of Love</span>
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                </div>
              </motion.div>

              {/* ------------------ LAYER 3: FRONT ENVELOPE POCKET ------------------ */}
              <div
                className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2] to-[#F3ECE0] rounded-b-3xl border-x-2 border-b-2 border-[#D4AF37]/60 shadow-lg pointer-events-none z-20 [clip-path:polygon(0_30%,50%_0%,100%_30%,100%_100%,0_100%)]"
              >
                {/* Subtle Silk Ribbon Accent along bottom */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-16 bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/25 to-[#D4AF37]/10 border-x border-[#D4AF37]/20" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/50 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/50 rounded-br-lg" />
              </div>

              {/* ------------------ LAYER 4: ENVELOPE TOP FLAP (3D ROTATES BACKWARD) ------------------ */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={isOpening ? { rotateX: -180, zIndex: 5 } : { rotateX: 0, zIndex: 30 }}
                transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
                style={{ transformOrigin: "top", transformStyle: "preserve-3d" }}
                className="absolute inset-x-0 top-0 h-[56%] bg-gradient-to-b from-[#FAF7F2] via-[#F3ECE0] to-[#E5D7BF] rounded-t-3xl border-x-2 border-t-2 border-[#D4AF37]/60 shadow-md [clip-path:polygon(0_0,100%_0,50%_100%)] group-hover:brightness-105 transition-all"
              >
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/50 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/50 rounded-tr-lg" />
              </motion.div>

              {/* Envelope Top Header Bar & Sri Lankan Stamp */}
              <div className="relative z-35 flex items-center justify-between w-full pointer-events-none mt-1">
                <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-widest text-[#2C3E35]/80 bg-[#FAF7F2]/90 px-3 py-1 rounded-full border border-[#D4AF37]/30 backdrop-blur-xs shadow-xs">
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Sri Lankan Royal Wedding Suite</span>
                </div>

                {/* Vintage Ceylon / Sri Lanka Postage Stamp */}
                <div className="w-13 h-17 bg-white border-2 border-dashed border-[#D4AF37] rounded-sm shadow-md p-1.5 flex flex-col items-center justify-between text-center transform rotate-2">
                  <span className="text-[6.5px] font-mono uppercase text-[#2C3E35]/70 font-bold">SRI LANKA</span>
                  <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]/30" />
                  <span className="text-[6px] font-serif uppercase text-[#D4AF37] font-bold">Rs. 50</span>
                </div>
              </div>

              {/* ------------------ LAYER 5: 3D WAX SEAL (S & K MONOGRAM) ------------------ */}
              <div className="relative z-40 my-auto flex flex-col items-center pointer-events-auto">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.92 }}
                  animate={
                    isOpening
                      ? { scale: [1, 1.4, 0], opacity: [1, 1, 0], rotate: 45 }
                      : { scale: 1 }
                  }
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#F5D887] via-[#D4AF37] to-[#8C6F12] p-1 shadow-[0_12px_35px_rgba(212,175,55,0.6),inset_0_3px_6px_rgba(255,255,255,0.9)] flex items-center justify-center cursor-pointer group/seal"
                >
                  {/* Wax Outer Relief Ring */}
                  <div className="w-full h-full rounded-full border-2 border-[#FFF8E7]/80 flex flex-col items-center justify-center bg-gradient-to-br from-[#997A15] via-[#66500D] to-[#3D3008] text-amber-50 shadow-inner group-hover/seal:brightness-110 transition-all">
                    <Sparkles className="w-4 h-4 text-[#FFF3D1] animate-pulse mb-0.5" />
                    <span
                      className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FFF3D1] drop-shadow-sm"
                      style={{ fontFamily: "var(--font-cormorant), serif" }}
                    >
                      S &amp; K
                    </span>
                  </div>
                </motion.div>

                {/* Callout Prompt Below Seal */}
                <motion.div
                  animate={isOpening ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
                  className="mt-4 text-center space-y-1 bg-[#FAF7F2]/95 backdrop-blur-md px-5 py-2 rounded-full border border-[#D4AF37]/40 shadow-sm"
                >
                  <p
                    className="text-xl sm:text-2xl font-serif text-[#2C3E35]"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    Senuri &amp; Kaveen
                  </p>
                  <p className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-1">
                    <span>Tap Wax Seal To Open</span>
                    <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  </p>
                </motion.div>
              </div>

              {/* Bottom Decorative Label */}
              <div className="relative z-25 flex items-center gap-2 text-xs text-[#2C3E35]/80 font-semibold tracking-wider uppercase group-hover:translate-x-1 transition-transform pointer-events-none mb-1">
                <span>Unfold Royal Invitation</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
