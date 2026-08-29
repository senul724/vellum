"use client";

import { Sparkles, Heart } from "lucide-react";

export function PartyFooter() {
  return (
    <footer className="relative py-16 px-6 bg-[#07090F] text-[#9CA3AF] overflow-hidden border-t border-white/10 z-10 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400">
          <span>🌴</span>
          <span>Slack Status: Out of Office until Monday</span>
        </div>

        <div className="space-y-1">
          <h4 className="font-serif font-bold text-white text-xl">
            Voxel Labs &bull; Annual Studio Celebration 2026
          </h4>
          <p className="text-xs font-mono text-white/50 tracking-wider uppercase">
            December 18, 2026 &bull; The Timberline Rooftop, San Francisco
          </p>
        </div>

        <div className="w-16 h-[1px] bg-white/10 mx-auto" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50 pt-2">
          <p>© 2026 Voxel Labs Inc. For team members &amp; invited guests.</p>
          <div className="flex items-center gap-1 text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Powered by Inviteside Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
