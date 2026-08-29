import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Outfit } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sophia's 25th Milestone Soirée | Birthday Invitation",
  description: "Join us for cocktails, dinner, and dancing to celebrate Sophia's 25th Birthday on Saturday, October 24, 2026 at The Glasshouse Sky Lounge.",
};

export default function BirthdayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${plusJakarta.variable} ${outfit.variable} ${playfair.variable} min-h-screen bg-[#0E0C12] text-[#F7F5F2] font-sans selection:bg-[#FF5376]/30 selection:text-[#FF8FA3]`}
      style={{
        fontFamily: "var(--font-jakarta), sans-serif",
      }}
    >
      {children}
    </div>
  );
}
