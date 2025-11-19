import { IntroSection as GlobalIntroSection } from "@/components/pooja-sections"

export default function IntroSection() {
  return (
    <GlobalIntroSection
      imageSrc="/kaal.png"
      imageAlt="Vedic Astrology"
      title="What is Kaal Sarp Dosh?"
      descriptions={[
        "Kaal Sarp Dosh occurs in a horoscope when all seven planets are positioned between Rahu (north node) and Ketu (south node). According to Vedic astrology, this dosh signifies past-life karmic imbalance and may affect your present life's success, luck, relationships, and personal growth.",
        "People experiencing continuous setbacks, unexplained worries, unstable mind, or sudden failures often have this dosh in their kundli."
      ]}
      cardTitle="Why Trimbakeshwar?"
      cardContent="Trimbakeshwar is the only place where Kaal Sarp Dosh Puja, Narayan Nagbali, and Tripindi Shraddha are performed as per ancient Puranic rituals. Performing the puja here ensures maximum effectiveness and spiritual upliftment."
      imagePosition="left"
      textColor="#9B251E"
      accentColor="#FBDCAB"
    />
  )
}
