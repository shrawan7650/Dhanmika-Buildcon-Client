"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Home, Building, Palette, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    id: 1,
    title: "Residential Design",
    description: "Transform your home into a personalized sanctuary that reflects your lifestyle and taste.",
    icon: Home,
    image: "/placeholder.svg?height=300&width=400",
    // features: ["Space Planning", "Custom Furniture", "Color Consultation", "Project Management"],
    duration: "6-12 weeks",
    priceRange: "$5,000 - $50,000",
  },
  {
    id: 2,
    title: "Commercial Design",
    description: "Create inspiring workspaces that enhance productivity and reflect your brand identity.",
    icon: Building,
    image: "/placeholder.svg?height=300&width=400",
    // features: ["Brand Integration", "Ergonomic Solutions", "Lighting Design", "Sustainable Materials"],
    duration: "8-16 weeks",
    priceRange: "$10,000 - $100,000",
  },
  {
    id: 3,
    title: "Design Consultation",
    description: "Expert guidance and professional advice to help you make informed design decisions.",
    icon: Lightbulb,
    image: "/placeholder.svg?height=300&width=400",
    // features: ["Design Assessment", "Style Direction", "Budget Planning", "Vendor Recommendations"],
    duration: "1-2 weeks",
    priceRange: "$500 - $2,000",
  },
  {
    id: 4,
    title: "Color & Styling",
    description: "Perfect color palettes and styling solutions to bring harmony and personality to your space.",
    icon: Palette,
    image: "/placeholder.svg?height=300&width=400",
    // features: ["Color Psychology", "Material Selection", "Accessory Styling", "Seasonal Updates"],
    duration: "2-4 weeks",
    priceRange: "$1,000 - $5,000",
  },
]

export function FeaturedServices() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive interior design solutions tailored to your unique vision
            and lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="group cursor-pointer transition-all duration-300 hover:shadow-xl border-0 bg-white"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <div
                        className="h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                        style={{ backgroundImage: `url(${service.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold font-playfair mb-2 group-hover:text-amber-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">{service.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Duration:</span>
                          <span className="font-medium">{service.duration}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Starting from:</span>
                          <span className="font-medium text-amber-600">{service.priceRange.split(" - ")[0]}</span>
                        </div>
                      </div>

                      {hoveredService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t pt-4 mb-4"
                        >
                          <ul className="space-y-1">
                            {service?.feature && service?.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-center">
                                <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}

                      <Button
                        asChild
                        variant="ghost"
                        className="w-full group-hover:bg-amber-600 group-hover:text-white transition-colors"
                      >
                        <Link href={`/services`}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
            <Link href="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
