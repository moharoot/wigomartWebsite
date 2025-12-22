"use client"

import { useState } from "react"
import Image from "next/image"
import { showroomImages } from "@/lib/showroom-data"
import { cn } from "@/lib/utils"

export function ShowroomGallery() {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm tracking-widest uppercase text-accent">Experience In Person</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance">
            Our Showroom
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Step into our Nairobi showroom and experience premium furniture and home décor firsthand. Our expert
            consultants are ready to help you find the perfect pieces for your space.
          </p>
        </div>

        <div className="space-y-12">
          {showroomImages.map((image, index) => (
            <article
              key={image.id}
              className={cn("grid md:grid-cols-2 gap-8 items-center", index % 2 === 1 && "md:grid-flow-dense")}
            >
              {/* Image */}
              <div
                className={cn(
                  "relative aspect-[4/3] overflow-hidden bg-secondary",
                  index % 2 === 1 && "md:col-start-2",
                )}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className={cn("flex flex-col justify-center", index % 2 === 1 && "md:col-start-1")}>
                <span className="text-sm tracking-widest uppercase text-accent mb-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4">{image.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{image.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
