"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Navigation, Car, Wine, Music, Cake, Sparkles } from "lucide-react";

export function PartyItinerary() {
  const schedule = [
    {
      time: "7:00 PM",
      title: "Golden Hour Cocktails & Canapés",
      description:
        "Arrive to signature French 75 cocktails, seasonal hors d'oeuvres, and sunset skyline views on the terrace.",
      icon: Wine,
      accent: "text-[#FF758F] border-[#FF3366] bg-[#FF3366]/20",
    },
    {
      time: "8:30 PM",
      title: "Seated Birthday Dinner & Toasts",
      description:
        "A private 3-course chef's dinner with wine pairings, celebratory speeches, and shared laughter.",
      icon: Sparkles,
      accent: "text-[#FBBF24] border-[#F59E0B] bg-[#F59E0B]/20",
    },
    {
      time: "9:45 PM",
      title: "Birthday Cake & Champagne Tower",
      description:
        "Sparklers, ceremonial cutting of the strawberry matcha chantilly cake, and a champagne cascade toast.",
      icon: Cake,
      accent: "text-[#A855F7] border-[#A855F7] bg-[#A855F7]/20",
    },
    {
      time: "10:15 PM",
      title: "Late Night DJ Set & Dancing",
      description:
        "The lights dim and the music turns up. Dancing under the glass ceiling until late.",
      icon: Music,
      accent: "text-[#06B6D4] border-[#06B6D4] bg-[#06B6D4]/20",
    },
  ];

  const handleOpenMaps = () => {
    window.open(
      "https://maps.google.com/?q=The+Glasshouse+Rooftop+Los+Angeles",
      "_blank"
    );
  };

  return (
    <section id="itinerary" className="relative py-20 sm:py-28 px-6 max-w-6xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-14 sm:mb-18">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-[#FF758F] to-[#FBBF24] bg-clip-text text-transparent block">
          Plan Your Evening
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
          Itinerary & Location
        </h2>
        <div className="w-16 h-[2px] bg-gradient-to-r from-[#FF3366] to-[#F59E0B] mx-auto mt-3 shadow-[0_0_10px_rgba(255,51,102,0.8)]" />
      </div>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: Schedule Timeline */}
        <div className="lg:col-span-7 space-y-4 text-left">
          <h3 className="text-xl font-serif font-medium text-white mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#FF758F]" />
            <span>Evening Timeline</span>
          </h3>

          <div className="relative pl-6 sm:pl-8 space-y-8 border-l-2 border-white/15">
            {schedule.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot with Colorful Glow */}
                  <div className={`absolute -left-[35px] sm:-left-[43px] top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-md backdrop-blur-md transition-transform duration-300 group-hover:scale-110 ${item.accent}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  <div className="space-y-1.5 p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 shadow-lg hover:border-white/20 transition-all backdrop-blur-md">
                    <span className="text-xs font-mono font-bold tracking-wider uppercase block bg-gradient-to-r from-[#FF758F] to-[#FBBF24] bg-clip-text text-transparent">
                      {item.time}
                    </span>
                    <h4 className="text-base sm:text-lg font-serif font-medium text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right: Venue & Directions Card */}
        <div id="venue" className="lg:col-span-5 space-y-6 text-left">
          <h3 className="text-xl font-serif font-medium text-white mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#F59E0B]" />
            <span>The Venue</span>
          </h3>

          <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.05] border border-white/15 shadow-2xl space-y-6 backdrop-blur-2xl">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#FF8FA3] block">
                Penthouse Level
              </span>
              <h4 className="text-2xl font-serif text-white">
                The Glasshouse Sky Lounge
              </h4>
              <p className="text-xs sm:text-sm text-white/80 font-light flex items-start gap-1.5 pt-1">
                <MapPin className="w-4 h-4 text-[#FF758F] shrink-0 mt-0.5" />
                <span>850 South Grand Avenue, Penthouse 42, Los Angeles, CA 90017</span>
              </p>
            </div>

            <div className="space-y-3 pt-2 border-t border-white/10 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <Car className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Valet &amp; Parking</span>
                  <span className="font-light text-xs text-white/70">
                    Complimentary valet parking available at the Grand Avenue entrance. Rideshare drop-off directly under the covered marquee.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <Navigation className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Guest Check-In</span>
                  <span className="font-light text-xs text-white/70">
                    Inform the lobby concierge you are attending Sophia&apos;s 25th Milestone Soirée for private elevator access to the Penthouse.
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleOpenMaps}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#FF3366] to-[#FF758F] hover:brightness-110 text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-[0_0_20px_rgba(255,51,102,0.4)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5 text-white" />
              <span>Open in Google Maps</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
