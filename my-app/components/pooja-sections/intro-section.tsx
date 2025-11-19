import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { IntroSectionProps } from "./types"

export default function IntroSection({
  imageSrc,
  imageAlt,
  title,
  descriptions,
  cardTitle,
  cardContent,
  imagePosition = "left",
  backgroundColor,
  textColor = "#9B251E",
  accentColor = "#FBDCAB",
}: IntroSectionProps) {
  const imageElement = (
    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
      />
    </div>
  )

  const contentElement = (
    <div className="space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: textColor }}>
        {title}
      </h2>
      {descriptions.map((description, index) => (
        <p key={index} className="text-lg leading-relaxed" style={{ color: textColor, opacity: 0.9 }}>
          {description}
        </p>
      ))}
      {cardTitle && cardContent && (
        <Card className="border-2" style={{ borderColor: textColor, backgroundColor: accentColor }}>
          <CardHeader>
            <CardTitle className="text-xl" style={{ color: textColor }}>
              {cardTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed" style={{ color: textColor, opacity: 0.9 }}>
              {cardContent}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={backgroundColor ? { backgroundColor } : undefined}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {imagePosition === "left" ? (
            <>
              {imageElement}
              {contentElement}
            </>
          ) : (
            <>
              {contentElement}
              {imageElement}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

