"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GlassSurface from "@/components/GlassSurface";
import { usePathname } from "next/navigation";
import GlassButton from "@/components/GlassButton";

type NavItem = { name: string; to: string };

export default function ResponsiveNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();

  const links: NavItem[] = [
    { name: "About", to: "/#about" },
    { name: "Services", to: "/#services" },
    { name: "Mission", to: "/#mission" },
    { name: "Contact", to: "/#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [clientHash, setClientHash] = useState<string>("");
  const [clientPathname, setClientPathname] = useState<string | null>(null);

  useEffect(() => {
    setClientHash(window.location.hash || "");
    setClientPathname(window.location.pathname || null);

    const onHash = () => setClientHash(window.location.hash || "");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (to.includes("#")) {
      e.preventDefault();
      const hash = to.split("#").pop() || "";
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
      setClientHash(`#${hash}`);
    }
  };

  const isActive = (to: string) => {
    try {
      const parsed = new URL(
        to,
        typeof window !== "undefined" ? window.location.origin : "http://example.com"
      );

      const activePath = clientPathname ?? pathname;
      if (activePath && activePath === parsed.pathname) return true;
      if (clientHash && clientHash === parsed.hash) return true;

      return pathname === parsed.pathname;
    } catch {
      return false;
    }
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-9999 transition-transform duration-500 ${
        scrolled ? "scale-95" : "scale-100"
      }`}
      aria-label="Primary navigation"
    >
      {/* JSON-LD — allowed inside components */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Essar Enterprises",
            url: "https://essarenterprises.co.in",
            logo: "https://essarenterprises.co.in/logo.png",
            sameAs: ["https://www.instagram.com/essar.enterprises"],
          }),
        }}
      />

      <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <GlassSurface
          width="90vw"
          height={scrolled ? 56 : 68}
          borderRadius={9999}
          brightness={48}
          opacity={0.9}
          blur={14}
          saturation={1.5}
          mixBlendMode="overlay"
          className="px-8 md:px-12 py-9 shadow-lg"
        >
          <nav className="flex justify-between items-center w-full" role="navigation">
            {/* LOGO (SEO Optimized alt text) */}
            <Link
              href="/"
              aria-label="Essar Enterprises home page"
              className="relative w-28 h-10 md:w-40 md:h-12"
            >
              <Image
                src="/logoWhitecrop.png"
                alt="Essar Enterprises logo"
                fill
                className="object-contain"
                priority
              />
            </Link>

            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {links.map((l) => (
                <Link
                  key={l.name}
                  href={l.to}
                  onClick={(e) => handleNavClick(e, l.to)}
                  className={`px-3 py-2 text-sm font-medium rounded-full transition-all ${
                    isActive(l.to) ? "text-white" : "text-white hover:bg-white/10"
                  }`}
                  aria-current={isActive(l.to) ? "page" : undefined}
                >
                  {l.name}
                </Link>
              ))}

              {/* CTA BUTTON */}
              <Link
                href="/quotation"
                aria-label="Get a project quotation"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                bg-linear-to-r from-blue-600 to-blue-700 text-white text-sm md:text-base 
                font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 
                transition-all duration-300 ease-out"
              >
                Get a Quote
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <motion.div className="md:hidden" initial={false}>
              <GlassButton
                useGlass
                width={50}
                height={50}
                variant="ghost"
                size="sm"
                onClick={() => setOpen(!open)}
                className="md:hidden flex justify-center align-middle items-center"
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </GlassButton>
            </motion.div>
          </nav>
        </GlassSurface>

        {/* MOBILE POPUP MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-3"
              aria-label="Mobile navigation menu"
            >
              <GlassSurface
                width="90vw"
                height="auto"
                borderRadius={25}
                brightness={48}
                opacity={0.95}
                blur={99}
                saturation={1.5}
                className="px-4 py-4"
              >
                <div className="flex flex-col w-full gap-2">
                  {links.map((l) => (
                    <a
                      key={l.name}
                      href={l.to}
                      onClick={(e) => handleNavClick(e, l.to)}
                      className="block px-4 py-3 w-full rounded-xl text-sm font-medium text-white hover:bg-white/10"
                      role="menuitem"
                    >
                      {l.name}
                    </a>
                  ))}

                  <a
                    href="/quotation"
                    onClick={(e) => handleNavClick(e, "/quotation")}
                    className="block mt-3 w-full text-center px-4 py-3 rounded-full bg-blue-600 text-white font-semibold hover:brightness-110"
                    role="menuitem"
                  >
                    Get a Quote
                  </a>
                </div>
              </GlassSurface>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
