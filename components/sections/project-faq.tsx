"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react'

interface ProjectFAQProps {
  project: any
}

export function ProjectFAQ({ project }: ProjectFAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const formatBudget = (budget: any) => {
    if (!budget) return "contact us for detailed pricing"
    
    const { min, max } = budget
    const formatAmount = (amount: number) => {
      if (amount >= 10000000) return `${(amount / 10000000).toFixed(1)} crores`
      if (amount >= 100000) return `${(amount / 100000).toFixed(1)} lakhs`
      if (amount >= 1000) return `${(amount / 1000).toFixed(1)} thousand`
      return amount.toString()
    }
    
    if (min && max) {
      return `₹${formatAmount(min)} to ₹${formatAmount(max)}`
    }
    return `₹${formatAmount(min || max)}`
  }

  const generateFAQs = () => {
    const categoryName = project.category?.name || 'interior design'
    const serviceName = project.service?.title || 'interior design services'
    const location = `${project.location?.city}, ${project.location?.state}` || 'your location'
    const duration = `${project.duration} ${project.durationType}` || '4-6 weeks'
    const budget = formatBudget(project.budget)
    const subcategories = project.subcategories?.map((sub: any) => sub.name).join(', ') || 'various services'

    return [
      {
        question: `What does this ${categoryName.toLowerCase()} project include?`,
        answer: `This ${categoryName.toLowerCase()} project includes comprehensive ${serviceName.toLowerCase()} covering ${subcategories}. We handle everything from initial design concepts to final execution, ensuring every detail meets your requirements and quality standards.`
      },
      {
        question: `How long does a similar ${categoryName.toLowerCase()} project take?`,
        answer: `Based on this project's scope, similar ${categoryName.toLowerCase()} projects typically take ${duration} to complete. The timeline depends on project complexity, size, and specific requirements. We provide detailed project schedules during the planning phase.`
      },
      {
        question: `What is the budget range for similar projects?`,
        answer: `For similar ${categoryName.toLowerCase()} projects, the budget typically ranges ${budget}. The final cost depends on materials chosen, project size, complexity, and specific customizations. We provide detailed quotations after site assessment.`
      },
      {
        question: `Do you provide services in ${location}?`,
        answer: `Yes, we provide comprehensive ${serviceName.toLowerCase()} in ${location} and surrounding areas. Our team is familiar with local regulations, suppliers, and logistics, ensuring smooth project execution in your area.`
      },
      {
        question: `What materials and techniques were used in this project?`,
        answer: `This project utilized high-quality materials and modern techniques specific to ${categoryName.toLowerCase()}. We use premium materials, advanced installation methods, and follow industry best practices to ensure durability and aesthetic appeal.`
      },
      {
        question: `Do you handle permits and approvals for such projects?`,
        answer: `Yes, we assist with all necessary permits and approvals required for ${categoryName.toLowerCase()} projects. Our team is experienced with local regulations and can guide you through the approval process to ensure compliance.`
      },
      {
        question: `What warranty do you provide for similar work?`,
        answer: `We provide comprehensive warranty coverage for our ${serviceName.toLowerCase()}. This includes material warranties and workmanship guarantees. Specific warranty terms depend on the services provided and materials used.`
      },
      {
        question: `How do you ensure quality control during the project?`,
        answer: `We maintain strict quality control through regular site inspections, progress reviews, and adherence to our quality standards. Our experienced supervisors monitor each phase of the ${categoryName.toLowerCase()} project to ensure excellence.`
      },
      {
        question: `Can the design be customized according to my preferences?`,
        answer: `We specialize in customized ${categoryName.toLowerCase()} solutions. Our design team works closely with clients to understand their preferences, lifestyle, and requirements to create personalized spaces that reflect their vision.`
      },
      {
        question: `What post-completion services do you offer?`,
        answer: `We provide comprehensive post-completion services including maintenance guidance, warranty support, and future modification assistance. Our relationship with clients continues beyond project completion to ensure long-term satisfaction.`
      }
    ]
  }

  const faqs = generateFAQs()

  return (
    <Card className="shadow-lg ">
      <CardContent className="p-5">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-6 h-6 text-blue-600" />
          <h2 className="sm:text-2xl text-base  font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border w-full border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-3 py-2 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-4 pb-4 pt-2 border-t border-gray-100 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-100">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-4">
              Our experts are here to help you with your project requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={() => window.location.href = '/contact'}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Contact Our Experts
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Chat
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
