"use client"

import { useRef, useState } from "react"
import { Play, Pause, MapPin } from "lucide-react"

export function LocationVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm tracking-widest uppercase text-accent font-semibold">Visit Our Store</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Find <span className="text-accent">wigomart</span> in Kenya
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Visit our showroom in Nairobi to see our premium collection of beds, dining furniture, coffee tables, and
            more. We serve customers across all of Kenya with delivery to Nairobi, Mombasa, Kisumu, and beyond.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Video Container */}
          <div className="relative aspect-video bg-muted overflow-hidden rounded-sm">
            {/* Placeholder for video - replace src with actual video */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/furniture-store-showroom-kenya-nairobi-location.jpg"
              loop
              muted
              playsInline
            >
              {/* Replace with actual video source */}
              <source src="/store-location-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play/Pause Overlay */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-primary/30 hover:bg-primary/40 transition-colors group"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              <div className="w-20 h-20 flex items-center justify-center bg-background/95 rounded-full group-hover:scale-110 transition-transform shadow-lg">
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-primary" />
                ) : (
                  <Play className="w-8 h-8 text-primary ml-1" />
                )}
              </div>
            </button>

            {/* Video placeholder text */}
            <div className="absolute bottom-4 left-4 bg-background/90 px-4 py-2 rounded-sm">
              <p className="text-sm text-muted-foreground">Replace with your store location video</p>
            </div>
          </div>

          {/* Location Info - Updated for wigomart */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-foreground font-semibold">wigomart Showroom, Nairobi</span>
            </div>
            <span className="hidden md:block text-muted-foreground">|</span>
            <p className="text-muted-foreground">Open Monday - Saturday, 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  )
}
