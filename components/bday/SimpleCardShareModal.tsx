"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Copy, Mail, MessageCircle, Sparkles, ExternalLink, QrCode } from "lucide-react";
import { SimpleCardData } from "./types";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardData: SimpleCardData;
}

export function SimpleCardShareModal({ isOpen, onClose, cardData }: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const generateShareUrl = () => {
    if (typeof window === "undefined") return "";
    const url = new URL("/bday", window.location.origin);
    url.searchParams.set("to", cardData.recipientName || "Sophia");
    url.searchParams.set("from", cardData.senderName || "Julian");
    url.searchParams.set("card", cardData.designId);
    url.searchParams.set("msg", cardData.message);
    url.searchParams.set("view", "card");
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
      `🎂 Happy Birthday ${cardData.recipientName}! ✨\n\n"${cardData.message}"\n\nOpen your birthday card here:\n${shareUrl}\n\n— Love, ${cardData.senderName}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`🎉 Happy Birthday ${cardData.recipientName}! ✨`);
    const body = encodeURIComponent(
      `Dear ${cardData.recipientName},\n\n"${cardData.message}"\n\nOpen your birthday card here:\n${shareUrl}\n\nWith love,\n${cardData.senderName}`
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
            className="relative z-10 w-full max-w-md rounded-3xl bg-[#fdfbf7] border border-stone-200 text-stone-900 shadow-2xl p-6 sm:p-7 overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-400 via-rose-400 to-amber-500" />

            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-serif font-medium mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Ready to Send</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                  Send Birthday Wish
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Share this card directly with <strong className="text-stone-900">{cardData.recipientName}</strong>.
                </p>
              </div>

              {/* Direct share buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-semibold text-xs transition-all hover:scale-[1.02] cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </button>

                <button
                  onClick={handleEmail}
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-blue-50 hover:bg-blue-100 border border-blue-300 text-blue-800 font-semibold text-xs transition-all hover:scale-[1.02] cursor-pointer shadow-xs"
                >
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>Email</span>
                </button>
              </div>

              {/* Shareable Link */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-700 block">
                  Direct Card Link
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    readOnly
                    value={shareUrl}
                    className="flex-1 bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs text-stone-800 font-mono truncate focus:outline-none select-all shadow-inner"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Bottom links */}
              <div className="pt-2 border-t border-stone-200 flex items-center justify-between">
                <a
                  href={shareUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-amber-800 hover:text-amber-950 font-semibold flex items-center gap-1"
                >
                  <span>Open Recipient Card View</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setShowQR(!showQR)}
                  className="text-xs text-stone-600 hover:text-stone-900 flex items-center gap-1 cursor-pointer font-medium"
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>{showQR ? "Hide QR" : "Show QR"}</span>
                </button>
              </div>

              {showQR && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="p-3 rounded-2xl bg-white border border-stone-200 flex flex-col items-center text-center space-y-1.5 shadow-xs"
                >
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(
                      shareUrl
                    )}`}
                    alt="Scan to open birthday card"
                    className="w-32 h-32 rounded-lg"
                  />
                  <p className="text-[10px] text-stone-500">Scan on phone to view card</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
