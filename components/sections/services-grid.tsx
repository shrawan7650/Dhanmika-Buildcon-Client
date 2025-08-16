"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Home, Building, Palette, Lightbulb, Clock, DollarSign } from "lucide-react"
import { motion } from "framer-motion"
import { getServices, type Service } from "@/lib/firebase"

const iconMap = {
  home: Home,
  building: Building,
  palette: Palette,
  lightbulb: Lightbulb,
}

export function ServicesGrid({srevicePagination = false}: {srevicePagination?: boolean
}) {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices()
        setServices(data)
      } catch (error) {
        console.error("Error fetching services:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  if (loading) {
    return (
      <section className="py-5">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="p-6 bg-white shadow-sm rounded-xl animate-pulse">
                <div className="w-12 h-12 mb-4 bg-gray-200 rounded-lg" />
                <div className="w-3/4 h-6 mb-2 bg-gray-200 rounded" />
                <div className="w-full h-4 mb-4 bg-gray-200 rounded" />
                <div className="w-1/2 h-4 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-5">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-center font-playfair">Our Services</h2>
        <p className="mb-12 text-lg text-center text-gray-600">
          Explore our range of interior design services tailored to meet your unique needs and style preferences.
        </p>
  

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {(srevicePagination ? services : services.slice(0, 3)).map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Home
            console.log("service",service)
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all duration-300 bg-white border-0 cursor-pointer group hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="relative mb-6 overflow-hidden rounded-lg">
                      <img
                        src={service.image || "/placeholder.svg?height=200&width=300&query=interior design service"}
                        alt={service.title}
                        className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-amber-600">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    <h3 className="mb-3 text-xl font-bold transition-colors font-playfair group-hover:text-amber-600">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-gray-600">{service.description}</p>

                    {/* <div className="mb-6 space-y-3"> */}
                      {/* <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-500">
                          <Clock className="w-4 h-4 mr-2" />
                          Duration:
                        </div>
                        <span className="font-medium">{service.duration}
                        {service.durationType}
                        </span>
                      </div> */}
                      {/* <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-500">
                        <span className="w-4 h-4 mr-2 text-base">₹</span>
                          Starting from:
                        </div>
                        <span className="font-medium text-amber-600">{service?.priceRange && service?.priceRange.split(" - ")[0]||0}</span>
                      </div> */}
                    {/* </div> */}

                    {service.features && service.features.length > 0 && (
                      <div className="mb-6">
                        <h4 className="mb-2 text-sm font-semibold text-gray-900">What's Included:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {
                      !srevicePagination && (    <Button
                        asChild
                        className="w-full transition-colors bg-transparent group-hover:bg-amber-600 group-hover:text-white"
                        variant="outline"
                      >
                        <Link href={`/services`}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>)
                    }

                
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
