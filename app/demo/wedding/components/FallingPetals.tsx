"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Petal {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export function FallingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const colors = [
      "from-[#D4AF37]/40 to-[#F3E5C8]/70",
      "from-[#E8D8B0]/50 to-[#FFFFFF]/80",
      "from-[#E5A9B4]/40 to-[#F5D0D6]/60",
    ];

    // Reduced to 10 lightweight petals for 60fps performance
    const generated: Petal[] = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      x: Math.random() * 95,
      size: Math.random() * 14 + 10,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 6,
      color: colors[i % colors.length],
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ y: "-10vh", x: `${petal.x}vw`, opacity: 0, rotate: 0 }}
          animate={{
            y: ["-10vh", "110vh"],
            x: [`${petal.x}vw`, `${petal.x + 5}vw`, `${petal.x - 4}vw`],
            rotate: [0, 180, 360],
            opacity: [0, 0.75, 0.75, 0],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
          style={{
            width: petal.size,
            height: petal.size * 1.4,
            borderRadius: "100% 0% 100% 0% / 100% 0% 100% 0%",
          }}
          className={`absolute bg-gradient-to-br ${petal.color} will-change-transform`}
        />
      ))}
    </div>
  );
}
