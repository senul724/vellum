"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroFloatingShowcaseProps {
	isSriLanka?: boolean;
}

export function HeroFloatingShowcase({
	isSriLanka = false,
}: HeroFloatingShowcaseProps) {
	const [activeSlide, setActiveSlide] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	// Demos list with location-aware wedding demo
	const slides = [
		{
			id: "wedding",
			tabLabel: "Wedding",
			title: isSriLanka ? "Senuri & Kaveen" : "Amelia & Liam",
			tagline: isSriLanka
				? "The Poruwa Ceremony & Reception"
				: "Save The Date • Are Getting Married",
			venue: isSriLanka
				? "Galle Face Hotel • Colombo, Sri Lanka"
				: "The Glasshouse at Willow Creek",
			dateText: isSriLanka ? "Dec 18, 2026" : "Oct 14, 2026",
			image: isSriLanka
				? "/images/wedding-preview-sl.png"
				: "/images/wedding-preview-intl.png",
			route: isSriLanka ? "/demo/weddingsl" : "/demo/wedding",
		},
		{
			id: "birthday",
			tabLabel: "birthday",
			title: "Sophia's 25th Milestone",
			tagline: "Midnight Sunset & Floating Chrome Balloons",
			venue: "Skyline Penthouse • New York",
			dateText: "Nov 14, 2025",
			image: "/images/demo-birthday-preview.png",
			route: "/demo/birthday",
		},
		{
			id: "business",
			tabLabel: "executive event",
			title: "Nexus Global Leadership",
			tagline: "Tactile Leather Folio & Encrypted VIP Passes",
			venue: "Grand Hotel des Bergues • Geneva",
			dateText: "Oct 16, 2025",
			image: "/images/demo-business-preview.png",
			route: "/demo/business",
		},
		{
			id: "party",
			tabLabel: "party",
			title: "Slack is Muted.",
			tagline: "Confidential Memo Unboxing & Open Bar",
			venue: "The Rooftop Terrace • Brooklyn",
			dateText: "Dec 19, 2025",
			image: "/images/demo-party-preview.png",
			route: "/demo/party",
		},
	];

	const current = slides[activeSlide];

	// Auto-advance slides every 5 seconds if not hovered/paused
	useEffect(() => {
		if (isPaused) return;
		const timer = setInterval(() => {
			setActiveSlide((prev) => (prev + 1) % slides.length);
		}, 5000);
		return () => clearInterval(timer);
	}, [isPaused, slides.length]);

	// Clean up audio on unmount
	useEffect(() => {
		return () => {
			if (audioRef.current) {
				audioRef.current.pause();
			}
		};
	}, []);

	const handlePrev = (e: React.MouseEvent) => {
		e.stopPropagation();
		setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	const handleNext = (e: React.MouseEvent) => {
		e.stopPropagation();
		setActiveSlide((prev) => (prev + 1) % slides.length);
	};

	return (
		<div className="mt-14 sm:mt-18 relative max-w-5xl mx-auto">
			{/* Ambient Halo Lighting */}
			<div className="absolute -inset-2 bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-emerald-500/15 rounded-3xl blur-2xl opacity-80 pointer-events-none -z-10" />

			{/* Clean Showcase Canvas (Webpage top bar removed) */}
			<div
				onMouseEnter={() => setIsPaused(true)}
				onMouseLeave={() => setIsPaused(false)}
				className="rounded-3xl border border-border/80 bg-gradient-to-b from-stone-100/80 via-background to-stone-200/50 dark:from-stone-950 dark:via-stone-900/60 dark:to-stone-950 shadow-2xl p-5 sm:p-8 md:p-12 overflow-hidden text-left relative"
			>
				{/* Subtle Background Pattern */}
				<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

				{/* Top Controls: Interactive Occasion Switcher Tabs */}
				<div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8 sm:mb-10 relative z-10">
					{/* Tab Navigation across all 4 available demos */}
					<div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
						{slides.map((s, idx) => (
							<button
								key={s.id}
								onClick={() => setActiveSlide(idx)}
								className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1 ${
									activeSlide === idx
										? "bg-primary text-primary-foreground shadow-xs scale-102"
										: "bg-background/80 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/70"
								}`}
							>
								<span>{s.tabLabel}</span>
							</button>
						))}
					</div>
				</div>

				{/* Center Stage: Cycling Centerpiece Showcase + Floating Feature Cards */}
				<div className="relative max-w-4xl mx-auto flex flex-col items-center">
					{/* ==============================================================
					    CENTERPIECE: Dynamic Image Carousel Display (Screenshots of Available Demos)
					    ============================================================== */}
					<div className="relative w-full max-w-[620px] md:max-w-[800px] rounded-3xl border-2 border-[#D4AF37]/50 bg-stone-950 shadow-[0_25px_60px_rgba(0,0,0,0.55)] p-2 sm:p-2.5 transition-all z-10 group">
						{/* Inner Viewport Screen */}
						<div className="relative rounded-[22px] overflow-hidden border border-[#D4AF37]/30 bg-black aspect-[16/9] shadow-inner">
							<AnimatePresence mode="wait">
								<motion.img
									key={current.image}
									src={current.image}
									alt={`${current.title} - ${current.tagline}`}
									initial={{ opacity: 0, scale: 1.03 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.45 }}
									className="w-full h-full object-cover select-none"
								/>
							</AnimatePresence>

							{/* Gradient Shadow Overlay at Bottom */}
							<div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

							{/* Left / Right Arrow Navigation Overlays */}
							<div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none">
								<button
									onClick={handlePrev}
									className="pointer-events-auto w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer opacity-80 group-hover:opacity-100"
									aria-label="Previous Demo Specimen"
								>
									<ChevronLeft className="w-4 h-4" />
								</button>
								<button
									onClick={handleNext}
									className="pointer-events-auto w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer opacity-80 group-hover:opacity-100"
									aria-label="Next Demo Specimen"
								>
									<ChevronRight className="w-4 h-4" />
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Feature Value Strip */}
				<div className="mt-14 sm:mt-16 pt-6 border-t border-border/50 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-muted-foreground text-center">
					<span className="flex items-center gap-1.5">
						<span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
						100% Bespoke Code &amp; Design
					</span>
					<span className="flex items-center gap-1.5">
						<span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
						Zero Paper Waste or Delivery Delays
					</span>
					<span className="flex items-center gap-1.5">
						<span className="w-1.5 h-1.5 rounded-full bg-primary" />
						Private Host Guest Management
					</span>
				</div>
			</div>
		</div>
	);
}
