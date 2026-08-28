"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Clock, MapPin, ExternalLink, Sparkles, Shirt, CalendarCheck, Calendar, Car, GlassWater, Utensils, Music, Info, Check } from "lucide-react";
import { TiltCard } from "./TiltCard";

export function ScheduleVenue() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [selectedEventIndex, setSelectedEventIndex] = useState<number | null>(0);
  const [calendarAdded, setCalendarAdded] = useState(false);

  // Dynamic timeline progress line
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 25 });

  const scheduleEvents = [
    {
      time: "9:15 AM",
      title: "Arrival & Magul Bera Procession",
      location: "Grand Portico & Palm Terrace",
      description: "Traditional Kandyan drummers & dancers welcome the groom and bride's families in ceremonial procession.",
      icon: CalendarCheck,
      details: "Traditional welcome drink of Thambili (King Coconut water). Guests are kindly requested to be seated by 9:30 AM.",
      badge: "Traditional Procession",
    },
    {
      time: "9:48 AM",
      title: "The Sacred Poruwa Ceremony",
      location: "The Grand Ballroom Poruwa Mandapaya",
      description: "Auspicious Nekatha ceremony: tying of the holy Pirith nool, exchanging wedding rings, and Jayamangala Gatha blessings.",
      icon: Sparkles,
      details: "Ashtaka recitations and breaking of the traditional coconut (Pol Gahanawa) to usher in eternal prosperity.",
      badge: "Auspicious Nekatha",
    },
    {
      time: "10:35 AM",
      title: "Lighting of the Brass Oil Lamp",
      location: "The Ballroom Dais",
      description: "Lighting the traditional Sri Lankan Polthel Pahana with parents & elders, followed by Kiribath and wedding cake structure.",
      icon: Clock,
      details: "Traditional sweetmeats (Kavum, Kokis, Aluwa) and champagne toast with immediate family and beloved guests.",
      badge: "Pahana & Kiribath",
    },
    {
      time: "12:30 PM",
      title: "Grand Sri Lankan Wedding Feast",
      location: "Galle Face Dining Hall & Lawn",
      description: "A lavish banquet featuring authentic Ceylon aromatic yellow rice, Jaffna style crab curry, black pork curry, and global cuisine.",
      icon: Utensils,
      details: "Curated dessert table with Watalappan, curd & treacle, and artisan Ceylon tea bar.",
      badge: "Ceylon Feast",
    },
    {
      time: "2:00 PM",
      title: "Baila, Live Band & Celebrations",
      location: "Grand Ballroom Dancefloor",
      description: "Celebrate with Sri Lanka's finest live band, authentic Baila rhythms, and dancing by the ocean breeze.",
      icon: Music,
      details: "Espresso martini bar and evening tea with Ceylon short eats served at 4:30 PM.",
      badge: "Live Baila & Band",
    },
  ];

  const handleAddToCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Senuri & Kaveen Wedding//EN
