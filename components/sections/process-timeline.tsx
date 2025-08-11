"use client"

import { motion } from "framer-motion"
import { Search, Palette, Hammer, CheckCircle } from "lucide-react"

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Consultation",
    description:
      "We start by understanding your vision, lifestyle, and requirements through detailed consultation.",
    duration: "1-2 weeks",
  },
  {
    icon: Palette,
    title: "Design Development",
    description:
      "Our team creates detailed design concepts, mood boards, and 3D visualizations for your approval.",
    duration: "2-4 weeks",
  },
  {
    icon: Hammer,
    title: "Implementation",
    description:
      "We coordinate with contractors and vendors to bring your design to life with precision and care.",
    duration: "4-12 weeks",
  },
  {
    icon: CheckCircle,
    title: "Final Reveal",
    description:
      "We add the finishing touches and reveal your transformed space, ensuring every detail is perfect.",
    duration: "1 week",
  },
]

export function ProcessTimeline() {
  return (
    <section className="py-20 bg-white overflow-x-hidden"> {/* prevent overflow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">
            Our Design Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to final reveal, we follow a proven
            process that ensures exceptional results every time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute top-44 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-amber-200" />

          <div className="space-y-12 lg:space-y-24 relative">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`flex flex-col lg:flex-row items-center lg:gap-16 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className="flex-1 text-center lg:text-left w-full">
                    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 relative">
                      {/* Icon & duration */}
                      <div className="flex items-center justify-center lg:justify-start mb-4">
                        <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-sm text-amber-600 font-medium">
                          {step.duration}
                        </div>
                      </div>
                      {/* Title & description */}
                      <h3 className="text-2xl font-bold font-playfair mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0 my-8 lg:my-0">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg lg:text-xl">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Spacer for desktop alternating layout */}
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
