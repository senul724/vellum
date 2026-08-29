"use client";

import { useState } from "react";
import Link from "next/link";
import {
	Smartphone,
	MapPin,
	Calendar,
	Sparkles,
	ArrowRight,
	CheckCircle2,
	Laptop,
	Globe,
	Lock,
	ExternalLink,
	Wine,
	PartyPopper,
	Briefcase,
	Heart,
	Users,
	Mail,
	Send,
	MessageCircle,
	Check,
	Music,
	Layers,
	Clock,
	Shield,
	Compass,
	Sliders,
} from "lucide-react";

export default function IndexPage() {
	return (
		<main className="bg-background font-sans text-foreground overflow-x-hidden">
			<Navigation />
			<Hero />
			<WhatWeDo />
			<OccasionsShowcase />
			<PricingSection />
			<QuoteContactSection />
			<Footer />
		</main>
	);
}

/* =========================================================================
   1. NAVIGATION
   ========================================================================= */
function Navigation() {
	return (
		<nav className="fixed top-0 w-full z-50 px-6 sm:px-10 md:px-12 py-4 flex justify-between items-center bg-background/85 backdrop-blur-xl border-b border-border/40 shadow-xs">
			<Link href="/" className="text-xl sm:text-2xl font-serif italic tracking-tight text-foreground flex items-center gap-2">
				<span>Inviteside.</span>
			</Link>

			<div className="hidden md:flex gap-8 lg:gap-10 text-xs uppercase tracking-widest font-medium text-muted-foreground">
				<a href="#services" className="hover:text-foreground transition-colors">
					Services
				</a>
				<a href="#occasions" className="hover:text-foreground transition-colors">
					Occasions &amp; Demos
				</a>
				<a href="#pricing" className="hover:text-foreground transition-colors">
					Pricing
				</a>
				<a href="#contact" className="hover:text-foreground transition-colors">
					Get a Quote
				</a>
			</div>

			<div className="flex items-center gap-3">
				<a
					href="https://wa.me/?text=Hi%20Inviteside!%20I'd%20like%20to%20get%20a%20quote%20for%20an%20invite%20page."
					target="_blank"
					rel="noopener noreferrer"
					className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wider hover:bg-emerald-500/20 transition-all"
				>
					<MessageCircle className="w-3.5 h-3.5" />
					<span>WhatsApp</span>
				</a>

				<a
					href="#contact"
					className="px-5 sm:px-6 py-2 bg-primary text-primary-foreground rounded-full text-xs uppercase tracking-widest font-semibold hover:opacity-90 transition-all cursor-pointer shadow-xs"
				>
					Get a Quote
				</a>
			</div>
		</nav>
	);
}

/* =========================================================================
   2. HERO SECTION (Clean, Impactful, No Tabs, No Repetitive Demo Buttons)
   ========================================================================= */
