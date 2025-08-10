"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  // { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Get Quote", href: "/get-quote" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 z-50 w-full bg-white rounded-b-lg shadow-sm">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 lg:h-14 round">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700">
              <span className="text-lg font-bold text-white">D</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-gray-900 font-playfair">
                Dhanmika Buildcon
              </span>
              <span className="text-xs font-medium text-blue-600">
                We Shape Your Dream Home
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-red-600",
                  pathname === item.href ? "text-red-600" : "text-gray-700",
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="text-white bg-red-600 hover:bg-red-700">
              <Link href="tel:+919386023587">Call Now</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-700 lg:hidden">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col mt-8 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-red-600 py-2",
                      pathname === item.href ? "text-red-600" : "text-gray-900",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-4 text-white bg-red-600 hover:bg-red-700">
                  <Link href="tel:+919386023587">Call Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
