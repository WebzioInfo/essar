"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Mission", href: "#mission" },
    { name: "Why Essar", href: "#why-essar" },
    { name: "Founder", href: "#founder" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-99 flex justify-center pointer-events-none">
      <div
        className={`relative flex items-center gap-8 px-12 py-4 rounded-full pointer-events-auto transition-all duration-800
        
        backdrop-blur-2xl border border-white/20
        bg-[linear-gradient(135deg,rgba(0,60,140,0.18),rgba(0,20,45,0.12))]
        
        shadow-[0_0_40px_rgba(0,90,255,0.33)]
        overflow-hidden
        
        ${scrolled ? "scale-[1.05]" : "scale-100"}
      `}
      >

        {/* Inner Liquid Glow */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_25%_30%,rgba(255,255,255,0.35),rgba(255,255,255,0.03))] mix-blend-overlay pointer-events-none" />

        {/* Liquid Shine sweep */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 -translate-x-full shimmer" />
        </div>

        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="relative z-10 text-[15px] font-medium text-white/85 hover:text-white transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
