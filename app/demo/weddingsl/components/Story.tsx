"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, MapPin, Calendar, Quote, ChevronRight } from "lucide-react";
import { TiltCard } from "./TiltCard";

interface StoryChapter {
  id: string;
  number: string;
  title: string;
  date: string;
  location: string;
  image: string;
  excerpt: string;
  quote: string;
}

export function Story() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const chapters: StoryChapter[] = [
    {
      id: "encounter",
      number: "Chapter I",
      title: "The First Glance",
      date: "November 2021",
      location: "Independence Square, Colombo",
      image: "/images/sl_couple_galle_fort.jpg",
      excerpt:
        "It began on a serene tropical evening by the historic colonnades of Independence Square in Colombo. A casual introduction through mutual friends turned into hours of shared laughter over Ceylon spiced milk tea and quiet sunset strolls.",
      quote: "In her quiet grace and warmth, I felt as if my heart had finally found its true home.",
    },
    {
      id: "journey",
      number: "Chapter II",
      title: "Misty Tea Hill Escapes",
      date: "2022 — 2023",
      location: "Nuwara Eliya & Ella",
      image: "/images/sl_couple_tea_estate.jpg",
      excerpt:
        "From walking hand-in-hand through the rolling emerald tea plantations of Nuwara Eliya to watching the morning mist rise over Ella Rock. Along every winding mountain road, we realized that our lives were destined to walk together.",
      quote: "Wherever we wander across this paradise island, home is simply wherever we are together.",
    },
    {
      id: "proposal",
      number: "Chapter III",
      title: "The Galle Fort Proposal",
      date: "June 2024",
      location: "Galle Fort Ramparts",
      image: "/images/sl_couple_galle_fort.jpg",
      excerpt:
        "As the sun dipped into the golden waves of the Indian Ocean beside the iconic Galle Fort lighthouse, Kaveen took Senuri's hand and asked her to build forever with him. With tears of happiness and ocean breezes, she joyfully said 'Yes'.",
      quote: "Surrounded by centuries of history and the endless sea, forever began.",
    },
    {
      id: "poruwa",
      number: "Chapter IV",
      title: "The Sacred Poruwa Ceremony",
      date: "December 18, 2026",
      location: "Galle Face Hotel, Colombo",
      image: "/images/sl_couple_poruwa.jpg",
      excerpt:
        "Surrounded by the sacred rhythms of Magul Bera drums, the sweet fragrance of jasmine and white lotus, and the blessings of our elders, we step onto the traditional Poruwa to unite our lives in sacred harmony.",
      quote: "Blessed with the wisdom of tradition, bound by endless love.",
    },
  ];

  return (
    <section ref={sectionRef} id="story" className="relative py-28 px-6 overflow-hidden">
      {/* Decorative Subtle Background Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#2C3E35]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-3 block">
            Love &amp; Heritage
          </span>
          <h2
            className="text-4xl md:text-5xl font-serif text-[#2C3E35] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Our Love Story
          </h2>
          <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6" />
          <p className="text-sm md:text-base text-[#2C3E35]/75 max-w-xl mx-auto font-light leading-relaxed">
            Every love story is sacred, but ours is our absolute favorite. Here is how two paths intertwined into one forever.
          </p>
        </motion.div>

        {/* Arch-Framed Couple Spotlight Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          {/* Left Arch Photo - Bride (Senuri) */}
          <motion.div style={{ y: yLeft }} className="lg:col-span-4 flex justify-center">
            <TiltCard tiltDegree={12} scaleOnHover={1.03} className="w-full max-w-sm">
              <div className="relative group w-full">
                <div className="absolute -inset-3 rounded-t-[140px] rounded-b-2xl border-2 border-[#D4AF37]/40 transform rotate-2 group-hover:rotate-0 transition-transform duration-500 pointer-events-none" />
                <div className="relative overflow-hidden rounded-t-[140px] rounded-b-2xl shadow-[0_20px_50px_rgba(44,62,53,0.12)] bg-[#FAF7F2] p-3 border border-[#D4AF37]/50">
                  <div className="relative h-[430px] rounded-t-[130px] rounded-b-xl overflow-hidden">
                    <img
                      src="/images/sl_bride.jpg"
                      alt="Senuri Wickramasinghe"
                      className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E35]/80 via-[#2C3E35]/20 to-transparent" />
                    <div className="absolute bottom-6 left-4 right-4 text-white text-center space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E8D8B0] block">
                        The Kandyan Bride
                      </span>
                      <p className="font-serif text-3xl text-white" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                        Senuri Wickramasinghe
                      </p>
                      <p className="text-xs text-[#E8D8B0]/80 italic">Architect &amp; Classical Dancer</p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Center Intertwined Hearts & Monogram Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 bg-white/90 backdrop-blur-xl rounded-3xl p-8 text-center border-2 border-[#D4AF37]/40 shadow-[0_20px_50px_rgba(44,62,53,0.08)] relative z-10 space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37]/20 via-[#D4AF37]/10 to-transparent border border-[#D4AF37]/50 flex items-center justify-center mx-auto shadow-inner">
              <Heart className="w-7 h-7 text-[#D4AF37] fill-[#D4AF37]/40 animate-pulse" />
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] block">
              Dec 18, 2026 • Colombo, Sri Lanka
            </span>

            <h3
              className="text-3xl sm:text-4xl font-serif text-[#2C3E35]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Two Souls,<br />One Sacred Bond
            </h3>

            <p className="text-xs sm:text-sm text-[#2C3E35]/80 font-light leading-relaxed italic px-2">
              &quot;May peace, prosperity, and joy accompany you on this sacred voyage of love.&quot;
            </p>

            <div className="pt-2 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Our Journey Below</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </motion.div>

          {/* Right Arch Photo - Groom (Kaveen) */}
          <motion.div style={{ y: yRight }} className="lg:col-span-4 flex justify-center">
            <TiltCard tiltDegree={12} scaleOnHover={1.03} className="w-full max-w-sm">
              <div className="relative group w-full">
                <div className="absolute -inset-3 rounded-t-[140px] rounded-b-2xl border-2 border-[#D4AF37]/40 transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 pointer-events-none" />
                <div className="relative overflow-hidden rounded-t-[140px] rounded-b-2xl shadow-[0_20px_50px_rgba(44,62,53,0.12)] bg-[#FAF7F2] p-3 border border-[#D4AF37]/50">
                  <div className="relative h-[430px] rounded-t-[130px] rounded-b-xl overflow-hidden">
                    <img
                      src="/images/sl_groom.jpg"
                      alt="Kaveen Senanayake"
                      className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E35]/80 via-[#2C3E35]/20 to-transparent" />
                    <div className="absolute bottom-6 left-4 right-4 text-white text-center space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E8D8B0] block">
                        The Groom
                      </span>
                      <p className="font-serif text-3xl text-white" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                        Kaveen Senanayake
                      </p>
                      <p className="text-xs text-[#E8D8B0]/80 italic">Environmental Engineer &amp; Planter</p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* ------------------ INTERACTIVE STORY CHAPTER JOURNEY ------------------ */}
        <div className="bg-[#F5F0E8]/60 rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/35 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          {/* Chapter Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-10 pb-6 border-b border-[#D4AF37]/30">
            {chapters.map((chap, index) => {
              const isActive = activeChapter === index;
              return (
                <button
                  key={chap.id}
                  onClick={() => setActiveChapter(index)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-[#2C3E35] text-[#D4AF37] shadow-lg scale-105 border border-[#D4AF37]"
                      : "bg-white/80 text-[#2C3E35]/70 hover:bg-white hover:text-[#2C3E35] border border-[#D4AF37]/20"
                  }`}
                >
                  <span className="text-[10px] text-[#D4AF37] font-bold">{chap.number}</span>
                  <span>{chap.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Chapter Details Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={chapters[activeChapter].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Chapter Image Card */}
              <div className="lg:col-span-6 overflow-hidden rounded-2xl border-2 border-[#D4AF37]/40 shadow-xl relative h-72 sm:h-96 group">
                <img
                  src={chapters[activeChapter].image}
                  alt={chapters[activeChapter].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E35]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                  <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {chapters[activeChapter].date}
                  </span>
                  <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {chapters[activeChapter].location}
                  </span>
                </div>
              </div>

              {/* Chapter Narrative Text */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37] block mb-1">
                    {chapters[activeChapter].number} • {chapters[activeChapter].date}
                  </span>
                  <h3
                    className="text-3xl sm:text-4xl font-serif text-[#2C3E35]"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {chapters[activeChapter].title}
                  </h3>
                </div>

                <p className="text-[#2C3E35]/85 leading-relaxed text-sm sm:text-base font-light">
                  {chapters[activeChapter].excerpt}
                </p>

                {/* Quote Callout Box */}
                <div className="p-5 rounded-2xl bg-white/90 border-l-4 border-[#D4AF37] shadow-sm relative space-y-1">
                  <Quote className="w-5 h-5 text-[#D4AF37]/50 absolute top-3 right-3" />
                  <p
                    className="text-base sm:text-lg font-serif italic text-[#2C3E35]"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    &quot;{chapters[activeChapter].quote}&quot;
                  </p>
                </div>

                {/* Next Chapter Button */}
                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#2C3E35]/70">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{chapters[activeChapter].location}</span>
                  </div>

                  <button
                    onClick={() => setActiveChapter((prev) => (prev + 1) % chapters.length)}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-[#2C3E35] transition-colors cursor-pointer"
                  >
                    <span>Next Chapter</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
