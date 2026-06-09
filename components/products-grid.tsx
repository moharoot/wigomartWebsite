"use client"

import { useState, useEffect, useRef } from "react"
import { products, categories } from "@/lib/products"
import { ProductCard } from "./product-card"
import { cn } from "@/lib/utils"

export function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  const filteredProducts = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory)

  useEffect(() => {
    // Reset visible cards when category changes
    setVisibleCards(new Set())

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleCards((prev) => new Set([...prev, index]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    )

    // Observe all product cards
    const cards = document.querySelectorAll("[data-product-card]")
    cards.forEach((card) => {
      observerRef.current?.observe(card)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [activeCategory])

  return (
    <section id="products" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        {/* <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 animate-fade-in">
            Our Collection
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground animate-fade-in-up">Curated for You</h2>
        </div> */}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 text-sm tracking-wider uppercase transition-all duration-300 rounded-lg animate-fade-in-up",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-transparent text-muted-foreground hover:text-foreground border border-border hover:border-foreground hover:shadow-md",
              )}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredProducts.map((product, index) => (
            <div
              key={`${product.id}-${activeCategory}`}
              data-product-card
              data-index={index}
              className={cn(
                "transition-all duration-700 ease-out",
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{
                transitionDelay: visibleCards.has(index) ? `${(index % 3) * 100}ms` : "0ms",
              }}
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <p className="text-xl text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}