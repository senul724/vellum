"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
	PenLine,
	Users,
	BarChart3,
	Smartphone,
	MapPin,
	Bell,
	Shield,
	Clock,
	Palette,
	Mail,
	Send,
	Sparkles,
	Gift,
	Heart,
	ArrowRight,
	Check,
	CheckCircle2,
	Layers,
	Calendar,
	MessageSquare,
} from "lucide-react";

export default function IndexPage() {
	return (
		<main className="bg-background font-sans text-foreground overflow-x-hidden">
			<Navigation />
			<Hero />
			<HowItWorks />
			<Features />
			<FeaturesGrid />
			<Gallery />
			<Footer />
		</main>
	);
}

function Navigation() {
	return (
		<nav className="fixed top-0 w-full z-50 px-6 md:px-8 py-5 md:py-6 flex justify-between items-center nav-blend">
			<Link href="/" className="text-2xl font-serif italic tracking-tight">Inviteside.</Link>
			<div className="hidden md:flex gap-10 lg:gap-12 text-xs uppercase tracking-widest font-medium">
				<Link href="/bday" className="hover:text-accent transition-colors text-amber-300 font-bold">
					Birthday Studio ✦
				</Link>
				<a href="#gallery" className="hover:text-accent transition-colors">
					The Gallery
				</a>
				<a href="#how-it-works" className="hover:text-accent transition-colors">
					How It Works
				</a>
				<a href="#features" className="hover:text-accent transition-colors">
					Features
				</a>
			</div>
			<Link
				href="/bday"
				className="px-5 md:px-6 py-2 border border-white/30 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all cursor-pointer inline-block"
			>
				Create Now
			</Link>
		</nav>
	);
}

function Hero() {
	const { scrollY } = useScroll();

	// Smooth Framer Motion parallax transformations
	const bgBlob1Y = useTransform(scrollY, [0, 800], [0, 90]);
	const bgBlob2Y = useTransform(scrollY, [0, 800], [0, 130]);

	const leftCardY = useTransform(scrollY, [0, 800], [48, -10]);
	const centerCardY = useTransform(scrollY, [0, 800], [16, -65]);
	const rightCardY = useTransform(scrollY, [0, 800], [80, 25]);

	return (
		<section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20 md:pt-0">
			{/* Decorative parallax background elements */}
			<motion.div
				className="absolute top-20 -left-20 w-80 md:w-96 h-80 md:h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"
				style={{ y: bgBlob1Y }}
			/>
			<motion.div
				className="absolute bottom-20 -right-20 w-[22rem] md:w-[30rem] h-[22rem] md:h-[30rem] bg-foreground/5 rounded-full blur-3xl pointer-events-none"
				style={{ y: bgBlob2Y }}
			/>

			<motion.div
				className="relative z-10 space-y-6 md:space-y-8 max-w-4xl pt-16 md:pt-0"
				initial={{ opacity: 0, y: 25 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				<h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] tracking-tight">
					Digital elegance <br className="hidden sm:block" />
					<span className="italic">for your most</span>{" "}
					<br className="hidden sm:block" />
					significant moments.
				</h1>
				<p className="text-base md:text-lg lg:text-xl text-muted-foreground font-light max-w-xl mx-auto leading-relaxed px-2">
					Beyond simple links. Inviteside provides high-fidelity digital stationery
					with integrated RSVP tracking for the modern host.
				</p>
				<div className="pt-4 md:pt-8">
					<Link
						href="/bday"
						className="inline-block px-8 md:px-10 py-4 md:py-5 bg-primary text-primary-foreground rounded-full text-sm uppercase tracking-widest font-semibold hover:scale-105 transition-transform cursor-pointer shadow-lg"
					>
						Start Your Design
					</Link>
				</div>
			</motion.div>

			{/* Floating invitation cards with parallax depth */}
			<div className="absolute -bottom-16 md:-bottom-24 left-1/2 -translate-x-1/2 flex gap-4 md:gap-8 pointer-events-none px-4">
				<motion.div
					className="w-40 md:w-64 h-52 md:h-80 bg-card shadow-2xl rounded-sm rotate-[-6deg] border border-border p-2 md:p-4 hidden sm:block"
					style={{ y: leftCardY, rotate: -6 }}
					initial={{ opacity: 0, y: 80 }}
					animate={{ opacity: 1, y: 48 }}
					transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
				>
					<img
						src="/invite-botanical.jpg"
						alt="Botanical wedding invitation template"
						width={600}
						height={900}
						loading="lazy"
						className="w-full h-full object-cover rounded-sm opacity-90"
					/>
				</motion.div>
				<motion.div
					className="w-48 md:w-72 h-64 md:h-96 bg-card shadow-2xl rounded-sm border border-border p-2 md:p-4"
					style={{ y: centerCardY }}
					initial={{ opacity: 0, y: 60 }}
					animate={{ opacity: 1, y: 16 }}
					transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
				>
					<img
						src="/invite-noir.jpg"
						alt="Black and gold gala invitation template"
						width={700}
						height={980}
						loading="eager"
						className="w-full h-full object-cover rounded-sm"
					/>
				</motion.div>
				<motion.div
					className="w-40 md:w-64 h-52 md:h-80 bg-card shadow-2xl rounded-sm rotate-[6deg] border border-border p-2 md:p-4 hidden sm:block"
					style={{ y: rightCardY, rotate: 6 }}
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 80 }}
					transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
				>
					<img
						src="/invite-ether.jpg"
						alt="Pastel watercolor birthday invitation template"
						width={600}
						height={900}
						loading="lazy"
						className="w-full h-full object-cover rounded-sm opacity-90"
					/>
				</motion.div>
			</div>
		</section>
	);
}

