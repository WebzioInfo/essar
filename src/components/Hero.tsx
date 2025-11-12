"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <Image
    src="https://images.unsplash.com/photo-1637177937457-27543b0327aa?auto=format&fit=crop&w=2000&q=80"
    alt="Industrial water treatment facility"
    fill
    className="object-cover opacity-60"
    priority
    unoptimized
  />
        {/* Light Overlay (fixed to allow image visibility) */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-950/40 via-slate-900/50 to-slate-800/40" />
      </div>

      {/* Metallic Glow Accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[550px] h-[550px] bg-blue-400/15 blur-[150px] rounded-full" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 max-w-7xl mx-auto transition-all duration-1200 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
      >
        {/* Badge */}
       

        {/* Heading */}
        <h1 className="text-white font-bold text-5xl md:text-7xl leading-tight max-w-5xl mx-auto mb-8">
          Building Trust, Profitability & Success{" "}
          <span className="bg-linear-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            Since 2004
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-14">
          Complete packaged drinking water plant solutions across Kerala & Karnataka —
          building future-ready businesses that stand strong.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <a
            href="#contact"
            className="px-10 py-4 rounded-full font-semibold text-white bg-blue-600 hover:bg-blue-500 
            transition-all duration-300 shadow-[0_0_25px_#1d4ed8] hover:shadow-[0_0_45px_#3b82f6]"
          >
            Get Started
          </a>

          <a
            href="#services"
            className="px-10 py-4 rounded-full font-semibold text-gray-200 border border-white/15 
            backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            Explore Services
          </a>
        </div>

        
      </div>
    </section>
  );
}
