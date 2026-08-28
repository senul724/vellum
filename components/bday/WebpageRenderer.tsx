"use client";

import React from "react";
import { BirthdayWishData, WebpageTemplateId } from "./types";
import { MagazineEditorialPage } from "./webpages/MagazineEditorialPage";
import { ScrapbookPolaroidPage } from "./webpages/ScrapbookPolaroidPage";
import { PartyPopBashPage } from "./webpages/PartyPopBashPage";
import { BotanicalLetterPage } from "./webpages/BotanicalLetterPage";

interface WebpageRendererProps {
  data: BirthdayWishData;
  templateId?: WebpageTemplateId;
  onCelebration?: () => void;
}

export function WebpageRenderer({ data, templateId, onCelebration }: WebpageRendererProps) {
  const activeTemplate = templateId || data.templateId;

  switch (activeTemplate) {
    case "magazine-editorial":
      return <MagazineEditorialPage data={data} onCelebration={onCelebration} />;
    case "scrapbook-polaroids":
      return <ScrapbookPolaroidPage data={data} onCelebration={onCelebration} />;
    case "party-pop":
      return <PartyPopBashPage data={data} onCelebration={onCelebration} />;
    case "botanical-letter":
    default:
      return <BotanicalLetterPage data={data} onCelebration={onCelebration} />;
  }
}
