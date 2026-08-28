"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  PartyPopper,
  Share2,
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  Heart,
  Palette,
  BookOpen,
  Maximize2,
  Minimize2,
  Star,
  Smile,
  Film,
} from "lucide-react";
import { WishStoryData, StorySlide } from "./types";
import { WishPageRenderer } from "../bday/WishPageRenderer";
import { ConfettiCanvas } from "../bday/ConfettiCanvas";
import { SimpleCardData, CardStyleId } from "../bday/types";

interface StoryPlayerProps {
  story: WishStoryData;
}

const SLIDE_DURATION_MS = 6500; // 6.5 seconds auto-advance

export type ThemeStyleId = "champagne" | "roseGold" | "sunset" | "cosmic";

interface ThemeStyle {
  id: ThemeStyleId;
  name: string;
  bgCanvas: string;
  orb1: string;
  orb2: string;
  cardBg: string;
  textColor: string;
  titleColor: string;
  subtextColor: string;
  accentColor: string;
  badgeBg: string;
  dockBg: string;
  borderColor: string;
  isDark: boolean;
}

const THEMES: Record<ThemeStyleId, ThemeStyle> = {
  champagne: {
    id: "champagne",
    name: "Champagne Silk ✨",
    bgCanvas: "from-amber-50/90 via-orange-50/60 to-rose-50/90",
    orb1: "bg-amber-300/30",
    orb2: "bg-rose-300/30",
    cardBg: "bg-white/80 backdrop-blur-xl shadow-[0_20px_70px_rgba(217,119,6,0.15)]",
    textColor: "text-stone-800",
    titleColor: "text-amber-950",
    subtextColor: "text-stone-600",
    accentColor: "text-amber-600",
    badgeBg: "bg-amber-100 border-amber-300 text-amber-900",
    dockBg: "bg-white/80 backdrop-blur-xl border-amber-200/60 shadow-2xl text-stone-800",
    borderColor: "border-amber-200/60",
    isDark: false,
  },
  roseGold: {
    id: "roseGold",
    name: "Rose Gold Velvet 🌸",
    bgCanvas: "from-pink-50/90 via-rose-100/50 to-amber-50/80",
    orb1: "bg-rose-400/25",
    orb2: "bg-pink-300/35",
    cardBg: "bg-white/85 backdrop-blur-xl shadow-[0_20px_70px_rgba(244,63,94,0.18)]",
    textColor: "text-stone-800",
    titleColor: "text-rose-950",
    subtextColor: "text-stone-600",
    accentColor: "text-rose-600",
    badgeBg: "bg-rose-100 border-rose-300 text-rose-900",
    dockBg: "bg-white/85 backdrop-blur-xl border-rose-200/70 shadow-2xl text-stone-800",
    borderColor: "border-rose-200/70",
    isDark: false,
  },
  sunset: {
    id: "sunset",
    name: "Sunset Horizon 🌅",
    bgCanvas: "from-amber-100/80 via-rose-200/60 to-purple-200/80",
    orb1: "bg-orange-400/30",
    orb2: "bg-purple-400/30",
    cardBg: "bg-white/85 backdrop-blur-xl shadow-[0_20px_70px_rgba(168,85,247,0.2)]",
    textColor: "text-stone-900",
    titleColor: "text-purple-950",
    subtextColor: "text-stone-700",
    accentColor: "text-purple-700",
    badgeBg: "bg-purple-100 border-purple-300 text-purple-900",
    dockBg: "bg-white/85 backdrop-blur-xl border-purple-200/70 shadow-2xl text-stone-900",
    borderColor: "border-purple-200/70",
    isDark: false,
  },
  cosmic: {
    id: "cosmic",
    name: "Cosmic Aurora 🌌",
    bgCanvas: "from-slate-950 via-indigo-950/80 to-purple-950",
    orb1: "bg-violet-600/30",
    orb2: "bg-cyan-500/25",
    cardBg: "bg-slate-900/80 backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.7)]",
    textColor: "text-slate-100",
    titleColor: "text-white",
    subtextColor: "text-slate-300",
    accentColor: "text-cyan-400",
    badgeBg: "bg-cyan-500/20 border-cyan-400/40 text-cyan-300",
    dockBg: "bg-slate-900/85 backdrop-blur-xl border-slate-700/80 shadow-2xl text-white",
    borderColor: "border-slate-700/80",
    isDark: true,
  },
};

