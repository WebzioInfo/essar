import type { Metadata } from "next";
import CalculatorClient from "./CalculatorClient";

export const metadata: Metadata = {
  title: "Plant Cost & ROI Calculator | Essar Enterprises",
  description:
    "Estimate packaged drinking water plant capacity, bottle format, setup readiness, and ROI planning with Essar Enterprises.",
  alternates: {
    canonical: "/tools/calculator",
  },
};

export default function CalculatorPage() {
  return (
    <div className="bg-surface py-20 min-h-[80vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="heading-lg text-primary mb-4">Plant Cost & ROI Estimator</h1>
          <p className="body-lg">Get an instant estimate for your turnkey water plant setup.</p>
        </div>

        <CalculatorClient />
      </div>
    </div>
  );
}
