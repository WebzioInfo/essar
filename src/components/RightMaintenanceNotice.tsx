// components/RightMaintenanceNotice.tsx
"use client";

import React, { useEffect, useState } from "react";
import { X, Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GlassSurface from "@/components/GlassSurface";
import Link from "next/link";

export interface RightMaintenanceNoticeProps {
  title?: string;
  message?: string;
  ctaText?: string;
  ctaHref?: string; // optional normal link
  whatsappNumber?: string; // e.g. "918884677773"
  whatsappPrefill?: string; // optional prefilled message
  persistKey?: string; // localStorage key to remember dismissal
  defaultOpen?: boolean;
  autoHideMs?: number | null; // auto-hide after n ms, null to not auto-hide
  className?: string;
}

export default function RightMaintenanceNotice({
  title = "Maintenance Notice",
  // default message you provided (cleaned up)
  message = "Our website is currently under maintenance. Some pages or details may be temporarily incorrect or unavailable — we apologize for the inconvenience. If you need anything urgent, please contact us.",
  ctaText = "More info",
  ctaHref,
  whatsappNumber,
  whatsappPrefill = "Hello, I saw the maintenance notice and need assistance.",
  persistKey = "site:maintenance:dismissed",
  defaultOpen = true,
  autoHideMs = null,
  className = "",
}: RightMaintenanceNoticeProps) {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  const [dontShowAgain, setDontShowAgain] = useState<boolean>(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(persistKey);
      if (dismissed === "1") setOpen(false);
    } catch {
      /* ignore localStorage errors */
    }
  }, [persistKey]);

  useEffect(() => {
    if (!open) return;
    if (autoHideMs && typeof autoHideMs === "number") {
      const t = setTimeout(() => setOpen(false), autoHideMs);
      return () => clearTimeout(t);
    }
  }, [open, autoHideMs]);

  const handleClose = (persist = false) => {
    setOpen(false);
    if (persist) {
      try {
        localStorage.setItem(persistKey, "1");
      } catch {}
    }
  };

  // build WhatsApp link if number provided (expects international format, e.g. '918884677773')
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
        whatsappPrefill
      )}`
    : null;

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ x: 320, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 320, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28, duration: 0.36 }}
          role="status"
          aria-live="polite"
          className={`pointer-events-auto fixed right-6 top-52 -translate-y-1/2 z-50 md:w-[360px] w-[92vw] ${className}`}
        >
          <GlassSurface
            width="100%"
            height="auto"
            borderRadius={18}
            borderWidth={0.06}
            brightness={48}
            opacity={0.88}
            blur={10}
            saturation={1.3}
            mixBlendMode="normal"
            className="p-3"
          >
            <div className="flex items-start gap-3">
              <div className="flex shrink-0 mt-1">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-600 text-white">
                  <Bell size={18} />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-white truncate">{title}</h4>
                    <p className="text-xs text-gray-200 mt-1 leading-snug">{message}</p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => handleClose(false)}
                      aria-label="Close notification"
                      className="p-1 rounded-full text-gray-200 hover:text-white hover:bg-white/6 transition"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <label className="inline-flex items-center gap-2 text-xs text-gray-300 select-none cursor-pointer">
                      <input
                        type="checkbox"
                        checked={dontShowAgain}
                        onChange={(e) => setDontShowAgain(e.target.checked)}
                        className="w-3 h-3 accent-blue-500"
                      />
                      <span>Don&apos;t show again</span>
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* WhatsApp CTA visible when number provided */}
                    {whatsappHref ? (
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer noopener"
                        onClick={() => {
                          if (dontShowAgain) handleClose(true);
                          else handleClose(false);
                        }}
                        className="text-xs font-medium px-3 py-2 rounded-full bg-green-600 text-white hover:brightness-95 transition"
                        aria-label="Contact on WhatsApp"
                      >
                        WhatsApp
                      </a>
                    ) : null}

                    {/* primary CTA (link or internal) */}
                    {ctaHref ? (
                      ctaHref.startsWith("#") ? (
                        <a
                          href={ctaHref}
                          onClick={() => {
                            if (dontShowAgain) handleClose(true);
                            else handleClose(false);
                          }}
                          className="text-xs font-medium px-3 py-2 rounded-full bg-blue-600 text-white hover:brightness-95 transition"
                        >
                          {ctaText}
                        </a>
                      ) : (
                        <Link
                          href={ctaHref}
                          onClick={() => {
                            if (dontShowAgain) handleClose(true);
                            else handleClose(false);
                          }}
                          className="text-xs font-medium px-3 py-2 rounded-full bg-blue-600 text-white hover:brightness-95 transition"
                        >
                          {ctaText}
                        </Link>
                      )
                    ) : (
                      // fallback OK button
                      <button
                        onClick={() => handleClose(dontShowAgain)}
                        className="text-xs font-medium px-3 py-2 rounded-full bg-blue-600 text-white hover:brightness-95 transition"
                      >
                        OK
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </GlassSurface>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
