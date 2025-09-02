"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  // { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about" },
  { name: "Get Quote", href: "/get-quote" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 z-50 w-full bg-white rounded-b-lg shadow-sm">
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            {/* <div className="md:flex items-center hidden justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700">
              <span className="text-lg font-bold text-white">D</span>
            </div> */}
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-gray-900 font-playfair">
                <span className="text-blue-600 text-xl">D</span>hanmika Buildcon
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
                  "text-sm font-medium transition-colors hover:text-blue-900",
                  pathname === item.href ? "text-blue-600" : "text-gray-700"
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
            <SheetContent side="left" className="w-[300px] sm:w-[400px] p-6">
              {/* Mobile Logo */}
              <SheetClose asChild>
                <Link href="/" className="flex items-center space-x-3 mb-6">
                  <div className="flex flex-col leading-tight">
                  <span className="text-xl font-bold text-black">
                  <span className="text-blue-600">D</span>hanmika Buildcon
                </span>
                    <span className="text-xs font-medium text-blue-600">
                      We Shape Your Dream Home
                    </span>
                  </div>
                </Link>
              </SheetClose>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block text-lg font-medium py-2 rounded-md hover:text-blue-00 hover:bg-gray-100 px-3",
                        pathname === item.href ? "text-blue-600 bg-gray-100" : "text-gray-900"
                      )}
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>

              {/* Call Button */}
              <SheetClose asChild>
                <Button
                  asChild
                  className="mt-6 w-full text-white bg-red-600 hover:bg-red-700"
                >
                  <Link href="tel:+919386023587">Call Now</Link>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
