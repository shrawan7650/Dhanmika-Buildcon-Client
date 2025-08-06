import { ServicesGrid } from "@/components/sections/services-grid"
import { ServiceBookingCTA } from "@/components/sections/service-booking-cta"
import { ProcessTimeline } from "@/components/sections/process-timeline"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Discover our comprehensive interior design services including residential design, commercial spaces, consultation, and project management.",
  openGraph: {
    title: "Interior Design Services | Luxe Interiors",
    description: "Comprehensive interior design services for residential and commercial spaces.",
    url: "https://luxeinteriors.com/services",
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive interior design solutions tailored to your unique vision
            and lifestyle.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <ProcessTimeline />
      <ServiceBookingCTA />
    </div>
  )
}
