"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [particles, setParticles] = useState<Array<{ left: number; top: number; delay: number; duration: number }>>([])

  useEffect(() => {
    // Generate particles only on client side
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 10,
      }))
    )

    // Trigger animations on mount
    setIsLoaded(true)

    const handleScroll = () => {
      const scrolled = window.scrollY
      setScrollY(scrolled)

      // Parallax background
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px) scale(${1 + scrolled * 0.0002})`
      }

      // Fade out content on scroll
      if (contentRef.current) {
        const opacity = Math.max(0, 1 - scrolled / 500)
        const translateY = scrolled * 0.3
        contentRef.current.style.opacity = opacity.toString()
        contentRef.current.style.transform = `translateY(${translateY}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      {/* Parallax Background with Multiple Layers */}
      <div className="absolute inset-0 w-full h-full">
        {/* Layer 1 - Slowest */}
        <div
          ref={parallaxRef}
          className="absolute inset-0 w-full h-[130%] -top-[15%] transition-transform duration-100 ease-out"
          style={{
            backgroundImage: `url('/bedroom-furniture-display-showroom-beds-kenya.jpg?height=1200&width=1920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)",
          }}
        />

        {/* Layer 2 - Gradient Overlay with animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />

        {/* Layer 3 - Animated shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-background/10 rounded-full animate-ping-slow"
            style={{ animationDuration: "8s" }}
          />
          <div
            className="absolute bottom-1/3 right-1/3 w-96 h-96 border-2 border-accent/10 rounded-full animate-ping-slow"
            style={{ animationDuration: "10s", animationDelay: "2s" }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div
        ref={contentRef}
        className={`relative z-10 h-full flex flex-col items-center justify-center text-center px-6 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Logo with scale animation */}
        {/* <div
          className={`relative h-20 w-52 mb-8 bg-background/95 backdrop-blur-sm rounded-lg p-3 shadow-2xl transition-all duration-1000 delay-200 ${
            isLoaded ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
          style={{
            transform: `translateY(${-scrollY * 0.1}px)`,
          }}
        >
          <Image
            src="/images/logo.png"
            alt="wigomart - Where savings meet style"
            fill
            className="object-contain"
            priority
          />
        </div> */}

        {/* Tagline with stagger animation */}
        <p
          className={`text-sm md:text-base tracking-[0.3em] uppercase text-background/90 mb-6 font-light transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Where Savings Meet Style
        </p>

        {/* Main Heading with word-by-word animation */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-background max-w-4xl leading-tight">
          <span
            className={`inline-block transition-all duration-700 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Quality Furniture
          </span>
          <br />
          <span
            className={`inline-block text-accent transition-all duration-700 delay-500 bg-clip-text ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{
              textShadow: "0 0 30px rgba(255, 200, 87, 0.3)",
            }}
          >
            Affordable Prices
          </span>
        </h1>

        {/* Description */}
        <p
          className={`mt-6 text-lg md:text-xl text-background/90 max-w-xl leading-relaxed transition-all duration-1000 delay-600 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Discover our premium collection of beds, dining sets, coffee tables, and more. Serving all of Kenya with
          style and savings.
        </p>

        {/* CTA Buttons with hover effects */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 mt-10 transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <Link
            href="/products"
            className="group relative px-10 py-4 text-sm tracking-widest uppercase bg-accent text-accent-foreground rounded-sm font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10">View Collection</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>
          <Link
            href="/contact"
            className="group relative px-10 py-4 text-sm tracking-widest uppercase border-2 border-background text-background rounded-sm font-semibold overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">Contact Us</span>
            <div className="absolute inset-0 bg-background transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>
        </div>

        {/* Feature highlights with floating animation */}
        <div
          className={`mt-16 flex flex-wrap justify-center gap-8 transition-all duration-1000 delay-800 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {["Free Delivery", "Quality Assured", "Best Prices"].map((feature, index) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-background/80 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm tracking-wide">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator with enhanced animation */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-900 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce-slow">
          <span className="text-xs text-background/70 tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-6 h-6 text-background/70" />
        </div>
      </div>

      {/* Floating particles effect - Only render after client hydration */}
      {particles.length > 0 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-background/20 rounded-full animate-float-particle"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}