"use client";

import { Sparkles, Wine, GlassWater, Trophy, Heart } from "lucide-react";

export function PartyVibesPhoto() {
  const cocktails = [
    {
      name: "The Friday Deploy",
      type: "Bourbon & Bitters",
      desc: "Old fashioned bourbon, smoked angostura, flamed orange peel. Dangerously smooth.",
      icon: "🥃",
      tag: "High Stakes",
    },
    {
      name: "Reply All Spritz",
      type: "Aperol & Bubbles",
      desc: "Aperol, prosecco, blood orange, club soda. Refreshing with immediate social consequences.",
      icon: "🍹",
      tag: "Company Wide",
    },
    {
      name: "Severed Ties Mezcal",
      type: "Spicy Citrus Mezcal",
      desc: "Smoky mezcal, fresh lime, agave, muddled habanero. Represents zero unread notifications.",
      icon: "🍸",
      tag: "Spicy Favorite",
    },
    {
      name: "Zero-Inbox Mocktail",
      type: "Non-Alcoholic",
      desc: "Passionfruit puree, sparkling ginger beer, fresh lime, garden mint. 100% refreshed.",
      icon: "🧃",
      tag: "Zero-Proof",
    },
  ];

  return (
    <section id="vibes" className="relative py-16 px-6 max-w-6xl mx-auto z-10">
      {/* Featured Single Celebration Photo */}
      <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] border-2 border-white/15 group aspect-[16/9] max-h-[540px]">
        <img
          src="/office-party.jpg"
          alt="Voxel Labs team celebrating on the rooftop"
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 select-none"
        />

        {/* Ambient Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/30 to-transparent pointer-events-none" />

        {/* Bottom Photo Caption */}
        <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-300 backdrop-blur-md">
              Rooftop Loft &bull; Downtown SF
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white drop-shadow-md">
              Good People. Great Cocktails. Zero Slides.
            </h3>
          </div>
          <div className="text-xs font-mono text-white/80 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
            Open Bar starts at 6:00 PM Sharp 🍸
          </div>
        </div>
      </div>

      {/* Signature Drink Menu */}
      <div id="perks" className="mt-16 space-y-8 text-left">
        <div className="text-center space-y-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-emerald-400 block">
            Craft Cocktails &amp; Brews
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
            The Open Bar Menu
          </h2>
          <div className="w-14 h-[1.5px] bg-emerald-400 mx-auto mt-2" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cocktails.map((drink, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/40 transition-all backdrop-blur-md space-y-3 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{drink.icon}</span>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                    {drink.tag}
                  </span>
                </div>
                <h4 className="font-serif font-bold text-lg text-white">
                  {drink.name}
                </h4>
                <p className="text-[11px] font-mono text-emerald-400 font-semibold">
                  {drink.type}
                </p>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  {drink.desc}
                </p>
              </div>

              <div className="text-[10px] font-mono text-white/40 border-t border-white/10 pt-2 flex items-center justify-between">
                <span>Included in RSVP</span>
                <span className="text-emerald-400 font-bold">FREE TICKET</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
