"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Copy, Mail, MessageCircle, Sparkles, ExternalLink, QrCode } from "lucide-react";
import { BirthdayCardSuite } from "./types";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardData: BirthdayCardSuite;
}

export function PaperlessShareModal({ isOpen, onClose, cardData }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const generateShareUrl = () => {
    if (typeof window === "undefined") return "";
    const url = new URL("/bday", window.location.origin);
    url.searchParams.set("to", cardData.recipientName || "Sophia");
    url.searchParams.set("from", cardData.senderName || "Julian");
    url.searchParams.set("dsn", cardData.designId);
    url.searchParams.set("greet", cardData.headerGreeting);
    url.searchParams.set("age", cardData.milestoneAge);
    url.searchParams.set("dt", cardData.eventDate);
    url.searchParams.set("loc", cardData.locationWish);
    url.searchParams.set("msg", cardData.personalMessage);
    url.searchParams.set("env", cardData.envelopeColor);
    url.searchParams.set("liner", cardData.envelopeLiner);
    url.searchParams.set("mode", "recipient");
    return url.toString();
  };

  const shareUrl = generateShareUrl();

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy link", err);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `✨ You're invited to celebrate ${cardData.recipientName}'s Birthday! 🎂🌸\n\nOpen your bespoke invitation suite here:\n${shareUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`🌸 You're Invited: Celebrating ${cardData.recipientName}'s Birthday ✨`);
    const body = encodeURIComponent(
      `Dear Guest,\n\nPlease join us in celebrating ${cardData.recipientName}'s ${cardData.milestoneAge}!\n\nOpen your digital card suite here:\n${shareUrl}\n\n${cardData.eventDate}\n${cardData.locationWish}\n\nWith love,\n${cardData.senderName}`
    );
    window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs"
            onClick={onClose}
          />

          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 15 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="relative z-10 w-full max-w-lg rounded-3xl bg-[#fdfbf7] border border-stone-200 text-stone-900 shadow-2xl p-6 sm:p-8 overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-400 via-amber-400 to-indigo-500" />

            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-900 border border-indigo-200 text-xs font-serif font-medium mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Ready to Send</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  Deliver Card Suite
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Send this digital invitation suite for{" "}
                  <span className="text-indigo-950 font-bold">{cardData.recipientName || "your guest"}</span>.
                </p>
              </div>

              {/* Direct Share Options */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-semibold text-xs sm:text-sm transition-all hover:scale-[1.02] cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </button>

                <button
                  onClick={handleEmail}
                  className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-300 text-indigo-800 font-semibold text-xs sm:text-sm transition-all hover:scale-[1.02] cursor-pointer shadow-xs"
                >
                  <Mail className="w-4 h-4 text-indigo-600" />
                  <span>Email Suite</span>
                </button>
              </div>

              {/* Shareable Link Box */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-700 block">
                  Shareable Card Link (Opens recipient unboxing experience)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value={shareUrl}
                    className="flex-1 bg-white border border-stone-300 rounded-xl px-3 py-2.5 text-xs text-stone-800 font-mono truncate focus:outline-none select-all shadow-inner"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Preview Link */}
              <div className="pt-2 border-t border-stone-200 flex items-center justify-between">
                <a
                  href={shareUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-indigo-800 hover:text-indigo-950 font-semibold flex items-center gap-1"
                >
                  <span>Open Full Recipient View in New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setShowQR(!showQR)}
                  className="text-xs text-stone-600 hover:text-stone-900 flex items-center gap-1 cursor-pointer font-medium"
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>{showQR ? "Hide QR" : "Show QR Code"}</span>
                </button>
              </div>

              {showQR && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="p-4 rounded-2xl bg-white border border-stone-200 flex flex-col items-center text-center space-y-2 shadow-xs"
                >
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
                      shareUrl
                    )}`}
                    alt="Scan to open digital invitation"
                    className="w-36 h-36 rounded-lg"
                  />
                  <p className="text-[11px] text-stone-500">Scan to open on smartphone</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
