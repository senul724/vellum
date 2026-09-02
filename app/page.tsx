"use client";

import { useState } from "react";
import Link from "next/link";
import { useCurrency, type Currency } from "@/hooks/use-currency";
import { InvitesideDifference } from "@/components/landing/InvitesideDifference";
import { HeroFloatingShowcase } from "@/components/landing/HeroFloatingShowcase";
import pricingConfig from "@/data/pricing.json";
import {
	Sparkles,
	ArrowRight,
	CheckCircle2,
	Lock,
	ExternalLink,
	Send,
	MessageCircle,
	Check,
	Clock,
	Mail,
} from "lucide-react";

export default function IndexPage() {
	const { currency, isDetectedLK } = useCurrency();
	const isSriLanka = isDetectedLK || currency === "LKR";

	return (
		<main className="bg-background font-sans text-foreground overflow-x-hidden">
			<Navigation />
			<Hero currency={currency} isSriLanka={isSriLanka} />
			<InvitesideDifference />
			<OccasionsShowcase isSriLanka={isSriLanka} />
			<QuoteContactSection currency={currency} />
			<Footer isSriLanka={isSriLanka} />
		</main>
	);
}

/* =========================================================================
   1. NAVIGATION
   ========================================================================= */
function Navigation() {
	return (
		<nav className="fixed top-0 w-full z-50 px-6 sm:px-10 md:px-12 py-4 flex justify-between items-center bg-background/85 backdrop-blur-xl border-b border-border/40 shadow-xs">
			<Link
				href="/"
				className="text-xl sm:text-2xl font-serif italic tracking-tight text-foreground flex items-center gap-2"
			>
				<span>Inviteside.</span>
			</Link>

			<div className="hidden md:flex gap-8 lg:gap-10 text-xs uppercase tracking-widest font-medium text-muted-foreground">
				<a href="#services" className="hover:text-foreground transition-colors">
					Services
				</a>
				<a
					href="#occasions"
					className="hover:text-foreground transition-colors"
				>
					Occasions &amp; Demos
				</a>
				<Link
					href="/pricing"
					className="hover:text-foreground transition-colors"
				>
					Pricing
				</Link>
				<a href="#contact" className="hover:text-foreground transition-colors">
					Create Yours
				</a>
			</div>

			<div className="flex items-center gap-3">
				<a
					href="/pricing"
					className="px-5 sm:px-6 py-2 bg-primary text-primary-foreground rounded-full text-xs uppercase tracking-widest font-semibold hover:opacity-90 transition-all cursor-pointer shadow-xs"
				>
					Create Yours
				</a>
			</div>
		</nav>
	);
}

/* =========================================================================
   2. HERO SECTION (Clean, Impactful, No Tabs, No Repetitive Demo Buttons)
   ========================================================================= */
function Hero({
	currency,
	isSriLanka,
}: {
	currency: Currency;
	isSriLanka: boolean;
}) {
	const quoteLabel =
		currency === "LKR"
			? `Get a Quote (From ${pricingConfig.basePackage.discountedPriceLKR.toLocaleString()} LKR)`
			: `Get a Quote (From $${pricingConfig.basePackage.discountedPriceUSD})`;

	return (
		<section className="relative pt-32 sm:pt-38 pb-20 px-6 max-w-6xl mx-auto text-center overflow-hidden">
			{/* Ambient Lighting */}
			<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-400/10 via-rose-400/10 to-emerald-400/10 rounded-full blur-[140px] pointer-events-none -z-10" />

			<div className="space-y-6 max-w-4xl mx-auto">
				{/* Headline */}
				<div className="space-y-2">
					<h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight leading-[1.08] text-foreground">
						Unboring invite pages <br />
						<span className="italic font-light text-muted-foreground">
							for every occasion.
						</span>
					</h1>
					<p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed pt-2">
						Ditch generic paper cards, messy PDFs, and chaotic group chats. We
						design custom event websites with unboxing animations, background
						audio, instant RSVP tracking, and mobile polish.
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

					<Link
						href="/pricing"
						className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-border bg-card hover:bg-muted/60 text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all shadow-xs hover:scale-105 active:scale-95 flex items-center gap-2"
					>
						<span>{quoteLabel}</span>
					</Link>
				</div>
			</div>

			{/* Floating UI Showcase */}
			<HeroFloatingShowcase isSriLanka={isSriLanka} />
		</section>
	);
}

/* =========================================================================
   3. THE INVITESIDE DIFFERENCE (Exported as InvitesideDifference component)
   ========================================================================= */

/* =========================================================================
   4. OCCASIONS SHOWCASE (Luxury Editorial Portfolio Showcase)
   ========================================================================= */
