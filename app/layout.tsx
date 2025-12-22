import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const siteUrl = "https://wigomart.com" // Replace with your actual domain
const siteName = "wigomart Kenya"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "wigomart Kenya | Premium Furniture, Beds & Home Décor - Where Savings Meet Style",
    template: "%s | wigomart Kenya",
  },
  description:
    "Discover quality furniture at wigomart Kenya. Wooden beds, MDF beds, dining tables, coffee tables, console tables, mirrors & more. Serving Nairobi, Mombasa, Kisumu & all of Kenya. Where savings meet style.",
  keywords: [
    "furniture in Kenya",
    "beds in Kenya",
    "wooden beds Kenya",
    "MDF beds Kenya",
    "dining tables Kenya",
    "coffee tables Kenya",
    "console tables Kenya",
    "mirrors Kenya",
    "wigomart Kenya",
    "Nairobi furniture",
    "Mombasa furniture",
    "affordable furniture Kenya",
    "home decor Kenya",
    "furniture store Kenya",
    "buy furniture online Kenya",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: siteName,
    title: "wigomart Kenya | Where Savings Meet Style",
    description: "Quality furniture and home décor at great prices. Serving all of Kenya with beds, dining tables, coffee tables & more.",
    images: [
      {
        url: "/images/og-image.jpg", // Create this image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "wigomart Kenya - Premium Furniture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "wigomart Kenya | Where Savings Meet Style",
    description: "Quality furniture and home décor at great prices. Serving all of Kenya.",
    images: ["/images/twitter-image.jpg"], // Create this image (1200x600px recommended)
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "furniture",
  icons: {
    icon: [
      { url: "/images/favicon.png", sizes: "any" },
      { url: "/images/favicon.png", type: "image/svg+xml" },
      { url: "/images/favicon.png", type: "image/png", sizes: "192x192" },
      { url: "/images/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/images/favicon.png"],
  },
  manifest: "/manifest.json",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2B5F9E" },
    { media: "(prefers-color-scheme: dark)", color: "#2B5F9E" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorantGaramond.variable}`}>
      <head>
        {/* Additional SEO tags */}
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}