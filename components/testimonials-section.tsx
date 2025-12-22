"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "I furnished my entire apartment from wigomart. Great quality beds and dining table at amazing prices. Delivery to Kilimani was quick too!",
    author: "Mary W.",
    location: "Nairobi",
  },
  {
    quote:
      "The MDF bed I ordered was exactly as shown. Their WhatsApp support helped me choose the right size. Highly recommend wigomart!",
    author: "James K.",
    location: "Mombasa",
  },
  {
    quote:
      "Finally found affordable quality furniture in Kenya. The console table and mirrors transformed my living room. Thank you wigomart!",
    author: "Grace O.",
    location: "Kisumu",
  },
  {
    quote:
      "Our 8-seater dining set is perfect for family gatherings. wigomart delivered all the way to Nakuru without any issues.",
    author: "Peter M.",
    location: "Nakuru",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4 font-semibold">Happy Customers</p>
          <Quote className="w-10 h-10 text-accent mx-auto mb-8" />

          <div className="relative min-h-[200px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === current ? "opacity-100 translate-x-0" : "opacity-0 absolute inset-0 translate-x-10"
                }`}
              >
                <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="not-italic">
                  <span className="block text-base font-semibold text-foreground">{testimonial.author}</span>
                  <span className="text-sm text-muted-foreground">{testimonial.location}, Kenya</span>
                </cite>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-2 border border-border hover:border-accent hover:bg-accent/10 transition-colors rounded-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === current ? "bg-accent" : "bg-border"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 border border-border hover:border-accent hover:bg-accent/10 transition-colors rounded-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
