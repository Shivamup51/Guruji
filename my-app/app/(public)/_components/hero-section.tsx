"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import Image from "next/image"

const heroSlides = [
  {
    title: "शिव की कृपा से जीवन में शांति",
    subtitle: "Peace Through Lord Shiva's Blessings",
    description: "Trimbakeshwar में प्रामाणिक वैदिक पूजा सेवाएं",
    descriptionEn: "Authentic Vedic Puja Services at Trimbakeshwar",
    image: "/pooja2.png",
    ctaText: "पूजा बुक करें",
    ctaTextEn: "Book Puja Now"
  },
  {
    title: "काल सर्प दोष निवारण",
    subtitle: "Kaal Sarp Dosh Nivaran",
    description: "जीवन की बाधाओं को दूर करें और शांति प्राप्त करें",
    descriptionEn: "Remove Life Obstacles and Attain Peace",
    image: "/kaal.png",
    ctaText: "अभी संपर्क करें",
    ctaTextEn: "Contact Now"
  },
  {
    title: "पितृ दोष शांति",
    subtitle: "Pitru Dosh Shanti",
    description: "पूर्वजों की कृपा से समृद्धि और खुशहाली",
    descriptionEn: "Prosperity and Happiness Through Ancestral Blessings",
    image: "/pitar-dosh.jpg",
    ctaText: "पूजा करवाएं",
    ctaTextEn: "Perform Puja"
  },
  {
    title: "ग्रह शांति पूजा",
    subtitle: "Grah Shanti Puja",
    description: "ग्रहों की शुभता से जीवन में सफलता",
    descriptionEn: "Success in Life Through Planetary Harmony",
    image: "/grah-shanti.jpg",
    ctaText: "अभी जानें",
    ctaTextEn: "Learn More"
  }
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000) // Auto-slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const currentHero = heroSlides[currentSlide]

  return (
    <section className="relative w-full overflow-hidden py-12 lg:py-16" style={{ backgroundColor: "#FBDCAB" }}>
      {/* Content - Split Layout */}
      <div className="relative z-10 flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight" style={{ color: "#9B251E" }}>
                  {currentHero.title}
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold" style={{ color: "#9B251E", opacity: 0.9 }}>
                  {currentHero.subtitle}
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed" style={{ color: "#9B251E", opacity: 0.85 }}>
                  {currentHero.description}
                </p>
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed" style={{ color: "#9B251E", opacity: 0.8 }}>
                  {currentHero.descriptionEn}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 font-semibold"
                  style={{ backgroundColor: "#9B251E", color: "#FBDCAB", fontWeight: "600" }}
                  onClick={() => window.location.href = "/contact-us"}
                >
                  <span style={{ color: "#FBDCAB" }}>{currentHero.ctaText}</span>
                  <span className="ml-2 text-sm" style={{ color: "#FBDCAB" }}>({currentHero.ctaTextEn})</span>
                  <ArrowRight className="ml-2 h-5 w-5" style={{ color: "#FBDCAB" }} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 font-semibold"
                  style={{ borderColor: "#9B251E", color: "#9B251E", backgroundColor: "#FBDCAB", fontWeight: "600" }}
                  onClick={() => window.open("tel:+917888012103")}
                >
                  <Phone className="h-5 w-5 mr-2" style={{ color: "#9B251E" }} />
                  <span style={{ color: "#9B251E" }}>+91 7888012103</span>
                </Button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] xl:h-[450px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <div className="relative w-full h-full">
                <Image
                  src={currentHero.image}
                  alt={currentHero.subtitle}
                  fill
                  className="object-cover transition-opacity duration-1000 ease-in-out"
                  priority={currentSlide === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient Overlay for better text contrast if needed */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, transparent 0%, rgba(155, 37, 30, 0.1) 100%)"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8" : "w-3 opacity-50"
            }`}
            style={{
              backgroundColor: "#9B251E",
              opacity: index === currentSlide ? 1 : 0.5
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full hover:opacity-80 transition-opacity hidden lg:block"
        style={{ backgroundColor: "#9B251E", color: "#FBDCAB" }}
        aria-label="Previous slide"
      >
        <ArrowRight className="h-6 w-6 rotate-180" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full hover:opacity-80 transition-opacity hidden lg:block"
        style={{ backgroundColor: "#9B251E", color: "#FBDCAB" }}
        aria-label="Next slide"
      >
        <ArrowRight className="h-6 w-6" />
      </button>
    </section>
  )
}

