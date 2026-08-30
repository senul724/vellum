import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Out Of Office: The 2026 Annual Studio Party",
  description: "Slack is muted. The bar is open. Join us for the annual company holiday celebration, rooftop cocktails, DJ set, and team awards.",
};

export default function PartyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${plusJakarta.variable} ${playfair.variable} min-h-screen bg-[#0A0D14] text-[#F3F4F6] font-sans selection:bg-[#10B981]/30 selection:text-[#34D399]`}
      style={{
        fontFamily: "var(--font-jakarta), sans-serif",
      }}
    >
      {children}
    </div>
  );
}
