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
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Browse</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground">Our Collection</h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Each piece is thoughtfully selected for its exceptional craftsmanship, quality materials, and timeless
            design.
          </p>
        </div>
      </section>
      <ProductsGrid />
      <Footer />
    </main>
  )
}
