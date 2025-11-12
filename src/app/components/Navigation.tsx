"use client";

import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import GlassSurface from "@/components/GlassSurface";

type NavItem = { name: string; to: string };

export interface ResponsiveNavbarProps {
  logo?: string | StaticImageData;
  logoAlt?: string;
  links?: NavItem[];
}

export default function ResponsiveNavbarTweaked({
  logo = "/logoWhitecrop.png",
  logoAlt = "Company",
  links = [
    { name: "Home", to: "/#home" },
    { name: "About", to: "/#about" },
    { name: "Services", to: "/#services" },
    { name: "Projects", to: "/#projects" },
    { name: "Contact", to: "/#contact" },
  ],
}: ResponsiveNavbarProps) {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  // close on route change / hash change
  useEffect(() => {
    const onRoute = () => setOpen(false);
    window.addEventListener("hashchange", onRoute);
    window.addEventListener("popstate", onRoute);
    return () => {
      window.removeEventListener("hashchange", onRoute);
      window.removeEventListener("popstate", onRoute);
    };
  }, []);

  // shrinking logic (rAF throttled)
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const current = window.scrollY;
          setIsExpanded(current <= lastScrollY);
          setLastScrollY(current);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  // focus trap for mobile menu while open (basic)
  useEffect(() => {
    if (!open || !menuRef.current) return;
    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      if (document.activeElement === last && !e.shiftKey) {
        e.preventDefault();
        first?.focus();
      } else if (document.activeElement === first && e.shiftKey) {
        e.preventDefault();
        last?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    first?.focus();
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  // derived compact state for small visual tweaks
  const compact = !isExpanded && !isHovered && !open;

  // helper: smooth-hash scroll or fallback to normal navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    const isHash = to.startsWith("#") || to.includes("/#");
    if (!isHash) return; // allow default for non-hash
    e.preventDefault();
    const hash = to.split("#").pop() || "";
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // update history without full reload
      history.pushState(
        null,
        "",
        to.startsWith("/") ? to : window.location.pathname.replace(/\/#.*$/, "") + `#${hash}`
      );
    } else {
      // if element not found, fallback to navigate (keeps SPA behavior)
      window.location.hash = `#${hash}`;
    }
    setOpen(false);
  };

  const isActive = (to: string) => {
    // active when pathname matches (ignoring hash) or hash matches
    try {
      const url = new URL(to, window.location.origin);
      if (url.hash) return window.location.hash === url.hash;
      return pathname === url.pathname;
    } catch {
      if (to.startsWith("#")) return window.location.hash === to;
      return pathname === to;
    }
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 pointer-events-none">
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          initial={{ padding: "14px 20px", width: "90vw" }}
          animate={{
            width: isExpanded || isHovered || open ? "90vw" : "500px",
            padding: isExpanded || isHovered || open ? "14px 20px" : "8px 14px",
          }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <GlassSurface
            width="100%"
            height={64}
            borderRadius={9999}
            borderWidth={0.08}
            brightness={48}
            opacity={0.85}
            blur={10}
            saturation={1.6}
            mixBlendMode="normal"
            className={`transition-all duration-300 ${compact ? "py-1" : "py-3"}`}
          >
            <motion.nav
              aria-label="Primary"
              className="flex items-center justify-between gap-4 rounded-full px-4 w-full"
            >
              {/* left: logo with subtle shrink animation */}
              <div className="flex items-center gap-3">
                <Link href="/" className="inline-flex items-center gap-3 no-underline">
                  <motion.span
                    className="relative block overflow-hidden"
                    initial={{ height: 40 }}
                    animate={{ height: isExpanded || isHovered || open ? 40 : 32 }}
                    transition={{ type: "spring", stiffness: 260, damping: 28 }}
                    style={{ width: 160 }}
                  >
                    <Image src={logo} alt={logoAlt} fill style={{ objectFit: "contain" }} />
                  </motion.span>
                </Link>
              </div>

              {/* center: desktop links */}
              <div
                className={`hidden md:flex items-center gap-2 transition-all ${
                  compact ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
                }`}
              >
                {links.map((l) => (
                  <Link
                    key={l.name}
                    href={l.to}
                    // Next's Link passes a native click event to handlers bound to the rendered anchor
                    onClick={(e) => handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, l.to)}
                    className={`px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                      isActive(l.to) ? "bg-blue-600 text-white" : "text-white hover:bg-white/6"
                    }`}
                  >
                    {l.name}
                  </Link>
                ))}
              </div>

              {/* right: actions */}
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className=" sm:inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:brightness-105"
                >
                  Contact
                </a>

                {/* hamburger */}
                <button
                  onClick={() => setOpen((s) => !s)}
                  aria-expanded={open}
                  aria-label={open ? "Close menu" : "Open menu"}
                  className="inline-flex items-center justify-center p-2 rounded-full bg-white/6 text-white md:hidden"
                >
                  {open ? <X size={18} /> : <Menu size={18} />}
                </button>
              </div>
            </motion.nav>

            {/* mobile panel (inside same glass surface so animation feels connected) */}
            <div className="w-full px-4 mt-3 md:hidden">
              <div
                ref={menuRef}
                className={`origin-top-right rounded-2xl bg-black/0 backdrop-blur-md border border-white/0 overflow-hidden transition-all duration-300 shadow-lg ${
                  open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{ transitionProperty: "max-height, opacity" }}
                aria-hidden={!open}
              >
                <div className="p-4 space-y-2">
                  {links.map((l) => (
                    <a
                      key={l.name}
                      href={l.to}
                      onClick={(e) => handleNavClick(e, l.to)}
                      className="block px-3 py-3 rounded-xl text-sm font-medium text-white hover:bg-white/6"
                    >
                      {l.name}
                    </a>
                  ))}

                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                    className="block mt-1 w-full text-center px-4 py-3 rounded-full bg-blue-600 text-white font-semibold"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </GlassSurface>
        </motion.div>
      </div>
    </header>
  );
}
