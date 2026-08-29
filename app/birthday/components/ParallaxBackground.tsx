"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxBackground() {
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 3000], [0, -220]);
  const yFast = useTransform(scrollY, [0, 3000], [0, -350]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#0E0C12]">
      {/* Mesh Gradient 1: Electric Coral / Sunset Aura (Top-Left) */}
      <div className="absolute -top-32 -left-32 w-[36rem] h-[36rem] bg-gradient-to-br from-[#FF4D6D]/22 via-[#FF758F]/15 to-transparent rounded-full blur-[100px] animate-pulse" />

      {/* Mesh Gradient 2: Deep Violet / Amethyst Glow (Center-Right) */}
      <div className="absolute top-1/4 -right-32 w-[40rem] h-[40rem] bg-gradient-to-bl from-[#8B5CF6]/20 via-[#C084FC]/12 to-transparent rounded-full blur-[120px]" />

      {/* Mesh Gradient 3: Vibrant Tangerine / Amber Gold Aura (Bottom-Left) */}
      <div className="absolute top-2/3 -left-20 w-[38rem] h-[38rem] bg-gradient-to-tr from-[#F59E0B]/18 via-[#FBBF24]/12 to-transparent rounded-full blur-[110px]" />

      {/* Mesh Gradient 4: Electric Magenta / Pink Glow (Bottom-Right) */}
      <div className="absolute -bottom-24 right-10 w-[34rem] h-[34rem] bg-gradient-to-tl from-[#EC4899]/18 via-[#F43F5E]/10 to-transparent rounded-full blur-[100px]" />

      {/* Faint Grid Texture for Modern Party Depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40" />

      {/* Parallax Neon Celebration Typography Watermark */}
      <motion.div style={{ y: ySlow }} className="absolute inset-0 z-0 select-none pointer-events-none will-change-transform opacity-15">
        <div className="absolute top-24 left-8 text-[18rem] md:text-[24rem] font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-white/30 via-[#FF758F]/30 to-transparent leading-none">
          25
        </div>
        <div className="absolute top-[65vh] right-6 text-[12rem] md:text-[16rem] font-serif italic text-transparent bg-clip-text bg-gradient-to-b from-[#FBBF24]/30 via-[#FF4D6D]/30 to-transparent leading-none">
          soirée
        </div>
      </motion.div>
    </div>
  );
}
