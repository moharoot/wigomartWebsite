import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProductsGrid } from "@/components/products-grid"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { LocationVideoSection } from "@/components/location-video-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: "Wigomart Kenya",
    description: "Quality furniture and home décor at great prices. Premium beds, dining tables, coffee tables, and more.",
    url: "https://wigomart.com",
    logo: "https://wigomart.com/images/whatsapp-20image-202025-12-21-20at-2011.jpeg",
    image: "https://wigomart.com/images/og-image.jpg",
    telephone: "+254-704-590711", // Replace with your actual phone number
    email: "info@wigomart.com", // Replace with your actual email
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address", // Add your address
      addressLocality: "Nairobi",
      addressRegion: "Nairobi County",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-1.2921", // Update with your actual coordinates
      longitude: "36.8219",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Nairobi",
      },
      {
        "@type": "City",
        name: "Mombasa",
      },
      {
        "@type": "City",
        name: "Kisumu",
      },
      {
        "@type": "Country",
        name: "Kenya",
      },
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/wigomart", // Add your actual social media links
      "https://www.instagram.com/wigomart",
      "https://twitter.com/wigomart",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Furniture Products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Wooden Beds",
            description: "Premium wooden beds in various sizes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "MDF Beds",
            description: "Affordable MDF beds with modern designs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Dining Tables",
            description: "Stylish dining tables for your home",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Coffee Tables",
            description: "Modern coffee tables to complete your living room",
          },
        },
      ],
    },
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main>
        <Navbar />
        <HeroSection />
        <ProductsGrid />
        <AboutSection />
        <FeaturesSection />
        <TestimonialsSection />
        <LocationVideoSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}