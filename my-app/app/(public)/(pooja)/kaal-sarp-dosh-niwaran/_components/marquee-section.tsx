import { MarqueeSection as GlobalMarqueeSection } from "@/components/pooja-sections"
import { mantras } from "./data"

export default function MarqueeSection() {
  return (
    <GlobalMarqueeSection
      items={mantras}
      subtitle="Powerful Rahu–Ketu Shanti Mantras for Protection"
      backgroundColor="#9B251E"
      textColor="#FBDCAB"
      accentColor="#FBDCAB"
    />
  )
}
