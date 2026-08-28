export interface StorySlide {
  id: string;
  title: string;
  caption: string;
  images: string[];
  bgGradient?: string;
  audioTone?: "happy" | "fanfare" | "soft" | "pop";
  dateTag?: string;
  themePreset?: "aurora" | "golden" | "cosmic" | "rose" | "cyber" | "emerald";
  badge?: string;
}

export interface WishStoryData {
  id: string;
  recipientName: string;
  senderName: string;
  coverTitle: string;
  coverSubtitle: string;
  coverImage: string;
  musicTheme: "birthday-melody" | "festive-fanfare" | "acoustic-chimes";
  slides: StorySlide[];
  finalWishMessage: string;
  designId: string; // Theme ID for final page
  finalPhotos: string[];
}
