"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { CheckCircle2, Sparkles, Send, Beer, Music, Users, Ticket } from "lucide-react";

export function OfficeRsvp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "Engineering",
    attending: "yes",
    plusOne: "no",
    drink: "The Friday Deploy",
    songRequest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
        colors: ["#10B981", "#34D399", "#F59E0B", "#EC4899", "#3B82F6", "#FFFFFF"],
        ticks: 240,
        gravity: 0.8,
        scalar: 1.2,
      });
    }, 700);
  };

  return (
    <section id="rsvp" className="relative py-20 px-6 max-w-4xl mx-auto z-10 text-left">
      <div className="text-center space-y-2 mb-12">
        <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-emerald-400 block">
          Drink Ticket &bull; RSVP By Dec 10
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
          Claim Your Party Pass
        </h2>
        <p className="text-xs sm:text-sm text-white/70 font-light max-w-md mx-auto">
          Confirm your attendance so catering can lock in drink wristbands, taco counts, and party swag.
        </p>
        <div className="w-14 h-[1.5px] bg-emerald-400 mx-auto mt-2" />
      </div>

      <div className="rounded-3xl bg-white/[0.05] border border-white/15 backdrop-blur-2xl shadow-2xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Attending Toggle */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-white/80 font-semibold">
                  Will You Be There? *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: "yes" })}
                    className={`py-3.5 px-4 rounded-xl text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      formData.attending === "yes"
                        ? "bg-emerald-500 text-[#0B0E16] shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                        : "bg-white/[0.05] border border-white/10 text-white/70 hover:bg-white/[0.09]"
                    }`}
                  >
                    <span>Count Me In! 🍸</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: "no" })}
                    className={`py-3.5 px-4 rounded-xl text-xs sm:text-sm font-mono font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      formData.attending === "no"
                        ? "bg-white/20 text-white border border-white/30"
                        : "bg-white/[0.05] border border-white/10 text-white/70 hover:bg-white/[0.09]"
                    }`}
                  >
                    <span>Can&apos;t Make It 😢</span>
                  </button>
                </div>
              </div>

              {/* Name & Work Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/80 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-emerald-400 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/80 font-medium">
                    Company / Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@voxellabs.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-emerald-400 transition-all"
                  />
                </div>
              </div>

              {formData.attending === "yes" && (
                <div className="space-y-4 pt-1">
                  {/* Department & Plus One */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/80 font-medium">
                        Team / Department
                      </label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141A26] border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors cursor-pointer"
                      >
                        <option value="Engineering">Engineering / Infrastructure</option>
                        <option value="Design">Product Design / Creative</option>
                        <option value="Product">Product Management</option>
                        <option value="Marketing">Growth &amp; Marketing</option>
                        <option value="Operations">Operations &amp; People</option>
                        <option value="Leadership">Executive &amp; Founders</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/80 font-medium">
                        Bringing a Plus-One?
                      </label>
                      <select
                        value={formData.plusOne}
                        onChange={(e) => setFormData({ ...formData, plusOne: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141A26] border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors cursor-pointer"
                      >
                        <option value="no">Just Me (1 Drink Wristband)</option>
                        <option value="yes">Yes, Bringing a Partner (+1 Wristband)</option>
                      </select>
                    </div>
                  </div>

                  {/* Drink Preference & Song Request */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/80 font-medium">
                        First Round Welcome Drink
                      </label>
                      <select
                        value={formData.drink}
                        onChange={(e) => setFormData({ ...formData, drink: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141A26] border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors cursor-pointer"
                      >
                        <option value="The Friday Deploy">The Friday Deploy (Smoked Old Fashioned)</option>
                        <option value="Reply All Spritz">Reply All Spritz (Aperol &amp; Bubbles)</option>
                        <option value="Severed Ties Mezcal">Severed Ties Mezcal (Spicy Citrus)</option>
                        <option value="Zero-Inbox Mocktail">Zero-Inbox Mocktail (Zero-Proof Passionfruit)</option>
                        <option value="Craft IPA">West Coast Craft IPA</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono uppercase tracking-wider text-white/80 font-medium">
                        DJ Song Request 🎵
                      </label>
                      <input
                        type="text"
                        value={formData.songRequest}
                        onChange={(e) => setFormData({ ...formData, songRequest: e.target.value })}
                        placeholder="Song name or artist for the DJ"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-emerald-400 transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#0B0E16] text-xs sm:text-sm font-mono font-bold uppercase tracking-widest transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Generating Drink Pass...</span>
                ) : (
                  <>
                    <Ticket className="w-4 h-4 text-[#0B0E16]" />
                    <span>Confirm RSVP &amp; Claim Wristband</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 font-bold">
                  Party Wristband Confirmed
                </span>
                <h3 className="text-3xl font-serif text-white font-bold">
                  See you on the rooftop, {formData.name}!
                </h3>
                <p className="text-sm text-white/80 max-w-md mx-auto font-light leading-relaxed">
                  {formData.attending === "yes"
                    ? `Your RSVP for the ${formData.department} table has been confirmed. Your welcome drink '${formData.drink}' is queued up at the open bar!`
                    : "Sorry you can't join us! We'll raise a glass to you from the rooftop."}
                </p>
              </div>

              {formData.songRequest && (
                <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/15 max-w-md mx-auto text-left space-y-1">
                  <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                    Song Added to DJ Queue:
                  </span>
                  <p className="text-sm font-serif italic text-white/90">
                    &ldquo;{formData.songRequest}&rdquo;
                  </p>
                </div>
              )}

              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-mono tracking-widest text-emerald-400 hover:underline pt-2 font-semibold cursor-pointer block mx-auto"
              >
                Change or Edit RSVP
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
