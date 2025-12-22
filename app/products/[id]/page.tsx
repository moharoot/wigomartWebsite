import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { products } from "@/lib/products"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Phone, MessageCircle, Mail, ArrowLeft, Check } from "lucide-react"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    return { title: "Product Not Found" }
  }

  return {
    title: `${product.name} | Maison`,
    description: product.description,
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return (
    <main>
      <Navbar />

      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container mx-auto px-6">
          {/* Back Link */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Collection
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <div className="relative aspect-[4/5] bg-secondary overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              <span className="absolute top-6 left-6 px-4 py-2 text-xs tracking-wider uppercase bg-background/90 text-foreground">
                {product.category}
              </span>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">{product.name}</h1>
                <p className="text-2xl md:text-3xl font-light text-accent mb-8">{product.price}</p>
                <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

                {/* Features */}
                <div className="mb-10">
                  <h3 className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Product Details</h3>
                  <ul className="grid grid-cols-2 gap-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-foreground">
                        <Check className="w-4 h-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact to Order */}
              <div className="mt-auto pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-6">
                  To order this product, please contact us directly. We&apos;ll be happy to assist you with your
                  purchase.
                </p>

                <div className="space-y-4">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call to Order
                  </a>

                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 border border-border text-foreground text-sm tracking-wider uppercase hover:border-foreground transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                    <a
                      href="mailto:hello@maison.com"
                      className="flex items-center justify-center gap-2 py-3 border border-border text-foreground text-sm tracking-wider uppercase hover:border-foreground transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products could go here */}

      <Footer />
    </main>
  )
}
