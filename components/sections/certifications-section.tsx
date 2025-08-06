"use client"

import { motion } from "framer-motion"
import { Award, Star, Trophy, BadgeIcon as Certificate } from "lucide-react"

const certifications = [
  {
    icon: Award,
    title: "ASID Professional Member",
    description: "American Society of Interior Designers",
    year: "2015",
  },
  {
    icon: Star,
    title: "LEED Accredited Professional",
    description: "Green Building Certification Institute",
    year: "2018",
  },
  {
    icon: Trophy,
    title: "Best Interior Design Firm",
    description: "City Design Awards",
    year: "2022",
  },
  {
    icon: Certificate,
    title: "NCIDQ Certified",
    description: "National Council for Interior Design Qualification",
    year: "2016",
  },
]

const awards = [
  "Interior Design Magazine - Best Residential Project 2023",
  "Architectural Digest - Top 100 Designers 2022",
  "Houzz - Best of Design Award 2021, 2022, 2023",
  "ASID - Excellence in Design Award 2020",
  "Luxe Interiors + Design - Gold List 2019",
]

export function CertificationsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">Certifications & Awards</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is recognized by industry leaders and professional organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold font-playfair mb-8">Professional Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon
                return (
                  <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{cert.title}</h4>
                      <p className="text-gray-600 text-sm">{cert.description}</p>
                    </div>
                    <div className="text-amber-600 font-medium text-sm">{cert.year}</div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-playfair mb-8">Recent Awards & Recognition</h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">{award}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Industry Recognition</h4>
              <p className="text-gray-600 text-sm">
                Featured in over 50 publications including Architectural Digest, Elle Decor, House Beautiful, and
                Interior Design Magazine.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
