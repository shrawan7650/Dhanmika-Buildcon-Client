import { notFound } from "next/navigation";
import { ProjectGallery } from "@/components/sections/project-gallery";
import { ProjectDetails } from "@/components/sections/project-details";
import { RelatedProjects } from "@/components/sections/related-projects";
import { ProjectTestimonial } from "@/components/sections/project-testimonial";
import { getProjectBySlug } from "@/lib/firebase";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Luxe Interiors Portfolio`,
      description: project.description,
      url: `https://luxeinteriors.com/project/${params.slug}`,
      images: project.images?.slice(0, 3) || [],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
        {JSON.stringify(project) === "{}" && (
          <div className="text-center text-gray-600">
            <p className="text-lg">Project details not available.</p>
          </div>
        )}
      <ProjectGallery project={project} />
      <ProjectDetails project={project} />
      {project.testimonialId && (
        <ProjectTestimonial testimonialId={project.testimonialId} />
      )}
      <RelatedProjects categoryId={project.categoryId} excludeId={project.id} />
    </div>
  );
}
