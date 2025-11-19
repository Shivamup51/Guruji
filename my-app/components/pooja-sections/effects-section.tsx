import { Card } from "@/components/ui/card"
import EffectCard from "./effect-card"
import type { EffectsSectionProps } from "./types"

export default function EffectsSection({
  title,
  subtitle,
  effects,
  footerCardText,
  backgroundColor,
  textColor = "#9B251E",
  accentColor = "#FBDCAB",
}: EffectsSectionProps) {
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
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {effects.map((effect, index) => (
            <EffectCard key={index} effect={effect} textColor={textColor} accentColor={accentColor} />
          ))}
        </div>
        {footerCardText && (
          <div className="mt-12 text-center">
            <Card className="inline-block border-2 px-8 py-6" style={{ borderColor: textColor, backgroundColor: accentColor }}>
              <p className="text-lg font-semibold" style={{ color: textColor }}>
                {footerCardText}
              </p>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}

