"use client"

import { useEffect, useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ShowroomGallery } from "@/components/showroom-gallery"
import { LocationVideoSection } from "@/components/location-video-section"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section")
            if (sectionId) {
              setVisibleSections((prev) => new Set([...prev, sectionId]))
            }
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    )

    const sections = document.querySelectorAll("[data-section]")
    sections.forEach((section) => {
      observerRef.current?.observe(section)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  const isVisible = (sectionId: string) => visibleSections.has(sectionId)

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm tracking-widest uppercase text-accent font-semibold">Our Story</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Where Savings <span className="text-accent">Meet Style</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Wigomart is Kenya's trusted destination for quality furniture at affordable prices. We offer beds, dining
              sets, coffee tables, mirrors, and more - all designed to transform your home without breaking the bank.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div 
            className="grid md:grid-cols-2 gap-12 items-center"
            data-section="mission"
          >
            <div 
              className={`relative aspect-[4/5] overflow-hidden bg-secondary rounded-sm transition-all duration-700 ${
                isVisible("mission") 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <Image
                src="/furniture-craftsman-workshop-kenya-woodworking.jpg"
                alt="Quality furniture craftsmanship at Wigomart Kenya"
                fill
                className="object-cover"
              />
            </div>
            <div 
              className={`transition-all duration-700 delay-200 ${
                isVisible("mission") 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 translate-x-10"
              }`}
            >
              <span className="text-sm tracking-widest uppercase text-accent font-semibold">Our Mission</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
                Quality Furniture for <span className="text-accent">Every Kenyan Home</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                We believe every home in Kenya deserves furniture that combines style, durability, and affordability.
                Our mission is to make quality home furnishings accessible to families across Nairobi, Mombasa, Kisumu,
                and every corner of Kenya.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Quality materials built to last for years",
                  "Affordable prices - where savings meet style",
                  "Wide selection of beds, dining, and décor",
                  "Nationwide delivery across all 47 counties",
                ].map((item, index) => (
                  <li 
                    key={item} 
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      isVisible("mission") 
                        ? "opacity-100 translate-x-0" 
                        : "opacity-0 translate-x-5"
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6">
          <div 
            className="text-center mb-16"
            data-section="values-header"
          >
            <span 
              className={`text-sm tracking-widest uppercase text-accent font-semibold transition-all duration-700 ${
                isVisible("values-header") 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-5"
              }`}
            >
              What We Stand For
            </span>
            <h2 
              className={`mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground transition-all duration-700 delay-100 ${
                isVisible("values-header") 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-5"
              }`}
            >
              Our Values
            </h2>
          </div>
          <div 
            className="grid md:grid-cols-3 gap-8"
            data-section="values-cards"
          >
            {[
              {
                title: "Affordability",
                description:
                  "Quality furniture shouldn't cost a fortune. We work hard to bring you the best prices without compromising on quality.",
              },
              {
                title: "Quality",
                description:
                  "Every piece is built with attention to detail, using materials that ensure durability and lasting beauty for your home.",
              },
              {
                title: "Service",
                description:
                  "From your first inquiry to delivery, our team is here to help. Contact us via call or WhatsApp for personalized assistance.",
              },
            ].map((value, index) => (
              <article 
                key={value.title} 
                className={`bg-background p-8 md:p-10 rounded-sm transition-all duration-700 ${
                  isVisible("values-cards") 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-bold text-accent mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom Gallery */}
      <ShowroomGallery />

      {/* Location Video Section */}
      <LocationVideoSection />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div 
          className="container mx-auto px-6 text-center"
          data-section="cta"
        >
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-balance transition-all duration-700 ${
              isVisible("cta") 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            Visit Our Showroom Today
          </h2>
          <p 
            className={`mt-6 text-primary-foreground/80 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible("cta") 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            Experience our furniture collection in person. Our Nairobi showroom is open Monday to Saturday, 9:00 AM to
            6:00 PM. We serve customers across all of Kenya with nationwide delivery.
          </p>
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 transition-all duration-700 delay-200 ${
              isVisible("cta") 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="/contact"
              className="px-8 py-4 bg-accent text-accent-foreground text-sm tracking-wider uppercase hover:bg-accent/90 transition-all hover:scale-105 font-semibold rounded-sm shadow-lg"
            >
              Get Directions
            </a>
            <a
              href="https://wa.me/254704590711"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-primary-foreground text-primary-foreground text-sm tracking-wider uppercase hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105 font-semibold rounded-sm"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}