"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

const heroImages = [
  "https://res.cloudinary.com/dmmnkipms/image/upload/v1754139384/projects/o7seprledzh1p01a09vr.jpg",
  "https://res.cloudinary.com/dmmnkipms/image/upload/v1754139204/projects/onq5az02avhsvlqxj8y0.jpg",
  "https://res.cloudinary.com/dmmnkipms/image/upload/v1754915391/postImage/zfpscbqttkqwjvgwix5g.jpg",
]

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative mt-12 min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-white w-full px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-playfair mb-4 sm:mb-6"
        >
          Transform Your Space Into
          <span className="block text-amber-400">Something Extraordinary</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto"
        >
          Award-winning interior design services that blend luxury, functionality, and your unique vision.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg">
            <Link href="/contact">Start Your Project</Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 text-base sm:text-lg bg-transparent"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Our Story
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20 text-center"
        >
          <div>
            <div className="text-xl sm:text-3xl md:text-4xl font-bold text-amber-400">500+</div>
            <div className="text-xs sm:text-sm text-gray-300">Projects</div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl md:text-4xl font-bold text-amber-400">12+</div>
            <div className="text-xs sm:text-sm text-gray-300">Years</div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl md:text-4xl font-bold text-amber-400">98%</div>
            <div className="text-xs sm:text-sm text-gray-300">Satisfaction</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-5 sm:w-6 h-5 sm:h-6 text-white animate-bounce" />
      </motion.div>

      {/* Image Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
              index === currentImage ? "bg-amber-400" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
