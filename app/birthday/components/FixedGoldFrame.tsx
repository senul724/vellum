"use client";

export function FixedGoldFrame() {
  return (
    <div className="fixed inset-3 sm:inset-6 pointer-events-none z-40 transition-all duration-500">
      {/* Outer Glow Party Border */}
      <div className="absolute inset-0 border border-white/10 rounded-2xl sm:rounded-3xl shadow-[0_0_20px_rgba(255,83,118,0.08)]" />
      {/* Inner Subtle Neon Border */}
      <div className="absolute inset-1 sm:inset-2 border border-white/5 rounded-xl sm:rounded-2xl" />

      {/* Top-Left Corner Party Balloon Accent */}
      <div className="absolute top-2.5 left-2.5 p-1">
        <svg width="24" height="34" viewBox="0 0 24 34" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="12" fill="url(#party-corner-rose)" />
          <ellipse cx="8" cy="8" rx="3" ry="1.5" fill="#FFFFFF" fillOpacity="0.75" transform="rotate(-30 8 8)" />
          <polygon points="10,23 14,23 12,25" fill="#99002E" />
          <path d="M 12 25 Q 8 28, 14 31 T 11 34" stroke="#F472B6" strokeWidth="1" />
        </svg>
      </div>

      {/* Top-Right Corner Party Balloon Accent */}
      <div className="absolute top-2.5 right-2.5 p-1 transform scale-x-[-1]">
        <svg width="24" height="34" viewBox="0 0 24 34" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="12" fill="url(#party-corner-amber)" />
          <ellipse cx="8" cy="8" rx="3" ry="1.5" fill="#FFFFFF" fillOpacity="0.75" transform="rotate(-30 8 8)" />
          <polygon points="10,23 14,23 12,25" fill="#92400E" />
          <path d="M 12 25 Q 8 28, 14 31 T 11 34" stroke="#FBBF24" strokeWidth="1" />
        </svg>
      </div>

      {/* Bottom-Left Corner Neon Starburst */}
      <div className="absolute bottom-2.5 left-2.5 p-1 text-[#FF5376]/70">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
          <path d="M 10 0 L 12 8 L 20 10 L 12 12 L 10 20 L 8 12 L 0 10 L 8 8 Z" />
        </svg>
      </div>

      {/* Bottom-Right Corner Neon Starburst */}
      <div className="absolute bottom-2.5 right-2.5 p-1 text-[#F59E0B]/70">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
          <path d="M 10 0 L 12 8 L 20 10 L 12 12 L 10 20 L 8 12 L 0 10 L 8 8 Z" />
        </svg>
      </div>

      {/* Gradient Definitions */}
      <svg className="hidden">
        <defs>
          <radialGradient id="party-corner-rose" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFB3C6" />
            <stop offset="45%" stopColor="#FF3366" />
            <stop offset="100%" stopColor="#99002E" />
          </radialGradient>
          <radialGradient id="party-corner-amber" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="45%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#92400E" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
