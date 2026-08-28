export type CardStyleId =
  | "space-astronaut"
  | "mermaid-magic"
  | "y2k-digital-camera"
  | "festive-bunting"
  | "pressed-floral"
  | "polaroid-collage"
  | "pink-cupcake-polaroid"
  | "whimsical"
  | "elegant"
  | "neon-party"
  | "minimal"
  | "adventure"
  | "retro-fun";

export interface SimpleCardData {
  recipientName: string;
  message: string;
  senderName: string;
  designId: CardStyleId;
  photoUrl: string; // primary photo base64 or URL
  photos?: string[]; // array of up to 3-4 collage photos
  milestoneAge?: string; // e.g. "2" or "1"
  eventDate?: string; // e.g. "JUNE | 9 | 4 PM"
  eventLocation?: string; // e.g. "123 Anywhere St., Any City"
}

export interface CardStyleMeta {
  id: CardStyleId;
  name: string;
  tagline: string;
  audience: string;
  image: string;
}

export const CARD_STYLES: Record<CardStyleId, CardStyleMeta> = {
  "space-astronaut": {
    id: "space-astronaut",
    name: "Space Explorer Birthday",
    tagline: "Curved name arc, astronaut bear & cat UFO, space rocket & cosmic stars",
    audience: "Super fun for kids & milestone birthdays (Turning 1, 2, 3...)",
    image: "/cards/space-astronaut.jpg",
  },
  "mermaid-magic": {
    id: "mermaid-magic",
    name: "Mermaid Princess Birthday",
    tagline: "Pastel ocean waves, mermaids, corals, seashell cake & sparkling stars",
    audience: "Magical theme for little princesses & kids birthdays",
    image: "/cards/mermaid-magic.jpg",
  },
  "y2k-digital-camera": {
    id: "y2k-digital-camera",
    name: "Y2K Digital Camera & Ransom Note",
    tagline: "Silver digicam display, pop-art starburst, crown & cutout letter tiles",
    audience: "Trending — ultimate aesthetic scrapbook page",
    image: "/cards/polaroid-collage.jpg",
  },
  "festive-bunting": {
    id: "festive-bunting",
    name: "Festive Bunting & Balloons",
    tagline: "Pastel triangular garland flags, circular portrait frame & balloon dogs",
    audience: "Joyful, warm celebration — perfect for family & friends",
    image: "/cards/festive-bunting.jpg",
  },
  "pressed-floral": {
    id: "pressed-floral",
    name: "Pressed Floral Scrapbook",
    tagline: "Soft blush petal watercolor, layered polaroids, pressed flowers & notebook note",
    audience: "Romantic & artistic — ideal for girlfriends, sisters & moms",
    image: "/cards/pressed-floral.jpg",
  },
  "polaroid-collage": {
    id: "polaroid-collage",
    name: "Scrapbook Polaroid Collage",
    tagline: "Overlapping Polaroid snapshots with taped edges, doodled hearts & stars",
    audience: "Best for besties, groups, memories & friends",
    image: "/cards/polaroid-collage.jpg",
  },
  "pink-cupcake-polaroid": {
    id: "pink-cupcake-polaroid",
    name: "Pink Cupcake & Polaroid",
    tagline: "Hot pink theme with custom polaroid photo & lit candle",
    audience: "Top pick — photo wish page for everyone",
    image: "/cards/pink-cupcake-polaroid.jpg",
  },
  whimsical: {
    id: "whimsical",
    name: "Party Animals",
    tagline: "Cute woodland friends celebrating with cake & balloons",
    audience: "Great for kids & anyone young at heart",
    image: "/cards/whimsical.jpg",
  },
  elegant: {
    id: "elegant",
    name: "Garden Roses",
    tagline: "Romantic rose & eucalyptus wreath with gold accents",
    audience: "Perfect for moms, friends, and anyone elegant",
    image: "/cards/elegant.jpg",
  },
  "neon-party": {
    id: "neon-party",
    name: "Neon Bash",
    tagline: "Electric disco vibes with neon glow & confetti",
    audience: "Teens, young adults, party lovers",
    image: "/cards/neon.jpg",
  },
  minimal: {
    id: "minimal",
    name: "Golden Glow",
    tagline: "A single candle, warm light & quiet sophistication",
    audience: "Classy & understated — works for anyone",
    image: "/cards/minimal.jpg",
  },
  adventure: {
    id: "adventure",
    name: "New Heights",
    tagline: "Hot air balloon soaring over a golden sunset valley",
    audience: "Dreamers, travelers, all ages & genders",
    image: "/cards/adventure.jpg",
  },
  "retro-fun": {
    id: "retro-fun",
    name: "Sweet Treats",
    tagline: "Cupcakes, donuts, candy & ice cream party pattern",
    audience: "Kids, foodies, anyone who loves fun",
    image: "/cards/retro-fun.jpg",
  },
};

