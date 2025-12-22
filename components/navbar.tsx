"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Collection" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-background shadow-md py-4" 
            : "bg-background/80 backdrop-blur-sm py-5 border-b border-primary/5"
        )}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="relative h-10 w-32 z-50">
            <Image
              src="/images/logo.png"
              alt="Wigmart - Where savings meet style"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm tracking-wide uppercase transition-all duration-300 font-medium relative",
                    isActive(link.href)
                      ? "text-accent font-semibold"
                      : "text-primary hover:text-accent"
                  )}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Button - Desktop */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center px-6 py-2.5 text-sm tracking-wider uppercase bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 rounded-lg font-semibold shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary hover:text-accent transition-colors duration-300 z-50 relative"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <aside
        className={cn(
          "md:hidden fixed top-0 right-0 h-full w-[280px] bg-background shadow-2xl z-40 transition-transform duration-300 ease-out overflow-y-auto",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-6">
          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block py-3 px-4 rounded-lg text-base font-medium tracking-wide uppercase transition-all duration-200",
                      isActive(link.href)
                        ? "bg-accent/10 text-accent border-l-4 border-accent"
                        : "text-primary hover:bg-primary/5 hover:text-accent border-l-4 border-transparent",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="my-6 border-t border-primary/10" />

            {/* Contact CTA */}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-3 px-4 text-center text-sm tracking-wider uppercase bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors shadow-lg"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-primary/10 space-y-4">
            <div className="flex items-center gap-3 text-sm text-primary/70">
              <Phone size={18} className="text-accent" />
              <a href="tel:+254704590711" className="hover:text-accent transition-colors">
                +254 704 590 711
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-primary/70">
              <Mail size={18} className="text-accent" />
              <a href="mailto:info@wigomart.com" className="hover:text-accent transition-colors">
                info@wigomart.com
              </a>
            </div>
          </div>

          {/* Footer Text */}
          <div className="mt-6 text-center">
            <p className="text-xs text-primary/50 tracking-wide">Where Savings Meet Style</p>
          </div>
        </div>
      </aside>
    </>
  )
}