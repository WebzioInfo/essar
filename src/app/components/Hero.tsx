// src/app/components/Hero.tsx
"use client";

import GlassButton from "@/components/GlassButton";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Hero() {
  // disable fixed background on small screens for performance/compat
  const [useFixedBg, setUseFixedBg] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // show hero content with a small delay for the enter animation
    const t = window.setTimeout(() => setIsVisible(true), 30);

    if (typeof window === "undefined") return () => clearTimeout(t);

    const mq = window.matchMedia("(max-width: 768px)");

    // handler accepts either the modern MediaQueryListEvent or legacy MediaQueryList
    const onChange = (ev: MediaQueryListEvent | MediaQueryList) => {
      // both types expose `matches`
      const matches = "matches" in ev ? ev.matches : mq.matches;
      setUseFixedBg(!matches);
    };

    // set initial state
    onChange(mq);

    // Modern browsers: addEventListener('change')
    if (typeof mq.addEventListener === "function") {
      // addEventListener expects a listener taking MediaQueryListEvent
      mq.addEventListener("change", onChange as (ev: MediaQueryListEvent) => void);
    } else {
      // Legacy: addListener exists on older implementations
      // Use a typed fallback without `any`
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

  return (
    <div className="relative min-h-screen">
      {/* 1) Fixed background image (fills viewport) */}
      {useFixedBg && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[-100]"
          style={{ willChange: "transform, opacity" }}
        >
          {/* next/image with fill; note style 'position: inherit' so parent fixed/absolute controls placement */}
          <Image
            src="https://images.unsplash.com/photo-1637177937457-27543b0327aa?auto=format&fit=crop&w=2000&q=80"
            alt="Industrial background"
            fill
            sizes="100vw"
            className="object-cover"
            unoptimized
            style={{ position: "absolute", inset: 0 }}
          />
          {/* Optional overlay to darken / tint */}
          <div className="absolute inset-0 bg-slate-900/55" />
        </div>
      )}

      {/* 2) Page content (will scroll above the fixed background) */}
      <main className="relative z-10">
        {/* Hero block (tall) */}
        <section className="min-h-screen flex items-center justify-center text-center px-6">
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
                <GlassButton useGlass variant="primary" size="md" href="#contact" ariaLabel="Get Started">
                  Get Started
                </GlassButton>

                <GlassButton
                  useGlass
                  className="border-0"
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
