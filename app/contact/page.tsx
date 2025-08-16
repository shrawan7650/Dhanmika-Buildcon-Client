import { ContactForm } from "@/components/forms/contact-form"
import { ContactInfo } from "@/components/sections/contact-info"
import { MapSection } from "@/components/sections/map-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Luxe Interiors for your interior design project. Schedule a consultation or ask us any questions.",
  openGraph: {
    title: "Contact Luxe Interiors | Get In Touch",
    description: "Get in touch for your interior design project. Schedule a consultation today.",
    url: "https://luxeinteriors.com/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your space? Let's discuss your vision and bring it to life.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold font-playfair mb-8">Get In Touch</h2>
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* <MapSection /> */}
    </div>
  )
}
