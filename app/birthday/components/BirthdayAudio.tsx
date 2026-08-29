"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";

interface BirthdayAudioContextType {
  isPlaying: boolean;
  toggleMusic: () => void;
  playMusic: () => void;
  pauseMusic: () => void;
}

const BirthdayAudioContext = createContext<BirthdayAudioContextType>({
  isPlaying: false,
  toggleMusic: () => {},
  playMusic: () => {},
  pauseMusic: () => {},
});

export function BirthdayAudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio instance with birthday background MP3 track
    const audio = new Audio("/audio/bday.mp3");
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
          console.debug("Autoplay blocked pending user interaction:", err);
        });
    };

    startPlaying();

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

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  const playMusic = () => {
    if (!audioRef.current || isPlaying) return;
    audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
  };

  const pauseMusic = () => {
    if (!audioRef.current || !isPlaying) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <BirthdayAudioContext.Provider value={{ isPlaying, toggleMusic, playMusic, pauseMusic }}>
      {children}
    </BirthdayAudioContext.Provider>
  );
}

export function useBirthdayAudio() {
  return useContext(BirthdayAudioContext);
}
