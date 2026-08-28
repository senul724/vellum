"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Copy, Mail, MessageCircle, Sparkles, ExternalLink, QrCode } from "lucide-react";
import { BirthdayWishData } from "./types";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishData: BirthdayWishData;
}

export function WebpageShareModal({ isOpen, onClose, wishData }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [showQR, setShowQR] = useState(false);

  // Generate full shareable URL with parameters
  const generateShareUrl = () => {
    if (typeof window === "undefined") return "";
    const url = new URL("/bday", window.location.origin);
    url.searchParams.set("to", wishData.recipientName || "Friend");
    url.searchParams.set("from", wishData.senderName || "");
    url.searchParams.set("tpl", wishData.templateId);
    url.searchParams.set("msg", wishData.message);
    if (wishData.milestone) url.searchParams.set("age", wishData.milestone);
    if (wishData.relationshipTag) url.searchParams.set("tag", wishData.relationshipTag);
    if (wishData.headline) url.searchParams.set("head", wishData.headline);
    if (wishData.date) url.searchParams.set("dt", wishData.date);
    if (wishData.highlights && wishData.highlights.length > 0) {
      url.searchParams.set("hl", JSON.stringify(wishData.highlights));
    }
    url.searchParams.set("mode", "view");
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
      `🎉 Happy Birthday ${wishData.recipientName}! 🎂✨\n\nI built a special celebration webpage just for you!\n\nOpen your birthday experience here:\n${shareUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`🎉 Happy Birthday ${wishData.recipientName}! A bespoke celebration for you ✨`);
    const body = encodeURIComponent(
      `Dear ${wishData.recipientName},\n\nHappy Birthday! I created a bespoke celebration webpage for you.\n\nOpen your birthday page here:\n${shareUrl}\n\n"${wishData.message}"\n\nWith love,\n${wishData.senderName}`
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
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-500 via-rose-500 to-amber-500" />

            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 border border-amber-300 text-xs font-serif font-medium mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Ready to Deliver Webpage</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  Send Celebration Webpage
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  Send this interactive celebration website link to{" "}
                  <span className="text-amber-800 font-bold">{wishData.recipientName || "your friend"}</span>.
                </p>
              </div>

              {/* Direct share buttons */}
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
                  className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-blue-50 hover:bg-blue-100 border border-blue-300 text-blue-800 font-semibold text-xs sm:text-sm transition-all hover:scale-[1.02] cursor-pointer shadow-xs"
                >
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>Email Note</span>
                </button>
              </div>

              {/* Shareable Link */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-700 block">
                  Interactive Birthday Website Link
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
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xs transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
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

              {/* QR and Preview Link */}
              <div className="pt-2 border-t border-stone-200 flex items-center justify-between">
                <a
                  href={shareUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-amber-800 hover:text-amber-950 font-semibold flex items-center gap-1"
                >
                  <span>Open Recipient Webpage in New Tab</span>
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
                    alt="Scan to open birthday website"
                    className="w-36 h-36 rounded-lg"
                  />
                  <p className="text-[11px] text-stone-500">Scan with mobile camera to open webpage</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
