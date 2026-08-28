"use client";

import { useState, useEffect } from "react";

/**
 * Returns the current window scroll position in pixels.
 * Safe for SSR: initial value is 0 and listeners attach after hydration.
 */
export function useScrollProgress() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		if (typeof window === "undefined") return;

		let rafId = 0;
		let latestScrollY = window.scrollY;

		const handleScroll = () => {
			latestScrollY = window.scrollY;
			if (rafId) return;
			rafId = requestAnimationFrame(() => {
				setScrollY(latestScrollY);
				rafId = 0;
			});
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (rafId) cancelAnimationFrame(rafId);
		};
	}, []);

	return scrollY;
}
