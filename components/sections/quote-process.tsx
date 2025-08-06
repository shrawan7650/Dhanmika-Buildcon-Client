"use client"

import { motion } from "framer-motion"
import { FileText, Users, Calculator, CheckCircle } from "lucide-react"

const processSteps = [
  {
    icon: FileText,
    title: "Submit Request",
    description: "Fill out our detailed quote form with your project requirements and preferences.",
    duration: "5 minutes",
  },
  {
    icon: Users,
    title: "Site Visit",
    description: "Our expert team visits your site for accurate measurements and assessment.",
    duration: "1-2 days",
  },
  {
    icon: Calculator,
    title: "Detailed Estimation",
    description: "We prepare a comprehensive quote with material costs, labor, and timeline.",
    duration: "2-3 days",
  },
  {
    icon: CheckCircle,
    title: "Quote Delivery",
    description: "Receive your detailed quote with 3D visualization and project timeline.",
    duration: "Within 24 hours",
  },
]

export function QuoteProcess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">Our Quote Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, transparent, and efficient process to get your project quote within 24 hours.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200 hidden lg:block" />

          <div className="space-y-12 lg:space-y-24">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col lg:gap-16`}
                >
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                      <div className="flex items-center justify-center lg:justify-start mb-4">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-sm text-red-600 font-medium">{step.duration}</div>
                      </div>
                      <h3 className="text-2xl font-bold font-playfair mb-4">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative flex-shrink-0 my-8 lg:my-0">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
