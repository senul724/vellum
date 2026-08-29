"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import confetti from "canvas-confetti";
import { MapPin, Calendar, Sparkles, Clock, ArrowRight, PartyPopper } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const targetDate = new Date("2026-10-24T19:00:00");

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

  const handleConfettiPopper = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 80,
      spread: 85,
      origin: { x, y },
      colors: ["#FF3366", "#A855F7", "#F59E0B", "#06B6D4", "#FFD700", "#FFFFFF"],
      ticks: 180,
      gravity: 0.9,
      scalar: 1.2,
    });
  };

  const handleCalendar = () => {
    const title = encodeURIComponent("Sophia's 25th Milestone Birthday Soirée");
    const details = encodeURIComponent(
      "Join us for Sophia's 25th Milestone Birthday celebration at The Glasshouse Sky Lounge. Cocktails, Chef's Dinner, and Late Night Dancing!"
    );
    const location = encodeURIComponent("The Glasshouse Sky Lounge & Rooftop, Los Angeles");
    const dates = "20261024T190000Z/20261025T010000Z";
    window.open(
      `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`,
      "_blank"
    );
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[94vh] flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 overflow-hidden z-10"
    >
      {/* Festive Floating 3D Metallic Foil Balloon Numbers (25) with Colorful Neon Shadows */}
      <div className="absolute inset-0 pointer-events-none flex justify-between items-center px-4 sm:px-14 opacity-25 select-none overflow-hidden">
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [-5, 5, -5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="text-8xl sm:text-9xl md:text-[15rem] font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FF758F] to-transparent drop-shadow-[0_20px_40px_rgba(255,83,118,0.5)]"
        >
          2
        </motion.div>

        <motion.div
          animate={{ y: [15, -15, 15], rotate: [5, -5, 5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="text-8xl sm:text-9xl md:text-[15rem] font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FBBF24] to-transparent drop-shadow-[0_20px_40px_rgba(245,158,11,0.5)]"
        >
          5
        </motion.div>
      </div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="max-w-4xl mx-auto space-y-7 will-change-transform relative z-10"
      >
        {/* Birthday Eyebrow Badge in Neon Sunset Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.07] border border-white/15 backdrop-blur-xl shadow-[0_0_20px_rgba(255,83,118,0.2)]"
        >
          <span className="text-sm">🎈</span>
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-[#FF758F] to-[#FBBF24] bg-clip-text text-transparent">
            25th Milestone Birthday Soirée
          </span>
          <span className="text-sm">✨</span>
        </motion.div>

        {/* Celebrant Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="space-y-2"
        >
          <p className="text-xs sm:text-sm font-serif uppercase tracking-[0.3em] text-white/60">
            Let&apos;s pop the champagne and celebrate
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight text-white leading-[1.05] drop-shadow-md">
            Sophia Sinclair
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic bg-gradient-to-r from-[#FF758F] via-[#FDB813] to-[#FF758F] bg-clip-text text-transparent font-light">
            is turning twenty-five.
          </p>
        </motion.div>

        {/* Date & Location Pill Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/80 font-light"
        >
          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/15 shadow-xs backdrop-blur-md">
            <Calendar className="w-4 h-4 text-[#FF758F]" />
            Saturday, October 24, 2026 &bull; 7:00 PM
          </span>
          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/15 shadow-xs backdrop-blur-md">
            <MapPin className="w-4 h-4 text-[#F59E0B]" />
            The Glasshouse Rooftop, Los Angeles
          </span>
        </motion.div>

        {/* Live Countdown Timer in Frosted Glass Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-2 sm:pt-4"
        >
          <div className="inline-block p-4 sm:p-6 rounded-3xl bg-white/[0.05] backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#FF758F] to-[#FBBF24] bg-clip-text text-transparent mb-3">
              <Clock className="w-3.5 h-3.5 text-[#FF758F]" />
              <span>Counting Down To The Party</span>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
              {timeBlocks.map((block, i) => (
                <div
                  key={i}
                  className="min-w-[62px] sm:min-w-[80px] p-2.5 sm:p-3.5 rounded-2xl bg-white/[0.06] border border-white/10 shadow-inner"
                >
                  <div className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-white">
                    {mounted ? String(block.value).padStart(2, "0") : "--"}
                  </div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-white/60 font-semibold mt-0.5">
                    {block.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Action Buttons + Interactive Confetti Cannon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2"
        >
          <a
            href="#rsvp"
            className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#FF3366] via-[#FF5376] to-[#F59E0B] hover:brightness-110 text-white text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all shadow-[0_0_25px_rgba(255,51,102,0.4)] hover:shadow-[0_0_35px_rgba(255,51,102,0.6)] hover:scale-105 active:scale-95 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>RSVP To Attend</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>

          <button
            onClick={handleConfettiPopper}
            className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white text-xs sm:text-sm uppercase tracking-widest font-bold transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2 backdrop-blur-md"
            title="Pop celebration confetti!"
          >
            <PartyPopper className="w-4 h-4 text-[#FF758F] animate-bounce" />
            <span>Pop Confetti 🎈</span>
          </button>

          <button
            onClick={handleCalendar}
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 text-white/90 text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all shadow-sm hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2 backdrop-blur-md"
          >
            <Calendar className="w-4 h-4 text-[#F59E0B]" />
            <span>Add To Calendar</span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
