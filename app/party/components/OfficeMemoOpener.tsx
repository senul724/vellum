"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { BellOff, Sparkles, PartyPopper, Calendar, MapPin } from "lucide-react";

interface OfficeMemoOpenerProps {
  children: React.ReactNode;
}

export function OfficeMemoOpener({ children }: OfficeMemoOpenerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState<"closed" | "opening" | "extracting" | "expanding">("closed");

  const handleOpen = () => {
    if (isOpen || stage !== "closed") return;

    setStage("opening");

    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6, x: 0.5 },
      colors: ["#10B981", "#34D399", "#F59E0B", "#EC4899", "#3B82F6"],
      ticks: 200,
      gravity: 0.8,
      scalar: 1.2,
    });

    setTimeout(() => {
      setStage("extracting");
    }, 800);

    setTimeout(() => {
      setStage("expanding");
    }, 2000);

    setTimeout(() => {
      setIsOpen(true);
      setStage("closed");
    }, 3200);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#07090F] px-4 overflow-hidden"
          >
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 bg-[#07090F] pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-emerald-500/15 via-blue-500/10 to-amber-500/15 rounded-full blur-[140px]" />
            </div>

            {/* Main Envelope Body */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={
                stage === "expanding"
                  ? { scale: 1.6, opacity: 0, transition: { duration: 1.1, ease: "easeInOut" } }
                  : { scale: 1, opacity: 1, y: 0 }
              }
              transition={{ duration: 0.5 }}
              onClick={handleOpen}
              className="relative w-full max-w-lg aspect-[16/11] rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center shadow-[0_30px_90px_rgba(0,0,0,0.85)] cursor-pointer group border-2 border-emerald-500/30"
              style={{
                background: "linear-gradient(145deg, #151A26 0%, #0F131D 60%, #0A0D15 100%)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Inner Party Invite Card (Slides out) */}
              <motion.div
                initial={{ y: 20, scale: 0.92 }}
                animate={
                  stage === "closed"
                    ? { y: 20, scale: 0.92 }
                    : stage === "opening"
                    ? { y: 0, scale: 0.95 }
                    : stage === "extracting"
                    ? { y: -150, scale: 1.02 }
                    : { y: -220, scale: 2.2, opacity: 1 }
                }
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute inset-x-8 top-8 bottom-8 rounded-2xl p-6 flex flex-col justify-between items-center text-center shadow-[0_15px_40px_rgba(0,0,0,0.5)] border-2 border-emerald-400/40 bg-gradient-to-b from-[#18202F] to-[#101521] text-white ${
                  stage === "expanding" ? "z-50" : "z-10"
                }`}
              >
                <div className="space-y-1 mt-1">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-300 inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>STATUS: OUT OF OFFICE 🌴</span>
                  </span>
                </div>

                <div className="space-y-2 my-auto">
                  <p className="text-xs font-mono uppercase tracking-widest text-white/60">
                    Annual Studio Bash &bull; All-Hands
                  </p>
                  <h3 className="text-2xl sm:text-4xl font-serif font-black tracking-tight text-white">
                    Slack is Muted.
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-emerald-400 font-bold tracking-wider uppercase">
                    The Bar is Open.
                  </p>
                </div>

                <div className="text-[10px] sm:text-[11px] font-mono text-white/70 flex items-center justify-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    DEC 18, 2026 &bull; 6:00 PM
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    TIMBERLINE ROOFTOP
                  </span>
                </div>
              </motion.div>

              {/* Envelope Flap Lower Pocket */}
              <div
                className="absolute inset-0 z-20 pointer-events-none rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0, 50% 55%)",
                  background: "linear-gradient(155deg, #1C2333 0%, #131824 60%, #0D101A 100%)",
                }}
              >
                <div className="absolute inset-0 border border-emerald-500/20 rounded-3xl" />
              </div>

              {/* Top Fold Flap with 3D Rotate */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={{
                  rotateX: stage === "closed" ? 0 : -180,
                  zIndex: stage === "closed" ? 30 : 5,
                }}
                transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                style={{
                  transformOrigin: "top center",
                  transformStyle: "preserve-3d",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                }}
                className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#242D40] to-[#171C29] border-t-2 border-emerald-500/30 shadow-2xl"
              />

              {/* Center Seal / Mute Slack Medallion */}
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                  scale: stage === "closed" ? 1 : [1, 1.2, 0],
                  opacity: stage === "closed" ? 1 : [1, 1, 0],
                }}
                transition={{ duration: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-600 via-teal-400 to-emerald-300 p-1 shadow-[0_10px_30px_rgba(16,185,129,0.5)] flex items-center justify-center cursor-pointer group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full bg-[#0D121B] border border-white/30 flex flex-col items-center justify-center text-white">
                    <BellOff className="w-5 h-5 text-emerald-400 animate-bounce" />
                    <span className="text-[8px] font-mono uppercase tracking-widest font-black text-emerald-300 pt-0.5">
                      OPEN OOO
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Tap Prompt */}
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap z-50 pointer-events-none">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-mono tracking-widest uppercase shadow-xl">
                  <PartyPopper className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Click To Mute Slack &amp; Unlock Party</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={!isOpen ? "opacity-0 pointer-events-none" : "opacity-100 transition-opacity duration-700"}>
        {children}
      </div>
    </>
  );
}
