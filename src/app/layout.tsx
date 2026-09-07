import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";

import MegaMenu from "@/components/navigation/MegaMenu";
import Footer from "@/app/components/Footer";
import AosInitializer from "./components/AosInitializer";
import LenisProvider from "./components/LenisProvider";
import { organizationSchema, websiteSchema } from "@/seo/schema";

// SEO → Metadata + OpenGraph + Twitter + Canonical
export const metadata: Metadata = {
  title: "Essar Enterprises | Premium Water Business Consultants",
  description:
    "We engineer profitable packaged drinking water businesses. From planning and licensing to operational excellence.",
  metadataBase: new URL("https://essarenterprises.co.in"),
  alternates: {
    canonical: "https://essarenterprises.co.in",
  },
  icons: {
    icon: [
      { url: "/logos/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logos/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logos/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/logos/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" }
    ]
  },
  openGraph: {
    type: "website",
    url: "https://essarenterprises.co.in",
    title: "Essar Enterprises | Premium Water Business Consultants",
    siteName: "Essar Enterprises",
    description:
      "We engineer profitable packaged drinking water businesses. From planning and licensing to operational excellence.",
    images: [
      {
        url: "/logos/logo-dark.png",
        width: 1200,
        height: 630,
        alt: "Essar Enterprises Water Plant Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Essar Enterprises | Premium Water Business Consultants",
    description:
      "We don't just sell machinery. We engineer profitable packaged drinking water businesses.",
    images: ["/logos/logo-dark.png"],
    site: "@essar.enterprises",
  },
  keywords: [
    "Packaged Drinking Water Plant Consultancy",
    "Turnkey Water Plant Setup",
    "BIS Licensing India",
    "FSSAI Licensing Water",
    "Water Business Consulting",
    "Commercial RO Plant Setup",
    "Packaged Drinking Water Project Report",
    "Water Quality Laboratory Setup",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
  const structuredData = [organizationSchema(), websiteSchema()];

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

      <body className="antialiased bg-background text-foreground">
        {/* Accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>

        {/* Global AOS Animations */}
        <AosInitializer />
        
        <LenisProvider>
          {/* Header Nav */}
          <header>
            <MegaMenu />
          </header>

          {/* Page Wrapper */}
          <main id="main-content" className="min-h-screen w-full">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </LenisProvider>

        {/* Global Toasts */}
        <Toaster theme="light" position="top-right" richColors />
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        {clarityId ? (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `}
          </Script>
        ) : null}
      </body>
    </html>
  );
}
