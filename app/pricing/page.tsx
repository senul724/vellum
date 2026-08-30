"use client";

import { useState } from "react";
import Link from "next/link";
import { useCurrency, type Currency } from "@/hooks/use-currency";
import pricingConfig from "@/data/pricing.json";
import {
	Sparkles,
	Check,
	MessageCircle,
	Mail,
	CheckCircle2,
	Heart,
	PartyPopper,
	Briefcase,
	Clock,
	Send,
	X,
	Info,
	CheckSquare,
	Square,
	ExternalLink,
	Tag,
} from "lucide-react";

type SpecialId = "none" | "wedding" | "birthday";

interface SpecialOption {
	id: SpecialId;
	title: string;
	subtitle: string;
	icon: any;
	accent: string;
	badge: string;
	priceUSD: number;
	priceLKR: number;
	discountedPriceUSD: number;
	discountedPriceLKR: number;
	features: string[];
	previewRoute?: string;
}

const SPECIALS: SpecialOption[] = [
	{
		id: "none",
		title: "None (Standard Base Only)",
		subtitle: "Clean, elegant invitation with event details, maps, and calendar sync.",
		icon: Briefcase,
		accent: "border-slate-500/40 text-slate-700 dark:text-slate-300 bg-slate-500/10",
		badge: "Standard Base",
		priceUSD: 0,
		priceLKR: 0,
		discountedPriceUSD: 0,
		discountedPriceLKR: 0,
		features: [
			"Essential bespoke digital invitation page",
			"Full event schedule & location map",
			"1-tap Apple & Google Calendar sync",
			"6 months cloud hosting with instant shareable link",
		],
	},
	{
		id: "wedding",
		title: "Wedding Special",
		subtitle: "Editorial luxury ceremony page with romantic audio score, wax seal ritual, and love story photo gallery.",
		icon: Heart,
		accent: "border-amber-500/40 text-amber-500 bg-amber-500/10",
		badge: "Most Romantic",
		priceUSD: pricingConfig.specials.wedding.priceUSD,
		priceLKR: pricingConfig.specials.wedding.priceLKR,
		discountedPriceUSD: pricingConfig.specials.wedding.discountedPriceUSD,
		discountedPriceLKR: pricingConfig.specials.wedding.discountedPriceLKR,
		features: [
			"Curated orchestral / acoustic soundtrack & subtle music player",
			"Tactile 3D wax seal digital opening ritual",
			"Curated 8-photo memory album & love story gallery",
			"6 months cloud hosting with SSL included",
		],
		previewRoute: "/demo/wedding",
	},
	{
		id: "birthday",
		title: "Birthday Special",
		subtitle: "High-energy celebration with curated party soundtrack, interactive 3D floating balloons, and confetti unboxing.",
		icon: PartyPopper,
		accent: "border-rose-500/40 text-rose-500 bg-rose-500/10",
		badge: "Celebration",
		priceUSD: pricingConfig.specials.birthday.priceUSD,
		priceLKR: pricingConfig.specials.birthday.priceLKR,
		discountedPriceUSD: pricingConfig.specials.birthday.discountedPriceUSD,
		discountedPriceLKR: pricingConfig.specials.birthday.discountedPriceLKR,
		features: [
			"Curated celebration background soundtrack & player",
			"Interactive 3D chrome floating balloons (tap to pop)",
			"Digital confetti opening ritual & party memo",
			"6 months cloud hosting with live party countdown",
		],
		previewRoute: "/demo/birthday",
	},
];

