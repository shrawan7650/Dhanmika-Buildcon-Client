"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"
import { getTestimonialById, type Testimonial } from "@/lib/firebase"

interface ProjectTestimonialProps {
  testimonialId: string
}

export function ProjectTestimonial({ testimonialId }: ProjectTestimonialProps) {
  const [testimonial, setTestimonial] = useState<Testimonial | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const data = await getTestimonialById(testimonialId)
        setTestimonial(data)
      } catch (error) {
        console.error("Error fetching testimonial:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonial()
  }, [testimonialId])

  if (loading) {
    return (
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-32 mx-auto mb-6" />
            <div className="h-24 bg-gray-200 rounded mb-6" />
            <div className="h-4 bg-gray-200 rounded w-48 mx-auto" />
            <div className="h-24 bg-gray-200 rounded mb-6" />
            <div className="h-4 bg-gray-200 rounded w-48 mx-auto" />
          </div>
        </div>
      </section>
    )
  }

  if (!testimonial) {
    return null
  }

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Card className="bg-white shadow-xl border-0">
            <CardContent className="p-8 md:p-12 text-center">
              <Quote className="w-12 h-12 text-amber-600 mx-auto mb-6" />

              <blockquote className="text-xl md:text-2xl font-light mb-8 leading-relaxed text-gray-700">
                "{testimonial.feedback}"
              </blockquote>

              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? "text-amber-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-center space-x-4">
                {testimonial.image && (
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-amber-400"
                  />
                )}
                <div>
                  <div className="font-semibold text-lg text-gray-900">{testimonial.name}</div>
                  <div className="text-amber-600 text-sm">Verified Client</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
