import { notFound } from "next/navigation"
import { ServiceDetail } from "@/components/sections/service-detail"
import { BookingForm } from "@/components/forms/booking-form"
import { RelatedProjects } from "@/components/sections/related-projects"
import { getServiceBySlug } from "@/lib/firebase"
import type { Metadata } from "next"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | Luxe Interiors`,
      description: service.description,
      url: `https://luxeinteriors.com/services/${params.slug}`,
      images: service.image ? [service.image] : [],
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = await getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <ServiceDetail service={service} />

      {/* Booking Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Book Your {service.title}</h2>
            <p className="text-xl text-gray-600">
              Ready to transform your space? Let's discuss your project requirements.
            </p>
          </div>
          <BookingForm serviceId={service.id} serviceName={service.title} />
        </div>
      </section>

      <RelatedProjects categoryId={service.categoryId} />
    </div>
  )
}
