"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowLeft,
  BookOpen,
  Film,
  Camera,
  Plus,
  Trash2,
  Play,
  Check,
  Image as ImageIcon,
  Wand2,
  Heart,
  Music,
  Share2,
} from "lucide-react";
import { WishStoryData, StorySlide } from "./types";
import { MOCK_STORIES } from "./mockStoryData";

const PRESET_PHOTOS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
];

export function CreateStoryForm() {
  const router = useRouter();

  const [selectedTemplate, setSelectedTemplate] = useState<"1" | "2" | "3">("1");
  const [recipientName, setRecipientName] = useState("Sophia");
  const [senderName, setSenderName] = useState("Julian & Friends");
  const [coverTitle, setCoverTitle] = useState("A Story of Friendship & Magic ✨");
  const [coverSubtitle, setCoverSubtitle] = useState("Happy Birthday! Tap to begin your memory story...");
  const [coverImage, setCoverImage] = useState(PRESET_PHOTOS[0]);
  const [finalWishMessage, setFinalWishMessage] = useState(
    "Wishing you a year filled with sweet adventures, endless laughter, and all the magic you bring into the world! Happy Birthday!"
  );

  const [slides, setSlides] = useState<StorySlide[]>([
    {
      id: "slide-1",
      title: "Chapter 1: The Beginning 🌟",
      caption: "From the very first moment we met, your smile lit up every room and brought instant sunshine into our lives!",
      images: [PRESET_PHOTOS[1]],
      dateTag: "Summer 2021",
      audioTone: "happy",
      badge: "Sweet Start ✨",
    },
    {
      id: "slide-2",
      title: "Chapter 2: Endless Adventures 🚀",
      caption: "Late night road trips, spontaneous coffee runs, and laughing until our stomachs hurt. Unforgettable memories!",
      images: [PRESET_PHOTOS[2]],
      dateTag: "Roadtrip 2023",
      audioTone: "fanfare",
      badge: "Wanderlust 🌌",
    },
  ]);

  const loadPreset = (presetKey: string) => {
    const preset = MOCK_STORIES[presetKey];
    if (!preset) return;
    setRecipientName(preset.recipientName);
    setSenderName(preset.senderName);
    setCoverTitle(preset.coverTitle);
    setCoverSubtitle(preset.coverSubtitle);
    setCoverImage(preset.coverImage);
    setFinalWishMessage(preset.finalWishMessage);
    setSlides(preset.slides);
  };

  const addSlide = () => {
    const newSlide: StorySlide = {
      id: `slide-${Date.now()}`,
      title: `Chapter ${slides.length + 1}: Special Moment ✨`,
      caption: "Here is to celebrating another incredible memory filled with smiles!",
      images: [PRESET_PHOTOS[(slides.length + 1) % PRESET_PHOTOS.length]],
      dateTag: `Memory ${slides.length + 1}`,
      audioTone: "happy",
      badge: "Cherished 💐",
    };
    setSlides([...slides, newSlide]);
  };

  const updateSlide = (index: number, updatedFields: Partial<StorySlide>) => {
    const updated = [...slides];
    updated[index] = { ...updated[index], ...updatedFields };
    setSlides(updated);
  };

  const removeSlide = (index: number) => {
    if (slides.length <= 1) return;
    setSlides(slides.filter((_, i) => i !== index));
  };

  const handleLaunch = () => {
    const storyId = recipientName.toLowerCase().replace(/[^a-z0-9]/g, "-") + "-bday-" + Date.now().toString().slice(-4);

    const storyData: WishStoryData = {
      id: storyId,
      recipientName,
      senderName,
      coverTitle,
      coverSubtitle,
      coverImage,
      musicTheme: "birthday-melody",
      designId: "y2k-digital-camera",
      finalWishMessage,
      finalPhotos: [coverImage, ...(slides[0]?.images || [])],
      slides,
    };

    // Save to localStorage so custom created stories persist!
    try {
      if (typeof window !== "undefined") {
        const existing = JSON.parse(localStorage.getItem("vetted_custom_stories") || "{}");
        existing[storyId] = storyData;
        localStorage.setItem("vetted_custom_stories", JSON.stringify(existing));
      }
    } catch {
      // Storage fallback
    }

    const routePrefix = selectedTemplate === "1" ? "/story" : selectedTemplate === "2" ? "/story2" : "/story3";
    router.push(`${routePrefix}/${storyId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/80 via-orange-50/50 to-rose-50/80 text-stone-900 font-sans p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* HEADER */}
        <header className="flex items-center justify-between">
          <Link
            href="/bday"
            className="p-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-amber-200 text-stone-800 hover:scale-105 transition-all shadow-xs flex items-center gap-2 text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Studio</span>
          </Link>

          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-200/70 border border-amber-300 text-amber-950 font-mono text-xs font-bold shadow-xs">
            <Wand2 className="w-4 h-4 text-amber-700" />
            <span>Story Creator Studio</span>
          </div>
        </header>

        {/* HERO TITLE & SAMPLES PICKER */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-serif font-extrabold text-stone-900 tracking-tight">
            Create a Birthday Story
          </h1>
          <p className="text-sm sm:text-base text-stone-600 max-w-lg mx-auto leading-relaxed">
            Customize photos, memory chapters, audio notes, and select your favorite story template.
          </p>

          {/* Quick Presets */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="text-xs font-mono text-stone-500">Quick Presets:</span>
            <button
              onClick={() => loadPreset("sophia-bday")}
              className="px-3.5 py-1.5 rounded-xl bg-white border border-rose-300 text-rose-900 text-xs font-semibold hover:bg-rose-50 transition-all shadow-xs cursor-pointer"
            >
              Sophia's Story 🌸
            </button>
            <button
              onClick={() => loadPreset("noah-bday")}
              className="px-3.5 py-1.5 rounded-xl bg-white border border-blue-300 text-blue-900 text-xs font-semibold hover:bg-blue-50 transition-all shadow-xs cursor-pointer"
            >
              Noah's Journey 🎈
            </button>
          </div>
        </div>

        {/* FORM CONTAINER */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white/85 backdrop-blur-xl border border-amber-200/80 shadow-xl space-y-8">
          
          {/* 1. CHOOSE STARTING TEMPLATE */}
          <div className="space-y-4">
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-amber-900">
              Step 1: Choose Story Template
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Template 1 */}
              <div
                onClick={() => setSelectedTemplate("1")}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  selectedTemplate === "1"
                    ? "border-amber-500 bg-amber-50/80 shadow-md scale-102"
                    : "border-stone-200 bg-stone-50/50 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="p-2 rounded-xl bg-amber-200 text-amber-900">
                    <BookOpen className="w-4 h-4" />
                  </span>
                  {selectedTemplate === "1" && <Check className="w-4 h-4 text-amber-600 font-bold" />}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-stone-900">1: Scrapbook Deck</h3>
                  <p className="text-[11px] text-stone-500">Widescreen memory cards, 3D arch photo frames, silk themes.</p>
                </div>
              </div>

              {/* Template 2 */}
              <div
                onClick={() => setSelectedTemplate("2")}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  selectedTemplate === "2"
                    ? "border-amber-500 bg-amber-50/80 shadow-md scale-102"
                    : "border-stone-200 bg-stone-50/50 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="p-2 rounded-xl bg-amber-200 text-amber-900">
                    <Film className="w-4 h-4" />
                  </span>
                  {selectedTemplate === "2" && <Check className="w-4 h-4 text-amber-600 font-bold" />}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-stone-900">2: Retro 3D Fold</h3>
                  <p className="text-[11px] text-stone-500">Origami paper fold, 35mm slide frame, cassette audio player.</p>
                </div>
              </div>

              {/* Template 3 */}
              <div
                onClick={() => setSelectedTemplate("3")}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  selectedTemplate === "3"
                    ? "border-amber-500 bg-amber-50/80 shadow-md scale-102"
                    : "border-stone-200 bg-stone-50/50 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="p-2 rounded-xl bg-amber-200 text-amber-900">
                    <Camera className="w-4 h-4" />
                  </span>
                  {selectedTemplate === "3" && <Check className="w-4 h-4 text-amber-600 font-bold" />}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-stone-900">3: Light Insta Story</h3>
                  <p className="text-[11px] text-stone-500">Light mode Instagram style, progress capsules, tap/swipe.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. RECIPIENT & SENDER INFO */}
          <div className="space-y-4 pt-4 border-t border-stone-200">
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-amber-900">
              Step 2: Story Details & Cover
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Recipient Name</label>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:border-amber-500"
                  placeholder="e.g. Sophia"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Sender Name(s)</label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:border-amber-500"
                  placeholder="e.g. Julian & Friends"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Cover Title</label>
                <input
                  type="text"
                  value={coverTitle}
                  onChange={(e) => setCoverTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:border-amber-500"
                  placeholder="e.g. A Story of Friendship ✨"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Cover Subtitle</label>
                <input
                  type="text"
                  value={coverSubtitle}
                  onChange={(e) => setCoverSubtitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-white text-sm focus:outline-none focus:border-amber-500"
                  placeholder="e.g. Tap to begin your story..."
                />
              </div>
            </div>

            {/* Cover Photo Picker */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-2">Cover Photo</label>
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {PRESET_PHOTOS.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCoverImage(img)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                      coverImage === img ? "border-amber-500 scale-105 shadow-md" : "border-transparent opacity-70"
                    }`}
                  >
                    <img src={img} alt="Preset photo" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <input
                type="text"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                className="w-full mt-2 px-4 py-2 rounded-xl border border-stone-300 bg-white text-xs font-mono focus:outline-none focus:border-amber-500"
                placeholder="Or paste custom photo URL..."
              />
            </div>
          </div>

          {/* 3. STORY CHAPTERS / SLIDES */}
          <div className="space-y-4 pt-4 border-t border-stone-200">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-amber-900">
                Step 3: Story Chapters ({slides.length})
              </label>

              <button
                onClick={addSlide}
                className="px-3.5 py-1.5 rounded-xl bg-amber-400 text-stone-950 font-bold text-xs flex items-center gap-1.5 shadow-sm hover:brightness-105 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Chapter</span>
              </button>
            </div>

            <div className="space-y-4">
              {slides.map((slide, idx) => (
                <div key={slide.id || idx} className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-amber-900">Chapter {idx + 1}</span>
                    <button
                      onClick={() => removeSlide(idx)}
                      disabled={slides.length <= 1}
                      className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-100 transition-colors disabled:opacity-30 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={slide.title}
                      onChange={(e) => updateSlide(idx, { title: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-300 bg-white text-xs font-semibold"
                      placeholder="Chapter Title"
                    />

                    <input
                      type="text"
                      value={slide.dateTag || ""}
                      onChange={(e) => updateSlide(idx, { dateTag: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-300 bg-white text-xs font-mono"
                      placeholder="Date Tag (e.g. Summer 2021)"
                    />
                  </div>

                  <textarea
                    rows={2}
                    value={slide.caption}
                    onChange={(e) => updateSlide(idx, { caption: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-300 bg-white text-xs font-serif italic"
                    placeholder="Chapter memory caption..."
                  />

                  {/* Photo & Audio Tone */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-stone-500">Audio Tone:</span>
                      {(["happy", "fanfare", "soft", "pop"] as const).map((tone) => (
                        <button
                          key={tone}
                          onClick={() => updateSlide(idx, { audioTone: tone })}
                          className={`px-2 py-1 rounded-lg text-[10px] font-mono font-bold capitalize transition-all cursor-pointer ${
                            slide.audioTone === tone
                              ? "bg-amber-500 text-white"
                              : "bg-white text-stone-600 border border-stone-200"
                          }`}
                        >
                          {tone}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. LAUNCH BUTTON */}
          <div className="pt-6 border-t border-stone-200">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLaunch}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-rose-500 to-purple-600 text-white font-bold text-sm uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 cursor-pointer border border-white/30"
            >
              <Play className="w-5 h-5 fill-white" />
              <span>Launch Birthday Story 🎉</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
