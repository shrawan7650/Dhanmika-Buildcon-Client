"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { Project } from "@/lib/firebase"
import Image from "next/image";

interface ProjectGalleryProps {
  project: Project
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setIsLightboxOpen(true)
  }

  return (
    <>
      <section className="relative h-screen">
        {/* Main Image */}
        <div className=" h-full overflow-hidden">
        <div className=" w-[100vw]  h-[100vh]">
  <Image
    src={project.images[currentImage] || "/placeholder.svg"}
    alt={`${project.title} - Image ${currentImage + 1}`}
    fill // This makes the image stretch to fill parent div
    className="object-contain max-w-full rounded-lg shadow-lg"
    sizes="100vw"
    priority
  />
</div>

          <div className="absolute inset-0 bg-black/20" />

          {/* Navigation */}
          {project.images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </>
          )}

          {/* Zoom Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => openLightbox(currentImage)}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white"
          >
            <ZoomIn className="w-6 h-6" />
          </Button>

          {/* Project Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
            <div className="max-w-4xl mx-auto text-white">
              <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-4">{project.title}</h1>
              <p className="text-xl mb-4">{project.description}</p>
              <div className="flex items-center space-x-6 text-sm">
                <span className="bg-amber-600 px-3 py-1 rounded-full">{project.category}</span>
                {/* <span>{project.location}</span> */}
                <span>{project.year}</span>
              </div>
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImage + 1} / {project.images.length}
          </div>
        </div>
      </section>

      {/* Thumbnail Gallery */}
      {project.images.length > 1 && (
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImage ? "border-amber-600" : "border-transparent"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setIsLightboxOpen(false)}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>

            <div
  className="relative max-w-7xl w-full h-full p-4 flex items-center justify-center bg-black"
  onClick={(e) => e.stopPropagation()}
>
  <img
    src={project.images[currentImage] || "/placeholder.svg"}
    alt={`${project.title} - Image ${currentImage + 1}`}
    className="max-h-[90vh] w-auto object-contain rounded-lg shadow-lg"
  />

  {project.images.length > 1 && (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>
    </>
  )}
</div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
