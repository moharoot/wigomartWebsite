"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { showroomImages } from "@/lib/showroom-data"
import { cn } from "@/lib/utils"

export function ShowroomGallery() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleItems((prev) => new Set([...prev, index]))
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "50px",
      }
    )

    const items = document.querySelectorAll("[data-gallery-item]")
    items.forEach((item) => {
      observerRef.current?.observe(item)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  const isVisible = (index: number) => visibleItems.has(index)

  return (
    <section className="py-20 md:py-28 bg-background" data-section="showroom">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-widest uppercase text-accent animate-fade-in">Experience In Person</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Our Showroom
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Step into our Nairobi showroom and experience premium furniture and home décor firsthand. Our expert
            consultants are ready to help you find the perfect pieces for your space.
          </p>
        </div>

        {/* Gallery Items */}
        <div className="space-y-20">
          {showroomImages.map((image, index) => (
            <article
              key={image.id}
              data-gallery-item
              data-index={index}
              className={cn("grid md:grid-cols-2 gap-8 md:gap-12 items-center", index % 2 === 1 && "md:grid-flow-dense")}
            >
              {/* Image */}
              <div
                className={cn(
                  "relative aspect-[4/3] overflow-hidden bg-secondary rounded-lg shadow-lg transition-all duration-700",
                  index % 2 === 1 && "md:col-start-2",
                  isVisible(index) ? "opacity-100 translate-x-0 scale-100" : index % 2 === 0 ? "opacity-0 -translate-x-10 scale-95" : "opacity-0 translate-x-10 scale-95"
                )}
                style={{ transitionDelay: "100ms" }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div 
                className={cn(
                  "flex flex-col justify-center transition-all duration-700",
                  index % 2 === 1 && "md:col-start-1",
                  isVisible(index) ? "opacity-100 translate-x-0" : index % 2 === 0 ? "opacity-0 translate-x-10" : "opacity-0 -translate-x-10"
                )}
                style={{ transitionDelay: "300ms" }}
              >
                <span 
                  className={cn(
                    "text-sm tracking-widest uppercase text-accent mb-2 transition-all duration-500",
                    isVisible(index) ? "opacity-100" : "opacity-0"
                  )}
                  style={{ transitionDelay: "400ms" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 
                  className={cn(
                    "text-2xl md:text-3xl font-medium text-foreground mb-4 transition-all duration-700",
                    isVisible(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  )}
                  style={{ transitionDelay: "500ms" }}
                >
                  {image.title}
                </h3>
                <p 
                  className={cn(
                    "text-muted-foreground leading-relaxed transition-all duration-700",
                    isVisible(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  )}
                  style={{ transitionDelay: "600ms" }}
                >
                  {image.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}