"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SparkleItem {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  type: "circle" | "diamond" | "star";
}

export function FloatingConfetti() {
  const [items, setItems] = useState<SparkleItem[]>([]);

  useEffect(() => {
    const colors = [
      "#FF3366", // Hot Pink
      "#A855F7", // Amethyst
      "#F59E0B", // Sunset Amber
      "#06B6D4", // Electric Cyan
      "#FFD700", // Gold Foil
      "#EC4899", // Magenta
      "#FFFFFF", // Pure White
    ];
    const generated: SparkleItem[] = Array.from({ length: 26 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 7 + 4,
      duration: Math.random() * 7 + 8,
      delay: Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      type: i % 3 === 0 ? "diamond" : i % 3 === 1 ? "circle" : "star",
    }));
    setItems(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute"
          style={{
            left: `${item.left}%`,
            width: item.size,
            height: item.size,
            backgroundColor: item.color,
            borderRadius: item.type === "circle" ? "50%" : item.type === "diamond" ? "2px" : "1px",
            transform: item.type === "diamond" ? "rotate(45deg)" : "none",
            boxShadow: `0 0 10px ${item.color}`,
          }}
          initial={{ y: "-10vh", opacity: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            opacity: [0, 0.9, 0.9, 0],
            rotate: [0, 180, 360],
            x: [0, Math.sin(item.id) * 40, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
