"use client"

import { motion } from "framer-motion"
import { Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    id: 1,
    name: "Sarah Mitchell",
    position: "Founder & Lead Designer",
    bio: "With over 15 years of experience in luxury interior design, Sarah founded Luxe Interiors with a vision to create timeless, elegant spaces.",
    image: "/placeholder.svg?height=400&width=300",
    specialties: ["Residential Design", "Luxury Interiors", "Space Planning"],
    experience: 15,
    socialLinks: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Senior Interior Designer",
    bio: "Michael brings a modern aesthetic and technical expertise to every project, specializing in contemporary and minimalist design approaches.",
    image: "/placeholder.svg?height=400&width=300",
    specialties: ["Modern Design", "Commercial Spaces", "Sustainable Design"],
    experience: 10,
    socialLinks: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    position: "Project Manager",
    bio: "Emma ensures every project runs smoothly from concept to completion, coordinating with clients, contractors, and vendors.",
    image: "/placeholder.svg?height=400&width=300",
    specialties: ["Project Management", "Client Relations", "Vendor Coordination"],
    experience: 8,
    socialLinks: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Color & Lighting Specialist",
    bio: "David's expertise in color theory and lighting design helps create the perfect ambiance for every space we design.",
    image: "/placeholder.svg?height=400&width=300",
    specialties: ["Color Theory", "Lighting Design", "Mood Creation"],
    experience: 12,
    socialLinks: {
      linkedin: "#",
      instagram: "#",
    },
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of designers and specialists work together to bring your vision to life with creativity,
            expertise, and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold font-playfair mb-1">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">{member.experience}</span> years experience
                  </div>
                  <div className="flex space-x-2">
                    {member.socialLinks.linkedin && (
                      <Button variant="ghost" size="icon" className="w-8 h-8">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    )}
                    {member.socialLinks.instagram && (
                      <Button variant="ghost" size="icon" className="w-8 h-8">
                        <Instagram className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
