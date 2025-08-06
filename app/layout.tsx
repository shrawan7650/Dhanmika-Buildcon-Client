import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FloatCallMessage } from "@/components/FloatCallMessage"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Dhanmika Buildcon Pvt. Ltd. - We Shape Your Dream Home",
    template: "%s | Dhanmika Buildcon",
  },
  description:
    "Bringing Your Luxury World Class Residential Homes at the Most Affordable Price. Expert in Architectural Plans, Building Construction, Interior Design, Plan Approvals, Renovations & Waterproofing in Patna, Bihar.",
  keywords: [
    "construction company patna",
    "interior design patna",
    "architectural plans patna",
    "building construction bihar",
    "home construction patna",
    "waterproofing patna",
    "renovation patna",
    "building plan approval patna",
    "residential construction",
    "dhanmika buildcon",
    "construction contractor patna",
    "interior designer patna",
  ],
  authors: [{ name: "Dhanmika Buildcon Pvt. Ltd." }],
  creator: "Dhanmika Buildcon Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dhanmikabuildcon.com",
    siteName: "Dhanmika Buildcon Pvt. Ltd.",
    title: "Dhanmika Buildcon - We Shape Your Dream Home",
    description: "Expert Construction & Interior Design Services in Patna, Bihar. Affordable luxury residential homes.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dhanmika Buildcon - Construction & Interior Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanmika Buildcon - We Shape Your Dream Home",
    description: "Expert Construction & Interior Design Services in Patna, Bihar.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://dhanmikabuildcon.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Patna" />
        <meta name="geo.position" content="25.5941;85.1376" />
        <meta name="ICBM" content="25.5941, 85.1376" />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Providers>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatCallMessage/>
          {/* <WhatsAppButton /> */}
        </Providers>
      </body>
    </html>
  )
}
