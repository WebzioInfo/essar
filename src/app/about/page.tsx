import Head from "next/head";
import About from "../components/About";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Essar Enterprises | RO Plant Service & Water Treatment Experts in Kerala</title>
        <meta 
          name="description" 
          content="Essar Enterprises provides RO Plant installation, maintenance, water purification machinery, and packaged drinking water plant consultancy in Kerala & Karnataka."
        />
        <meta 
          name="keywords" 
          content="RO Plant Service Kerala, Mineral Water Plant Setup, Packaged Drinking Water Plant Consultancy, RO Maintenance AMC, Water Treatment Solutions India, Essar Enterprises, Industrial RO Plant Installation, Water Purification System Kerala"
        />
        <meta name="author" content="Essar Enterprises" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Essar Enterprises - RO Plant Service Experts" />
        <meta 
          property="og:description" 
          content="20+ years providing turnkey packaged drinking water plant solutions — RO design, installation, maintenance & compliance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Essar Enterprises" />

        {/* Canonical */}
        <link rel="canonical" href="https://essarenterprises.co.in/about" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WaterTreatmentCompany",
              "name": "Essar Enterprises",
              "description": "RO Plant installation, maintenance, packaged drinking water project solutions in Kerala & Karnataka.",
              "areaServed": ["Kerala", "Karnataka"],
              "url": "https://essarenterprises.co.in",
              "telephone": "+91 8884677773",
              "sameAs": [
                "https://www.instagram.com/essar.enterprises"
              ]
            }),
          }}
        />
      </Head>

      <About />
    </>
  );
}
