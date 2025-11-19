import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import type { Testimonial } from "./types"

interface TestimonialCardProps {
  testimonial: Testimonial
  textColor?: string
  accentColor?: string
}

export default function TestimonialCard({ testimonial, textColor = "#9B251E", accentColor = "#FBDCAB" }: TestimonialCardProps) {

  const cardTextColor = textColor.toLowerCase() === accentColor.toLowerCase() ? "#9B251E" : textColor
  
  return (
    <Card className="border-2 h-full" style={{ borderColor: accentColor, backgroundColor: accentColor }}>
      <CardHeader>
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" style={{ color: cardTextColor }} />
          ))}
        </div>
        <CardTitle className="text-xl" style={{ color: cardTextColor }}>
          {testimonial.name}
        </CardTitle>
        <CardDescription style={{ color: cardTextColor, opacity: 0.8 }}>
          {testimonial.location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-base leading-relaxed italic" style={{ color: cardTextColor, opacity: 0.9 }}>
          "{testimonial.text}"
        </p>
      </CardContent>
    </Card>
  )
}

