import WhyEssar from "../components/WhyEssar";
import Head from "next/head";

export default function WhyEssarPage() {
  return (
    <>
      <Head>
        <title>Why Choose Essar Enterprises – Trusted Water Plant Experts</title>
        <meta
          name="description"
          content="Discover why Essar Enterprises is the preferred choice for water plant design, setup, and consultancy. 20+ years of expertise and 50+ successful plants."
        />
        <meta
          name="keywords"
          content="Essar Enterprises, Water Plant Experts, RO Plant Design, Packaged Drinking Water Consultancy, Plant Setup, Water Plant Technology, Biofix Water Technology, Operational Excellence"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Why Choose Essar Enterprises – Trusted Water Plant Experts" />
        <meta property="og:description" content="Learn why Essar Enterprises is trusted across South India for RO plant design, setup, and operations." />
        <meta property="og:url" content="https://essarenterprises.co.in/why-essar" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://essarenterprises.co.in/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why Choose Essar Enterprises – Trusted Water Plant Experts" />
        <meta name="twitter:description" content="20+ years of expertise, 50+ successfully running plants, and advanced Biofix Water Technology." />
        <meta name="twitter:image" content="https://essarenterprises.co.in/og-image.jpg" />
      </Head>

      <WhyEssar />
    </>
  );
}