export default function PricingPage() {
	const { currency } = useCurrency();

	// Pricing State (Default: Base Package only)
	const [selectedSpecialId, setSelectedSpecialId] = useState<SpecialId>("none");
	const [hasRsvp, setHasRsvp] = useState<boolean>(false);
	const [hasCustomDomain, setHasCustomDomain] = useState<boolean>(false);
	const [isEmailModalOpen, setIsEmailModalOpen] = useState<boolean>(false);

	// Launch Offer Spots Configuration from @/data/pricing.json
	const claimedSpots = pricingConfig.launchOffer?.claimedSpots ?? 1;
	const totalSpots = pricingConfig.launchOffer?.totalSpots ?? 100;
	const remainingSpots = Math.max(0, totalSpots - claimedSpots);
	const progressPercent = Math.min(100, Math.max(1, (claimedSpots / totalSpots) * 100));

	// Base Package Pricing from @/data/pricing.json
	const baseRegularPriceUSD = pricingConfig.basePackage.priceUSD;
	const baseRegularPriceLKR = pricingConfig.basePackage.priceLKR;
	const baseDiscountedPriceUSD = pricingConfig.basePackage.discountedPriceUSD;
	const baseDiscountedPriceLKR = pricingConfig.basePackage.discountedPriceLKR;

	// Feature Add-ons Pricing from @/data/pricing.json
	const rsvpRegularPriceUSD = pricingConfig.addons.rsvp.priceUSD;
	const rsvpRegularPriceLKR = pricingConfig.addons.rsvp.priceLKR;
	const rsvpDiscountedPriceUSD = pricingConfig.addons.rsvp.discountedPriceUSD;
	const rsvpDiscountedPriceLKR = pricingConfig.addons.rsvp.discountedPriceLKR;

	const domainRegularPriceUSD = pricingConfig.addons.customDomain.priceUSD;
	const domainRegularPriceLKR = pricingConfig.addons.customDomain.priceLKR;
	const domainDiscountedPriceUSD = pricingConfig.addons.customDomain.discountedPriceUSD;
	const domainDiscountedPriceLKR = pricingConfig.addons.customDomain.discountedPriceLKR;

	// Selected Special Details
	const currentSpecial =
		SPECIALS.find((s) => s.id === selectedSpecialId) || SPECIALS[0];

	// Active (Discounted) Costs
	const baseCost = currency === "LKR" ? baseDiscountedPriceLKR : baseDiscountedPriceUSD;
	const specialCost =
		currency === "LKR" ? currentSpecial.discountedPriceLKR : currentSpecial.discountedPriceUSD;
	const rsvpCost = hasRsvp ? (currency === "LKR" ? rsvpDiscountedPriceLKR : rsvpDiscountedPriceUSD) : 0;
	const domainCost = hasCustomDomain
		? currency === "LKR"
			? domainDiscountedPriceLKR
			: domainDiscountedPriceUSD
		: 0;

	const totalPrice = baseCost + specialCost + rsvpCost + domainCost;

	// Regular (Full) Costs
	const baseRegularCost = currency === "LKR" ? baseRegularPriceLKR : baseRegularPriceUSD;
	const specialRegularCost =
		currency === "LKR" ? currentSpecial.priceLKR : currentSpecial.priceUSD;
	const rsvpRegularCost = hasRsvp ? (currency === "LKR" ? rsvpRegularPriceLKR : rsvpRegularPriceUSD) : 0;
	const domainRegularCost = hasCustomDomain
		? currency === "LKR"
			? domainRegularPriceLKR
			: domainRegularPriceUSD
		: 0;

	const totalRegularPrice = baseRegularCost + specialRegularCost + rsvpRegularCost + domainRegularCost;
	const totalSavings = totalRegularPrice - totalPrice;

	const formattedTotal =
		currency === "LKR"
			? `${totalPrice.toLocaleString()} LKR`
			: `$${totalPrice}`;

	const formattedRegularTotal =
		currency === "LKR"
			? `${totalRegularPrice.toLocaleString()} LKR`
			: `$${totalRegularPrice}`;

	const formattedSavings =
		currency === "LKR"
			? `${totalSavings.toLocaleString()} LKR`
			: `$${totalSavings}`;

	// WhatsApp Inquiry Message with exact breakdown
	const selectedItems: string[] = ["Base Package (Normal Parties & Corporate)"];
	if (currentSpecial.id !== "none") {
		selectedItems.push(currentSpecial.title);
	}
	if (hasRsvp) {
		selectedItems.push("Smart RSVP & Host Dashboard");
	}
	if (hasCustomDomain) {
		selectedItems.push("Custom Vanity Domain");
	}

	const breakdownText = selectedItems.join("\n• ");

	const whatsappMessage = `Hi Inviteside! I'd like to get started with an invite website (First 100 Hosts Discount):
• ${breakdownText}
• Estimated Total: ${formattedTotal}${totalSavings > 0 ? ` (Standard: ${formattedRegularTotal}, You save ${formattedSavings})` : ""}

(I understand this pricing is an estimate and we can mix & match as needed!)
Could you share the next steps?`;

	return (
		<main className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
			<PricingNavbar />

			{/* Hero Header */}
			<section className="pt-32 sm:pt-36 pb-12 px-6 max-w-5xl mx-auto text-center">
				{/* Live Host Countdown Badge starting from 1 */}
				<div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3.5 px-4 py-2 rounded-full border border-border/80 bg-card/70 backdrop-blur-md text-xs font-mono shadow-xs mb-6">
					<div className="flex items-center gap-2">
						<span className="flex h-2 w-2 relative">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
						</span>
						<span className="text-foreground font-semibold">
							Host <span className="text-primary font-bold">#{claimedSpots}</span> of {totalSpots} Claimed
						</span>
					</div>
					<div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/40" />
					<div className="flex items-center gap-2">
						<div className="w-16 h-1.5 rounded-full bg-muted overflow-hidden border border-border/60">
							<div
								style={{ width: `${progressPercent}%` }}
								className="h-full bg-emerald-500 rounded-full transition-all duration-300"
							/>
						</div>
						<span className="text-emerald-600 dark:text-emerald-400 font-bold">
							{remainingSpots} Early-Bird Spots Left
						</span>
					</div>
				</div>

				<h1 className="text-4xl sm:text-6xl font-serif tracking-tight text-foreground leading-[1.1]">
					Start with our Base Package. <br />
					<span className="italic font-light text-muted-foreground">
						Mix and match to your vision.
					</span>
				</h1>

				<p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed pt-3">
					First 100 hosts unlock special launch pricing starting at just{" "}
					<span className="font-mono text-muted-foreground line-through mr-1.5">
						{currency === "LKR"
							? `${baseRegularPriceLKR.toLocaleString()} LKR`
							: `$${baseRegularPriceUSD}`}
					</span>
					<strong className="text-foreground text-base sm:text-lg">
						{currency === "LKR"
							? `${baseDiscountedPriceLKR.toLocaleString()} LKR`
							: `$${baseDiscountedPriceUSD}`}
					</strong>{" "}
					for normal parties and corporate events. Includes <strong>6 months of cloud hosting</strong> with zero ongoing subscriptions.
				</p>


			</section>

			{/* Main Interactive Configurator */}
			<section className="pb-24 px-6 max-w-6xl mx-auto">
				<div className="grid lg:grid-cols-12 gap-10 items-start">
					{/* Left 7 Columns: Base + Specials + Feature Add-ons */}
					<div className="lg:col-span-7 space-y-10">
						{/* STEP 1: BASE PACKAGE (Always Included) */}
						<div className="space-y-3">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-2">
									<span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-mono font-bold flex items-center justify-center">
										1
									</span>
									<h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground">
										Base Package (Always Included)
									</h2>
								</div>
								<span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold uppercase">
									Included
								</span>
							</div>

							<p className="text-xs text-muted-foreground font-light">
								Best for normal parties, corporate dinners, milestone bashes, and executive gatherings.
							</p>

							{/* Base Package Card */}
							<div className="p-5 sm:p-6 rounded-3xl border-2 border-primary/40 bg-card shadow-sm space-y-4 text-left relative overflow-hidden">
								<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-3">
									<div>
										<h3 className="font-serif font-bold text-lg text-foreground">
											Standard Custom Invitation Page
										</h3>
										<p className="text-xs text-muted-foreground font-light">
											Personally handcrafted mobile-native webpage with instant delivery.
										</p>
									</div>
									<div className="text-left sm:text-right shrink-0">
										<div className="flex items-baseline sm:justify-end gap-2">
											<span className="text-xs sm:text-sm font-mono text-muted-foreground line-through">
												{currency === "LKR"
													? `${baseRegularPriceLKR.toLocaleString()} LKR`
													: `$${baseRegularPriceUSD}`}
											</span>
											<span className="text-2xl font-serif font-bold text-foreground block">
												{currency === "LKR"
													? `${baseDiscountedPriceLKR.toLocaleString()} LKR`
													: `$${baseDiscountedPriceUSD}`}
											</span>
										</div>
										<span className="inline-block text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full mt-0.5">
											First 100 Rate (Save {currency === "LKR" ? `${(baseRegularPriceLKR - baseDiscountedPriceLKR).toLocaleString()} LKR` : `$${baseRegularPriceUSD - baseDiscountedPriceUSD}`})
										</span>
									</div>
								</div>

								<div className="grid sm:grid-cols-2 gap-2 text-xs text-muted-foreground font-light">
									<div className="flex items-center gap-2">
										<Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
										<span>Custom typography &amp; personalized layout</span>
									</div>
									<div className="flex items-center gap-2">
										<Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
										<span>Event schedule, dress code &amp; countdown</span>
									</div>
									<div className="flex items-center gap-2">
										<Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
										<span>1-tap Apple &amp; Google Calendar sync</span>
									</div>
									<div className="flex items-center gap-2">
										<Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
										<span>Google Maps venue pin &amp; valet directions</span>
									</div>
									<div className="flex items-center gap-2">
										<Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
										<span>100% Mobile Native (WhatsApp &amp; iMessage ready)</span>
									</div>
									<div className="flex items-center gap-2">
										<Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
										<span>6 months cloud hosting included with secure SSL</span>
									</div>
								</div>
							</div>
						</div>

						{/* STEP 2: CELEBRATION SPECIALS (Optional) */}
						<div className="space-y-3 pt-2">
							<div className="flex items-center gap-2">
								<span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-mono font-bold flex items-center justify-center">
									2
								</span>
								<h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground">
									Add an Occasion Special (Optional)
								</h2>
							</div>

							<p className="text-xs text-muted-foreground font-light">
								Upgrade your invitation with tailored audio soundtracks, tactile opening rituals, and photo galleries.
							</p>

							<div className="space-y-3 pt-1">
								{SPECIALS.map((spec) => {
									const isSelected = selectedSpecialId === spec.id;
									const Icon = spec.icon;
									const hasDiscount = spec.priceUSD > spec.discountedPriceUSD;

									return (
										<div
											key={spec.id}
											onClick={() => setSelectedSpecialId(spec.id)}
											className={`p-4 sm:p-5 rounded-2xl border text-left cursor-pointer transition-all duration-200 flex flex-col justify-between ${isSelected
												? "border-primary bg-card ring-2 ring-primary/20 shadow-md"
												: "border-border bg-card/60 hover:bg-card hover:border-primary/40 shadow-xs"
												}`}
										>
											<div className="flex items-start justify-between gap-4">
												<div className="flex items-start gap-3.5">
													<div className="mt-0.5 w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
														<Icon className="w-4 h-4" />
													</div>
													<div className="space-y-1">
														<div className="flex items-center gap-2">
															<h3 className="font-serif font-bold text-base text-foreground">
																{spec.title}
															</h3>
															<span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-semibold">
																{spec.badge}
															</span>
														</div>
														<p className="text-xs text-muted-foreground font-light leading-relaxed">
															{spec.subtitle}
														</p>

														{/* Feature checklist */}
														<div className="grid sm:grid-cols-2 gap-1.5 pt-2 text-[11px] text-muted-foreground">
															{spec.features.map((feat, i) => (
																<div key={i} className="flex items-center gap-1.5">
																	<Check className="w-3 h-3 text-primary shrink-0" />
																	<span>{feat}</span>
																</div>
															))}
														</div>
													</div>
												</div>

												<div className="text-right shrink-0">
													{spec.id === "none" ? (
														<span className="text-sm font-mono font-bold text-foreground block">
															Included with Base
														</span>
													) : (
														<div className="space-y-0.5">
															{hasDiscount && (
																<span className="text-xs font-mono text-muted-foreground line-through block">
																	{currency === "LKR"
																		? `+${spec.priceLKR.toLocaleString()} LKR`
																		: `+$${spec.priceUSD}`}
																</span>
															)}
															<span className="text-sm font-mono font-bold text-primary block">
																{currency === "LKR"
																	? `+${spec.discountedPriceLKR.toLocaleString()} LKR`
																	: `+$${spec.discountedPriceUSD}`}
															</span>
															{hasDiscount && (
																<span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold block">
																	Save {currency === "LKR" ? `${(spec.priceLKR - spec.discountedPriceLKR).toLocaleString()} LKR` : `$${spec.priceUSD - spec.discountedPriceUSD}`}
																</span>
															)}
														</div>
													)}

													{spec.previewRoute && (
														<Link
															href={spec.previewRoute}
															onClick={(e) => e.stopPropagation()}
															className="text-[10px] font-mono text-primary hover:underline flex items-center justify-end gap-1 mt-1.5"
														>
															<span>Demo</span>
															<ExternalLink className="w-2.5 h-2.5" />
														</Link>
													)}
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>

						{/* STEP 3: GENERAL FEATURE ADD-ONS */}
						<div className="space-y-3 pt-2">
							<div className="flex items-center gap-2">
								<span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-mono font-bold flex items-center justify-center">
									3
								</span>
								<h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground">
									Smart Logistics &amp; Branding Add-ons
								</h2>
							</div>

							<p className="text-xs text-muted-foreground font-light">
								Enhance any invite with real-time guest headcount tracking and your own custom web address.
							</p>

							<div className="space-y-3 pt-1">
								{/* 1. Smart RSVP & Dashboard */}
								<div
									onClick={() => setHasRsvp(!hasRsvp)}
									className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all flex items-start justify-between gap-4 ${hasRsvp
										? "border-primary bg-primary/5 shadow-xs"
										: "border-border bg-card/60 hover:bg-card"
										}`}
								>
									<div className="flex items-start gap-3.5">
										<div className="mt-0.5">
											{hasRsvp ? (
												<CheckSquare className="w-5 h-5 text-primary" />
											) : (
												<Square className="w-5 h-5 text-muted-foreground" />
											)}
										</div>
										<div className="space-y-1">
											<div className="flex items-center gap-2">
												<span className="font-serif font-bold text-base text-foreground">
													Smart RSVP &amp; Dedicated Host Dashboard
												</span>
												<span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold uppercase">
													First 100 Discount
												</span>
											</div>
											<p className="text-xs text-muted-foreground font-light leading-relaxed">
												Collect real-time confirmed headcounts, entrée choices, dietary restrictions, cocktail choices, plus-ones, and song requests in your own dedicated, private host dashboard.
											</p>
										</div>
									</div>

									<div className="text-right shrink-0 space-y-0.5">
										{rsvpRegularPriceUSD > rsvpDiscountedPriceUSD && (
											<span className="text-xs font-mono text-muted-foreground line-through block">
												{currency === "LKR"
													? `+${rsvpRegularPriceLKR.toLocaleString()} LKR`
													: `+$${rsvpRegularPriceUSD}`}
											</span>
										)}
										<span className="text-xs sm:text-sm font-mono font-bold text-foreground block">
											+{currency === "LKR" ? `${rsvpDiscountedPriceLKR.toLocaleString()} LKR` : `$${rsvpDiscountedPriceUSD}`}
										</span>
										{rsvpRegularPriceUSD > rsvpDiscountedPriceUSD && (
											<span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold block">
												Save {currency === "LKR" ? `${(rsvpRegularPriceLKR - rsvpDiscountedPriceLKR).toLocaleString()} LKR` : `$${rsvpRegularPriceUSD - rsvpDiscountedPriceUSD}`}
											</span>
										)}
									</div>
								</div>

								{/* 2. Custom Domain */}
								<div
									onClick={() => setHasCustomDomain(!hasCustomDomain)}
									className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all flex items-start justify-between gap-4 ${hasCustomDomain
										? "border-primary bg-primary/5 shadow-xs"
										: "border-border bg-card/60 hover:bg-card"
										}`}
								>
									<div className="flex items-start gap-3.5">
										<div className="mt-0.5">
											{hasCustomDomain ? (
												<CheckSquare className="w-5 h-5 text-primary" />
											) : (
												<Square className="w-5 h-5 text-muted-foreground" />
											)}
										</div>
										<div className="space-y-1">
											<div className="flex items-center gap-2">
												<span className="font-serif font-bold text-base text-foreground">
													Custom Branded Domain
												</span>
												<span className="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-mono font-bold uppercase">
													White-Label
												</span>
											</div>
											<p className="text-xs text-muted-foreground font-light leading-relaxed">
												Use your own bespoke web address (e.g. <code>yournames.com</code> or <code>companyparty.com</code>) with dedicated SSL certificate instead of a standard inviteside link.
											</p>
										</div>
									</div>

									<div className="text-right shrink-0">
										<span className="text-xs sm:text-sm font-mono font-bold text-foreground block">
											+{currency === "LKR" ? `${domainDiscountedPriceLKR.toLocaleString()} LKR` : `$${domainDiscountedPriceUSD}`}
										</span>
										<span className="text-[10px] font-mono text-muted-foreground">flat fee</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right 5 Columns: Dynamic Calculated Summary Card */}
					<div className="lg:col-span-5 lg:sticky lg:top-28">
						<div className="rounded-3xl border-2 border-primary/40 bg-card p-6 sm:p-8 shadow-xl space-y-6 text-left relative overflow-hidden">
							{/* Ambient glow accent */}
							<div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

							{/* Summary Header */}
							<div className="space-y-1">
								<div className="flex items-center justify-between">
									<span className="text-[11px] font-mono font-bold uppercase tracking-widest text-primary block">
										Your Custom Estimate
									</span>
									<span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
										First 100 Discount
									</span>
								</div>
								<h3 className="font-serif font-bold text-2xl text-foreground">
									{currentSpecial.id !== "none" ? currentSpecial.title : "Base Invitation Package"}
								</h3>
								<p className="text-xs text-muted-foreground font-light">
									Mix and match package tailored for your celebration.
								</p>
							</div>

							<div className="w-full h-[1px] bg-border/80" />

							{/* Cost Breakdown */}
							<div className="space-y-2.5 text-xs font-mono">
								<div className="flex items-center justify-between text-foreground">
									<span>Base Package (Normal &amp; Corporate)</span>
									<div className="text-right">
										<span className="text-muted-foreground line-through mr-1.5 text-[11px]">
											{currency === "LKR"
												? `${baseRegularPriceLKR.toLocaleString()} LKR`
												: `$${baseRegularPriceUSD}`}
										</span>
										<span className="font-semibold">
											{currency === "LKR"
												? `${baseDiscountedPriceLKR.toLocaleString()} LKR`
												: `$${baseDiscountedPriceUSD}`}
										</span>
									</div>
								</div>

								{currentSpecial.id !== "none" && (
									<div className="flex items-center justify-between text-foreground">
										<span>{currentSpecial.title}</span>
										<div className="text-right">
											{currentSpecial.priceUSD > currentSpecial.discountedPriceUSD && (
												<span className="text-muted-foreground line-through mr-1.5 text-[11px]">
													{currency === "LKR"
														? `+${currentSpecial.priceLKR.toLocaleString()} LKR`
														: `+$${currentSpecial.priceUSD}`}
												</span>
											)}
											<span className="font-semibold text-primary">
												{currency === "LKR"
													? `+${currentSpecial.discountedPriceLKR.toLocaleString()} LKR`
													: `+$${currentSpecial.discountedPriceUSD}`}
											</span>
										</div>
									</div>
								)}

								<div className="flex items-center justify-between text-muted-foreground">
									<span>Smart RSVP &amp; Dashboard</span>
									<div>
										{hasRsvp ? (
											<span>
												{rsvpRegularPriceUSD > rsvpDiscountedPriceUSD && (
													<span className="line-through mr-1.5 text-[11px]">
														{currency === "LKR"
															? `+${rsvpRegularPriceLKR.toLocaleString()} LKR`
															: `+$${rsvpRegularPriceUSD}`}
													</span>
												)}
												<span className="text-foreground font-semibold">
													{currency === "LKR"
														? `+${rsvpDiscountedPriceLKR.toLocaleString()} LKR`
														: `+$${rsvpDiscountedPriceUSD}`}
												</span>
											</span>
										) : (
											"Not selected"
										)}
									</div>
								</div>

								<div className="flex items-center justify-between text-muted-foreground">
									<span>Custom Vanity Domain</span>
									<span>
										{hasCustomDomain
											? currency === "LKR"
												? `+${domainDiscountedPriceLKR.toLocaleString()} LKR`
												: `+$${domainDiscountedPriceUSD}`
											: "Not selected"}
									</span>
								</div>

								<div className="flex items-center justify-between text-muted-foreground">
									<span>6 Months Cloud Hosting &amp; SSL</span>
									<span className="text-emerald-500 font-semibold">FREE Included</span>
								</div>
								<div className="flex items-center justify-between text-muted-foreground">
									<span>Mobile Native Optimization</span>
									<span className="text-emerald-500 font-semibold">FREE Included</span>
								</div>
							</div>

							<div className="w-full h-[1px] bg-border/80" />

							{/* Total Calculated Price Banner */}
							<div className="p-4 rounded-2xl bg-muted/40 border border-border flex items-baseline justify-between">
								<div>
									<span className="text-xs font-mono uppercase text-muted-foreground block font-medium">
										Estimated Total
									</span>
									<span className="text-[10px] text-muted-foreground">One-time flat fee</span>
								</div>
								<div className="text-right">
									{totalSavings > 0 && (
										<span className="text-xs sm:text-sm font-mono text-muted-foreground line-through block">
											{formattedRegularTotal}
										</span>
									)}
									<span className="text-3xl sm:text-4xl font-serif font-black text-foreground">
										{formattedTotal}
									</span>
								</div>
							</div>

							{/* Savings Banner Pill */}
							{totalSavings > 0 && (
								<div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 flex items-center justify-between text-xs font-mono">
									<span className="font-bold">🎉 First 100 Hosts Discount:</span>
									<span className="font-bold text-emerald-600 dark:text-emerald-400">
										Save {formattedSavings}
									</span>
								</div>
							)}

							{/* Disclaimer Callout */}
							<p className="text-[11px] text-muted-foreground font-light leading-relaxed bg-muted/20 p-3 rounded-xl border border-border/60">
								💬 <em>Pricing is just for an idea. You can mix and match to your exact preference or request custom features — just talk to us!</em>
							</p>

							{/* Action Buttons */}
							<div className="space-y-3 pt-1">
								{/* Button 1: WhatsApp */}
								<a
									href={`https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`}
									target="_blank"
									rel="noopener noreferrer"
									className="w-full py-3.5 sm:py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
								>
									<MessageCircle className="w-4 h-4" />
									<span>Chat on WhatsApp</span>
								</a>

								{/* Button 2: Email Inquiry */}
								<button
									type="button"
									onClick={() => setIsEmailModalOpen(true)}
									className="w-full py-3 rounded-full border border-border bg-background hover:bg-muted text-foreground text-xs font-mono font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
								>
									<Mail className="w-3.5 h-3.5 text-muted-foreground" />
									<span>Inquire via Email</span>
								</button>
							</div>

							<div className="flex items-center justify-center gap-2 text-[11px] font-mono text-muted-foreground text-center pt-1">
								<Clock className="w-3 h-3 text-emerald-500" />
								<span>Average Turnaround: 24–48 Hours</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Mix & Match Bespoke Consultation Section */}
			<section className="pb-16 px-6 max-w-5xl mx-auto text-center">
				<div className="p-8 sm:p-10 rounded-3xl bg-card border border-border/80 shadow-md relative overflow-hidden text-center space-y-4">
					<div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 pointer-events-none" />

					<h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
						Want a custom mix or unique features?
					</h3>

					<p className="text-sm sm:text-base text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
						This calculator gives you an instant estimate with our first 100 users discount. Every event is unique—you can mix and match any features, add custom sections, or request bespoke animations. <strong>Just talk to us and we&apos;ll tailor a package to your exact budget!</strong>
					</p>

					<div className="pt-2 flex flex-wrap items-center justify-center gap-3">
						<a
							href={`https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`}
							target="_blank"
							rel="noopener noreferrer"
							className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
						>
							<MessageCircle className="w-4 h-4" />
							<span>Chat with Us on WhatsApp</span>
						</a>
						<button
							type="button"
							onClick={() => setIsEmailModalOpen(true)}
							className="px-6 py-3 rounded-full border border-border bg-background hover:bg-muted text-foreground text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-xs"
						>
							<Mail className="w-4 h-4 text-muted-foreground" />
							<span>Send Custom Request</span>
						</button>
					</div>
				</div>
			</section>

			{/* Email Inquiry Modal */}
			{isEmailModalOpen && (
				<EmailInquiryModal
					specialTitle={currentSpecial.title}
					addonsText={selectedItems.join(", ")}
					formattedTotal={formattedTotal}
					formattedRegularTotal={formattedRegularTotal}
					totalSavingsText={totalSavings > 0 ? formattedSavings : undefined}
					onClose={() => setIsEmailModalOpen(false)}
				/>
			)}

			{/* Simple Guarantee / FAQ Section */}
			<section className="py-16 px-6 max-w-4xl mx-auto border-t border-border/40 text-left">
				<div className="text-center space-y-2 mb-10">
					<h3 className="text-2xl font-serif font-bold text-foreground">
						Frequently Asked Questions
					</h3>
					<p className="text-xs sm:text-sm text-muted-foreground font-light">
						Everything you need to know about our mix-and-match packages and early-bird rates.
					</p>
				</div>

				<div className="grid sm:grid-cols-2 gap-6 text-xs text-muted-foreground font-light leading-relaxed">
					<div className="p-5 rounded-2xl bg-card border border-border space-y-2">
						<h4 className="font-serif font-bold text-sm text-foreground">
							What is the First 100 Hosts Discount?
						</h4>
						<p>
							To celebrate the launch of Inviteside Studio, our first 100 event hosts receive exclusive introductory pricing across all packages and specials. Once the 100 spots are filled, pricing will return to standard rates.
						</p>
					</div>

					<div className="p-5 rounded-2xl bg-card border border-border space-y-2">
						<h4 className="font-serif font-bold text-sm text-foreground">
							Can I mix and match different features?
						</h4>
						<p>
							Yes, absolutely! Our pricing is completely modular. You can start with the base package and pick any combination of soundtracks, unboxing animations, RSVP systems, or custom domains. Just talk to us and we&apos;ll set up exactly what you need.
						</p>
					</div>

					<div className="p-5 rounded-2xl bg-card border border-border space-y-2">
						<h4 className="font-serif font-bold text-sm text-foreground">
							How long does it take to build?
						</h4>
						<p>
							Standard pages are completed within 24 to 48 hours after receiving your event details, photo assets, and music preferences. 24-hour rush turnaround is available upon request.
						</p>
					</div>

					<div className="p-5 rounded-2xl bg-card border border-border space-y-2">
						<h4 className="font-serif font-bold text-sm text-foreground">
							How long does my invitation stay online?
						</h4>
						<p>
							Every invitation package includes 6 months of premium cloud hosting with SSL security, giving you plenty of time before and after your celebration. Extended hosting is also available upon request if you wish to keep your page active indefinitely.
						</p>
					</div>

					<div className="p-5 rounded-2xl bg-card border border-border space-y-2">
						<h4 className="font-serif font-bold text-sm text-foreground">
							How do guests access my invitation?
						</h4>
						<p>
							You receive a custom web link (e.g. inviteside.com/your-names or your own custom domain) that you can easily copy and paste into WhatsApp, iMessage, Instagram DMs, or email with zero app downloads.
						</p>
					</div>

					<div className="p-5 rounded-2xl bg-card border border-border space-y-2">
						<h4 className="font-serif font-bold text-sm text-foreground">
							How do I view and manage RSVP responses?
						</h4>
						<p>
							You get access to a dedicated, private host dashboard where you can see guest submissions update in real time—including confirmed headcounts, meal selections, dietary restrictions, plus-ones, and personal guest messages.
						</p>
					</div>
				</div>
			</section>

			<PricingFooter />
		</main>
	);
}

/* =========================================================================
   EMAIL INQUIRY MODAL
   ========================================================================= */
function EmailInquiryModal({
	specialTitle,
	addonsText,
	formattedTotal,
	formattedRegularTotal,
	totalSavingsText,
	onClose,
}: {
	specialTitle: string;
	addonsText: string;
	formattedTotal: string;
	formattedRegularTotal: string;
	totalSavingsText?: string;
	onClose: () => void;
}) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [date, setDate] = useState("");
	const [notes, setNotes] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!name || !email) return;
		setIsSubmitted(true);
	};

	return (
		<div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
			<div className="bg-card border border-border rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative text-left space-y-5 animate-in fade-in zoom-in-95 duration-200">
				<button
					type="button"
					onClick={onClose}
					className="absolute top-5 right-5 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
				>
					<X className="w-5 h-5" />
				</button>

				{!isSubmitted ? (
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-1">
							<span className="text-[10px] font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
								First 100 Hosts Offer Active
							</span>
							<h3 className="text-xl font-serif font-bold text-foreground pt-1">
								Custom Invite Quote
							</h3>
							<p className="text-xs text-muted-foreground font-light">
								Offer Total: <strong className="text-foreground">{formattedTotal}</strong>
								{totalSavingsText && (
									<span className="text-muted-foreground ml-1.5">
										(Regular: <span className="line-through">{formattedRegularTotal}</span>, You save {totalSavingsText})
									</span>
								)}
								{" "}&bull; Selected: {addonsText}
							</p>
						</div>

						<div className="grid sm:grid-cols-2 gap-3 pt-2">
							<div className="space-y-1">
								<label className="block text-[11px] font-mono uppercase text-muted-foreground font-semibold">
									Your Name *
								</label>
								<input
									type="text"
									required
									value={name}
									onChange={(e) => setName(e.target.value)}
									placeholder="e.g. Liam Vance"
									className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-xs focus:outline-none focus:border-primary transition-colors"
								/>
							</div>

							<div className="space-y-1">
								<label className="block text-[11px] font-mono uppercase text-muted-foreground font-semibold">
									Email Address *
								</label>
								<input
									type="email"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="e.g. liam@example.com"
									className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-xs focus:outline-none focus:border-primary transition-colors"
								/>
							</div>
						</div>

						<div className="space-y-1">
							<label className="block text-[11px] font-mono uppercase text-muted-foreground font-semibold">
								Estimated Event Date
							</label>
							<input
								type="text"
								value={date}
								onChange={(e) => setDate(e.target.value)}
								placeholder="e.g. October 24, 2026"
								className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-xs focus:outline-none focus:border-primary transition-colors"
							/>
						</div>

						<div className="space-y-1">
							<label className="block text-[11px] font-mono uppercase text-muted-foreground font-semibold">
								Additional Vision or Preferences
							</label>
							<textarea
								rows={3}
								value={notes}
								onChange={(e) => setNotes(e.target.value)}
								placeholder="Any specific feature mix, color theme, or questions..."
								className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-xs focus:outline-none focus:border-primary transition-colors resize-none"
							/>
						</div>

						<button
							type="submit"
							className="w-full py-3.5 rounded-full bg-primary text-primary-foreground text-xs font-mono font-bold uppercase tracking-wider hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
						>
							<Send className="w-3.5 h-3.5" />
							<span>Send Inquiry Now</span>
						</button>
					</form>
				) : (
					<div className="py-8 text-center space-y-3">
						<div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
							<CheckCircle2 className="w-6 h-6" />
						</div>
						<h3 className="text-xl font-serif font-bold text-foreground">
							Inquiry Received, {name}!
						</h3>
						<p className="text-xs text-muted-foreground font-light max-w-sm mx-auto leading-relaxed">
							Our design team has received your mix-and-match request with the first 100 hosts discount locked in. We will review your selections and reach out to <strong className="text-foreground">{email}</strong> within a few hours!
						</p>
						<button
							type="button"
							onClick={onClose}
							className="px-6 py-2 rounded-full bg-muted text-foreground text-xs font-mono uppercase tracking-wider font-semibold hover:bg-muted/80 transition-colors cursor-pointer mt-2"
						>
							Close
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

/* =========================================================================
   NAVIGATION & FOOTER
   ========================================================================= */
function PricingNavbar() {
	return (
		<nav className="fixed top-0 w-full z-40 px-6 sm:px-12 py-4 flex justify-between items-center bg-background/85 backdrop-blur-xl border-b border-border/40 shadow-xs">
			<Link href="/" className="text-xl sm:text-2xl font-serif italic tracking-tight text-foreground flex items-center gap-2">
				<span>Inviteside.</span>
			</Link>

			<div className="flex items-center gap-4 text-xs font-mono">
				<Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
					← Back to Home
				</Link>
			</div>
		</nav>
	);
}

function PricingFooter() {
	return (
		<footer className="py-12 px-6 bg-muted/40 border-t border-border text-center sm:text-left">
			<div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-light">
				<div className="space-y-1">
					<Link href="/" className="font-serif italic text-lg text-foreground">
						Inviteside.
					</Link>
					<p>&copy; {new Date().getFullYear()} Inviteside Studio. All rights reserved.</p>
				</div>

				<div className="flex flex-wrap items-center justify-center gap-5 font-mono text-xs">
					<Link href="/" className="hover:text-foreground transition-colors">
						Home
					</Link>
					<Link href="/demo/wedding" className="hover:text-foreground transition-colors">
						Wedding Demo
					</Link>
					<Link href="/demo/birthday" className="hover:text-foreground transition-colors">
						Birthday Demo
					</Link>
					<Link href="/demo/business" className="hover:text-foreground transition-colors">
						Business Demo
					</Link>
					<Link href="/demo/party" className="hover:text-foreground transition-colors">
						Party Demo
					</Link>
				</div>
			</div>
		</footer>
	);
}
