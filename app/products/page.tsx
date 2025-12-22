import { Navbar } from "@/components/navbar"
import { ProductsGrid } from "@/components/products-grid"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Collection | Maison",
  description: "Explore our curated collection of handcrafted artisanal products.",
}

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm tracking-widest uppercase text-accent font-semibold">Browse</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Our Collection
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Each piece is thoughtfully selected for its exceptional craftsmanship, quality materials, and timeless
              design.
            </p>
          </div>
        </div>
      </section>
      <ProductsGrid />
      <Footer />
    </main>
  )
}
