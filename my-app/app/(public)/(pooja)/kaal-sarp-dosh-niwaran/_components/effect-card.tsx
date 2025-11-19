import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import type { Effect } from "./data"

interface EffectCardProps {
  effect: Effect
}

export default function EffectCard({ effect }: EffectCardProps) {
  const Icon = effect.icon

  return (
    <Card className="border-2 h-full" style={{ borderColor: "#9B251E", backgroundColor: "#FBDCAB" }}>
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg" style={{ backgroundColor: "#9B251E", color: "#FBDCAB" }}>
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-xl" style={{ color: "#9B251E" }}>
            {effect.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {effect.items.map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "#9B251E" }} />
              <span className="text-base" style={{ color: "#9B251E", opacity: 0.9 }}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

