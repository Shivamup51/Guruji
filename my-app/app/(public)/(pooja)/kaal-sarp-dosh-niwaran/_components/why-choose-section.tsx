import { WhyChooseSection as GlobalWhyChooseSection } from "@/components/pooja-sections"
import { whyChoose } from "./data"

export default function WhyChooseSection() {
  return (
    <GlobalWhyChooseSection
      title="Why Choose Acharya Kartike Guru Ji?"
      subtitle="Your Trusted Vedic Priest for Kaal Sarp Dosh Puja"
      description="Acharya Kartike Guru Ji is one of the most respected pandits in Trimbakeshwar, known for his accurate rituals and deep Vedic knowledge."
      items={whyChoose}
      bottomImageSrc="/kaal.png"
      bottomImageAlt="Acharya Kartike Guru Ji"
      textColor="#9B251E"
      accentColor="#FBDCAB"
    />
  )
}
