import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	console.log(req.headers.get("x-vercel-ip-country"));
	const country =
		req.headers.get("x-vercel-ip-country") ||
		req.headers.get("cf-ipcountry") ||
		req.headers.get("x-country-code") ||
		req.headers.get("cloudfront-viewer-country") ||
		null;

	const isSriLanka = country?.toUpperCase() === "LK";

	return NextResponse.json({
		country,
		isSriLanka,
	});
}
