import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import AosInitializer from "./components/AosInitializer";

// SEO → Metadata + OpenGraph + Twitter + Canonical
export const metadata: Metadata = {
  title: "Essar Enterprises - Packaged Drinking Water Plant Solutions",
  description:
    "Since 2004, Essar Enterprises has been designing and installing complete packaged drinking water plants across Kerala and Karnataka. Expert consultancy, licensing, and plant automation.",
  metadataBase: new URL("https://essarenterprises.co.in"),
  alternates: {
    canonical: "https://essarenterprises.co.in",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://essarenterprises.co.in",
    title: "Essar Enterprises - Packaged Drinking Water Plant Solutions",
    siteName: "Essar Enterprises",
    description:
      "Expert water plant solutions — design, setup, licensing & after-sales support.",
    images: [
      {
        url: "/seo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Essar Enterprises Water Plant Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Essar Enterprises - Packaged Drinking Water Plant Solutions",
    description:
      "Expert water plant solutions — design, setup, licensing & after-sales support.",
    images: ["/seo/og-image.jpg"],
    site: "@essar.enterprises",
  },
  keywords: [
    "Water Plant Kerala",
    "Packaged Drinking Water Plant",
    "Mineral Water Plant Setup",
    "RO Water Plant",
    "BIS Licensing Kerala",
    "Essar Enterprises Water",
    "Water Treatment Company Kerala",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Essar Enterprises",
    "url": "https://essarenterprises.co.in",
    "logo": "https://essarenterprises.co.in/logo.png",
    "foundingYear": "2004",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Kerala",
      "addressCountry": "India",
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-8884677773",
        "contactType": "customer support",
        "areaServed": "India",
        "availableLanguage": ["English", "Malayalam"]
      },
    ],
    "sameAs": [
      "https://www.instagram.com/essar.enterprises"
    ],
    "description":
      "Expert RO Drinking Water Plant installation with end-to-end consultancy including licensing, training, automation, and maintenance.",
  };

  return (
    <html lang="en">
      <head>
        {/* ⚡ Performance: DNS + Preconnect */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* 📌 Schema Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        ></script>
      </head>

      <body className="antialiased bg-black scroll-smooth text-white">
        {/* Accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>

        {/* Global AOS Animations */}
        <AosInitializer />

        {/* Header Nav */}
        <header>
          <Navigation />
        </header>

        {/* Page Wrapper */}
        <main id="main-content" className="min-h-screen w-full">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Toasts */}
        <Toaster theme="dark" position="top-right" richColors />
      </body>
    </html>
  );
}
