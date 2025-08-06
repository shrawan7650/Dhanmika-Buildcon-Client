import { initializeApp } from "firebase/app"
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)

// Updated Types based on your requirements
export interface Project {
  id: string
  title: string
  slug: string
  category: string // Reference ID to categories collection
  subcategories: string[] // Array of reference IDs to subcategories
  location: {
    city: string
    state: string
  }
  year: number
  description: string
  images: string[]
  duration: number
  durationType: "days" | "weeks" | "months" | "years"
  budget: {
    currency: "INR" | "USD"
    min: number
    max: number
  }
  status: "completed" | "ongoing" | "planned"
  featured: boolean
  testimonial: string
  service: string // Reference ID to services collection
  createdAt: Date
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  color: string
}

export interface Subcategory {
  id: string
  name: string
  slug: string
  description: string
  categoryId: string // Reference to parent category
}

export interface Service {
  id: string
  title: string
  slug: string
  description: string
  icon: string
  duration: string
  image: string
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

// Fetch functions
export async function getProjects(): Promise<Project[]> {
  try {
    const projectsRef = collection(db, "projects")
    const q = query(projectsRef, orderBy("createdAt", "desc"))
    const snapshot = await getDocs(q)

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
    })) as Project[]
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const projectsRef = collection(db, "projects")
    const q = query(projectsRef, where("featured", "==", true), orderBy("createdAt", "desc"), limit(6))
    const snapshot = await getDocs(q)

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
    })) as Project[]
  } catch (error) {
    console.error("Error fetching featured projects:", error)
    return []
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const projectsRef = collection(db, "projects")
    const q = query(projectsRef, where("slug", "==", slug))
    const snapshot = await getDocs(q)

    if (snapshot.empty) return null

    const doc = snapshot.docs[0]
    return {
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
    } as Project
  } catch (error) {
    console.error("Error fetching project:", error)
    return null
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const categoriesRef = collection(db, "categories")
    const snapshot = await getDocs(categoriesRef)

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Category[]
  } catch (error) {
    console.error("Error fetching categories:", error)
    return []
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const categoriesRef = collection(db, "categories")
    const q = query(categoriesRef, where("slug", "==", slug))
    const snapshot = await getDocs(q)

    if (snapshot.empty) return null

    const doc = snapshot.docs[0]
    return {
      id: doc.id,
      ...doc.data(),
    } as Category
  } catch (error) {
    console.error("Error fetching category:", error)
    return null
  }
}

export async function getSubcategories(): Promise<Subcategory[]> {
  try {
    const subcategoriesRef = collection(db, "subcategories")
    const snapshot = await getDocs(subcategoriesRef)

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Subcategory[]
  } catch (error) {
    console.error("Error fetching subcategories:", error)
    return []
  }
}

export async function getServices(): Promise<Service[]> {
  try {
    const servicesRef = collection(db, "services")
    const snapshot = await getDocs(servicesRef)

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Service[]
  } catch (error) {
    console.error("Error fetching services:", error)
    return []
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const servicesRef = collection(db, "services")
    const q = query(servicesRef, where("slug", "==", slug))
    const snapshot = await getDocs(q)

    if (snapshot.empty) return null

    const doc = snapshot.docs[0]
    return {
      id: doc.id,
      ...doc.data(),
    } as Service
  } catch (error) {
    console.error("Error fetching service:", error)
    return null
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const testimonialsRef = collection(db, "testimonials")
    const q = query(testimonialsRef, orderBy("createdAt", "desc"))
    const snapshot = await getDocs(q)

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
    })) as Testimonial[]
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return []
  }
}

export async function getTestimonialById(id: string): Promise<Testimonial | null> {
  try {
    const testimonialRef = doc(db, "testimonials", id)
    const snapshot = await getDoc(testimonialRef)

    if (!snapshot.exists()) return null

    return {
      id: snapshot.id,
      ...snapshot.data(),
      createdAt: snapshot.data().createdAt?.toDate() || new Date(),
    } as Testimonial
  } catch (error) {
    console.error("Error fetching testimonial:", error)
    return null
  }
}

export async function getCompanyInfo(): Promise<Company | null> {
  try {
    const companyRef = collection(db, "company")
    const snapshot = await getDocs(companyRef)

    if (snapshot.empty) return null

    const doc = snapshot.docs[0]
    return {
      id: doc.id,
      ...doc.data(),
    } as Company
  } catch (error) {
    console.error("Error fetching company info:", error)
    return null
  }
}

// Submit functions
export async function submitContact(contactData: Omit<Contact, "id">): Promise<void> {
  try {
    const contactsRef = collection(db, "contacts")
    await addDoc(contactsRef, {
      ...contactData,
      createdAt: new Date(),
    })
  } catch (error) {
    console.error("Error submitting contact:", error)
    throw error
  }
}

export async function submitBooking(bookingData: Omit<Contact, "id">): Promise<void> {
  try {
    const contactsRef = collection(db, "contacts")
    await addDoc(contactsRef, {
      ...bookingData,
      createdAt: new Date(),
    })
  } catch (error) {
    console.error("Error submitting booking:", error)
    throw error
  }
}
