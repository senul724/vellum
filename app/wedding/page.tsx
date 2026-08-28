import { WeddingAudioProvider } from "./components/WeddingAudio";
import { ParallaxBackground } from "./components/ParallaxBackground";
import { FixedGoldFrame } from "./components/FixedGoldFrame";
import { EnvelopeOpener } from "./components/EnvelopeOpener";
import { FallingPetals } from "./components/FallingPetals";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Story } from "./components/Story";
import { ScheduleVenue } from "./components/ScheduleVenue";
import { Gallery } from "./components/Gallery";
import { RsvpForm } from "./components/RsvpForm";
import { Footer } from "./components/Footer";

export default function WeddingPage() {
  return (
    <WeddingAudioProvider>
      <EnvelopeOpener>
        {/* Fixed Ornate Gold Viewport Frame */}
        <FixedGoldFrame />

        {/* Optimized Floating Rose & Champagne Petals */}
        <FallingPetals />

        <main className="relative min-h-screen overflow-x-hidden">
          {/* Multi-layered Parallax Background with Mesh Orbs & Watermarks */}
          <ParallaxBackground />

          {/* Floating navigation header with scroll progress & audio player */}
          <Navbar />

          {/* Hero section with high-res glasshouse backdrop & live countdown timer */}
          <Hero />

          {/* Story section with differential multi-depth scroll parallax */}
          <Story />

          {/* Schedule & Venue section with scroll progress timeline */}
          <ScheduleVenue />

          {/* Gallery section with column parallax scroll & lightbox */}
          <Gallery />

          {/* RSVP section with 3D tilt card, confetti & confirmation */}
          <RsvpForm />

          {/* Closing Footer */}
          <Footer />
        </main>
      </EnvelopeOpener>
    </WeddingAudioProvider>
  );
}
