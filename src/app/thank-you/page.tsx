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
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
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
            className="flex items-center justify-center gap-2.5 w-full py-4 px-6 bg-primary text-background font-semibold rounded-lg hover:bg-secondary transition-colors text-sm shadow-sm"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.18-.543-1.636-.677-2.736-2.316-2.82-2.428-.084-.112-.667-.887-.667-1.691 0-.804.42-1.201.57-1.365.144-.157.315-.198.42-.198.106 0 .211.002.304.006.098.004.23-.037.36.275.133.32.457 1.11.498 1.192.041.082.069.178.013.288-.056.11-.084.179-.168.275-.084.096-.176.216-.252.29-.084.083-.173.173-.075.341.098.167.436.721.936 1.167.644.574 1.187.752 1.356.835.168.083.267.07.367-.044.1-.115.429-.5.544-.673.114-.173.23-.144.385-.087.156.057.99.467 1.16.552.17.085.284.127.326.198.042.072.042.417-.102.822z" />
            </svg>
            <span>Continue to WhatsApp (+91 88846 77773)</span>
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
