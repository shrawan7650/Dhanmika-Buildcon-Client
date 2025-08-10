import { BookingForm } from "@/components/forms/booking-form"
import { GetQuoteForm } from "@/components/forms/get-quote-form"
import { QuoteInfo } from "@/components/sections/quote-info"
import { QuoteProcess } from "@/components/sections/quote-process"
import { stat } from "fs"
import type { Metadata } from "next"
import { useSelector } from "react-redux"

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
      <section className="relative py-24 text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl font-playfair">Get Free Quote</h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-200 md:text-2xl">
            Tell us about your project and get a detailed quote within 24 hours. No hidden charges, transparent pricing.
          </p>
        </div>
      </section>

      {/* Quote Form and Info */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold font-playfair">Request Your Quote</h2>
              <BookingForm />
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
