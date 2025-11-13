// src/app/components/Hero.tsx
"use client";

import GlassButton from "@/components/GlassButton";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const [useFixedBg, setUseFixedBg] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const t = window.setTimeout(() => setIsVisible(true), 30);
    if (typeof window === "undefined") return () => clearTimeout(t);

    const mq = window.matchMedia("(max-width: 768px)");

    const onChange = (ev: MediaQueryListEvent | MediaQueryList) => {
      const matches = "matches" in ev ? ev.matches : mq.matches;
      // disable FIXED background on small screens, but we will render a non-fixed fallback
      setUseFixedBg(!matches);
    };

    onChange(mq);

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", onChange as (ev: MediaQueryListEvent) => void);
    } else {
      const mqLegacy = mq as MediaQueryList & {
        addListener?: (cb: (mql: MediaQueryList) => void) => void;
      };
      mqLegacy.addListener?.((mql) => onChange(mql));
    }

    return () => {
      clearTimeout(t);
      if (typeof mq.removeEventListener === "function") {
        mq.removeEventListener("change", onChange as (ev: MediaQueryListEvent) => void);
      } else {
        const mqLegacy = mq as MediaQueryList & {
          removeListener?: (cb: (mql: MediaQueryList) => void) => void;
        };
        mqLegacy.removeListener?.((mql) => onChange(mql));
      }
    };
  }, []);

  const bgSrc =
    "https://images.unsplash.com/photo-1637177937457-27543b0327aa?auto=format&fit=crop&w=2000&q=80";

  return (
    <div className="relative min-h-screen">
      {/* 1) Fixed background image (fills viewport) - shown on large screens */}
      {useFixedBg && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-50"
          style={{ willChange: "transform, opacity" }}
        >
          <Image
            src={bgSrc}
            alt="Industrial background"
            fill
            sizes="100vw"
            className="object-cover"
            unoptimized
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="absolute inset-0 bg-slate-900/55" />
        </div>
      )}

      {/* 1b) Non-fixed background fallback (for small screens) */}
      {!useFixedBg && (
        // place it inside the hero wrapper so it scrolls with the page
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-50">
          <Image
            src={bgSrc}
            alt="Industrial background"
            fill
            sizes="100vw"
            className="object-cover"
            unoptimized
            style={{ position: "absolute", inset: 0 }}
          />
          <div className="absolute inset-0 bg-slate-900/55" />
        </div>
      )}

      {/* 2) Page content (will scroll above the background) */}
      <main className="relative z-10">
        <section className="min-h-screen flex items-center justify-center text-center px-6 relative">
          <div
            className={`relative z-10 text-center px-6 max-w-7xl mx-auto transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h1 className="text-white font-bold text-5xl md:text-7xl leading-tight max-w-5xl mx-auto mb-8">
              Building Trust, Profitability &amp; Success{" "}
              <span className="bg-linear-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Since 2004
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-14">
              Complete packaged drinking water plant solutions across Kerala &amp; Karnataka — building future-ready
              businesses that stand strong.
            </p>

            <div className="flex justify-center">
              <div className="w-full max-w-3xl flex flex-col sm:flex-row items-center justify-center gap-5">
                <GlassButton 
                useGlass
                height={70}
              variant="primary" size="md" 
              className="flex items-center"
              href="#contact" ariaLabel="Get Started">
                  Get Started
                  
                </GlassButton>

                <GlassButton
                  useGlass
                  height={70}
                  className="border-0 flex items-center"
                  variant="ghost"
                  size="md"
                  href="#services"
                  ariaLabel="Explore Services"
                >
                  Explore Services
                </GlassButton>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
