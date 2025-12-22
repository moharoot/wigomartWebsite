"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/lib/products"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={`/products/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <article className="relative">
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className={cn("object-cover transition-transform duration-700 ease-out", isHovered && "scale-105")}
          />
          {/* Hover Overlay */}
          <div
            className={cn(
              "absolute inset-0 bg-foreground/10 transition-opacity duration-500",
              isHovered ? "opacity-100" : "opacity-0",
            )}
          />
          {/* Category Badge */}
          <span className="absolute top-4 left-4 px-3 py-1 text-xs tracking-wider uppercase bg-background/90 text-foreground">
            {product.category}
          </span>
        </div>

        {/* Content */}
        <div className="pt-5">
          <h3 className="text-lg md:text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-300">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{product.shortDescription}</p>
          <p className="mt-2 text-base font-medium text-foreground">{product.price}</p>
        </div>

        {/* View Details Text */}
        <span
          className={cn(
            "absolute bottom-0 right-0 text-xs tracking-widest uppercase text-accent transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          )}
        >
          View Details →
        </span>
      </article>
    </Link>
  )
}
