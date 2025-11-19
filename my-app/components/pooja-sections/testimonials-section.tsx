import TestimonialCard from "./testimonial-card"
import type { TestimonialsSectionProps } from "./types"

export default function TestimonialsSection({
  title,
  subtitle,
  testimonials,
  backgroundColor = "#9B251E",
  textColor = "#FBDCAB",
  accentColor = "#FBDCAB",
}: TestimonialsSectionProps) {
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
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} textColor={textColor} accentColor={accentColor} />
          ))}
        </div>
      </div>
    </section>
  )
}

