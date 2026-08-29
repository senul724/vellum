import { BirthdayAudioProvider } from "./components/BirthdayAudio";
import { ParallaxBackground } from "./components/ParallaxBackground";
import { FixedGoldFrame } from "./components/FixedGoldFrame";
import { EnvelopeOpener } from "./components/EnvelopeOpener";
import { FloatingConfetti } from "./components/FloatingConfetti";
import { FloatingBalloons } from "./components/FloatingBalloons";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MilestoneNote } from "./components/MilestoneNote";
import { PartyItinerary } from "./components/PartyItinerary";
import { BirthdayRsvp } from "./components/BirthdayRsvp";
import { Footer } from "./components/Footer";

export default function BirthdayPage() {
  return (
    <BirthdayAudioProvider>
      <EnvelopeOpener>
        {/* Fixed Gold Frame Bezel */}
        <FixedGoldFrame />

        {/* Celebratory Floating Sparkles & Confetti */}
        <FloatingConfetti />

        {/* 3D Floating Metallic Balloons (Interactive: Click to pop!) */}
        <FloatingBalloons />

        <main className="relative min-h-screen overflow-x-hidden">
          {/* Parallax Atmospheric Background */}
          <ParallaxBackground />

          {/* Floating Navigation Bar with Birthday Audio Player */}
          <Navbar />

          {/* Hero Section with Live Countdown Timer */}
          <Hero />

          {/* Single Signature Milestone Portrait & Celebration Toast (Less photos as requested) */}
          <MilestoneNote />

          {/* Evening Schedule Timeline & Rooftop Venue Details */}
          <PartyItinerary />

          {/* Interactive Birthday RSVP with Drink Choices & Keepsake Wishes */}
          <BirthdayRsvp />

          {/* Celebratory Footer */}
          <Footer />
        </main>
      </EnvelopeOpener>
    </BirthdayAudioProvider>
  );
}
