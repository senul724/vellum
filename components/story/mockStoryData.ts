import { WishStoryData } from "./types";

export const MOCK_STORIES: Record<string, WishStoryData> = {
  "sophia-bday": {
    id: "sophia-bday",
    recipientName: "Sophia",
    senderName: "Julian & Friends",
    coverTitle: "A Story of Friendship & Magic ✨",
    coverSubtitle: "Happy Birthday Sophia! Tap to begin your story...",
    coverImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    musicTheme: "birthday-melody",
    designId: "y2k-digital-camera",
    finalWishMessage: "Wishing you a year filled with sweet adventures, endless laughter, and all the magic you bring into the world! Happy Birthday!",
    finalPhotos: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
    ],
    slides: [
      {
        id: "slide-1",
        title: "Chapter 1: The Beginning 🌟",
        caption: "From the very first moment we met, your smile lit up every room and brought instant sunshine into our lives!",
        images: [
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
        ],
        bgGradient: "from-amber-950 via-stone-900 to-amber-900",
        dateTag: "Summer 2021",
        audioTone: "happy",
        themePreset: "golden",
        badge: "Sweet Start ✨",
      },
      {
        id: "slide-2",
        title: "Chapter 2: Endless Adventures 🚀",
        caption: "Late night road trips, spontaneous coffee runs, and laughing until our stomachs hurt. Unforgettable memories!",
        images: [
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800",
        ],
        bgGradient: "from-purple-950 via-stone-900 to-pink-950",
        dateTag: "Roadtrip 2023",
        audioTone: "fanfare",
        themePreset: "cyber",
        badge: "Wanderlust 🌌",
      },
      {
        id: "slide-3",
        title: "Chapter 3: Celebrating You 💖",
        caption: "You inspire everyone around you to be kinder, bolder, and more joyful. Today is all about celebrating YOU!",
        images: [
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
        ],
        bgGradient: "from-rose-950 via-stone-900 to-pink-900",
        dateTag: "Today ✨",
        audioTone: "soft",
        themePreset: "rose",
        badge: "Forever Cherished 💐",
      },
    ],
  },
  "noah-bday": {
    id: "noah-bday",
    recipientName: "Noah",
    senderName: "The Crew",
    coverTitle: "Noah's Birthday Journey 🎈",
    coverSubtitle: "Cheers to another epic year around the sun!",
    coverImage: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800",
    musicTheme: "festive-fanfare",
    designId: "space-astronaut",
    finalWishMessage: "Cheers to a year full of dreams come true! May this year bring you new adventures and endless happiness.",
    finalPhotos: [
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    ],
    slides: [
      {
        id: "n-1",
        title: "Level Up! 🎮",
        caption: "Another year wiser, bolder, and more iconic. Keep shining and reaching for the stars!",
        images: [
          "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800",
        ],
        bgGradient: "from-blue-950 via-slate-900 to-cyan-950",
        dateTag: "2024 Highlights",
        audioTone: "pop",
      },
      {
        id: "n-2",
        title: "Best Memories 📸",
        caption: "Here's to the late night talks, big wins, and many more milestones ahead!",
        images: [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
        ],
        bgGradient: "from-indigo-950 via-slate-900 to-purple-950",
        dateTag: "Memory Lane",
        audioTone: "fanfare",
      },
    ],
  },
};

export function getStoryById(id: string): WishStoryData {
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem("vetted_custom_stories");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed[id]) return parsed[id];
      }
    } catch {
      // Fallback
    }
  }

  if (MOCK_STORIES[id]) {
    return MOCK_STORIES[id];
  }
  // Default fallback story for any dynamic ID!
  return {
    id: id || "demo-story",
    recipientName: id.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    senderName: "Your Best Friends",
    coverTitle: "A Special Birthday Story ✨",
    coverSubtitle: "Tap to begin the birthday slideshow story...",
    coverImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    musicTheme: "birthday-melody",
    designId: "polaroid-collage",
    finalWishMessage: "Wishing you a day filled with love, laughter, and endless joy!",
    finalPhotos: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
    ],
    slides: [
      {
        id: "s1",
        title: "A Special Moment 🌸",
        caption: "Celebrating a truly wonderful person who brightens up every day!",
        images: [
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
        ],
        bgGradient: "from-rose-950 via-stone-900 to-pink-950",
        dateTag: "Memory 1",
        audioTone: "happy",
      },
      {
        id: "s2",
        title: "Happy Memories ✨",
        caption: "Here is to another year of big smiles, new adventures, and great happiness!",
        images: [
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
        ],
        bgGradient: "from-purple-950 via-stone-900 to-amber-950",
        dateTag: "Memory 2",
        audioTone: "soft",
      },
    ],
  };
}
