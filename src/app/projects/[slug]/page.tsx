import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { getProject, projects } from "@/content/projects";
import { getService } from "@/content/services";
import { projectArticleSchema } from "@/seo/schema";
import { getProjectMedia } from "@/utils/media";

export async function generateStaticParams() {
  const params = projects.map((project) => ({ slug: project.slug }));
  params.push({ slug: "tirur-project" }, { slug: "ponnani-project" });
  return params;
}

import { SEO_CONFIG, getBreadcrumbSchema } from "@/config/seo";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  const ogImage = project.coverImage || `/images/projects/${slug}/${slug}-logo.webp`;

  return {
    title: `${project.brand} Case Study | ${project.projectType} | Essar Enterprises`,
    description: `Read how Essar Enterprises supported the ${project.brand} packaged drinking water facility in ${project.location}.`,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.brand} | ${project.projectType} by Essar Enterprises`,
      description: project.description,
      type: "article",
      url: `${SEO_CONFIG.canonicalUrl}/projects/${slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${project.brand} facility in ${project.location}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.brand} | Case Study by Essar`,
      description: project.description,
      images: [ogImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const { images, videos } = getProjectMedia(slug);

  // Map serviceSlugs to actual service objects if present
  const relatedServices = (project.serviceSlugs || [])
    .map((sSlug) => getService(sSlug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: `${project.brand} Case Study`, url: `/projects/${slug}` },
  ]);

  return (
    <>
      <SchemaMarkup type="Article" data={projectArticleSchema(project)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero Header */}
      <div className="bg-primary text-white pt-32 pb-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold tracking-widest text-text-secondary uppercase">
              Project Case Study
            </span>
            <span className="text-text-secondary opacity-40">•</span>
            <span className="text-xs font-medium px-2.5 py-1 bg-white/10 text-white rounded-full">
              {project.projectType}
            </span>
          </div>

          <h1 className="heading-xl text-white mb-4 tracking-tight">
            {project.brand}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="heading-sm text-surface/90 font-normal max-w-3xl leading-relaxed">
              {project.company} &mdash; <span className="opacity-80">{project.location}</span>
            </p>

            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-medium rounded transition-colors"
              >
                <span>Visit Client Website</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-background py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-16">

              {/* Overview */}
              <section className="space-y-8">
                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-text-secondary mb-3">
                    Executive Summary
                  </div>
                  <p className="body-xl text-primary font-normal leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.coverImage && (
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-border bg-surface shadow-sm">
                    <Image
                      src={project.coverImage}
                      alt={`${project.brand} product showcase`}
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 1024px) 100vw, 65vw"
                    />
                    <div className="absolute bottom-3 left-3 bg-primary/85 backdrop-blur-sm text-white text-[11px] font-medium px-3 py-1 rounded-sm">
                      {project.brand} &mdash; Commercial Packaged Product
                    </div>
                  </div>
                )}
              </section>

              {/* The Challenge */}
              <section className="pt-8 border-t border-border">
                <div className="text-xs font-semibold tracking-widest uppercase text-text-secondary mb-3">
                  The Problem
                </div>
                <h2 className="heading-md mb-6 text-primary">The Challenge</h2>
                <p className="body-lg text-text-secondary leading-relaxed">
                  {project.challenge}
                </p>
              </section>

              {/* Essar's Intervention */}
              <section className="pt-8 border-t border-border">
                <div className="text-xs font-semibold tracking-widest uppercase text-text-secondary mb-3">
                  Engineering & Operational Execution
                </div>
                <h2 className="heading-md mb-6 text-primary">Essar&apos;s Intervention</h2>
                <p className="body-lg text-text-secondary leading-relaxed">
                  {project.intervention || project.solution}
                </p>
              </section>

              {/* The Revival / Outcome */}
              {(project.revival || project.outcome) && (
                <section className="pt-8 border-t border-border">
                  <div className="text-xs font-semibold tracking-widest uppercase text-text-secondary mb-3">
                    Verified Outcome
                  </div>
                  <h2 className="heading-md mb-6 text-primary">
                    {project.revival ? "The Revival & Commercial Outcome" : "Operational Result"}
                  </h2>
                  <p className="body-lg text-text-secondary leading-relaxed mb-8">
                    {project.revival || project.outcome}
                  </p>

                  {/* Highlights Grid */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      {project.highlights.map((item, idx) => (
                        <div key={idx} className="p-5 bg-surface rounded-lg border border-border flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-sm font-medium text-primary leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )}

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <section className="pt-8 border-t border-border">
                  <div className="text-xs font-semibold tracking-widest uppercase text-text-secondary mb-3">
                    Capabilities Deployed
                  </div>
                  <h2 className="heading-md mb-6 text-primary">Related Services</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {relatedServices.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/services/${svc.slug}`}
                        className="group p-6 bg-surface hover:bg-surface-alt border border-border hover:border-primary transition-all rounded-lg flex flex-col justify-between"
                      >
                        <div>
                          <h3 className="text-base font-semibold text-primary mb-2 group-hover:text-primary transition-colors">
                            {svc.title}
                          </h3>
                          <p className="text-xs text-text-secondary leading-relaxed mb-4">
                            {svc.subtitle}
                          </p>
                        </div>
                        <span className="text-xs font-medium text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Learn about service &rarr;
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Project Media Gallery */}
              {(images.length > 0 || videos.length > 0) && (
                <section className="pt-8 border-t border-border">
                  <div className="text-xs font-semibold tracking-widest uppercase text-text-secondary mb-3">
                    Facility Documentation
                  </div>
                  <h2 className="heading-md mb-6 text-primary">Project Media</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {videos.map((video, idx) => (
                      <div key={`video-${idx}`} className="relative aspect-video rounded-lg overflow-hidden border border-border bg-black">
                        <video 
                          src={video} 
                          controls 
                          autoPlay
                          loop 
                          muted 
                          playsInline
                          className="w-full h-full object-cover"
                          preload="metadata"
                        />
                      </div>
                    ))}
                    {images.map((img, idx) => (
                      <div key={`img-${idx}`} className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border bg-surface">
                        <Image 
                          src={img} 
                          alt={`${project.brand} project documentation ${idx + 1}`} 
                          fill 
                          className="object-cover object-center"
                          loading="lazy"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
              
              {/* Project Facts Card */}
              <div className="p-8 bg-surface border border-border rounded-xl">
                <h3 className="text-xs font-bold uppercase tracking-wider mb-6 text-primary">
                  Project Parameters
                </h3>

                <div className="space-y-6 text-sm">
                  <div>
                    <span className="block text-xs text-text-secondary uppercase mb-1">Operational Status</span>
                    <span className="font-semibold text-primary">{project.status}</span>
                  </div>

                  <div>
                    <span className="block text-xs text-text-secondary uppercase mb-1">Engagement Type</span>
                    <span className="font-semibold text-primary">{project.projectType}</span>
                  </div>

                  <div>
                    <span className="block text-xs text-text-secondary uppercase mb-1">Location</span>
                    <span className="font-semibold text-primary">{project.location}</span>
                  </div>

                  <div>
                    <span className="block text-xs text-text-secondary uppercase mb-1">Client Entity</span>
                    <span className="font-semibold text-primary">{project.company}</span>
                  </div>

                  {project.websiteUrl && (
                    <div>
                      <span className="block text-xs text-text-secondary uppercase mb-1">Official Website</span>
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline group/link"
                      >
                        <span>{project.websiteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                        <svg className="w-3.5 h-3.5 text-text-secondary group-hover/link:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}

                  <div>
                    <span className="block text-xs text-text-secondary uppercase mb-2">Scope of Services</span>
                    <ul className="space-y-2">
                      {project.services.map((service) => (
                        <li key={service} className="flex items-start text-xs font-medium text-primary">
                          <svg className="w-3.5 h-3.5 text-primary mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Direct Consultation Card */}
              <div className="p-8 bg-primary text-white rounded-xl">
                <h3 className="text-base font-semibold mb-3">
                  Have a similar plant project?
                </h3>
                <p className="text-xs text-surface/80 leading-relaxed mb-6">
                  Whether launching a new bottled water facility or reviving an existing plant, discuss your parameters directly with our consultants.
                </p>

                <div className="space-y-3">
                  <Link 
                    href="/contact" 
                    className="w-full block text-center py-3 px-4 bg-white text-primary font-medium text-xs rounded hover:bg-surface transition-colors"
                  >
                    Request Strategy Session
                  </Link>
                  <a
                    href="https://wa.me/918884677773?text=Hi%20Essar%20Enterprises%2C%20I%20would%20like%20to%20consult%20about%20a%20packaged%20drinking%20water%20plant%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 text-center py-3 px-4 border border-white/20 text-white font-medium text-xs rounded hover:bg-white/10 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.072-2.18-.543-1.636-.677-2.736-2.316-2.82-2.428-.084-.112-.667-.887-.667-1.691 0-.804.42-1.201.57-1.365.144-.157.315-.198.42-.198.106 0 .211.002.304.006.098.004.23-.037.36.275.133.32.457 1.11.498 1.192.041.082.069.178.013.288-.056.11-.084.179-.168.275-.084.096-.176.216-.252.29-.084.083-.173.173-.075.341.098.167.436.721.936 1.167.644.574 1.187.752 1.356.835.168.083.267.07.367-.044.1-.115.429-.5.544-.673.114-.173.23-.144.385-.087.156.057.99.467 1.16.552.17.085.284.127.326.198.042.072.042.417-.102.822z" />
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}
