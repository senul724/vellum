"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { CheckCircle2, Sparkles, Send, Wine, MessageSquare } from "lucide-react";

export function BirthdayRsvp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "yes",
    guestCount: "1",
    drinkChoice: "champagne",
    dietary: "",
    wish: "",
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
        particleCount: 140,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#FF3366", "#A855F7", "#F59E0B", "#06B6D4", "#FFD700", "#FFFFFF"],
        ticks: 280,
        gravity: 0.7,
        scalar: 1.3,
      });
    }, 850);
  };

  return (
    <section id="rsvp" className="relative py-20 sm:py-28 px-6 max-w-4xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center space-y-2 mb-12 sm:mb-16">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] bg-gradient-to-r from-[#FF758F] to-[#FBBF24] bg-clip-text text-transparent block">
          Kindly Respond By October 10th
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
          Celebrate With Sophia
        </h2>
        <p className="text-xs sm:text-sm text-white/70 font-light max-w-md mx-auto pt-1">
          Please let us know if you can join us for cocktails, dinner, and dancing under the stars.
        </p>
        <div className="w-16 h-[2px] bg-gradient-to-r from-[#FF3366] to-[#F59E0B] mx-auto mt-3 shadow-[0_0_10px_rgba(255,51,102,0.8)]" />
      </div>

      <div className="relative rounded-3xl bg-white/[0.05] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.7)] p-6 sm:p-10 md:p-12 backdrop-blur-2xl overflow-hidden text-left">
        {/* Subtle Decorative Glow Border */}
        <div className="absolute inset-2 border border-white/5 rounded-2xl pointer-events-none" />

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 relative z-10"
            >
              {/* Attending Radios */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest font-semibold text-white/90">
                  Will you be attending? *
                </label>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: "yes" })}
                    className={`py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      formData.attending === "yes"
                        ? "bg-gradient-to-r from-[#FF3366] to-[#FF758F] text-white shadow-[0_0_20px_rgba(255,51,102,0.5)] border border-white/20"
                        : "bg-white/[0.05] border border-white/10 text-white/70 hover:bg-white/[0.09]"
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Joyfully Accept</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attending: "no" })}
                    className={`py-3.5 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      formData.attending === "no"
                        ? "bg-white/20 text-white border border-white/30"
                        : "bg-white/[0.05] border border-white/10 text-white/70 hover:bg-white/[0.09]"
                    }`}
                  >
                    <span>Sadly Decline</span>
                  </button>
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-medium text-white/80">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#FF5376] focus:ring-1 focus:ring-[#FF5376] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-medium text-white/80">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. eleanor@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#FF5376] focus:ring-1 focus:ring-[#FF5376] transition-all"
                  />
                </div>
              </div>

              {formData.attending === "yes" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-6 pt-2"
                >
                  {/* Guest Count & Drink Choice */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs uppercase tracking-wider font-medium text-white/80">
                        Number of Guests
                      </label>
                      <select
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1E1A26] border border-white/15 text-white text-sm focus:outline-none focus:border-[#FF5376] transition-colors cursor-pointer"
                      >
                        <option value="1">Just Me (1 Guest)</option>
                        <option value="2">Plus One (2 Guests)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs uppercase tracking-wider font-medium text-white/80">
                        Signature Welcome Drink
                      </label>
                      <select
                        value={formData.drinkChoice}
                        onChange={(e) => setFormData({ ...formData, drinkChoice: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1E1A26] border border-white/15 text-white text-sm focus:outline-none focus:border-[#FF5376] transition-colors cursor-pointer"
                      >
                        <option value="champagne">Champagne Toast</option>
                        <option value="french75">French 75 (Gin, Lemon, Bubbles)</option>
                        <option value="espresso">Espresso Martini</option>
                        <option value="mezcalita">Spicy Mezcalita</option>
                        <option value="mocktail">Sparkling Herbal Spritz (Zero Proof)</option>
                      </select>
                    </div>
                  </div>

                  {/* Dietary Requirements */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider font-medium text-white/80">
                      Dietary Preferences or Allergies
                    </label>
                    <input
                      type="text"
                      value={formData.dietary}
                      onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                      placeholder="e.g. Vegetarian, Gluten-Free, None"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#FF5376] transition-colors"
                    />
                  </div>
                </motion.div>
              )}

              {/* Birthday Wish / Keepsake Note */}
              <div className="space-y-1.5">
                <label className="block text-xs uppercase tracking-wider font-medium text-white/80 flex items-center justify-between">
                  <span>Birthday Wish for Sophia</span>
                  <span className="text-[11px] text-white/40 font-normal">Optional</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.wish}
                  onChange={(e) => setFormData({ ...formData, wish: e.target.value })}
                  placeholder="Share a sweet memory, birthday toast, or favorite joke for Sophia..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#FF5376] transition-colors resize-none"
                />
              </div>

              {/* Submit Button in Sunset Gradient */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#FF3366] via-[#FF5376] to-[#F59E0B] hover:brightness-110 text-white text-xs sm:text-sm uppercase tracking-widest font-bold transition-all shadow-[0_0_25px_rgba(255,51,102,0.4)] hover:shadow-[0_0_35px_rgba(255,51,102,0.6)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Submitting RSVP...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-white" />
                    <span>Confirm My RSVP</span>
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 sm:py-12 space-y-5"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FF3366] to-[#F59E0B] text-white mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(255,51,102,0.6)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] bg-gradient-to-r from-[#FF758F] to-[#FBBF24] bg-clip-text text-transparent font-bold">
                  RSVP Confirmed
                </span>
                <h3 className="text-3xl font-serif text-white">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-sm text-white/80 max-w-md mx-auto font-light leading-relaxed">
                  {formData.attending === "yes"
                    ? "Your reservation for Sophia's 25th Milestone Soirée has been confirmed. We cannot wait to raise a glass with you on October 24th!"
                    : "We're so sorry you cannot make it, but thank you for letting us know and sending your warm wishes!"}
                </p>
              </div>

              {formData.wish && (
                <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/15 max-w-md mx-auto text-left shadow-lg">
                  <span className="text-[10px] uppercase font-bold text-[#FF758F] block mb-1">
                    Your Wish for Sophia:
                  </span>
                  <p className="font-serif italic text-sm text-white/90">
                    &ldquo;{formData.wish}&rdquo;
                  </p>
                </div>
              )}

              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs uppercase tracking-widest text-[#FF758F] hover:underline pt-2 font-medium cursor-pointer"
              >
                Edit or Change RSVP
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