export const DEFAULT_SIMPLE_CARD: SimpleCardData = {
  recipientName: "Sam",
  message: "Join us in birthday celebration! Wishing you a day filled with magic, wonder, and sweet adventures.",
  senderName: "Julian",
  designId: "space-astronaut",
  photoUrl: "",
  photos: [],
  milestoneAge: "2",
  eventDate: "JUNE | 9 | 4 PM",
  eventLocation: "123 Anywhere St., Any City",
};

export const QUICK_WISH_SUGGESTIONS = [
  "Join us in birthday celebration! Wishing you a day filled with magic, wonder, and sweet adventures. ✨",
  "Wishing you a day filled with love, laughter, and endless joy! ✨",
  "Cheers to a year full of dreams come true! May this year bring you new adventures and endless happiness. ✨",
  "Happy Birthday! May this next year be your most radiant and fun chapter yet 🎂💛",
  "Sending you the biggest hug and a toast to celebrating the absolute legend you are! 🥂🎉",
];

// Legacy compatibility
export type CardDesignId = "hydrangea-bouquet" | "wildflower-meadow" | "gilded-peony" | "citrus-olive" | "royal-letterpress" | "champagne-confetti";
export type EnvelopeColorId = "alabaster" | "powder-blue" | "dusty-rose" | "sage" | "navy" | "terracotta";
export type EnvelopeLinerId = "hydrangea-watercolor" | "botanical-chintz" | "gold-confetti" | "vintage-stripe" | "solid-cream";
export type PostalStampId = "vintage-hydrangea" | "gold-crown" | "champagne-flute" | "botanical-fern";
export interface BirthdayCardSuite { headerGreeting: string; recipientName: string; milestoneAge: string; eventDate: string; locationWish: string; personalMessage: string; senderName: string; designId: CardDesignId; envelopeColor: EnvelopeColorId; envelopeLiner: EnvelopeLinerId; postalStamp: PostalStampId; soundEnabled: boolean; backsideNote: string; }
export const CARD_DESIGNS: Record<CardDesignId, any> = { "hydrangea-bouquet": { id: "hydrangea-bouquet", title: "Hydrangea", artist: "V", tagline: "W", cardBg: "#fdfbf7" }, "wildflower-meadow": { id: "wildflower-meadow", title: "Wildflower", artist: "P", tagline: "M", cardBg: "#fffdfa" }, "gilded-peony": { id: "gilded-peony", title: "Peony", artist: "A", tagline: "R", cardBg: "#fff9fa" }, "citrus-olive": { id: "citrus-olive", title: "Citrus", artist: "T", tagline: "C", cardBg: "#fffef5" }, "royal-letterpress": { id: "royal-letterpress", title: "Royal", artist: "H", tagline: "L", cardBg: "#faf6ed" }, "champagne-confetti": { id: "champagne-confetti", title: "Champagne", artist: "S", tagline: "F", cardBg: "#fff8fa" } };
export const ENVELOPE_COLORS: Record<EnvelopeColorId, any> = { alabaster: { name: "Alabaster", hex: "#f5efe6", bgClass: "bg-[#f5efe6]", borderClass: "border-[#e3d7c5]" }, "powder-blue": { name: "Blue", hex: "#e2e8f0", bgClass: "bg-[#e2eaf4]", borderClass: "border-[#c4d4e8]" }, "dusty-rose": { name: "Rose", hex: "#fce7ea", bgClass: "bg-[#fae2e6]", borderClass: "border-[#ebc0c8]" }, sage: { name: "Sage", hex: "#e7eee3", bgClass: "bg-[#e5ece1]", borderClass: "border-[#c9d8c3]" }, navy: { name: "Navy", hex: "#1e293b", bgClass: "bg-[#1e293b]", borderClass: "border-[#334155]" }, terracotta: { name: "Terracotta", hex: "#f7e6dc", bgClass: "bg-[#f5ded2]", borderClass: "border-[#e0beac]" } };
export type WebpageTemplateId = "magazine-editorial" | "scrapbook-polaroids" | "party-pop" | "botanical-letter";
export interface BirthdayWishData { recipientName: string; senderName: string; milestone: string; relationshipTag: string; headline: string; date: string; message: string; highlights: string[]; templateId: WebpageTemplateId; photoUrl?: string; audioTheme: "chimes" | "fanfare" | "harp" | "none"; }
