"use client";

import React, { useState, useEffect, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Send,
  PartyPopper,
  Check,
  Edit3,
  Wand2,
  Eye,
  ArrowLeft,
  Camera,
  Trash2,
  Plus,
} from "lucide-react";
import {
  SimpleCardData,
  CardStyleId,
  CARD_STYLES,
  DEFAULT_SIMPLE_CARD,
  QUICK_WISH_SUGGESTIONS,
} from "../../components/bday/types";
import { WishPageRenderer } from "../../components/bday/WishPageRenderer";
import { ConfettiCanvas } from "../../components/bday/ConfettiCanvas";
import { SimpleCardShareModal } from "../../components/bday/SimpleCardShareModal";
import { playCelebrationSound } from "../../components/bday/SoundEffects";

function BirthdayStudioContent() {
  const searchParams = useSearchParams();
  const editRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [cardData, setCardData] = useState<SimpleCardData>(DEFAULT_SIMPLE_CARD);
  const [confettiTrigger, setConfettiTrigger] = useState(0);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isRecipientView, setIsRecipientView] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const to = searchParams.get("to");
    const from = searchParams.get("from");
    const card = searchParams.get("card") as CardStyleId;
    const msg = searchParams.get("msg");
    const photo = searchParams.get("photo");
    const view = searchParams.get("view");

    if (to || msg || card || photo) {
      setCardData((prev) => ({
        ...prev,
        recipientName: to || prev.recipientName,
        senderName: from || prev.senderName,
        designId: card && CARD_STYLES[card] ? card : prev.designId,
        message: msg || prev.message,
        photoUrl: photo || prev.photoUrl,
      }));
      if (view === "card") setIsRecipientView(true);
    }
  }, [searchParams]);

  const boom = () => setConfettiTrigger((k) => k + 1);

  const pickDesign = (id: CardStyleId) => {
    setCardData((prev) => ({ ...prev, designId: id }));
    boom();
    playCelebrationSound("chimes-melody");
    editRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newPhotos: string[] = [];
    let processed = 0;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          newPhotos.push(result);
        }
        processed++;
        if (processed === files.length) {
          setCardData((prev) => ({
            ...prev,
            photoUrl: newPhotos[0] || prev.photoUrl,
            photos: [...(prev.photos || []), ...newPhotos].slice(0, 4),
          }));
          boom();
        }
      };
      reader.readAsDataURL(file);
    });
  };

  // ─── RECIPIENT: Full-page birthday wish experience ───
  if (isRecipientView) {
    return (
      <>
        <ConfettiCanvas triggerKey={confettiTrigger} count={120} />

        {/* Floating Nav */}
        <div className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between pointer-events-auto">
          <button
            onClick={() => setIsRecipientView(false)}
            className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold shadow-lg border border-stone-200 cursor-pointer hover:bg-white transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Create Your Own</span>
          </button>

          <button
            onClick={() => { boom(); playCelebrationSound("chimes-melody"); }}
            className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-stone-800 text-xs font-semibold shadow-lg border border-stone-200 cursor-pointer hover:bg-white transition-all flex items-center gap-1.5"
          >
            <PartyPopper className="w-3.5 h-3.5 text-amber-600" />
            <span>Confetti!</span>
          </button>
        </div>

        <WishPageRenderer data={cardData} />

        {/* Vellum Footer */}
        <div className="w-full py-4 text-center text-xs text-stone-500 bg-white/80 border-t border-stone-200">
          Made with love on{" "}
          <Link href="/" className="font-serif font-bold text-stone-900 underline underline-offset-4">
            Vellum
          </Link>
        </div>
      </>
    );
  }

  // ─── FULL-SCREEN PREVIEW MODAL ───
  const previewModal = (
    <AnimatePresence>
      {isPreviewOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white overflow-y-auto"
        >
          {/* Preview top bar */}
          <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 px-4 py-3 flex items-center justify-between">
            <button
              onClick={() => setIsPreviewOpen(false)}
              className="flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-stone-950 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Editor</span>
            </button>

            <span className="text-xs text-stone-500" suppressHydrationWarning>
              Preview: <strong className="text-stone-900">{CARD_STYLES[cardData.designId]?.name}</strong>
            </span>

            <button
              onClick={() => { setIsPreviewOpen(false); setIsShareOpen(true); }}
              className="px-4 py-1.5 rounded-full bg-stone-900 text-white text-xs font-semibold cursor-pointer hover:bg-stone-800 flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5 fill-white" />
              <span>Send This</span>
            </button>
          </div>

          <WishPageRenderer data={cardData} />
        </motion.div>
      )}
    </AnimatePresence>
  );

  // ─── STUDIO: Design picker + editor ───
  return (
    <main className="min-h-screen bg-[#faf8f5] text-stone-900 font-sans selection:bg-amber-200 flex flex-col">
      <ConfettiCanvas triggerKey={confettiTrigger} count={90} />

      <SimpleCardShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        cardData={cardData}
      />

      {previewModal}

      {/* Hidden File Input for Multiple Photos */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        multiple
        className="hidden"
      />

      {/* Nav */}
      <nav className="sticky top-0 z-40 w-full px-6 md:px-8 py-4 md:py-5 flex justify-between items-center bg-white/85 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
        <Link href="/" className="text-2xl font-serif italic tracking-tight text-stone-950">Vellum.</Link>
        <div className="hidden md:flex gap-8 lg:gap-10 text-xs uppercase tracking-widest font-medium text-stone-600">
          <Link href="/" className="hover:text-stone-950 transition-colors">Home</Link>
          <Link href="/bday" className="text-stone-950 font-bold border-b-2 border-stone-950 pb-0.5">Birthday ✦</Link>
          <Link href="/#gallery" className="hover:text-stone-950 transition-colors">Gallery</Link>
        </div>
        <button
          onClick={() => setIsShareOpen(true)}
          className="px-5 md:px-6 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer inline-flex items-center gap-1.5 shadow-sm active:scale-95"
        >
          <Send className="w-3.5 h-3.5 fill-white" />
          <span>Send</span>
        </button>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-950 tracking-tight leading-tight">
          Create a birthday wish page
        </h1>
        <p className="text-stone-500 text-sm max-w-md mx-auto mt-2">
          Upload photos of your friend, write your wish, and send in seconds.
        </p>
      </section>

      {/* Personalizer Editor Form */}
      <section ref={editRef} className="max-w-3xl w-full mx-auto px-4 sm:px-6 pb-6">
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <Edit3 className="w-4 h-4 text-amber-700" />
              <h2 className="font-serif font-bold text-stone-900 text-sm">Personalize your wish</h2>
            </div>
            <span className="text-xs text-stone-400 font-sans" suppressHydrationWarning>
              Theme: <strong className="text-stone-800 font-semibold" suppressHydrationWarning>{isMounted ? CARD_STYLES[cardData.designId]?.name : CARD_STYLES[DEFAULT_SIMPLE_CARD.designId]?.name}</strong>
            </span>
          </div>

          {/* Photos Upload Section */}
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-stone-900">
                  Birthday Photos (Upload up to 3-4 photos for collage)
                </h4>
                <p className="text-[11px] text-stone-500">
                  Select one or multiple photos to display in the Polaroid scrapbook frame!
                </p>
              </div>

              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer whitespace-nowrap flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Upload Photos</span>
              </button>
            </div>

            {/* Uploaded Photos Grid Thumbnails */}
            <div className="flex items-center gap-2.5 overflow-x-auto pt-1 pb-0.5">
              {cardData.photos && cardData.photos.length > 0 ? (
                cardData.photos.map((p, idx) => (
                  <div key={idx} className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-white shadow-xs group shrink-0">
                    <img src={p} alt={`Uploaded ${idx + 1}`} className="w-full h-full object-cover" />
                    <button
                      onClick={() =>
                        setCardData((prev) => ({
                          ...prev,
                          photos: prev.photos?.filter((_, i) => i !== idx),
                          photoUrl: idx === 0 ? prev.photos?.[1] || "" : prev.photoUrl,
                        }))
                      }
                      className="absolute top-0 right-0 bg-stone-900/80 text-white p-0.5 rounded-bl-md hover:bg-rose-600 transition-colors"
                      title="Remove photo"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))
              ) : cardData.photoUrl ? (
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-white shadow-xs group shrink-0">
                  <img src={cardData.photoUrl} alt="Uploaded portrait" className="w-full h-full object-cover" />
                  <button
                    onClick={() => setCardData((p) => ({ ...p, photoUrl: "", photos: [] }))}
                    className="absolute top-0 right-0 bg-stone-900/80 text-white p-0.5 rounded-bl-md hover:bg-rose-600 transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="w-16 h-16 rounded-xl border-2 border-dashed border-amber-300 bg-white flex flex-col items-center justify-center text-amber-600 cursor-pointer hover:bg-amber-50 transition-colors shrink-0"
                >
                  <Camera className="w-5 h-5" />
                  <span className="text-[9px] font-bold mt-0.5">+ Photo</span>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-stone-600 block mb-1">Recipient Name (To) *</label>
              <input
                type="text"
                value={cardData.recipientName}
                onChange={(e) => setCardData((p) => ({ ...p, recipientName: e.target.value }))}
                placeholder="e.g. Sophia"
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-stone-900 focus:bg-white font-medium"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-stone-600 block mb-1">Your Name (From) *</label>
              <input
                type="text"
                value={cardData.senderName}
                onChange={(e) => setCardData((p) => ({ ...p, senderName: e.target.value }))}
                placeholder="e.g. Julian"
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-stone-900 focus:bg-white font-medium"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-stone-600 block mb-1">Wish Message *</label>
            <textarea
              rows={2}
              value={cardData.message}
              onChange={(e) => setCardData((p) => ({ ...p, message: e.target.value }))}
              className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-xs text-stone-900 focus:outline-none focus:border-stone-900 focus:bg-white leading-relaxed"
            />
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              <span className="text-[10px] text-stone-400 flex items-center gap-1 mr-1">
                <Wand2 className="w-3 h-3 text-amber-600" /> Ideas:
              </span>
              {QUICK_WISH_SUGGESTIONS.slice(0, 3).map((w, i) => (
                <button
                  key={i}
                  onClick={() => setCardData((p) => ({ ...p, message: w }))}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 hover:bg-amber-50 text-stone-500 hover:text-amber-800 border border-stone-200 transition-colors cursor-pointer"
                >
                  Wish #{i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Preview & Send buttons */}
          <div className="flex gap-2 pt-2">
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="flex-1 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 border border-stone-200"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview Full Page</span>
            </button>
            <button
              onClick={() => setIsShareOpen(true)}
              className="flex-1 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Send className="w-3.5 h-3.5 fill-white" />
              <span>Send Wish</span>
            </button>
          </div>
        </div>
      </section>

      {/* DESIGN GRID */}
      <section className="max-w-6xl w-full mx-auto px-4 sm:px-6 py-6">
        <h2 className="text-lg font-serif font-bold text-stone-950 mb-5">
          Choose a design theme ({Object.keys(CARD_STYLES).length})
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Object.values(CARD_STYLES).map((style) => {
            const isSelected = cardData.designId === style.id;
            return (
              <motion.div
                key={style.id}
                whileHover={{ y: -4 }}
                onClick={() => pickDesign(style.id)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 border-2 ${
                  isSelected
                    ? "border-stone-900 ring-2 ring-stone-900 shadow-xl"
                    : "border-transparent hover:border-stone-300 shadow-md"
                }`}
              >
                {/* Preview Image */}
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={style.image}
                    alt={style.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Selected badge */}
                  {isSelected && (
                    <div className="absolute top-3 right-3 bg-stone-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <Check className="w-3 h-3 stroke-[3]" />
                      <span>Selected</span>
                    </div>
                  )}

                  {/* Bottom text overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4">
                    <h3 className="font-serif font-bold text-white text-base sm:text-lg drop-shadow-md">
                      {style.name}
                    </h3>
                    <p className="text-white/80 text-[10px] sm:text-xs mt-0.5 line-clamp-1">
                      {style.audience}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Sticky bottom send bar */}
      <div className="sticky bottom-4 max-w-md w-full mx-auto px-4 z-30">
        <div className="bg-stone-900 text-white p-3 rounded-full shadow-2xl flex items-center justify-between border border-stone-700">
          <div className="pl-3 min-w-0" suppressHydrationWarning>
            <span className="text-xs font-serif font-bold text-stone-100 block truncate" suppressHydrationWarning>
              {isMounted ? CARD_STYLES[cardData.designId]?.name : CARD_STYLES[DEFAULT_SIMPLE_CARD.designId]?.name} → {cardData.recipientName}
            </span>
          </div>
          <button
            onClick={() => setIsShareOpen(true)}
            className="px-4 py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-1.5 shrink-0"
          >
            <Send className="w-3.5 h-3.5 fill-stone-950" />
            <span>Send</span>
          </button>
        </div>
      </div>

      <footer className="w-full border-t border-stone-200 py-6 text-center text-xs text-stone-500 bg-white mt-10">
        <span className="font-serif font-semibold text-stone-900">Vellum</span> • Beautiful digital birthday wishes
      </footer>
    </main>
  );
}

export default function BirthdayPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center">
          <Sparkles className="w-5 h-5 animate-spin text-amber-600" />
        </div>
      }
    >
      <BirthdayStudioContent />
    </Suspense>
  );
}
