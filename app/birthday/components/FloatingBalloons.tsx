"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti";

interface BalloonProps {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  colorGrad: { base: string; light: string; shadow: string };
  drift: number;
}

const VIBRANT_BALLOON_COLORS = [
  { base: "#FF3366", light: "#FFB3C6", shadow: "#99002E" }, // Electric Hot Rose
  { base: "#A855F7", light: "#F3E8FF", shadow: "#581C87" }, // Vivid Amethyst Chrome
  { base: "#F59E0B", light: "#FEF3C7", shadow: "#92400E" }, // Sunset Gold Chrome
  { base: "#06B6D4", light: "#CFFAFE", shadow: "#0E7490" }, // Electric Cyan Chrome
  { base: "#EC4899", light: "#FCE7F3", shadow: "#9D174D" }, // Radiant Magenta
  { base: "#E2E8F0", light: "#FFFFFF", shadow: "#475569" }, // Holographic Silver Chrome
];

export function FloatingBalloons() {
  const [poppedIds, setPoppedIds] = useState<number[]>([]);

  const balloons: BalloonProps[] = [
    // Left cluster
    { id: 1, left: 3, size: 78, delay: 0, duration: 18, colorGrad: VIBRANT_BALLOON_COLORS[0], drift: 25 },
    { id: 2, left: 9, size: 62, delay: 3, duration: 22, colorGrad: VIBRANT_BALLOON_COLORS[1], drift: -20 },
    { id: 3, left: 15, size: 88, delay: 7, duration: 20, colorGrad: VIBRANT_BALLOON_COLORS[2], drift: 30 },
    { id: 4, left: 5, size: 58, delay: 11, duration: 19, colorGrad: VIBRANT_BALLOON_COLORS[3], drift: -25 },

    // Right cluster
    { id: 5, left: 83, size: 82, delay: 1, duration: 21, colorGrad: VIBRANT_BALLOON_COLORS[4], drift: -30 },
    { id: 6, left: 90, size: 68, delay: 5, duration: 17, colorGrad: VIBRANT_BALLOON_COLORS[0], drift: 20 },
    { id: 7, left: 77, size: 74, delay: 9, duration: 23, colorGrad: VIBRANT_BALLOON_COLORS[1], drift: -20 },
    { id: 8, left: 87, size: 88, delay: 13, duration: 19, colorGrad: VIBRANT_BALLOON_COLORS[5], drift: 35 },
  ];

  const handlePop = (e: React.MouseEvent, id: number, color: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    setPoppedIds((prev) => [...prev, id]);

    confetti({
      particleCount: 45,
      spread: 75,
      origin: { x, y },
      colors: [color, "#FFD700", "#FF1493", "#00FFFF", "#FFFFFF"],
      ticks: 150,
      gravity: 1.1,
      scalar: 1.1,
    });

    // Respawn after 6 seconds
    setTimeout(() => {
      setPoppedIds((prev) => prev.filter((item) => item !== id));
    }, 6000);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {balloons.map((b) => {
        if (poppedIds.includes(b.id)) return null;

        return (
          <motion.div
            key={b.id}
            initial={{ y: "115vh", x: 0, rotate: -5 }}
            animate={{
              y: "-30vh",
              x: [0, b.drift, -b.drift * 0.7, b.drift * 0.5, 0],
              rotate: [-5, 8, -6, 5, -5],
            }}
            transition={{
              duration: b.duration,
              delay: b.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${b.left}%`,
              width: b.size,
            }}
            className="absolute pointer-events-auto cursor-pointer group"
            onClick={(e) => handlePop(e, b.id, b.colorGrad.base)}
            title="Pop me!"
          >
            {/* SVG 3D Chrome Shaded Balloon with Trailing Ribbons */}
            <svg
              viewBox="0 0 100 160"
              className="w-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-115"
              style={{ overflow: "visible" }}
            >
              <defs>
                <radialGradient
                  id={`vibrant-balloon-grad-${b.id}`}
                  cx="32%"
                  cy="30%"
                  r="70%"
                  fx="25%"
                  fy="25%"
                >
                  <stop offset="0%" stopColor={b.colorGrad.light} />
                  <stop offset="40%" stopColor={b.colorGrad.base} />
                  <stop offset="95%" stopColor={b.colorGrad.shadow} />
                </radialGradient>

                <linearGradient id={`vibrant-sheen-${b.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                  <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Trailing Wavy Metallic String */}
              <motion.path
                d="M 50 92 Q 42 110, 56 125 T 46 155 T 52 180"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="1.4"
                strokeDasharray="2 1"
                animate={{
                  d: [
                    "M 50 92 Q 42 110, 56 125 T 46 155 T 52 180",
                    "M 50 92 Q 58 112, 44 128 T 54 158 T 48 180",
                    "M 50 92 Q 42 110, 56 125 T 46 155 T 52 180",
                  ],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Balloon Knot */}
              <polygon
                points="45,91 55,91 50,86"
                fill={b.colorGrad.shadow}
              />
              <ellipse cx="50" cy="91" rx="4.5" ry="2" fill={b.colorGrad.base} />

              {/* Balloon Main Oval Body */}
              <path
                d="M 50 4 
                   C 76 4, 94 28, 94 54 
                   C 94 76, 70 88, 50 88 
                   C 30 88, 6 76, 6 54 
                   C 6 28, 24 4, 50 4 Z"
                fill={`url(#vibrant-balloon-grad-${b.id})`}
              />

              {/* 3D Glossy Light Reflection */}
              <ellipse
                cx="34"
                cy="26"
                rx="14"
                ry="7"
                transform="rotate(-35 34 26)"
                fill={`url(#vibrant-sheen-${b.id})`}
              />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
}
