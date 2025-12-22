import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LocationVideoSection } from "@/components/location-video-section"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | wigomart Kenya - Furniture Store in Nairobi, Where Savings Meet Style",
  description:
    "Contact wigomart Kenya for quality furniture at affordable prices. Beds, dining tables, coffee tables, mirrors & more. Visit our showroom in Nairobi or call us. We deliver across Kenya.",
  keywords: [
    "contact wigomart Kenya",
    "furniture store Nairobi",
    "buy furniture Kenya",
    "furniture delivery Kenya",
    "affordable furniture Kenya contact",
  ],
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section - Updated for wigomart */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm tracking-widest uppercase text-accent font-semibold">Get In Touch</span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              We're Here to <span className="text-accent">Help</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have questions about our furniture? Want to place an order or schedule a showroom visit? Reach out to us
              through any of the channels below. We serve all of Kenya with quality furniture at affordable prices.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods - Updated for wigomart */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {/* Phone */}
            <article className="bg-secondary p-8 text-center group hover:bg-accent hover:text-accent-foreground transition-colors duration-300 rounded-sm">
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-background group-hover:bg-accent-foreground/10 transition-colors rounded-sm">
                <Phone className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground group-hover:text-accent-foreground/80 mb-4">
                Speak directly with our team
              </p>
              <a href="tel:+254704590711" className="text-foreground group-hover:text-accent-foreground font-semibold">
                +254 704 590 711
              </a>
            </article>

            {/* WhatsApp */}
            <article className="bg-secondary p-8 text-center group hover:bg-accent hover:text-accent-foreground transition-colors duration-300 rounded-sm">
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-background group-hover:bg-accent-foreground/10 transition-colors rounded-sm">
                <MessageCircle className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
              <p className="text-muted-foreground group-hover:text-accent-foreground/80 mb-4">
                Quick responses on WhatsApp
              </p>
              <a
                href="https://wa.me/254704590711"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground group-hover:text-accent-foreground font-semibold"
              >
                Message Us
              </a>
            </article>

            {/* Email */}
            <article className="bg-secondary p-8 text-center group hover:bg-accent hover:text-accent-foreground transition-colors duration-300 rounded-sm">
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-background group-hover:bg-accent-foreground/10 transition-colors rounded-sm">
                <Mail className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground group-hover:text-accent-foreground/80 mb-4">
                Send us a detailed inquiry
              </p>
              <a
                href="mailto:hello@wigomart.com"
                className="text-foreground group-hover:text-accent-foreground font-semibold"
              >
                hello@wigomart.com
              </a>
            </article>

            {/* Visit */}
            <article className="bg-secondary p-8 text-center group hover:bg-accent hover:text-accent-foreground transition-colors duration-300 rounded-sm">
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-background group-hover:bg-accent-foreground/10 transition-colors rounded-sm">
                <MapPin className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-muted-foreground group-hover:text-accent-foreground/80 mb-4">
                Experience our showroom
              </p>
              <span className="text-foreground group-hover:text-accent-foreground font-semibold">
                Basement, Towhid Residency, California, Easleigh, Nairobi
              </span>
            </article>
          </div>

          {/* Contact Form & Info Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours. Whether you're looking for beds,
                dining furniture, coffee tables, or mirrors, we're here to help you find the perfect pieces.
              </p>
              <ContactForm />
            </div>

            {/* Store Information - Updated for wigomart */}
            <div className="bg-secondary p-8 md:p-10 rounded-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Store Information</h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      wigomart Furniture Showroom
                      <br />
                      Basement, Towhid Residency, California, Easleigh
                      <br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Opening Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 5:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Delivery */}
                <div className="flex gap-4">
                  <div className="w-5 h-5 shrink-0 mt-1 flex items-center justify-center">
                    <span className="text-accent text-lg">🚚</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Delivery Areas</h3>
                    <p className="text-muted-foreground">
                      We deliver furniture across all 47 counties in Kenya including Nairobi, Mombasa, Kisumu, Nakuru,
                      Eldoret, and other major cities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+254704590711"
                  className="flex-1 py-3 px-6 bg-accent text-accent-foreground text-center text-sm tracking-wider uppercase hover:bg-accent/90 transition-colors font-semibold rounded-sm"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/254704590711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-6 border-2 border-foreground text-foreground text-center text-sm tracking-wider uppercase hover:bg-foreground hover:text-background transition-colors font-semibold rounded-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Video Section */}
      <LocationVideoSection />

      <Footer />
    </main>
  )
}
