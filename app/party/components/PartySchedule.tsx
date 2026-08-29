"use client";

import { Clock, Trophy, Utensils, Music, MapPin, Navigation, Car } from "lucide-react";

export function PartySchedule() {
  const schedule = [
    {
      time: "6:00 PM",
      title: "Sunset Golden Hour & Welcome Cocktails",
      desc: "Check your coat, grab your complimentary drink wristband, and enjoy appetizers on the terrace as the sun sets over the city.",
      icon: "🍸",
    },
    {
      time: "7:15 PM",
      title: "5-Minute Team Toast & Year in Review",
      desc: "A strictly non-boring, 5-minute thank you to the whole team for shipping so much great work this year. Zero PowerPoint allowed.",
      icon: "🥂",
    },
    {
      time: "7:45 PM",
      title: "The Golden Mug Superlative Awards",
      desc: "Annual peer-voted superlatives: 'Most Browser Tabs Open', 'Best Slack GIFs', 'Accidentally Muted While Giving a Speech', and 'Office Snack Legend'.",
      icon: "🏆",
    },
    {
      time: "8:30 PM",
      title: "DJ Takes Over & Dance Floor Opens",
      desc: "Upbeat disco, funk, and 90s hip-hop. The photo booth is live with props.",
      icon: "🎧",
    },
    {
      time: "10:30 PM",
      title: "Midnight Street Tacos & Churros",
      desc: "Fresh tacos al pastor, carne asada, and warm cinnamon churros delivered right to the rooftop lounge.",
      icon: "🌮",
    },
  ];

  const handleOpenMaps = () => {
    window.open("https://maps.google.com/?q=450+Mission+St+San+Francisco+CA", "_blank");
  };

  return (
    <section id="schedule" className="relative py-16 px-6 max-w-6xl mx-auto z-10 text-left">
      <div className="text-center space-y-2 mb-12">
        <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-emerald-400 block">
          Party Timeline
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
          The Evening Schedule
        </h2>
        <div className="w-14 h-[1.5px] bg-emerald-400 mx-auto mt-2" />
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left: Schedule List */}
        <div className="lg:col-span-7 space-y-4">
          {schedule.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/40 transition-all backdrop-blur-md flex items-start gap-4 shadow-sm"
            >
              <div className="text-2xl p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                    {item.time}
                  </span>
                </div>
                <h4 className="font-serif font-bold text-lg text-white">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Venue Info */}
        <div id="venue" className="lg:col-span-5 space-y-4">
          <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.05] border border-white/15 backdrop-blur-2xl shadow-xl space-y-5">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-300">
                Party Destination
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                The Timberline Rooftop
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-light flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>450 Mission Street, 22nd Floor Sky Terrace, San Francisco, CA</span>
              </p>
            </div>

            <div className="space-y-3 pt-2 border-t border-white/10 text-xs text-white/75">
              <div className="flex items-start gap-2.5">
                <Car className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Transit &amp; Uber Vouchers</span>
                  <span className="font-light text-white/60">
                    Company-sponsored Uber ride home voucher codes will be emailed to all attendees at 9:00 PM. 2 blocks from Montgomery BART.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <span className="text-base">👔</span>
                <div>
                  <span className="font-semibold text-white block">Dress Code</span>
                  <span className="font-light text-white/60">
                    Party Chic / Casual Glam. Wear what makes you happy and ready to dance!
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleOpenMaps}
              className="w-full py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#0B0E16] text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions in Maps</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
