import type { Metadata } from "next";
import CalculatorClient from "./CalculatorClient";
import { SEO_CONFIG, getBreadcrumbSchema } from "@/config/seo";

export const metadata: Metadata = {
  title: "Water Plant Cost & ROI Calculator | Packaged Drinking Water Project Estimator | Essar Enterprises",
  description:
    "Calculate packaged drinking water plant machinery costs, production capacity (BPH), licensing budget, and ROI payback timeline with Essar Enterprises' turnkey estimator.",
  alternates: {
    canonical: "/tools/calculator",
  },
};

export default function CalculatorPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Tools", url: "/tools/calculator" },
    { name: "Plant Cost Calculator", url: "/tools/calculator" },
  ]);

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Packaged Drinking Water Plant Cost & ROI Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    url: `${SEO_CONFIG.canonicalUrl}/tools/calculator`,
    description:
      "Interactive investment and ROI calculator for packaged drinking water manufacturing plants across South India.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    provider: {
      "@type": "Organization",
      name: SEO_CONFIG.brandName,
      url: SEO_CONFIG.canonicalUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <div className="bg-surface py-20 min-h-[80vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="heading-lg text-primary mb-4">Plant Cost &amp; ROI Estimator</h1>
            <p className="body-lg text-text-secondary">Get an instant estimate for your turnkey water plant setup.</p>
          </div>

          <CalculatorClient />
        </div>
      </div>
    </>
  );
}
