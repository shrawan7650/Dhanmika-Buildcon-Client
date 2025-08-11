import { PortfolioGrid } from "@/components/sections/portfolio-grid"
import { PortfolioFilters } from "@/components/sections/portfolio-filters"
import { PortfolioSearch } from "@/components/sections/portfolio-search"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio - Our Completed Projects",
  description:
    "Explore our portfolio of completed construction and interior design projects including hospitals, homes, apartments, and commercial spaces in Patna, Bihar.",
  openGraph: {
    title: "Portfolio | Dhanmika Buildcon",
    description: "View our completed construction and interior design projects.",
    url: "https://dhanmikabuildcon.com/portfolio",
  },
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Discover our completed construction and interior design projects that showcase our expertise and commitment
            to excellence.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* <PortfolioSearch /> */}
            <PortfolioFilters />
          </div>
        </div>
      </section>

      <PortfolioGrid />
    </div>
  )
}
