import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, Phone } from "lucide-react"
import type { HomeSectionProps } from "./types"

export default function HomeSection({
  badgeText,
  title,
  descriptions,
  primaryButtonText = "Book Pooja Now",
  primaryButtonAction,
  secondaryButtonText = "Call Us",
  secondaryButtonAction,
  secondaryButtonIcon: SecondaryButtonIcon = Phone,
  imageSrc,
  imageAlt,
  backgroundColor,
  textColor = "#9B251E",
  accentColor = "#FBDCAB",
}: HomeSectionProps) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={backgroundColor ? { backgroundColor } : undefined}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: textColor, color: accentColor }}>
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">{badgeText}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: textColor }}>
              {title}
            </h1>
            {descriptions.map((description, index) => (
              <p
                key={index}
                className={index === 0 ? "text-lg sm:text-xl leading-relaxed" : "text-base sm:text-lg leading-relaxed"}
                style={{ color: textColor, opacity: index === 0 ? 0.9 : 0.85 }}
              >
                {description}
              </p>
            ))}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                style={{ backgroundColor: textColor, color: accentColor }}
                onClick={primaryButtonAction}
              >
                {primaryButtonText}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2"
                style={{ borderColor: textColor, color: textColor }}
                onClick={secondaryButtonAction}
              >
                <SecondaryButtonIcon className="h-5 w-5 mr-2" />
                {secondaryButtonText}
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

