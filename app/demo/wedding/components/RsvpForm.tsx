"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, Heart, Utensils, Mail, User, Users, ChevronDown } from "lucide-react";
import { TiltCard } from "./TiltCard";

export function RsvpForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    attending: "attending",
    guestCount: "1",
    dietary: "none",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Multi-stage celebratory confetti
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#E8D8B0", "#2C3E35", "#F3E5C8"],
      });

      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 60,
          origin: { x: 0 },
          colors: ["#D4AF37", "#E8D8B0"],
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 60,
          origin: { x: 1 },
          colors: ["#D4AF37", "#2C3E35"],
        });
      }, 250);
    }, 800);
  };

  return (
    <section id="rsvp" className="relative py-28 px-6 bg-[#F5F0E8]/40">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-2 block">
            Kindly Respond
          </span>
          <h2
            className="text-4xl md:text-5xl font-serif text-[#2C3E35] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            R.S.V.P.
          </h2>
          <p className="text-sm text-[#2C3E35]/70 max-w-md mx-auto font-light">
            Please reply by <span className="font-semibold text-[#2C3E35]">September 1, 2026</span> to help us prepare for your presence.
          </p>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </motion.div>

        {/* 3D Tilt Card Container wrapped in AnimatePresence */}
        <TiltCard tiltDegree={8} scaleOnHover={1.01}>
          <div className="relative bg-white/85 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/40 shadow-[0_25px_60px_rgba(44,62,53,0.09)]">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="rsvp-form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#2C3E35] flex items-center gap-2">
                        <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/30 text-[#2C3E35] placeholder:text-[#2C3E35]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#2C3E35] flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. eleanor@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/30 text-[#2C3E35] placeholder:text-[#2C3E35]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Attendance Status */}
                  <div className="space-y-3">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#2C3E35] flex items-center gap-2">
                      <Heart className="w-3.5 h-3.5 text-[#D4AF37]" />
                      Will you be attending? *
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, attending: "attending" })}
                        className={`p-4 rounded-2xl border text-center transition-all text-sm font-medium cursor-pointer ${
                          formData.attending === "attending"
                            ? "bg-[#2C3E35] text-white border-[#2C3E35] shadow-md"
                            : "bg-[#FAF7F2] text-[#2C3E35] border-[#D4AF37]/30 hover:border-[#D4AF37]"
                        }`}
                      >
                        <p className="font-semibold">Joyfully Accepts</p>
                        <p className="text-[11px] opacity-80 mt-0.5">I will be there!</p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, attending: "declining" })}
                        className={`p-4 rounded-2xl border text-center transition-all text-sm font-medium cursor-pointer ${
                          formData.attending === "declining"
                            ? "bg-[#2C3E35] text-white border-[#2C3E35] shadow-md"
                            : "bg-[#FAF7F2] text-[#2C3E35] border-[#D4AF37]/30 hover:border-[#D4AF37]"
                        }`}
                      >
                        <p className="font-semibold">Regretfully Declines</p>
                        <p className="text-[11px] opacity-80 mt-0.5">Sending my best</p>
                      </button>
                    </div>
                  </div>

                  {/* Attendance Count (when attending) & Dietary Restrictions Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Attendance Count */}
                    {formData.attending === "attending" && (
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#2C3E35] flex items-center gap-2">
                          <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                          Number of Guests Attending
                        </label>
                        <div className="relative">
                          <select
                            value={formData.guestCount}
                            onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/30 text-[#2C3E35] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all text-sm appearance-none cursor-pointer pr-10 font-medium"
                          >
                            <option value="1">1 Guest (Just Me)</option>
                            <option value="2">2 Guests (+1 Guest)</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5 Guests</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-[#D4AF37] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    )}

                    {/* Dietary Restrictions Dropdown */}
                    <div className={`space-y-2 ${formData.attending !== "attending" ? "sm:col-span-2" : ""}`}>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#2C3E35] flex items-center gap-2">
                        <Utensils className="w-3.5 h-3.5 text-[#D4AF37]" />
                        Dietary Preferences
                      </label>
                      <div className="relative">
                        <select
                          value={formData.dietary}
                          onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#FAF7F2] border border-[#D4AF37]/30 text-[#2C3E35] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all text-sm appearance-none cursor-pointer pr-10"
                        >
                          <option value="none">Standard / No Dietary Restrictions</option>
                          <option value="vegetarian">Vegetarian</option>
                          <option value="vegan">Vegan</option>
                          <option value="gluten-free">Gluten-Free</option>
                          <option value="pescatarian">Pescatarian</option>
                          <option value="dairy-free">Dairy-Free</option>
                          <option value="nut-allergy">Nut Allergy / Special Requirement</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#D4AF37] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-white text-sm font-semibold uppercase tracking-widest hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    {isSubmitting ? (
                      <span>Sending Response...</span>
                    ) : (
                      <>
                        <span>Submit R.S.V.P.</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                /* Confirmation Card */
                <motion.div
                  key="rsvp-confirmation"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className="text-center py-8 px-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center mx-auto mb-6 shadow-md">
                    <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                    Response Received
                  </span>
                  <h3
                    className="text-3xl sm:text-4xl font-serif text-[#2C3E35] mt-1 mb-4"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {formData.attending === "attending"
                      ? "We Can't Wait to Celebrate with You!"
                      : "Warm Wishes & Thank You!"}
                  </h3>

                  <p className="text-sm sm:text-base text-[#2C3E35]/80 leading-relaxed font-light max-w-md mx-auto mb-6">
                    {formData.attending === "attending"
                      ? `Your RSVP has been successfully confirmed for ${formData.fullName}. We look forward to welcoming your party to The Glasshouse on October 14, 2026!`
                      : `We are sorry you won't be able to join us in person, ${formData.fullName}. Thank you so much for your warm thoughts and well wishes.`}
                  </p>

                  {/* Attendance Count Badge (Replaces the email address badge) */}
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#2C3E35] mb-8 shadow-xs">
                    <Users className="w-4 h-4 text-[#D4AF37]" />
                    <span>
                      Confirmed Attendance:{" "}
                      <span className="text-[#D4AF37]">
                        {formData.attending === "attending"
                          ? `${formData.guestCount} ${Number(formData.guestCount) === 1 ? "Guest" : "Guests"}`
                          : "0 (Declined)"}
                      </span>
                    </span>
                  </div>

                  <div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#2C3E35]/60 uppercase tracking-widest underline hover:text-[#D4AF37] transition-colors cursor-pointer"
                    >
                      Edit RSVP Information
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
