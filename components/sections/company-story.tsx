"use client"

import { motion } from "framer-motion"
import { Award, Users, Heart } from "lucide-react"

export function CompanyStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">Our Story</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Founded in 2012, Luxe Interiors began as a passion project by our founder, Sarah Mitchell, who believed
                that exceptional design should be accessible to everyone. What started as a small studio has grown into
                an award-winning design firm known for creating spaces that perfectly balance luxury, functionality, and
                personal style.
              </p>
              <p>
                Over the years, we've had the privilege of transforming hundreds of homes and commercial spaces,
                building lasting relationships with our clients and earning recognition from industry leaders. Our
                approach combines timeless design principles with contemporary innovation, ensuring that every project
                we undertake stands the test of time.
              </p>
              <p>
                Today, our team of talented designers, project managers, and craftspeople work together to bring your
                vision to life, creating spaces that not only look beautiful but also enhance the way you live and work.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Awards</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-amber-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/placeholder.svg?height=300&width=250"
                  alt="Our Design Studio"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <img
                  src="/placeholder.svg?height=200&width=250"
                  alt="Design Team"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="/placeholder.svg?height=250&width=250"
                  alt="Luxury Interior"
                  className="w-full h-56 object-cover rounded-2xl"
                />
                <img
                  src="/placeholder.svg?height=180&width=250"
                  alt="Awards"
                  className="w-full h-40 object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Floating Achievement Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">12+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
