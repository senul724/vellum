import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amelia & Liam | Wedding Invitation",
  description: "Join us in celebrating the wedding of Amelia & Liam on October 14, 2026 at The Glasshouse at Willow Creek.",
};

export default function WeddingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${cormorant.variable} ${plusJakarta.variable} ${playfair.variable} min-h-screen bg-[#FAF7F2] text-[#2C3E35] font-sans selection:bg-[#D4AF37]/20 selection:text-[#2C3E35]`}
      style={{
        fontFamily: "var(--font-jakarta), sans-serif",
      }}
    >
      {children}
    </div>
  );
}
