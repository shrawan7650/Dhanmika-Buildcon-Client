import { CompanyStory } from "@/components/sections/company-story"
import { TeamSection } from "@/components/sections/team-section"
import { ValuesSection } from "@/components/sections/values-section"
import { CertificationsSection } from "@/components/sections/certifications-section"
import { ProcessTimeline } from "@/components/sections/process-timeline"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Luxe Interiors - our story, team, values, and approach to creating exceptional interior design experiences.",
  openGraph: {
    title: "About Luxe Interiors | Our Story & Team",
    description: "Learn about our story, team, and approach to exceptional interior design.",
    url: "https://luxeinteriors.com/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">About Luxe Interiors</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Crafting exceptional spaces that reflect your unique style and enhance your lifestyle for over a decade.
          </p>
        </div>
      </section>

      <CompanyStory />
      <TeamSection />
      <ValuesSection />
      <ProcessTimeline />
      <CertificationsSection />
    </div>
  )
}
