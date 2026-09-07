import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Project Portfolio | Essar Enterprises",
  description:
    "View Essar Enterprises packaged drinking water plant projects including KENBY, INSTAPANI, managed operations, and ongoing South India plant launches.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsIndexPage() {
  return (
    <>
      <div className="bg-primary pt-32 pb-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="heading-xl text-white mb-6">Proven Execution</h1>
          <p className="heading-sm text-surface font-normal max-w-2xl mx-auto opacity-80">Building South India&apos;s packaged drinking water brands.</p>
        </div>
      </div>

      <div className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-16">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="block group">
                <div className="premium-card p-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold tracking-widest text-text-secondary uppercase mb-3">
                      {project.status}
                    </div>
                    <h2 className="heading-sm mb-2 group-hover:text-primary transition-colors">{project.brand}</h2>
                    <p className="text-sm text-text-secondary font-medium mb-6">{project.company}</p>
                    <div className="w-8 h-1 bg-primary mb-6 transition-all group-hover:w-16"></div>
                    <p className="body-md">{project.description}</p>
                  </div>
                  <div className="mt-8 flex items-center text-primary font-medium text-sm group-hover:underline">
                    View Case Study &rarr;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
