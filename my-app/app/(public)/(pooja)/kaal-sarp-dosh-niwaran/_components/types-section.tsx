import { TypesSection as GlobalTypesSection } from "@/components/pooja-sections"
import { kaalSarpTypes } from "./data"
import type { TypeItem } from "@/components/pooja-sections/types"

export default function TypesSection() {
  const types: TypeItem[] = kaalSarpTypes.map(type => ({
    name: type.name,
    description: type.description,
    image: type.image,
    icon: type.icon
  }))

  return (
    <GlobalTypesSection
      title="Types of Kaal Sarp Dosh"
      subtitle="There are 12 main types of Kaal Sarp Dosh depending on planetary placement:"
      types={types}
      footerText="Each type influences different aspects of life, such as health, marriage, career, or mental stability. Guru Ji provides personalized guidance after checking the horoscope."
      autoRotateInterval={5000}
      backgroundColor="#9B251E"
      textColor="#FBDCAB"
      accentColor="#FBDCAB"
    />
  )
}
