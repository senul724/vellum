"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ShieldCheck, ArrowRight, Calendar, MapPin } from "lucide-react";

interface PortfolioClaspOpenerProps {
  children: React.ReactNode;
}

export function PortfolioClaspOpener({ children }: PortfolioClaspOpenerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState<"locked" | "unclasped" | "extracting" | "expanding">("locked");

  const handleUnclasp = () => {
    if (isOpen || stage !== "locked") return;

    // Stage 1: Mechanical clasp release
    setStage("unclasped");

    // Stage 2: Card slides upward out of folio
    setTimeout(() => {
      setStage("extracting");
    }, 700);

    // Stage 3: Smoothly scale into full view
    setTimeout(() => {
      setStage("expanding");
    }, 2000);

    // Stage 4: Enter full document page
    setTimeout(() => {
      setIsOpen(true);
      setStage("locked");
    }, 3000);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C0D0F] px-4 overflow-hidden"
          >
            {/* Subtle Textured Background Table Surface */}
            <div className="absolute inset-0 bg-[#0C0D0F] bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/8 rounded-full blur-3xl pointer-events-none" />

            {/* Skeuomorphic Folio Case */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={
                stage === "expanding"
                  ? { scale: 1.5, opacity: 0, transition: { duration: 1.0, ease: "easeInOut" } }
                  : { scale: 1, opacity: 1, y: 0 }
              }
              transition={{ duration: 0.5 }}
              onClick={handleUnclasp}
              className="relative w-full max-w-xl aspect-[16/11] rounded-2xl p-6 sm:p-8 flex flex-col justify-between items-center cursor-pointer shadow-[0_30px_70px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.15)] group"
              style={{
                background: "linear-gradient(145deg, #1C1E23 0%, #15171B 60%, #111215 100%)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Perimeter Stitched Seam Accent */}
              <div className="absolute inset-3 rounded-xl border border-dashed border-[#C5A059]/30 pointer-events-none" />

              {/* Inset Letterpress Foil Card Inside the Folio */}
              <motion.div
                initial={{ y: 20, scale: 0.94 }}
                animate={
                  stage === "locked"
                    ? { y: 20, scale: 0.94 }
                    : stage === "unclasped"
                    ? { y: 0, scale: 0.96 }
                    : stage === "extracting"
                    ? { y: -150, scale: 1.04 }
                    : { y: -220, scale: 1.8, opacity: 1 }
                }
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute inset-x-8 top-8 bottom-8 rounded-xl p-6 sm:p-8 flex flex-col justify-between items-center text-center shadow-[0_15px_35px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.8),inset_0_0_0_1px_rgba(0,0,0,0.08)] ${
                  stage === "expanding" ? "z-50" : "z-10"
                }`}
                style={{
                  background: "linear-gradient(180deg, #F6F4ED 0%, #ECE9DF 100%)",
                  color: "#181A1E",
                }}
              >
                {/* Gold Foil Frame Trim */}
                <div className="absolute inset-2.5 border border-[#C5A059]/40 rounded-lg pointer-events-none" />

                <div className="relative z-10 space-y-1 mt-1">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C6D2D] block font-bold">
                    Official Delegation Dossier
                  </span>
                  <div className="w-10 h-[1px] bg-[#C5A059]/60 mx-auto" />
                </div>

                <div className="relative z-10 space-y-2 my-auto">
                  <p className="text-xs font-serif uppercase tracking-[0.25em] text-[#181A1E]/70 font-semibold">
                    The Nexus Forum Presents
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#181A1E] tracking-tight leading-tight">
                    2026 Global Leadership Summit
                  </h3>
                  <div className="w-14 h-[1.5px] bg-[#C5A059] mx-auto my-1" />
                  <p className="text-[11px] font-mono tracking-widest uppercase text-[#8C6D2D] font-bold">
                    Executive Briefing &bull; San Francisco
                  </p>
                </div>

                <div className="relative z-10 text-[10px] sm:text-[11px] font-mono text-[#181A1E]/60 flex items-center justify-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#C5A059]" />
                    NOVEMBER 12, 2026
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C5A059]" />
                    THE ST. REGIS PENTHOUSE
                  </span>
                </div>
              </motion.div>

              {/* Folio Front Lower Flap Pocket */}
              <div
                className="absolute inset-0 z-20 pointer-events-none rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0, 50% 55%)",
                  background: "linear-gradient(160deg, #24272E 0%, #1A1C21 60%, #131417 100%)",
                }}
              >
                <div className="absolute inset-0 border border-white/10 rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Folio Top Fold Flap with 3D Rotate */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={{
                  rotateX: stage === "locked" ? 0 : -180,
                  zIndex: stage === "locked" ? 30 : 5,
                }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                style={{
                  transformOrigin: "top center",
                  transformStyle: "preserve-3d",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                }}
                className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#2B2F37] to-[#1C1E23] border-t border-white/20 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
              </motion.div>

              {/* Skeuomorphic Brushed Brass Clasp Hardware */}
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                  scale: stage === "locked" ? 1 : [1, 1.15, 0],
                  opacity: stage === "locked" ? 1 : [1, 1, 0],
                }}
                transition={{ duration: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-28 h-12 rounded-lg bg-gradient-to-b from-[#E2C889] via-[#C5A059] to-[#8C6D2D] p-0.5 shadow-[0_6px_15px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.5)] flex items-center justify-between px-3.5 cursor-pointer"
                >
                  {/* Brass Clasp Left Rivet Screw */}
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-b from-[#8C6D2D] to-[#4D3A13] border border-[#E2C889]/60 shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-[0.5px] bg-[#E2C889]" />
                  </div>

                  {/* Embossed Monogram */}
                  <div className="flex items-center gap-1 text-[#221B0B] font-mono text-xs font-black tracking-widest drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]">
                    <Lock className="w-3 h-3" />
                    <span>NEXUS</span>
                  </div>

                  {/* Brass Clasp Right Rivet Screw */}
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-b from-[#8C6D2D] to-[#4D3A13] border border-[#E2C889]/60 shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-[0.5px] bg-[#E2C889]" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Clasp Action Prompt */}
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap z-50 pointer-events-none">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#1D1F24] border border-white/15 text-white/85 text-xs font-mono tracking-widest uppercase shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Click Clasp To Unlock Invitation</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Business Summit Page */}
      <div className={!isOpen ? "opacity-0 pointer-events-none" : "opacity-100 transition-opacity duration-800"}>
        {children}
      </div>
    </>
  );
}
