"use client"

import { motion } from "framer-motion"
import { Heart, Eye, Lightbulb, Shield } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Client-Centered Approach",
    description:
      "We put our clients at the heart of everything we do, listening carefully to understand their needs, preferences, and lifestyle to create truly personalized spaces.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description:
      "Every element matters. From the selection of materials to the placement of accessories, we ensure that every detail contributes to the overall harmony of the space.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Creativity",
    description:
      "We stay ahead of design trends while respecting timeless principles, bringing fresh ideas and creative solutions to every project we undertake.",
  },
  {
    icon: Shield,
    title: "Quality & Integrity",
    description:
      "We maintain the highest standards of quality in our work and conduct our business with complete transparency, honesty, and professional integrity.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These core values guide every decision we make and every project we undertake, ensuring exceptional results
            and lasting relationships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-6 p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-playfair mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
