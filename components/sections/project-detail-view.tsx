"use client"

import { ProjectImageGallery } from "./project-image-gallery"
import { ProjectFAQ } from "./project-faq"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, IndianRupee, CheckCircle, Star, Phone, MessageCircle } from 'lucide-react'

interface ProjectDetailViewProps {
  project: any
}


export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const formatBudget = (budget: any) => {
    if (!budget) return "Contact for Quote"
 
    const { min, max, currency } = budget
    const formatAmount = (amount: number) => {
      if (amount >= 10000000) return `${(amount / 10000000).toFixed(1)}Cr`
      if (amount >= 100000) return `${(amount / 100000).toFixed(1)}L`
      if (amount >= 1000) return `${(amount / 1000).toFixed(1)}K`
      return amount.toString()
    }
    console.log("project",project)
    
    if (min && max) {
      return `₹${formatAmount(min)} – ₹${formatAmount(max)}`
    }
    return `₹${formatAmount(min || max)}`
  }

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200'
      case 'ongoing': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'planned': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getCategoryIcon = (categoryName: string) => {
    const name = categoryName?.toLowerCase() || ''
    if (name.includes('healthcare') || name.includes('hospital')) return '🏥'
    if (name.includes('residential') || name.includes('home')) return '🏠'
    if (name.includes('commercial') || name.includes('office')) return '🏢'
    if (name.includes('retail') || name.includes('shop')) return '🛍️'
    if (name.includes('restaurant') || name.includes('cafe')) return '🍽️'
    return '🏗️'
  }

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="py-0 ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
         

          {/* Image Gallery */}
          <ProjectImageGallery 
            images={project.images || []} 
            title={project.title} 
          />
        </div>
      </div>
   


      {/* Content Section */}
      <div className="px-4 py-0 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-12 lg:col-span-2">
            {/* Project Overview */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="flex items-center gap-3 mb-6 text-2xl font-bold text-gray-900">
                 Project Overview
                </h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  {project.description || "This project showcases our expertise in creating functional and aesthetically pleasing spaces that meet our clients' specific requirements."}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge variant="secondary" className="text-blue-800 bg-blue-100">
                    {project.category?.name}
                  </Badge>
                  {project.subcategories?.map((sub: any, index: number) => (
                    <Badge key={index} variant="outline" className="text-teal-700 border-teal-200">
                      {sub.name}
                    </Badge>
                  ))}
                  <Badge className={`${getStatusColor(project.status)} border`}>
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {project.status?.charAt(0).toUpperCase() + project.status?.slice(1)}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <ProjectFAQ project={project} />

            {/* Testimonial */}
            {/* {project.testimonials && project.testimonials.length > 0 && (
  <div className="space-y-6">
    {project.testimonials.map((testimonial, index) => (
      <div
        key={index}
        
      >
        <Card className="border-0 shadow-sm bg-gradient-to-r from-blue-50 to-teal-50">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <Quate className="flex-shrink-0 w-8 h-8 mt-1 text-blue-600" />
              <div>
                <p className="mb-4 text-lg italic leading-relaxed text-gray-700">
                  "{testimonial.feedback}"
                </p>
                <div className="flex items-center gap-4">
                  {testimonial.image && (
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="object-cover w-12 h-12 rounded-full"
                    />
                  )}
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {testimonial.rating}/5
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ))}
  </div>
)} */}

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Details */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-6 text-xl font-bold text-gray-900">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-600">Year</span>
                    <span className="font-semibold text-gray-900">{project.year}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-600">Status</span>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status?.charAt(0).toUpperCase() + project.status?.slice(1)}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-600">Duration</span>
                    <span className="font-semibold text-gray-900">
                      {project.duration} {project.durationType}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-600">Budget</span>
                    <span className="font-semibold text-gray-900">{formatBudget(project.budget)}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-600">Location</span>
                    <span className="font-semibold text-gray-900">
                      {project.location?.city}, {project.location?.state}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-600">Category</span>
                    <span className="font-semibold text-gray-900">{project.category?.name}</span>
                  </div>
                  <div className="flex items-start justify-between py-2">
                    <span className="font-medium text-gray-600">Services</span>
                    <span className="font-semibold text-gray-900">{project.service?.title}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className=" max-h-[45rem] overflow-auto">
                            {/* Testimonial */}
            {true && (
  <div className="space-y-6">
    {project.testimonials.map((testimonial, index) => (
      <div
        key={index}
        
      >
        <Card className="border-0 shadow-sm bg-gradient-to-r from-blue-50 to-teal-50">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              {/* <Quate className="flex-shrink-0 w-8 h-8 mt-1 text-blue-600" /> */}
              <div>
                <p className="mb-4 text-lg italic leading-relaxed text-gray-700">
                  "{testimonial.feedback}"
                </p>
                <div className="flex items-center gap-4">
                  {testimonial.image && (
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="object-cover w-12 h-12 rounded-full"
                    />
                  )}
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {testimonial.rating}/5
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ))}
  </div>
)}
              </div>
            {/* Contact CTA */}
            {/* <Card className="text-white border-0 shadow-lg bg-gradient-to-br from-blue-600 to-teal-600">
              <CardContent className="p-6 text-center">
                <h3 className="mb-4 text-xl font-bold">Interested in Similar Project?</h3>
                <p className="mb-6 text-blue-100">
                  Get a free consultation and quote for your project
                </p>
                <div className="space-y-3">
                  <Button 
                    className="w-full text-blue-600 bg-white hover:bg-blue-50"
                    onClick={() => window.location.href = '/get-quote'}
                  >
                    Get Free Quote
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full text-white border-white hover:bg-white/10"
                    onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full text-white border-white hover:bg-white/10"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  )
}
