import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-primary text-background items-center justify-center p-6 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 text-center max-w-2xl w-full flex flex-col items-center">
        <Image
          src="/logos/logo-icon-light.png"
          alt="Essar Enterprises Logo"
          width={180}
          height={60}
          className="h-12 w-auto object-contain opacity-80 mb-8"
        />

        <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
          HTTP 404 &bull; Resource Not Located
        </span>

        <h1 className="heading-hero text-white mb-4">404</h1>

        <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>

        <h2 className="heading-sm mb-3">Signal Lost.</h2>
        <p className="body-lg text-surface/70 mb-10 max-w-lg leading-relaxed">
          The requested page or technical resource does not exist or has been relocated within our framework.
        </p>

        {/* Quick Navigation Shortcuts */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full mb-8">
          <Link
            href="/"
            className="px-6 py-3.5 bg-background text-primary font-medium rounded-sm hover:bg-surface transition-colors tracking-wider text-xs uppercase"
          >
            ← Return to Homepage
          </Link>
          <Link
            href="/services"
            className="px-6 py-3.5 border border-white/20 text-white font-medium rounded-sm hover:bg-white/10 transition-colors tracking-wider text-xs uppercase"
          >
            Our Services
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3.5 border border-white/20 text-white font-medium rounded-sm hover:bg-white/10 transition-colors tracking-wider text-xs uppercase"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3.5 border border-white/20 text-white font-medium rounded-sm hover:bg-white/10 transition-colors tracking-wider text-xs uppercase"
          >
            Contact Offices
          </Link>
        </div>
      </div>
    </div>
  );
}
