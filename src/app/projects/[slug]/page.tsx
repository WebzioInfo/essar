import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { getProject, projects } from "@/content/projects";
import { projectArticleSchema } from "@/seo/schema";
import { getProjectMedia } from "@/utils/media";
import Image from "next/image";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.brand} Project | Essar Enterprises Case Study`,
    description: `Read how Essar Enterprises supported the ${project.brand} water plant project in ${project.location}.`,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.brand} | Packaged Drinking Water Plant Setup`,
      description: project.description,
      type: "article",
      url: `https://essarenterprises.co.in/projects/${slug}`,
      images: [
        {
          url: `/images/projects/${slug}/${slug}-logo.webp`,
          width: 1200,
          height: 630,
          alt: `${project.brand} facility in ${project.location}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.brand} | Turnkey Project by Essar`,
      description: project.description,
      images: [`/images/projects/${slug}/${slug}-logo.webp`],
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

  return (
    <>
      <SchemaMarkup type="Article" data={projectArticleSchema(project)} />

      <div className="bg-primary pt-32 pb-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-xs font-semibold tracking-widest text-text-secondary uppercase mb-6">
            Project Case Study
          </div>
          <h1 className="heading-xl text-white mb-6">{project.brand}</h1>
          <p className="heading-sm text-surface font-normal opacity-80">{project.company} &mdash; {project.location}</p>
        </div>
      </div>

      <div className="bg-background py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="heading-md mb-6">The Challenge</h2>
                <p className="body-lg text-text-secondary">{project.challenge}</p>
              </section>

              <section>
                <h2 className="heading-md mb-6">The Solution</h2>
                <p className="body-lg text-text-secondary">{project.solution}</p>
              </section>

              {/* Dynamic Media Gallery */}
              {(images.length > 0 || videos.length > 0) && (
                <section className="mt-12">
                  <h2 className="heading-md mb-6">Project Media</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {videos.map((video, idx) => (
                      <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border border-border">
                        <video 
                          src={video} 
                          controls 
                          className="w-full h-full object-cover"
                          preload="metadata"
                        />
                      </div>
                    ))}
                    {images.map((img, idx) => (
                      <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-border">
                        <Image 
                          src={img} 
                          alt={`${project.brand} project media ${idx + 1}`} 
                          fill 
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <div>
              <div className="premium-card p-8 bg-surface">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-primary">Project Details</h3>

                <div className="space-y-6">
                  <div>
                    <span className="block text-xs text-text-secondary uppercase mb-1">Status</span>
                    <span className="font-medium text-foreground">{project.status}</span>
                  </div>

                  <div>
                    <span className="block text-xs text-text-secondary uppercase mb-1">Location</span>
                    <span className="font-medium text-foreground">{project.location}</span>
                  </div>

                  <div>
                    <span className="block text-xs text-text-secondary uppercase mb-2">Services Provided</span>
                    <ul className="space-y-2">
                      {project.services.map((service) => (
                        <li key={service} className="flex items-start text-sm font-medium text-foreground">
                          <svg className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/contact" className="w-full block text-center py-4 bg-primary text-white font-medium rounded-md hover:bg-secondary transition-colors">
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
