"use client";

import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Services from '@/app/components/Services';
import Mission from '@/app/components/Mission';
import WhyEssar from '@/app/components/WhyEssar';
import Founder from '@/app/components/Founder';
import Contact from '@/app/components/Contact';
// import RightMaintenanceNotice from '@/components/RightMaintenanceNotice';
import ModelScene from './components/Scene/Index';
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
  <title>Essar Enterprises – RO Plant Design, Water Plant Consultancy & A to Z Factory Setup Experts</title>

  <meta
    name="description"
    content="Essar Enterprises provides complete A-to-Z services for Packaged Drinking Water Plants including RO Plant Design, Factory Setup, Lab Installation, Licensing (ISI/BIS/FSSAI), Branding & Operational Support. 20+ years expertise, 50+ successful plants across South India."
  />

  <meta
    name="keywords"
    content="
      RO plant installation, RO plant service, RO maintenance, industrial RO design,
      water plant consultancy, packaged drinking water plant setup,
      ISI license assistance, BIS consultancy, FSSAI documentation,
      water testing lab setup, laboratory installation,
      turnkey water plant installation, factory setup services,
      Essar Enterprises Kerala, mineral water plant design,
      water purification technology, Biofix Water Technology,
      operational support for water plants
    "
  />

  <meta name="robots" content="index, follow" />
  <meta name="author" content="Essar Enterprises" />
  <meta name="language" content="en" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://essarenterprises.co.in/" />

  {/* Open Graph */}
  <meta property="og:title" content="Essar Enterprises – Complete Water Plant Design & Consultancy" />
  <meta
    property="og:description"
    content="A-Z services for water plants: RO plant design, packaged drinking water setup, lab installation, licensing, branding, and operational support."
  />
  <meta property="og:url" content="https://essarenterprises.co.in/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://essarenterprises.co.in/og-image.jpg" />
  <meta property="og:site_name" content="Essar Enterprises" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Essar Enterprises – Water Plant Design & RO Consultancy Experts" />
  <meta
    name="twitter:description"
    content="Get expert support for water plant setup: RO design, lab setup, ISI/BIS/FSSAI licensing, branding, and complete factory services."
  />
  <meta name="twitter:image" content="https://essarenterprises.co.in/og-image.jpg" />

  {/* Schema.org Structured Data for SEO */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Essar Enterprises",
        url: "https://essarenterprises.co.in/",
        description:
          "Complete packaged drinking water plant consultancy offering RO plant design, factory setup, water testing lab installation, branding, operational support, and licensing services.",
        image: "https://essarenterprises.co.in/og-image.jpg",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Kerala",
          addressCountry: "India",
        },
        serviceArea: {
          "@type": "Place",
          name: "South India",
        },
        sameAs: [
          "https://www.facebook.com/",
          "https://www.instagram.com/essar.enterprises",
        ],
        makesOffer: [
          { "@type": "Service", name: "RO Plant Installation" },
          { "@type": "Service", name: "RO Plant Maintenance & Service" },
          { "@type": "Service", name: "Packaged Drinking Water Plant Consultancy" },
          { "@type": "Service", name: "Water Testing Lab Setup" },
          { "@type": "Service", name: "ISI/BIS/FSSAI Licensing Assistance" },
          { "@type": "Service", name: "Branding & Label Design" },
          { "@type": "Service", name: "Factory A to Z Setup Services" },
        ],
      }),
    }}
  />
</Head>


      <main className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <Mission />
        <section id="three-model" className="py-20 min-h-screen md:max-h-full max-h-screen bg-black -z-10">
          <ModelScene />
        </section>
        {/* <RightMaintenanceNotice
          title="Scheduled maintenance"
          message="Our website is currently under maintenance. Some pages or details may be incorrect. We apologise for the inconvenience — for urgent help, contact us on WhatsApp."
          whatsappNumber="8884677773"
          whatsappPrefill="Hello, I saw the maintenance notice and need help."
          persistKey="maintenance:2025-11-13-v1"
        /> */}
        <WhyEssar />
        <Founder />
        <Contact />
      </main>
    </>
  );
}
