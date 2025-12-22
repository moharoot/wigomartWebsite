"use client"

import { useEffect, useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LocationVideoSection } from "@/components/location-video-section"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
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

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      link: "tel:+254704590711",
      linkText: "+254 704 590 711",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick responses on WhatsApp",
      link: "https://wa.me/254704590711",
      linkText: "Message Us",
      external: true,
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us a detailed inquiry",
      link: "mailto:hello@wigomart.com",
      linkText: "hello@wigomart.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Experience our showroom",
      linkText: "Basement, Towhid Residency, California, Easleigh, Nairobi",
    },
  ]

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm tracking-widest uppercase text-accent font-semibold">
            Get In Touch
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            We're Here to <span className="text-accent">Help</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have questions about our furniture? Want to place an order or schedule a showroom visit? Reach out to us
            through any of the channels below. We serve all of Kenya with quality furniture at affordable prices.
          </p>
        </div>
      </div>
    </section>

      {/* Contact Methods */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            data-section="contact-methods"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <article
                  key={method.title}
                  className={`bg-secondary p-8 text-center group hover:bg-accent hover:text-accent-foreground transition-all duration-500 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 ${
                    isVisible("contact-methods")
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-background group-hover:bg-accent-foreground/10 transition-colors rounded-lg">
                    <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground group-hover:text-accent-foreground/80 mb-4">
                    {method.description}
                  </p>
                  {method.link ? (
                    <a
                      href={method.link}
                      {...(method.external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="text-foreground group-hover:text-accent-foreground font-semibold hover:underline"
                    >
                      {method.linkText}
                    </a>
                  ) : (
                    <span className="text-foreground group-hover:text-accent-foreground font-semibold">
                      {method.linkText}
                    </span>
                  )}
                </article>
              )
            })}
          </div>

          {/* Contact Form & Info Grid */}
          <div 
            className="grid lg:grid-cols-2 gap-12 items-start"
            data-section="contact-form"
          >
            {/* Contact Form */}
            <div
              className={`transition-all duration-700 ${
                isVisible("contact-form")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours. Whether you're looking for beds,
                dining furniture, coffee tables, or mirrors, we're here to help you find the perfect pieces.
              </p>
              <ContactForm />
            </div>

            {/* Store Information */}
            <div
              className={`bg-secondary p-8 md:p-10 rounded-lg shadow-lg transition-all duration-700 delay-200 ${
                isVisible("contact-form")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Store Information</h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Wigomart Furniture Showroom
                      <br />
                      Basement, Towhid Residency, California, Easleigh
                      <br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Opening Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 5:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Delivery */}
                <div className="flex gap-4">
                  <div className="w-5 h-5 shrink-0 mt-1 flex items-center justify-center">
                    <span className="text-accent text-lg">🚚</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Delivery Areas</h3>
                    <p className="text-muted-foreground">
                      We deliver furniture across all 47 counties in Kenya including Nairobi, Mombasa, Kisumu, Nakuru,
                      Eldoret, and other major cities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+254704590711"
                  className="flex-1 py-3 px-6 bg-accent text-accent-foreground text-center text-sm tracking-wider uppercase hover:bg-accent/90 transition-all hover:scale-105 font-semibold rounded-lg shadow-lg"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/254704590711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-6 border-2 border-foreground text-foreground text-center text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-all hover:scale-105 font-semibold rounded-lg"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Video Section */}
      <LocationVideoSection />

      <Footer />
    </main>
  )
}