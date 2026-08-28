"use client";

import React from "react";
import { SimpleCardData, CardStyleId } from "../types";

// This component is no longer used for the main flow —
// the /bday page now renders full-page WishPageRenderer designs.
// Kept as a stub for backward compatibility.

export function CardRenderer({ data }: { data: SimpleCardData; designId?: CardStyleId }) {
  return (
    <div className="w-full aspect-[3/4] rounded-2xl bg-stone-100 flex items-center justify-center text-stone-400 text-sm">
      Card preview
    </div>
  );
}
