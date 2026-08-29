"use client";

import { Shield, QrCode, Cpu, CheckCircle2, Lock } from "lucide-react";

export function DelegateBadge() {
  return (
    <section id="badge" className="relative py-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <div className="space-y-2 mb-10 text-center">
        <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#C5A059] uppercase block">
          Digital Credential Specimen
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif text-[#E6E4DF] tracking-tight">
          Executive Delegate Pass
        </h2>
        <p className="text-xs sm:text-sm text-[#A8A5A0] font-light max-w-md mx-auto">
          Each confirmed attendee receives an encrypted personal digital pass and physical NFC credential upon arrival.
        </p>
      </div>

      {/* Skeuomorphic VIP Badge Card with Lanyard Hole */}
      <div className="relative max-w-md mx-auto">
        {/* Lanyard Top Strap & Clip */}
        <div className="flex flex-col items-center mb-[-12px] z-20 relative">
          <div className="w-6 h-12 bg-gradient-to-b from-[#1C1F26] to-[#2E333D] border-x border-white/20 shadow-md" />
          <div className="w-10 h-5 rounded-md bg-gradient-to-b from-[#E2C889] to-[#8C6D2D] border border-black/40 shadow-inner flex items-center justify-center">
            <div className="w-4 h-1 bg-[#4D3A13] rounded-full" />
          </div>
        </div>

        {/* The Physical PVC Card Body */}
        <div
          className="relative rounded-2xl p-6 sm:p-7 text-left shadow-[0_25px_50px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.06)] border border-white/10 overflow-hidden"
          style={{
            background: "linear-gradient(155deg, #252830 0%, #1A1C22 50%, #121317 100%)",
            color: "#FFFFFF",
          }}
        >
          {/* Lanyard Oval Punchout Slot */}
          <div className="w-12 h-2.5 rounded-full bg-[#0E0F12] border border-white/20 mx-auto mb-5 shadow-inner" />

          {/* Top Row: Emblem & Holographic Chip */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#E2C889] to-[#8C6D2D] p-0.5 shadow-sm flex items-center justify-center font-mono text-[10px] font-black text-[#1A1C20]">
                NX
              </div>
              <div>
                <span className="font-mono text-xs font-bold tracking-wider uppercase block leading-tight">
                  Nexus 2026
                </span>
                <span className="text-[9px] font-mono text-[#C5A059] uppercase">
                  Global Leadership
                </span>
              </div>
            </div>

            {/* Holographic Security Foil Chip */}
            <div className="w-11 h-8 rounded-md bg-gradient-to-tr from-[#94A3B8] via-[#E2E8F0] to-[#64748B] border border-white/40 shadow-inner flex items-center justify-center p-1">
              <Cpu className="w-4 h-4 text-slate-700 opacity-80" />
            </div>
          </div>

          {/* Delegate Information */}
          <div className="py-6 space-y-1">
            <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-widest block font-bold">
              Delegate Accreditation
            </span>
            <h3 className="text-2xl sm:text-3xl font-mono font-bold tracking-tight text-white">
              Executive Delegate
            </h3>
            <p className="text-xs text-white/70 font-mono">
              Enterprise Founder / Managing Director
            </p>
          </div>

          {/* Access Tier Badges */}
          <div className="flex flex-wrap gap-2 py-2">
            <span className="px-2.5 py-1 rounded-md bg-[#C5A059]/20 border border-[#C5A059]/40 text-[10px] font-mono text-[#E2C889] font-bold uppercase tracking-wider">
              Tier 1: Sovereign &bull; Keynote Access
            </span>
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
              Private Dining Confirmed
            </span>
          </div>

          {/* Barcode & Signature Row */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[9px] font-mono text-white/40 uppercase block">
                CREDENTIAL SERIAL ID
              </span>
              {/* Skeuomorphic SVG Barcode */}
              <div className="flex items-center gap-[2.5px] h-6 text-white/80">
                <div className="w-[3px] h-full bg-white/90" />
                <div className="w-[1px] h-full bg-white/60" />
                <div className="w-[4px] h-full bg-white/90" />
                <div className="w-[2px] h-full bg-white/70" />
                <div className="w-[1px] h-full bg-white/40" />
                <div className="w-[5px] h-full bg-white/90" />
                <div className="w-[2px] h-full bg-white/60" />
                <div className="w-[3px] h-full bg-white/90" />
                <div className="w-[1px] h-full bg-white/50" />
                <div className="w-[4px] h-full bg-white/90" />
                <div className="w-[2px] h-full bg-white/60" />
                <div className="w-[3px] h-full bg-white/90" />
              </div>
              <span className="text-[9px] font-mono tracking-widest text-[#C5A059]">
                NX-8824-2026-SF
              </span>
            </div>

            <div className="text-right">
              <span className="text-[9px] font-mono text-white/40 uppercase block">
                SECURITY VERIFIED
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold flex items-center justify-end gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                AUTHENTIC
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
