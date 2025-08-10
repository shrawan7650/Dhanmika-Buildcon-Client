// import { notFound } from "next/navigation"
// import { ProjectGallery } from "@/components/sections/project-gallery"
// import { ProjectDetails } from "@/components/sections/project-details"
// import { RelatedProjects } from "@/components/sections/related-projects"
// import { ProjectTestimonial } from "@/components/sections/project-testimonial"
// import { getProjectBySlug } from "@/lib/firebase"
// import type { Metadata } from "next"

// interface ProjectPageProps {
//   params: {
//     category: string
//     slug: string
//   }
// }

// export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
//   const project = await getProjectBySlug(params.slug)

//   if (!project) {
//     return {
//       title: "Project Not Found",
//     }
//   }

//   return {
//     title: `${project.title} - Portfolio`,
//     description: project.description,
//     openGraph: {
//       title: `${project.title} | Dhanmika Buildcon Portfolio`,
//       description: project.description,
//       url: `https://dhanmikabuildcon.com/portfolio/${params.category}/${params.slug}`,
//       images: project.images?.slice(0, 3) || [],
//     },
//   }
// }

// export default async function ProjectPage({ params }: ProjectPageProps) {
//   const project = await getProjectBySlug(params.slug)

//   if (!project) {
//     notFound()
//   }
// console.log("Project data Showing:", project)
//   return (
//     <div className="min-h-screen">
//       {/* <ProjectGallery project={project} /> */}
//       {/* <ProjectDetails project={project} /> */}
//       {project.testimonial && <ProjectTestimonial testimonial={project.testimonial} />}
//       {/* <RelatedProjects categoryId={project.category} excludeId={project.id} /> */}
//     </div>
//   )
// }
import { notFound } from "next/navigation"
import { ProjectDetailView } from "@/components/sections/project-detail-view"
import { RelatedProjects } from "@/components/sections/related-projects"
import { getProjectBySlug } from "@/lib/firebase"
import type { Metadata } from "next"

interface ProjectPageProps {
  params: {
    category: string
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Dhanmika Buildcon Portfolio`,
      description: project.description,
      url: `https://dhanmikabuildcon.com/portfolio/${params.category}/${params.slug}`,
      images: project.images?.slice(0, 3) || [],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug)
console.log("Project data Showing:", project)
  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen mt-16 bg-gray-50">
      <ProjectDetailView project={project} />
      <RelatedProjects categoryId={project.category?.id} excludeId={project.id} />
    </div>
  )
}