export function StoryPlayer({ story }: StoryPlayerProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(-1); // -1 = Cover
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeThemeId, setActiveThemeId] = useState<ThemeStyleId>("champagne");
  const [direction, setDirection] = useState<1 | -1>(1);
  const [confettiTrigger, setConfettiTrigger] = useState(0);
  const [progress, setProgress] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [reactions, setReactions] = useState<{ id: number; emoji: string; x: number }[]>([]);
  const [showThemePicker, setShowThemePicker] = useState(false);

  const touchStartX = useRef<number | null>(null);

  const totalSlides = story.slides.length;
  const isFinale = currentSlideIndex === totalSlides;
  const isCover = currentSlideIndex === -1;
  const currentSlide: StorySlide | undefined = story.slides[currentSlideIndex];
  const theme = THEMES[activeThemeId];

  // Synthesize Web Audio chime
  const playSlideAudio = (tone: string = "happy") => {
    if (isMuted || typeof window === "undefined") return;
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === "suspended") ctx.resume();

      const now = ctx.currentTime;
      const baseFreqs =
        tone === "fanfare"
          ? [523.25, 659.25, 783.99, 1046.5]
          : tone === "soft"
          ? [440.0, 554.37, 659.25]
          : tone === "pop"
          ? [587.33, 739.99, 880.0]
          : [523.25, 659.25, 783.99, 880.0, 1046.5];

      baseFreqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.001, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.12, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.7);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.8);
      });
    } catch {
      // Audio fallback
    }
  };

  // Auto-advance progress timer
  useEffect(() => {
    if (isPaused || isFinale || isCover) return;

    setProgress(0);
    const intervalMs = 50;
    const increment = (intervalMs / SLIDE_DURATION_MS) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          nextSlide();
          return 100;
        }
        return prev + increment;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [currentSlideIndex, isPaused, isFinale, isCover]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      else if (e.key === "ArrowLeft") prevSlide();
      else if (e.key === " ") {
        e.preventDefault();
        setIsPaused((p) => !p);
      } else if (e.key === "m" || e.key === "M") {
        setIsMuted((m) => !m);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlideIndex, totalSlides]);

  const nextSlide = () => {
    if (currentSlideIndex < totalSlides) {
      setDirection(1);
      const nextIdx = currentSlideIndex + 1;
      setCurrentSlideIndex(nextIdx);
      if (nextIdx === totalSlides) {
        setConfettiTrigger((k) => k + 1);
        playSlideAudio("fanfare");
      } else {
        const tone = story.slides[nextIdx]?.audioTone || "happy";
        playSlideAudio(tone);
      }
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > -1) {
      setDirection(-1);
      const prevIdx = currentSlideIndex - 1;
      setCurrentSlideIndex(prevIdx);
      if (prevIdx >= 0) {
        const tone = story.slides[prevIdx]?.audioTone || "happy";
        playSlideAudio(tone);
      }
    }
  };

  const jumpToSlide = (idx: number) => {
    setDirection(idx > currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(idx);
    if (idx >= 0 && idx < totalSlides) {
      playSlideAudio(story.slides[idx]?.audioTone || "happy");
    }
  };

  const startStory = () => {
    setDirection(1);
    setCurrentSlideIndex(0);
    playSlideAudio("happy");
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  const addReaction = (emoji: string) => {
    const id = Date.now();
    const x = Math.random() * 80 + 10;
    setReactions((prev) => [...prev, { id, emoji, x }]);
    setTimeout(() => {
      setReactions((prev) => prev.filter((r) => r.id !== id));
    }, 2000);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Finale card data
  const finalCardData: SimpleCardData = {
    recipientName: story.recipientName,
    message: story.finalWishMessage,
    senderName: story.senderName,
    designId: (story.designId as CardStyleId) || "y2k-digital-camera",
    photoUrl: story.finalPhotos?.[0] || story.coverImage,
    photos: story.finalPhotos || [story.coverImage],
  };

  return (
    <main className="min-h-screen w-full relative flex flex-col items-center justify-between overflow-hidden select-none font-sans transition-colors duration-1000">
      <ConfettiCanvas triggerKey={confettiTrigger} count={120} />

      {/* ── RICH VIBRANT BACKDROP CANVAS ── */}
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.bgCanvas} transition-colors duration-1000`} />

      {/* Floating Animated Ambient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-80">
        <motion.div
          animate={{
            x: [0, 90, -70, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-10 left-10 w-[30rem] h-[30rem] rounded-full blur-[140px] ${theme.orb1}`}
        />
        <motion.div
          animate={{
            x: [0, -110, 80, 0],
            y: [0, 90, -90, 0],
            scale: [1, 1.2, 1.4, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute bottom-10 right-10 w-[36rem] h-[36rem] rounded-full blur-[160px] ${theme.orb2}`}
        />
      </div>

      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#000000_0.4px,transparent_0.4px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

      {/* ── FLOATING REACTION EMOJIS ANIMATION CANVAS ── */}
      <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
        {reactions.map((r) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 1, y: "80vh", scale: 0.8 }}
            animate={{ opacity: 0, y: "20vh", scale: 1.5, x: `${r.x - 50}px` }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute text-4xl"
            style={{ left: `${r.x}%` }}
          >
            {r.emoji}
          </motion.div>
        ))}
      </div>

      {/* ── TOP HEADER / BRAND BAR ── */}
      <header className="relative z-30 w-full max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/bday"
            className={`p-2 rounded-2xl ${theme.cardBg} border ${theme.borderColor} ${theme.textColor} hover:scale-105 transition-all shadow-xs flex items-center gap-1.5 text-xs font-semibold`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Studio</span>
          </Link>

          {/* 3-Way Template Switcher */}
          <div className={`flex items-center gap-1 p-1 rounded-2xl ${theme.cardBg} border ${theme.borderColor} shadow-xs text-xs font-mono font-bold`}>
            <div className="px-2.5 py-1 rounded-xl bg-gradient-to-r from-amber-400 to-rose-500 text-white shadow-xs flex items-center gap-1" title="Template 1: Scrapbook Deck">
              <BookOpen className="w-3.5 h-3.5" />
              <span>1</span>
            </div>
            <Link
              href={`/story2/${story.id}`}
              className="px-2.5 py-1 rounded-xl text-stone-600 hover:bg-black/5 transition-colors flex items-center gap-1"
              title="Template 2: Retro 3D Fold"
            >
              <Film className="w-3.5 h-3.5" />
              <span>2</span>
            </Link>
            <Link
              href={`/story3/${story.id}`}
              className="px-2.5 py-1 rounded-xl text-stone-600 hover:bg-black/5 transition-colors flex items-center gap-1"
              title="Template 3: Light Insta Story"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>3</span>
            </Link>
          </div>
        </div>

        {/* Right Header Utilities: Theme Switcher & Mute */}
        <div className="flex items-center gap-2.5">
          {/* Theme Dropdown Toggle */}
          <div className="relative">
            <button
              onClick={() => setShowThemePicker(!showThemePicker)}
              className={`p-2.5 rounded-2xl ${theme.cardBg} border ${theme.borderColor} ${theme.textColor} hover:scale-105 transition-all shadow-sm flex items-center gap-2 text-xs font-semibold cursor-pointer`}
              title="Change Theme Palette"
            >
              <Palette className={`w-4 h-4 ${theme.accentColor}`} />
              <span className="hidden sm:inline font-mono">{theme.name}</span>
            </button>

            {showThemePicker && (
              <div className={`absolute right-0 top-12 w-52 p-2 rounded-2xl ${theme.cardBg} border ${theme.borderColor} shadow-2xl z-50 space-y-1`}>
                {(Object.keys(THEMES) as ThemeStyleId[]).map((tKey) => {
                  const tOption = THEMES[tKey];
                  return (
                    <button
                      key={tKey}
                      onClick={() => {
                        setActiveThemeId(tKey);
                        setShowThemePicker(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                        activeThemeId === tKey
                          ? "bg-amber-400/20 text-amber-900 font-bold border border-amber-300/40"
                          : `${theme.textColor} hover:bg-black/5`
                      }`}
                    >
                      <span>{tOption.name}</span>
                      {activeThemeId === tKey && <Sparkles className="w-3.5 h-3.5 text-amber-500" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`p-2.5 rounded-2xl ${theme.cardBg} border ${theme.borderColor} ${theme.textColor} hover:scale-105 transition-all shadow-sm cursor-pointer`}
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-stone-400" /> : <Volume2 className={`w-4 h-4 ${theme.accentColor}`} />}
          </button>
        </div>
      </header>

      {/* ── 0. COVER SLIDE: LUXURY SCRAPBOOK INVITATION ── */}
      {isCover && (
        <div className="relative z-20 my-auto w-full max-w-3xl px-4 py-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`w-full p-8 sm:p-12 rounded-3xl ${theme.cardBg} border ${theme.borderColor} shadow-2xl relative overflow-hidden flex flex-col items-center text-center space-y-8`}
          >
            {/* Washi Tape Accent */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-amber-200/60 backdrop-blur-md border border-amber-300/60 rounded-md transform -rotate-1 shadow-sm" />

            {/* Glowing Center Photo Frame */}
            <div className="relative group">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-amber-400 via-rose-400 to-purple-500 opacity-50 blur-lg group-hover:opacity-80 transition-opacity" />
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={story.coverImage}
                  alt={story.recipientName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-3 max-w-lg">
              <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest border ${theme.badgeBg}`}>
                {story.coverTitle || "Birthday Scrapbook Story"}
              </span>
              <h1 className={`text-4xl sm:text-6xl font-serif font-extrabold tracking-tight ${theme.titleColor}`}>
                {story.recipientName}
              </h1>
              <p className={`text-sm sm:text-base font-sans leading-relaxed ${theme.subtextColor}`}>
                {story.coverSubtitle}
              </p>
            </div>

            {/* Start CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startStory}
              className="py-4 px-10 rounded-2xl bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600 text-white font-bold text-sm uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 cursor-pointer transition-all border border-white/30"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Open Memory Book</span>
            </motion.button>

            <div className={`text-xs font-mono ${theme.subtextColor} pt-4 border-t w-full ${theme.borderColor}`}>
              Created with love by <span className={`font-bold ${theme.titleColor}`}>{story.senderName}</span>
            </div>
          </motion.div>
        </div>
      )}

      {/* ── 1. ACTIVE STORY SCRAPBOOK SLIDE STAGE ── */}
      {!isCover && !isFinale && (
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative z-20 my-auto w-full max-w-5xl px-4 py-4 flex flex-col items-center"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlideIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction * -40, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`w-full p-6 sm:p-10 rounded-3xl ${theme.cardBg} border ${theme.borderColor} shadow-2xl relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden`}
            >
              {/* Decorative Corner Stamp Badge */}
              <div className="absolute top-4 right-4 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/5 border border-black/10 text-[11px] font-mono font-bold text-stone-500">
                <span>STAMP: {currentSlide?.dateTag || `CHAPTER ${currentSlideIndex + 1}`}</span>
              </div>

              {/* LEFT / TOP STAGE: 3D POLAROID PHOTO FRAME */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-[4/3] group perspective-1000">
                  {/* Brass Paperclip Accent */}
                  <div className="absolute -top-4 left-8 w-6 h-10 bg-amber-400/80 border border-amber-600 rounded-full z-30 shadow-md transform -rotate-12" />

                  {/* Washi Tape Accent */}
                  <div className="absolute -top-3 right-10 w-24 h-6 bg-rose-200/70 border border-rose-300/80 rounded-sm z-30 shadow-xs transform rotate-6" />

                  {/* Main Photo Card with Vaulted Arch Cutout & Metallic Accent */}
                  <motion.div
                    whileHover={{ scale: 1.04, rotate: 1, rotateY: 5 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full p-4 bg-white/95 rounded-[2rem] shadow-2xl border-2 border-stone-200 flex flex-col relative"
                  >
                    {/* Metallic Ribbon Trim */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 text-[10px] font-mono font-bold text-amber-950 shadow-xs uppercase tracking-wider">
                      {currentSlide?.dateTag || "MEMORIES"}
                    </div>

                    <div className="w-full flex-1 rounded-t-[3.5rem] rounded-b-2xl overflow-hidden relative bg-stone-100 border border-stone-200 mt-5">
                      <img
                        src={currentSlide?.images[0] || story.coverImage}
                        alt={currentSlide?.title}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                      />
                    </div>
                    <div className="pt-2.5 text-center text-xs font-serif italic text-stone-600 font-semibold">
                      ✨ {story.recipientName} ✨
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* RIGHT / BOTTOM STAGE: STORYBOOK NARRATIVE PANEL */}
              <div className="lg:col-span-6 flex flex-col justify-center space-y-5 text-left">
                <div className="space-y-2">
                  {currentSlide?.badge && (
                    <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider border ${theme.badgeBg}`}>
                      {currentSlide.badge}
                    </span>
                  )}
                  <h2 className={`text-2xl sm:text-3xl font-serif font-extrabold leading-tight ${theme.titleColor}`}>
                    {currentSlide?.title}
                  </h2>
                </div>

                {/* Quotation Frame */}
                <div className="relative pl-6 border-l-4 border-amber-400/60 space-y-2">
                  <p className={`text-base sm:text-lg font-serif italic leading-relaxed ${theme.textColor}`}>
                    &ldquo;{currentSlide?.caption}&rdquo;
                  </p>
                </div>

                {/* Interactive Reactions Bar */}
                <div className={`pt-4 border-t ${theme.borderColor} flex items-center justify-between`}>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-mono ${theme.subtextColor}`}>Send Love:</span>
                    <button
                      onClick={() => addReaction("💖")}
                      className="p-2 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-pink-600 transition-all hover:scale-110 cursor-pointer"
                      title="Send Hearts"
                    >
                      💖
                    </button>
                    <button
                      onClick={() => addReaction("✨")}
                      className="p-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 transition-all hover:scale-110 cursor-pointer"
                      title="Send Sparkles"
                    >
                      ✨
                    </button>
                    <button
                      onClick={() => addReaction("🎉")}
                      className="p-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 transition-all hover:scale-110 cursor-pointer"
                      title="Send Party Popper"
                    >
                      🎉
                    </button>
                  </div>

                  <span className={`text-xs font-mono ${theme.subtextColor}`}>
                    Chapter {currentSlideIndex + 1} / {totalSlides}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* ── 2. FINALE: GRAND WISH CARD RENDERER ── */}
      {isFinale && (
        <div className="relative z-20 my-auto w-full min-h-screen flex flex-col bg-amber-50/80">
          <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-6 py-3 border-b border-amber-200 flex items-center justify-between text-stone-900">
            <button
              onClick={() => jumpToSlide(0)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-xs font-semibold text-amber-900 transition-all cursor-pointer border border-amber-300"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Replay Memory Book</span>
            </button>

            <span className="text-xs font-mono text-stone-800 font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500 animate-spin" /> Birthday Wish Finale
            </span>

            <Link
              href="/bday"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-rose-500 text-stone-950 text-xs font-bold transition-all shadow-md hover:brightness-110"
            >
              Create Wish
            </Link>
          </div>

          <WishPageRenderer data={finalCardData} />
        </div>
      )}

      {/* ── FLOATING CURVED CONTROL DOCK AT BOTTOM ── */}
      {!isFinale && (
        <footer className="relative z-30 w-full max-w-4xl px-4 pb-6">
          <div className={`w-full p-3 rounded-3xl ${theme.dockBg} flex items-center justify-between gap-4 shadow-2xl`}>
            {/* Left: Prev / Next Side Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                disabled={currentSlideIndex <= -1}
                className="p-2.5 rounded-2xl hover:bg-black/10 transition-all disabled:opacity-30 cursor-pointer"
                title="Previous Chapter"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Circular Timer Play Button */}
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="relative p-3 rounded-2xl bg-amber-400 text-stone-950 hover:scale-105 transition-all shadow-md cursor-pointer flex items-center justify-center"
                title={isPaused ? "Play Auto-advance" : "Pause"}
              >
                {/* SVG Progress Ring */}
                {!isPaused && !isCover && (
                  <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 36 36">
                    <path
                      className="text-stone-950/20"
                      strokeWidth="3"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-stone-950"
                      strokeDasharray={`${progress}, 100`}
                      strokeWidth="3"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                )}
                {isPaused ? <Play className="w-4 h-4 fill-stone-950" /> : <Pause className="w-4 h-4 fill-stone-950" />}
              </button>

              <button
                onClick={nextSlide}
                className="p-2.5 rounded-2xl hover:bg-black/10 transition-all cursor-pointer"
                title="Next Chapter"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Center: Interactive Chapter Thumbnail Filmstrip */}
            <div className="hidden sm:flex items-center gap-2 overflow-x-auto px-2 py-1 max-w-md">
              {story.slides.map((slide, idx) => {
                const isActive = idx === currentSlideIndex;
                return (
                  <button
                    key={slide.id || idx}
                    onClick={() => jumpToSlide(idx)}
                    className={`relative w-10 h-10 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                      isActive ? "border-amber-500 scale-110 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                    title={slide.title}
                  >
                    <img
                      src={slide.images[0] || story.coverImage}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
              {/* Finale Thumbnail */}
              <button
                onClick={() => jumpToSlide(totalSlides)}
                className={`relative w-10 h-10 rounded-xl bg-gradient-to-r from-amber-400 to-rose-500 flex items-center justify-center text-white border-2 transition-all flex-shrink-0 cursor-pointer ${
                  isFinale ? "border-amber-500 scale-110 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                }`}
                title="Finale Wish Card"
              >
                <Sparkles className="w-4 h-4" />
              </button>
            </div>

            {/* Right: Share Button */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="px-3.5 py-2 rounded-2xl bg-black/5 hover:bg-black/10 transition-all text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{copiedLink ? "Copied! ✨" : "Share"}</span>
              </button>
            </div>
          </div>
        </footer>
      )}
    </main>
  );
}
