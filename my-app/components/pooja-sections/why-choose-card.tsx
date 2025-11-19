import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { WhyChooseItem } from "./types"

interface WhyChooseCardProps {
  item: WhyChooseItem
  textColor?: string
  accentColor?: string
}

export default function WhyChooseCard({ item, textColor = "#9B251E", accentColor = "#FBDCAB" }: WhyChooseCardProps) {
  const Icon = item.icon

  return (
    <Card className="border-2 h-full" style={{ borderColor: textColor, backgroundColor: accentColor }}>
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 rounded-lg" style={{ backgroundColor: textColor, color: accentColor }}>
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-xl" style={{ color: textColor }}>
            {item.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-base leading-relaxed" style={{ color: textColor, opacity: 0.9 }}>
          {item.description}
        </p>
      </CardContent>
    </Card>
  )
}

