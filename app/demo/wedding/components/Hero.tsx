"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Calendar, Sparkles, Heart } from "lucide-react";
import { TiltCard } from "./TiltCard";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Hardware-accelerated parallax scroll hooks
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const targetDate = new Date("2026-10-14T15:00:00");

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 overflow-hidden">
      {/* High-Resolution Glasshouse Venue Photographic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/wedding/hero-bg.jpg"
          alt="The Glasshouse at Willow Creek"
          className="w-full h-full object-cover transform scale-105"
        />
        {/* Dark Vignette & Golden Sunset Gradient Overlay for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C2C24]/85 via-[#1C2C24]/60 to-[#FAF7F2]" />
      </div>

      {/* Ornate Gold Viewport Inner Frame */}
      <div className="absolute inset-4 md:inset-8 border border-[#D4AF37]/40 rounded-3xl pointer-events-none z-10" />

      {/* Hero Parallax Scroll Wrapper */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-20 max-w-4xl mx-auto flex flex-col items-center will-change-transform"
      >
        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-[#D4AF37]/60 text-[#FFF3D1] text-xs font-semibold uppercase tracking-[0.25em] mb-6 shadow-[0_8px_25px_rgba(0,0,0,0.3)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Save The Date</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-lg md:text-xl font-light tracking-[0.2em] uppercase text-[#E8D8B0] mb-4 drop-shadow-md"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Are getting married
        </motion.p>

        {/* Crest Flourish */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-28 h-7 text-[#D4AF37] mb-2"
        >
          <svg viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M 0 10 Q 25 0 50 10 Q 75 20 100 10" />
            <circle cx="50" cy="10" r="3" fill="currentColor" />
          </svg>
        </motion.div>

        {/* Vibrant Gold Names Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-6xl sm:text-8xl lg:text-9xl font-serif text-white tracking-tight leading-none mb-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)]"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          <span className="bg-gradient-to-b from-white via-[#FFF3D1] to-[#E8D8B0] bg-clip-text text-transparent">Amelia</span>{" "}
          <span className="inline-block px-2">
            <Heart className="w-10 h-10 sm:w-14 sm:h-14 inline text-[#D4AF37] fill-[#D4AF37]/50 animate-pulse drop-shadow-lg" />
          </span>{" "}
          <span className="bg-gradient-to-b from-white via-[#FFF3D1] to-[#E8D8B0] bg-clip-text text-transparent">Liam</span>
        </motion.h1>

        {/* Golden Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.75, ease: "easeOut" }}
          className="w-48 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-4"
        />

        {/* Date and Location Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm md:text-base text-white my-6 font-medium"
        >
          <div className="flex items-center gap-2 tracking-wider uppercase px-5 py-2.5 rounded-full bg-black/40 border border-[#D4AF37]/50 backdrop-blur-xl shadow-lg">
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <span>October 14, 2026</span>
          </div>
          <span className="hidden sm:inline text-[#D4AF37] text-xl">•</span>
          <div className="flex items-center gap-2 tracking-wider px-5 py-2.5 rounded-full bg-black/40 border border-[#D4AF37]/50 backdrop-blur-xl shadow-lg">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>The Glasshouse at Willow Creek</span>
          </div>
        </motion.div>

        {/* 3D Tilt Countdown Timer Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, type: "spring", stiffness: 200, damping: 20 }}
          className="mt-8 grid grid-cols-4 gap-3 sm:gap-6 w-full max-w-xl"
        >
          {timeBlocks.map((block) => (
            <TiltCard key={block.label} tiltDegree={8} scaleOnHover={1.04}>
              <div className="relative p-4 sm:p-5 rounded-2xl bg-black/45 backdrop-blur-2xl border border-[#D4AF37]/60 shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-[#D4AF37]/20 pointer-events-none" />
                <span
                  className="relative text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-md"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {mounted ? String(block.value).padStart(2, "0") : "00"}
                </span>
                <span className="relative text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#D4AF37] mt-1">
                  {block.label}
                </span>
              </div>
            </TiltCard>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#story"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-[#FFF3D1]/80 hover:text-[#D4AF37] transition-colors"
        >
          <span>Explore Our Story</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-[#D4AF37]/60 flex justify-center pt-1"
          >
            <div className="w-1 h-2 rounded-full bg-[#D4AF37]" />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
}
