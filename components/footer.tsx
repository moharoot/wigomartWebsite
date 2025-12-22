import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand - Updated to wigomart */}
          <div className="md:col-span-2">
            <Link href="/" className="relative inline-block h-14 w-40 bg-primary-foreground/10 p-2 rounded">
              <Image
                src="/images/logo.png"
                alt="wigomart - Where savings meet style"
                fill
                className="object-contain"
              />
            </Link>
            <p className="mt-4 text-primary-foreground/70 max-w-sm leading-relaxed">
              Quality furniture and home décor in Kenya - where savings meet style. We serve Nairobi, Mombasa, Kisumu,
              and all major cities with premium beds, dining furniture, and more.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all rounded-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all rounded-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all rounded-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6 font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - Updated for wigomart */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6 font-semibold">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>+254 704 590 711</li>
              <li>hello@wigomart.com</li>
              <li>Basement, Towhid Residency, California, Easleigh, Nairobi</li>
              <li>Kenya</li>
            </ul>
          </div>
        </div>

        {/* Bottom - Updated copyright */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© 2025 wigomart Kenya. All rights reserved. Where savings meet style.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
