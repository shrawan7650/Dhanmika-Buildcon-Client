"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Eye } from "lucide-react"
import { motion } from "framer-motion"
import { getProjects, type Project } from "@/lib/firebase"

interface RelatedProjectsProps {
  categoryId?: string
  excludeId?: string
}

export function RelatedProjects({ categoryId, excludeId }: RelatedProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRelatedProjects = async () => {
      try {
        const allProjects = await getProjects()
        let filtered = allProjects

        // Filter by category if provided
        if (categoryId) {
          filtered = filtered.filter((project) => project.category === categoryId)
        }

        // Exclude current project
        if (excludeId) {
          filtered = filtered.filter((project) => project.id !== excludeId)
        }

        // Limit to 3 projects
        setProjects(filtered.slice(0, 3))
      } catch (error) {
        console.error("Error fetching related projects:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRelatedProjects()
  }, [categoryId, excludeId])

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm animate-pulse">
                <div className="h-64 bg-gray-200" />
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (projects.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Related Projects</h2>
          <p className="text-xl text-gray-600">Discover more of our exceptional design work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl border-0 bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.images?.[0] || "/placeholder.svg?height=300&width=400"}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button asChild size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                        <Link href={`/project/${project.slug}`}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Project
                        </Link>
                      </Button>
                    </div>

                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold font-playfair mb-2 group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">{project.description}</p>
                    <div className="text-sm text-gray-500">
                    {/* {project.location.city}, {project.location.state} */}
                    • {project.year} 
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent"
          >
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
