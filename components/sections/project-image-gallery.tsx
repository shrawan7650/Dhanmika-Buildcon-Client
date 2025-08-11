"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid3X3 } from 'lucide-react'

interface ProjectImageGalleryProps {
  images: string[]
  title: string
}

export function ProjectImageGallery({ images, title }: ProjectImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showAllImages, setShowAllImages] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  // Mobile: Show all images in grid when requested
  const renderMobileAllImages = () => {
    return (
      <div className="grid grid-cols-2 gap-3">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md aspect-square"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`${title} - Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Render based on number of images and device
  const renderImageLayout = () => {
    // Mobile view - show grid if requested or main layout
    if (isMobile && showAllImages) {
      return (
        <div>
          <div className="flex items-center justify-between mb-4">
            {/* <h3 className="text-lg font-semibold">All Project Images ({images.length})</h3> */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAllImages(false)}
              className="text-blue-600 border-blue-600 hover:bg-blue-50"
            >
              Main View
            </Button>
          </div>
          {renderMobileAllImages()}
        </div>
      )
    }

    // Handle different image counts
    if (images.length === 0) {
      return (
        <div className="w-full h-96 bg-gray-100 rounded-xl flex items-center justify-center">
          <p className="text-gray-500">No images available</p>
        </div>
      )
    }

    if (images.length === 1) {
      // Single image - centered full width
      return (
        <div className="w-full">
          <div 
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
            onClick={() => openLightbox(0)}
          >
            <img
              src={images[0] || "/placeholder.svg"}
              alt={`${title} - Main Image`}
              className="w-full h-96 md:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      )
    }

    if (images.length === 2) {
      // 2 images - side by side
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-96 md:h-[500px]">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg h-full"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      )
    }

    if (images.length === 3) {
      // 3 images - 60/40 split
      return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-96 md:h-[500px]">
          {/* Main image - 60% */}
          <div className="md:col-span-3">
            <div 
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg h-full"
              onClick={() => openLightbox(0)}
            >
              <img
                src={images[0] || "/placeholder.svg"}
                alt={`${title} - Main Image`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
          
          {/* Two stacked images - 40% */}
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-4">
            {images.slice(1, 3).map((image, index) => (
              <div 
                key={index + 1}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg h-full"
                onClick={() => openLightbox(index + 1)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${title} - Image ${index + 2}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    // 4+ images - main image left, grid of thumbnails right
// Ensures images do not overflow and affect other layout
return (
  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
    {/* Main image - 60% */}
    <div className="md:col-span-3">
      <div 
        className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
        onClick={() => openLightbox(0)}
      >
        <img
          src={images[0] || "/placeholder.svg"}
          alt={`${title} - Main Image`}
          className="w-full h-full max-h-[500px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </div>

    {/* Grid of thumbnails - 40% */}
    <div className="md:col-span-2 grid grid-cols-2 gap-4">
      {images.slice(1, 5).map((image, index) => (
        <div 
          key={index + 1}
          className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
          onClick={() => openLightbox(index + 1)}
        >
          <img
            src={image || "/placeholder.svg"}
            alt={`${title} - Image ${index + 2}`}
            className="w-full h-[120px] md:h-[242px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {index === 3 && images.length > 5 && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-white text-xl font-bold">+{images.length - 5}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)

  }

  return (
    <>
      <div className="w-full">
        {/* Mobile: Show all images button */}
        {isMobile && (
          <div className="mb-4 flex items-center justify-between">
            {/* <h3 className="text-lg font-semibold">Project Gallery ({images.length} images)</h3> */}
            {!showAllImages && images.length > 1 && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAllImages(true)}
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                <Grid3X3 className="w-4 h-4 mr-2" />
                View All
              </Button>
            )}
          </div>
        )}

        {renderImageLayout()}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation buttons */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </>
            )}

            {/* Main image */}
            <div className="relative z-50 overflow-auto max-w-7xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={images[selectedImage] || "/placeholder.svg"}
                alt={`${title} - Image ${selectedImage + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Image counter and thumbnails */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-lg font-semibold mb-2">{title}</p>
              <p className="text-sm text-gray-300 mb-4">
                Image {selectedImage + 1} of {images.length}
              </p>
              
              {/* Thumbnail navigation */}
              {images.length > 1 && (
                <div className="flex items-center justify-center gap-2 max-w-md overflow-x-auto pb-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedImage(index)
                      }}
                      className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        index === selectedImage 
                          ? 'border-white scale-110' 
                          : 'border-gray-500 hover:border-gray-300'
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
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
