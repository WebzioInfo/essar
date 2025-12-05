'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { Building2, Map, ShieldCheck, BadgeCheck } from 'lucide-react';

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: <Building2 className="w-8 h-8" />, number: 50, suffix: '+', label: 'Active Plants Installed' },
    { icon: <Map className="w-8 h-8" />, number: 2, label: 'States Covered' },
    { icon: <ShieldCheck className="w-8 h-8" />, number: 20, suffix: '+', label: 'Years of Expertise' },
    { icon: <BadgeCheck className="w-8 h-8" />, number: 100, suffix: '%', label: 'End-to-End Support' },
  ];

  const timeline = [
    { year: '2004', title: 'Founded', details: 'Started our journey in packaged drinking water solutions.' },
    { year: '2010', title: 'Expansion', details: 'Successfully expanded operations across Karnataka.' },
    { year: '2015', title: 'Milestone', details: 'Crossed 50+ fully operational plant installations.' },
    { year: '2024', title: '20 Years Strong', details: 'Two decades of trusted industrial leadership.' },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 bg-[#0A0D12] text-gray-200 overflow-hidden"
    >
      {/* Metallic gradient glow */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-black to-[#0A0D12] opacity-90" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Elevating Water Plant Standards for <span className="text-cyan-400">Two Decades</span>
          </h2>
          <p className="max-w-3xl mt-5 text-lg text-gray-400 leading-relaxed">
            Essar Enterprises delivers fully engineered and economically viable packaged drinking water plants
            across Kerala and Karnataka — combining compliance, performance, and long-term reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Timeline */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.25 }}
            className="space-y-10"
          >
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-start gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-xl bg-linear-to-br from-slate-800 to-slate-700 border border-slate-600 flex items-center justify-center text-cyan-400 font-bold shadow-[0_0_20px_-6px_rgba(0,255,255,0.4)]">
                    {t.year}
                  </div>
                  {i < timeline.length - 1 && <div className="w-0.5 h-14 bg-slate-700" />}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{t.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">{t.details}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260 }}
                className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-cyan-400/10 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4">{s.icon}</div>
                <div className="text-4xl font-bold text-white mb-1">
                  {isInView && <CountUp end={s.number} suffix={s.suffix} duration={2.2} />}
                </div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}
