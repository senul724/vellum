"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, Calendar, MapPin, Wine, PartyPopper } from "lucide-react";
import { useBirthdayAudio } from "./BirthdayAudio";

interface EnvelopeOpenerProps {
  children: React.ReactNode;
}

export function EnvelopeOpener({ children }: EnvelopeOpenerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [animationStage, setAnimationStage] = useState<"closed" | "unfolding" | "extracting" | "expanding">("closed");
  const { playMusic } = useBirthdayAudio();

  const handleOpenEnvelope = () => {
    if (isOpen || animationStage !== "closed") return;

    // Start background birthday music immediately on user interaction
    playMusic();

    // Stage 1: Untying ribbon & balloon burst
    setAnimationStage("unfolding");

    // Burst 1: Vibrant party confetti explosion
    confetti({
      particleCount: 90,
      spread: 90,
      origin: { y: 0.6, x: 0.5 },
      colors: ["#FF3366", "#A855F7", "#F59E0B", "#06B6D4", "#FFFFFF"],
      ticks: 200,
      gravity: 0.7,
      scalar: 1.2,
    });

    // Stage 2: Slide letter card UP out of the celebration parcel
    setTimeout(() => {
      setAnimationStage("extracting");

      // Burst 2: High celebration confetti shower
      confetti({
        particleCount: 140,
        spread: 120,
        origin: { y: 0.45, x: 0.5 },
        colors: ["#FF3366", "#FFD700", "#FF69B4", "#7B68EE", "#00FFFF"],
        ticks: 280,
        gravity: 0.8,
        scalar: 1.3,
      });
    }, 1200);

    // Stage 3: Scale letter card into full screen viewport
    setTimeout(() => {
      setAnimationStage("expanding");
    }, 2800);

    // Final Stage: Dissolve into page content
    setTimeout(() => {
      setIsOpen(true);
      setAnimationStage("closed");
    }, 4200);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.0, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#09080C] px-4 overflow-hidden"
          >
            {/* Background Ambient Party Glows */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#FF3366]/20 via-[#A855F7]/15 to-[#F59E0B]/15 rounded-full blur-3xl" />
            </div>

            {/* Main Celebration Parcel Outer Container */}
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={
                animationStage === "expanding"
                  ? { scale: 1.8, opacity: 0, transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] } }
                  : { scale: 1, y: 0, opacity: 1 }
              }
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              onClick={handleOpenEnvelope}
              className="relative w-full max-w-xl aspect-[4/3] sm:aspect-[16/11] rounded-3xl p-6 sm:p-9 flex flex-col justify-between items-center shadow-[0_30px_90px_rgba(0,0,0,0.85)] cursor-pointer group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* LAYER 1: FESTIVE OBSIDIAN & ROSE LINING */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1E1926] via-[#16131C] to-[#0F0D13] border-2 border-white/15 overflow-hidden shadow-inner z-0">
                {/* Confetti Starburst Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#FF3366_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-25" />
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#FF3366]/15 to-transparent" />
              </div>

              {/* LAYER 2: INNER BIRTHDAY INVITATION CARD (SLIDES OUT) */}
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
                className={`absolute inset-x-8 top-10 bottom-10 bg-gradient-to-b from-[#1E1A27] via-[#16131D] to-[#120F17] rounded-2xl p-6 sm:p-8 border-2 border-[#FF3366]/50 shadow-[0_20px_45px_rgba(0,0,0,0.6)] flex flex-col justify-between items-center text-center overflow-hidden ${
                  animationStage === "expanding" ? "z-50" : "z-10"
                }`}
              >
                {/* Glowing Border Trim */}
                <div className="absolute inset-2 border border-white/10 rounded-xl pointer-events-none" />

                {/* Card Top Pill */}
                <div className="relative z-10 space-y-1 mt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FF3366]/20 border border-[#FF3366]/40 text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF8FA3]">
                    <span>🎈</span>
                    <span>25th Birthday Milestone</span>
                  </span>
                </div>

                {/* Card Center Copy */}
                <div className="relative z-10 space-y-2 my-auto">
                  <span className="text-xs font-serif italic text-white/60 block">
                    join us for champagne &amp; dancing under the city lights
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-serif tracking-tight text-white leading-tight">
                    Sophia Sinclair
                  </h2>
                  <div className="w-14 h-[1.5px] bg-gradient-to-r from-[#FF3366] to-[#F59E0B] mx-auto my-1" />
                  <p className="text-[11px] sm:text-xs font-serif tracking-widest uppercase bg-gradient-to-r from-[#FF758F] to-[#FBBF24] bg-clip-text text-transparent font-bold">
                    The 25th Milestone Soirée
                  </p>
                </div>

                {/* Card Bottom Details */}
                <div className="relative z-10 space-y-1 mb-2">
                  <div className="flex items-center justify-center gap-3 text-[10px] sm:text-[11px] font-mono tracking-wider text-white/70">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#FF758F]" />
                      OCT 24, 2026
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#FF758F]" />
                      THE GLASSHOUSE ROOFTOP
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* LAYER 3: ENVELOPE FRONT FLAP WITH ELECTRIC SUNSET RIBBON */}
              <div
                className="absolute inset-0 z-20 pointer-events-none rounded-3xl overflow-hidden shadow-md"
                style={{
                  clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0, 50% 50%)",
                  background: "linear-gradient(135deg, #1C1824 0%, #15121B 50%, #0E0C12 100%)",
                }}
              >
                <div className="absolute inset-0 border-2 border-white/10 rounded-3xl" />

                {/* Vertical Satin Ribbon in Sunset Coral/Gold */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-[#FF3366] via-[#F59E0B] to-[#FF3366] shadow-[0_0_15px_rgba(255,51,102,0.4)] border-x border-white/20" />

                {/* Horizontal Satin Ribbon in Sunset Coral/Gold */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-8 bg-gradient-to-b from-[#FF3366] via-[#F59E0B] to-[#FF3366] shadow-[0_0_15px_rgba(255,51,102,0.4)] border-y border-white/20" />
              </div>

              {/* LAYER 4: ENVELOPE TOP FOLD WITH 3D ROTATION */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={{
                  rotateX: animationStage === "closed" ? 0 : -180,
                  zIndex: animationStage === "closed" ? 30 : 5,
                }}
                transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
                style={{
                  transformOrigin: "top center",
                  transformStyle: "preserve-3d",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                }}
                className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#262031] to-[#1A1622] border-t-2 border-white/20 shadow-xl"
              >
                {/* Flap Ribbon */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-[#FF3366] via-[#F59E0B] to-[#FF3366] shadow-md" />
              </motion.div>

              {/* LAYER 5: INTERACTIVE BIRTHDAY MEDALLION / BOW SEAL */}
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                  scale: animationStage === "closed" ? 1 : [1, 1.25, 0],
                  opacity: animationStage === "closed" ? 1 : [1, 1, 0],
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.12, rotate: [0, -4, 4, 0] }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-gradient-to-tr from-[#FF3366] via-[#F59E0B] to-[#FF8FA3] p-1 shadow-[0_10px_35px_rgba(255,51,102,0.6)] flex items-center justify-center cursor-pointer"
                >
                  {/* Glowing Starburst Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/50 animate-spin-slow" />

                  {/* Medallion Face */}
                  <div className="w-full h-full rounded-full bg-[#16121D] border border-white/40 flex flex-col items-center justify-center text-white shadow-inner">
                    <span className="text-xl">🎈</span>
                    <span className="font-serif font-extrabold text-sm tracking-widest bg-gradient-to-r from-[#FF758F] to-[#FBBF24] bg-clip-text text-transparent drop-shadow-md">
                      25TH
                    </span>
                    <span className="text-[7px] font-sans uppercase tracking-[0.2em] text-white/80 font-bold">
                      UNWRAP
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Prompt Helper */}
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap z-50 pointer-events-none">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-widest uppercase shadow-xl"
                >
                  <PartyPopper className="w-3.5 h-3.5 text-[#FF758F] animate-bounce" />
                  <span>Tap Ribbon To Unwrap Invitation</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Content */}
      <div className={!isOpen ? "opacity-0 pointer-events-none" : "opacity-100 transition-opacity duration-1000"}>
        {children}
      </div>
    </>
  );
}
