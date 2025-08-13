"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, GraduationCap, Briefcase } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Équipe" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center relative overflow-hidden">
              <svg viewBox="0 0 40 40" className="w-6 h-6 text-white">
                <path fill="currentColor" d="M8 12h24v3H8zm0 6h20v3H8zm0 6h16v3H8zm24-12l-4 4 4 4V16z" />
                <circle cx="32" cy="20" r="2" fill="currentColor" />
              </svg>
            </div>
            <span className="font-serif font-black text-xl text-foreground">EDevSpace</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link href="/stage">
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                <Briefcase className="h-4 w-4" />
                Stage
              </Button>
            </Link>
            <Link href="/formation">
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                <GraduationCap className="h-4 w-4" />
                Formation
              </Button>
            </Link>
            <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 text-white">Devis Gratuit</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2 space-y-2">
                <Link href="/stage" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full flex items-center gap-2 bg-transparent">
                    <Briefcase className="h-4 w-4" />
                    Demande de Stage
                  </Button>
                </Link>
                <Link href="/formation" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full flex items-center gap-2 bg-transparent">
                    <GraduationCap className="h-4 w-4" />
                    Formation
                  </Button>
                </Link>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Devis Gratuit</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
