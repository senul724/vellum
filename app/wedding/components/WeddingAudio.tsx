"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";

interface WeddingAudioContextType {
  isPlaying: boolean;
  toggleMusic: () => void;
  playMusic: () => void;
  pauseMusic: () => void;
}

const WeddingAudioContext = createContext<WeddingAudioContextType>({
  isPlaying: false,
  toggleMusic: () => {},
  playMusic: () => {},
  pauseMusic: () => {},
});

export function WeddingAudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio instance with the custom wedding MP3 track
    const audio = new Audio("/audio/wedding.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    const startPlaying = () => {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          // Browser prevented unprompted autoplay without user interaction
          console.debug("Autoplay blocked pending user interaction:", err);
        });
    };

    // Attempt default playback immediately
    startPlaying();

    // Fallback: Start immediately upon first user interaction (click/touch anywhere or wax seal)
    const handleFirstInteraction = () => {
      if (audio.paused) {
        startPlaying();
      }
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.debug("Play error:", err));
    }
  };

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  return (
    <WeddingAudioContext.Provider value={{ isPlaying, toggleMusic, playMusic, pauseMusic }}>
      {children}
    </WeddingAudioContext.Provider>
  );
}

export function useWeddingAudio() {
  return useContext(WeddingAudioContext);
}
