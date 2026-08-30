"use client";

import { motion } from "framer-motion";

export function FixedGoldFrame() {
  return (
    <div className="fixed inset-3 sm:inset-6 pointer-events-none z-40 transition-all duration-500">
      {/* Outer Fine Gold Border */}
      <div className="absolute inset-0 border border-[#D4AF37]/35 rounded-2xl sm:rounded-3xl" />
      {/* Inner Thin Gold Border */}
      <div className="absolute inset-1 sm:inset-2 border border-[#D4AF37]/20 rounded-xl sm:rounded-2xl" />

      {/* Top-Left Corner Filigree Flourish */}
      <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 text-[#D4AF37] p-1.5 sm:p-2">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M 10 10 H 90 V 25 C 90 25 40 25 25 40 C 25 40 25 90 10 90 Z" />
          <path d="M 25 10 V 45 C 25 45 45 45 45 25 Z" fill="currentColor" fillOpacity="0.15" />
          <circle cx="20" cy="20" r="4" fill="currentColor" />
        </svg>
      </div>

      {/* Top-Right Corner Filigree Flourish */}
      <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 text-[#D4AF37] p-1.5 sm:p-2 transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M 10 10 H 90 V 25 C 90 25 40 25 25 40 C 25 40 25 90 10 90 Z" />
          <path d="M 25 10 V 45 C 25 45 45 45 45 25 Z" fill="currentColor" fillOpacity="0.15" />
          <circle cx="20" cy="20" r="4" fill="currentColor" />
        </svg>
      </div>

      {/* Bottom-Left Corner Filigree Flourish */}
      <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 text-[#D4AF37] p-1.5 sm:p-2 transform scale-y-[-1]">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M 10 10 H 90 V 25 C 90 25 40 25 25 40 C 25 40 25 90 10 90 Z" />
          <path d="M 25 10 V 45 C 25 45 45 45 45 25 Z" fill="currentColor" fillOpacity="0.15" />
          <circle cx="20" cy="20" r="4" fill="currentColor" />
        </svg>
      </div>

      {/* Bottom-Right Corner Filigree Flourish */}
      <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 text-[#D4AF37] p-1.5 sm:p-2 transform scale-x-[-1] scale-y-[-1]">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M 10 10 H 90 V 25 C 90 25 40 25 25 40 C 25 40 25 90 10 90 Z" />
          <path d="M 25 10 V 45 C 25 45 45 45 45 25 Z" fill="currentColor" fillOpacity="0.15" />
          <circle cx="20" cy="20" r="4" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
