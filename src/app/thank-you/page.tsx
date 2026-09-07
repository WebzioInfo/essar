import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consultation Request Received | Essar Enterprises",
  description: "Thank you for contacting Essar Enterprises. Our team will review your packaged drinking water project request.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="bg-background py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase text-text-secondary mb-4">Request received</p>
        <h1 className="heading-lg text-primary mb-6">Essar will review your project details.</h1>
        <p className="body-lg mb-10">
          The next step is a focused discussion about your location, water source, capacity target, licensing path, and launch timeline.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://wa.me/918884677773" className="px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition-colors">
            Continue on WhatsApp
          </a>
          <Link href="/services" className="px-8 py-4 bg-white text-primary border border-border font-medium rounded-lg hover:border-primary transition-colors">
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}
