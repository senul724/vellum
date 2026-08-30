"use client";

import { Calendar, MapPin, ShieldCheck, ArrowRight, Download, Users, FileText, CheckCircle2, Lock, Award } from "lucide-react";

export function ExecutiveHero() {
  const handleCalendar = () => {
    const title = encodeURIComponent("2026 Nexus Global Leadership Summit & Executive Dinner");
    const details = encodeURIComponent(
      "Nexus Global Leadership Summit at The St. Regis Penthouse, San Francisco. Keynotes, Executive Fireside, and 4-Course Private Dinner."
    );
    const location = encodeURIComponent("The St. Regis Penthouse & Conservatory, 125 3rd St, San Francisco, CA");
    const dates = "20261112T173000Z/20261112T230000Z";
    window.open(
      `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`,
      "_blank"
    );
  };

  return (
    <section id="overview" className="relative pt-32 pb-20 px-4 sm:px-6 max-w-5xl mx-auto text-center">
      {/* Heavy Skeuomorphic Cotton Paper Board Card */}
      <div
        className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-14 text-left shadow-[0_30px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.95),inset_0_0_0_1px_rgba(0,0,0,0.08)] border-4 border-[#DCD7CA]/90"
        style={{
          background: "linear-gradient(180deg, #FAF8F2 0%, #EFEBE0 100%)",
          color: "#181A1E",
        }}
      >
        {/* Brass Screws at the 4 Corners */}
        <div className="absolute top-4 left-4 w-3.5 h-3.5 rounded-full bg-gradient-to-b from-[#E2C889] to-[#8C6D2D] border border-black/30 shadow-inner flex items-center justify-center">
          <div className="w-2 h-[0.5px] bg-[#4D3A13]" />
        </div>
        <div className="absolute top-4 right-4 w-3.5 h-3.5 rounded-full bg-gradient-to-b from-[#E2C889] to-[#8C6D2D] border border-black/30 shadow-inner flex items-center justify-center">
          <div className="w-2 h-[0.5px] bg-[#4D3A13]" />
        </div>
        <div className="absolute bottom-4 left-4 w-3.5 h-3.5 rounded-full bg-gradient-to-b from-[#E2C889] to-[#8C6D2D] border border-black/30 shadow-inner flex items-center justify-center">
          <div className="w-2 h-[0.5px] bg-[#4D3A13]" />
        </div>
        <div className="absolute bottom-4 right-4 w-3.5 h-3.5 rounded-full bg-gradient-to-b from-[#E2C889] to-[#8C6D2D] border border-black/30 shadow-inner flex items-center justify-center">
          <div className="w-2 h-[0.5px] bg-[#4D3A13]" />
        </div>

        {/* Inner Debossed Foil Frame */}
        <div className="border border-[#C5A059]/45 rounded-xl p-5 sm:p-8 md:p-10 space-y-8">
          {/* Header Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#C5A059]/30 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
              <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#8C6D2D] uppercase">
                Official Delegation Notice &bull; Strictly Privileged
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#181A1E]/60 font-semibold">
              DOC REF: #NX-2026-SF &bull; DIPLOMATIC POUCH
            </span>
          </div>

          {/* Main Title & Editorial Headline */}
          <div className="space-y-3">
            <p className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#8C6D2D] font-bold">
              The Nexus Global Leadership Forum
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-[#181A1E] leading-[1.06] drop-shadow-[0_1px_0_rgba(255,255,255,0.9)]">
              2026 Global Leadership Summit
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-serif italic text-[#181A1E]/80 font-light max-w-2xl leading-relaxed">
              An executive gathering of 150 sovereign allocators, enterprise founders, and AI infrastructure leaders convening for strategic closed-door alignment and private dining.
            </p>
          </div>

          {/* Key Event Badges */}
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-white/80 border border-black/10 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C6D2D] font-bold block">
                Summit Date
              </span>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#181A1E]">
                <Calendar className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Nov 12, 2026 &bull; 5:30 PM</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/80 border border-black/10 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C6D2D] font-bold block">
                Venue Location
              </span>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#181A1E] truncate">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="truncate">The St. Regis Penthouse, SF</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/80 border border-black/10 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C6D2D] font-bold block">
                Delegation Capacity
              </span>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#181A1E]">
                <Users className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>150 Confirmed Seats (Limited)</span>
              </div>
            </div>
          </div>

          {/* Skeuomorphic Executive Briefing Ledger (Replaced Countdown Clock) */}
          <div className="p-5 sm:p-7 rounded-2xl bg-[#F0EBE0] border border-[#C5A059]/35 shadow-[inset_0_2px_5px_rgba(0,0,0,0.06),0_1px_0_rgba(255,255,255,0.9)] space-y-5">
            <div className="flex items-center justify-between border-b border-[#C5A059]/25 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8C6D2D]" />
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#181A1E]">
                  Executive Delegation Dossier
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#C5A059]/20 text-[#8C6D2D] border border-[#C5A059]/30">
                Chatham House Rule
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1 p-3 rounded-lg bg-white/70 border border-black/5 shadow-xs">
                <span className="text-[10px] font-mono text-[#8C6D2D] font-bold uppercase tracking-wider block">
                  Convene Leadership
                </span>
                <p className="font-serif font-bold text-[#181A1E] text-sm">
                  Dr. Julian Vance &bull; Convening Chair
                </p>
                <p className="text-[11px] text-[#181A1E]/70 font-light">
                  Partner, Nexus Capital &amp; Global Sovereign Advisory
                </p>
              </div>

              <div className="space-y-1 p-3 rounded-lg bg-white/70 border border-black/5 shadow-xs">
                <span className="text-[10px] font-mono text-[#8C6D2D] font-bold uppercase tracking-wider block">
                  Culinary &amp; Dining Program
                </span>
                <p className="font-serif font-bold text-[#181A1E] text-sm">
                  4-Course Private Tasting &bull; Jean-Michel
                </p>
                <p className="text-[11px] text-[#181A1E]/70 font-light">
                  Allocated table seating with Grand Cru wine pairings
                </p>
              </div>

              <div className="space-y-1 p-3 rounded-lg bg-white/70 border border-black/5 shadow-xs">
                <span className="text-[10px] font-mono text-[#8C6D2D] font-bold uppercase tracking-wider block">
                  Security Protocol
                </span>
                <p className="font-serif font-bold text-[#181A1E] text-sm">
                  Level-1 Accreditation Required
                </p>
                <p className="text-[11px] text-[#181A1E]/70 font-light">
                  Photo ID &amp; encrypted digital pass verification at private foyer
                </p>
              </div>

              <div className="space-y-1 p-3 rounded-lg bg-white/70 border border-black/5 shadow-xs">
                <span className="text-[10px] font-mono text-[#8C6D2D] font-bold uppercase tracking-wider block">
                  Attire &amp; Code of Conduct
                </span>
                <p className="font-serif font-bold text-[#181A1E] text-sm">
                  Executive Formal / Dark Lounge Suit
                </p>
                <p className="text-[11px] text-[#181A1E]/70 font-light">
                  No recording devices or media presence permitted
                </p>
              </div>
            </div>

            {/* Official Signatory & Gold Foil Seal */}
            <div className="pt-4 border-t border-[#C5A059]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* Debossed Gold Seal Medallion */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#8C6D2D] via-[#E2C889] to-[#C5A059] p-0.5 shadow-md flex items-center justify-center shrink-0">
                  <div className="w-full h-full rounded-full border-2 border-dashed border-[#4D3A13]/40 flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#4D3A13]" />
                  </div>
                </div>
                <div className="text-left">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#8C6D2D] block">
                    SEAL OF THE CONVENING COUNCIL
                  </span>
                  <span className="text-xs font-serif italic text-[#181A1E] block">
                    Authenticated for Executive Admission
                  </span>
                </div>
              </div>

              <div className="text-center sm:text-right space-y-0.5">
                <p className="font-serif italic text-base text-[#181A1E] font-medium tracking-wide">
                  Julian Vance
                </p>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#181A1E]/60 block">
                  Convening Chair &bull; Nexus Global Forum
                </span>
              </div>
            </div>
          </div>

          {/* Tactile Skeuomorphic Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#rsvp"
              className="px-8 sm:px-10 py-4 rounded-xl bg-gradient-to-b from-[#2B2F37] via-[#20232A] to-[#15171C] border border-white/20 text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-white shadow-[0_5px_0_#0B0C0E,0_10px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.3)] hover:from-[#353B45] hover:to-[#1B1E24] active:translate-y-[3px] active:shadow-[0_2px_0_#0B0C0E] transition-all flex items-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-[#E2C889]" />
              <span>RSVP Executive Attendance</span>
              <ArrowRight className="w-4 h-4 text-[#E2C889]" />
            </a>

            <button
              onClick={handleCalendar}
              className="px-6 sm:px-8 py-4 rounded-xl bg-gradient-to-b from-white to-[#E8E4D9] border border-black/15 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#181A1E] shadow-[0_4px_0_#BCB7A9,0_8px_15px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.9)] hover:bg-[#F2EFE6] active:translate-y-[2px] active:shadow-[0_2px_0_#BCB7A9] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#8C6D2D]" />
              <span>Add to Calendar</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
