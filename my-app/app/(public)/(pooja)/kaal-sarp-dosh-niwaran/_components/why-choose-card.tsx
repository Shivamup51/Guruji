import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { WhyChooseItem } from "./data"

interface WhyChooseCardProps {
  item: WhyChooseItem
}

export default function WhyChooseCard({ item }: WhyChooseCardProps) {
  const Icon = item.icon

  return (
    <Card className="border-2 h-full" style={{ borderColor: "#9B251E", backgroundColor: "#FBDCAB" }}>
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 rounded-lg" style={{ backgroundColor: "#9B251E", color: "#FBDCAB" }}>
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-xl" style={{ color: "#9B251E" }}>
            {item.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-base leading-relaxed" style={{ color: "#9B251E", opacity: 0.9 }}>
          {item.description}
        </p>
      </CardContent>
    </Card>
  )
}

