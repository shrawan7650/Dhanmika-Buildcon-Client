'use client'

import { useState } from "react"
import { ChevronLeft, ChevronRight, Maximize2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ImageViewer({ project }: { project: any }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % project.images.length)

  const prevImage = () =>
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    )

  const toggleZoom = () => setIsZoomed((prev) => !prev)

  const goFullScreen = () => {
    const elem = document.getElementById("image-viewer")
    if (elem?.requestFullscreen) elem.requestFullscreen()
  }

  return (
    <div
      id="image-viewer"
      className="relative max-w-7xl w-full h-full p-4 flex items-center justify-center bg-black"
    >
      {/* Full image with zoom */}
      <div
        onClick={toggleZoom}
        className={`overflow-hidden rounded-lg shadow-lg border-2 border-gray-800 cursor-zoom-in ${
          isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
        }`}
      >
        <img
          src={project.images[currentImage] || "/placeholder.svg"}
          alt={`${project.title} - Image ${currentImage + 1}`}
          className={`transition-transform duration-300 ease-in-out object-contain ${
            isZoomed ? "scale-150" : "scale-100"
          } max-h-[85vh] w-auto`}
        />
      </div>

      {/* Image Navigation Arrows */}
      {project.images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </>
      )}

      {/* Zoom and Fullscreen Controls */}
      <div className="absolute top-4 right-4 flex gap-2">
        <Button
          size="icon"
          variant="ghost"
          className="text-white bg-black/40 hover:bg-black/60 rounded-full"
          onClick={toggleZoom}
        >
          <Search className="w-5 h-5" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="text-white bg-black/40 hover:bg-black/60 rounded-full"
          onClick={goFullScreen}
        >
          <Maximize2 className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
