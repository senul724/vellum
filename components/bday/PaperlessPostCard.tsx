"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, RotateCw, Crown, Heart } from "lucide-react";
import { BirthdayCardSuite, CARD_DESIGNS } from "./types";

interface CardProps {
  data: BirthdayCardSuite;
  isFlipped?: boolean;
  onFlipToggle?: () => void;
  scale?: number;
}

export function PaperlessPostCard({ data, isFlipped: externalFlipped, onFlipToggle, scale = 1 }: CardProps) {
  const [internalFlipped, setInternalFlipped] = useState(false);
  const isFlipped = externalFlipped !== undefined ? externalFlipped : internalFlipped;

  const handleFlip = () => {
    if (onFlipToggle) {
      onFlipToggle();
    } else {
      setInternalFlipped(!internalFlipped);
    }
  };

  const design = CARD_DESIGNS[data.designId] || CARD_DESIGNS["hydrangea-bouquet"];

  // Unique Botanical & Luxury Artworks for each design
  const renderArtwork = () => {
    switch (data.designId) {
      case "hydrangea-bouquet":
        return (
          <div className="relative w-full h-44 sm:h-52 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/60 via-sky-50/40 to-transparent" />
            <svg viewBox="0 0 340 180" className="w-full h-full object-contain filter drop-shadow-xs" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="hydrangeaBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#6366f1" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#4338ca" stopOpacity="0.85" />
                </linearGradient>
                <linearGradient id="hydrangeaPeriwinkle" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#a5b4fc" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="leafEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#047857" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="leafSage" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#059669" stopOpacity="0.85" />
                </linearGradient>
              </defs>

              {/* Foliage */}
              <path d="M170,120 Q120,150 90,130 Q110,90 170,110 Z" fill="url(#leafSage)" opacity="0.85" />
              <path d="M170,120 Q220,150 250,130 Q230,90 170,110 Z" fill="url(#leafEmerald)" opacity="0.85" />
              <path d="M170,100 Q170,40 130,25 Q130,70 170,90 Z" fill="url(#leafEmerald)" opacity="0.75" />
              <path d="M170,100 Q170,40 210,25 Q210,70 170,90 Z" fill="url(#leafSage)" opacity="0.75" />

              {/* Left Flower Cluster */}
              <g transform="translate(110, 75)">
                <circle cx="-15" cy="-10" r="14" fill="url(#hydrangeaPeriwinkle)" />
                <circle cx="10" cy="-18" r="15" fill="url(#hydrangeaBlue)" />
                <circle cx="-2" cy="8" r="16" fill="url(#hydrangeaPeriwinkle)" />
                <circle cx="18" cy="4" r="13" fill="url(#hydrangeaBlue)" />
                <circle cx="-20" cy="8" r="12" fill="url(#hydrangeaBlue)" opacity="0.8" />
                <circle cx="0" cy="0" r="3" fill="#ffffff" opacity="0.8" />
                <circle cx="10" cy="-12" r="3" fill="#ffffff" opacity="0.8" />
              </g>

              {/* Center Main Hydrangea Bloom */}
              <g transform="translate(170, 60)">
                <circle cx="-20" cy="-15" r="18" fill="url(#hydrangeaBlue)" />
                <circle cx="15" cy="-20" r="19" fill="url(#hydrangeaPeriwinkle)" />
                <circle cx="-25" cy="12" r="17" fill="url(#hydrangeaPeriwinkle)" />
                <circle cx="0" cy="-28" r="16" fill="url(#hydrangeaBlue)" />
                <circle cx="22" cy="10" r="18" fill="url(#hydrangeaBlue)" />
                <circle cx="-4" cy="18" r="19" fill="url(#hydrangeaPeriwinkle)" />
                <circle cx="0" cy="-2" r="22" fill="url(#hydrangeaBlue)" />
                <circle cx="-8" cy="-8" r="3.5" fill="#ffffff" opacity="0.8" />
                <circle cx="10" cy="-6" r="3.5" fill="#ffffff" opacity="0.8" />
                <circle cx="2" cy="8" r="3.5" fill="#ffffff" opacity="0.8" />
                <circle cx="-14" cy="6" r="3" fill="#ffffff" opacity="0.8" />
              </g>

              {/* Right Flower Cluster */}
              <g transform="translate(230, 75)">
                <circle cx="-10" cy="-18" r="15" fill="url(#hydrangeaPeriwinkle)" />
                <circle cx="15" cy="-10" r="14" fill="url(#hydrangeaBlue)" />
                <circle cx="-18" cy="4" r="13" fill="url(#hydrangeaBlue)" />
                <circle cx="2" cy="8" r="16" fill="url(#hydrangeaPeriwinkle)" />
                <circle cx="20" cy="8" r="12" fill="url(#hydrangeaPeriwinkle)" opacity="0.8" />
                <circle cx="0" cy="-4" r="3" fill="#ffffff" opacity="0.8" />
              </g>
            </svg>
          </div>
        );

      case "wildflower-meadow":
        return (
          <div className="relative w-full h-44 sm:h-52 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-100/50 via-yellow-50/30 to-transparent" />
            <svg viewBox="0 0 340 180" className="w-full h-full object-contain" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(170, 80)">
                <path d="M-80,40 Q0,-40 80,40" stroke="#059669" strokeWidth="2.5" fill="none" />
                <circle cx="-50" cy="10" r="18" fill="#f59e0b" opacity="0.85" />
                <circle cx="50" cy="10" r="18" fill="#d97706" opacity="0.85" />
                <circle cx="0" cy="-20" r="24" fill="#eab308" opacity="0.9" />
                <circle cx="0" cy="-20" r="9" fill="#78350f" opacity="0.8" />
                <circle cx="-25" cy="-8" r="12" fill="#f97316" opacity="0.8" />
                <circle cx="25" cy="-8" r="12" fill="#ec4899" opacity="0.8" />
                <circle cx="-65" cy="20" r="8" fill="#10b981" />
                <circle cx="65" cy="20" r="8" fill="#10b981" />
              </g>
            </svg>
          </div>
        );

      case "gilded-peony":
        return (
          <div className="relative w-full h-44 sm:h-52 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-rose-100/60 via-pink-50/40 to-transparent" />
            <svg viewBox="0 0 340 180" className="w-full h-full object-contain" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(170, 75)">
                <circle cx="-30" cy="-10" r="24" fill="#f43f5e" opacity="0.8" />
                <circle cx="30" cy="-10" r="24" fill="#fb7185" opacity="0.8" />
                <circle cx="0" cy="5" r="30" fill="#fda4af" opacity="0.9" />
                <circle cx="0" cy="0" r="18" fill="#e11d48" opacity="0.85" />
                <circle cx="0" cy="-2" r="7" fill="#fbbf24" />
                <path d="M-60,30 Q0,50 60,30" stroke="#fb7185" strokeWidth="2" fill="none" />
              </g>
            </svg>
          </div>
        );

      case "citrus-olive":
        return (
          <div className="relative w-full h-44 sm:h-52 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-100/50 via-amber-50/30 to-transparent" />
            <svg viewBox="0 0 340 180" className="w-full h-full object-contain" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(170, 75)">
                <path d="M-80,20 Q0,-40 80,20" stroke="#65a30d" strokeWidth="3" fill="none" />
                <circle cx="-40" cy="0" r="22" fill="#eab308" opacity="0.9" />
                <circle cx="40" cy="0" r="22" fill="#facc15" opacity="0.9" />
                <circle cx="0" cy="-15" r="16" fill="#ffffff" stroke="#eab308" strokeWidth="2.5" />
                <circle cx="0" cy="-15" r="6" fill="#fef08a" />
              </g>
            </svg>
          </div>
        );

      case "champagne-confetti":
        return (
          <div className="relative w-full h-44 sm:h-52 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-pink-100/60 via-amber-50/30 to-transparent" />
            <svg viewBox="0 0 340 180" className="w-full h-full object-contain" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(170, 80)">
                <text x="-35" y="10" fontSize="38" textAnchor="middle">🥂</text>
                <text x="35" y="10" fontSize="38" textAnchor="middle">🎈</text>
                <circle cx="0" cy="-20" r="12" fill="#ec4899" opacity="0.8" />
                <circle cx="-15" cy="-35" r="7" fill="#f59e0b" />
                <circle cx="15" cy="-35" r="7" fill="#38bdf8" />
                <circle cx="0" cy="-45" r="5" fill="#a855f7" />
              </g>
            </svg>
          </div>
        );

      case "royal-letterpress":
      default:
        return (
          <div className="relative w-full h-36 sm:h-44 flex flex-col items-center justify-center text-center pt-6">
            <div className="w-14 h-14 rounded-full border-2 border-amber-600/40 flex items-center justify-center bg-amber-50 shadow-inner">
              <Crown className="w-7 h-7 text-amber-700" />
            </div>
            <div className="flex items-center gap-3 my-2 text-amber-700/60">
              <span className="h-px w-12 bg-amber-600/40" />
              <span className="text-xs font-serif">❦</span>
              <span className="h-px w-12 bg-amber-600/40" />
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className="relative transition-transform duration-500 perspective-1000"
      style={{ transform: `scale(${scale})` }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative w-full max-w-[420px] min-h-[600px] sm:min-h-[640px] rounded-2xl shadow-2xl overflow-hidden border border-stone-300/80 select-none cursor-pointer [transform-style:preserve-3d]"
        style={{
          backgroundColor: design.cardBg,
          boxShadow: "0 25px 50px -12px rgba(40, 30, 20, 0.18), 0 0 35px rgba(230, 210, 180, 0.25)",
        }}
        onClick={handleFlip}
      >
        {/* ================= FRONT OF CARD ================= */}
        <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between text-center relative [backface-visibility:hidden]">
          <div className="absolute inset-3 rounded-xl border border-stone-300/60 pointer-events-none" />

          {/* Top Botanical Artwork */}
          <div className="relative z-10">{renderArtwork()}</div>

          {/* Centered Typography */}
          <div className="relative z-10 my-auto py-2 space-y-3">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold text-stone-500">
              {data.headerGreeting || "PLEASE JOIN US IN CELEBRATING"}
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-none px-2 py-1">
              {data.recipientName || "Sophia Alexander"}
            </h2>

            <p className="text-xs uppercase tracking-[0.25em] font-sans font-bold text-amber-800">
              {data.milestoneAge || "ON HER 25TH BIRTHDAY"}
            </p>

            <div className="flex items-center justify-center gap-2 py-1">
              <span className="h-px w-10 bg-stone-300" />
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span className="h-px w-10 bg-stone-300" />
            </div>

            <p className="text-xs sm:text-sm font-serif italic text-stone-700 font-medium max-w-xs mx-auto">
              {data.eventDate || "Saturday, September 19th at 7:00 in the Evening"}
            </p>

            <p className="text-[11px] sm:text-xs font-sans text-stone-500 max-w-xs mx-auto line-clamp-2">
              {data.locationWish || "The Glasshouse Botanical Garden • New York"}
            </p>
          </div>

          {/* Footer Signature */}
          <div className="relative z-10 pt-3 border-t border-stone-200/80 flex items-center justify-between text-[11px] text-stone-500 font-sans">
            <span>Inscribed with love</span>
            <span className="font-serif font-bold text-stone-900 text-xs">
              {data.senderName || "Julian Vance"}
            </span>
          </div>

          <div className="absolute bottom-2 right-2 text-[10px] text-stone-400 font-sans flex items-center gap-1 opacity-60 hover:opacity-100">
            <RotateCw className="w-3 h-3" />
            <span>Flip</span>
          </div>
        </div>

        {/* ================= BACK OF CARD ================= */}
        <div
          className="absolute inset-0 w-full h-full p-8 flex flex-col justify-between text-center [transform:rotateY(180deg)] [backface-visibility:hidden]"
          style={{ backgroundColor: design.cardBg }}
        >
          <div className="absolute inset-3 rounded-xl border border-stone-300/60 pointer-events-none" />

          <div className="text-center space-y-1">
            <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-stone-400 block">
              CARD REVERSE // PERSONAL MESSAGE
            </span>
            <h3 className="font-serif font-bold text-stone-900 text-lg">
              A Note for {data.recipientName}
            </h3>
          </div>

          <div className="my-auto px-4 py-6 bg-white/70 rounded-2xl border border-stone-200/80 shadow-xs space-y-3">
            <p className="font-serif italic text-sm sm:text-base text-stone-700 leading-relaxed">
              &ldquo;{data.personalMessage || "May your year ahead be as radiant, joyful, and magnificent as the flowers in bloom. Looking forward to toasting to you!"}&rdquo;
            </p>
            {data.backsideNote && (
              <p className="text-xs font-sans text-stone-500 pt-2 border-t border-stone-200">
                {data.backsideNote}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between text-xs text-stone-500 font-serif">
            <span>Tap anywhere to flip back</span>
            <span className="font-bold text-stone-900">— {data.senderName}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
