import { notFound } from "next/navigation"
import { PortfolioGrid } from "@/components/sections/portfolio-grid"
import { getCategoryBySlug } from "@/lib/firebase"
import type { Metadata } from "next"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = await getCategoryBySlug(params.category)

  if (!category) {
    return {
      title: "Category Not Found",
    }
  }

  return {
    title: `${category.name} Projects - Portfolio`,
    description: `View our completed ${category.name.toLowerCase()} projects. ${category.description}`,
    openGraph: {
      title: `${category.name} Projects | Dhanmika Buildcon`,
      description: `Explore our ${category.name.toLowerCase()} construction and design projects.`,
      url: `https://dhanmikabuildcon.com/portfolio/${params.category}`,
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await getCategoryBySlug(params.category)

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-24">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">{category.name} Projects</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">{category.description}</p>
        </div>
      </section>

      <PortfolioGrid categoryFilter={category.id} />
    </div>
  )
}
