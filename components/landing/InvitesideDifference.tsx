"use client";

import { useRef, useState, useEffect } from "react";
import {
	Sparkles,
	CheckCircle2,
	Music,
	Calendar,
	Smartphone,
	Shield,
	Flame,
	ArrowRight,
	ArrowLeft,
	MapPin,
	Lock,
	Check,
	Palette,
	Paintbrush,
} from "lucide-react";

export function InvitesideDifference() {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);
	const [scrollProgress, setScrollProgress] = useState(0);

	const features = [
		{
			num: "01",
			badge: "1-on-1 Studio Craft",
			title: "100% Bespoke. Never A Template.",
			desc: "We don’t do cookie-cutter DIY forms. Share your floral moodboard, wedding stationery, or venue photos — our studio personally handcrafts and custom-codes an invitation tailored specifically to your event.",
			icon: Paintbrush,
			accentBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
			ghostNum: "01",
			tag: "Your Palette • Your Monogram • Custom Code",
			preview: (
				<div className="w-full h-32 rounded-2xl bg-muted/50 border border-border/80 p-3.5 flex flex-col justify-between text-left">
					<div className="flex items-center justify-between">
						<span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider flex items-center gap-1">
							<Palette className="w-3 h-3 text-amber-500" /> Tailored Moodboard
						</span>
						<span className="text-[9px] font-mono bg-background border border-border px-2 py-0.5 rounded-full font-bold text-amber-600 dark:text-amber-400">
							Zero Templates
						</span>
					</div>

					{/* Custom color swatches & font preview */}
					<div className="space-y-1.5 pt-1">
						<div className="flex items-center gap-1.5">
							<span className="w-5 h-5 rounded-full bg-[#C85A32] shadow-xs border border-white/20" title="Terracotta" />
							<span className="w-5 h-5 rounded-full bg-[#4A5D4E] shadow-xs border border-white/20" title="Sage Olive" />
							<span className="w-5 h-5 rounded-full bg-[#D4AF37] shadow-xs border border-white/20" title="Gold Foil" />
							<span className="w-5 h-5 rounded-full bg-[#2C3E35] shadow-xs border border-white/20" title="Forest Velvet" />
							<span className="text-[10px] font-mono text-muted-foreground ml-1">
								Matched to your florals &amp; dress
							</span>
						</div>
					</div>

					<div className="flex items-center justify-between text-[9px] font-mono text-muted-foreground border-t border-border/40 pt-1">
						<span>Custom Monograms &amp; Layouts</span>
						<span className="text-emerald-500 font-bold">Personalized ✓</span>
					</div>
				</div>
			),
		},
		{
			num: "02",
			badge: "First Impression",
			title: "Tactile Digital Unboxing",
			desc: "Guests don’t just open a plain link. They experience an authentic opening ritual: tap an embossed 3D wax seal with your initials, slide a brass folio clasp, or tear open a party memo with dynamic confetti.",
			icon: Flame,
			accentBg: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
			ghostNum: "02",
			tag: "Custom Wax Seal • Clasp Folio • Confetti Tear",
			preview: (
				<div className="w-full h-32 rounded-2xl bg-stone-900/90 border border-stone-800 p-4 flex flex-col justify-center items-center relative overflow-hidden shadow-inner">
					<div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-stone-800/80 to-transparent pointer-events-none" />
					<div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-700 via-amber-700 to-red-950 border-2 border-amber-400/40 shadow-lg flex items-center justify-center">
						<span className="font-serif italic font-bold text-amber-100 text-base drop-shadow-sm">
							I
						</span>
					</div>
					<span className="text-[10px] font-mono text-stone-300 mt-2 tracking-widest uppercase">
						Your Monogram Wax Seal
					</span>
				</div>
			),
		},
		{
			num: "03",
			badge: "Atmosphere",
			title: "Custom Event Soundtracks",
			desc: "Immerse your guests from the very first second. Curated acoustic strings, lo-fi beats, or ambient piano with subtle player controls set the exact emotional tone of your celebration.",
			icon: Music,
			accentBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
			ghostNum: "03",
			tag: "Acoustic Strings • Lofi Beats • Your First Dance",
			preview: (
				<div className="w-full h-32 rounded-2xl bg-muted/50 border border-border/80 p-4 flex flex-col justify-between relative overflow-hidden">
					<div className="flex items-center justify-between">
						<div className="space-y-0.5">
							<span className="text-[9px] font-mono uppercase tracking-wider text-purple-500 font-bold">
								Curated For Your Event
							</span>
							<p className="text-xs font-serif font-bold text-foreground truncate">
								Your Chosen Song or Acoustic Score
							</p>
						</div>
						<div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary">
							<Music className="w-3.5 h-3.5" />
						</div>
					</div>
					<div className="flex items-end gap-1.5 h-7 pt-2 border-t border-border/40">
						{[35, 75, 95, 55, 85, 45, 90, 65, 40, 80, 60].map((h, i) => (
							<span
								key={i}
								style={{ height: `${h}%` }}
								className="w-1 rounded-full bg-primary/70"
							/>
						))}
					</div>
				</div>
			),
		},
		{
			num: "04",
			badge: "Logistics",
			title: "Custom RSVP & Meal Flows",
			desc: "Tailored specifically to your reception format. Collect confirmed headcounts, custom dinner entrée choices, allergies, plus-ones, and song requests into your own dedicated private host dashboard.",
			icon: CheckCircle2,
			accentBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
			ghostNum: "04",
			tag: "Tailored Questions • Entrée Tracking • Dashboard",
			preview: (
				<div className="w-full h-32 rounded-2xl bg-muted/50 border border-border/80 p-3.5 flex flex-col justify-between text-left">
					<div className="flex items-center justify-between">
						<span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
							<Check className="w-3 h-3" /> RSVP Confirmed
						</span>
						<span className="text-[10px] font-mono bg-background border border-border px-2 py-0.5 rounded-full font-bold">
							2 Guests
						</span>
					</div>
					<div className="flex gap-1.5 pt-1">
						<span className="text-[10px] font-mono px-2 py-1 rounded-lg bg-background border border-border text-foreground font-medium">
							🥩 Wagyu
						</span>
						<span className="text-[10px] font-mono px-2 py-1 rounded-lg bg-background border border-border text-foreground font-medium">
							🐟 Sea Bass
						</span>
						<span className="text-[10px] font-mono px-2 py-1 rounded-lg bg-background border border-border text-foreground font-medium">
							🌱 Morel
						</span>
					</div>
					<span className="text-[9px] font-mono text-muted-foreground">
						Live sync to dedicated host dashboard
					</span>
				</div>
			),
		},
		{
			num: "05",
			badge: "Attendance",
			title: "1-Tap Calendar Sync & Maps",
			desc: "Guests add your celebration directly to Apple Calendar or Google Calendar with a single click. Integrated Google Maps, valet details, and rideshare drop coordinates ensure 100% arrival accuracy.",
			icon: Calendar,
			accentBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
			ghostNum: "05",
			tag: "Apple & Google Cal • Waze & Maps GPS",
			preview: (
				<div className="w-full h-32 rounded-2xl bg-muted/50 border border-border/80 p-3.5 flex items-center gap-3">
					<div className="w-16 h-20 rounded-xl bg-background border border-border flex flex-col items-center justify-center shrink-0">
						<span className="text-[9px] font-mono text-rose-500 font-bold uppercase">OCT</span>
						<span className="text-xl font-serif font-bold text-foreground">24</span>
						<span className="text-[8px] font-mono text-muted-foreground">5:00 PM</span>
					</div>
					<div className="space-y-1 text-left overflow-hidden">
						<div className="flex items-center gap-1 text-[11px] font-serif font-bold text-foreground truncate">
							<MapPin className="w-3 h-3 text-primary shrink-0" />
							<span className="truncate">Villa Corsini, Florence</span>
						</div>
						<p className="text-[10px] text-muted-foreground leading-tight line-clamp-2">
							Private shuttle &amp; valet details synced.
						</p>
						<span className="inline-block text-[9px] font-mono text-primary font-bold">
							1-Tap Apple &amp; Google Cal Sync →
						</span>
					</div>
				</div>
			),
		},
		{
			num: "06",
			badge: "Sharing",
			title: "100% Mobile Native",
			desc: "Engineered specifically for mobile screens. Send in seconds via WhatsApp, iMessage, Instagram, or email with zero app downloads or account logins required for your guests.",
			icon: Smartphone,
			accentBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
			ghostNum: "06",
			tag: "WhatsApp • iMessage • 0 App Installs",
			preview: (
				<div className="w-full h-32 rounded-2xl bg-muted/50 border border-border/80 p-3 flex flex-col justify-center">
					<div className="p-2.5 rounded-xl rounded-tr-xs bg-primary text-primary-foreground text-left space-y-1.5 shadow-sm">
						<p className="text-[11px] font-light truncate">
							Tap to open Amelia &amp; Liam&apos;s wedding invite ✨
						</p>
						<div className="flex items-center justify-between text-[9px] font-mono opacity-75 border-t border-primary-foreground/20 pt-1">
							<span>inviteside.com/demo/wedding</span>
							<span>Delivered ✓</span>
						</div>
					</div>
				</div>
			),
		},
		{
			num: "07",
			badge: "Branding",
			title: "Privacy, Hosting & Custom Domains",
			desc: "Protect confidential corporate assemblies with encrypted PIN passcodes, or brand your celebration with your own custom web address. Every invitation includes 6 months of cloud hosting with 256-bit SSL encryption.",
			icon: Shield,
			accentBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
			ghostNum: "07",
			tag: "6 Mos Cloud Hosting • Custom Domains • SSL",
			preview: (
				<div className="w-full h-32 rounded-2xl bg-muted/50 border border-border/80 p-3.5 flex flex-col justify-center space-y-2 text-left">
					<div className="p-2 rounded-xl bg-background border border-border flex items-center gap-2 text-[11px] font-mono">
						<Lock className="w-3 h-3 text-emerald-500 shrink-0" />
						<span className="font-semibold text-foreground truncate">
							ameliaandliam.wedding
						</span>
					</div>
					<div className="flex items-center justify-between text-[9px] font-mono text-muted-foreground px-1">
						<span>SSL 256-Bit Encrypted</span>
						<span className="text-emerald-600 dark:text-emerald-400 font-bold">White-Label</span>
					</div>
				</div>
			),
		},
	];

	// Handle scroll update & indicators
	const updateScrollState = () => {
		const el = scrollRef.current;
		if (!el) return;
		const { scrollLeft, scrollWidth, clientWidth } = el;
		setCanScrollLeft(scrollLeft > 10);
		setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
		const maxScroll = scrollWidth - clientWidth;
		setScrollProgress(maxScroll > 0 ? scrollLeft / maxScroll : 0);
	};

	useEffect(() => {
		const el = scrollRef.current;
		if (!el) return;
		updateScrollState();
		el.addEventListener("scroll", updateScrollState, { passive: true });
		window.addEventListener("resize", updateScrollState);
		return () => {
			el.removeEventListener("scroll", updateScrollState);
			window.removeEventListener("resize", updateScrollState);
		};
	}, []);

	const scroll = (direction: "left" | "right") => {
		const el = scrollRef.current;
		if (!el) return;
		const scrollAmount = el.clientWidth * 0.75;
		el.scrollBy({
			left: direction === "left" ? -scrollAmount : scrollAmount,
			behavior: "smooth",
		});
	};

	return (
		<section
			id="services"
			className="py-20 sm:py-24 px-6 max-w-7xl mx-auto border-t border-border/40 scroll-mt-20"
		>
			{/* Top Bar: Section Title & Smooth Navigation Controls */}
			<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
				<div className="space-y-2.5 text-left max-w-2xl">
					<h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-foreground">
						Invitations personally designed to compliment your day.
					</h2>
					<p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
						Unlike DIY templates, Inviteside gives you a one-of-a-kind digital invitation, thoughtfully handcrafted and designed to reflect your personal style, event theme, and story.
					</p>
				</div>

				{/* Right Controls: Progress bar + Navigation Arrows */}
				<div className="flex items-center gap-4 self-start md:self-end shrink-0">
					{/* Progress Pill Bar */}
					<div className="hidden sm:flex flex-col gap-1 text-right">
						<span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
							Swipe or Glide
						</span>
						<div className="w-32 h-1.5 bg-muted rounded-full overflow-hidden border border-border/60">
							<div
								style={{ width: `${Math.max(15, scrollProgress * 100)}%` }}
								className="h-full bg-primary rounded-full transition-all duration-150 ease-out"
							/>
						</div>
					</div>

					{/* Navigation Buttons */}
					<div className="flex items-center gap-2">
						<button
							onClick={() => scroll("left")}
							disabled={!canScrollLeft}
							aria-label="Scroll left"
							className={`w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all cursor-pointer ${canScrollLeft
								? "bg-card text-foreground hover:bg-muted shadow-xs hover:scale-105 active:scale-95"
								: "opacity-35 cursor-not-allowed text-muted-foreground bg-muted/40"
								}`}
						>
							<ArrowLeft className="w-4 h-4" />
						</button>
						<button
							onClick={() => scroll("right")}
							disabled={!canScrollRight}
							aria-label="Scroll right"
							className={`w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all cursor-pointer ${canScrollRight
								? "bg-card text-foreground hover:bg-muted shadow-xs hover:scale-105 active:scale-95"
								: "opacity-35 cursor-not-allowed text-muted-foreground bg-muted/40"
								}`}
						>
							<ArrowRight className="w-4 h-4" />
						</button>
					</div>
				</div>
			</div>

			{/* Studio Personalization Process Highlight Strip */}
			<div className="grid sm:grid-cols-3 gap-3 mb-8 p-4 rounded-2xl bg-muted/30 border border-border/70 text-left">
				<div className="flex items-start gap-3 p-2">
					<div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 text-xs font-mono font-bold">
						01
					</div>
					<div className="space-y-0.5">
						<span className="text-xs font-mono font-bold text-foreground block">
							Share Your Vision
						</span>
						<span className="text-[11px] text-muted-foreground font-light leading-snug block">
							Send your moodboard, florals, colors, venue photos, or paper invitations.
						</span>
					</div>
				</div>
				<div className="flex items-start gap-3 p-2 border-t sm:border-t-0 sm:border-l border-border/60">
					<div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 text-xs font-mono font-bold">
						02
					</div>
					<div className="space-y-0.5">
						<span className="text-xs font-mono font-bold text-foreground block">
							Handcrafted By Our Studio
						</span>
						<span className="text-[11px] text-muted-foreground font-light leading-snug block">
							We custom-code the layout, opening ritual, soundtrack, and RSVP logic from scratch.
						</span>
					</div>
				</div>
				<div className="flex items-start gap-3 p-2 border-t sm:border-t-0 sm:border-l border-border/60">
					<div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 text-xs font-mono font-bold">
						03
					</div>
					<div className="space-y-0.5">
						<span className="text-xs font-mono font-bold text-foreground block">
							Refined Together
						</span>
						<span className="text-[11px] text-muted-foreground font-light leading-snug block">
							Direct 1-on-1 collaboration with your designer with revision rounds until it’s perfect.
						</span>
					</div>
				</div>
			</div>

			{/* Horizontal Scrolling Showcase Stream */}
			<div
				ref={scrollRef}
				className="flex gap-6 overflow-x-auto scroll-smooth pb-6 pt-2 -mx-6 px-6 sm:-mx-8 sm:px-8 snap-x snap-mandatory scrollbar-none"
				style={{
					scrollbarWidth: "none",
					msOverflowStyle: "none",
				}}
			>
				{features.map((item) => {
					const Icon = item.icon;
					return (
						<div
							key={item.num}
							className="snap-start w-[310px] sm:w-[380px] md:w-[420px] shrink-0 rounded-3xl border border-border/80 bg-card/85 backdrop-blur-xl p-6 sm:p-7 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group select-none"
						>
							{/* Large Ghost Numeral in Background */}
							<span className="absolute -top-3 -right-2 font-serif font-bold text-8xl text-foreground/[0.04] group-hover:text-primary/[0.08] transition-colors pointer-events-none select-none">
								{item.ghostNum}
							</span>

							{/* Header: Icon + Number + Badge */}
							<div className="space-y-4 relative z-10">
								<div className="flex items-center justify-between">
									<div
										className={`w-10 h-10 rounded-2xl border flex items-center justify-center shadow-xs transition-transform group-hover:scale-105 ${item.accentBg}`}
									>
										<Icon className="w-5 h-5" />
									</div>
									<div className="flex items-center gap-2">
										<span className="text-[11px] font-mono text-muted-foreground/60 font-semibold">
											{item.num} / 07
										</span>
										<span className="px-2.5 py-0.5 rounded-full bg-muted text-[10px] font-mono text-muted-foreground font-semibold uppercase tracking-wider">
											{item.badge}
										</span>
									</div>
								</div>

								{/* Visual Widget Preview */}
								<div className="pt-1">{item.preview}</div>
							</div>

							{/* Description & Detail Chip */}
							<div className="space-y-2.5 relative z-10 text-left pt-5">
								<h3 className="font-serif font-bold text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors leading-snug">
									{item.title}
								</h3>
								<p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed line-clamp-3">
									{item.desc}
								</p>

								<div className="pt-2.5 border-t border-border/40">
									<span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1.5">
										<span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
										<span>{item.tag}</span>
									</span>
								</div>
							</div>
						</div>
					);
				})}

				{/* Final Callout Card: Transition to Occasions Showcase */}
				<div className="snap-start w-[280px] sm:w-[320px] shrink-0 rounded-3xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 sm:p-7 flex flex-col justify-between text-left select-none">
					<div className="space-y-3">
						<span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
							Live Specimens
						</span>
						<h3 className="font-serif font-bold text-xl text-foreground leading-tight">
							Explore the live interactive demos.
						</h3>
						<p className="text-xs text-muted-foreground font-light leading-relaxed">
							Four bespoke designs: Tuscan Wedding, Milestone Birthday, Executive Summit, and Studio Bash.
						</p>
					</div>

					<div className="space-y-2.5 pt-4">
						<a
							href="#occasions"
							className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-mono font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
						>
							<span>View Portfolio</span>
							<ArrowRight className="w-3.5 h-3.5" />
						</a>
					</div>
				</div>
			</div>

			{/* Subtle Proof Ticker Strip */}
			<div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-muted/20 border border-border/60 text-center">
				<div className="space-y-0.5">
					<div className="text-xl sm:text-2xl font-serif font-bold text-foreground">1-on-1 Studio</div>
					<div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
						Designer Collaboration
					</div>
				</div>
				<div className="space-y-0.5">
					<div className="text-xl sm:text-2xl font-serif font-bold text-foreground">100% Bespoke</div>
					<div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
						Zero Generic Templates
					</div>
				</div>
				<div className="space-y-0.5">
					<div className="text-xl sm:text-2xl font-serif font-bold text-foreground">6 Months</div>
					<div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
						Cloud Hosting Included
					</div>
				</div>
				<div className="space-y-0.5">
					<div className="text-xl sm:text-2xl font-serif font-bold text-foreground">Unlimited</div>
					<div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
						Guest Sends &amp; Opens
					</div>
				</div>
			</div>
		</section>
	);
}
