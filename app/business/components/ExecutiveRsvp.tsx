"use client";

import { useState } from "react";
import { ShieldCheck, CheckCircle2, Building, Briefcase, Mail, User, AlertCircle } from "lucide-react";

export function ExecutiveRsvp() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    organization: "",
    email: "",
    status: "attending",
    dietary: "",
    securityClearanceNote: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.organization) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="rsvp" className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="space-y-2 mb-12 text-center">
        <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#C5A059] uppercase block">
          Accreditation Form &bull; RSVP Required
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#E6E4DF] tracking-tight">
          Executive Delegate Registration
        </h2>
        <p className="text-xs sm:text-sm text-[#A8A5A0] font-light max-w-md mx-auto">
          Kindly verify your credentials and seat reservation before October 28, 2026.
        </p>
        <div className="w-14 h-[1.5px] bg-[#C5A059] mx-auto mt-3" />
      </div>

      {/* Skeuomorphic Registration Dossier Form */}
      <div
        className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-left border-2 border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.15)] relative overflow-hidden"
        style={{
          background: "linear-gradient(155deg, #22252C 0%, #181A1F 60%, #121316 100%)",
        }}
      >
        {/* Subtle Stitched Seam Border */}
        <div className="absolute inset-2.5 rounded-2xl border border-dashed border-[#C5A059]/25 pointer-events-none" />

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Status Selection Buttons */}
            <div className="space-y-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-white/80 font-semibold">
                Accreditation Status *
              </label>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, status: "attending" })}
                  className={`py-3.5 px-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    formData.status === "attending"
                      ? "bg-gradient-to-b from-[#2B2F37] to-[#15171C] text-white border border-[#C5A059]/60 shadow-[0_4px_0_#0B0C0E,0_8px_15px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.25)]"
                      : "bg-black/30 border border-white/10 text-white/60 hover:bg-black/50"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>I Will Attend</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, status: "declined" })}
                  className={`py-3.5 px-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    formData.status === "declined"
                      ? "bg-gradient-to-b from-[#2B2F37] to-[#15171C] text-white border border-white/30 shadow-[0_4px_0_#0B0C0E,inset_0_1px_0_rgba(255,255,255,0.2)]"
                      : "bg-black/30 border border-white/10 text-white/60 hover:bg-black/50"
                  }`}
                >
                  <span>Unable to Attend</span>
                </button>
              </div>
            </div>

            {/* Delegate Full Name & Title */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-white/80 font-medium">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Marcus Sterling"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#111215] border border-white/15 text-white placeholder-white/30 text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:outline-none focus:border-[#C5A059] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-white/80 font-medium">
                  Executive Title *
                </label>
                <div className="relative">
                  <Briefcase className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. Managing Partner / CEO"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#111215] border border-white/15 text-white placeholder-white/30 text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:outline-none focus:border-[#C5A059] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Organization & Corporate Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-white/80 font-medium">
                  Firm / Organization *
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Sterling Capital Ventures"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#111215] border border-white/15 text-white placeholder-white/30 text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:outline-none focus:border-[#C5A059] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-white/80 font-medium">
                  Corporate Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. marcus@sterlingcap.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#111215] border border-white/15 text-white placeholder-white/30 text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:outline-none focus:border-[#C5A059] transition-all"
                  />
                </div>
              </div>
            </div>

            {formData.status === "attending" && (
              <div className="space-y-4 pt-1">
                {/* Dietary & Dining Notes */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/80 font-medium">
                    Private Dinner Dietary Preferences
                  </label>
                  <input
                    type="text"
                    value={formData.dietary}
                    onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                    placeholder="e.g. Pescatarian, Gluten-Free, No Restrictions"
                    className="w-full px-4 py-3 rounded-xl bg-[#111215] border border-white/15 text-white placeholder-white/30 text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:outline-none focus:border-[#C5A059] transition-all"
                  />
                </div>

                {/* Security / Special Requests */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/80 font-medium flex items-center justify-between">
                    <span>Security Clearance / Bilateral Discussion Topic</span>
                    <span className="text-[10px] text-white/40 font-normal">Optional</span>
                  </label>
                  <input
                    type="text"
                    value={formData.securityClearanceNote}
                    onChange={(e) => setFormData({ ...formData, securityClearanceNote: e.target.value })}
                    placeholder="e.g. Interested in Infrastructure Co-Investment Syndicate"
                    className="w-full px-4 py-3 rounded-xl bg-[#111215] border border-white/15 text-white placeholder-white/30 text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:outline-none focus:border-[#C5A059] transition-all"
                  />
                </div>
              </div>
            )}

            {/* Tactile 3D Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-b from-[#2E333D] via-[#22252D] to-[#15171C] border border-white/20 text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-white shadow-[0_5px_0_#0A0B0E,0_10px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.3)] hover:from-[#373D49] hover:to-[#1C1F25] active:translate-y-[3px] active:shadow-[0_2px_0_#0A0B0E] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Processing Accreditation...</span>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4 text-[#E2C889]" />
                    <span>Transmit Executive Confirmation</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-10 space-y-5 relative z-10">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C5A059] font-bold">
                Accreditation Recorded
              </span>
              <h3 className="text-3xl font-serif text-white font-bold">
                Confirmation Verified, {formData.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#A8A5A0] max-w-md mx-auto font-light leading-relaxed">
                {formData.status === "attending"
                  ? `Your delegate seat for ${formData.organization} at the 2026 Nexus Global Leadership Summit has been reserved. A confidential briefing dossier and digital pass have been dispatched to ${formData.email}.`
                  : "Your response has been noted and your seat allocation released. Thank you for notifying the executive forum."}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10 max-w-md mx-auto text-left space-y-1 font-mono text-xs text-white/80">
              <div className="flex justify-between border-b border-white/10 pb-1.5 mb-1.5">
                <span className="text-[#C5A059]">REGISTRATION ID:</span>
                <span>#NX-2026-CONF-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <div className="flex justify-between text-[11px] text-white/60">
                <span>SECURITY CLEARANCE:</span>
                <span className="text-emerald-400 font-bold">TIER 1 (CONFIRMED)</span>
              </div>
            </div>

            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs font-mono tracking-widest text-[#C5A059] hover:underline pt-3 font-semibold cursor-pointer block mx-auto"
            >
              Modify Delegation Entry
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
