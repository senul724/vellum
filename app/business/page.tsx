import { PortfolioClaspOpener } from "./components/PortfolioClaspOpener";
import { Navbar } from "./components/Navbar";
import { ExecutiveHero } from "./components/ExecutiveHero";
import { DelegateBadge } from "./components/DelegateBadge";
import { SummitAgenda } from "./components/SummitAgenda";
import { VenueDetails } from "./components/VenueDetails";
import { ExecutiveRsvp } from "./components/ExecutiveRsvp";
import { Footer } from "./components/Footer";

export default function BusinessPage() {
  return (
    <PortfolioClaspOpener>
      <main className="relative min-h-screen bg-[#111317] text-[#E6E4DF] overflow-x-hidden font-sans selection:bg-[#C5A059]/30 selection:text-[#E2C889]">
        {/* Subtle Textured Background Table Surface */}
        <div className="fixed inset-0 pointer-events-none bg-[#111317] bg-[radial-gradient(#ffffff07_1px,transparent_1px)] [background-size:24px_24px] z-0" />

        {/* Ambient Executive Glow */}
        <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[140px] pointer-events-none z-0" />

        {/* Tactile Executive Header */}
        <Navbar />

        {/* Heavy Cotton Letterpress Board & Chronometer Hero */}
        <ExecutiveHero />

        {/* Skeuomorphic VIP PVC Delegate Pass / Credential */}
        <DelegateBadge />

        {/* Structured Summit Agenda & Proceedings */}
        <SummitAgenda />

        {/* St. Regis Penthouse Location & Chatham House Security Protocol */}
        <VenueDetails />

        {/* Skeuomorphic Delegate Accreditation & RSVP Form */}
        <ExecutiveRsvp />

        {/* Executive Footer */}
        <Footer />
      </main>
    </PortfolioClaspOpener>
  );
}
