"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock, Star } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients",
    description: "Satisfied customers worldwide",
  },
  {
    icon: Award,
    value: "25+",
    label: "Awards Won",
    description: "Industry recognition",
  },
  {
    icon: Clock,
    value: "12+",
    label: "Years Experience",
    description: "In luxury interior design",
  },
  {
    icon: Star,
    value: "98%",
    label: "Client Satisfaction",
    description: "Based on project reviews",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that reflect our commitment to excellence and client satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow duration-300">
                  <Icon className="w-10 h-10 text-amber-600" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
