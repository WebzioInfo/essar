'use client';

import Contact from "../components/Contact";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Essar Enterprises – Water Plant Setup & Consultancy</title>
        <meta
          name="description"
          content="Get in touch with Essar Enterprises (essarenterprises.co.in) for turnkey RO & packaged water plant setup, licensing, branding, and operational guidance."
        />
        <meta
          name="keywords"
          content="Essar Enterprises contact, RO plant setup, packaged drinking water consultancy, water plant installation, licensing assistance, branding for water plants"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Contact Essar Enterprises – Water Plant Setup" />
        <meta
          property="og:description"
          content="Reach out to Essar Enterprises for turnkey RO & packaged water plant setup, licensing, branding, and operational guidance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://essarenterprises.co.in/contact" />
        <meta property="og:image" content="https://essarenterprises.co.in/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Essar Enterprises – Water Plant Setup" />
        <meta
          name="twitter:description"
          content="Get in touch with Essar Enterprises for turnkey RO & packaged water plant setup, licensing, branding, and operational guidance."
        />
        <meta name="twitter:image" content="https://essarenterprises.co.in/og-image.jpg" />
      </Head>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Essar Enterprises",
            "url": "https://essarenterprises.co.in",
            "logo": "https://essarenterprises.co.in/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+918884677773",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["English"]
            },
            "sameAs": [
              "https://www.instagram.com/essar.enterprises"
            ]
          }),
        }}
      />

      <Contact />
    </>
  );
}
