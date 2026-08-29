import { OfficeMemoOpener } from "./components/OfficeMemoOpener";
import { PartyNavbar } from "./components/PartyNavbar";
import { PartyHero } from "./components/PartyHero";
import { PartyVibesPhoto } from "./components/PartyVibesPhoto";
import { PartySchedule } from "./components/PartySchedule";
import { OfficeRsvp } from "./components/OfficeRsvp";
import { PartyFooter } from "./components/PartyFooter";

export default function OfficePartyPage() {
  return (
    <OfficeMemoOpener>
      <main className="relative min-h-screen bg-[#0A0D14] text-[#F3F4F6] overflow-x-hidden font-sans selection:bg-[#10B981]/30 selection:text-[#34D399]">
        {/* Subtle Background Grid & Starry Shimmer */}
        <div className="fixed inset-0 pointer-events-none bg-[#0A0D14] bg-[radial-gradient(#ffffff07_1px,transparent_1px)] [background-size:24px_24px] z-0" />

        {/* Ambient Rooftop Party Glow Orbs */}
        <div className="fixed -top-24 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="fixed top-1/3 -right-24 w-[450px] h-[450px] bg-teal-500/8 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="fixed bottom-10 left-10 w-[450px] h-[450px] bg-amber-500/8 rounded-full blur-[130px] pointer-events-none z-0" />

        {/* Top Navbar with Interactive Slack Status */}
        <PartyNavbar />

        {/* Hero Section */}
        <PartyHero />

        {/* Real Celebration Photo & Signature Cocktail Bar Menu */}
        <PartyVibesPhoto />

        {/* Evening Schedule & Rooftop Venue Information */}
        <PartySchedule />

        {/* Interactive RSVP Form with DJ Song Request */}
        <OfficeRsvp />

        {/* Celebratory Company Footer */}
        <PartyFooter />
      </main>
    </OfficeMemoOpener>
  );
}
