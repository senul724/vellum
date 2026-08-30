"use client";

import { MapPin, Navigation, Car, ShieldAlert, Building, Phone } from "lucide-react";

export function VenueDetails() {
  const handleOpenMaps = () => {
    window.open(
      "https://maps.google.com/?q=The+St.+Regis+San+Francisco",
      "_blank"
    );
  };

  return (
    <section id="venue" className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="space-y-2 mb-12 text-center">
        <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#C5A059] uppercase block">
          Location &amp; Security Protocol
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#E6E4DF] tracking-tight">
          The St. Regis Penthouse &bull; SF
        </h2>
        <div className="w-14 h-[1.5px] bg-[#C5A059] mx-auto mt-3" />
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Venue Specs Card */}
        <div
          className="lg:col-span-7 rounded-2xl p-6 sm:p-8 text-left border border-white/10 shadow-2xl flex flex-col justify-between space-y-6"
          style={{
            background: "linear-gradient(160deg, #22252D 0%, #17191E 100%)",
          }}
        >
          <div className="space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#C5A059] block">
              Private Executive Floor
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              The St. Regis Penthouse &amp; Conservatory
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A5A0] font-light leading-relaxed flex items-start gap-2 pt-1">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>125 3rd Street, Penthouse Floor, San Francisco, CA 94103</span>
            </p>
          </div>

          {/* Protocols List */}
          <div className="space-y-3 pt-2 border-t border-white/10 text-xs sm:text-sm text-[#A8A5A0]">
            <div className="flex items-start gap-3">
              <Car className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <span className="font-mono font-bold text-white uppercase text-xs block">
                  Executive Car Service &amp; Valet
                </span>
                <span className="font-light text-xs text-[#A8A5A0]/80">
                  Complimentary black car valet staging at the main 3rd Street covered driveway. Drivers may coordinate with on-site security for private staging during dinner.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <Building className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <span className="font-mono font-bold text-white uppercase text-xs block">
                  Private Elevator Access
                </span>
                <span className="font-light text-xs text-[#A8A5A0]/80">
                  Dedicated express elevator keycard access to the Penthouse Level is managed by Nexus summit personnel stationed in the ground floor executive reception.
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={handleOpenMaps}
            className="w-full py-3.5 rounded-xl bg-gradient-to-b from-[#2E333D] to-[#1C1F26] border border-white/15 text-xs font-mono font-bold tracking-wider text-white shadow-[0_4px_0_#0D0E11,0_6px_10px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.25)] hover:from-[#353B47] hover:to-[#22262E] active:translate-y-[2px] active:shadow-[0_2px_0_#0D0E11] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-[#C5A059]" />
            <span>Open Destination in Maps</span>
          </button>
        </div>

        {/* Right: Security & Confidentiality Card */}
        <div
          className="lg:col-span-5 rounded-2xl p-6 sm:p-8 text-left border border-[#C5A059]/30 shadow-2xl flex flex-col justify-between space-y-6"
          style={{
            background: "linear-gradient(160deg, #1D1E24 0%, #131418 100%)",
          }}
        >
          <div className="space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-serif font-bold text-white">
              Chatham House Rule
            </h4>
            <p className="text-xs sm:text-sm text-[#A8A5A0] font-light leading-relaxed">
              All presentations, panels, and dinner conversations are conducted strictly under the Chatham House Rule. Participants are free to use the information received, but neither the identity nor the affiliation of the speakers may be revealed.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A059] font-bold block">
              Event Protocol Notes
            </span>
            <ul className="text-xs text-[#A8A5A0] space-y-1.5 list-disc list-inside font-light">
              <li>No media or press presence permitted</li>
              <li>Recording devices strictly prohibited</li>
              <li>Dress Code: Executive Business Formal</li>
            </ul>
          </div>

          <div className="text-[11px] font-mono text-white/50 border-t border-white/10 pt-3">
            Concierge Desk Contact: +1 (415) 555-0198
          </div>
        </div>
      </div>
    </section>
  );
}
