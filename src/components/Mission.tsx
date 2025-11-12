"use client";

import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Leaf,
  Lightbulb,
  Handshake,
  Award,
  Recycle,
  Zap,
  Lock
} from "lucide-react";

const values = [
  {
    title: "Quality First",
    description:
      "Plants engineered with industry-proven components and rigorous QC evaluation.",
    Icon: Award,
  },
  {
    title: "Sustainability",
    description:
      "Optimized resource and energy efficiency to minimize operational waste.",
    Icon: Leaf,
  },
  {
    title: "Innovation",
    description:
      "Continuous performance enhancement and process modernization.",
    Icon: Lightbulb,
  },
  {
    title: "Partnership",
    description:
      "A long-term consultative approach throughout your business journey.",
    Icon: Handshake,
  },
  {
    title: "Trust",
    description:
      "A 20-year reputation grounded in reliability, compliance, and support.",
    Icon: ShieldCheck,
  },
];

export default function Mission() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="mission" ref={sectionRef} className="py-24 md:py-40 bg-(--background) relative">
      {/* Subtle Glass Glow */}
      <div className="absolute inset-0 opacity-35 blur-[120px] pointer-events-none bg-gradient-to-tr from-(--primary)/20 via-transparent to-(--accent)/20" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative">

        {/* LEFT SIDE */}
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          <div className="inline-block px-6 py-2 border border-(--primary)/25 bg-(--primary)/10 rounded-full mb-6">
            <span className="text-(--primary) font-semibold tracking-wide text-sm">
              OUR MISSION
            </span>
          </div>

          <h2 className="heading-lg text-(--foreground) mb-8 leading-[1.25] max-w-xl">
            Engineering **Reliable, Efficient & Sustainable** Water Processing Facilities
          </h2>

          <div className="premium-card rounded-3xl p-10 md:p-14 border border-white/10 backdrop-blur-2xl">
            <p className="body-lg text-(--text-secondary) leading-relaxed">
              Our mission is to build water purification systems that ensure regulatory compliance,
              operational stability, and long-term profitability while maintaining environmental responsibility.
            </p>
          </div>

          {/* Mission Highlights */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { label: "Safety", Icon: Lock },
              { label: "Sustainability", Icon: Recycle },
              { label: "Performance", Icon: Zap },
            ].map((item, index) => (
              <div
                key={index}
                className="premium-card rounded-3xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <item.Icon className="w-7 h-7 mx-auto mb-3 text-(--foreground)" />
                <p className="font-semibold text-sm text-(--foreground)">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
          <div className="inline-block px-6 py-2 border border-(--accent)/25 bg-(--accent)/10 rounded-full mb-6">
            <span className="text-(--accent) font-semibold tracking-wide text-sm">
              OUR VALUES
            </span>
          </div>

          <h3 className="heading-md text-(--foreground) mb-10 font-bold">
            The Five Pillars of Operational Excellence
          </h3>

          <div className="space-y-5">
            {values.map((value, index) => (
              <div
                key={index}
                className="premium-card rounded-3xl p-8 flex gap-6 items-start transition-all duration-300 hover:shadow-2xl hover:-translate-x-1"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <value.Icon className="w-10 h-10 text-(--foreground)/90 flex-shrink-0" />
                <div>
                  <h4 className="heading-sm font-semibold mb-2">{value.title}</h4>
                  <p className="body-md text-(--text-secondary) leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
