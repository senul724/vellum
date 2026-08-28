"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  VolumeX,
  Sparkles,
  ArrowLeft,
  Disc,
  Play,
  Pause,
  RotateCcw,
  Share2,
  Film,
  Camera,
  ChevronDown,
  ChevronUp,
  BookOpen,
} from "lucide-react";
import { WishStoryData } from "./types";
import { WishPageRenderer } from "../bday/WishPageRenderer";
import { ConfettiCanvas } from "../bday/ConfettiCanvas";
import { SimpleCardData, CardStyleId } from "../bday/types";

interface RetroScrollStoryPlayerProps {
  story: WishStoryData;
}

export function RetroScrollStoryPlayer({ story }: RetroScrollStoryPlayerProps) {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [confettiTrigger, setConfettiTrigger] = useState(0);
  const [activeSection, setActiveSection] = useState(0); // 0 = Cover, 1..N = Slides, N+1 = Finale
  const [direction, setDirection] = useState<1 | -1>(1);

  const totalSlides = story.slides.length;
  const totalSections = totalSlides + 2; // Cover + Slides + Finale
  const isFinale = activeSection === totalSections - 1;
  const isCover = activeSection === 0;

  // Audio Context synth for background music and chime sound
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const playPaperFoldSound = () => {
    if (isMuted || typeof window === "undefined") return;
    try {
      if (!audioCtxRef.current) {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(360, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.1);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.07, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.13);
    } catch {
      // Audio fallback
    }
  };

  const startLoFiMusic = () => {
    if (isMuted || typeof window === "undefined") return;
    try {
      if (!audioCtxRef.current) {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();

      const melodyNotes = [329.63, 392.0, 440.0, 523.25, 587.33, 659.25, 783.99];
      let step = 0;

      if (timerRef.current) clearInterval(timerRef.current);

      timerRef.current = setInterval(() => {
        if (ctx.state !== "running") return;
        const now = ctx.currentTime;
        const freq = melodyNotes[step % melodyNotes.length];
        step++;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.06, now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.1);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.2);
      }, 700);

      setIsPlayingMusic(true);
    } catch {
      // Audio fallback
    }
  };

  const stopLoFiMusic = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsPlayingMusic(false);
  };

  const toggleMusic = () => {
    if (isPlayingMusic) {
      stopLoFiMusic();
    } else {
      startLoFiMusic();
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goToSection = (nextIdx: number) => {
    if (nextIdx < 0 || nextIdx >= totalSections || nextIdx === activeSection) return;
    setDirection(nextIdx > activeSection ? 1 : -1);
    setActiveSection(nextIdx);
    playPaperFoldSound();

    if (nextIdx === totalSections - 1) {
      setConfettiTrigger((k) => k + 1);
    }
  };

  // Fluid wheel scroll listener with responsive 350ms debounce
  const isScrollingRef = useRef(false);
  const handleWheel = (e: React.WheelEvent) => {
    if (isScrollingRef.current) return;
    if (Math.abs(e.deltaY) > 20) {
      isScrollingRef.current = true;
      if (e.deltaY > 0 && activeSection < totalSections - 1) {
        goToSection(activeSection + 1);
      } else if (e.deltaY < 0 && activeSection > 0) {
        goToSection(activeSection - 1);
      }
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 400);
    }
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
    <div
      onWheel={handleWheel}
      className="h-screen w-full bg-[#ede4d5] text-stone-900 font-serif relative overflow-hidden select-none"
    >
      <ConfettiCanvas triggerKey={confettiTrigger} count={120} />

      {/* RETRO GRAIN OVERLAY */}
      <div className="fixed inset-0 bg-[radial-gradient(#000000_0.75px,transparent_0.75px)] [background-size:22px_22px] opacity-[0.06] pointer-events-none z-40" />

      {/* STICKY TOP RETRO HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-3 bg-[#ede4d5]/90 backdrop-blur-md border-b-2 border-stone-800 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <Link
            href="/bday"
            className="p-2 rounded-xl bg-stone-200 border border-stone-400 text-stone-800 hover:bg-stone-300 transition-all text-xs font-mono font-bold flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Studio</span>
          </Link>

          {/* 3-Way Template Switcher */}
          <div className="flex items-center gap-1 p-1 rounded-2xl bg-stone-200/80 border border-stone-400 shadow-xs text-xs font-mono font-bold">
            <Link
              href={`/story/${story.id}`}
              className="px-2.5 py-1 rounded-xl text-stone-700 hover:bg-stone-300 transition-colors flex items-center gap-1"
              title="Template 1: Scrapbook Deck"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>1</span>
            </Link>
            <div className="px-2.5 py-1 rounded-xl bg-stone-900 text-amber-300 shadow-xs flex items-center gap-1" title="Template 2: Retro 3D Fold">
              <Film className="w-3.5 h-3.5" />
              <span>2</span>
            </div>
            <Link
              href={`/story3/${story.id}`}
              className="px-2.5 py-1 rounded-xl text-stone-700 hover:bg-stone-300 transition-colors flex items-center gap-1"
              title="Template 3: Light Insta Story"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>3</span>
            </Link>
          </div>
        </div>

        {/* Cassette Tape Music Player Widget */}
        <div className="flex items-center gap-3">
          <div
            onClick={toggleMusic}
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-2xl bg-stone-900 text-stone-100 border border-stone-700 cursor-pointer shadow-md hover:scale-103 transition-transform"
          >
            <div className="flex items-center gap-1">
              <motion.div
                animate={{ rotate: isPlayingMusic ? 360 : 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Disc className={`w-4 h-4 ${isPlayingMusic ? "text-amber-400" : "text-stone-400"}`} />
              </motion.div>
              <span className="text-[10px] font-mono text-stone-400">TAPE-01</span>
              <motion.div
                animate={{ rotate: isPlayingMusic ? 360 : 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Disc className={`w-4 h-4 ${isPlayingMusic ? "text-amber-400" : "text-stone-400"}`} />
              </motion.div>
            </div>

            <button className="text-amber-400 text-xs font-mono font-bold flex items-center gap-1">
              {isPlayingMusic ? <Pause className="w-3.5 h-3.5 fill-amber-400" /> : <Play className="w-3.5 h-3.5 fill-amber-400" />}
              <span className="hidden sm:inline">{isPlayingMusic ? "Playing" : "Lo-Fi Audio"}</span>
            </button>
          </div>

          <button
            onClick={handleShare}
            className="p-2 rounded-xl bg-stone-200 border border-stone-400 text-stone-800 hover:bg-stone-300 transition-all text-xs font-mono font-bold"
            title="Share Story"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* RIGHT SIDE FOLD STEP INDICATORS */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2 p-2 rounded-full bg-stone-900/10 backdrop-blur-md border border-stone-400">
        {Array.from({ length: totalSections }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSection(i)}
            className={`w-3.5 h-3.5 rounded-full transition-all cursor-pointer ${
              activeSection === i ? "bg-amber-700 scale-125 shadow-md" : "bg-stone-400 hover:bg-stone-600"
            }`}
            title={`Fold to section ${i}`}
          />
        ))}
      </div>

      {/* ── SILKY SMOOTH 3D PERSPECTIVE UNFOLD STAGE ── */}
      <div className="w-full h-full pt-16 flex items-center justify-center [perspective:1200px] [transform-style:preserve-3d]">
        <AnimatePresence mode="popLayout" custom={direction}>
          {/* SECTION 0: COVER SLIDE */}
          {isCover && (
            <motion.div
              key="fold-cover"
              custom={direction}
              initial={{
                rotateX: direction * 35,
                y: direction * 40,
                scale: 0.94,
                opacity: 0,
              }}
              animate={{
                rotateX: 0,
                y: 0,
                scale: 1,
                opacity: 1,
              }}
              exit={{
                rotateX: direction * -35,
                y: direction * -40,
                scale: 0.94,
                opacity: 0,
              }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier easeOutQuint
              }}
              className="w-full max-w-3xl px-4 py-6"
            >
              <div className="w-full p-8 sm:p-12 rounded-[2.5rem] bg-[#fbf7ee] border-4 border-stone-800 shadow-[14px_14px_0px_rgba(44,36,32,0.9)] relative overflow-hidden flex flex-col items-center text-center space-y-6">
                {/* Gold Foil Wax Seal Badge */}
                <div className="absolute top-4 right-6 w-14 h-14 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-500 border-2 border-amber-800 shadow-md flex items-center justify-center font-bold text-amber-950 text-xs font-mono transform rotate-12">
                  <span>99★</span>
                </div>

                {/* Metallic Brass Corner Braces */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-4 border-l-4 border-amber-600" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-4 border-l-4 border-amber-600" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-4 border-r-4 border-amber-600" />

                {/* 35mm VINTAGE FILM SLIDE PHOTO FRAME */}
                <div className="relative group max-w-sm mx-auto w-full p-4 bg-stone-900 border-4 border-stone-800 rounded-2xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="flex justify-between px-2 pb-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="w-3.5 h-2.5 bg-stone-200/80 rounded-xs" />
                    ))}
                  </div>

                  <div className="w-full aspect-[4/3] rounded-t-[3rem] rounded-b-xl overflow-hidden bg-stone-800 border-2 border-stone-700">
                    <img
                      src={story.coverImage}
                      alt={story.recipientName}
                      className="w-full h-full object-cover filter sepia-[0.25] contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="flex justify-between items-center px-2 pt-2 text-[10px] font-mono text-amber-400">
                    <span>KODAK 400</span>
                    <span>'99 08 27</span>
                    <span>▶ 01A</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-stone-900 text-amber-300 font-mono text-xs font-bold uppercase tracking-widest border border-amber-400/40 shadow-inner">
                    Vintage Film Reel
                  </span>
                  <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-stone-900 tracking-tight">
                    {story.recipientName}!
                  </h1>
                  <p className="text-xs sm:text-sm font-sans text-stone-600 max-w-md mx-auto leading-relaxed">
                    {story.coverSubtitle}
                  </p>
                </div>

                <button
                  onClick={() => goToSection(1)}
                  className="py-3.5 px-8 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-mono font-bold text-xs uppercase tracking-widest border-2 border-stone-900 shadow-[5px_5px_0px_rgba(44,36,32,0.9)] hover:scale-104 transition-transform cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Unfold First Chapter</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* SLIDE SECTIONS (1..N) */}
          {!isCover && !isFinale && (
            <motion.div
              key={`fold-slide-${activeSection}`}
              custom={direction}
              initial={{
                rotateX: direction * 35,
                y: direction * 40,
                scale: 0.94,
                opacity: 0,
              }}
              animate={{
                rotateX: 0,
                y: 0,
                scale: 1,
                opacity: 1,
              }}
              exit={{
                rotateX: direction * -35,
                y: direction * -40,
                scale: 0.94,
                opacity: 0,
              }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier easeOutQuint
              }}
              className="w-full max-w-4xl px-4 py-6"
            >
              {(() => {
                const idx = activeSection - 1;
                const slide = story.slides[idx];
                const isEven = idx % 2 === 0;

                return (
                  <div className="w-full p-6 sm:p-10 rounded-[2.5rem] bg-[#fbf7ee] border-4 border-stone-800 shadow-[12px_12px_0px_rgba(44,36,32,0.85)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
                    <div className="absolute top-3 left-3 w-5 h-5 border-t-3 border-l-3 border-amber-600" />
                    <div className="absolute bottom-3 right-3 w-5 h-5 border-b-3 border-r-3 border-amber-600" />

                    <div
                      className={`absolute -top-3 ${
                        isEven ? "left-12 -rotate-2" : "right-12 rotate-3"
                      } w-28 h-6 bg-amber-300/80 border border-amber-400 rounded-xs shadow-xs z-20`}
                    />

                    {/* PHOTO STAGE */}
                    <div className="lg:col-span-6 flex flex-col items-center">
                      <motion.div
                        whileHover={{ scale: 1.04, rotate: isEven ? 2 : -2 }}
                        className="w-full max-w-sm p-3.5 bg-stone-900 rounded-3xl border-3 border-stone-800 shadow-2xl transform rotate-1"
                      >
                        <div className="flex justify-between px-2 pb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="w-3 h-2 bg-stone-300/80 rounded-xs" />
                          ))}
                        </div>

                        <div className="aspect-[4/3] rounded-t-[3rem] rounded-b-xl overflow-hidden bg-stone-800 relative border-2 border-stone-700">
                          <img
                            src={slide?.images[0] || story.coverImage}
                            alt={slide?.title}
                            className="w-full h-full object-cover filter sepia-[0.15] contrast-[1.02]"
                          />
                        </div>

                        <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-amber-400 px-1">
                          <span>{slide?.dateTag || `CHAPTER 0${idx + 1}`}</span>
                          <span>FILM 400 • #0{idx + 1}</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* TEXT STAGE */}
                    <div className="lg:col-span-6 space-y-4 text-left">
                      <div className="flex items-center gap-2">
                        <span className="px-3.5 py-1 rounded-full bg-amber-200 text-amber-950 font-mono text-xs font-bold border border-amber-300 shadow-xs">
                          Chapter {idx + 1} of {totalSlides}
                        </span>
                        {slide?.badge && (
                          <span className="px-3.5 py-1 rounded-full bg-rose-100 text-rose-900 font-mono text-xs font-bold border border-rose-300 shadow-xs">
                            {slide.badge}
                          </span>
                        )}
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-stone-900 leading-tight">
                        {slide?.title}
                      </h2>

                      <div className="p-4.5 rounded-2xl bg-amber-50/80 border-2 border-amber-200/80 font-serif italic text-stone-800 text-base leading-relaxed shadow-inner">
                        &ldquo;{slide?.caption}&rdquo;
                      </div>

                      <div className="pt-2 flex items-center gap-3">
                        <button
                          onClick={() => goToSection(activeSection - 1)}
                          className="px-4 py-2 rounded-xl bg-stone-200 text-stone-800 font-mono text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-stone-300 border border-stone-300"
                        >
                          <ChevronUp className="w-3.5 h-3.5" />
                          <span>Fold Back</span>
                        </button>

                        <button
                          onClick={() => goToSection(activeSection + 1)}
                          className="px-4.5 py-2 rounded-xl bg-stone-900 text-amber-300 font-mono text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-stone-800 shadow-md"
                        >
                          <span>Unfold Next</span>
                          <ChevronDown className="w-3.5 h-3.5 text-amber-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}

          {/* FINALE SECTION */}
          {isFinale && (
            <motion.div
              key="fold-finale"
              custom={direction}
              initial={{
                rotateX: direction * 35,
                y: direction * 40,
                scale: 0.94,
                opacity: 0,
              }}
              animate={{
                rotateX: 0,
                y: 0,
                scale: 1,
                opacity: 1,
              }}
              exit={{
                rotateX: direction * -35,
                y: direction * -40,
                scale: 0.94,
                opacity: 0,
              }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full h-full flex flex-col justify-between"
            >
              <div className="sticky top-14 z-30 bg-white/90 backdrop-blur-md px-6 py-3 border-b border-stone-300 flex items-center justify-between text-stone-900">
                <button
                  onClick={() => goToSection(0)}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-xs font-semibold text-stone-800 border border-stone-300 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Fold Back to Cover</span>
                </button>

                <span className="text-xs font-mono text-amber-800 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" /> Birthday Wish Finale
                </span>

                <Link
                  href="/bday"
                  className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-rose-500 text-stone-950 text-xs font-bold"
                >
                  Create Wish
                </Link>
              </div>

              <div className="flex-1 overflow-y-auto">
                <WishPageRenderer data={finalCardData} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* BOTTOM HINT FOOTER */}
      <footer className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 px-4 py-1.5 rounded-full bg-stone-900/10 backdrop-blur-md border border-stone-400 text-[11px] font-mono text-stone-600">
        Scroll mouse wheel or trackpad to fold pages 📖
      </footer>
    </div>
  );
}
