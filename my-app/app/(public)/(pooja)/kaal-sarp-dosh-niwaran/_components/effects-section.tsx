import { EffectsSection as GlobalEffectsSection } from "@/components/pooja-sections"
import { effects } from "./data"

export default function EffectsSection() {
  return (
    <GlobalEffectsSection
      title="Effects – Symptoms of Kaal Sarp Dosh"
      subtitle="People with Kaal Sarp Dosh may face multiple challenges in different areas of life:"
      effects={effects}
      footerCardText="Performing Kaal Sarp Dosh Nivaran in Trimbakeshwar helps remove obstacles and brings positivity, success, good health, and stability."
      textColor="#9B251E"
      accentColor="#FBDCAB"
    />
  )
}
