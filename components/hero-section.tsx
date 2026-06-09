"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "Transform Your Space",
      subtitle: "Premium Furniture Collection",
      description: "Discover elegant beds, dining sets & more at unbeatable prices",
      image: "bedroom-furniture-display-showroom-beds-kenya.jpg",
      cta: "Shop Beds",
      link: "/products?category=beds",
    },
    {
      title: "Dining in Style",
      subtitle: "Handcrafted Dining Sets",
      description: "Bring family together with our stunning dining collections",
      image: "console-tables-entryway-furniture-modern.jpg",
      cta: "Shop Dining",
      link: "/products?category=dining",
    },
    {
      title: "Living Room Essentials",
      subtitle: "Coffee Tables & More",
      description: "Complete your living space with our curated selection",
      image: "decorative-mirrors-wall-mirrors-furniture-showroom.jpg",
      cta: "Shop Living",
      link: "/products?category=living",
    },
  ]

  useEffect(() => {
    setIsLoaded(true)

    // Auto-rotate slides every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-background pt-20">
      {/* Hero Content - Split Layout */}
      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
          {/* Left Side - Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-medium text-primary">Rated 4.9/5 by 1000+ customers</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-accent font-semibold">
                {heroSlides[currentSlide].subtitle}
              </p>
              <p className="text-lg text-muted-foreground max-w-lg">
                {heroSlides[currentSlide].description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={heroSlides[currentSlide].link}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all hover:gap-3 shadow-lg hover:shadow-xl"
              >
                {heroSlides[currentSlide].cta}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-background transition-all"
              >
                Contact Us
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary/10">
              {["Free Delivery", "Quality Assured", "Best Prices"].map((feature) => (
                <div key={feature} className="text-center">
                  <div className="w-3 h-3 bg-accent rounded-full mx-auto mb-2" />
                  <p className="text-sm font-medium text-primary">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl shadow-xl p-6 max-w-xs">
              <p className="text-sm text-muted-foreground mb-1">Limited Offer</p>
              <p className="text-2xl font-bold text-primary">
                Grab It <span className="text-accent">Before It's Gone</span>
              </p>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-accent" : "w-2 bg-primary/20"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Optional: Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}