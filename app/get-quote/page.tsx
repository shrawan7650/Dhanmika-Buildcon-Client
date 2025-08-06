import { GetQuoteForm } from "@/components/forms/get-quote-form"
import { QuoteInfo } from "@/components/sections/quote-info"
import { QuoteProcess } from "@/components/sections/quote-process"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get Free Quote - Construction & Interior Design Services",
  description:
    "Get a free quote for your construction, interior design, or renovation project. Expert services in Patna, Bihar at affordable prices.",
  openGraph: {
    title: "Get Free Quote | Dhanmika Buildcon",
    description: "Get a free quote for your construction and interior design project in Patna.",
    url: "https://dhanmikabuildcon.com/get-quote",
  },
}

export default function GetQuotePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-24">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">Get Free Quote</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Tell us about your project and get a detailed quote within 24 hours. No hidden charges, transparent pricing.
          </p>
        </div>
      </section>

      {/* Quote Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold font-playfair mb-8">Request Your Quote</h2>
              <GetQuoteForm />
            </div>
            <div>
              <QuoteInfo />
            </div>
          </div>
        </div>
      </section>

      <QuoteProcess />
    </div>
  )
}
