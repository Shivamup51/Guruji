"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Calendar, Star } from "lucide-react"

const stats = [
  {
    number: "20+",
    label: "Years of Experience",
    labelHindi: "वर्षों का अनुभव",
    icon: Award,
    color: "#9B251E"
  },
  {
    number: "1000+",
    label: "Successful Pujas",
    labelHindi: "सफल पूजाएं",
    icon: Star,
    color: "#9B251E"
  },
  {
    number: "500+",
    label: "Happy Devotees",
    labelHindi: "खुश भक्त",
    icon: Users,
    color: "#9B251E"
  },
  {
    number: "11+",
    label: "Types of Pujas",
    labelHindi: "प्रकार की पूजाएं",
    icon: Calendar,
    color: "#9B251E"
  }
]

export default function StatsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#9B251E" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#FBDCAB" }}>
            Our Achievements
            <span className="block text-2xl sm:text-3xl mt-2">हमारी उपलब्धियां</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={index}
                className="border-2 text-center transition-all hover:scale-105 hover:shadow-xl"
                style={{ borderColor: "#FBDCAB", backgroundColor: "#FBDCAB" }}
              >
                <CardContent className="pt-6 pb-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full" style={{ backgroundColor: "#9B251E" }}>
                      <Icon className="h-8 w-8" style={{ color: "#FBDCAB" }} />
                    </div>
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: "#9B251E" }}>
                    {stat.number}
                  </div>
                  <p className="text-base font-bold mb-1" style={{ color: "#9B251E" }}>
                    {stat.label}
                  </p>
                  <p className="text-sm font-semibold" style={{ color: "#9B251E", opacity: 0.9 }}>
                    {stat.labelHindi}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

