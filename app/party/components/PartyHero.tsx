"use client";

import { Calendar, MapPin, Beer, Sparkles, ArrowRight, Music, Users, PartyPopper } from "lucide-react";

export function PartyHero() {
  const handleCalendar = () => {
    const title = encodeURIComponent("Voxel Labs 2026 Studio Party: Out of Office");
    const details = encodeURIComponent(
      "Slack is muted! Annual studio rooftop celebration. Open bar, live DJ set, Golden Mug awards, and midnight tacos."
    );
    const location = encodeURIComponent("The Timberline Penthouse & Sky Terrace, 450 Mission St, San Francisco");
    const dates = "20261218T180000Z/20261219T020000Z";
    window.open(
      `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`,
      "_blank"
    );
  };

  return (
    <section className="relative pt-32 sm:pt-36 pb-16 px-6 max-w-5xl mx-auto text-center z-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-amber-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="space-y-6 max-w-3xl mx-auto">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-bold tracking-wider uppercase shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Out of Office &bull; Annual Studio Bash 2026</span>
          <span>🌴</span>
        </div>

        {/* Headline */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-white leading-[1.05]">
            Slack is Muted. <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent italic">
              The Bar is Open.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/75 font-light max-w-xl mx-auto pt-2 leading-relaxed">
            Close the laptops and cancel your Friday 5 PM standup. Celebrate an incredible year of shipping with open taps, sunset skyline views, live DJ beats, and tacos.
          </p>
        </div>

        {/* Date & Location Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-mono text-white/85 pt-2">
          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 shadow-xs backdrop-blur-md">
            <Calendar className="w-4 h-4 text-emerald-400" />
            Friday, Dec 18, 2026 &bull; 6:00 PM till Late
          </span>
          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 shadow-xs backdrop-blur-md">
            <MapPin className="w-4 h-4 text-amber-400" />
            The Timberline Penthouse &amp; Rooftop
          </span>
        </div>

        {/* Highlights Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 text-left">
          <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <span className="text-xl">🍸</span>
            <div className="text-xs font-mono font-bold text-white mt-1">Open Cocktail Bar</div>
            <div className="text-[11px] text-white/60">Craft beers &amp; mocktails</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <span className="text-xl">🌮</span>
            <div className="text-xs font-mono font-bold text-white mt-1">Midnight Taco Bar</div>
            <div className="text-[11px] text-white/60">Street tacos &amp; churros</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <span className="text-xl">🎧</span>
            <div className="text-xs font-mono font-bold text-white mt-1">Live Rooftop DJ</div>
            <div className="text-[11px] text-white/60">Disco &amp; 90s party jams</div>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <span className="text-xl">🏆</span>
            <div className="text-xs font-mono font-bold text-white mt-1">Golden Mug Awards</div>
            <div className="text-[11px] text-white/60">Annual team superlatives</div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#rsvp"
            className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#0B0E16] text-xs sm:text-sm font-mono font-bold uppercase tracking-widest transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>RSVP For Your Drink Pass</span>
            <ArrowRight className="w-4 h-4 text-[#0B0E16]" />
          </a>

          <button
            onClick={handleCalendar}
            className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white text-xs sm:text-sm font-mono font-semibold tracking-wider transition-all shadow-xs hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer backdrop-blur-md"
          >
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span>Add to Calendar</span>
          </button>
        </div>
      </div>
    </section>
  );
}