function OccasionsShowcase({ isSriLanka }: { isSriLanka: boolean }) {
	const occasions = [
		{
			id: "wedding",
			num: "01",
			category: "Weddings & Receptions",
			title: isSriLanka
				? "Senuri & Kaveen's Poruwa Ceremony"
				: "Amelia & Liam's Tuscan Celebration",
			tagline: isSriLanka
				? "Traditional royal Poruwa ceremony with sacred rituals & wax seal unboxing."
				: "Romantic editorial storytelling with digital wax seal unboxing.",
			desc: isSriLanka
				? "Designed for couples celebrating Sri Lankan heritage with modern luxury. Guests break an authentic digital wax seal, listen to traditional Jayamangala flute scores, view Galle Face Hotel itinerary, and RSVP with Ceylon banquet preferences."
				: "Designed for couples who refuse generic wedding templates. Guests break an authentic digital wax seal, listen to acoustic Italian strings, browse an 8-photo travel album, view hotel accommodations, and select their dinner entrée with allergy notes.",
			image: isSriLanka
				? "/images/wedding-preview-sl.png"
				: "/images/wedding-preview-intl.jpg",
			url: isSriLanka
				? "inviteside.com/demo/weddingsl"
				: "inviteside.com/demo/wedding",
			route: isSriLanka ? "/demo/weddingsl" : "/demo/wedding",
			accentColor:
				"border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/10",
			features: isSriLanka
				? [
						"3D Wax Seal Unboxing Ritual",
						"Sacred Poruwa Jayamangala Audio",
						"Galle Face Hotel Ballroom Guide",
						"Attire Etiquette & Auspicious Nakath Times",
						"Ceylon Banquet RSVP & Guest Tracking",
					]
				: [
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
			tagline:
				"Midnight sunset aesthetic with interactive 3D metallic balloons.",
			desc: "A high-fashion rooftop birthday invitation built for modern celebrants. Features floating 3D chrome balloons that guests can tap to pop with confetti, live party countdown timer, signature cocktail selector, and a digital guest wishes wall.",
			image: "/images/demo-birthday-preview.png",
			url: "inviteside.com/demo/birthday",
			route: "/demo/birthday",
			accentColor:
				"border-rose-500/30 text-rose-600 dark:text-rose-400 bg-rose-500/10",
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
			tagline:
				"Tactile skeuomorphic presentation folio with brushed brass hardware.",
			desc: "Engineered for confidential assemblies, venture summits, and private executive dinners. Guests click a brushed brass clasp to unclasp an executive leatherette dossier, revealing their encrypted digital pass, Chatham House protocol, and black-car valet instructions.",
			image: "/images/demo-business-preview.png",
			url: "inviteside.com/demo/business",
			route: "/demo/business",
			accentColor:
				"border-slate-500/30 text-slate-700 dark:text-slate-300 bg-slate-500/10",
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
			tagline:
				"High-energy company celebration with interactive Slack status switcher.",
			desc: "Cancel your Friday standup. Give your coworkers an unboring office party invitation with an internal memo unbox, interactive Slack status changer, open bar drink wristbands, Golden Mug Superlative Awards, and DJ song requests.",
			image: "/images/demo-party-preview.png",
			url: "inviteside.com/demo/party",
			route: "/demo/party",
			accentColor:
				"border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10",
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
		<section
			id="occasions"
			className="py-24 px-6 max-w-6xl mx-auto border-t border-border/40"
		>
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
					Four distinct aesthetics. Four completely tailored experiences.
					Explore the live specimen demos below to test the animations, audio,
					and RSVP mechanics.
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
											<div
												key={i}
												className="flex items-center gap-2 text-xs text-muted-foreground"
											>
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
   6. GET A QUOTE (Email Form + Direct WhatsApp Link)
   ========================================================================= */
function QuoteContactSection({ currency }: { currency: Currency }) {
	const [form, setForm] = useState({
		name: "",
		email: "",
		occasion: "wedding",
		date: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const getMailtoUrl = () => {
		const subject = `Custom Invite Quote Request - ${form.occasion.toUpperCase()} (${form.name || "Inquiry"})`;
		const body = `Hi Inviteside Team,\n\nI would like to get a quote for a custom invite page.\n\n• Name: ${form.name}\n• Email: ${form.email}\n• Occasion: ${form.occasion}\n• Estimated Date: ${form.date || "Not specified"}\n• Notes / Vision: ${form.message || "None"}\n\nLooking forward to hearing from you!`;
		return `mailto:info@inviteside.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	};

	const handleQuoteSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!form.name || !form.email) return;
		window.location.href = getMailtoUrl();
		setSubmitted(true);
	};

	const whatsappText =
		currency === "LKR"
			? `Hi Inviteside! I'm planning an event in Sri Lanka and would like a custom invite website quote (first 100 hosts offer, starting from ${pricingConfig.basePackage.discountedPriceLKR.toLocaleString()} LKR).`
			: `Hi Inviteside! I'm planning an event and would like a custom invite website quote (first 100 hosts offer, starting from $${pricingConfig.basePackage.discountedPriceUSD}).`;

	return (
		<section
			id="contact"
			className="py-20 px-6 max-w-6xl mx-auto border-t border-border/40"
		>
			<div className="text-center space-y-2 mb-14">
				<span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary block">
					Start Your Project
				</span>
				<h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-foreground">
					Get Your Custom Invite Quote
				</h2>
				<p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto font-light leading-relaxed pt-1">
					Tell us about your event. We&apos;ll send over a custom concept and
					flat-rate quote within a few hours.
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
										onChange={(e) =>
											setForm({ ...form, email: e.target.value })
										}
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
										onChange={(e) =>
											setForm({ ...form, occasion: e.target.value })
										}
										className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-primary transition-colors cursor-pointer"
									>
										<option value="wedding">💍 Wedding Celebration</option>
										<option value="birthday">🎂 Milestone Birthday</option>
										<option value="business">
											💼 Corporate Summit / Dinner
										</option>
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
									<span className="text-[10px] text-muted-foreground font-normal">
										Optional
									</span>
								</label>
								<textarea
									rows={4}
									value={form.message}
									onChange={(e) =>
										setForm({ ...form, message: e.target.value })
									}
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

							<p className="text-xs text-muted-foreground text-center pt-1 font-mono">
								Or email us directly at{" "}
								<a
									href="mailto:info@inviteside.com"
									className="text-primary hover:underline font-semibold"
								>
									info@inviteside.com
								</a>
							</p>
						</form>
					) : (
						<div className="py-12 text-center space-y-4">
							<div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
								<CheckCircle2 className="w-7 h-7" />
							</div>
							<h3 className="text-2xl font-serif font-bold text-foreground">
								Quote Request Prepared, {form.name}!
							</h3>
							<p className="text-sm text-muted-foreground max-w-md mx-auto font-light leading-relaxed">
								Your email client has been prompted to send your inquiry to{" "}
								<a
									href={getMailtoUrl()}
									className="font-semibold text-primary underline"
								>
									info@inviteside.com
								</a>
								. If it didn&apos;t open automatically, click the button below:
							</p>
							<div className="pt-2 flex flex-wrap items-center justify-center gap-3">
								<a
									href={getMailtoUrl()}
									className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-all inline-flex items-center gap-2"
								>
									<Mail className="w-3.5 h-3.5" />
									<span>Send via Email App</span>
								</a>
								<button
									onClick={() => setSubmitted(false)}
									className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
								>
									Edit inquiry
								</button>
							</div>
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
							Chat directly with our team. Share your date, guest count, or
							reference links for instant pricing, live walkthroughs, and
							same-day turnaround.
						</p>
					</div>

					<div className="p-4 rounded-2xl bg-card border border-border space-y-2">
						<div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground">
							<Clock className="w-3.5 h-3.5 text-emerald-500" />
							<span>Average Response Time: &lt; 15 Minutes</span>
						</div>
						<p className="text-[11px] text-muted-foreground font-light">
							Available Monday through Saturday for custom design inquiries
							&amp; rush delivery.
						</p>
					</div>

					<a
						href={`https://wa.me/94773035132?text=${encodeURIComponent(whatsappText)}`}
						target="_blank"
						rel="noopener noreferrer"
						className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
					>
						<MessageCircle className="w-4 h-4" />
						<span>Chat on WhatsApp</span>
					</a>
				</div>
			</div>
		</section>
	);
}

/* =========================================================================
   7. FOOTER
   ========================================================================= */
function Footer({ isSriLanka }: { isSriLanka: boolean }) {
	return (
		<footer className="border-t border-border/40 py-12 px-6 bg-muted/20">
			<div className="max-w-6xl mx-auto space-y-10">
				<div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-border pb-10">
					<div className="space-y-1 text-center sm:text-left">
						<Link
							href="/"
							className="text-2xl font-serif italic tracking-tight text-foreground"
						>
							Inviteside.
						</Link>
						<p className="text-xs text-muted-foreground font-light">
							Unboring invite pages and bespoke event websites for every
							occasion.
						</p>
						<p className="text-xs text-muted-foreground font-mono pt-1">
							Inquiries:{" "}
							<a
								href="mailto:info@inviteside.com"
								className="text-foreground hover:text-primary transition-colors underline underline-offset-2"
							>
								info@inviteside.com
							</a>
						</p>
					</div>

					{/* Demo Links (Clean secondary footer links) */}
					<div className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono">
						<Link
							href="/pricing"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							Pricing
						</Link>
						<Link
							href={isSriLanka ? "/demo/weddingsl" : "/demo/wedding"}
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							Wedding Demo
						</Link>
						<Link
							href="/demo/birthday"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							Birthday Demo
						</Link>
						<Link
							href="/demo/business"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							Business Demo
						</Link>
						<Link
							href="/demo/party"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							Office Party Demo
						</Link>
						<a
							href="mailto:info@inviteside.com"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							info@inviteside.com
						</a>
						<a
							href="https://wa.me/94773035132"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							WhatsApp (+94 773035132)
						</a>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-light">
					<p>
						&copy; {new Date().getFullYear()} Inviteside Studio. All rights
						reserved.
					</p>
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
