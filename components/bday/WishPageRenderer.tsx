"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Sparkles, Camera, Crown } from "lucide-react";
import { SimpleCardData, CardStyleId } from "./types";

interface WishPageProps {
  data: SimpleCardData;
}

const DEFAULT_DEMO_PHOTO = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800";
const BABY_DEMO_PHOTO = "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800";

const DEMO_COLLAGE_PHOTOS = [
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
];

/* ────────────────────────────────────────────────────
   1. SPACE ASTRONAUT BIRTHDAY PAGE
   ──────────────────────────────────────────────────── */
function SpaceAstronautPage({ data }: WishPageProps) {
  const photoSrc = data.photoUrl || BABY_DEMO_PHOTO;
  const age = data.milestoneAge || "2";

  return (
    <div className="min-h-screen bg-[#091122] text-white flex flex-col items-center justify-between p-4 sm:p-8 relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,58,138,0.4)_0%,rgba(9,17,34,0.95)_100%)] pointer-events-none" />

      <div className="absolute top-6 left-8 text-amber-400 text-3xl font-black rotate-12 pointer-events-none">✦</div>
      <div className="absolute top-10 right-10 text-orange-400 text-4xl font-black rotate-[-15deg] pointer-events-none">✦</div>
      <div className="absolute bottom-36 left-12 text-amber-300 text-3xl font-black pointer-events-none">✦</div>
      <div className="absolute bottom-40 right-14 text-orange-300 text-4xl font-black pointer-events-none">✦</div>

      <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center relative z-20 pt-8 sm:pt-12 pb-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-4 space-y-0.5"
        >
          <span className="text-2xl sm:text-4xl font-sans font-black tracking-widest text-[#fffbeb] uppercase drop-shadow-md">
            {data.recipientName || "SAM"} IS TURNING {age}
          </span>
        </motion.div>

        <div className="relative my-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-amber-200/80 shadow-[0_0_50px_rgba(245,158,11,0.3)] relative z-10"
          >
            <img src={photoSrc} alt={data.recipientName || "Baby portrait"} className="w-full h-full object-cover" />
          </motion.div>

          <div className="absolute -left-12 sm:-left-16 bottom-2 z-20 rotate-[-10deg] pointer-events-none flex flex-col items-center">
            <span className="text-5xl sm:text-6xl drop-shadow-lg">🐻‍🚀</span>
          </div>
          <div className="absolute -right-10 sm:-right-14 top-2 z-20 rotate-[12deg] pointer-events-none flex flex-col items-center">
            <span className="text-5xl sm:text-6xl drop-shadow-lg">🛸</span>
          </div>
          <div className="absolute -right-6 sm:-right-8 bottom-0 z-20 rotate-[8deg] pointer-events-none">
            <span className="text-4xl sm:text-5xl">🧁</span>
          </div>
        </div>

        <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-6 space-y-1">
          <span className="font-mono text-xs sm:text-sm tracking-[0.25em] text-amber-200 font-bold uppercase block">
            JOIN US IN BIRTHDAY CELEBRATION
          </span>
        </motion.div>

        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="my-4">
          <div className="flex items-center gap-3 font-sans text-xl sm:text-2xl font-black text-amber-100 bg-amber-500/20 border border-amber-400/50 px-6 py-2 rounded-full backdrop-blur-sm tracking-wider">
            <span>{data.eventDate ? data.eventDate.split("|")[0] || "JUNE" : "JUNE"}</span>
            <span className="text-amber-400">|</span>
            <span className="text-2xl sm:text-3xl text-amber-300">{data.eventDate ? data.eventDate.split("|")[1] || "9" : "9"}</span>
            <span className="text-amber-400">|</span>
            <span>{data.eventDate ? data.eventDate.split("|")[2] || "4 PM" : "4 PM"}</span>
          </div>
        </motion.div>

        <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="space-y-2 max-w-sm px-4">
          <p className="font-mono text-xs sm:text-sm text-stone-300 font-semibold tracking-wider">
            {data.eventLocation || "123 ANYWHERE ST., ANY CITY"}
          </p>
          <p className="font-serif italic text-sm sm:text-base text-amber-100 leading-relaxed pt-2">
            &ldquo;{data.message}&rdquo;
          </p>
          <span className="block text-xs font-mono text-amber-300/80 pt-1">
            With love from {data.senderName || "Julian"} 🚀
          </span>
        </motion.div>
      </div>

      <div className="w-full max-w-2xl flex justify-between items-end relative z-20 px-4 pb-4">
        <div className="flex flex-col items-center rotate-[-6deg]">
          <span className="text-5xl sm:text-7xl">🎂</span>
        </div>
        <div className="flex flex-col items-center rotate-[18deg]">
          <span className="text-6xl sm:text-8xl">🚀</span>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────
   2. MERMAID MAGIC BIRTHDAY PAGE
   ──────────────────────────────────────────────────── */
function MermaidMagicPage({ data }: WishPageProps) {
  const photoSrc = data.photoUrl || BABY_DEMO_PHOTO;
  const age = data.milestoneAge || "1";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3e8ff] via-[#fae8ff] to-[#fbcfe8] text-[#6b21a8] flex flex-col items-center justify-between p-4 sm:p-8 relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(216,180,254,0.4)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(244,114,182,0.3)_0%,transparent_60%)] pointer-events-none" />

      <div className="absolute top-0 inset-x-0 w-full z-20 pointer-events-none">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-16 sm:h-24 opacity-80">
          <path d="M0,10 Q250,70 500,10 Q750,70 1000,10" fill="none" stroke="#d8b4fe" strokeWidth="2" />
          <polygon points="50,15 90,15 70,65" fill="#f472b6" />
          <polygon points="120,25 160,25 140,75" fill="#c084fc" />
          <polygon points="190,32 230,32 210,82" fill="#f472b6" />
          <polygon points="260,35 300,35 280,85" fill="#c084fc" />
          <polygon points="330,32 370,32 350,82" fill="#f472b6" />
          <polygon points="400,25 440,25 420,75" fill="#c084fc" />
          <polygon points="470,15 510,15 490,65" fill="#f472b6" />
          <polygon points="540,25 580,25 560,75" fill="#c084fc" />
          <polygon points="610,32 650,32 630,82" fill="#f472b6" />
          <polygon points="680,35 720,35 700,85" fill="#c084fc" />
          <polygon points="750,32 790,32 770,82" fill="#f472b6" />
          <polygon points="820,25 860,25 840,75" fill="#c084fc" />
          <polygon points="890,15 930,15 910,65" fill="#f472b6" />
        </svg>
      </div>

      <div className="absolute left-2 sm:left-6 top-16 z-20 hidden sm:flex flex-col items-center pointer-events-none opacity-90 rotate-[-10deg]">
        <span className="text-6xl sm:text-7xl">🧜‍♀️</span>
      </div>
      <div className="absolute right-2 sm:right-6 top-16 z-20 hidden sm:flex flex-col items-center pointer-events-none opacity-90 rotate-[10deg]">
        <span className="text-6xl sm:text-7xl">🧜</span>
      </div>

      <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center relative z-20 pt-16 sm:pt-20 pb-6">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="mb-4 space-y-0.5">
          <span className="text-2xl sm:text-4xl font-sans font-black tracking-widest text-[#6b21a8] uppercase drop-shadow-sm">
            {data.recipientName || "EMMA"} IS TURNING {age}
          </span>
        </motion.div>

        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-purple-300 shadow-[0_15px_40px_rgba(168,85,247,0.25)] my-2 shrink-0">
          <img src={photoSrc} alt={data.recipientName || "Emma"} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-6 space-y-1">
          <span className="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#7e22ce] font-bold uppercase block">
            JOIN US IN BIRTHDAY CELEBRATION
          </span>
        </motion.div>

        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="my-4">
          <div className="flex items-center gap-3 font-sans text-xl sm:text-2xl font-black text-[#6b21a8] bg-purple-200/60 border border-purple-300 px-6 py-2 rounded-full backdrop-blur-sm tracking-wider shadow-sm">
            <span>{data.eventDate ? data.eventDate.split("|")[0] || "June" : "June"}</span>
            <span className="text-purple-400">|</span>
            <span className="text-2xl sm:text-3xl text-purple-700">{data.eventDate ? data.eventDate.split("|")[1] || "9" : "9"}</span>
            <span className="text-purple-400">|</span>
            <span>{data.eventDate ? data.eventDate.split("|")[2] || "4 PM" : "4 PM"}</span>
          </div>
        </motion.div>

        <motion.div initial={{ y: 15, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="space-y-2 max-w-sm px-4">
          <p className="font-mono text-xs sm:text-sm text-purple-900 font-bold tracking-wider">
            {data.eventLocation || "123 Anywhere St., Any City"}
          </p>
          <p className="font-serif italic text-sm sm:text-base text-purple-950 leading-relaxed pt-2">
            &ldquo;{data.message}&rdquo;
          </p>
          <span className="block text-xs font-serif font-bold text-purple-800 pt-1">
            — With love, {data.senderName || "Julian"} 🧜‍♀️✨
          </span>
        </motion.div>
      </div>

      <div className="w-full max-w-2xl flex justify-between items-end relative z-20 px-4 pb-4">
        <div className="flex items-center gap-1">
          <span className="text-4xl sm:text-6xl">🐚</span>
          <span className="text-3xl sm:text-5xl">⭐</span>
        </div>
        <div className="flex flex-col items-center rotate-[-4deg]">
          <span className="text-5xl sm:text-7xl">🎂</span>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────
   3. FESTIVE BUNTING PAGE
   ──────────────────────────────────────────────────── */
function FestiveBuntingPage({ data }: WishPageProps) {
  const photoSrc = data.photoUrl || DEFAULT_DEMO_PHOTO;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fde6d2] via-[#fbdcc5] to-[#f9cbab] text-[#be5a4b] flex flex-col items-center justify-between p-4 sm:p-8 relative overflow-hidden select-none">
      <div className="absolute top-0 inset-x-0 w-full z-20 pointer-events-none">
        <svg viewBox="0 0 1000 120" preserveAspectRatio="none" className="w-full h-20 sm:h-28">
          <path d="M0,10 Q250,90 500,20 Q750,90 1000,10" fill="none" stroke="#64748b" strokeWidth="2.5" />
          <polygon points="40,24 80,24 60,75" fill="#ec4899" />
          <polygon points="90,32 130,32 110,83" fill="#3b82f6" />
          <polygon points="140,40 180,40 160,90" fill="#fbbf24" />
          <polygon points="190,46 230,46 210,95" fill="#f97316" />
          <polygon points="240,49 280,49 260,98" fill="#ec4899" />
          <polygon points="310,48 350,48 330,96" fill="#3b82f6" />
          <polygon points="360,43 400,43 380,91" fill="#fbbf24" />
          <polygon points="410,36 450,36 430,84" fill="#f97316" />
          <polygon points="460,27 500,27 480,75" fill="#ec4899" />
          <polygon points="520,26 560,26 540,75" fill="#3b82f6" />
          <polygon points="570,35 610,35 590,83" fill="#fbbf24" />
          <polygon points="620,42 660,42 640,90" fill="#f97316" />
          <polygon points="670,48 710,48 690,95" fill="#ec4899" />
          <polygon points="720,49 760,49 740,97" fill="#3b82f6" />
          <polygon points="790,47 830,47 810,94" fill="#fbbf24" />
          <polygon points="840,42 880,42 860,89" fill="#f97316" />
          <polygon points="890,33 930,33 910,81" fill="#ec4899" />
          <polygon points="940,22 980,22 960,70" fill="#3b82f6" />
        </svg>
      </div>

      <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center relative z-20 pt-16 sm:pt-20 pb-8">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-[6px] border-white shadow-[0_20px_50px_rgba(190,90,75,0.3)] mb-4 shrink-0">
          <img src={photoSrc} alt={data.recipientName || "Juliana Silva"} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-4">
          <div className="bg-[#be5a4b] text-white px-6 sm:px-8 py-2 rounded-md font-sans font-black text-sm sm:text-base uppercase tracking-widest shadow-md">
            {data.recipientName || "JULIANA SILVA"}
          </div>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="space-y-1 mb-4">
          <h1 className="text-4xl sm:text-6xl font-sans font-black tracking-tight leading-none text-[#be5a4b]">HAPPY</h1>
          <h1 className="text-4xl sm:text-6xl font-sans font-black tracking-tight leading-none text-[#be5a4b]">BIRTHDAY</h1>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="max-w-md px-4 space-y-2">
          <p className="font-serif font-bold text-base sm:text-lg text-[#9e4336] leading-relaxed">
            &ldquo;{data.message}&rdquo;
          </p>
          <span className="block text-xs font-sans font-semibold text-[#be5a4b]/80 pt-1">
            — With love, {data.senderName || "Julian"}
          </span>
        </motion.div>
      </div>

      <div className="w-full max-w-3xl flex justify-between items-end relative z-20 px-2 sm:px-8 pb-2">
        <div className="flex flex-col items-center rotate-[-8deg]"><span className="text-4xl sm:text-6xl">🐕‍🦺</span></div>
        <div className="flex flex-col items-center rotate-[8deg]"><span className="text-4xl sm:text-6xl">🐕</span></div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────
   4. PRESSED FLORAL SCRAPBOOK PAGE
   ──────────────────────────────────────────────────── */
function PressedFloralPage({ data }: WishPageProps) {
  const p1 = data.photoUrl || data.photos?.[0] || DEFAULT_DEMO_PHOTO;
  const p2 = data.photos?.[1] || DEMO_COLLAGE_PHOTOS[1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fcecf0] via-[#fadce5] to-[#f8cad7] text-stone-900 flex flex-col items-center justify-center p-3 sm:p-8 relative overflow-hidden select-none">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center relative z-10 py-6 sm:py-10">
        <div className="relative w-full max-w-xl min-h-[440px] sm:min-h-[520px] flex items-center justify-center my-2 sm:my-4">
          <motion.div initial={{ rotate: -8, scale: 0.85, opacity: 0 }} animate={{ rotate: -6, scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="absolute top-2 left-2 sm:left-8 z-10 bg-white p-3 sm:p-4 pb-8 sm:pb-10 rounded-xs shadow-[0_20px_50px_rgba(200,100,120,0.25)] border border-stone-200 w-52 sm:w-72 hover:z-40 hover:scale-105 transition-all group cursor-pointer">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100 border border-stone-200">
              <img src={p1} alt="Portrait" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>

          <motion.div initial={{ rotate: 8, scale: 0.85, opacity: 0 }} animate={{ rotate: 5, scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="absolute top-20 sm:top-24 right-2 sm:right-6 z-20 bg-white p-3 sm:p-4 pb-8 sm:pb-10 rounded-xs shadow-[0_25px_60px_rgba(200,100,120,0.3)] border border-stone-200 w-52 sm:w-72 hover:z-40 hover:scale-105 transition-all group cursor-pointer">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100 border border-stone-200">
              <img src={p2} alt="Sunlight Portrait" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>

          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="absolute bottom-0 left-2 sm:left-6 z-30 bg-white p-4 sm:p-6 rounded-xs shadow-2xl border border-stone-200 w-64 sm:w-80 rotate-[-3deg]">
            <div className="space-y-1 text-left">
              <h2 className="font-[family-name:var(--font-handwriting)] text-4xl sm:text-5xl text-[#e06d7d] font-bold leading-none">Happy</h2>
              <h2 className="font-[family-name:var(--font-handwriting)] text-4xl sm:text-5xl text-[#e06d7d] font-bold leading-none pl-4">Birthday</h2>
            </div>
            <div className="mt-4 pt-3 border-t border-rose-100 space-y-1.5 text-left">
              <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900">{data.recipientName || "Sophia"}</h3>
              <p className="text-xs sm:text-sm font-sans text-stone-600 leading-relaxed italic">&ldquo;{data.message}&rdquo;</p>
              <p className="text-xs font-serif text-rose-700 font-bold text-right pt-1">— {data.senderName || "Julian"}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────
   5. Y2K DIGITAL CAMERA & RANSOM NOTE PAGE
   ──────────────────────────────────────────────────── */
function Y2KDigitalCameraPage({ data }: WishPageProps) {
  const mainPhoto = data.photoUrl || data.photos?.[0] || DEMO_COLLAGE_PHOTOS[0];
  const p2 = data.photos?.[1] || DEMO_COLLAGE_PHOTOS[1];
  const p3 = data.photos?.[2] || DEMO_COLLAGE_PHOTOS[2];

  return (
    <div className="min-h-screen bg-[#f8f8f6] text-stone-900 flex flex-col items-center justify-center p-3 sm:p-8 relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center relative z-10 py-4 sm:py-8">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="absolute -top-2 left-1/2 -translate-x-1/2 z-40 rotate-[-3deg] pointer-events-none">
          <div className="w-12 h-10 sm:w-16 sm:h-14 bg-gradient-to-t from-stone-300 via-stone-100 to-white rounded-t-xl border-2 border-stone-800 shadow-xl flex items-center justify-center p-1">
            <Crown className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500 fill-amber-400 stroke-stone-900 stroke-[2]" />
          </div>
        </motion.div>

        <div className="relative w-full max-w-2xl sm:max-w-3xl min-h-[460px] sm:min-h-[540px] flex items-center justify-center my-2 sm:my-4">
          <motion.div initial={{ rotate: -5, scale: 0.85, opacity: 0 }} animate={{ rotate: -3, scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="absolute top-0 left-1/2 -translate-x-1/2 z-10 bg-white p-2.5 sm:p-3.5 pb-9 sm:pb-11 rounded-xs shadow-2xl border border-stone-300 w-48 sm:w-64 hover:z-50 hover:scale-105 transition-all group cursor-pointer">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200 border border-stone-300">
              <img src={p2} alt="Selfie" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>

          <motion.div initial={{ rotate: -15, scale: 0.85, opacity: 0 }} animate={{ rotate: -14, scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="absolute top-8 sm:top-10 -left-2 sm:left-2 z-20 bg-white p-2.5 sm:p-3 pb-8 rounded-xs shadow-xl border border-stone-300 w-44 sm:w-56 hover:z-50 hover:scale-105 transition-all group cursor-pointer">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200 border border-stone-300">
              <img src={p3} alt="Friends" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>

          <motion.div initial={{ rotate: 14, scale: 0.85, opacity: 0 }} animate={{ rotate: 12, scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="absolute top-10 sm:top-12 -right-2 sm:right-2 z-20 bg-white p-2.5 sm:p-3 pb-8 rounded-xs shadow-xl border border-stone-300 w-44 sm:w-56 hover:z-50 hover:scale-105 transition-all group cursor-pointer">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200 border border-stone-300">
              <img src={p2} alt="Group" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>

          <motion.div initial={{ y: 30, scale: 0.9, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }} className="absolute bottom-0 sm:bottom-2 right-1 sm:right-8 z-30 bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300 p-2.5 sm:p-3.5 rounded-3xl shadow-[0_20px_45px_rgba(0,0,0,0.3)] border-4 border-stone-300 w-64 sm:w-80 text-stone-900">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border-3 border-stone-800 bg-stone-900 shadow-inner group">
              <img src={mainPhoto} alt={data.recipientName || "Birthday photo"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-1.5 left-1.5 text-[8px] font-mono text-emerald-400 bg-black/70 px-1.5 py-0.5 rounded-xs">REC ●</div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 my-3 sm:my-5 z-40 max-w-lg">
          <div className="flex items-center gap-1 mr-3">
            <span className="bg-red-500 text-amber-300 font-sans font-black text-2xl sm:text-4xl px-2.5 py-1 rounded-sm shadow-md border border-stone-800">H</span>
            <span className="bg-emerald-400 text-stone-950 font-serif font-black text-2xl sm:text-4xl px-2.5 py-1 rounded-sm shadow-md border border-stone-800">A</span>
            <span className="bg-pink-600 text-white font-sans font-bold text-2xl sm:text-4xl px-2.5 py-1 rounded-sm shadow-md border border-stone-800">P</span>
            <span className="bg-purple-600 text-white font-serif font-bold text-2xl sm:text-4xl px-2.5 py-1 rounded-sm shadow-md border border-stone-800">P</span>
            <span className="bg-amber-400 text-indigo-950 font-sans font-black text-2xl sm:text-4xl px-2.5 py-1 rounded-sm shadow-md border border-stone-800">Y</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="bg-pink-500 text-white font-serif font-black text-2xl sm:text-4xl px-2.5 py-1 rounded-sm shadow-md border border-stone-800">B</span>
            <span className="bg-purple-700 text-rose-200 font-mono font-bold text-2xl sm:text-4xl px-2.5 py-1 rounded-sm shadow-md border border-stone-800">i</span>
            <span className="bg-rose-600 text-amber-100 font-serif font-bold text-2xl sm:text-4xl px-2.5 py-1 rounded-sm shadow-md border border-stone-800">r</span>
            <span className="bg-red-500 text-amber-300 font-sans font-black text-2xl sm:text-4xl px-2.5 py-1 rounded-sm shadow-md border border-stone-800">t</span>
            <span className="bg-emerald-500 text-stone-950 font-serif font-black text-2xl sm:text-4xl px-2.5 py-1 rounded-sm shadow-md border border-stone-800">H</span>
            <span className="bg-stone-800 text-white font-sans font-bold text-2xl sm:text-4xl px-2.5 py-1 rounded-sm shadow-md border border-stone-800">d</span>
            <span className="bg-amber-300 text-stone-950 font-serif font-black text-2xl sm:text-4xl px-2.5 py-1 rounded-sm shadow-md border border-stone-800">a</span>
            <span className="bg-sky-400 text-indigo-950 font-sans font-bold text-2xl sm:text-4xl px-2.5 py-1 rounded-sm shadow-md border border-stone-800">y</span>
          </div>
        </motion.div>

        <div className="bg-[#cbd5e1] text-stone-950 px-8 py-2 rounded-xl shadow-lg border border-slate-300 font-[family-name:var(--font-handwriting)] text-2xl sm:text-4xl font-bold tracking-wide text-center">
          {data.recipientName || "Noah"}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────
   6. POLAROID COLLAGE PAGE
   ──────────────────────────────────────────────────── */
function PolaroidCollagePage({ data }: WishPageProps) {
  const p1 = data.photos?.[0] || data.photoUrl || DEMO_COLLAGE_PHOTOS[0];
  const p2 = data.photos?.[1] || DEMO_COLLAGE_PHOTOS[1];
  const p3 = data.photos?.[2] || DEMO_COLLAGE_PHOTOS[2];

  return (
    <div className="min-h-screen bg-[#f3ede3] text-stone-900 flex flex-col items-center justify-center p-3 sm:p-8 relative overflow-hidden select-none">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center relative z-10 py-4 sm:py-8">
        <div className="relative w-full max-w-2xl min-h-[460px] sm:min-h-[540px] flex items-center justify-center my-2 sm:my-4">
          <motion.div initial={{ rotate: -10, scale: 0.85, opacity: 0 }} animate={{ rotate: -6, scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="absolute left-1 sm:left-6 top-6 sm:top-4 z-20 bg-white p-3 sm:p-4 pb-12 sm:pb-14 rounded-xs shadow-2xl border border-stone-200 w-52 sm:w-72 hover:z-40 hover:scale-105 transition-all group cursor-pointer">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100 border border-stone-200">
              <img src={p1} alt="Friends" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>

          <motion.div initial={{ rotate: 8, scale: 0.85, opacity: 0 }} animate={{ rotate: 5, scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="absolute right-1 sm:right-8 top-0 z-10 bg-white p-2.5 sm:p-3.5 pb-10 sm:pb-12 rounded-xs shadow-xl border border-stone-200 w-44 sm:w-60 hover:z-40 hover:scale-105 transition-all group cursor-pointer">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100 border border-stone-200">
              <img src={p2} alt="Celebration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>

          <motion.div initial={{ rotate: -6, scale: 0.85, opacity: 0 }} animate={{ rotate: -4, scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="absolute right-2 sm:right-14 bottom-2 z-30 bg-white p-3 sm:p-4 pb-14 sm:pb-16 rounded-xs shadow-2xl border border-stone-200 w-52 sm:w-72 hover:z-40 hover:scale-105 transition-all group cursor-pointer">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100 border border-stone-200">
              <img src={p3} alt="Happy Birthday" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────
   7. PINK CUPCAKE POLAROID
   ──────────────────────────────────────────────────── */
function PinkCupcakePolaroidPage({ data }: WishPageProps) {
  const photoSrc = data.photoUrl || DEFAULT_DEMO_PHOTO;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f43f5e] via-[#ec4899] to-[#db2777] text-white flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden select-none">
      <div className="w-full max-w-4xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 items-center relative z-10 py-4 sm:py-8">
        <motion.div initial={{ rotate: 6, scale: 0.8, opacity: 0, y: -20 }} animate={{ rotate: 4, scale: 1, opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="w-full md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left order-1 md:order-2">
          <div className="relative bg-white p-3 sm:p-4 pb-10 sm:pb-12 rounded-xs shadow-2xl border border-stone-200 rotate-[3deg] md:rotate-[5deg] hover:rotate-0 transition-transform duration-300 w-60 sm:w-80 group cursor-pointer">
            <div className="relative w-full aspect-square overflow-hidden bg-stone-100 border border-stone-200">
              <img src={photoSrc} alt={data.recipientName || "Birthday portrait"} className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
        <div className="w-full md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left space-y-4 sm:space-y-5 order-2 md:order-1">
          <h1 className="font-[family-name:var(--font-handwriting)] text-5xl sm:text-7xl lg:text-8xl text-white font-bold tracking-tight leading-none drop-shadow-md">Birthday</h1>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────
   8. PARTY ANIMALS
   ──────────────────────────────────────────────────── */
function WhimsicalWishPage({ data }: WishPageProps) {
  const photoSrc = data.photoUrl || DEFAULT_DEMO_PHOTO;
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fef6ee] via-[#fdf2e9] to-[#fceddf] text-stone-900 flex flex-col items-center relative overflow-hidden">
      <div className="w-full max-w-2xl mx-auto px-4 py-12 flex flex-col items-center">
        <div className="relative mb-6 bg-white p-3 pb-8 rounded-sm shadow-2xl border border-stone-200 w-64 sm:w-72">
          <img src={photoSrc} alt={data.recipientName} className="w-full aspect-square object-cover" />
        </div>
        <h1 className="text-5xl sm:text-7xl font-serif font-bold text-orange-900 tracking-tight leading-none">{data.recipientName}!</h1>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────
   9. GARDEN ROSES
   ──────────────────────────────────────────────────── */
function ElegantWishPage({ data }: WishPageProps) {
  const photoSrc = data.photoUrl || DEFAULT_DEMO_PHOTO;
  return (
    <div className="min-h-screen bg-[#fdfaf6] text-stone-900 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="relative z-10 text-center max-w-lg px-6 py-16 flex flex-col items-center">
        <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6">
          <img src={photoSrc} alt={data.recipientName} className="w-full h-full object-cover" />
        </div>
        <h1 className="text-5xl sm:text-7xl font-serif font-bold text-rose-950 tracking-tight leading-none mb-4">{data.recipientName}</h1>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────
   10. NEON BASH
   ──────────────────────────────────────────────────── */
function NeonPartyWishPage({ data }: WishPageProps) {
  const photoSrc = data.photoUrl || DEFAULT_DEMO_PHOTO;
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white flex flex-col relative overflow-hidden">
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-6xl sm:text-8xl font-sans font-black tracking-tight leading-none bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">HAPPY BIRTHDAY</h1>
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white">{data.recipientName}!</h2>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────
   11. GOLDEN GLOW
   ──────────────────────────────────────────────────── */
function MinimalWishPage({ data }: WishPageProps) {
  const photoSrc = data.photoUrl || DEFAULT_DEMO_PHOTO;
  return (
    <div className="min-h-screen bg-[#f5f0e8] text-stone-900 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-xl mx-auto px-6 py-16 flex flex-col items-center">
        <div className="w-44 sm:w-52 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-2 border-stone-200 mb-8">
          <img src={photoSrc} alt={data.recipientName} className="w-full h-full object-cover" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-tight">{data.recipientName}</h1>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────
   12. NEW HEIGHTS
   ──────────────────────────────────────────────────── */
function AdventureWishPage({ data }: WishPageProps) {
  const photoSrc = data.photoUrl || DEFAULT_DEMO_PHOTO;
  return (
    <div className="min-h-screen text-white flex flex-col relative overflow-hidden">
      <div className="relative z-10 flex-1 flex flex-col items-center justify-end px-4 pb-16 pt-24">
        <h1 className="text-5xl sm:text-7xl font-serif font-bold text-white tracking-tight leading-none drop-shadow-lg">Happy Birthday, {data.recipientName}</h1>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────
   13. SWEET TREATS
   ──────────────────────────────────────────────────── */
function RetroFunWishPage({ data }: WishPageProps) {
  const photoSrc = data.photoUrl || DEFAULT_DEMO_PHOTO;
  return (
    <div className="min-h-screen bg-[#fef7ed] text-stone-900 flex flex-col items-center relative overflow-hidden">
      <div className="w-full max-w-2xl mx-auto px-4 py-12 flex flex-col items-center">
        <h1 className="text-5xl sm:text-7xl font-sans font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-600 to-cyan-500 tracking-tight leading-none">{data.recipientName}!</h1>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────
   WISH PAGE RENDERER
   ──────────────────────────────────────────────────── */
export function WishPageRenderer({ data }: { data: SimpleCardData }) {
  switch (data.designId) {
    case "space-astronaut":
      return <SpaceAstronautPage data={data} />;
    case "mermaid-magic":
      return <MermaidMagicPage data={data} />;
    case "festive-bunting":
      return <FestiveBuntingPage data={data} />;
    case "pressed-floral":
      return <PressedFloralPage data={data} />;
    case "y2k-digital-camera":
      return <Y2KDigitalCameraPage data={data} />;
    case "polaroid-collage":
      return <PolaroidCollagePage data={data} />;
    case "pink-cupcake-polaroid":
      return <PinkCupcakePolaroidPage data={data} />;
    case "elegant":
      return <ElegantWishPage data={data} />;
    case "neon-party":
      return <NeonPartyWishPage data={data} />;
    case "minimal":
      return <MinimalWishPage data={data} />;
    case "adventure":
      return <AdventureWishPage data={data} />;
    case "retro-fun":
      return <RetroFunWishPage data={data} />;
    case "whimsical":
    default:
      return <WhimsicalWishPage data={data} />;
  }
}