function HowItWorks() {
	const [activeService, setActiveService] = useState(0);

	const services = [
		{
			id: 0,
			icon: Send,
			badge: "Simple & Instant",
			title: "Normal Event Invites",
			description:
				"Effortlessly create and share elegant digital invites for dinners, housewarmings, cocktail evenings, or casual get-togethers. Share instantly via WhatsApp, SMS, or a private web link with map & calendar sync.",
			ctaText: "Create Normal Invite",
			highlights: [
				"Instant 1-click sharing via WhatsApp & SMS",
				"Interactive Google Maps & venue directions",
				"Add-to-calendar sync for Apple & Google",
			],
		},
		{
			id: 1,
			icon: Users,
			badge: "Headcount & Logistics",
			title: "Invites with RSVP List",
			description:
				"Manage weddings, galas, and milestones with automated RSVP collection, dietary preferences, entrée choices, plus-one controls, and real-time response counters.",
			ctaText: "Build RSVP Suite",
			highlights: [
				"Real-time confirmed attendee counter",
				"Entrée selection & allergy tracking",
				"One-click guest messaging & export",
			],
		},
		{
			id: 2,
			icon: Sparkles,
			badge: "Interactive & Motion",
			title: "Custom Animated Invites",
			description:
				"Immerse your guests with virtual gold wax seal unboxings, smooth opening card motions, shimmering foil textures, and bespoke background soundscapes.",
			ctaText: "Design Animated Invite",
			highlights: [
				"Virtual wax seal unsealing animation",
				"Shimmering gold & silver foil effects",
				"Ambient background music & sound",
			],
		},
		{
			id: 3,
			icon: Gift,
			badge: "Celebratory Keepsake",
			title: "Birthday & Custom Wishes",
			description:
				"Design and send heartfelt birthday cards, anniversary greetings, festive holiday notes, or custom celebratory wishes with personalized photo suites and keepsake signatures.",
			ctaText: "Send Custom Wish",
			highlights: [
				"Personalized photos & message suite",
				"Milestone birthday & holiday themes",
				"Digital keepsake signature book",
			],
		},
		{
			id: 4,
			icon: Calendar,
			badge: "Multi-Event Routing",
			title: "Coordinate Secondary Events",
			description:
				"Use guest tags to invite guests to private events like rehearsal dinners, post-wedding parties, and morning-after brunches. Control who sees what event and send emails to appropriate guest segments.",
			ctaText: "Organize Sub-Events",
			highlights: [
				"Private sub-events with guest tags",
				"Segmented invitations by attendee type",
				"Unified master headcount dashboard",
			],
		},
		{
			id: 5,
			icon: MessageSquare,
			badge: "Smart Messaging",
			title: "Automated Guest Communication",
			description:
				"Schedule friendly automated SMS and email reminders to non-responders, send weather updates, and broadcast last-minute announcements with a single click.",
			ctaText: "Setup Smart Messaging",
			highlights: [
				"Automated reminders before deadline",
				"98.4% open rate via SMS & WhatsApp",
				"Instant mass updates to all guests",
			],
		},
	];

	return (
		<section id="how-it-works" className="py-24 md:py-32 px-6 md:px-8 bg-background relative z-10">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs uppercase tracking-widest text-accent font-semibold mb-4">
						<Sparkles className="w-3.5 h-3.5" />
						Ways To Use Card Studio
					</div>
					<h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
						How you can use our services.
					</h2>
					<p className="text-muted-foreground font-light leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
						Whether you need a quick event invite, a complete RSVP suite, an animated wax seal reveal, or personalized celebratory wishes — choose the service that fits your occasion.
					</p>
				</div>

				{/* Split-Screen Interactive Services Explorer */}
				<div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
					{/* Left Column: Interactive Services List */}
					<div className="lg:col-span-5 space-y-3 text-left">
						<div className="divide-y divide-border/80 border-y border-border/80 rounded-2xl bg-card border px-4 shadow-sm">
							{services.map((service, idx) => {
								const isActive = activeService === idx;
								const Icon = service.icon;
								return (
									<div key={service.title} className="py-4 transition-all">
										<button
											onClick={() => setActiveService(idx)}
											className="w-full flex items-center justify-between text-left group cursor-pointer"
										>
											<div className="flex items-center gap-3.5">
												<div
													className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
														isActive
															? "bg-accent text-primary shadow-md"
															: "bg-primary/5 text-muted-foreground group-hover:text-foreground group-hover:bg-primary/10"
													}`}
												>
													<Icon className="w-4 h-4" strokeWidth={isActive ? 2 : 1.75} />
												</div>
												<div>
													<div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
														{service.badge}
													</div>
													<span
														className={`text-base md:text-lg font-serif transition-colors ${
															isActive
																? "text-foreground font-semibold"
																: "text-foreground/75 group-hover:text-foreground"
														}`}
													>
														{service.title}
													</span>
												</div>
											</div>
										</button>

										{/* Expanded Description & CTA */}
										{isActive && (
											<motion.div
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: "auto" }}
												exit={{ opacity: 0, height: 0 }}
												transition={{ duration: 0.3 }}
												className="pt-3 pl-12.5 pr-2 space-y-3"
											>
												<p className="text-xs md:text-sm text-muted-foreground font-light leading-relaxed">
													{service.description}
												</p>

												<div className="space-y-1.5 pt-1">
													{service.highlights.map((item) => (
														<div
															key={item}
															className="flex items-center gap-2 text-xs text-foreground/85 font-light"
														>
															<Check className="w-3.5 h-3.5 text-accent shrink-0" />
															<span>{item}</span>
														</div>
													))}
												</div>

												<div className="pt-2">
													<button className="px-5 py-2 rounded-xl bg-primary text-primary-foreground text-xs uppercase tracking-wider font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 cursor-pointer shadow-sm">
														<span>{service.ctaText}</span>
														<ArrowRight className="w-3.5 h-3.5" />
													</button>
												</div>
											</motion.div>
										)}
									</div>
								);
							})}
						</div>
					</div>

					{/* Right Column: Dynamic Mockup Container */}
					<div className="lg:col-span-7 sticky top-28">
						<div className="relative p-3 md:p-6 rounded-3xl bg-accent/5 border border-border/80 shadow-2xl backdrop-blur-md">
							{/* Mockup Frame */}
							<div className="rounded-2xl bg-card text-foreground border border-border shadow-xl overflow-hidden min-h-[480px] flex flex-col justify-between text-left">
								{/* Mockup Top Header */}
								<div className="px-5 py-3.5 border-b border-border/70 flex items-center justify-between bg-muted/40 text-xs">
									<div className="flex items-center gap-3">
										<div className="flex gap-1.5">
											<div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
											<div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
											<div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
										</div>
										<span className="text-muted-foreground font-mono text-[11px] hidden sm:inline-block">
											cardstudio.com/services/{services[activeService].title.toLowerCase().replace(/\s+/g, "-")}
										</span>
									</div>
									<span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/20">
										{services[activeService].badge}
									</span>
								</div>

								{/* Dynamic Content Views */}
								<div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
									{activeService === 0 && (
										/* Normal Event Invites Mockup */
										<motion.div
											key="normal-mock"
											initial={{ opacity: 0, scale: 0.98 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.3 }}
											className="grid sm:grid-cols-12 gap-5 items-center"
										>
											<div className="sm:col-span-5 space-y-3.5 text-xs text-left">
												<div className="text-[10px] uppercase tracking-wider font-semibold text-accent">
													Instant Sharing Link
												</div>
												<h3 className="font-serif text-lg font-semibold text-foreground leading-snug">
													St. Moritz Editorial Dinner
												</h3>
												<p className="text-muted-foreground leading-relaxed text-xs">
													Send directly through WhatsApp or SMS. Guests see a clean invite with date, venue directions, and calendar button.
												</p>
												<div className="space-y-2 pt-2">
													<div className="p-2.5 rounded-lg bg-muted/60 border border-border flex items-center justify-between text-xs">
														<span className="font-medium text-foreground">WhatsApp Delivery</span>
														<span className="text-emerald-600 font-semibold">Ready</span>
													</div>
													<div className="p-2.5 rounded-lg bg-muted/60 border border-border flex items-center justify-between text-xs">
														<span className="font-medium text-foreground">Apple / Google Calendar</span>
														<span className="text-accent font-semibold">Synced</span>
													</div>
												</div>
											</div>
											<div className="sm:col-span-7 relative aspect-[4/5] rounded-xl overflow-hidden bg-muted shadow-md">
												<img
													src="/invite-swiss.jpg"
													alt="Normal invite template"
													className="w-full h-full object-cover"
												/>
											</div>
										</motion.div>
									)}

									{activeService === 1 && (
										/* Invites with RSVP List Mockup */
										<motion.div
											key="rsvp-mock"
											initial={{ opacity: 0, scale: 0.98 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.3 }}
											className="space-y-5"
										>
											<div className="flex justify-between items-center pb-3 border-b border-border">
												<div>
													<div className="text-xs text-muted-foreground uppercase tracking-wider">
														Live Headcount &amp; RSVP Suite
													</div>
													<div className="text-xl font-serif font-semibold">
														The Aurelia Luxe Wedding
													</div>
												</div>
												<span className="text-xs text-emerald-600 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full">
													● Live Syncing
												</span>
											</div>

											<div className="grid grid-cols-2 gap-3">
												<div className="p-3.5 rounded-xl border-2 border-accent bg-accent/10 text-center">
													<div className="text-xs font-semibold text-foreground">Joyfully Accept</div>
													<div className="text-[10px] text-accent font-semibold">146 Confirmed</div>
												</div>
												<div className="p-3.5 rounded-xl border border-border bg-background text-center opacity-60">
													<div className="text-xs font-medium">Regretfully Decline</div>
													<div className="text-[10px] text-muted-foreground">18 Declined</div>
												</div>
											</div>

											<div className="p-4 rounded-xl bg-muted/40 border border-border space-y-2.5">
												<div className="text-xs font-semibold text-foreground flex justify-between">
													<span>Catering Breakdown (Kitchen Ready)</span>
													<span className="text-[10px] text-accent">146 Entrées</span>
												</div>
												<div className="text-xs text-muted-foreground flex justify-between">
													<span>76x Filet Mignon</span>
													<span className="font-semibold text-foreground">52%</span>
												</div>
												<div className="text-xs text-muted-foreground flex justify-between">
													<span>50x Chilean Sea Bass</span>
													<span className="font-semibold text-foreground">34%</span>
												</div>
												<div className="text-xs text-muted-foreground flex justify-between">
													<span>20x Wild Mushroom Risotto</span>
													<span className="text-emerald-600 font-semibold">Gluten Free / Vegan</span>
												</div>
											</div>
										</motion.div>
									)}

									{activeService === 2 && (
										/* Custom Animated Invites Mockup */
										<motion.div
											key="motion-mock"
											initial={{ opacity: 0, scale: 0.98 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.3 }}
											className="grid sm:grid-cols-12 gap-5 items-center"
										>
											<div className="sm:col-span-7 relative aspect-[4/5] rounded-xl overflow-hidden bg-muted shadow-md">
												<img
													src="/invite-animated.jpg"
													alt="Animated Envelope with Gold Wax Seal"
													className="w-full h-full object-cover"
												/>
											</div>
											<div className="sm:col-span-5 space-y-3.5 text-xs text-left">
												<div className="text-[10px] uppercase tracking-wider text-accent font-semibold">
													Dynamic Motion Experience
												</div>
												<h3 className="font-serif text-lg font-semibold text-foreground leading-snug">
													Virtual Wax Seal Unsealing
												</h3>
												<p className="text-muted-foreground leading-relaxed text-xs">
													Guests tap the golden monogram wax seal to trigger an opening envelope animation with gentle soundscapes and card reveal.
												</p>
												<div className="space-y-1.5 text-[11px] text-muted-foreground pt-1">
													<div className="flex items-center gap-1.5 text-foreground font-medium">
														<Check className="w-3.5 h-3.5 text-accent" />
														<span>Bespoke audio music track</span>
													</div>
													<div className="flex items-center gap-1.5 text-foreground font-medium">
														<Check className="w-3.5 h-3.5 text-accent" />
														<span>Metallic foil shimmer reflection</span>
													</div>
												</div>
											</div>
										</motion.div>
									)}

									{activeService === 3 && (
										/* Birthday & Custom Wishes Mockup */
										<motion.div
											key="birthday-mock"
											initial={{ opacity: 0, scale: 0.98 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.3 }}
											className="grid sm:grid-cols-12 gap-5 items-center"
										>
											<div className="sm:col-span-5 space-y-3.5 text-xs text-left">
												<div className="text-[10px] uppercase tracking-wider text-accent font-semibold">
													Personalized Celebration
												</div>
												<h3 className="font-serif text-lg font-semibold text-foreground leading-snug">
													Birthday &amp; Greeting Cards
												</h3>
												<p className="text-muted-foreground leading-relaxed text-xs">
													Create personalized birthday cards, anniversary wishes, or celebration notes with bespoke messages and keepsake guestbook signatures.
												</p>
												<div className="p-3 rounded-lg bg-muted/60 border border-border space-y-1">
													<div className="text-[10px] uppercase tracking-wider font-semibold text-accent">
														Guestbook Entry
													</div>
													<div className="text-xs text-foreground italic">
														&ldquo;Wishing you the happiest birthday filled with joy and celebration!&rdquo;
													</div>
													<div className="text-[10px] text-muted-foreground text-right">— The Vance Family</div>
												</div>
											</div>
											<div className="sm:col-span-7 relative aspect-[4/5] rounded-xl overflow-hidden bg-muted shadow-md">
												<img
													src="/invite-birthday.jpg"
													alt="Birthday greeting keepsake card"
													className="w-full h-full object-cover"
												/>
											</div>
										</motion.div>
									)}

									{activeService === 4 && (
										/* Coordinate Secondary Events Mockup */
										<motion.div
											key="subevents-mock"
											initial={{ opacity: 0, scale: 0.98 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.3 }}
											className="space-y-4"
										>
											<div className="flex justify-between items-center pb-3 border-b border-border">
												<div>
													<div className="text-xs text-muted-foreground uppercase tracking-wider">
														Segmented Guest Access
													</div>
													<div className="text-lg font-serif font-semibold">
														Multi-Event Sub-RSVPs
													</div>
												</div>
												<span className="text-[11px] font-semibold text-accent bg-accent/15 px-2.5 py-1 rounded-full">
													Active Routing
												</span>
											</div>

											<div className="space-y-2.5">
												<div className="p-3.5 rounded-xl bg-accent/10 border border-accent/40 flex items-center justify-between">
													<div>
														<div className="text-[10px] uppercase tracking-wider font-semibold text-accent">
															Private Event #1
														</div>
														<div className="text-sm font-semibold text-foreground">
															Welcome Cocktail &amp; Rehearsal Dinner
														</div>
														<div className="text-xs text-muted-foreground">
															VIP Tag: &quot;Wedding Party &amp; Family&quot;
														</div>
													</div>
													<span className="text-xs font-semibold text-accent px-2.5 py-1 bg-background rounded-md border border-accent/30">
														32 Invited
													</span>
												</div>

												<div className="p-3.5 rounded-xl bg-background border border-border flex items-center justify-between">
													<div>
														<div className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
															Main Event
														</div>
														<div className="text-sm font-semibold text-foreground">
															Official Ceremony &amp; Gala Reception
														</div>
														<div className="text-xs text-muted-foreground">
															Tag: &quot;All Confirmed Guests&quot;
														</div>
													</div>
													<span className="text-xs font-semibold text-foreground px-2.5 py-1 bg-muted rounded-md">
														180 Invited
													</span>
												</div>

												<div className="p-3.5 rounded-xl bg-background border border-border flex items-center justify-between">
													<div>
														<div className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
															Private Event #2
														</div>
														<div className="text-sm font-semibold text-foreground">
															Sunday Farewell Prosecco Brunch
														</div>
														<div className="text-xs text-muted-foreground">
															Tag: &quot;Out-of-Town Travelers&quot;
														</div>
													</div>
													<span className="text-xs font-semibold text-foreground px-2.5 py-1 bg-muted rounded-md">
														85 Invited
													</span>
												</div>
											</div>
										</motion.div>
									)}

									{activeService === 5 && (
										/* Automated Guest Communication Mockup */
										<motion.div
											key="comm-mock"
											initial={{ opacity: 0, scale: 0.98 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.3 }}
											className="space-y-4"
										>
											<div className="flex justify-between items-center pb-3 border-b border-border">
												<div>
													<div className="text-xs text-muted-foreground uppercase tracking-wider">
														Automated Smart Nudges
													</div>
													<div className="text-lg font-serif font-semibold">
														Guest Broadcast Scheduler
													</div>
												</div>
												<div className="text-xs text-emerald-600 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full">
													98.4% Open Rate
												</div>
											</div>

											<div className="p-4 rounded-xl bg-muted/40 border border-border space-y-3">
												<div className="flex justify-between text-xs">
													<span className="font-semibold text-foreground">Trigger Condition</span>
													<span className="text-accent font-mono">3 Days Before RSVP Deadline</span>
												</div>
												<div className="p-3 rounded-lg bg-background border border-border text-xs text-muted-foreground leading-relaxed italic">
													&ldquo;Hi {`{Guest_Name}`}, Alexander &amp; Sophia are finalizing their catering count for Lake Como. Please click here to confirm your RSVP &amp; entrée!&rdquo;
												</div>
												<div className="flex justify-between items-center text-[11px] text-muted-foreground pt-1">
													<span>Channels: SMS + WhatsApp + Email</span>
													<span className="text-emerald-600 font-semibold">Automated Sync</span>
												</div>
											</div>
										</motion.div>
									)}
								</div>

								{/* Mockup Bottom Status Bar */}
								<div className="px-5 py-3 border-t border-border/60 bg-muted/20 flex justify-between items-center text-xs text-muted-foreground">
									<span>Card Studio Stationery Engine</span>
									<span className="text-accent font-semibold">Interactive Service View</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function Features() {
	return (
		<section
			id="features"
			className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-primary text-primary-foreground relative z-20"
		>
			<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
				<div className="space-y-10 md:space-y-12 text-left">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
						Beautifully organized, <br />
						thoughtfully tracked.
					</h2>

					<div className="space-y-10 md:space-y-12">
						<FeatureItem
							number="01"
							title="Smart Guest Management"
							description="Import contacts instantly and track open rates, dietary requirements, and plus-ones in real-time."
						/>
						<FeatureItem
							number="02"
							title="Interactive Maps & Links"
							description="Help your guests arrive in style with integrated Google Maps, hotel booking links, and gift registries."
						/>
						<FeatureItem
							number="03"
							title="Instant Notifications"
							description="Receive push notifications the moment your guests respond, or send mass updates with one click."
						/>
					</div>
				</div>

				<div className="relative">
					<div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl" />
					<div className="relative bg-primary-foreground/5 border border-primary-foreground/10 p-6 md:p-8 rounded-2xl backdrop-blur-sm text-left">
						<div className="flex justify-between items-end mb-8">
							<div>
								<div className="text-[10px] uppercase tracking-widest text-primary-foreground/40 mb-1">
									Live Dashboard
								</div>
								<div className="text-2xl font-serif">Summer Soirée</div>
							</div>
							<div className="text-3xl font-serif text-accent italic">84%</div>
						</div>

						<div className="space-y-4">
							<div className="h-2 w-full bg-primary-foreground/10 rounded-full overflow-hidden">
								<div className="h-full bg-accent w-[84%]" />
							</div>
							<div className="flex justify-between text-[10px] uppercase tracking-widest text-primary-foreground/60">
								<span>168 Confirmed</span>
								<span>200 Invited</span>
							</div>

							<div className="grid grid-cols-2 gap-4 mt-8">
								<div className="bg-primary-foreground/5 p-4 rounded-lg">
									<div className="text-xs text-primary-foreground/40 mb-1">
										Vegan
									</div>
									<div className="text-xl">12</div>
								</div>
								<div className="bg-primary-foreground/5 p-4 rounded-lg">
									<div className="text-xs text-primary-foreground/40 mb-1">
										Plus Ones
									</div>
									<div className="text-xl">45</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function FeatureItem({
	number,
	title,
	description,
}: {
	number: string;
	title: string;
	description: string;
}) {
	return (
		<div className="group text-left">
			<div className="text-accent text-sm font-semibold tracking-tighter mb-2">
				{number}
			</div>
			<h3 className="text-lg md:text-xl font-medium mb-3">{title}</h3>
			<p className="text-primary-foreground/60 font-light leading-relaxed max-w-md">
				{description}
			</p>
		</div>
	);
}

function FeaturesGrid() {
	const features = [
		{
			icon: Palette,
			title: "Curated Templates",
			description:
				"Editorial, botanical, minimalist, and gala-ready designs crafted by stationery artists.",
		},
		{
			icon: Smartphone,
			title: "Mobile-First Experience",
			description:
				"Invitations look stunning on every device, from phones to desktops, without extra work.",
		},
		{
			icon: MapPin,
			title: "Maps & Directions",
			description:
				"Embed locations, parking notes, hotel blocks, and rideshare links so guests arrive stress-free.",
		},
		{
			icon: Bell,
			title: "Smart Notifications",
			description:
				"Get notified the moment someone responds, sends a message, or updates their details.",
		},
		{
			icon: Shield,
			title: "Private & Secure",
			description:
				"Guest data is protected with secure authentication and private event links by default.",
		},
		{
			icon: Clock,
			title: "Schedule Reminders",
			description:
				"Send gentle nudges to guests who have not responded, automatically timed to your event.",
		},
	];

	return (
		<section className="py-24 md:py-32 px-6 md:px-8 bg-muted/30">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20 text-left">
					<div className="max-w-2xl">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
							Everything you need to host with confidence.
						</h2>
						<p className="text-muted-foreground font-light leading-relaxed">
							Powerful tools behind a beautifully simple interface — because the
							best hosting happens when nothing gets in the way.
						</p>
					</div>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="group p-6 md:p-8 bg-background rounded-2xl border border-border hover:border-accent/30 transition-colors"
						>
							<div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-accent mb-5">
								<feature.icon className="w-5 h-5" strokeWidth={1.5} />
							</div>
							<h3 className="text-xl font-medium mb-3">{feature.title}</h3>
							<p className="text-sm text-muted-foreground font-light leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function Gallery() {
	const designs = [
		{
			title: "The Aurelia",
			style: "Minimalist Luxury",
			image: "/invite-aurelia.jpg",
			alt: "Minimal gold wedding invitation design",
		},
		{
			title: "Midnight Garden",
			style: "Maximalist Floral",
			image: "/invite-garden.jpg",
			alt: "Vintage floral invitation design",
		},
		{
			title: "St. Moritz",
			style: "Swiss Editorial",
			image: "/invite-swiss.jpg",
			alt: "Modern Swiss graphic invitation design",
		},
		{
			title: "Midnight Noir",
			style: "Abstract Artistic",
			image: "/invite-noir.jpg",
			alt: "Abstract noir invitation design",
		},
	];

	return (
		<section id="gallery" className="py-24 md:py-32">
			<div className="px-6 md:px-8 mb-12 md:mb-16">
				<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 text-left">
					<div>
						<h2 className="text-3xl md:text-4xl lg:text-6xl font-serif">
							Curated Designs.
						</h2>
					</div>
					<a
						href="#"
						className="text-sm uppercase tracking-widest border-b border-foreground pb-1 hover:text-accent transition-colors"
					>
						View All Themes
					</a>
				</div>
			</div>

			<div className="flex gap-4 md:gap-6 px-6 md:px-8 overflow-x-auto pb-8 scrollbar-hide">
				{designs.map((design) => (
					<div
						key={design.title}
						className="inline-block w-64 md:w-80 shrink-0 group text-left"
					>
						<div className="w-full aspect-[3/4] bg-muted rounded-sm mb-4 overflow-hidden">
							<img
								src={design.image}
								alt={design.alt}
								width={912}
								height={1200}
								loading="lazy"
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
						</div>
						<div className="font-serif text-lg">{design.title}</div>
						<div className="text-xs text-muted-foreground uppercase tracking-widest">
							{design.style}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer className="py-16 md:py-24 px-6 md:px-8 bg-background border-t border-border">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 text-left">
				<div>
					<div className="text-3xl font-serif italic mb-4">Inviteside.</div>
					<p className="text-sm text-muted-foreground max-w-sm font-light leading-relaxed">
						Bespoke digital invitation suites for discerning hosts. Crafted with
						precision, delivered with elegance.
					</p>
				</div>

				<div className="flex flex-wrap gap-12 md:gap-24 text-xs uppercase tracking-widest">
					<div className="space-y-4 flex flex-col">
						<span className="text-muted-foreground">Product</span>
						<a href="#gallery" className="hover:text-accent transition-colors">
							The Gallery
						</a>
						<a href="#how-it-works" className="hover:text-accent transition-colors">
							How It Works
						</a>
						<a href="#features" className="hover:text-accent transition-colors">
							Features
						</a>
					</div>

					<div className="space-y-4 flex flex-col">
						<span className="text-muted-foreground">Company</span>
						<a href="#" className="hover:text-accent transition-colors">
							About
						</a>
						<a href="#" className="hover:text-accent transition-colors">
							Journal
						</a>
						<a href="#" className="hover:text-accent transition-colors">
							Contact
						</a>
					</div>

					<div className="space-y-4 flex flex-col">
						<span className="text-muted-foreground">Legal</span>
						<a href="#" className="hover:text-accent transition-colors">
							Privacy
						</a>
						<a href="#" className="hover:text-accent transition-colors">
							Terms
						</a>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border text-xs text-muted-foreground/60 flex flex-col sm:flex-row justify-between gap-4">
				<span>&copy; {new Date().getFullYear()} Inviteside Inc. All rights reserved.</span>
				<span>
					A product of{" "}
					<a
						href="https://kernel70.com"
						target="_blank"
						rel="noopener noreferrer"
						className="underline underline-offset-4 hover:text-foreground transition-colors"
					>
						Kernel70 Software Solutions
					</a>
				</span>
			</div>
		</footer>
	);
}
