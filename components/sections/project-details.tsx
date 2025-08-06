"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Clock, IndianRupee, Tag, ArrowRight, Building, User } from "lucide-react"
import Link from "next/link"
import { getCategories, getServices, type Project, type Category, type Service } from "@/lib/firebase"

interface ProjectDetailsProps {
  project: Project
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const [category, setCategory] = useState<Category | null>(null)
  const [service, setService] = useState<Service | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesData, servicesData] = await Promise.all([getCategories(), getServices()])

        const categoryData = categoriesData.find((cat) => cat.id === project.category)
        const serviceData = servicesData.find((srv) => srv.id === project.service)

        setCategory(categoryData || null)
        setService(serviceData || null)
      } catch (error) {
        console.error("Error fetching project details:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [project.category, project.service])

  const formatBudget = (budget: { currency: string; min: number; max: number }) => {
    const formatAmount = (amount: number) => {
      if (amount >= 10000000) return `${(amount / 10000000).toFixed(1)} Crore`
      if (amount >= 100000) return `${(amount / 100000).toFixed(1)} Lakh`
      if (amount >= 1000) return `${(amount / 1000).toFixed(1)} Thousand`
      return amount.toString()
    }

    return `₹${formatAmount(budget.min)} - ₹${formatAmount(budget.max)}`
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Project Information */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Badge
                  variant={project.status === "completed" ? "default" : "secondary"}
                  className={
                    project.status === "completed"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-yellow-600 hover:bg-yellow-700"
                  }
                >
                  {project.status}
                </Badge>
                {project.featured && <Badge className="bg-red-600 hover:bg-red-700">Featured Project</Badge>}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold font-playfair mb-6">{project.title}</h1>

              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-8">
                <p className="text-xl mb-6">{project.description}</p>
                <p>
                  This project represents our commitment to delivering high-quality construction and design solutions
                  that meet our clients' specific requirements. Every aspect of the project was carefully planned and
                  executed to ensure optimal functionality, aesthetic appeal, and long-term durability.
                </p>
                <p>
                  Our team worked closely with the client throughout the project lifecycle, from initial concept
                  development to final completion, ensuring that all requirements were met within the specified timeline
                  and budget constraints.
                </p>
                <p>
                  The project showcases our expertise in modern construction techniques, quality material selection, and
                  attention to detail that has made us a trusted name in the construction industry.
                </p>
              </div>

              {/* Project Specifications */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold font-playfair mb-4">Project Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Building className="w-5 h-5 text-red-600" />
                    <div>
                      <div className="font-medium text-gray-900">Project Type</div>
                      <div className="text-gray-600">{category?.name || "General Construction"}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-red-600" />
                    <div>
                      <div className="font-medium text-gray-900">Service Provided</div>
                      <div className="text-gray-600">{service?.title || "Construction Services"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Project Metadata */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 sticky top-8"
            >
              <h3 className="text-xl font-bold font-playfair mb-6">Project Details</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Location</div>
                    <div className="text-gray-600">
                      {project.location.city}, {project.location.state}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Completed Year</div>
                    <div className="text-gray-600">{project.year}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Duration</div>
                    <div className="text-gray-600">
                      {project.duration} {project.durationType}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <IndianRupee className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Budget Range</div>
                    <div className="text-gray-600">{formatBudget(project.budget)}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Tag className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Category</div>
                    <div className="text-gray-600">{category?.name || "General"}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Interested in Similar Work?</h4>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <Link href="/get-quote">
                      Get Free Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <h5 className="font-semibold text-red-900 mb-2">Need Similar Project?</h5>
                <p className="text-red-700 text-sm mb-3">
                  Get a customized quote for your {category?.name.toLowerCase() || "construction"} project.
                </p>
                <Button asChild size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                  <Link href="tel:+919386023587">Call: 9386023587</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
