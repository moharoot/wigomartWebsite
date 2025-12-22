"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react"

export function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info - Updated for wigomart */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4 font-semibold">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Ready to furnish
              <br />
              <span className="text-accent">your home?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
              Contact us today to order beds, dining tables, coffee tables, mirrors, and more. We deliver across Kenya
              and our team is ready to help you find the perfect furniture for your space.
            </p>

            {/* Contact Methods - Updated for wigomart Kenya */}
            <div className="space-y-6">
              <a href="tel:+254704590711" className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 group-hover:bg-accent/20 transition-colors rounded-sm">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-muted-foreground">Phone</p>
                  <p className="text-foreground group-hover:text-accent transition-colors font-medium">
                    +254 704 590 711
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/254704590711"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 group-hover:bg-accent/20 transition-colors rounded-sm">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-muted-foreground">WhatsApp</p>
                  <p className="text-foreground group-hover:text-accent transition-colors font-medium">
                    +254 704 590 711
                  </p>
                </div>
              </a>

              <a href="mailto:hello@wigomart.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 group-hover:bg-accent/20 transition-colors rounded-sm">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-muted-foreground">Email</p>
                  <p className="text-foreground group-hover:text-accent transition-colors font-medium">
                    hello@wigomart.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-sm">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase text-muted-foreground">Showroom</p>
                  <p className="text-foreground font-medium">Basement, Towhid Residency, California, Easleigh, Nairobi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-transparent border border-border focus:border-accent outline-none transition-colors text-foreground rounded-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-transparent border border-border focus:border-accent outline-none transition-colors text-foreground rounded-sm"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-transparent border border-border focus:border-accent outline-none transition-colors text-foreground rounded-sm"
                  placeholder="e.g. 0712 345 678"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
                  I'm interested in
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-transparent border border-border focus:border-accent outline-none transition-colors text-foreground rounded-sm"
                >
                  <option value="">Select a category</option>
                  <option value="wooden-beds">Wooden Beds</option>
                  <option value="mdf-beds">MDF Beds</option>
                  <option value="dining">Dining Tables & Chairs</option>
                  <option value="coffee-tables">Coffee Tables</option>
                  <option value="console-tables">Console Tables</option>
                  <option value="coffee-courts">Coffee Courts</option>
                  <option value="side-tables">Side Tables</option>
                  <option value="mirrors">Mirrors</option>
                  <option value="other">Other / Multiple Items</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent border border-border focus:border-accent outline-none transition-colors resize-none text-foreground rounded-sm"
                  placeholder="Tell us what you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-sm tracking-widest uppercase bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-semibold rounded-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
