import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Project Portfolio | Essar Enterprises",
  description:
    "Explore Essar Enterprises packaged drinking water plant facilities, operational revivals, and active setups across South India including KENBY, Gangothri, INSTAPANI, Faiha, Greenmount, and Greenway.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsIndexPage() {
  return (
    <>
      {/* Editorial Hero Header */}
      <div className="bg-primary text-white pt-32 pb-24 border-b border-border/30">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              Commercial Portfolio
            </span>
            <span className="text-surface/40">•</span>
            <span className="text-xs text-surface/70 tracking-wide">
              2004 &mdash; Present
            </span>
          </div>

          <h1 className="heading-xl text-white mb-6 tracking-tight max-w-3xl">
            Commercial Execution &amp; Plant Architecture.
          </h1>

          <p className="heading-sm text-surface/80 font-normal max-w-2xl leading-relaxed">
            A curated record of turnkey plant establishments, operational revivals, and facility modernizations engineered across South India.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 pt-8 border-t border-white/15 text-xs text-surface/70 tracking-wide">
            <div>
              <span className="font-semibold text-white">{projects.length} Facilities</span> Documented
            </div>
            <span className="opacity-30">•</span>
            <div>Kerala, Karnataka &amp; Tamil Nadu</div>
            <span className="opacity-30">•</span>
            <div>BIS IS 14543 &amp; FSSAI Standards</div>
          </div>
        </div>
      </div>

      {/* 2-Column Architectural Journal Showcase */}
      <div className="bg-background py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 lg:gap-x-16 lg:gap-y-28">
            {projects.map((project, idx) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                {/* Number & Operational Status Bar */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-border text-xs">
                  <span className="font-mono text-text-secondary tracking-widest text-[11px]">
                    {(idx + 1).toString().padStart(2, "0")} &mdash; {projects.length.toString().padStart(2, "0")}
                  </span>
                  <span className="inline-flex items-center gap-2 font-medium tracking-wider uppercase text-[11px] text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    {project.status}
                  </span>
                </div>

                {/* Cinematic Visual Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-surface mb-6 shadow-sm">
                  {project.coverImage ? (
                    <Image
                      src={project.coverImage}
                      alt={`${project.brand} facility & production`}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-surface text-text-secondary text-sm">
                      {project.brand} Facility Documentation
                    </div>
                  )}

                  <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-sm">
                    {project.projectType}
                  </div>
                </div>

                {/* Editorial Metadata & Typography */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-text-secondary tracking-wider uppercase">
                    {project.company} &bull; {project.location}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-light text-primary group-hover:text-secondary transition-colors tracking-tight">
                    {project.brand}
                  </h2>

                  <p className="text-sm text-text-secondary leading-relaxed line-clamp-2 pt-1">
                    {project.description}
                  </p>

                  {/* Clean Inline Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-2 text-xs text-text-secondary/80">
                      {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                        <span key={hIdx} className="flex items-center gap-1.5">
                          <span className="text-accent">&bull;</span>
                          <span>{highlight}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Sleek Interactive Arrow */}
                  <div className="pt-4">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary group-hover:text-secondary border-b border-primary/30 group-hover:border-primary pb-1 transition-all">
                      <span>Explore Case Study</span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Strategic Consultation Banner */}
          <div className="mt-28 pt-16 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-xl sm:text-2xl font-light text-primary mb-2">
                Have a plant project in planning or need a facility revival?
              </h3>
              <p className="text-sm text-text-secondary">
                Discuss feasibility, cleanroom layouts, or operational management directly with our principal consultants.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary text-background font-medium hover:bg-secondary transition-colors text-sm"
              >
                Book Strategy Session
              </Link>
              <a
                href="https://wa.me/918884677773?text=Hi%20Essar%20Enterprises%2C%20I%20would%20like%20to%20consult%20about%20a%20packaged%20drinking%20water%20plant%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 border border-border bg-surface text-primary font-medium hover:border-primary transition-colors text-sm rounded-sm inline-flex items-center gap-2.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.18-.543-1.636-.677-2.736-2.316-2.82-2.428-.084-.112-.667-.887-.667-1.691 0-.804.42-1.201.57-1.365.144-.157.315-.198.42-.198.106 0 .211.002.304.006.098.004.23-.037.36.275.133.32.457 1.11.498 1.192.041.082.069.178.013.288-.056.11-.084.179-.168.275-.084.096-.176.216-.252.29-.084.083-.173.173-.075.341.098.167.436.721.936 1.167.644.574 1.187.752 1.356.835.168.083.267.07.367-.044.1-.115.429-.5.544-.673.114-.173.23-.144.385-.087.156.057.99.467 1.16.552.17.085.284.127.326.198.042.072.042.417-.102.822z" />
                </svg>
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
