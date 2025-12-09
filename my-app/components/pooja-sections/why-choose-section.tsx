import Image from "next/image"
import WhyChooseCard from "./why-choose-card"
import type { WhyChooseSectionProps } from "./types"

export default function WhyChooseSection({
  title,
  subtitle,
  description,
  items,
  bottomImageSrc,
  bottomImageAlt,
  backgroundColor,
  textColor = "#9B251E",
  accentColor = "#FBDCAB",
}: WhyChooseSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={backgroundColor ? { backgroundColor } : undefined}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: textColor }}>
            {title}
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: textColor, opacity: 0.9 }}>
            {subtitle}
          </p>
          {description && (
            <p className="text-base mt-2 max-w-2xl mx-auto" style={{ color: textColor, opacity: 0.85 }}>
              {description}
            </p>
          )}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <WhyChooseCard key={index} item={item} textColor={textColor} accentColor={accentColor} />
          ))}
        </div>
        
      </div>
    </section>
  )
}

