"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
	Lock,
	ExternalLink,
	Play,
	Pause,
	Volume2,
	VolumeX,
	Calendar,
	MapPin,
	Check,
	Sparkles,
	ArrowRight,
	Heart,
	Music,
	CheckCircle2,
	RotateCcw,
	Layers,
} from "lucide-react";

type OccasionKey = "wedding" | "birthday" | "business" | "party";

interface OccasionData {
	id: OccasionKey;
	tabLabel: string;
	tag: string;
	title: string;
	host: string;
	location: string;
	dateText: string;
	image: string;
	route: string;
	displayUrl: string;
	sealMonogram: string;
	sealTitle: string;
	sealSubtitle: string;
	sealGradient: string;
	confettiColors: string[];
	audioTrack: string;
	audioArtist: string;
	audioSrc?: string;
	rsvpQuestion: string;
	rsvpOptions: string[];
	floatingBadges: { icon: string; label: string }[];
	accentBadge: string;
}

const OCCASIONS: Record<OccasionKey, OccasionData> = {
	wedding: {
		id: "wedding",
		tabLabel: "💍 Tuscan Wedding",
		tag: "Romantic Editorial & Unboxing",
		title: "Amelia & Liam's Nuptials",
		host: "Amelia James & Liam Vance",
		location: "Villa Cora • Florence, Italy",
		dateText: "Saturday, Oct 24, 2025 • 4:30 PM",
		image: "/images/couple_glasshouse.jpg",
		route: "/demo/wedding",
		displayUrl: "inviteside.com/demo/wedding",
		sealMonogram: "A & L",
		sealTitle: "Tap Wax Seal to Unbox",
		sealSubtitle: "Embossed Gold & Crimson Wax",
		sealGradient: "from-amber-700 via-rose-900 to-stone-900 border-amber-400/50 shadow-amber-950/50",
		confettiColors: ["#D4AF37", "#F3E5AB", "#2C3E35", "#FFFFFF", "#E8D8B0"],
		audioTrack: "Ludovico Einaudi • Nuvole Bianche",
		audioArtist: "Curated Tuscan Strings",
		audioSrc: "/audio/wedding.mp3",
		rsvpQuestion: "Select Dinner Entrée",
		rsvpOptions: ["🥩 Florentine Steak", "🌿 Truffle Risotto", "🐟 Citrus Sea Bass"],
		floatingBadges: [
			{ icon: "🕯️", label: "3D Wax Seal" },
			{ icon: "🎻", label: "Acoustic Audio" },
			{ icon: "✨", label: "Multi-guest RSVP" },
		],
		accentBadge: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20",
	},
	birthday: {
		id: "birthday",
		tabLabel: "🎂 25th Soirée",
		tag: "Midnight High-Fashion Rooftop",
		title: "Sophia's 25th Milestone",
		host: "Sophia Chen",
		location: "Skyline Penthouse • New York",
		dateText: "Friday, Nov 14, 2025 • 8:00 PM",
		image: "/birthday-sophia.jpg",
		route: "/demo/birthday",
		displayUrl: "inviteside.com/demo/birthday",
		sealMonogram: "25",
		sealTitle: "Tap Balloon to Pop & Open",
		sealSubtitle: "3D Chrome Metallic Balloon",
		sealGradient: "from-rose-600 via-pink-600 to-purple-900 border-pink-300/60 shadow-pink-950/50",
		confettiColors: ["#EC4899", "#8B5CF6", "#F43F5E", "#FDE047", "#FFFFFF"],
		audioTrack: "Midnight Rooftop • Deep Sunset Funk",
		audioArtist: "Curated Party Playlist",
		audioSrc: "/audio/bday.mp3",
		rsvpQuestion: "Signature Welcome Cocktail",
		rsvpOptions: ["🍸 French 75", "🍹 Smoked Mezcalita", "🥂 Rosé Brut Spritz"],
		floatingBadges: [
			{ icon: "🎈", label: "3D Floating Balloons" },
			{ icon: "🍸", label: "Cocktail Bar" },
			{ icon: "💬", label: "Guest Wishes Wall" },
		],
		accentBadge: "text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/20",
	},
	business: {
		id: "business",
		tabLabel: "💼 Executive Summit",
		tag: "Confidential Leadership Assembly",
		title: "Nexus Leadership Summit",
		host: "Nexus Global Ventures",
		location: "Grand Hotel des Bergues • Geneva",
		dateText: "Thursday, Oct 16, 2025 • 9:00 AM",
		image: "/hero-every-occasion.jpg",
		route: "/demo/business",
		displayUrl: "inviteside.com/demo/business",
		sealMonogram: "NX",
		sealTitle: "Click Brass Clasp to Unlock",
		sealSubtitle: "Tactile Leatherette Folio Clasp",
		sealGradient: "from-stone-700 via-zinc-800 to-stone-950 border-amber-400/60 shadow-stone-950/50",
		confettiColors: ["#D4AF37", "#94A3B8", "#1E293B", "#F8FAFC"],
		audioTrack: "Ambient Executive Soundscape",
		audioArtist: "Private Assembly Audio",
		audioSrc: undefined,
		rsvpQuestion: "Accreditation Tier",
		rsvpOptions: ["Delegate Access", "VIP Dinner", "Chatham Session"],
		floatingBadges: [
			{ icon: "🔒", label: "Encrypted Clasp" },
			{ icon: "🪪", label: "Digital Pass" },
			{ icon: "🏎️", label: "Valet Dispatch" },
		],
		accentBadge: "text-slate-700 dark:text-slate-300 bg-slate-500/10 border-slate-500/20",
	},
	party: {
		id: "party",
		tabLabel: "🌴 Studio Party",
		tag: "Unboring Office & Team Bash",
		title: "Slack is Muted. The Bar is Open.",
		host: "Vanguard Studio Team",
		location: "The Rooftop Terrace • Brooklyn, NY",
		dateText: "Friday, Dec 19, 2025 • 6:30 PM",
		image: "/office-party.jpg",
		route: "/demo/party",
		displayUrl: "inviteside.com/demo/party",
		sealMonogram: "OOO",
		sealTitle: "Tear Confidential Memo",
		sealSubtitle: "Peel Wax Strip & Open Bar",
		sealGradient: "from-emerald-700 via-teal-800 to-emerald-950 border-emerald-400/50 shadow-emerald-950/50",
		confettiColors: ["#10B981", "#06B6D4", "#F59E0B", "#8B5CF6"],
		audioTrack: "Friday 5PM • Nu-Disco Synthwave",
		audioArtist: "DJ Set & Song Queue",
		audioSrc: "/audio/bday.mp3",
		rsvpQuestion: "Slack Status Choice",
		rsvpOptions: ["🌴 OOO Forever", "🍺 Draft IPA Tap", "🌮 Taco Bar Crew"],
		floatingBadges: [
			{ icon: "📋", label: "Confidential Memo" },
			{ icon: "🍹", label: "Open Bar Menu" },
			{ icon: "🎵", label: "DJ Song Requests" },
		],
		accentBadge: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
	},
};

