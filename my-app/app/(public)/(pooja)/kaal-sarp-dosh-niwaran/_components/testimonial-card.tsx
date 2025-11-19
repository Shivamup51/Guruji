import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import type { Testimonial } from "./data"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="border-2 h-full" style={{ borderColor: "#FBDCAB", backgroundColor: "#FBDCAB" }}>
      <CardHeader>
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" style={{ color: "#9B251E" }} />
          ))}
        </div>
        <CardTitle className="text-xl" style={{ color: "#9B251E" }}>
          {testimonial.name}
        </CardTitle>
        <CardDescription style={{ color: "#9B251E", opacity: 0.8 }}>
          {testimonial.location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-base leading-relaxed italic" style={{ color: "#9B251E", opacity: 0.9 }}>
          "{testimonial.text}"
        </p>
      </CardContent>
    </Card>
  )
}

