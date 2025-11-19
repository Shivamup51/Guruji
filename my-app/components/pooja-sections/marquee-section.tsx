"use client"

import Marquee from "@/components/marquee"
import { Flame } from "lucide-react"
import type { MarqueeSectionProps } from "./types"

export default function MarqueeSection({
  items,
  icon: Icon = Flame,
  subtitle,
  backgroundColor = "#9B251E",
  textColor = "#FBDCAB",
  accentColor = "#FBDCAB",
}: MarqueeSectionProps) {
  return (
    <section className="py-8" style={{ backgroundColor }}>
      <div className="overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-8 px-8">
              <span className="text-2xl sm:text-3xl font-semibold whitespace-nowrap" style={{ color: textColor }}>
                {item}
              </span>
              <Icon className="h-6 w-6" style={{ color: textColor }} />
            </div>
          ))}
        </Marquee>
      </div>
      {subtitle && (
        <div className="text-center mt-4">
          <p className="text-sm font-medium" style={{ color: textColor, opacity: 0.9 }}>
            {subtitle}
          </p>
        </div>
      )}
    </section>
  )
}

