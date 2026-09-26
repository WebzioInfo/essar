"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { companyData, trackRecordMetrics } from "@/content/company";

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
          className="relative h-[100svh] min-h-[100vh] w-full flex flex-col justify-center pt-20 pb-8 lg:pt-24 lg:pb-12 bg-black text-white overflow-hidden"
        >
          {/* Background Layer: Full-bleed edge-to-edge with vertical parallax overscan */}
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div
              ref={parallaxBgRef}
              className="absolute -top-24 -bottom-8 inset-x-0 w-full h-[calc(100%+128px)] will-change-transform"
            >
              <Image
                src="/images/hero/bottile.png"
                alt="Packaged Drinking Water Bottling Production Line"
                fill
                priority
                sizes="100vw"
                className="w-full h-full object-cover object-center pointer-events-none"
              />
            </div>
          </div>

          {/* Sleek Black Gradient Overlay for High Contrast & Visual Depth */}
          <div
            className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-black/80 via-black/60 to-black/40 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/70 lg:to-black/35"
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


                <motion.h1 variants={fadeUp} className="heading-hero text-white mb-4 lg:mb-6">
                  Plan to Plant.
                </motion.h1>

                <motion.h2 variants={fadeUp} className="heading-sm text-white/90 font-normal mb-4 lg:mb-6 leading-relaxed max-w-lg">
                  Helping entrepreneurs build packaged drinking water businesses since 2004.
                </motion.h2>

                <motion.p variants={fadeUp} className="text-base text-white/60 font-normal leading-relaxed mb-6 lg:mb-8 max-w-md">
                  Essar Enterprises supports investors, manufacturers and plant owners with planning, licensing, laboratory setup, water quality management and operational guidance.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6 lg:mb-8 w-full">
                  <Link href="/contact" className="px-8 py-4 bg-white text-black font-semibold hover:bg-white/90 transition-colors text-sm rounded-md shadow-lg">
                    Book Strategy Session
                  </Link>
                </motion.div>

                <motion.div variants={fadeUp} className="text-xs text-white/80 tracking-wide flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  <span className="font-semibold text-white">{companyData.yearsOfExperience} Years Experience</span>
                  <span className="opacity-40">•</span>
                  <span>{companyData.metrics.roPlantsServiced.value} RO Plants Serviced</span>
                  <span className="opacity-40">•</span>
                  <span>{companyData.metrics.commercialPlantsSupported.value} Commercial Plants Supported</span>
                  <span className="opacity-40">•</span>
                  <span>South India</span>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SECTION 2: Trust / The Reality */}
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
                We have spent more than 20 years helping entrepreneurs build, revive, and optimize packaged drinking water plants. The reality of this industry is that buying machinery is the easy part. The real challenge is compliance, architecture, and consistent quality control.
              </motion.p>
              <motion.p variants={fadeUp} className="body-lg mb-16 max-w-2xl">
                From licensing and plant design to laboratory setup and operational management, we provide the technical depth required to launch and sustain profitable water manufacturing operations.
              </motion.p>
            </motion.div>

            {/* Track Record Grid (Quiet Luxury / Mature B2B Consulting) */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-16 border-t border-border"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpStagger}
            >
              {trackRecordMetrics.map((metric) => (
                <motion.div
                  key={metric.id}
                  variants={fadeUp}
                  className="flex flex-col justify-between p-6 sm:p-7 rounded-sm bg-background border border-border/70 hover:border-primary/40 transition-colors"
                >
                  <div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-text-secondary/70 block mb-3">
                      {metric.scope}
                    </span>
                    <div className="text-4xl md:text-5xl font-light tracking-tight text-primary mb-2">
                      {metric.value}
                    </div>
                    <div className="text-base font-medium text-primary mb-2">
                      {metric.label}
                    </div>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed pt-3 mt-3 border-t border-border/40">
                    {metric.context}
                  </p>
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
                  className="lg:col-span-7 image-zoom-container"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <div className="w-full aspect-[4/3] relative overflow-hidden bg-background rounded-sm">
                    <Image
                      src="/images/projects/kenby/kenbyimage.jpg"
                      alt="KENBY Project Facility"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="lg:col-span-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="text-xs font-semibold tracking-widest uppercase text-text-secondary mb-3">Turnkey Plant Setup</div>
                  <div className="relative h-14 w-44 mb-4">
                    <Image
                      src="/images/projects/kenby/kenby-Photoroom.png"
                      alt="KENBY Logo"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <div className="text-xs text-text-secondary mb-5 tracking-wide">Eranad Beverages • Kerala</div>
                  <p className="body-lg mb-6 text-text-secondary">
                    A comprehensive packaged drinking water facility established from bare land. Essar delivered factory blueprints, machinery installation coordination, QC lab setup, and regulatory clearance.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-xs px-2.5 py-1 bg-surface text-text-secondary border border-border rounded-sm">Bare-Land to Commissioning</span>
                    <span className="text-xs px-2.5 py-1 bg-surface text-text-secondary border border-border rounded-sm">BIS & FSSAI Approvals</span>
                    <span className="text-xs px-2.5 py-1 bg-surface text-text-secondary border border-border rounded-sm">QC Lab Setup</span>
                  </div>
                  <Link href="/projects/kenby" className="inline-flex items-center gap-2 text-sm font-medium border-b border-primary pb-1 hover:text-text-secondary hover:border-text-secondary transition-colors">
                    Read Case Study <span>→</span>
                  </Link>
                </motion.div>
              </div>

              {/* GANGOTHRI (Editorial Details Left, Image Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <motion.div
                  className="lg:col-span-5 order-2 lg:order-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="text-xs font-semibold tracking-widest uppercase text-text-secondary mb-3">
                    Plant Revival & Management
                  </div>
                  <h3 className="heading-lg mb-2 text-primary">Gangothri</h3>
                  <div className="text-xs text-text-secondary mb-5 tracking-wide">
                    Changarakulam, Kerala • Managed by Essar
                  </div>
                  <p className="body-lg mb-6 text-text-secondary">
                    An existing packaged drinking water business brought back into active commercial production through systematic engineering overhaul, RO membrane modernization, and in-house laboratory setup under Essar direct management.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-xs px-2.5 py-1 bg-surface text-text-secondary border border-border rounded-sm">Plant Revival</span>
                    <span className="text-xs px-2.5 py-1 bg-surface text-text-secondary border border-border rounded-sm">RO Overhaul</span>
                    <span className="text-xs px-2.5 py-1 bg-surface text-text-secondary border border-border rounded-sm">Lab Setup</span>
                    <span className="text-xs px-2.5 py-1 bg-surface text-text-secondary border border-border rounded-sm">Active Operations</span>
                  </div>
                  <Link
                    href="/projects/gangothri"
                    className="inline-flex items-center gap-2 text-sm font-medium border-b border-primary pb-1 hover:text-text-secondary hover:border-text-secondary transition-colors"
                  >
                    Read Case Study <span>→</span>
                  </Link>
                </motion.div>
                <motion.div
                  className="lg:col-span-7 order-1 lg:order-2 image-zoom-container"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <div className="aspect-[4/3] w-full relative overflow-hidden bg-background rounded-sm">
                    <Image
                      src="/images/projects/gangothri/01-gangothri-bottle-can.png"
                      alt="Gangothri Rivus 20L Packaged Water Can"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </motion.div>
              </div>

              {/* INSTAPANI (Editorial Image Left, Details Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <motion.div
                  className="lg:col-span-7 image-zoom-container"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <div className="aspect-[4/3] w-full relative overflow-hidden bg-background rounded-sm">
                    <Image
                      src="/images/projects/instapani/instapani-jar-production.webp"
                      alt="INSTAPANI 20L Production Line"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="lg:col-span-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="text-xs font-semibold tracking-widest uppercase text-text-secondary mb-3">Turnkey Setup</div>
                  <h3 className="heading-lg mb-2 text-primary">INSTAPANI</h3>
                  <div className="text-xs text-text-secondary mb-5 tracking-wide">Instapani Beverages • South India</div>
                  <p className="body-lg mb-6 text-text-secondary">
                    An advanced production floor and high-tech laboratory integration for Instapani Beverages, ensuring uncompromising daily quality control and reliable commercial distribution.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="text-xs px-2.5 py-1 bg-surface text-text-secondary border border-border rounded-sm">Automated Bottling Line</span>
                    <span className="text-xs px-2.5 py-1 bg-surface text-text-secondary border border-border rounded-sm">In-House QC Lab</span>
                    <span className="text-xs px-2.5 py-1 bg-surface text-text-secondary border border-border rounded-sm">Packaging Integration</span>
                  </div>
                  <Link href="/projects/instapani" className="inline-flex items-center gap-2 text-sm font-medium border-b border-primary pb-1 hover:text-text-secondary hover:border-text-secondary transition-colors">
                    Read Case Study <span>→</span>
                  </Link>
                </motion.div>
              </div>

            </div>

            <div className="mt-20 pt-12 border-t border-border flex justify-center">
              <Link
                href="/projects"
                className="px-8 py-4 bg-primary text-background font-medium hover:bg-secondary transition-colors text-sm"
              >
                View All Projects &amp; Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION: Regional Presence & Offices */}
        <section className="py-24 md:py-32 bg-background border-b border-border">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
            <motion.div
              className="max-w-3xl mb-16"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpStagger}
            >
              <motion.div variants={fadeUp} className="mb-4">
                <span className="text-xs font-semibold tracking-widest uppercase text-text-secondary border-b border-border pb-1">
                  Regional Presence
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="heading-xl text-primary mb-4">
                Our Offices Across South India
              </motion.h2>
              <motion.p variants={fadeUp} className="body-lg text-text-secondary leading-relaxed">
                With operational and technical consulting hubs in Kerala, Karnataka, and Tamil Nadu, Essar Enterprises provides direct on-site technical inspection and turnkey plant engineering.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpStagger}
            >
              {companyData.offices.map((office) => (
                <motion.div
                  key={office.id}
                  variants={fadeUp}
                  className="p-8 bg-surface border border-border rounded-2xl flex flex-col justify-between hover:border-primary/40 transition-colors shadow-xs group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="px-3 py-1 bg-white border border-border text-xs font-semibold uppercase tracking-wider text-primary rounded-full">
                        {office.state}
                      </span>
                      <span className="text-xs text-text-secondary font-medium">{office.city}</span>
                    </div>

                    <h3 className="font-semibold text-lg text-primary mb-2 group-hover:text-accent transition-colors">
                      {office.name}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6">
                      {office.address} <br />
                      {office.city} – {office.pincode}
                    </p>
                  </div>


                </motion.div>
              ))}
            </motion.div>
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
                <div className="aspect-[3/4] bg-surface w-full max-w-md mx-auto lg:mx-0 relative overflow-hidden">
                  <Image
                    src="/images/founder/founder-new.jpeg"
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
