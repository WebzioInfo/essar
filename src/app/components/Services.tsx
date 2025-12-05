"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Buildings,
  ClipboardText,
  UsersThree,
  MegaphoneSimple,
  Wrench,
} from "@phosphor-icons/react";
import GlassButton from "@/components/GlassButton";

// Services data with SEO keywords added
const services = [
  {
    title: "RO Plant Installation & Design",
    desc: "Complete turnkey RO plant setup including design, layout, and installation for optimal performance.",
    Icon: Buildings,
    features: ["Custom Plant Layouts", "Automatic & Semi-Automatic Systems", "Turnkey Installation"],
    gradient: "from-blue-600 to-blue-400",
    seoKeywords: "RO plant setup, water plant design, turnkey RO plant",
  },
  {
    title: "Packaged Drinking Water Plant Consultancy",
    desc: "Expert guidance for starting and scaling your packaged water business.",
    Icon: ClipboardText,
    features: ["Business Planning", "Plant Capacity Analysis", "Market Research"],
    gradient: "from-blue-500 to-cyan-400",
    seoKeywords: "water plant consultancy, packaged water business guidance, plant setup advice",
  },
  {
    title: "Laboratory Setup & Water Testing",
    desc: "Complete water testing lab setup to ensure quality and compliance with regulatory standards.",
    Icon: UsersThree,
    features: ["On-site Lab Installation", "Quality Assurance Testing", "Daily Water Analysis"],
    gradient: "from-cyan-500 to-blue-400",
    seoKeywords: "water testing lab, laboratory setup, water quality testing, compliance lab",
  },
  {
    title: "Licensing, Compliance & Regulatory Assistance",
    desc: "Assistance with ISI/BIS, FSSAI registration, certifications, and regulatory compliance.",
    Icon: ClipboardText,
    features: ["FSSAI Registration", "ISI / BIS Certification", "Documentation Assistance"],
    gradient: "from-blue-500 to-sky-400",
    seoKeywords: "FSSAI registration, BIS licensing, regulatory compliance, water plant certifications",
  },
  {
    title: "Branding & Business Consultancy for Water Plants",
    desc: "We help create brand identity, packaging, and marketing strategies to grow your business.",
    Icon: MegaphoneSimple,
    features: ["Label Design", "Brand Positioning", "Distribution Strategy"],
    gradient: "from-blue-500 to-sky-400",
    seoKeywords: "water plant branding, label design, marketing strategy, business consultancy",
  },
  {
    title: "Training & Operational Support",
    desc: "Staff training, SOP setup, quality control, and ongoing operational guidance.",
    Icon: Wrench,
    features: ["On-site Training", "Operational SOPs", "Efficiency Optimization"],
    gradient: "from-sky-500 to-blue-500",
    seoKeywords: "staff training, operational support, quality control, water plant operations",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("show");
  }, [isInView, controls]);

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-28 bg-surface overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="px-6 py-2 text-sm tracking-wider font-semibold text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
            OUR SERVICES
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            Complete{" "}
            <span className="text-blue-500">Water Plant Ecosystems</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            We deliver full turnkey solutions — from plant setup to operations
            to market growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            show: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15, duration: 0.7 },
            },
          }}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map(({ title, desc, features, gradient, Icon, seoKeywords }, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              className="group backdrop-blur-xl p-10 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_#2563eb40]"
              aria-label={seoKeywords} // SEO + Accessibility
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-2xl text-white bg-linear-to-br ${gradient} shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon weight="fill" size={32} />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
              <p className="text-gray-400 mb-6">{desc}</p>

              <ul className="space-y-3">
                {features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className={`w-2.5 h-2.5 rounded-full bg-linear-to-br ${gradient}`}></div>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-24"
        >
          <GlassButton
            useGlass
            width={320}
            href="#contact"
            className="px-14 py-5 text-lg font-semibold"
            variant="ghost"
          >
            Schedule Free Consultation
          </GlassButton>
        </motion.div>
      </div>
    </section>
  );
}
