"use client"

import Marquee from "@/components/marquee"
import { Flame } from "lucide-react"

const mantras = [
  "ॐ नमः शिवाय",
  "ॐ त्र्यंबकेश्वराय नमः",
  "ॐ नारायणाय नमः",
  "ॐ पितृदेवताभ्यो नमः",
  "ॐ ग्रहाणां शान्ति-कारणाय नमः",
  "ॐ नवग्रह देवताभ्यो नमः",
  "ॐ महामृत्युंजयाय नमः",
  "ॐ रुद्राय नमः",
  "ॐ शंभवे नमः",
  "ॐ हराय नमः"
]

export default function MantrasMarquee() {
  return (
    <section className="py-8" style={{ backgroundColor: "#9B251E" }}>
      <div className="overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]">
          {mantras.map((mantra, index) => (
            <div key={index} className="flex items-center gap-8 px-8">
              <span className="text-2xl sm:text-3xl font-semibold whitespace-nowrap" style={{ color: "#FBDCAB" }}>
                {mantra}
              </span>
              <Flame className="h-6 w-6" style={{ color: "#FBDCAB" }} />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm font-medium" style={{ color: "#FBDCAB", opacity: 0.9 }}>
          पवित्र मंत्र - Sacred Mantras for Divine Blessings
        </p>
      </div>
    </section>
  )
}

