import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import type { Effect } from "./types"

interface EffectCardProps {
  effect: Effect
  textColor?: string
  accentColor?: string
}

export default function EffectCard({ effect, textColor = "#9B251E", accentColor = "#FBDCAB" }: EffectCardProps) {
  const Icon = effect.icon

  return (
    <Card className="border-2 h-full" style={{ borderColor: textColor, backgroundColor: accentColor }}>
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg" style={{ backgroundColor: textColor, color: accentColor }}>
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-xl" style={{ color: textColor }}>
            {effect.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {effect.items.map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: textColor }} />
              <span className="text-base" style={{ color: textColor, opacity: 0.9 }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

