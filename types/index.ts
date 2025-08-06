export interface Project {
  id: string
  title: string
  slug: string
  description: string
  category: string
  subcategory?: string
  location: string
  year: number
  images: string[]
  featured: boolean
  duration?: string
  budget?: string
  testimonialId?: string
  createdAt: Date
}

export interface Service {
  id: string
  title: string
  slug: string
  description: string
  icon: string
  rating?: number
  location?: string
  duration: string
  image: string
  categoryId?: string
  priceRange: string
  features: string[]
}

export interface Testimonial {
  id: string
  name: string
  feedback: string
  image?: string
  linkedProject?: string
  rating: number
  createdAt: Date
}

export interface Category {
  id: string
  name: string
  description: string
  color: string
}

export interface Subcategory {
  id: string
  name: string
  description: string
  categoryId: string
}

export interface Company {
  id: string
  companyName: string
  aboutCompany: string
  logo: string
  address: string
  phone: string
  email: string
  socialLinks: {
    facebook?: string
    instagram?: string
    twitter?: string
    linkedin?: string
  }
  missionStatement: string
}

export interface Contact {
  id?: string
  name: string
  email: string
  phone: string
  projectAddress?: string
  service?: string
  serviceId?: string
  preferredDate?: Date
  preferredTime?: string
  projectRequirements?: string
  message?: string
  budget?: string
  status: "pending" | "contacted" | "scheduled" | "completed"
  createdAt: Date
  inspirationImages?: File[]
}

export interface TeamMember {
  id: string
  name: string
  position: string
  bio: string
  image: string
  specialties: string[]
  experience: number
  socialLinks?: {
    linkedin?: string
    instagram?: string
  }
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: Date
  featuredImage: string
  tags: string[]
  category: string
  readTime: number
}
