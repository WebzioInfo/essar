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

type ThankYouProps = {
  searchParams?: Promise<{
    name?: string;
    phone?: string;
    status?: string;
    details?: string;
    source?: string;
  }>;
};

export default async function ThankYouPage({ searchParams }: ThankYouProps) {
  const params = (await searchParams) || {};
  const name = params.name || "";
  const phone = params.phone || "";
  const status = params.status || "";
  const details = params.details || "";

  let waLink = "https://wa.me/918884677773?text=Hi%20Essar%20Enterprises%2C%20I%20just%20submitted%20a%20consultation%20request.";
  if (name || phone || details) {
    const waText =
      `*Consultation Request - Essar Enterprises*\n\n` +
      `Name: ${name || "Investor"}\n` +
      `Phone: ${phone || "—"}\n` +
      (status ? `Client Type: ${status}\n` : "") +
      `\nProject Details:\n${details || "I would like to discuss water plant setup."}`;
    waLink = `https://wa.me/918884677773?text=${encodeURIComponent(waText)}`;
  }

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-semibold uppercase tracking-wider text-text-secondary mb-6">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Request Received
        </div>

        <h1 className="heading-xl text-primary mb-6">
          {name ? `Thank You, ${name.split(" ")[0]}.` : "Essar Will Review Your Project Details."}
        </h1>

        <p className="body-lg text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed">
          Your inquiry has been logged in our system. A senior consultant will evaluate your location, water source, and licensing pathway within 24 business hours.
        </p>

        {/* Priority WhatsApp Direct Card (100% Pop-up Blocker Protection) */}
        <div className="p-6 sm:p-8 bg-surface border border-border/80 rounded-2xl mb-10 text-left max-w-lg mx-auto shadow-sm">
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
              Priority WhatsApp Direct
            </span>
            <span className="text-[11px] text-text-secondary bg-background px-2 py-0.5 rounded border border-border">
              Instant Connect
            </span>
          </div>

          <p className="text-xs text-text-secondary mb-5 leading-relaxed">
            If WhatsApp did not launch automatically on your device, tap the button below to start your direct conversation with all your project details pre-loaded:
          </p>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-4 px-6 bg-[#25D366] text-white font-semibold rounded-lg hover:opacity-95 transition-opacity text-sm shadow-sm"
          >
            <span>💬 Continue to WhatsApp (+91 88846 77773)</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects"
            className="px-6 py-3.5 bg-primary text-background font-medium rounded-md hover:bg-secondary transition-colors text-sm"
          >
            View Active Case Studies
          </Link>
          <Link
            href="/services"
            className="px-6 py-3.5 bg-background text-primary border border-border font-medium rounded-md hover:border-primary transition-colors text-sm"
          >
            Explore Consultancy Services
          </Link>
        </div>
      </div>
    </div>
  );
}
