"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";

// --- Subtle Motion Variants (McKinsey / Apple style) ---

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const fadeUpStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export default function HomePageClient() {
  const [loading, setLoading] = useState(true);

  // Parallax background refs
  const heroSectionRef = useRef<HTMLElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure video is completely static (paused at 0s, no autoplay)
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }, []);

  // Subtle scroll parallax effect on background visual
  useEffect(() => {
    let rafId: number | null = null;

    const updateParallax = () => {
      rafId = null;
      if (!heroSectionRef.current || !parallaxBgRef.current) return;

      // Respect prefers-reduced-motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        parallaxBgRef.current.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      const scrollY = window.scrollY;
      const heroHeight = heroSectionRef.current.offsetHeight || 800;

      // Skip calculation if hero is past viewport
      if (scrollY > heroHeight) return;

      const isMobile = window.innerWidth < 768;
      // Noticeable, controlled parallax: ~80px on desktop, ~40px on mobile (~3x previous subtle values)
      const parallaxDistance = isMobile ? 40 : 80;
      const scrollProgress = Math.min(1, Math.max(0, scrollY / heroHeight));
      const targetOffset = scrollProgress * parallaxDistance;

      parallaxBgRef.current.style.transform = `translate3d(0, ${targetOffset.toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial call
    updateParallax();

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Subtle Intro Sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Calm Intro Sequence */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center pointer-events-none"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image src="/logos/logo-icon.png" alt="Essar Enterprises" width={160} height={48} className="opacity-80" priority />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col min-h-screen bg-background relative z-0">

        {/* SECTION 1: Editorial Hero with Exact Viewport Alignment & Subtle Parallax Background */}
        <section
          ref={heroSectionRef}
          className="relative h-[100svh] min-h-[100vh] w-full flex flex-col justify-center pt-20 pb-8 lg:pt-24 lg:pb-12 bg-background text-primary overflow-hidden"
        >
          {/* Background Layer: Full-bleed edge-to-edge with vertical parallax overscan */}
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div
              ref={parallaxBgRef}
              className="absolute -top-24 -bottom-8 inset-x-0 w-full h-[calc(100%+128px)] will-change-transform"
            >
              <video
                ref={videoRef}
                src="/videos/hero/hero-factory-loop.mp4"
                poster="/images/hero/hero-water-factory.webp"
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover object-center pointer-events-none"
              />
            </div>
          </div>

          {/* Subtle Gradient / Fade Overlay for Text Readability */}
          <div
            className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-white/90 via-white/60 to-white/20 lg:bg-gradient-to-r lg:from-white/95 lg:via-white/60 lg:to-transparent"
            aria-hidden="true"
          />

          <div className="max-w-[1400px] mx-auto px-6 sm:px-12 w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

              {/* Content Left */}
              <motion.div
                className="lg:col-span-7 flex flex-col items-start"
                variants={fadeUpStagger}
                initial="hidden"
                animate={!loading ? "show" : "hidden"}
              >
                <motion.div variants={fadeUp} className="mb-4 lg:mb-6">
                  <span className="text-xs font-semibold tracking-widest uppercase text-text-secondary border-b border-border pb-1">
                    Water Business Consultants
                  </span>
                </motion.div>

                <motion.h1 variants={fadeUp} className="heading-hero text-primary mb-4 lg:mb-6">
                  Plan to Plant.
                </motion.h1>

                <motion.h2 variants={fadeUp} className="heading-sm text-text-secondary font-normal mb-4 lg:mb-6 leading-relaxed max-w-lg">
                  Helping entrepreneurs build packaged drinking water businesses since 2004.
                </motion.h2>

                <motion.p variants={fadeUp} className="body-lg text-text-secondary leading-relaxed mb-6 lg:mb-8 max-w-md">
                  Essar Enterprises supports investors, manufacturers and plant owners with planning, licensing, laboratory setup, water quality management and operational guidance.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6 lg:mb-8 w-full">
                  <Link href="/contact" className="px-8 py-4 bg-primary text-background font-medium hover:bg-secondary transition-colors text-sm">
                    Book Strategy Session
                  </Link>
                </motion.div>

                <motion.div variants={fadeUp} className="text-xs text-text-secondary tracking-wide flex flex-wrap gap-x-2 gap-y-1">
                  <span className="font-medium text-primary">20+ Years Experience</span>
                  <span className="opacity-40">•</span>
                  <span>50+ Companies Supported</span>
                  <span className="opacity-40">•</span>
                  <span>South India</span>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SECTION 2: Trust / The Reality (Humanized Copy) */}
        <section className="py-24 md:py-32 bg-surface">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
            <motion.div
              className="max-w-4xl"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpStagger}
            >
              <motion.h2 variants={fadeUp} className="heading-xl mb-12">
                We build plants that run.
              </motion.h2>
              <motion.p variants={fadeUp} className="body-xl mb-8">
                We have spent more than 20 years helping entrepreneurs build and improve packaged drinking water plants. The reality of this industry is that buying machinery is the easy part. The real challenge is compliance, architecture, and consistent quality control.
              </motion.p>
              <motion.p variants={fadeUp} className="body-lg mb-16 max-w-2xl">
                From licensing and plant design to laboratory setup and production support, we help you launch your bottled water business with confidence. We don&apos;t make unrealistic promises; we engineer practical, profitable solutions.
              </motion.p>
            </motion.div>

            {/* Subtle Counters */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-16 border-t border-border"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUpStagger}
            >
              {[
                { end: 20, suffix: "+", label: "Years Experience" },
                { end: 50, suffix: "+", label: "Companies Supported" },
                { end: 6, suffix: " Months", label: "To First Bottle" },
                { end: 100, suffix: "%", label: "BIS Compliance Rate" }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex flex-col">
                  <div className="text-4xl md:text-5xl font-light mb-3 text-primary">
                    <CountUp end={item.end} duration={2} useEasing={true} enableScrollSpy scrollSpyOnce />
                    <span>{item.suffix}</span>
                  </div>
                  <div className="text-sm text-text-secondary">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: The Method (Calm Storytelling) */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-32">
                  <h2 className="heading-xl mb-6">Our Process.</h2>
                  <p className="body-lg max-w-sm">
                    A systematic approach to plant establishment, designed to mitigate risk and ensure compliance before capital is deployed.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8 flex flex-col gap-16 md:gap-24">
                {[
                  { title: "Planning & Feasibility", desc: "We begin with capital allocation and regulatory pathway mapping, ensuring your location and budget align with industry realities." },
                  { title: "Plant Architecture", desc: "Precision civil layouts and production flow engineering. We design the space to maximize efficiency and meet strict hygiene standards." },
                  { title: "Execution & Build", desc: "Machinery selection based on actual needs, not sales quotas. We oversee the piping architecture and cleanroom construction." },
                  { title: "Laboratory Setup", desc: "We build fully equipped water testing laboratories and train your microbiologists in daily quality control protocols." },
                  { title: "Licensing & Launch", desc: "We guide you through the complex BIS and FSSAI licensing audits, staying with you until the first bottle rolls off the line." }
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    className="group border-l border-border pl-8 md:pl-12"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-sm font-medium text-text-secondary mb-4">Phase 0{idx + 1}</div>
                    <h3 className="heading-md mb-4 text-primary group-hover:text-accent transition-colors">{step.title}</h3>
                    <p className="body-lg max-w-xl">{step.desc}</p>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: Editorial Project Showcase */}
        <section id="projects" className="py-24 md:py-32 bg-surface-alt">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
            <motion.div
              className="mb-20 md:mb-32"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="heading-xl mb-6">Selected Work.</h2>
              <p className="body-lg max-w-xl">
                We prefer our results to speak for themselves. Below are recent operational facilities we have established across South India.
              </p>
            </motion.div>

            <div className="flex flex-col gap-24 md:gap-40">

              {/* KENBY (Editorial Image Left) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <motion.div
                  className="lg:col-span-8 image-zoom-container"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <div className="w-full max-w-full aspect-[9/16] lg:w-150 lg:h-150 lg:aspect-auto relative overflow-hidden bg-background">
                    <Image
                      src="/images/projects/kenby/kenbyimage.jpg"
                      alt="KENBY Project"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 70vw"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="lg:col-span-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="text-xs font-semibold tracking-widest uppercase text-text-secondary mb-4">Facility Expansion</div>
                  <div className="relative h-16 w-48 mb-6">
                    <Image
                      src="/images/projects/kenby/kenby-Photoroom.png"
                      alt="KENBY Logo"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <p className="body-lg mb-8">
                    A comprehensive packaged drinking water facility established for Eranad Beverages. We handled everything from the initial civil design to final regulatory clearance.
                  </p>
                  <Link href="/projects" className="text-sm font-medium border-b border-primary pb-1 hover:text-text-secondary hover:border-text-secondary transition-colors">
                    View Details
                  </Link>
                </motion.div>
              </div>

              {/* INSTAPANI (Editorial Image Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <motion.div
                  className="lg:col-span-4 order-2 lg:order-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="text-xs font-semibold tracking-widest uppercase text-text-secondary mb-4">Turnkey Setup</div>
                  <h3 className="heading-lg mb-6 text-primary">INSTAPANI</h3>
                  <p className="body-lg mb-8">
                    An advanced production floor and high-tech laboratory integration for Instapani Beverages, ensuring uncompromising daily quality control.
                  </p>
                  <Link href="/projects" className="text-sm font-medium border-b border-primary pb-1 hover:text-text-secondary hover:border-text-secondary transition-colors">
                    View Details
                  </Link>
                </motion.div>
                <motion.div
                  className="lg:col-span-8 order-1 lg:order-2 image-zoom-container"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <div className="aspect-[16/9] w-full relative overflow-hidden bg-background">
                    <Image
                      src="/images/projects/instapani/instapani-jar-production.webp"
                      alt="INSTAPANI Project"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 70vw"
                    />
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 5: The Consultant / Founder */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

              <motion.div
                className="lg:col-span-5 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="aspect-square bg-surface w-full max-w-md mx-auto lg:mx-0 relative overflow-hidden">
                  <Image
                    src="/images/founder/founder-portrait.webp"
                    alt="Essar Director"
                    fill
                    className="object-cover filter grayscale contrast-125"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </motion.div>

              <motion.div
                className="lg:col-span-7"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUpStagger}
              >
                <motion.div variants={fadeUp} className="w-12 h-px bg-primary mb-12"></motion.div>
                <motion.h2 variants={fadeUp} className="heading-md leading-relaxed mb-8 text-primary max-w-2xl">
                  &quot;The water industry requires absolute precision. We don&apos;t just sell you equipment; we architect your operations to ensure you stay compliant, profitable, and focused on growth.&quot;
                </motion.h2>
                <motion.div variants={fadeUp}>
                  <div className="text-sm font-semibold text-primary">Director</div>
                  <div className="text-sm text-text-secondary">Essar Enterprises</div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SECTION 6: Professional CTA */}
        <section className="py-32 bg-primary text-background text-center">
          <motion.div
            className="max-w-[800px] mx-auto px-6 sm:px-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-xl mb-8">Discuss Your Project.</h2>
            <p className="body-lg text-surface-alt/80 mb-12 max-w-xl mx-auto">
              Whether you are in the initial planning phase or need assistance upgrading an existing facility, we are here to provide expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link href="/contact" className="px-8 py-4 bg-background text-primary font-medium hover:bg-surface-alt transition-colors text-sm">
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </>
  );
}