function Hero() {
	return (
		<section className="relative pt-32 sm:pt-38 pb-20 px-6 max-w-6xl mx-auto text-center overflow-hidden">
			{/* Ambient Lighting */}
			<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-400/10 via-rose-400/10 to-emerald-400/10 rounded-full blur-[140px] pointer-events-none -z-10" />

			<div className="space-y-6 max-w-4xl mx-auto">
				{/* Eyebrow Pill */}
				<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-widest uppercase shadow-xs">
					<Sparkles className="w-3.5 h-3.5" />
					<span>Bespoke Interactive Event Websites</span>
				</div>

				{/* Headline */}
				<div className="space-y-2">
					<h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight leading-[1.08] text-foreground">
						Unboring invite pages <br />
						<span className="italic font-light text-muted-foreground">
							for every occasion.
						</span>
					</h1>
					<p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed pt-2">
						Ditch generic paper cards, messy PDFs, and chaotic group chats. We design custom event websites with unboxing animations, background audio, instant RSVP tracking, and mobile polish.
					</p>
				</div>

				{/* Primary Hero Actions */}
				<div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-3">
					<a
						href="#occasions"
						className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2"
					>
						<span>Explore Occasions &amp; Demos</span>
						<ArrowRight className="w-4 h-4" />
					</a>

					<a
						href="#contact"
						className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-border bg-card hover:bg-muted/60 text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all shadow-xs hover:scale-105 active:scale-95 flex items-center gap-2"
					>
						<span>Get a Quote (From $50)</span>
					</a>
				</div>
			</div>

			{/* Clean Visual Preview Showcase */}
			<div className="mt-14 sm:mt-18 relative max-w-5xl mx-auto">
				<div className="rounded-3xl border border-border bg-card shadow-2xl overflow-hidden text-left">
					{/* Browser Window Header */}
					<div className="px-5 py-3.5 border-b border-border bg-muted/40 flex items-center justify-between">
						<div className="flex items-center gap-2">
							<span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
							<span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
							<span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
						</div>
						<div className="px-4 py-1 rounded-full bg-background border border-border/80 text-[11px] font-mono text-muted-foreground flex items-center gap-2 shadow-xs">
							<Lock className="w-3 h-3 text-emerald-500" />
							<span>inviteside.com/event-preview</span>
						</div>
						<div className="text-[11px] font-mono text-muted-foreground hidden sm:block">
							100% Mobile &amp; Desktop Optimized
						</div>
					</div>

					{/* Clean Live Feature Composite Banner */}
					<div className="relative p-6 sm:p-10 bg-gradient-to-br from-card via-muted/20 to-card">
						<div className="grid md:grid-cols-12 gap-8 items-center">
							<div className="md:col-span-7 space-y-4">
								<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-mono font-bold uppercase tracking-wider text-primary">
									<span>✨ Handcrafted for your guests</span>
								</div>
								<h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground leading-tight">
									A single link that replaces endless questions.
								</h3>
								<p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
									When your guests open your Inviteside page, they experience your event’s world before it even begins: smooth opening rituals, background soundtracks, one-tap calendar syncing, curated menus, and live headcount confirmation.
								</p>

								<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
									<div className="p-3 rounded-xl bg-background border border-border/70 shadow-xs space-y-1">
										<span className="text-xs font-mono font-bold text-foreground block">3D Unboxing</span>
										<span className="text-[11px] text-muted-foreground">Wax seals &amp; folios</span>
									</div>
									<div className="p-3 rounded-xl bg-background border border-border/70 shadow-xs space-y-1">
										<span className="text-xs font-mono font-bold text-foreground block">Smart RSVP</span>
										<span className="text-[11px] text-muted-foreground">Headcounts &amp; meals</span>
									</div>
									<div className="p-3 rounded-xl bg-background border border-border/70 shadow-xs space-y-1">
										<span className="text-xs font-mono font-bold text-foreground block">Audio Player</span>
										<span className="text-[11px] text-muted-foreground">Custom playlists</span>
									</div>
								</div>
							</div>

							<div className="md:col-span-5 flex justify-center">
								{/* Sleek Smartphone Mockup Preview */}
								<div className="w-full max-w-[260px] rounded-3xl border-4 border-stone-800 bg-stone-950 p-2 shadow-2xl">
									<div className="w-20 h-3.5 bg-stone-800 rounded-full mx-auto mb-2 flex items-center justify-center">
										<div className="w-2 h-2 rounded-full bg-stone-900" />
									</div>
									<div className="rounded-2xl overflow-hidden bg-card border border-stone-800 text-left p-3.5 space-y-3">
										<div className="aspect-[4/3] rounded-xl overflow-hidden relative shadow-xs">
											<img
												src="/invite-botanical.jpg"
												alt="Invite preview"
												className="w-full h-full object-cover"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
												<span className="text-[10px] uppercase font-bold tracking-wider text-white">
													Live Invitation
												</span>
											</div>
										</div>
										<div className="space-y-1">
											<p className="text-xs font-serif font-bold text-foreground">
												Amelia &amp; Liam
											</p>
											<p className="text-[10px] text-muted-foreground">
												Florence, Italy &bull; Oct 24
											</p>
										</div>
										<div className="w-full py-2 rounded-lg bg-primary text-primary-foreground text-[10px] font-mono font-bold uppercase tracking-wider text-center">
											RSVP Confirmed (2 Guests)
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

/* =========================================================================
   3. WHAT WE DO / OUR SERVICE (Clean Editorial Feature Breakdown, No Clutter)
   ========================================================================= */
function WhatWeDo() {
	const features = [
		{
			icon: Sparkles,
			title: "Tactile Digital Unboxing",
			desc: "Guests don't just see text. They interact with an opening ritual: tap an authentic wax seal, slide a brass folio clasp, or unwrap a party memo with custom confetti.",
			badge: "First Impression",
		},
		{
			icon: CheckCircle2,
			title: "Smart RSVP & Meal Tracking",
			desc: "Collect real-time confirmed headcounts, dietary restrictions, cocktail choices, plus-ones, and song requests into an organized spreadsheet export.",
			badge: "Logistics",
		},
		{
			icon: Music,
			title: "Custom Event Soundtracks",
			desc: "Immerse your guests from the very first second. Curated background audio with subtle player controls sets the exact emotional tone of your celebration.",
			badge: "Atmosphere",
		},
		{
			icon: Calendar,
			title: "1-Tap Calendar Sync & Maps",
			desc: "Guests add your event directly to Apple Calendar or Google Calendar with one click. Integrated venue maps, valet details, and rideshare drops.",
			badge: "Attendance",
		},
		{
			icon: Smartphone,
			title: "100% Mobile Native",
			desc: "Engineered specifically to look breathtaking on mobile screens. Easy to send in seconds via WhatsApp, iMessage, Instagram, or email.",
			badge: "Sharing",
		},
		{
			icon: Shield,
			title: "Privacy & Custom Domains",
			desc: "Protect confidential corporate events with encrypted passwords, or brand your wedding and party with a custom web address (yournames.com).",
			badge: "Branding",
		},
	];

	return (
		<section id="services" className="py-20 px-6 max-w-6xl mx-auto border-t border-border/40">
			<div className="text-center space-y-2 mb-14">
				<span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary block">
					What We Build
				</span>
				<h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-foreground">
					The Inviteside Difference
				</h2>
				<p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto font-light leading-relaxed pt-1">
					Every invite website is built from scratch with thoughtful interaction, responsive engineering, and zero clunky templates.
				</p>
				<div className="w-16 h-[2px] bg-primary mx-auto mt-4" />
			</div>

			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
				{features.map((item, idx) => {
					const Icon = item.icon;
					return (
						<div
							key={idx}
							className="p-6 sm:p-7 rounded-3xl border border-border bg-card/60 hover:bg-card hover:border-primary/40 shadow-xs hover:shadow-xl transition-all duration-300 space-y-3.5 flex flex-col justify-between"
						>
							<div className="space-y-3">
								<div className="flex items-center justify-between">
									<div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-xs">
										<Icon className="w-5 h-5" />
									</div>
									<span className="px-2.5 py-0.5 rounded-full bg-muted text-[10px] font-mono text-muted-foreground font-semibold uppercase">
										{item.badge}
									</span>
								</div>
								<h3 className="font-serif font-bold text-lg text-foreground">
									{item.title}
								</h3>
								<p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
									{item.desc}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

/* =========================================================================
   4. OCCASIONS SHOWCASE (Luxury Editorial Portfolio Showcase)
   ========================================================================= */
function OccasionsShowcase() {
	const occasions = [
		{
			id: "wedding",
			num: "01",
			category: "Weddings & Receptions",
			title: "Amelia & Liam's Tuscan Celebration",
			tagline: "Romantic editorial storytelling with digital wax seal unboxing.",
			desc: "Designed for couples who refuse generic wedding templates. Guests break an authentic digital wax seal, listen to acoustic Italian strings, browse an 8-photo travel album, view hotel accommodations, and select their dinner entrée with allergy notes.",
			image: "/invite-botanical.jpg",
			url: "inviteside.com/wedding",
			route: "/wedding",
			accentColor: "border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/10",
			features: [
				"3D Wax Seal Unboxing Ritual",
				"Curated Orchestral Audio Track",
				"8-Photo Memory Story Gallery",
				"Hotel & Travel Accommodations Guide",
				"Entrée Selection & Dietary Tracking",
			],
		},
		{
			id: "birthday",
			num: "02",
			category: "Milestone Birthdays",
			title: "Sophia's 25th Milestone Soirée",
			tagline: "Midnight sunset aesthetic with interactive 3D metallic balloons.",
			desc: "A high-fashion rooftop birthday invitation built for modern celebrants. Features floating 3D chrome balloons that guests can tap to pop with confetti, live party countdown timer, signature cocktail selector, and a digital guest wishes wall.",
			image: "/birthday-sophia.jpg",
			url: "inviteside.com/birthday",
			route: "/birthday",
			accentColor: "border-rose-500/30 text-rose-600 dark:text-rose-400 bg-rose-500/10",
			features: [
				"Interactive 3D Chrome Floating Balloons",
				"Midnight Velvet & Sunset Palette",
				"Signature Cocktail Selection (French 75, Mezcal)",
				"Live Party Countdown Chronometer",
				"Keepsake Guest Wishes Wall",
			],
		},
		{
			id: "business",
			num: "03",
			category: "Executive Summits & Dinners",
			title: "Nexus Global Leadership Summit",
			tagline: "Tactile skeuomorphic presentation folio with brushed brass hardware.",
			desc: "Engineered for confidential assemblies, venture summits, and private executive dinners. Guests click a brushed brass clasp to unclasp an executive leatherette dossier, revealing their encrypted digital pass, Chatham House protocol, and black-car valet instructions.",
			image: "/hero-every-occasion.jpg",
			url: "inviteside.com/business",
			route: "/business",
			accentColor: "border-slate-500/30 text-slate-700 dark:text-slate-300 bg-slate-500/10",
			features: [
				"Skeuomorphic Folio with Brass Clasp",
				"VIP PVC Delegate Pass with Barcode",
				"Chatham House Rule Protocol",
				"Executive Car Service & Valet Specs",
				"Encrypted Accreditation Verification",
			],
		},
		{
			id: "party",
			num: "04",
			category: "Office & Studio Bashes",
			title: "Slack is Muted. The Bar is Open.",
			tagline: "High-energy company celebration with interactive Slack status switcher.",
			desc: "Cancel your Friday standup. Give your coworkers an unboring office party invitation with an internal memo unbox, interactive Slack status changer, open bar drink wristbands, Golden Mug Superlative Awards, and DJ song requests.",
			image: "/office-party.jpg",
			url: "inviteside.com/party",
			route: "/party",
			accentColor: "border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
			features: [
				"Confidential Company Memo Unboxing",
				"Interactive Slack Status Switcher (OOO 🌴)",
				"Open Bar Menu (The Friday Deploy, Spritz)",
				"Annual Golden Mug Superlative Awards",
				"DJ Song Request Submission Queue",
			],
		},
	];

	return (
		<section id="occasions" className="py-24 px-6 max-w-6xl mx-auto border-t border-border/40">
			{/* Section Header */}
			<div className="text-center space-y-3 mb-20">
				<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono font-bold tracking-widest uppercase shadow-xs">
					<Sparkles className="w-3.5 h-3.5" />
					<span>Live Interactive Portfolio</span>
				</div>
				<h2 className="text-3xl sm:text-5xl md:text-6xl font-serif tracking-tight text-foreground">
					Crafted for the events that matter most.
				</h2>
				<p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
					Four distinct aesthetics. Four completely tailored experiences. Explore the live specimen demos below to test the animations, audio, and RSVP mechanics.
				</p>
				<div className="w-16 h-[2px] bg-primary mx-auto mt-2" />
			</div>

			{/* Alternating Editorial Showcase Rows */}
			<div className="space-y-24">
				{occasions.map((item, idx) => {
					const isEven = idx % 2 === 0;
					return (
						<div
							key={item.id}
							className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
								isEven ? "" : "lg:flex-row-reverse"
							}`}
						>
							{/* Browser Viewport Frame Mockup (6 Columns) */}
							<div
								className={`lg:col-span-7 ${
									isEven ? "lg:order-1" : "lg:order-2"
								}`}
							>
								<div className="rounded-3xl border border-border bg-card shadow-2xl overflow-hidden group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:scale-[1.01]">
									{/* Browser Title Bar */}
									<div className="px-4 sm:px-5 py-3 border-b border-border bg-muted/50 flex items-center justify-between">
										<div className="flex items-center gap-2">
											<span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
											<span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
											<span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
										</div>
										<div className="px-3.5 py-1 rounded-full bg-background border border-border text-[11px] font-mono text-muted-foreground flex items-center gap-1.5 shadow-xs">
											<Lock className="w-3 h-3 text-emerald-500" />
											<span>{item.url}</span>
										</div>
										<span className="text-[10px] font-mono text-muted-foreground uppercase hidden sm:inline-block">
											Interactive Webpage
										</span>
									</div>

									{/* Website Screenshot with Subtle Frame & Hover Zoom */}
									<div className="relative aspect-[16/10] overflow-hidden bg-muted/20">
										<img
											src={item.image}
											alt={item.title}
											className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 select-none"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

										{/* Floating Live Badge */}
										<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
											<span className="text-xs font-mono font-medium drop-shadow-md">
												Full Audio &amp; Interactive RSVP Enabled
											</span>
											<Link
												href={item.route}
												className="px-3 py-1 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-[11px] font-mono font-semibold uppercase tracking-wider transition-colors flex items-center gap-1"
											>
												<span>Preview</span>
												<ExternalLink className="w-3 h-3" />
											</Link>
										</div>
									</div>
								</div>
							</div>

							{/* Editorial Description Column (5 Columns) */}
							<div
								className={`lg:col-span-5 space-y-6 text-left ${
									isEven ? "lg:order-2" : "lg:order-1"
								}`}
							>
								<div className="space-y-3">
									<div className="flex items-center gap-3">
										<span className="text-xs font-mono font-bold text-muted-foreground">
											SPECIMEN &bull; {item.num}
										</span>
										<span
											className={`px-3 py-0.5 rounded-full border text-[10px] font-mono font-bold uppercase tracking-wider ${item.accentColor}`}
										>
											{item.category}
										</span>
									</div>

									<h3 className="text-3xl sm:text-4xl font-serif font-bold text-foreground leading-tight">
										{item.title}
									</h3>

									<p className="text-xs sm:text-sm font-mono text-primary font-semibold">
										{item.tagline}
									</p>

									<p className="text-sm text-muted-foreground font-light leading-relaxed pt-1">
										{item.desc}
									</p>
								</div>

								{/* Features Checklist */}
								<div className="space-y-2 pt-1 border-t border-border/60">
									<span className="text-[11px] font-mono font-bold uppercase tracking-wider text-foreground block pt-2">
										Included Experiences:
									</span>
									<div className="space-y-1.5">
										{item.features.map((feat, i) => (
											<div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
												<Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
												<span>{feat}</span>
											</div>
										))}
									</div>
								</div>

								{/* Single Prominent Live Demo Button */}
								<div className="pt-4">
									<Link
										href={item.route}
										className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
									>
										<span>Launch Live {item.category.split(" ")[0]} Demo</span>
										<ExternalLink className="w-4 h-4" />
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

/* =========================================================================
   5. PRICING SECTION (Starting from $50)
   ========================================================================= */
function PricingSection() {
	const tiers = [
		{
			name: "Starter Celebration",
			price: "$50",
			sub: "One-time flat fee &bull; No subscriptions",
			desc: "Ideal for milestone birthdays, dinner parties, baby showers, and intimate celebrations.",
			features: [
				"Single-page custom designed invite site",
				"Background music / audio player",
				"Interactive RSVP form with headcount tracking",
				"Interactive countdown timer",
				"1-Tap Google & Apple Calendar sync",
				"Mobile-optimized responsive design",
				"Hosted for 6 months with shareable URL",
				"Turnaround: 24–48 hours",
			],
			cta: "Get Started ($50)",
			highlighted: false,
		},
		{
			name: "Studio & Corporate",
			price: "$120",
			sub: "Most Popular &bull; Comprehensive Event Suite",
			desc: "Ideal for company holiday parties, office bashes, leadership summits, and brand galas.",
			features: [
				"Multi-section event site (Schedule, Menu, Venue)",
				"Custom unboxing animation / folio clasp",
				"Interactive cocktail / meal preference selector",
				"Digital attendee pass / accreditation badge",
				"Chatham House protocol & car service notes",
				"Exportable guest list & CSV reporting",
				"Custom domain support (yourparty.com)",
				"Hosted for 12 months &bull; 48-hour rush available",
			],
			cta: "Book Corporate ($120)",
			highlighted: true,
		},
		{
			name: "Bespoke Luxury & Weddings",
			price: "$250+",
			sub: "Full Bespoke Concierge & Multi-Event",
			desc: "Ideal for weddings, weekend retreats, multi-day conferences, and VIP celebrations.",
			features: [
				"Complete bespoke invite architecture",
				"Digital wax seal or custom opening ritual",
				"Multi-event timeline (Ceremony, Reception, Afterparty)",
				"Photo gallery & story memory album",
				"Gift registry links & hotel guide",
				"Allergy, dietary, and plus-one logic",
				"Custom domain included with SSL",
				"Dedicated designer with unlimited minor revisions",
			],
			cta: "Request Bespoke Quote",
			highlighted: false,
		},
	];

	return (
		<section id="pricing" className="py-20 px-6 max-w-6xl mx-auto border-t border-border/40">
			<div className="text-center space-y-2 mb-14">
				<span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary block">
					Transparent &amp; Simple
				</span>
				<h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-foreground">
					Pricing Starting From $50
				</h2>
				<p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto font-light leading-relaxed pt-1">
					No recurring subscriptions. Pay once for a custom designed, hosted invite page that delights your guests.
				</p>
				<div className="w-16 h-[2px] bg-primary mx-auto mt-4" />
			</div>

			<div className="grid md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
				{tiers.map((tier, idx) => (
					<div
						key={idx}
						className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between text-left transition-all duration-300 ${
							tier.highlighted
								? "border-2 border-primary bg-card shadow-2xl scale-[1.02] relative"
								: "border border-border bg-card/70 hover:bg-card shadow-sm hover:shadow-lg"
						}`}
					>
						{tier.highlighted && (
							<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-mono font-bold uppercase tracking-widest shadow-md">
								Most Popular Choice
							</div>
						)}

						<div className="space-y-6">
							<div className="space-y-2">
								<h3 className="font-serif font-bold text-2xl text-foreground">
									{tier.name}
								</h3>
								<div className="flex items-baseline gap-1">
									<span className="text-4xl sm:text-5xl font-serif font-black text-foreground">
										{tier.price}
									</span>
									<span className="text-xs font-mono text-muted-foreground">
										/ event
									</span>
								</div>
								<p className="text-[11px] font-mono text-primary font-semibold">
									{tier.sub}
								</p>
								<p className="text-xs text-muted-foreground font-light pt-1">
									{tier.desc}
								</p>
							</div>

							<div className="w-full h-[1px] bg-border" />

							<div className="space-y-2.5">
								<span className="text-[11px] font-mono font-bold uppercase tracking-wider text-foreground block">
									Everything Included:
								</span>
								{tier.features.map((feat, i) => (
									<div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
										<Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
										<span>{feat}</span>
									</div>
								))}
							</div>
						</div>

						<div className="pt-8">
							<a
								href="#contact"
								className={`w-full py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all text-center block shadow-sm ${
									tier.highlighted
										? "bg-primary text-primary-foreground hover:opacity-90 shadow-md"
										: "border border-border bg-muted/40 hover:bg-muted text-foreground"
								}`}
							>
								{tier.cta}
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

/* =========================================================================
   6. GET A QUOTE (Email Form + Direct WhatsApp Link)
   ========================================================================= */
function QuoteContactSection() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		occasion: "wedding",
		date: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleQuoteSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!form.name || !form.email) return;
		setSubmitted(true);
	};

	return (
		<section id="contact" className="py-20 px-6 max-w-6xl mx-auto border-t border-border/40">
			<div className="text-center space-y-2 mb-14">
				<span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary block">
					Start Your Project
				</span>
				<h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-foreground">
					Get Your Custom Invite Quote
				</h2>
				<p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto font-light leading-relaxed pt-1">
					Tell us about your event. We&apos;ll send over a custom concept and flat-rate quote within a few hours.
				</p>
				<div className="w-16 h-[2px] bg-primary mx-auto mt-4" />
			</div>

			<div className="grid lg:grid-cols-12 gap-8 items-start">
				{/* Left: Email Form */}
				<div className="lg:col-span-7 rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-lg text-left">
					{!submitted ? (
						<form onSubmit={handleQuoteSubmit} className="space-y-5">
							<div className="grid sm:grid-cols-2 gap-4">
								<div className="space-y-1.5">
									<label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
										Your Name *
									</label>
									<input
										type="text"
										required
										value={form.name}
										onChange={(e) => setForm({ ...form, name: e.target.value })}
										placeholder="e.g. Liam Vance"
										className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-primary transition-colors"
									/>
								</div>

								<div className="space-y-1.5">
									<label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
										Email Address *
									</label>
									<input
										type="email"
										required
										value={form.email}
										onChange={(e) => setForm({ ...form, email: e.target.value })}
										placeholder="e.g. liam@example.com"
										className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-primary transition-colors"
									/>
								</div>
							</div>

							<div className="grid sm:grid-cols-2 gap-4">
								<div className="space-y-1.5">
									<label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
										Occasion Type
									</label>
									<select
										value={form.occasion}
										onChange={(e) => setForm({ ...form, occasion: e.target.value })}
										className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-primary transition-colors cursor-pointer"
									>
										<option value="wedding">💍 Wedding Celebration</option>
										<option value="birthday">🎂 Milestone Birthday</option>
										<option value="business">💼 Corporate Summit / Dinner</option>
										<option value="party">🌴 Studio or Office Party</option>
										<option value="other">✨ Other Special Gathering</option>
									</select>
								</div>

								<div className="space-y-1.5">
									<label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
										Estimated Event Date
									</label>
									<input
										type="text"
										value={form.date}
										onChange={(e) => setForm({ ...form, date: e.target.value })}
										placeholder="e.g. October 2026"
										className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-primary transition-colors"
									/>
								</div>
							</div>

							<div className="space-y-1.5">
								<label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold flex items-center justify-between">
									<span>Event Notes or Vision</span>
									<span className="text-[10px] text-muted-foreground font-normal">Optional</span>
								</label>
								<textarea
									rows={4}
									value={form.message}
									onChange={(e) => setForm({ ...form, message: e.target.value })}
									placeholder="Tell us any specific ideas, number of guests, or favorite aesthetic..."
									className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-primary transition-colors resize-none"
								/>
							</div>

							<button
								type="submit"
								className="w-full py-4 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
							>
								<Send className="w-4 h-4" />
								<span>Submit Quote Request</span>
							</button>
						</form>
					) : (
						<div className="py-12 text-center space-y-4">
							<div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
								<CheckCircle2 className="w-7 h-7" />
							</div>
							<h3 className="text-2xl font-serif font-bold text-foreground">
								Quote Request Received, {form.name}!
							</h3>
							<p className="text-sm text-muted-foreground max-w-md mx-auto font-light leading-relaxed">
								Our design team has received your inquiry for your {form.occasion} invite page. We will reach out to <strong className="text-foreground">{form.email}</strong> shortly with a custom concept and quote!
							</p>
							<button
								onClick={() => setSubmitted(false)}
								className="text-xs font-mono text-primary hover:underline pt-2"
							>
								Send another inquiry
							</button>
						</div>
					)}
				</div>

				{/* Right: WhatsApp Card */}
				<div className="lg:col-span-5 rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-6 sm:p-8 space-y-6 text-left shadow-lg">
					<div className="space-y-2">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider">
							<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
							<span>Instant Replies on WhatsApp</span>
						</div>
						<h3 className="text-2xl font-serif font-bold text-foreground">
							Need a fast response or rush turnaround?
						</h3>
						<p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
							Chat directly with our design team on WhatsApp. Share your date, guest count, or reference links for instant pricing, live walkthroughs, and same-day turnaround.
						</p>
					</div>

					<div className="p-4 rounded-2xl bg-card border border-border space-y-2">
						<div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground">
							<Clock className="w-3.5 h-3.5 text-emerald-500" />
							<span>Average Response Time: &lt; 15 Minutes</span>
						</div>
						<p className="text-[11px] text-muted-foreground font-light">
							Available Monday through Saturday for custom design inquiries &amp; rush delivery.
						</p>
					</div>

					<a
						href="https://wa.me/?text=Hi%20Inviteside!%20I'm%20planning%20an%20event%20and%20would%20like%20a%20custom%20invite%20website%20quote."
						target="_blank"
						rel="noopener noreferrer"
						className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
					>
						<MessageCircle className="w-4 h-4" />
						<span>Chat on WhatsApp Now</span>
					</a>
				</div>
			</div>
		</section>
	);
}

/* =========================================================================
   7. FOOTER
   ========================================================================= */
function Footer() {
	return (
		<footer className="py-16 px-6 bg-muted/40 border-t border-border text-center sm:text-left">
			<div className="max-w-6xl mx-auto space-y-10">
				<div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-border pb-10">
					<div className="space-y-1">
						<Link href="/" className="text-2xl font-serif italic tracking-tight text-foreground">
							Inviteside.
						</Link>
						<p className="text-xs text-muted-foreground font-light">
							Unboring invite pages and bespoke event websites for every occasion.
						</p>
					</div>

					{/* Demo Links (Clean secondary footer links) */}
					<div className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono">
						<Link href="/wedding" className="text-muted-foreground hover:text-foreground transition-colors">
							Wedding Demo
						</Link>
						<Link href="/birthday" className="text-muted-foreground hover:text-foreground transition-colors">
							Birthday Demo
						</Link>
						<Link href="/business" className="text-muted-foreground hover:text-foreground transition-colors">
							Business Demo
						</Link>
						<Link href="/party" className="text-muted-foreground hover:text-foreground transition-colors">
							Office Party Demo
						</Link>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-light">
					<p>&copy; {new Date().getFullYear()} Inviteside Studio. All rights reserved.</p>
					<p>
						A product of{" "}
						<a
							href="https://kernel70.com"
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium text-foreground hover:underline"
						>
							Kernel70 Software Solutions
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
