"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function ServiceBookingCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your space with our expert design services. Book a consultation today and let's bring your vision
            to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-amber-600 text-amber-600 px-8 py-3 bg-transparent"
            >
              <Link href="tel:+91 9386023587">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-amber-600 mb-2">Free</div>
              <div className="text-sm text-gray-600">Initial Consultation</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-600 mb-2">24hrs</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Satisfaction Guarantee</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
