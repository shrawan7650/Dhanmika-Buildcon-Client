"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, MapPin, Calendar, Clock, IndianRupee } from "lucide-react"
import { motion } from "framer-motion"
import { getProjects, getCategories, getServices, type Project, type Category, type Service } from "@/lib/firebase"
import { useSelector } from "react-redux"
import type { RootState } from "@/lib/store"

interface PortfolioGridProps {
  categoryFilter?: string
}

export function PortfolioGrid({ categoryFilter }: PortfolioGridProps) {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [categories, setCategories] = useState<Record<string, Category>>({})
  const [services, setServices] = useState<Record<string, Service>>({})
  const [loading, setLoading] = useState(true)
  const [visibleCount, setVisibleCount] = useState(10)

  const filters = useSelector((state: RootState) => state.projects.filters)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, categoriesData, servicesData] = await Promise.all([
          getProjects(),
          getCategories(),
          getServices(),
        ])

        setProjects(projectsData)

        // Create lookup maps for categories and services
        const categoryMap: Record<string, Category> = {}
        categoriesData.forEach((cat) => {
          categoryMap[cat.id] = cat
        })
        setCategories(categoryMap)

        const serviceMap: Record<string, Service> = {}
        servicesData.forEach((service) => {
          serviceMap[service.id] = service
        })
        setServices(serviceMap)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    let filtered = projects

    // Apply category filter from props (for category pages)
    if (categoryFilter) {
      filtered = filtered.filter((project) => project.category === categoryFilter)
    }

    // Apply category filter from Redux (for main portfolio page)
    if (filters.category !== "all" && !categoryFilter) {
      filtered = filtered.filter((project) => {
        const category = categories[project.category]
        return category?.name.toLowerCase() === filters.category.toLowerCase()
      })
    }

    // Apply search filter
    if (filters.search) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          project.description.toLowerCase().includes(filters.search.toLowerCase()) ||
          project.location.city.toLowerCase().includes(filters.search.toLowerCase()) ||
          project.location.state.toLowerCase().includes(filters.search.toLowerCase()),
      )
    }

    // Apply sorting
    switch (filters.sortBy) {
      case "latest":
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        break
      case "year":
        filtered.sort((a, b) => b.year - a.year)
        break
      case "category":
        filtered.sort((a, b) => {
          const catA = categories[a.category]?.name || ""
          const catB = categories[b.category]?.name || ""
          return catA.localeCompare(catB)
        })
        break
    }

    setFilteredProjects(filtered)
  }, [projects, categories, filters, categoryFilter])

  const loadMore = () => {
    setVisibleCount((prev) => prev + 12)
  }

  const formatBudget = (budget: { currency: string; min: number; max: number }) => {
    const formatAmount = (amount: number) => {
      if (amount >= 10000000) return `${(amount / 10000000).toFixed(1)}Cr`
      if (amount >= 100000) return `${(amount / 100000).toFixed(1)}L`
      if (amount >= 1000) return `${(amount / 1000).toFixed(1)}K`
      return amount.toString()
    }

    return `₹${formatAmount(budget.min)} - ₹${formatAmount(budget.max)}`
  }

  const getProjectUrl = (project: Project) => {
    const category = categories[project.category]
    const categorySlug = category?.name.toLowerCase().replace(/\s+/g, "-") || "general"
    return `/portfolio/${categorySlug}/${project.slug}`
  }

  if (loading) {
    return (
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm animate-pulse">
                <div className="h-48 bg-gray-200" />
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-1/2 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  const visibleProjects = filteredProjects.slice(0, visibleCount)

  return (
    <section className="py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No projects found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {visibleProjects.map((project, index) => {
                const category = categories[project.category]
                const service = services[project.service]

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                  >
                    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl border-0 bg-white overflow-hidden h-full">
                      <CardContent className="p-0 h-full flex flex-col">
                        <div className="relative overflow-hidden">
                          <img
                            src={
                              project.images?.[0] || "/placeholder.svg?height=200&width=300&query=construction project"
                            }
                            alt={project.title}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Overlay Content */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button asChild size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                              <Link href={getProjectUrl(project)}>
                                <Eye className="w-4 h-4 mr-2" />
                                View Details
                              </Link>
                            </Button>
                          </div>

                          {/* Status Badge */}
                          <div className="absolute top-3 left-3">
                            <Badge
                              variant={project.status === "completed" ? "default" : "secondary"}
                              className={
                                project.status === "completed"
                                  ? "bg-green-400 "
                                  : "bg-yellow-400 hover:bg-yellow-500"
                              }
                            >
                              {project.status}
                            </Badge>
                          </div>

                          {/* Featured Badge */}
                          {/* {project.featured && (
                            <div className="absolute top-3 right-3">
                              <Badge className="bg-red-600 hover:bg-red-700">Featured</Badge>
                            </div>
                          )} */}
                        </div>

                        <div className="p-4 flex-1 flex flex-col">
                          {/* Category */}
                          {/* <div className="mb-2">
                            <Badge variant="outline" className="text-xs">
                              {category?.name || "General"}
                            </Badge>
                          </div> */}

                          {/* Title */}
                          <h3 className="text-lg font-bold font-playfair mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {project.title}
                          </h3>

                          {/* Location */}
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                            <span className="truncate">
                              {project.location.city}, {project.location.state}
                            </span>
                          </div>

                          {/* Year and Duration */}
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {project.year}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {project.duration} {project.durationType}
                            </div>
                          </div>

                          {/* Budget */}
                          <div className="flex items-center text-sm font-medium mb-3">
                           
                            {formatBudget(project.budget)}
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 text-sm line-clamp-2 flex-1 mb-3">{project.description}</p>

                          {/* Service */}
                          {service && <div className="text-xs text-gray-500">Service: {service.title}</div>}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {visibleCount < filteredProjects.length && (
              <div className="text-center mt-12">
                <Button
                  onClick={loadMore}
                  variant="outline"
                  size="lg"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                >
                  Load More Projects ({filteredProjects.length - visibleCount} remaining)
                </Button>
              </div>
            )}

            {/* Results Summary */}
            <div className="text-center mt-8 text-gray-600">
              Showing {Math.min(visibleCount, filteredProjects.length)} of {filteredProjects.length} projects
            </div>
          </>
        )}
      </div>
    </section>
  )
}
