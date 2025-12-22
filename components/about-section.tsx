"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative aspect-[4/5] overflow-hidden rounded-sm transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <Image src="/furniture-showroom-kenya-beds-dining.jpg" alt="wigomart showroom in Kenya" fill className="object-cover" />
          </div>

          {/* Content - Updated for wigomart */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4 font-semibold">Our Story</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
              Where Savings
              <br />
              <span className="text-accent">Meet Style</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At wigomart, we believe every Kenyan home deserves beautiful, quality furniture without breaking the
                bank. Our mission is simple: bring you stylish, durable furniture at prices that make sense.
              </p>
              <p>
                From wooden beds and MDF beds to elegant dining sets, console tables, and decorative mirrors, we offer a
                complete range of home furnishings for every room and every budget.
              </p>
              <p>
                Visit our showroom in Nairobi or browse our collection online. With delivery across Kenya, your dream
                home is just a call away.
              </p>
            </div>

            {/* Stats - Updated for wigomart */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              {[
                { number: "500+", label: "Products" },
                { number: "1000+", label: "Happy Customers" },
                { number: "47", label: "Counties Served" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-accent">{stat.number}</p>
                  <p className="text-xs tracking-wider uppercase text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
