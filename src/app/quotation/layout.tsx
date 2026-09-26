import type { Metadata } from "next";
import { getBreadcrumbSchema } from "@/config/seo";

export const metadata: Metadata = {
  title: "Get Turnkey Water Plant Quotation & Project Proposal | Essar Enterprises",
  description:
    "Request a detailed turnkey project quotation and machinery cost estimate for your packaged drinking water plant. Customized for Kerala, Karnataka, and Tamil Nadu.",
  alternates: {
    canonical: "/quotation",
  },
};

export default function QuotationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Quotation Proposal", url: "/quotation" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