BEGIN:VEVENT
SUMMARY:Senuri & Kaveen's Poruwa Ceremony & Wedding
DESCRIPTION:Join Senuri Wickramasinghe and Kaveen Senanayake as they celebrate their Poruwa Ceremony and Wedding at The Galle Face Hotel, Colombo.
LOCATION:The Galle Face Hotel, 2 Galle Road, Colombo 03, Sri Lanka
DTSTART:20261218T034500Z
DTEND:20261218T123000Z
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "Senuri-Kaveen-Wedding.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCalendarAdded(true);
    setTimeout(() => setCalendarAdded(false), 4000);
  };

  const googleMapsUrl = "https://maps.google.com/?q=Galle+Face+Hotel+Colombo+Sri+Lanka";

  // Dress code color palette swatches inspired by Sri Lankan royal heritage
  const colorSwatches = [
    { name: "Royal Gold", color: "#D4AF37" },
    { name: "Ceylon Sapphire", color: "#104E8B" },
    { name: "Deep Emerald", color: "#1E3A2B" },
    { name: "Kandyan Maroon", color: "#6B1D2F" },
    { name: "Ivory Lotus", color: "#F7F3E9" },
  ];

  return (
    <section id="schedule" className="relative py-28 px-6 bg-[#F5F0E8]/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-2 block">
            The Auspicious Occasion
          </span>
          <h2
            className="text-4xl md:text-5xl font-serif text-[#2C3E35] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Poruwa Ceremony &amp; Venue
          </h2>
          <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4" />
          <p className="text-sm md:text-base text-[#2C3E35]/75 max-w-lg mx-auto font-light leading-relaxed">
            Everything you need to know about our auspicious wedding celebration in Colombo. We are blessed to have you with us!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* ------------------ SCHEDULE TIMELINE COLUMN (LEFT) ------------------ */}
          <div ref={timelineRef} className="lg:col-span-7 space-y-8">
            <div className="flex items-center justify-between">
              <h3
                className="text-2xl font-serif text-[#2C3E35] flex items-center gap-3"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                <Clock className="w-6 h-6 text-[#D4AF37]" />
                Ceremony Schedule
              </h3>

              <button
                onClick={handleAddToCalendar}
                className="px-4 py-2 rounded-full bg-[#2C3E35] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#2C3E35] transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer"
              >
                {calendarAdded ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Added to Calendar!</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4 text-[#D4AF37]" />
                    <span>Add to Calendar</span>
                  </>
                )}
              </button>
            </div>

            <div className="relative border-l-2 border-[#D4AF37]/30 ml-4 space-y-8 pl-8">
              {/* Dynamic Animated Timeline Scroll Progress Line */}
              <motion.div
                className="absolute top-0 -left-[2px] w-[2px] h-full bg-gradient-to-b from-[#D4AF37] via-[#C5A028] to-[#D4AF37] origin-top"
                style={{ scaleY }}
              />

              {scheduleEvents.map((event, idx) => {
                const IconComponent = event.icon;
                const isSelected = selectedEventIndex === idx;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Animated Timeline Node Icon */}
                    <div
                      onClick={() => setSelectedEventIndex(isSelected ? null : idx)}
                      className={`absolute -left-[49px] top-1 w-9 h-9 rounded-full border-2 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md ${
                        isSelected
                          ? "bg-[#D4AF37] border-[#D4AF37] scale-110 text-white"
                          : "bg-[#FAF7F2] border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>

                    {/* Timeline Event Card */}
                    <TiltCard tiltDegree={6} scaleOnHover={1.02}>
                      <div
                        onClick={() => setSelectedEventIndex(isSelected ? null : idx)}
                        className={`rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? "bg-white border-[#D4AF37] shadow-[0_15px_35px_rgba(212,175,55,0.15)] ring-1 ring-[#D4AF37]/50"
                            : "bg-white/80 backdrop-blur-md border-[#D4AF37]/30 shadow-[0_10px_25px_rgba(44,62,53,0.05)] hover:border-[#D4AF37]"
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                            {event.time}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#2C3E35]/60 px-2.5 py-0.5 rounded-md bg-[#FAF7F2] border border-[#D4AF37]/20">
                            {event.badge}
                          </span>
                        </div>

                        <h4
                          className="text-2xl font-serif text-[#2C3E35] mb-1"
                          style={{ fontFamily: "var(--font-cormorant), serif" }}
                        >
                          {event.title}
                        </h4>

                        <div className="flex items-center gap-1.5 text-xs text-[#D4AF37] font-semibold mb-3">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{event.location}</span>
                        </div>

                        <p className="text-xs sm:text-sm text-[#2C3E35]/80 leading-relaxed font-light">
                          {event.description}
                        </p>

                        {/* Expandable Extra Details Accordion */}
                        <AnimatePresence>
                          {isSelected && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-3 border-t border-[#D4AF37]/20 flex items-start gap-2 text-xs text-[#2C3E35]/75 bg-[#FAF7F2]/80 p-3 rounded-xl"
                            >
                              <Info className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                              <span>{event.details}</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </TiltCard>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ------------------ VENUE & ATTIRE COLUMN (RIGHT) ------------------ */}
          <div className="lg:col-span-5 space-y-8">
            {/* Galle Face Hotel Venue Card */}
            <TiltCard tiltDegree={8} scaleOnHover={1.02}>
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37]/40 shadow-[0_20px_45px_rgba(44,62,53,0.08)] relative overflow-hidden space-y-6">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/images/sl_couple_poruwa.jpg"
                    alt="The Grand Ballroom at Galle Face Hotel"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E35]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8D8B0]">
                      Historic Oceanfront Heritage
                    </span>
                    <p className="font-serif text-xl text-white" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                      The Galle Face Hotel • Colombo
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                    <MapPin className="w-4 h-4" />
                    <span>Venue Location</span>
                  </div>
                  <p className="text-sm text-[#2C3E35]/85 leading-relaxed font-light">
                    2 Galle Road, Colombo 03, Sri Lanka
                  </p>
                </div>

                {/* Valet & Parking Box */}
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#D4AF37]/30 flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] shrink-0">
                    <Car className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#2C3E35]">
                      Complimentary Valet Parking
                    </p>
                    <p className="text-xs text-[#2C3E35]/70 leading-relaxed font-light">
                      Valet parking service available at the main hotel porch beginning at 8:45 AM.
                    </p>
                  </div>
                </div>

                {/* Google Maps Button */}
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#2C3E35] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#2C3E35] transition-all duration-300 shadow-md group"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-[#D4AF37] group-hover:text-[#2C3E35] transition-colors" />
                </a>
              </div>
            </TiltCard>

            {/* Dress Code & Color Swatch Card */}
            <TiltCard tiltDegree={8} scaleOnHover={1.02}>
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37]/40 shadow-[0_20px_45px_rgba(44,62,53,0.08)] space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                    <Shirt className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                      Attire Recommendation
                    </span>
                    <h4
                      className="text-2xl font-serif text-[#2C3E35]"
                      style={{ fontFamily: "var(--font-cormorant), serif" }}
                    >
                      Traditional / Formal Attire
                    </h4>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#2C3E35]/80 leading-relaxed font-light">
                  Traditional Kandyan Osari, Batik Silk Sarees, National Dress, or Western Formal Suits/Tuxedos are warmly welcomed. We encourage royal Ceylon jewel tones.
                </p>

                {/* Palette Swatches */}
                <div className="space-y-2 pt-2 border-t border-[#D4AF37]/20">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#2C3E35]/60 block">
                    Heritage Color Palette:
                  </span>
                  <div className="flex items-center gap-3 pt-1">
                    {colorSwatches.map((swatch, i) => (
                      <div key={i} className="group/swatch relative flex flex-col items-center">
                        <div
                          className="w-7 h-7 rounded-full border-2 border-white shadow-md transform group-hover/swatch:scale-125 transition-transform cursor-pointer"
                          style={{ backgroundColor: swatch.color }}
                        />
                        <span className="opacity-0 group-hover/swatch:opacity-100 absolute -top-8 text-[9px] font-bold uppercase tracking-wider bg-black/80 text-white px-2 py-0.5 rounded shadow whitespace-nowrap transition-opacity pointer-events-none">
                          {swatch.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