export function HeroLivePreview() {
	const [activeKey, setActiveKey] = useState<OccasionKey>("wedding");
	const [isUnboxed, setIsUnboxed] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [selectedOption, setSelectedOption] = useState<string>("");
	const [calendarAdded, setCalendarAdded] = useState(false);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	const active = OCCASIONS[activeKey];

	// Handle switching occasion tabs
	const handleSwitchOccasion = (key: OccasionKey) => {
		if (audioRef.current) {
			audioRef.current.pause();
			audioRef.current.currentTime = 0;
		}
		setActiveKey(key);
		setIsUnboxed(false);
		setIsPlaying(false);
		setSelectedOption(OCCASIONS[key].rsvpOptions[1] || OCCASIONS[key].rsvpOptions[0]);
		setCalendarAdded(false);
	};

	// Default option on load
	useEffect(() => {
		setSelectedOption(active.rsvpOptions[1]);
	}, [activeKey]);

	// Clean up audio on unmount
	useEffect(() => {
		return () => {
			if (audioRef.current) {
				audioRef.current.pause();
			}
		};
	}, []);

	// Unbox trigger with confetti
	const handleTriggerUnbox = (e?: React.MouseEvent) => {
		if (e) e.stopPropagation();

		// Burst festive confetti
		confetti({
			particleCount: 70,
			spread: 60,
			origin: { y: 0.6 },
			colors: active.confettiColors,
			ticks: 200,
			gravity: 0.8,
			scalar: 1.05,
		});

		setIsUnboxed(true);

		// Also start audio if available
		if (active.audioSrc) {
			if (!audioRef.current) {
				audioRef.current = new Audio(active.audioSrc);
				audioRef.current.volume = 0.4;
				audioRef.current.loop = true;
			} else {
				audioRef.current.src = active.audioSrc;
			}

			audioRef.current
				.play()
				.then(() => setIsPlaying(true))
				.catch(() => {
					// Audio autoplay might be blocked by browser policy
					setIsPlaying(false);
				});
		}
	};

	// Audio toggle
	const toggleAudio = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (!active.audioSrc) return;

		if (!audioRef.current) {
			audioRef.current = new Audio(active.audioSrc);
			audioRef.current.volume = 0.4;
			audioRef.current.loop = true;
		}

		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(false);
		} else {
			audioRef.current
				.play()
				.then(() => setIsPlaying(true))
				.catch((err) => console.log("Audio play prevented:", err));
		}
	};

	const handleCalendarClick = () => {
		setCalendarAdded(true);
		setTimeout(() => setCalendarAdded(false), 3000);
	};

	return (
		<div className="mt-12 sm:mt-16 relative max-w-5xl mx-auto">
			{/* Outer Glow Halo */}
			<div className="absolute -inset-1 bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-emerald-500/10 rounded-3xl blur-xl opacity-75 pointer-events-none -z-10" />

			<div className="rounded-3xl border border-border bg-card shadow-2xl overflow-hidden text-left">
				{/* Top Chrome Header with interactive occasion tabs */}
				<div className="px-4 sm:px-6 py-3 border-b border-border bg-muted/40 flex flex-col md:flex-row md:items-center justify-between gap-3">
					{/* Left: Window Dots & Live Mode Label */}
					<div className="flex items-center gap-3">
						<div className="flex items-center gap-2">
							<span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
							<span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
							<span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
						</div>

						<div className="px-3 py-1 rounded-full bg-background border border-border/80 text-[11px] font-mono text-muted-foreground flex items-center gap-2 shadow-xs">
							<Lock className="w-3 h-3 text-emerald-500 shrink-0" />
							<span className="font-medium text-foreground">{active.displayUrl}</span>
						</div>
					</div>

					{/* Center/Right: Interactive Occasion Tabs */}
					<div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
						{(["wedding", "birthday", "business", "party"] as OccasionKey[]).map(
							(key) => {
								const item = OCCASIONS[key];
								const isSelected = activeKey === key;
								return (
									<button
										key={key}
										onClick={() => handleSwitchOccasion(key)}
										className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1.5 ${
											isSelected
												? "bg-primary text-primary-foreground shadow-xs scale-102"
												: "bg-background/80 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/70"
										}`}
									>
										<span>{item.tabLabel}</span>
									</button>
								);
							}
						)}
					</div>
				</div>

				{/* Main Interactive Stage */}
				<div className="relative p-5 sm:p-8 md:p-10 bg-gradient-to-br from-card via-muted/15 to-card">
					<div className="grid md:grid-cols-12 gap-8 lg:gap-10 items-center">
						{/* Left Column: Interactive Ritual & Feature Controls */}
						<div className="md:col-span-7 space-y-5">
							{/* Badge & Quick Stats */}
							<div className="flex flex-wrap items-center gap-2">
								<span
									className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border ${active.accentBadge}`}
								>
									<Sparkles className="w-3 h-3" />
									<span>{active.tag}</span>
								</span>

								<span className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground">
									<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
									Interactive Specimen
								</span>
							</div>

							{/* Title & Host info */}
							<div className="space-y-1.5">
								<h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground tracking-tight leading-tight">
									{active.title}
								</h3>
								<div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground font-light">
									<span className="flex items-center gap-1">
										<MapPin className="w-3.5 h-3.5 text-primary/70" />
										{active.location}
									</span>
									<span className="flex items-center gap-1">
										<Calendar className="w-3.5 h-3.5 text-primary/70" />
										{active.dateText}
									</span>
								</div>
							</div>

							{/* Tactile Unboxing Card Area */}
							<div className="p-4 rounded-2xl bg-background/95 border border-border shadow-sm space-y-4">
								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground font-semibold block">
											Experience Ritual 01
										</span>
										<h4 className="text-xs sm:text-sm font-semibold text-foreground">
											{active.sealTitle}
										</h4>
									</div>

									{isUnboxed ? (
										<button
											onClick={() => setIsUnboxed(false)}
											className="text-[11px] font-mono text-muted-foreground hover:text-foreground flex items-center gap-1 cursor-pointer transition-colors"
										>
											<RotateCcw className="w-3 h-3" />
											<span>Reset</span>
										</button>
									) : (
										<span className="text-[11px] font-mono text-primary font-bold animate-pulse">
											Tap to Test ↓
										</span>
									)}
								</div>

								{/* The Interactive Wax Seal / Clasp / Balloon */}
								<div className="flex items-center gap-4 p-3 rounded-xl bg-muted/40 border border-border/70">
									<motion.button
										whileHover={{ scale: 1.08 }}
										whileTap={{ scale: 0.92 }}
										onClick={handleTriggerUnbox}
										className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${active.sealGradient} border-2 flex items-center justify-center cursor-pointer shadow-md shrink-0 transition-transform`}
										title="Click to trigger unboxing animation!"
									>
										<span className="font-serif italic font-bold text-amber-100 text-lg sm:text-xl drop-shadow-sm select-none">
											{active.sealMonogram}
										</span>
										{!isUnboxed && (
											<span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white dark:border-stone-900 animate-ping pointer-events-none" />
										)}
									</motion.button>

									<div className="space-y-1 min-w-0">
										<p className="text-xs font-semibold text-foreground flex items-center gap-1.5">
											{isUnboxed ? (
												<>
													<span className="text-emerald-500 font-bold">
														✓ Unboxed &amp; Revealed
													</span>
												</>
											) : (
												<span>{active.sealSubtitle}</span>
											)}
										</p>
										<p className="text-[11px] text-muted-foreground font-light leading-relaxed">
											{isUnboxed
												? "Invitation cavity unlocked with custom envelope sound and confetti."
												: "Guests tap to break physical wax, slide brass clasp, or pop balloons."}
										</p>
									</div>
								</div>

								{/* Audio Player Strip */}
								<div className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-muted/30 border border-border/50">
									<div className="flex items-center gap-2.5 min-w-0">
										<button
											onClick={toggleAudio}
											disabled={!active.audioSrc}
											className={`w-8 h-8 rounded-full flex items-center justify-center text-primary-foreground shrink-0 cursor-pointer transition-all ${
												active.audioSrc
													? "bg-primary hover:opacity-90 shadow-xs"
													: "bg-muted-foreground/30 cursor-not-allowed"
											}`}
											title={active.audioSrc ? "Play/pause audio track" : "Simulated Audio"}
										>
											{isPlaying ? (
												<Pause className="w-3.5 h-3.5" />
											) : (
												<Play className="w-3.5 h-3.5 ml-0.5" />
											)}
										</button>

										<div className="space-y-0.5 min-w-0">
											<p className="text-[11px] font-mono font-medium text-foreground truncate">
												{active.audioTrack}
											</p>
											<p className="text-[10px] text-muted-foreground truncate">
												{active.audioArtist}
											</p>
										</div>
									</div>

									{/* Animated Waveform bars */}
									<div className="flex items-end gap-0.5 h-5 shrink-0 px-2">
										{[40, 80, 50, 95, 65, 30, 85, 45].map((h, i) => (
											<span
												key={i}
												style={{
													height: isPlaying ? `${h}%` : "20%",
													transition: "height 0.25s ease-in-out",
												}}
												className={`w-1 rounded-full ${
													isPlaying
														? "bg-primary animate-pulse"
														: "bg-muted-foreground/40"
												}`}
											/>
										))}
									</div>
								</div>

								{/* Live Interactive RSVP Option Switcher */}
								<div className="space-y-2 pt-1 border-t border-border/40">
									<div className="flex items-center justify-between text-[11px] font-mono">
										<span className="text-muted-foreground font-semibold">
											{active.rsvpQuestion}:
										</span>
										<span className="text-primary font-bold">
											Live Form Sync ✓
										</span>
									</div>

									<div className="flex flex-wrap gap-2">
										{active.rsvpOptions.map((opt) => {
											const isChecked = selectedOption === opt;
											return (
												<button
													key={opt}
													onClick={() => setSelectedOption(opt)}
													className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
														isChecked
															? "bg-primary text-primary-foreground font-semibold shadow-xs scale-102"
															: "bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/70"
													}`}
												>
													{isChecked && <Check className="w-3 h-3 stroke-[3]" />}
													<span>{opt}</span>
												</button>
											);
										})}
									</div>
								</div>
							</div>

							{/* Bottom Action Strip: Open Full Live Demo */}
							<div className="flex flex-wrap items-center justify-between gap-3 pt-1">
								<div className="flex items-center gap-2">
									<button
										onClick={handleCalendarClick}
										className="px-3.5 py-2 rounded-xl bg-background hover:bg-muted text-foreground border border-border text-xs font-mono font-medium transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
									>
										<Calendar className="w-3.5 h-3.5 text-primary" />
										<span>{calendarAdded ? "Added to Calendar ✓" : "Sync Calendar"}</span>
									</button>
								</div>

								<Link
									href={active.route}
									className="px-5 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-all shadow-sm flex items-center gap-2 group cursor-pointer"
								>
									<span>Open Full Experience Demo</span>
									<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
								</Link>
							</div>
						</div>

						{/* Right Column: Hyper-Polished Simulated Smartphone Frame */}
						<div className="md:col-span-5 flex justify-center">
							<div className="relative w-full max-w-[280px] sm:max-w-[300px]">
								{/* Smartphone Shell */}
								<div className="rounded-[40px] border-[5px] border-stone-800 bg-stone-950 p-2.5 shadow-2xl relative overflow-hidden ring-1 ring-stone-700/50">
									{/* Top Speaker / Dynamic Island */}
									<div className="w-24 h-4 bg-stone-900 rounded-full mx-auto mb-2 flex items-center justify-center gap-1.5">
										<div className="w-2.5 h-2.5 rounded-full bg-stone-950" />
										<div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
									</div>

									{/* Inner Screen Display */}
									<div className="rounded-[30px] overflow-hidden bg-stone-900 border border-stone-800 relative text-left select-none">
										{/* Hero Background Image */}
										<div className="aspect-[9/13] relative overflow-hidden">
											<AnimatePresence mode="wait">
												<motion.img
													key={active.image}
													src={active.image}
													alt={active.title}
													initial={{ opacity: 0, scale: 1.05 }}
													animate={{ opacity: 1, scale: 1 }}
													exit={{ opacity: 0 }}
													transition={{ duration: 0.4 }}
													className="w-full h-full object-cover"
												/>
											</AnimatePresence>

											{/* Gradient Wash */}
											<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

											{/* Floating Badges on Screen */}
											<div className="absolute top-3 left-3 right-3 flex flex-col gap-1.5">
												<div className="flex items-center justify-between">
													<span className="px-2.5 py-1 rounded-full bg-stone-900/85 backdrop-blur-md border border-stone-700/70 text-[9px] font-mono text-stone-200 font-bold uppercase tracking-wider flex items-center gap-1">
														<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
														Live Invitation
													</span>

													<span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[9px] font-mono text-stone-300">
														{activeKey.toUpperCase()}
													</span>
												</div>
											</div>

											{/* Unboxing stamp overlay indicator */}
											<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
												<motion.div
													animate={{
														scale: isUnboxed ? [1, 1.25, 0] : 1,
														opacity: isUnboxed ? 0 : 1,
													}}
													transition={{ duration: 0.4 }}
													className={`w-14 h-14 rounded-full bg-gradient-to-br ${active.sealGradient} border-2 flex items-center justify-center shadow-2xl`}
												>
													<span className="font-serif italic font-bold text-amber-100 text-base">
														{active.sealMonogram}
													</span>
												</motion.div>
											</div>

											{/* Bottom Screen Content */}
											<div className="absolute bottom-0 inset-x-0 p-3.5 space-y-2 bg-gradient-to-t from-stone-950 via-stone-950/90 to-transparent pt-6">
												<div className="space-y-0.5">
													<p className="text-xs font-serif font-bold text-white tracking-tight leading-tight">
														{active.title}
													</p>
													<p className="text-[10px] text-stone-300 font-light flex items-center gap-1">
														<MapPin className="w-2.5 h-2.5 text-amber-400" />
														{active.location}
													</p>
												</div>

												{/* Interactive Form Synced State */}
												<div className="p-2 rounded-xl bg-stone-900/90 border border-stone-800 space-y-1">
													<div className="flex items-center justify-between text-[9px] font-mono text-stone-400">
														<span>RSVP STATUS:</span>
														<span className="text-emerald-400 font-bold flex items-center gap-0.5">
															<Check className="w-2.5 h-2.5" /> CONFIRMED
														</span>
													</div>
													<div className="text-[10px] font-mono text-stone-200 font-medium truncate">
														Selected:{" "}
														<span className="text-amber-300">
															{selectedOption || active.rsvpOptions[0]}
														</span>
													</div>
												</div>

												{/* Direct Jump Link inside the phone */}
												<Link
													href={active.route}
													className="w-full py-2 rounded-xl bg-white text-stone-950 hover:bg-stone-200 text-[10px] font-mono font-bold uppercase tracking-wider text-center block transition-colors shadow-md"
												>
													Explore Live Page →
												</Link>
											</div>
										</div>
									</div>

									{/* Bottom Home Indicator */}
									<div className="w-20 h-1 bg-stone-700 rounded-full mx-auto mt-2.5" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
