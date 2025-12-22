"use client"

import { useEffect, useRef, useState } from "react"
import { Truck, Wallet, Heart, Shield } from "lucide-react"

const features = [
  {
    icon: Wallet,
    title: "Affordable Prices",
    description: "Quality furniture at prices that won't break the bank. Where savings meet style.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "We deliver across all 47 counties in Kenya. From Nairobi to Mombasa and beyond.",
  },
  {
    icon: Heart,
    title: "Personal Service",
    description: "Contact us directly via call or WhatsApp for personalized assistance with your order.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every piece is built to last with premium materials and expert craftsmanship.",
  },
]

export function FeaturesSection() {
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
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4 font-semibold">Why Choose Us</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">The wigomart Difference</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center p-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 bg-accent/10 rounded-sm">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
