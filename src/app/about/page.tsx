import type { Metadata } from "next";
import TrustBar from "@/components/ui/TrustBar";

export const metadata: Metadata = {
  title: "About Essar Enterprises | Turnkey Water Plant Consultants",
  description:
    "With over 20 years of expertise, Essar Enterprises helps investors build packaged drinking water businesses from planning to first bottle.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-primary pt-32 pb-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="heading-xl text-white mb-6">Building Bottled Water Businesses</h1>
          <p className="heading-sm text-surface font-normal max-w-2xl mx-auto opacity-80">Since 2004</p>
        </div>
      </div>

      <TrustBar />

      <div className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h2 className="heading-lg text-primary mb-8">From Idea to First Bottle</h2>
            <p className="body-lg text-text-secondary leading-relaxed mb-6">
              Essar Enterprises is not a machinery seller. We are your business transformation partner. For over two decades, we have been the silent technical force behind South India&apos;s most successful packaged drinking water brands.
            </p>
            <p className="body-lg text-text-secondary leading-relaxed">
              We handle the heavy lifting—from civil layouts and precise machinery installation to the complex bureaucracy of BIS and FSSAI licensing. Our goal is to ensure you reach commercial production efficiently and profitably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="premium-card p-10 text-center">
              <div className="text-5xl font-bold text-primary mb-4 tracking-tighter">20+</div>
              <h3 className="heading-sm mb-2">Years Experience</h3>
              <p className="body-md">Deep industry authority in water treatment and plant management.</p>
            </div>
            <div className="premium-card p-10 text-center">
              <div className="text-5xl font-bold text-primary mb-4 tracking-tighter">50+</div>
              <h3 className="heading-sm mb-2">Plants Installed</h3>
              <p className="body-md">Proven track record across Kerala, Karnataka, and Tamil Nadu.</p>
            </div>
            <div className="premium-card p-10 text-center">
              <div className="text-5xl font-bold text-primary mb-4 tracking-tighter">100%</div>
              <h3 className="heading-sm mb-2">Compliance Focus</h3>
              <p className="body-md">Plant planning built around BIS, FSSAI, laboratory, and audit readiness.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
