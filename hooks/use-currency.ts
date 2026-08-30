"use client";

import { useState, useEffect } from "react";

export type Currency = "USD" | "LKR";

export function useCurrency() {
	const [currency, setCurrencyState] = useState<Currency>("USD");
	const [isDetectedLK, setIsDetectedLK] = useState<boolean>(false);
	const [isReady, setIsReady] = useState<boolean>(false);

	useEffect(() => {
		if (typeof window === "undefined") return;

		// 1. Check URL parameters for explicit testing/override (e.g., ?currency=lkr or ?geo=lk)
		const params = new URLSearchParams(window.location.search);
		const curParam = params.get("currency")?.toUpperCase();
		const geoParam = (params.get("geo") || params.get("country"))?.toUpperCase();

		if (curParam === "LKR" || geoParam === "LK") {
			setCurrencyState("LKR");
			setIsDetectedLK(true);
			setIsReady(true);
			return;
		}
		if (curParam === "USD") {
			setCurrencyState("USD");
			setIsReady(true);
			return;
		}



		// 3. Instant client-side detection via Timezone
		try {
			const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
			if (timeZone === "Asia/Colombo") {
				setCurrencyState("LKR");
				setIsDetectedLK(true);
				setIsReady(true);
				return;
			}
		} catch {
			// Ignore timezone lookup failure
		}

		// 4. Client locale check
		try {
			const locales = navigator.languages || [navigator.language];
			const hasLKLocale = locales.some(
				(l) => l && (l.toLowerCase().includes("-lk") || l.toLowerCase() === "si")
			);
			if (hasLKLocale) {
				setCurrencyState("LKR");
				setIsDetectedLK(true);
				setIsReady(true);
				return;
			}
		} catch {
			// Ignore locale lookup failure
		}

		// 5. Edge / Server Header detection via /api/geo
		fetch("/api/geo")
			.then((res) => res.json())
			.then((data) => {
				if (data?.isSriLanka) {
					setCurrencyState("LKR");
					setIsDetectedLK(true);
				}
			})
			.catch(() => {
				// Secondary fallback using lightweight public geo lookup
				fetch("https://api.country.is", { signal: AbortSignal.timeout(1500) })
					.then((res) => res.json())
					.then((data) => {
						if (data?.country === "LK") {
							setCurrencyState("LKR");
							setIsDetectedLK(true);
						}
					})
					.catch(() => {});
			})
			.finally(() => {
				setIsReady(true);
			});
	}, []);

	const setCurrency = (next: Currency) => {
		setCurrencyState(next);
		try {
			localStorage.setItem("inviteside_currency", next);
		} catch {
			// Ignore storage error
		}
	};

	return {
		currency,
		setCurrency,
		isSriLanka: currency === "LKR",
		isDetectedLK,
		isReady,
	};
}
