"use client";

import { useRef } from "react";
import {
  Award,
  Repeat,
  Factory,
  UserCheck,
  Microscope,
  ShieldCheck,
} from "lucide-react";
import GibberishText from "../../components/gibberish-text";

export default function WhyEssar() {
  const sectionRef = useRef<HTMLElement>(null);

  const reasons = [
    {
      title: "20+ Years of Expertise",
      description: "Proven operational experience in designing and maintaining efficient drinking water plants.",
      Icon: Award,
      size: "large",
    },
    {
      title: "End-to-End Execution",
      description: "From planning to installation to post-launch optimization — handled by experts.",
      Icon: Repeat,
      size: "medium",
    },
    {
      title: "50+ Successfully Running Plants",
      description: "A strong record of consistency and client success across regions.",
      Icon: Factory,
      size: "medium",
    },
    {
      title: "Founder-Led Technical Oversight",
      description: "Direct strategic guidance from leadership with hands-on industry depth.",
      Icon: UserCheck,
      size: "large",
    },
    {
      title: "Biofix Water Technology",
      description: "Advanced microbial purification and sustained mineral stability processes.",
      Icon: Microscope,
      size: "medium",
    },
    {
      title: "Uncompromised Quality Standards",
      description: "Premium components, certified filtration stages, and rigorous testing frameworks.",
      Icon: ShieldCheck,
      size: "medium",
    },
     {
      title: "Biofix Water Technology",
      description: "Advanced microbial purification and sustained mineral stability processes.",
      Icon: Microscope,
      size: "medium",
    },
  ];


  return (
    <section id="why-essar" ref={sectionRef} className="py-32 bg-surface relative overflow-hidden">

      {/* Subtle ambient glow gradient */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-linear-to-br from-primary/12 via-transparent to-(--accent)/12 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="why-header text-center mb-20">
          <div className="inline-block px-6 py-3 rounded-full border border-primary/25 bg-primary/10 mb-6">
            <span className="text-primary font-medium tracking-wide text-sm">WHY CHOOSE US</span>
          </div>

         <h2 className="heading-lg text-foreground mb-6 font-semibold tracking-tight">
      Why{" "}
      <span className="gold-accent inline-block">
        <GibberishText text={"Essar Enterprises?"} className="inline-block" />
      </span>
    </h2>

          <p className="body-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We deliver more than infrastructure — we deliver reliability, business scalability, and lasting performance.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`why-card premium-card rounded-3xl p-10 border border-white/10 hover:shadow-xl transition-all duration-700 hover:-translate-y-4 ${
                reason.size === "large" ? "md:col-span-2" : ""
              }`}
            >
              <reason.Icon className="w-12 h-12 text-foreground mb-8" />
              <h3 className="heading-sm mb-3 font-semibold">{reason.title}</h3>
              <p className="body-md text-text-secondary leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-24 text-center">
          <div className="premium-card rounded-3xl p-14 md:p-16 bg-linear-to-br from-white/40 to-white/10 backdrop-blur-xl border border-(--gold)/20">
            <h3 className="heading-md font-semibold text-foreground mb-6">
              We design plants that last — operationally, technically, and financially.
            </h3>
            <p className="body-lg text-text-secondary">
              Trusted by entrepreneurs and industry operators across multiple regions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
