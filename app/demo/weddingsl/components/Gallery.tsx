"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { TiltCard } from "./TiltCard";

interface GalleryPhoto {
  id: number;
  url: string;
  title: string;
  subtitle: string;
}

export function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  // Staggered parallax offsets for columns
  const yCol1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yCol2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yCol3 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const photos: GalleryPhoto[] = [
    {
      id: 1,
      url: "/images/sl_couple_poruwa.jpg",
      title: "The Sacred Poruwa",
      subtitle: "Galle Face Hotel • Colombo",
    },
    {
      id: 2,
      url: "/images/sl_bride.jpg",
      title: "The Kandyan Bride",
      subtitle: "Senuri Wickramasinghe",
    },
    {
      id: 3,
      url: "/images/sl_groom.jpg",
      title: "The Groom",
      subtitle: "Kaveen Senanayake",
    },
    {
      id: 4,
      url: "/images/sl_couple_galle_fort.jpg",
      title: "Galle Fort Sunset",
      subtitle: "The Lighthouse Ramparts",
    },
    {
      id: 5,
      url: "/images/sl_couple_tea_estate.jpg",
      title: "Misty Ceylon Hills",
      subtitle: "Nuwara Eliya Tea Gardens",
    },
    {
      id: 6,
      url: "/images/couple_art_gallery.jpg",
      title: "The First Glance",
      subtitle: "Independence Square Memories",
    },
  ];

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => ((prev ?? 0) + 1) % photos.length);
    }
  };

  const handlePrev = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => ((prev ?? 0) - 1 + photos.length) % photos.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") setSelectedPhotoIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex]);

  const getColY = (index: number) => {
    const col = index % 3;
    if (col === 0) return yCol1;
    if (col === 1) return yCol2;
    return yCol3;
  };

  return (
    <section ref={galleryRef} id="gallery" className="relative py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-2 block">
            Sacred Moments
          </span>
          <h2
            className="text-4xl md:text-5xl font-serif text-[#2C3E35] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Our Gallery
          </h2>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </motion.div>

        {/* Gallery Photo Grid with Column Parallax */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              style={{ y: getColY(index) }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              onClick={() => setSelectedPhotoIndex(index)}
              className="cursor-pointer"
            >
              <TiltCard tiltDegree={12} scaleOnHover={1.04}>
                <div className="group relative overflow-hidden rounded-3xl bg-white p-2.5 border border-[#D4AF37]/35 shadow-[0_15px_35px_rgba(44,62,53,0.07)]">
                  <div className="relative h-88 rounded-2xl overflow-hidden">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E35]/80 via-[#2C3E35]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p
                            className="text-2xl font-serif"
                            style={{ fontFamily: "var(--font-cormorant), serif" }}
                          >
                            {photo.title}
                          </p>
                          <p className="text-xs text-[#E8D8B0] font-light uppercase tracking-widest mt-1">
                            {photo.subtitle}
                          </p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                          <Maximize2 className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal wrapped in AnimatePresence */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#2C3E35]/90 backdrop-blur-xl"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20 cursor-pointer"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Navigation Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20 cursor-pointer"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[85vh] bg-[#FAF7F2] rounded-3xl p-3 border border-[#D4AF37]/40 shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden bg-black/5">
                <img
                  src={photos[selectedPhotoIndex].url}
                  alt={photos[selectedPhotoIndex].title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-4 sm:p-6 text-center">
                <h3
                  className="text-2xl sm:text-3xl font-serif text-[#2C3E35]"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {photos[selectedPhotoIndex].title}
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mt-1">
                  {photos[selectedPhotoIndex].subtitle} ({selectedPhotoIndex + 1} of {photos.length})
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
