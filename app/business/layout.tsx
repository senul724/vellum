import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cinzel, Cormorant_Garamond } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexus Global Leadership Summit 2026 | Executive Invitation",
  description: "Official executive invitation to the 2026 Nexus Global Leadership Summit and Private Executive Dinner at The St. Regis Penthouse, San Francisco.",
};

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${plusJakarta.variable} ${cinzel.variable} ${cormorant.variable} min-h-screen bg-[#141518] text-[#E6E4DF] font-sans selection:bg-[#C5A059]/30 selection:text-[#E2C889]`}
      style={{
        fontFamily: "var(--font-jakarta), sans-serif",
      }}
    >
      {children}
    </div>
  );
}
