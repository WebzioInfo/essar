import type { Metadata } from "next";
import HomePageClient from "./components/HomePageClient";
import { SEO_CONFIG, getHowToPlanToPlantSchema } from "@/config/seo";

export const metadata: Metadata = {
  title: `${SEO_CONFIG.brandName}™ Official Website | Packaged Drinking Water Plant Consultants South India`,
  description:
    "Essar Enterprises helps investors and plant founders build compliant, profitable packaged drinking water plants across Kerala, Karnataka, and Tamil Nadu. Turnkey plant setup, BIS IS 14543 licensing, hygienic civil architecture, and QC lab setup.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const howToSchema = getHowToPlanToPlantSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <HomePageClient />
    </>
  );
}
