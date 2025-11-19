import { TestimonialsSection as GlobalTestimonialsSection } from "@/components/pooja-sections"
import { testimonials } from "./data"

export default function TestimonialsSection() {
  return (
    <GlobalTestimonialsSection
      title="Testimonials – What Devotees Say"
      subtitle="Read what our beloved devotees have to say about their experience"
      testimonials={testimonials}
      backgroundColor="#9B251E"
      textColor="#9B251E"
      accentColor="#FBDCAB"
    />
  )
}
