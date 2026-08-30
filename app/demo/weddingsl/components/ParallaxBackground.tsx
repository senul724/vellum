"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxBackground() {
  const { scrollY } = useScroll();

  // Smooth, lightweight hardware-accelerated parallax transform
  const ySlow = useTransform(scrollY, [0, 3000], [0, -200]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#FAF7F2]">
      {/* Ambient Gradient Glow Orbs (GPU Accelerated CSS) */}
      <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-gradient-to-br from-[#D4AF37]/15 via-[#E8D8B0]/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[36rem] h-[36rem] bg-gradient-to-bl from-[#E8D8B0]/20 via-[#D4AF37]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-[32rem] h-[32rem] bg-gradient-to-tr from-[#D4AF37]/15 via-[#F3E5C8]/20 to-transparent rounded-full blur-3xl" />

      {/* Layer 1: Parallax Botanical Watermark Line Art */}
      <motion.div style={{ y: ySlow }} className="absolute inset-0 z-0 opacity-[0.05] will-change-transform">
        <svg
          className="absolute top-20 left-12 w-96 h-[32rem] text-[#2C3E35]"
          viewBox="0 0 200 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M 20 300 V 100 A 80 80 0 0 1 180 100 V 300" />
          <path d="M 35 300 V 105 A 65 65 0 0 1 165 105 V 300" />
          <circle cx="100" cy="100" r="40" strokeDasharray="3 3" />
        </svg>

        <svg
          className="absolute top-[50vh] right-8 w-80 h-96 text-[#D4AF37]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M100,190 C100,120 150,80 170,20 M100,150 C70,120 40,110 20,80" />
          <circle cx="170" cy="20" r="8" fill="currentColor" fillOpacity="0.2" />
          <circle cx="20" cy="80" r="6" fill="currentColor" fillOpacity="0.2" />
        </svg>
      </motion.div>
    </div>
  );
}
