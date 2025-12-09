"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import type { TypesSectionProps } from "./types"

export default function TypesSection({
  title,
  subtitle,
  types,
  footerText,
  autoRotateInterval = 5000,
  backgroundColor = "#9B251E",
  textColor = "#FBDCAB",
  accentColor = "#FBDCAB",
}: TypesSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % types.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [types.length, autoRotateInterval])

  const currentType = types[currentIndex]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: textColor }}>
            {title}
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: textColor, opacity: 0.9 }}>
            {subtitle}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
          {/* Content on the left */}
          <div className="space-y-6">
            <div className="transition-all duration-500 ease-in-out">
              <div className="flex items-center gap-3 mb-4">
                {currentType.icon && <span className="text-4xl">{currentType.icon}</span>}
                <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: textColor }}>
                  {currentType.name}
                </h3>
              </div>
              <p className="text-lg sm:text-xl leading-relaxed" style={{ color: textColor, opacity: 0.95 }}>
                {currentType.description}
              </p>
            </div>
            
            {/* Indicator dots */}
            <div className="flex gap-2 justify-center lg:justify-start pt-4">
              {types.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8"
                      : "opacity-50 hover:opacity-75"
                  }`}
                  style={{
                    backgroundColor: accentColor,
                    opacity: index === currentIndex ? 1 : 0.5
                  }}
                  aria-label={`Go to ${types[index].name}`}
                />
              ))}
            </div>
          </div>

          {/* Image on the right */}
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={currentType.image}
              alt={currentType.name}
              fill
              className="object-fill transition-opacity duration-500"
              priority={currentIndex === 0}
            />
          </div>
        </div>

        {footerText && (
          <div className="mt-12 text-center">
            <p className="text-lg" style={{ color: textColor, opacity: 0.9 }}>
              {footerText}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

