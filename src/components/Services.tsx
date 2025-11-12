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

const services = [
  {
    title: "Plant Design & Setup",
    desc: "Fully automatic or semi-automatic production line setup based on capacity, market, and space.",
    Icon: Buildings,
    features: ["Custom Layouts", "Fully Automatic Systems", "Turnkey Installation"],
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Licensing & Compliance",
    desc: "Complete regulatory setup — documentation, approvals, certifications & compliance assistance.",
    Icon: ClipboardText,
    features: ["ISI / BIS Licensing", "FSSAI Registration", "Water Testing Lab Setup"],
    gradient: "from-cyan-500 to-teal-400",
  },
  {
    title: "Operations & Training",
    desc: "Staff training, process guidelines, QC systems, and daily operational workflow setup.",
    Icon: UsersThree,
    features: ["On-site Training", "Quality Control SOPs", "Production Efficiency"],
    gradient: "from-teal-500 to-green-400",
  },
  {
    title: "Branding & Market Growth",
    desc: "Brand identity creation, packaging design & distribution channel planning.",
    Icon: MegaphoneSimple,
    features: ["Label Design", "Brand Positioning", "Market Strategy"],
    gradient: "from-green-500 to-lime-400",
  },
  {
    title: "Maintenance & Supply",
    desc: "Long-term AMC, technician support, consumables & machine spare parts supply.",
    Icon: Wrench,
    features: ["Routine Servicing", "Spare Parts", "Long-Term Support"],
    gradient: "from-lime-500 to-blue-500",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, {  });
  const controls = useAnimation();

  useEffect(() => {
  if (isInView) controls.start("show");
}, [isInView, controls]);


  return (
    <section id="services" className="relative py-28 bg-slate-950 overflow-hidden" ref={ref}>

      {/* Soft Corporate Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-blue-500/10 blur-[160px] top-0 left-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="px-6 py-2 text-sm tracking-wider font-semibold text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20">
            OUR SERVICES
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            Complete <span className="text-blue-400">Water Plant Ecosystems</span>
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed">
            We deliver full turnkey solutions — from plant setup to operations to market growth.
          </p>
        </motion.div>

        {/* Service Grid */}
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
          {services.map(({ title, desc, features, gradient, Icon }, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
              className="group backdrop-blur-xl p-10 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0px_0px_40px_#1e3a8a55]"
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-2xl text-white bg-linear-to-br ${gradient} shadow-lg mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <Icon weight="fill" size={32} />
              </div>

              <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
              <p className="text-gray-300 mb-6">{desc}</p>

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
          <a
            href="#contact"
            className="inline-block px-14 py-5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-all duration-300 hover:scale-[1.05] shadow-[0_0_35px_#2563eb80]"
          >
            Schedule Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
