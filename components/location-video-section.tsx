"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { Play, Pause, MapPin, Volume2, VolumeX, Maximize, Minimize } from "lucide-react"

export function LocationVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(1)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, "0")}`
  }

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value)
    if (!videoRef.current) return
    videoRef.current.volume = v
    setVolume(v)
    setIsMuted(v === 0)
    videoRef.current.muted = v === 0
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return
    const t = (parseFloat(e.target.value) / 100) * duration
    videoRef.current.currentTime = t
    setCurrentTime(t)
    setProgress(parseFloat(e.target.value))
  }

  const toggleFullscreen = async () => {
    if (!containerRef.current) return
    if (!document.fullscreenElement) {
      await containerRef.current.requestFullscreen()
      setIsFullscreen(true)
    } else {
      await document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const resetControlsTimer = useCallback(() => {
    setShowControls(true)
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current)
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3000)
    }
  }, [isPlaying])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onTimeUpdate = () => {
      setCurrentTime(video.currentTime)
      setProgress(duration ? (video.currentTime / duration) * 100 : 0)
    }
    const onLoadedMetadata = () => setDuration(video.duration)
    const onEnded = () => setIsPlaying(false)
    const onFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement)

    video.addEventListener("timeupdate", onTimeUpdate)
    video.addEventListener("loadedmetadata", onLoadedMetadata)
    video.addEventListener("ended", onEnded)
    document.addEventListener("fullscreenchange", onFullscreenChange)

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate)
      video.removeEventListener("loadedmetadata", onLoadedMetadata)
      video.removeEventListener("ended", onEnded)
      document.removeEventListener("fullscreenchange", onFullscreenChange)
    }
  }, [duration])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setIsVisible(true) }),
      { threshold: 0.2, rootMargin: "50px" }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className={`text-sm tracking-widest uppercase text-accent font-semibold transition-all duration-700 inline-block ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Visit Our Store
          </span>
          <h2 className={`mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Find <span className="text-accent">Wigomart</span> in Kenya
          </h2>
          <p className={`mt-4 text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Visit our showroom in Nairobi to see our premium collection of beds, dining furniture, coffee tables, and
            more. We serve customers across all of Kenya with delivery to Nairobi, Mombasa, Kisumu, and beyond.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Video Container */}
          <div
            ref={containerRef}
            onMouseMove={resetControlsTimer}
            onMouseLeave={() => isPlaying && setShowControls(false)}
            className={`relative aspect-video bg-muted overflow-hidden rounded-lg shadow-2xl transition-all duration-700 delay-300 group ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            {/* Blurred background fill */}
              <video
                className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-60 pointer-events-none"
                src="/wigomart-location.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden
              />

              {/* Main video */}
            <video
              ref={videoRef}
              className="relative w-full h-full object-contain"
              poster="/video-poster.jpg"
              loop
              playsInline
              onClick={togglePlay}
            >
              <source src="/wigomart-location.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Centre play/pause overlay (shows when paused or hovering) */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-primary/30 hover:bg-primary/40 transition-colors"
                aria-label="Play video"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-background/95 rounded-full hover:scale-110 transition-transform shadow-lg">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
              </button>
            )}

            {/* Controls bar */}
            <div
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 pt-8 pb-3 transition-opacity duration-300 ${showControls || !isPlaying ? "opacity-100" : "opacity-0"}`}
            >
              {/* Seek bar */}
              <input
                type="range"
                min={0}
                max={100}
                step={0.1}
                value={progress}
                onChange={handleSeek}
                className="w-full h-1 mb-3 cursor-pointer accent-accent appearance-none rounded-full bg-white/30"
                style={{ background: `linear-gradient(to right, var(--accent, #f97316) ${progress}%, rgba(255,255,255,0.3) ${progress}%)` }}
                aria-label="Seek"
              />

              <div className="flex items-center gap-3">
                {/* Play/Pause */}
                <button onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"} className="text-white hover:text-accent transition-colors">
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>

                {/* Time */}
                <span className="text-white/70 text-xs tabular-nums">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>

                <div className="flex-1" />

                {/* Mute */}
                <button onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"} className="text-white hover:text-accent transition-colors">
                  {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                {/* Volume slider */}
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={isMuted ? 0 : volume}
                  onChange={handleVolume}
                  className="w-20 h-1 cursor-pointer accent-accent appearance-none rounded-full"
                  style={{ background: `linear-gradient(to right, var(--accent, #f97316) ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.3) ${(isMuted ? 0 : volume) * 100}%)` }}
                  aria-label="Volume"
                />

                {/* Fullscreen */}
                <button onClick={toggleFullscreen} aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"} className="text-white hover:text-accent transition-colors">
                  {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className={`mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-foreground font-semibold">Wigomart Showroom, Nairobi</span>
            </div>
            <span className="hidden md:block text-muted-foreground">|</span>
            <p className="text-muted-foreground">Open Monday - Saturday, 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  )
}