import { Hero } from "@/components/sections/hero"
import { FeaturedServices } from "@/components/sections/featured-services"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel"
import { StatsSection } from "@/components/sections/stats-section"
import { CTASection } from "@/components/sections/cta-section"
import { CompanyOverview } from "@/components/sections/company-overview"
import type { Metadata } from "next"
import { ServicesGrid } from "@/components/sections/services-grid"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Transform your space with Luxe Interiors - award-winning interior design services for luxury residential and commercial projects.",
  openGraph: {
    title: "Luxe Interiors - Premium Interior Design Services",
    description: "Transform your space with our award-winning interior design services.",
    url: "https://luxeinteriors.com",
    images: ["/og-home.jpg"],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      {/* <FeaturedServices /> */}
      <ServicesGrid/>
      <FeaturedProjects />
      <StatsSection />
      <TestimonialsCarousel />
      <CTASection />
    </>
  )
}
