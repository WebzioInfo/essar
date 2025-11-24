'use client';

import { useEffect, useRef, useState } from 'react';
import {
  GraduationCap,
  Factory,
  Flask,
  ChartLineUp,
} from "@phosphor-icons/react";
import Image from 'next/image';
import FounderImg from '../../../src/assets/founder.png'

export default function Founder() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: <GraduationCap size={34} weight="duotone" />, label: 'Industrial Water Consultant' },
    { icon: <Factory size={34} weight="duotone" />, label: 'Plant Design & Setup Expert' },
    { icon: <Flask size={34} weight="duotone" />, label: 'Research & Quality Control' },
    { icon: <ChartLineUp size={34} weight="duotone" />, label: 'Business Strategy & Growth' }
  ];

  return (
    <section id="founder" ref={sectionRef} className="py-24 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-primary/10 rounded-full mb-8 border border-primary/20">
            <span className="text-primary body-md font-bold tracking-wide">LEADERSHIP</span>
          </div>
          <h2 className="heading-lg text-foreground mb-4">
            Meet Our <span className="gold-accent">Founder</span>
          </h2>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5  gap-14 items-start">

          {/* Image */}
          <div className={`lg:col-span-2 lg:sticky lg:top-28 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
  <div className="  rounded-3xl overflow-hidden shadow-2xl h-full min-h-[600px]">
    <Image
      src={FounderImg}
      alt="Founder of Essar Enterprises"
      fill
      className="object-cover grayscale h-full  scale-x-[-1]"
      priority
      unoptimized
    />
  </div>
</div>


          {/* Content */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="space-y-10">

              {/* Name + Titles */}
              <div>
                <h3 className="heading-lg font-bold text-foreground">Mr. Shareef</h3>
                <p className="body-lg gold-accent font-semibold mt-1">
                  Founder & Chairman, Essar Enterprises
                </p>
                <p className="body-md text-text-secondary">
                  Chairman, Biofix Technology LLP
                </p>
              </div>

              {/* Bio */}
              <div className="premium-card rounded-3xl p-10 border border-(--gold)/10 leading-relaxed text-text-secondary body-lg">
                With over 20 years of dedicated industry experience, Mr. Shareef has designed and
                successfully managed packaged drinking water plants across South India. His
                expertise spans plant establishment, process optimization, water quality systems,
                and turnkey project execution.
              </div>

              {/* Expertise Icons */}
              <div className="grid grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="premium-card rounded-2xl p-6 flex items-center gap-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-primary">{item.icon}</div>
                    <div className="body-md font-semibold text-foreground">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="border-l-4 border-gold pl-8">
                <p className="body-lg italic text-text-secondary leading-relaxed mb-4">
                  &quot;We don’t just install machinery — we build sustainable businesses.
                  Every project is delivered with the expertise and foundation required for
                  long-term growth and quality assurance.&quot;
                </p>
                <p className="body-md text-foreground font-bold">— Mr. Shareef</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
