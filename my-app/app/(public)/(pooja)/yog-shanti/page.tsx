"use client"

import {
  HomeSection,
  MarqueeSection,
  IntroSection,
  EffectsSection,
  TypesSection,
  WhyChooseSection,
  TestimonialsSection,
} from "@/components/pooja-sections"
import {
  TrendingUp,
  Users,
  Heart,
  Shield,
  Sparkles,
  Flame,
  Award,
  CheckCircle2,
  BookOpen,
  Clock,
  UserCheck,
} from "lucide-react"
import type { Effect, WhyChooseItem, Testimonial, TypeItem } from "@/components/pooja-sections"

const mantras = [
  "ॐ सर्व दोष शान्ति-कराय नमः",
  "ॐ नमो भगवते रुद्राय",
  "ॐ नमः शिवाय",
  "शिवाय योग-निवारणाय नमः",
]

const effects: Effect[] = [
  {
    icon: TrendingUp,
    title: "Career & Financial Growth",
    items: [
      "Removes delays in promotion",
      "Reduces business problems",
      "Brings opportunities and stability",
    ],
  },
  {
    icon: Users,
    title: "Family & Marriage Stability",
    items: [
      "Resolves marriage delays",
      "Removes conflicts and misunderstandings",
      "Enhances harmony in relationships",
    ],
  },
  {
    icon: Heart,
    title: "Health & Emotional Peace",
    items: [
      "Reduces stress, anxiety, and mental burden",
      "Protects from sudden illnesses",
      "Improves overall well-being",
    ],
  },
  {
    icon: Shield,
    title: "Protection from Planetary Yogs",
    items: [
      "Neutralizes harmful Grahan, Angarak, Chandal, Shapit, and Pitra yogs",
      "Offers divine protection against negative planetary effects",
    ],
  },
  {
    icon: Sparkles,
    title: "Spiritual Growth",
    items: [
      "Strengthens inner peace",
      "Helps in meditation & mental clarity",
      "Removes karmic obstacles",
    ],
  },
]

const types: TypeItem[] = [
  {
    name: "General Yog Shanti Puja",
    description: "For overall dosha relief and planetary balance.",
    image: "/yog-shanti.jpg",
    icon: "🕉️",
  },
  {
    name: "Grahan Yog Shanti",
    description: "For problems caused by Sun/Moon affliction with Rahu/Ketu.",
    image: "/yog-shanti.jpg",
    icon: "🌙",
  },
  {
    name: "Angarak Yog Shanti",
    description: "Performed for Mars + Rahu combination leading to aggression & conflicts.",
    image: "/yog-shanti.jpg",
    icon: "🔥",
  },
  {
    name: "Pitra Yog / Pitra Dosh Shanti",
    description: "For ancestral blessings and removal of obstacles.",
    image: "/yog-shanti.jpg",
    icon: "🙏",
  },
  {
    name: "Guru Chandal Yog Shanti",
    description: "For improving education, wisdom, and career progress.",
    image: "/yog-shanti.jpg",
    icon: "⭐",
  },
  {
    name: "Kaal Dosh Shanti",
    description: "For repeated failures, delays, and bad luck.",
    image: "/yog-shanti.jpg",
    icon: "⏰",
  },
]

const whyChoose: WhyChooseItem[] = [
  {
    icon: Award,
    title: "20+ Years of Expertise",
    description: "Specialist in Yog, Dosh, and Grah Shanti Pujas.",
  },
  {
    icon: CheckCircle2,
    title: "Certified Trimbakeshwar Pandit",
    description: "Trusted by thousands of devotees across India.",
  },
  {
    icon: BookOpen,
    title: "Accurate Rituals & Pronunciation",
    description: "Puja performed strictly as per Vedic scriptures.",
  },
  {
    icon: UserCheck,
    title: "Detailed Kundli Analysis",
    description: "You get personalized puja based on your exact planetary positions.",
  },
  {
    icon: Sparkles,
    title: "Complete Support",
    description: "From booking to puja completion, Guru Ji assists at every step.",
  },
  {
    icon: Clock,
    title: "Online / Offline Options Available",
    description: "Join via video call or attend the puja in person.",
  },
]

