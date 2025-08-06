"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+919386023587"
    const message = encodeURIComponent(
      "Hi! I'm interested in your construction and interior design services. Please provide more information.",
    )
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg animate-pulse"
      size="icon"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="sr-only">Contact us on WhatsApp</span>
    </Button>
  )
}
