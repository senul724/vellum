"use client";

import { Clock, Users, Coffee, Utensils, Sparkles, MessageSquare } from "lucide-react";

export function SummitAgenda() {
  const sessions = [
    {
      time: "17:30 - 18:30",
      type: "Executive Arrival",
      title: "Delegate Accreditation & Welcome Reception",
      speaker: "Private Penthouse Terrace",
      description:
        "Accreditation check-in, NFC credential issuance, curated champagne, and informal networking overlooking the San Francisco skyline.",
      icon: Coffee,
    },
    {
      time: "18:30 - 19:30",
      type: "Opening Keynote",
      title: "Frontier Infrastructure: Scaling Compute & Sovereign Capital",
      speaker: "Keynote: Dr. Julian Vance & Partner Panel",
      description:
        "A closed-door strategic assessment of next-generation AI enterprise architecture, infrastructure scaling costs, and sovereign investment thesis.",
      icon: Users,
    },
    {
      time: "19:30 - 20:30",
      type: "Fireside Assembly",
      title: "Cross-Industry Macro Alignment & Liquidity Outlook",
      speaker: "Moderated by Nexus Forum Leadership",
      description:
        "Chatham House Rule open dialogue among 150 participating founders, chief executives, and fund partners.",
      icon: MessageSquare,
    },
    {
      time: "20:30 - 22:00",
      type: "Private Dining",
      title: "4-Course Seated Dinner & Wine Pairings",
      speaker: "Conservatory Private Dining Room",
      description:
        "Curated tasting menu by Michelin-starred culinary team, allocated table seating by industry sector, and table-side strategic discussions.",
      icon: Utensils,
    },
    {
      time: "22:00 - LATE",
      type: "Closing Soirée",
      title: "Digestif Lounge & Strategic Conversations",
      speaker: "The St. Regis Sky Library",
      description:
        "Rare whiskeys, artisanal digestifs, and informal continuation of bilateral summit partnerships.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="agenda" className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="space-y-2 mb-12 text-center">
        <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#C5A059] uppercase block">
          Official Schedule of Proceedings
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#E6E4DF] tracking-tight">
          Summit Agenda & Program
        </h2>
        <div className="w-14 h-[1.5px] bg-[#C5A059] mx-auto mt-3" />
      </div>

      {/* Tactile Program Cards */}
      <div className="space-y-4">
        {sessions.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="rounded-xl p-5 sm:p-6 text-left border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all hover:border-[#C5A059]/40"
              style={{
                background: "linear-gradient(170deg, #20232B 0%, #17191E 100%)",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                {/* Time & Session Badge */}
                <div className="sm:w-48 shrink-0 space-y-1">
                  <span className="px-2.5 py-1 rounded-md bg-[#C5A059]/15 border border-[#C5A059]/30 text-[10px] font-mono font-bold text-[#E2C889] uppercase tracking-wider inline-block">
                    {item.type}
                  </span>
                  <div className="font-mono text-xs font-semibold text-white/90 flex items-center gap-1.5 pt-1">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{item.time}</span>
                  </div>
                </div>

                {/* Session Description */}
                <div className="flex-1 space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#C5A059] font-medium">
                    {item.speaker}
                  </p>
                  <p className="text-xs sm:text-sm text-[#A8A5A0] font-light leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
