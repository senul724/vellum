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

  const targetDate = new Date("2026-12-18T09:15:00");

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
      {/* High-Resolution Sri Lankan Poruwa Photographic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/sl_couple_poruwa.jpg"
          alt="Senuri & Kaveen Wedding Poruwa"
          className="w-full h-full object-cover transform scale-105"
        />
        {/* Dark Vignette & Royal Gold/Emerald Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#14231B]/85 via-[#1C2C24]/65 to-[#FAF7F2]" />
      </div>

      {/* Ornate Gold Viewport Inner Frame */}
      <div className="absolute inset-4 md:inset-8 border border-[#D4AF37]/40 rounded-3xl pointer-events-none z-10" />

      {/* Hero Parallax Scroll Wrapper */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-20 max-w-4xl mx-auto flex flex-col items-center will-change-transform"
      >
        {/* Floating Top Monogram Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#E8D8B0] mb-8 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase">
            The Poruwa Ceremony &amp; Wedding Celebration
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        </motion.div>

        {/* Primary Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="space-y-4 mb-6"
        >
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-serif text-white tracking-wide drop-shadow-md"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Senuri <span className="text-[#D4AF37] font-light">&amp;</span> Kaveen
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl font-serif italic text-[#E8D8B0] tracking-widest"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Two Souls United in Sacred Matrimony
          </p>
        </motion.div>

        {/* Date & Destination Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base text-white/90 mb-12 font-medium tracking-wider"
        >
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <span>Friday, December 18, 2026</span>
          </div>

          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />

          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>Galle Face Hotel • Colombo, Sri Lanka</span>
          </div>
        </motion.div>

        {/* Live Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="w-full max-w-xl mb-12"
        >
          <TiltCard tiltDegree={8} scaleOnHover={1.02}>
            <div className="grid grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              {timeBlocks.map((block) => (
                <div key={block.label} className="flex flex-col items-center justify-center">
                  <span
                    className="text-2xl sm:text-4xl md:text-5xl font-serif text-white font-semibold drop-shadow-sm"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {mounted ? String(block.value).padStart(2, "0") : "00"}
                  </span>
                  <span className="text-[10px] sm:text-xs tracking-widest uppercase text-[#E8D8B0] font-medium mt-1">
                    {block.label}
                  </span>
                </div>
              ))}
            </div>
          </TiltCard>
        </motion.div>

        {/* Call to Action CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#rsvp"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-[#1C2C24] font-semibold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg hover:shadow-[#D4AF37]/30 transition-all cursor-pointer"
          >
            Confirm Attendance (RSVP)
          </a>

          <a
            href="#story"
            className="px-8 py-3.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white font-semibold text-xs uppercase tracking-widest hover:bg-white/25 transition-all cursor-pointer"
          >
            Explore Our Story
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
