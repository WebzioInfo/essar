import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { getLocation, locations } from "@/content/locations";
import { localBusinessSchema } from "@/seo/schema";

export async function generateStaticParams() {
  return locations.map((location) => ({ city: location.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const location = getLocation(city);

  if (!location) {
    return {};
  }

  return {
    title: `Water Business Consultants in ${location.name} | Essar Enterprises`,
    description: location.description,
    alternates: {
      canonical: `/locations/${city}`,
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const location = getLocation(city);

  if (!location) {
    notFound();
  }

  return (
    <>
      <SchemaMarkup type="LocalBusiness" data={localBusinessSchema(location)} />

      <div className="bg-primary pt-32 pb-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="text-xs font-semibold tracking-widest text-text-secondary uppercase mb-6">
            Serving {location.name}
          </div>
          <h1 className="heading-xl text-white mb-6">Water Business Consultants in {location.name}</h1>
          <p className="heading-sm text-surface font-normal max-w-2xl mx-auto opacity-80">
            End-to-end turnkey solutions including machinery planning, civil layout design, and BIS/FSSAI licensing support.
          </p>
        </div>
      </div>

      <div className="bg-background py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="premium-card p-12 bg-white text-center border border-border">
            <h3 className="heading-md mb-4 text-primary">Local Expertise in {location.name}</h3>
            <p className="body-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              {location.description} Move from idea to your first bottle with a plan built around local water quality, plant requirements, and approval timelines.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-primary text-white rounded-md font-medium hover:bg-secondary transition-colors inline-block text-lg">
              Book a Local Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
