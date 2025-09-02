"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { getTestimonials, type Testimonial } from "@/lib/firebase"

export function TestimonialsCarousel() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials()
        setTestimonials(data.slice(0, 15))
      } catch (error) {
        console.error("Error fetching testimonials:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (loading) {
    return (
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-8 bg-gray-700 rounded w-64 mx-auto mb-4 animate-pulse" />
          <div className="h-32 bg-gray-700 rounded mb-8 animate-pulse" />
          <div className="h-4 bg-gray-700 rounded w-48 mx-auto animate-pulse" />
        </div>
      </section>
    )
  }

  if (testimonials.length === 0) {
    return;

  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with
            us.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardContent className="p-8 md:p-12 text-center">
                  <Quote className="w-12 h-12 text-amber-400 mx-auto mb-6" />

                  <blockquote className="text-xl md:text-2xl font-light mb-8 leading-relaxed">
                    "{currentTestimonial.feedback}"
                  </blockquote>

                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < currentTestimonial.rating ? "text-amber-400 fill-current" : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-center space-x-4">
  {currentTestimonial.image ? (
    <img
      src={currentTestimonial.image}
      alt={currentTestimonial.name}
      className="w-16 h-16 rounded-full object-cover border-2 border-amber-400"
    />
  ) : (
    <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center border-2 border-amber-400 text-lg font-semibold text-gray-700">
      {currentTestimonial.name?.substring(0, 3).toUpperCase()}
    </div>
  )}
  <div>
    <div className="font-semibold text-lg">{currentTestimonial.name}</div>
    {currentTestimonial.linkedProject && (
      <div className="text-amber-400 text-sm">Verified Client</div>
    )}
  </div>
</div>

                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-amber-400" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