const testimonials: Testimonial[] = [
  {
    name: "Rajat S.",
    location: "Indore",
    rating: 5,
    text: "After Yog Shanti Puja, my career started improving. The constant obstacles stopped completely.",
  },
  {
    name: "Meena P.",
    location: "Nashik",
    rating: 5,
    text: "Guru Ji explains everything clearly. The puja brought peace and stability to our family.",
  },
  {
    name: "Harsh T.",
    location: "Bangalore",
    rating: 5,
    text: "I did Angarak Yog Shanti, and my anger & mental stress significantly reduced.",
  },
]

export default function YogShanti() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBDCAB" }}>
      <HomeSection
        badgeText="YOG SHANTI PUJA – TRIMBAKESHWAR"
        title="Yog Shanti Puja in Trimbakeshwar"
        descriptions={[
          "Yog Shanti Puja is a powerful Vedic remedy performed to reduce the negative effects of harmful yogs formed in the kundli, such as Grahan Yog, Pitra Yog, Angarak Yog, Chandal Yog, Shapit Yog, and more. These yogs can create obstacles in career, health, marriage, finances, and mental peace.",
          "Trimbakeshwar Jyotirlinga is one of the most spiritually charged places for performing Yog Shanti rituals.",
          "Acharya Kartike Guru Ji, a highly experienced priest, performs the puja with accurate mantras and shastri vidhi, ensuring strong and long-lasting results.",
        ]}
        imageSrc="/yog-shanti.jpg"
        imageAlt="Yog Shanti Puja in Trimbakeshwar"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <MarqueeSection
        items={mantras}
        icon={Flame}
        subtitle="Yog Shanti Mantras"
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
      />
      
      <IntroSection
        imageSrc="/yog-shanti.jpg"
        imageAlt="Yog Shanti Puja"
        title="What is Yog Shanti Puja?"
        descriptions={[
          "In Vedic astrology, certain planetary combinations create malefic yogs in the birth chart. These yogs disturb life through:",
        ]}
        cardTitle="Common Negative Yogs (Doshas) in Kundli"
        cardContent="Yog Shanti Puja is performed to resolve: Grahan Yog (Rahu/Ketu with Sun/Moon), Pitra Yog / Pitra Dosh (ancestral imbalance), Angarak Yog (Mars & Rahu), Guru Chandal Yog (Guru + Rahu), Shapit Yog (Saturn & Rahu), Kaal Yog / Kaal Dosh (weak or afflicted planets), Daridra Yog (financial instability), Kemdrum Yog (Moon alone without benefic planets), and Vish Yog (Saturn + Moon). Each yog brings specific issues, and Acharya Kartike Guru Ji analyzes your kundli to perform the right ritual. Yog Shanti Puja helps neutralize these negative planetary combinations and brings peace, protection, luck, and growth. Performed at Trimbakeshwar, this puja becomes highly effective due to the divine energy of Lord Shiva."
        imagePosition="right"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <EffectsSection
        title="Effects – Benefits of Yog Shanti Puja"
        subtitle="This powerful puja brings relief from negative yogs and restores balance in life"
        effects={effects}
        footerCardText="Each puja is performed under the guidance of Acharya Kartike Guru Ji as per Vedic shastra."
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <TypesSection
        title="Types of Yog Shanti Puja"
        subtitle="Short & Clear"
        types={types}
        footerText="Each puja is performed under the guidance of Acharya Kartike Guru Ji as per Vedic shastra."
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
        accentColor="#FBDCAB"
      />
      
      <WhyChooseSection
        title="Why Choose Acharya Kartike Guru Ji?"
        subtitle="Your Trusted Specialist for Yog Shanti Puja"
        items={whyChoose}
        bottomImageSrc="/yog-shanti.jpg"
        bottomImageAlt="Acharya Kartike Guru Ji performing Yog Shanti Puja"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <TestimonialsSection
        title="Testimonials – Devotees' Experiences"
        subtitle="Real experiences from devotees who have benefited from Yog Shanti Puja"
        testimonials={testimonials}
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
        accentColor="#FBDCAB"
      />
    </div>
  )
}
