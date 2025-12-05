import Mission from "../components/Mission";
import Head from "next/head";

export default function MissionPage() {
  return (
    <>
      <Head>
        <title>Our Mission & Values – Essar Enterprises | RO Plant Experts</title>
        <meta
          name="description"
          content="Essar Enterprises is committed to engineering reliable, efficient, and sustainable water processing facilities. Explore our mission, operational values, and industry expertise."
        />
        <meta
          name="keywords"
          content="Essar Enterprises Mission, Water Plant Values, RO Plant Consultants, Industrial Water Solutions, Sustainable Water Plants, Water Purification Experts"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Social */}
        <meta property="og:title" content="Our Mission & Values – Essar Enterprises" />
        <meta property="og:description" content="Engineering reliable, efficient, and sustainable water processing facilities across South India." />
        <meta property="og:url" content="https://essarenterprises.co.in/mission" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://essarenterprises.co.in/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Mission & Values – Essar Enterprises" />
        <meta name="twitter:description" content="Engineering reliable, efficient, and sustainable water processing facilities." />
        <meta name="twitter:image" content="https://essarenterprises.co.in/og-image.jpg" />
      </Head>

      <Mission />
    </>
  );
}
