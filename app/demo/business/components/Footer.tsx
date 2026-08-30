"use client";

import { ShieldCheck, Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-16 px-6 bg-[#0E0F12] text-[#A8A5A0] overflow-hidden border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Monogram Emblem */}
        <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-[#E2C889] via-[#C5A059] to-[#8C6D2D] p-0.5 mx-auto shadow-md flex items-center justify-center">
          <div className="w-full h-full rounded-[6px] bg-[#16181D] flex items-center justify-center font-mono text-xs font-black text-[#E2C889]">
            NX
          </div>
        </div>

        <div className="space-y-1">
          <h4 className="font-serif font-bold text-white text-lg tracking-tight">
            The Nexus Global Leadership Forum
          </h4>
          <p className="text-xs font-mono text-[#C5A059] tracking-wider uppercase">
            San Francisco &bull; London &bull; Singapore
          </p>
        </div>

        <p className="text-xs text-[#A8A5A0]/70 max-w-md mx-auto font-light leading-relaxed">
          This invitation and summit proceedings are privileged and confidential. Distributed exclusively to accredited executive delegates under the Chatham House Rule.
        </p>

        <div className="w-20 h-[1px] bg-white/10 mx-auto" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/50 pt-2">
          <p>&copy; 2026 Nexus Forum Holdings Ltd. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-[#C5A059]">
            <Lock className="w-3 h-3" />
            <span>Encrypted Event Page &bull; Inviteside Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
