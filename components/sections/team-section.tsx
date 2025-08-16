// "use client"

// import { motion } from "framer-motion"
// import { Linkedin, Instagram } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const teamMembers = [
//   {
//     id: 1,
//     name: "Sarah Mitchell",
//     position: "Founder & Lead Designer",
//     bio: "With over 15 years of experience in luxury interior design, Sarah founded Luxe Interiors with a vision to create timeless, elegant spaces.",
//     image: "/placeholder.svg?height=400&width=300",
//     specialties: ["Residential Design", "Luxury Interiors", "Space Planning"],
//     experience: 15,
//     socialLinks: {
//       linkedin: "#",
//       instagram: "#",
//     },
//   },

// ]

// export function TeamSection() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">Meet Our Team</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Our talented team of designers and specialists work together to bring your vision to life with creativity,
//             expertise, and attention to detail.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={member.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={member.image || "/placeholder.svg"}
//                   alt={member.name}
//                   className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold font-playfair mb-1">{member.name}</h3>
//                 <p className="text-amber-600 font-medium mb-3">{member.position}</p>
//                 <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

//                 <div className="mb-4">
//                   <h4 className="font-semibold text-gray-900 mb-2 text-sm">Specialties:</h4>
//                   <div className="flex flex-wrap gap-1">
//                     {member.specialties.map((specialty, idx) => (
//                       <span
//                         key={idx}
//                         className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium"
//                       >
//                         {specialty}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div className="text-sm text-gray-500">
//                     <span className="font-medium">{member.experience}</span> years experience
//                   </div>
//                   <div className="flex space-x-2">
//                     {member.socialLinks.linkedin && (
//                       <Button variant="ghost" size="icon" className="w-8 h-8">
//                         <Linkedin className="w-4 h-4" />
//                       </Button>
//                     )}
//                     {member.socialLinks.instagram && (
//                       <Button variant="ghost" size="icon" className="w-8 h-8">
//                         <Instagram className="w-4 h-4" />
//                       </Button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { motion } from "framer-motion"
import { Linkedin, Instagram, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutBrotherSection() {
  const brother = {
    name: "Dhanmika Buildcon Pvt. Ltd.",
    position: "Founder & Lead Contractor",
    bio: "At Dhanmika Buildcon, we specialize in shaping dream homes with world-class quality and affordable pricing. From architectural planning to complete construction, interior works, and renovations – we deliver excellence at every step.",
    image: "/brother.jpg", // replace with uploaded image
    specialties: [
      "Architectural Plans & Designs",
      "Building Constructions",
      "Interior Designs & Works",
      "Building Plan Approvals",
      "Repair & Renovations",
      "Complete Waterproofing Work"
    ],
    experience: 5,
    socialLinks: {
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
      phone: "tel:+919386023587"
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4 text-gray-900">
            About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Building homes that reflect luxury, comfort, and durability – while keeping affordability at the core.
          </p>
        </motion.div>

        {/* Card Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={brother.image}
              alt={brother.name}
              className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{brother.name}</h3>
            <p className="text-amber-600 font-medium mb-3">{brother.position}</p>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{brother.bio}</p>

            {/* Specialties */}
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">Our Services:</h4>
              <div className="flex flex-wrap gap-2">
                {brother.specialties.map((specialty, idx) => (
                  <span
                    key={idx}
                    className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience + Social Links */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                <span className="font-medium">{brother.experience}+</span> years of trusted service
              </div>
              <div className="flex space-x-2">
                {brother.socialLinks.phone && (
                  <Button asChild variant="ghost" size="icon" className="w-8 h-8">
                    <a href={brother.socialLinks.phone}><Phone className="w-4 h-4" /></a>
                  </Button>
                )}
                {brother.socialLinks.linkedin && (
                  <Button asChild variant="ghost" size="icon" className="w-8 h-8">
                    <a href={brother.socialLinks.linkedin}><Linkedin className="w-4 h-4" /></a>
                  </Button>
                )}
                {brother.socialLinks.instagram && (
                  <Button asChild variant="ghost" size="icon" className="w-8 h-8">
                    <a href={brother.socialLinks.instagram}><Instagram className="w-4 h-4" /></a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
