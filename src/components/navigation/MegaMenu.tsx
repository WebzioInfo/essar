"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

export default function MegaMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Scroll tracking for Island Navigation
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Determine if scrolled down enough to trigger the glass effect
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide navbar if scrolling down and passed 150px
    if (latest > previous && latest > 150) {
      setHidden(true);
      setActiveDropdown(null); // Close dropdowns on hide
    } else {
      setHidden(false);
    }
  });

  // Mega Menu Content
  const menuItems = [
    {
      label: "Services",
      href: "/services",
      content: (
        <div className="grid grid-cols-2 gap-8 p-6 w-[500px]">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-4">Core Offerings</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/services/planning" className="group flex items-center justify-between text-sm hover:text-primary transition-colors text-text-secondary">
                  <span>Planning & Feasibility</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services/architecture" className="group flex items-center justify-between text-sm hover:text-primary transition-colors text-text-secondary">
                  <span>Plant Architecture</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services/licensing" className="group flex items-center justify-between text-sm hover:text-primary transition-colors text-text-secondary">
                  <span>BIS & FSSAI Licensing</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services/laboratory" className="group flex items-center justify-between text-sm hover:text-primary transition-colors text-text-secondary">
                  <span>Laboratory Setup</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-surface rounded-md p-5 flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('/images/services/laboratory-setup.webp')] bg-cover bg-center opacity-10 filter grayscale group-hover:scale-105 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="text-sm font-semibold text-primary mb-1">Turnkey Execution</div>
              <p className="text-xs text-text-secondary mb-4 leading-relaxed">End-to-end plant establishment from bare land to first bottle.</p>
              <Link href="/contact" className="text-xs font-medium text-primary hover:text-text-secondary transition-colors underline underline-offset-4">Learn More</Link>
            </div>
          </div>
        </div>
      )
    },
    {
      label: "Projects",
      href: "/projects",
      content: (
        <div className="flex p-4 w-[400px] gap-2">
          <Link href="/projects#kenby" className="flex-1 group relative rounded-md overflow-hidden bg-surface p-4 border border-transparent hover:border-border transition-colors">
            <div className="absolute inset-0 bg-[url('/images/projects/kenby/kenby-logo.webp')] bg-cover bg-center opacity-10 filter grayscale group-hover:opacity-30 transition-opacity"></div>
            <div className="relative z-10">
              <h4 className="text-sm font-semibold text-primary mb-1 group-hover:translate-x-1 transition-transform">KENBY</h4>
              <p className="text-xs text-text-secondary">Turnkey Setup</p>
            </div>
          </Link>
          <Link href="/projects#instapani" className="flex-1 group relative rounded-md overflow-hidden bg-surface p-4 border border-transparent hover:border-border transition-colors">
            <div className="absolute inset-0 bg-[url('/images/projects/instapani/instapani-brand-01.webp')] bg-cover bg-center opacity-10 filter grayscale group-hover:opacity-30 transition-opacity"></div>
            <div className="relative z-10">
              <h4 className="text-sm font-semibold text-primary mb-1 group-hover:translate-x-1 transition-transform">INSTAPANI</h4>
              <p className="text-xs text-text-secondary">Facility Expansion</p>
            </div>
          </Link>
        </div>
      )
    }
  ];

  return (
    <>
      {/* 
        ISLAND NAVIGATION (Desktop & Tablet)
        Fixed, detached pill shape.
      */}
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-150%", opacity: 0 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-[100] flex justify-center pointer-events-none px-4"
      >
        <motion.div 
          className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl rounded-full px-6 py-3 transition-all duration-500 ease-out ${
            isScrolled 
              ? "bg-background/80 backdrop-blur-xl border border-border/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)]" 
              : "bg-transparent border border-transparent"
          }`}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center h-8 w-32" onClick={() => setActiveDropdown(null)}>
            <Image 
              src="/logos/logo-icon.png" 
              alt="Essar Enterprises" 
              fill 
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Links (Center) */}
          <div className="hidden md:flex items-center space-x-1 relative">
            {menuItems.map((item) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
              >
                <Link 
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors flex items-center gap-1 rounded-full hover:bg-surface"
                >
                  {item.label}
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                </Link>
                
                {/* Mega Menu Dropdown Panel */}
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="bg-background/95 backdrop-blur-2xl border border-border shadow-2xl rounded-2xl overflow-hidden relative">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            <Link 
              href="/about"
              className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors rounded-full hover:bg-surface"
              onMouseEnter={() => setActiveDropdown(null)}
            >
              About
            </Link>
          </div>

          {/* CTA Right */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/contact" 
              className="px-5 py-2.5 bg-primary text-background text-xs font-semibold tracking-wide rounded-full hover:bg-secondary transition-colors"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-[110] p-2 -mr-2 text-primary"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.nav>

      {/* 
        PREMIUM MOBILE OVERLAY 
      */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[120] bg-background flex flex-col"
          >
            {/* Overlay Header */}
            <div className="flex items-center justify-between px-8 py-8">
              <Link href="/" className="relative h-8 w-32" onClick={() => setMobileMenuOpen(false)}>
                <Image 
                  src="/logos/logo-icon.png" 
                  alt="Essar Enterprises" 
                  fill 
                  className="object-contain object-left"
                />
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 bg-surface rounded-full text-primary hover:bg-border transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Overlay Content */}
            <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 pb-24 gap-8">
              <nav className="flex flex-col gap-6">
                {[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: "Projects", href: "/projects" },
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" }
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  >
                    <Link 
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-4xl font-medium text-primary hover:text-text-secondary transition-colors block"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div 
                className="pt-12 mt-12 border-t border-border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-xs font-semibold tracking-widest uppercase text-text-secondary mb-4">Start A Project</div>
                <Link 
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)} 
                  className="inline-flex items-center justify-center w-full py-4 bg-primary text-background font-medium rounded-full"
                >
                  Book Strategy Session
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
