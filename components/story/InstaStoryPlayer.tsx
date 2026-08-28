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
  Share2,
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  Camera,
  BookOpen,
  Film,
} from "lucide-react";
import { WishStoryData, StorySlide } from "./types";
import { WishPageRenderer } from "../bday/WishPageRenderer";
import { ConfettiCanvas } from "../bday/ConfettiCanvas";
import { SimpleCardData, CardStyleId } from "../bday/types";

interface InstaStoryPlayerProps {
  story: WishStoryData;
}

const SLIDE_DURATION_MS = 6000; // 6 seconds per slide

export function InstaStoryPlayer({ story }: InstaStoryPlayerProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(-1); // -1 = Cover
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [confettiTrigger, setConfettiTrigger] = useState(0);
  const [progress, setProgress] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const touchStartX = useRef<number | null>(null);

  const totalSlides = story.slides.length;
  const isFinale = currentSlideIndex === totalSlides;
  const isCover = currentSlideIndex === -1;
  const currentSlide: StorySlide | undefined = story.slides[currentSlideIndex];

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

  // Timer & progress bar logic
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

  // Keyboard shortcuts
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
    <main className="min-h-screen bg-gradient-to-br from-amber-100/90 via-pink-100/80 to-purple-200/90 text-stone-900 flex flex-col items-center justify-between relative overflow-hidden select-none font-sans">
      <ConfettiCanvas triggerKey={confettiTrigger} count={120} />

      {/* Floating Light Ambient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
        <motion.div
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-96 h-96 rounded-full bg-pink-300/40 blur-[110px]"
        />
        <motion.div
          animate={{
            x: [0, -90, 70, 0],
            y: [0, 90, -80, 0],
            scale: [1, 1.15, 1.3, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-[30rem] h-[30rem] rounded-full bg-purple-300/40 blur-[130px]"
        />
      </div>

      {/* TOP HEADER: BRAND + 3-WAY TEMPLATE SWITCHER */}
      <header className="relative z-30 w-full max-w-xl px-4 pt-4 flex items-center justify-between">
        <Link
          href="/bday"
          className="p-2 rounded-2xl bg-white/80 backdrop-blur-md border border-white/80 text-stone-800 hover:scale-105 transition-all shadow-xs flex items-center gap-1.5 text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Studio</span>
        </Link>

        {/* 3-Way Template Selector Pill */}
        <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/80 backdrop-blur-md border border-white/80 shadow-sm text-xs font-mono font-bold">
          <Link
            href={`/story/${story.id}`}
            className="px-2.5 py-1 rounded-xl text-stone-600 hover:bg-stone-100 transition-colors flex items-center gap-1"
            title="Template 1: Scrapbook Deck"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>1</span>
          </Link>
          <Link
            href={`/story2/${story.id}`}
            className="px-2.5 py-1 rounded-xl text-stone-600 hover:bg-stone-100 transition-colors flex items-center gap-1"
            title="Template 2: Retro Fold"
          >
            <Film className="w-3.5 h-3.5" />
            <span>2</span>
          </Link>
          <div
            className="px-2.5 py-1 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-xs flex items-center gap-1"
            title="Template 3: Light Insta Story"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>3</span>
          </div>
        </div>
      </header>

      {/* ── 0. COVER SLIDE ── */}
      {isCover && (
        <div className="relative z-20 my-auto w-full max-w-md p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-white/80 shadow-2xl flex flex-col items-center text-center space-y-6"
          >
            {/* Glowing Avatar */}
            <div className="relative group">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600 opacity-60 blur-md group-hover:opacity-90 transition-opacity" />
              <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={story.coverImage}
                  alt={story.recipientName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full bg-rose-100 text-rose-800 font-mono text-xs font-bold border border-rose-200">
                Light Insta Story
              </span>
              <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-stone-900 tracking-tight">
                {story.recipientName}!
              </h1>
              <p className="text-xs sm:text-sm font-sans text-stone-600 leading-relaxed px-2">
                {story.coverSubtitle}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={startStory}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600 text-white font-bold text-xs uppercase tracking-widest shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Open Insta Story</span>
            </motion.button>

            <div className="text-[11px] font-mono text-stone-500 pt-3 border-t border-stone-200 w-full">
              Created with love by <span className="font-bold text-stone-800">{story.senderName}</span>
            </div>
          </motion.div>
        </div>
      )}

      {/* ── 1. ACTIVE LIGHT INSTA STORY VIEWER ── */}
      {!isCover && !isFinale && (
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative z-20 my-auto w-full max-w-md sm:h-[780px] h-screen sm:rounded-3xl p-5 flex flex-col justify-between bg-white/85 backdrop-blur-xl border border-white/80 shadow-2xl overflow-hidden"
        >
          {/* TOP PROGRESS CAPSULES & USER BAR */}
          <div className="relative z-30 space-y-3 pt-1">
            {/* Segmented Progress Capsules */}
            <div className="flex gap-1.5 px-1">
              {story.slides.map((_, idx) => {
                let fillPercent = 0;
                if (idx < currentSlideIndex) fillPercent = 100;
                else if (idx === currentSlideIndex) fillPercent = progress;

                return (
                  <button
                    key={idx}
                    onClick={() => jumpToSlide(idx)}
                    className="flex-1 h-1.5 rounded-full bg-stone-200 overflow-hidden cursor-pointer"
                  >
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-rose-500 transition-all duration-75"
                      style={{ width: `${fillPercent}%` }}
                    />
                  </button>
                );
              })}
              {/* Finale Segment */}
              <button
                onClick={() => jumpToSlide(totalSlides)}
                className="w-8 h-1.5 rounded-full bg-amber-200 overflow-hidden cursor-pointer"
              >
                <div
                  className="h-full bg-amber-500 transition-all duration-75"
                  style={{ width: `${isFinale ? 100 : 0}%` }}
                />
              </button>
            </div>

            {/* User Info Bar */}
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-rose-400 shadow-xs">
                  <img src={story.coverImage} alt={story.recipientName} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-900 block leading-tight">
                    {story.recipientName}
                  </span>
                  <span className="text-[10px] text-stone-500 font-mono">
                    {currentSlide?.dateTag || `Slide ${currentSlideIndex + 1}`}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 transition-all cursor-pointer"
                  title={isPaused ? "Play" : "Pause"}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5 fill-stone-800" /> : <Pause className="w-3.5 h-3.5 fill-stone-800" />}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 transition-all cursor-pointer"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5 text-stone-400" /> : <Volume2 className="w-3.5 h-3.5 text-rose-500" />}
                </button>
              </div>
            </div>
          </div>

          {/* TAP CONTROLS (LEFT 30% / RIGHT 70%) */}
          <div className="absolute inset-0 z-20 flex">
            <div
              onClick={prevSlide}
              className="w-1/3 h-full cursor-pointer active:bg-black/5 transition-colors"
            />
            <div
              onClick={nextSlide}
              className="w-2/3 h-full cursor-pointer active:bg-black/5 transition-colors"
            />
          </div>

          {/* SLIDE CONTENT STAGE */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlideIndex}
              custom={direction}
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -15 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 flex flex-col justify-center items-center text-center my-auto py-4 space-y-5 pointer-events-none"
            >
              {/* Photo Frame */}
              <div className="w-full max-w-xs px-2 flex justify-center items-center">
                <motion.div
                  initial={{ scale: 0.9, rotate: -2 }}
                  animate={{ scale: 1, rotate: 1 }}
                  className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-stone-100"
                >
                  <img
                    src={currentSlide?.images[0] || story.coverImage}
                    alt={currentSlide?.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Title & Caption */}
              <div className="space-y-2 px-3">
                {currentSlide?.badge && (
                  <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-900 font-mono text-[11px] font-bold uppercase tracking-wider border border-rose-200">
                    {currentSlide.badge}
                  </span>
                )}

                <h3 className="text-xl font-serif font-extrabold text-stone-900">
                  {currentSlide?.title}
                </h3>

                <p className="text-sm font-serif italic text-stone-700 leading-relaxed">
                  &ldquo;{currentSlide?.caption}&rdquo;
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* BOTTOM CONTROLS FOOTER */}
          <div className="relative z-30 flex items-center justify-between pt-2 border-t border-stone-200 text-xs text-stone-500 font-mono">
            <button
              onClick={prevSlide}
              className="flex items-center gap-1 hover:text-stone-900 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>

            <span>
              {currentSlideIndex + 1} / {totalSlides}
            </span>

            <button
              onClick={nextSlide}
              className="flex items-center gap-1 text-rose-600 hover:text-rose-700 font-bold cursor-pointer"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ── 2. FINALE WISH PAGE ── */}
      {isFinale && (
        <div className="relative z-20 w-full min-h-screen bg-rose-50/90 flex flex-col">
          <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-6 py-3 border-b border-stone-200 flex items-center justify-between text-stone-900">
            <button
              onClick={() => jumpToSlide(0)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-rose-700 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Replay Story</span>
            </button>

            <span className="text-xs font-mono text-stone-700 font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" /> Birthday Wish Finale
            </span>

            <Link
              href="/bday"
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-rose-500 text-stone-950 text-xs font-bold"
            >
              Create Wish
            </Link>
          </div>

          <WishPageRenderer data={finalCardData} />
        </div>
      )}
    </main>
  );
}
