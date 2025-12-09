import { HomeSection as GlobalHomeSection } from "@/components/pooja-sections";
import {
  kaalSarpTypes,
  effects,
  whyChoose,
  testimonials,
  mantras,
} from "./data";

export default function HomeSection() {
  return (
    <GlobalHomeSection
      badgeText="KAAL SARP DOSH NIWARAN POOJA – TRIMBAKESHWAR"
      title="Kaal Sarp Dosh Pooja in Trimbakeshwar"
      descriptions={[
        "Kaal Sarp Dosh is considered one of the most impactful astrological doshas formed when all planets fall between Rahu and Ketu. This condition can create obstacles, delays, financial instability, health issues, and emotional struggles.",
        "Trimbakeshwar, one of the holiest Jyotirlingas, is the most powerful place to perform Kaal Sarp Dosh Nivaran Pooja, bringing peace, stability, and divine blessings into one's life.",
        "Performed by Acharya Kartike Guru Ji, a highly experienced Vedic priest of Trimbakeshwar, this puja helps neutralize the negative effects of Rahu–Ketu and restores positivity.",
      ]}
      imageSrc="/kaal-dosh.png"
      imageAlt="Trimbakeshwar Temple"
      textColor="#9B251E"
      accentColor="#FBDCAB"
    />
  );
}
