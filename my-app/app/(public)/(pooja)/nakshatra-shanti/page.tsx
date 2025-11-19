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
  Brain,
  TrendingUp,
  Users,
  Heart,
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
  "ॐ नक्षत्रदेवताभ्यो नमः",
  "ॐ शान्तिः शान्तिः शान्तिः",
  "ॐ नमः शिवाय",
  "ॐ आदित्याय नमः",
]

const effects: Effect[] = [
  {
    icon: Brain,
    title: "Mental & Emotional Stability",
    items: [
      "Reduces stress, fear, and overthinking",
      "Improves clarity, confidence, and peace",
    ],
  },
  {
    icon: TrendingUp,
    title: "Career & Education Growth",
    items: [
      "Removes delays in job or promotion",
      "Enhances focus, creativity, and success",
    ],
  },
  {
    icon: Users,
    title: "Marriage & Family Harmony",
    items: [
      "Helps in delayed marriage",
      "Removes misunderstandings and conflicts",
      "Brings stability in family life",
    ],
  },
  {
    icon: Heart,
    title: "Health & Protection",
    items: [
      "Reduces negative planetary effects",
      "Protects from sudden problems or accidents",
      "Brings divine blessings for long-term well-being",
    ],
  },
  {
    icon: Sparkles,
    title: "Spiritual Upliftment",
    items: [
      "Increases positivity",
      "Enhances inner strength and meditation power",
    ],
  },
]

const types: TypeItem[] = [
  {
    name: "Ashwini, Bharani, Krittika, Rohini, Mrigashira",
    description: "First five Nakshatras - Each has its own deity and specific mantras for shanti puja.",
    image: "/nakshatra-shanti.jpg",
    icon: "⭐",
  },
  {
    name: "Ardra, Punarvasu, Pushya, Ashlesha, Magha",
    description: "Next five Nakshatras - Performed with accurate Vedic rituals for each birth star.",
    image: "/nakshatra-shanti.jpg",
    icon: "⭐",
  },
  {
    name: "Purva Phalguni, Uttara Phalguni, Hasta, Chitra, Swati",
    description: "Middle Nakshatras - Each requires specific puja procedures based on ruling deity.",
    image: "/nakshatra-shanti.jpg",
    icon: "⭐",
  },
  {
    name: "Vishakha, Anuradha, Jyeshtha, Mula, Purvashadha",
    description: "Later Nakshatras - Personalized puja performed after detailed kundli analysis.",
    image: "/nakshatra-shanti.jpg",
    icon: "⭐",
  },
  {
    name: "Uttarashadha, Shravana, Dhanishta, Shatabhisha",
    description: "Advanced Nakshatras - Special rituals for maximum relief and positive results.",
    image: "/nakshatra-shanti.jpg",
    icon: "⭐",
  },
  {
    name: "Purva Bhadrapada, Uttara Bhadrapada, Revati",
    description: "Final Nakshatras - Complete shanti puja with all Vedic procedures and mantras.",
    image: "/nakshatra-shanti.jpg",
    icon: "⭐",
  },
]

const whyChoose: WhyChooseItem[] = [
  {
    icon: Award,
    title: "Expert in Nakshatra, Grah & Yog Shanti",
    description: "20+ years of experience in Vedic rituals and kundli-based remedies.",
  },
  {
    icon: CheckCircle2,
    title: "Certified Trimbakeshwar Pandit",
    description: "Trusted by thousands of devotees nationwide.",
  },
  {
    icon: BookOpen,
    title: "Accurate Vedic Rituals",
    description: "Performed with correct mantras and pure samagri.",
  },
  {
    icon: UserCheck,
    title: "Personal Kundli Analysis",
    description: "Guru Ji checks the birth chart before performing the shanti puja.",
  },
  {
    icon: Sparkles,
    title: "Positive & Powerful Results",
    description: "Many devotees have experienced immediate relief.",
  },
  {
    icon: Clock,
    title: "Online / Offline Puja Booking",
    description: "Join via video call or attend in person.",
  },
]

const testimonials: Testimonial[] = [
  {
    name: "Jyoti M.",
    location: "Chandigarh",
    rating: 5,
    text: "I faced constant fear and emotional imbalance. After the Nakshatra Shanti Puja, I felt calm and stable.",
  },
  {
    name: "Kishore G.",
    location: "Bangalore",
    rating: 5,
    text: "Guru Ji performed the puja for my birth star Rohini. My career growth improved a lot!",
  },
  {
    name: "Anjali P.",
    location: "Mumbai",
    rating: 5,
    text: "This puja brought harmony in my family life. Very grateful to Guru Ji.",
  },
]

export default function NakshatraShanti() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBDCAB" }}>
      <HomeSection
        badgeText="NAKSHATRA SHANTI PUJA – TRIMBAKESHWAR"
        title="Nakshatra Shanti Puja in Trimbakeshwar"
        descriptions={[
          "Every person is born under a specific Nakshatra (birth star), and this Nakshatra deeply influences their personality, career, relationships, emotions, luck, and destiny. When a Nakshatra becomes weak, afflicted, or negatively placed due to planetary positions, it results in obstacles, fear, health problems, emotional imbalance, and delays in major life events.",
          "Nakshatra Shanti Puja is performed to calm the ruling deity of the birth star and remove negative effects.",
          "At Trimbakeshwar Jyotirlinga, this puja becomes highly powerful due to the divine blessings of Lord Shiva. Acharya Kartike Guru Ji is an experienced Trimbakeshwar Pandit who performs this puja with accurate Vedic mantras and rituals for maximum relief and positive results.",
        ]}
        imageSrc="/nakshatra-shanti.jpg"
        imageAlt="Nakshatra Shanti Puja in Trimbakeshwar"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <MarqueeSection
        items={mantras}
        icon={Flame}
        subtitle="Powerful Nakshatra Shanti Mantras"
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
      />
      
      <IntroSection
        imageSrc="/nakshatra-shanti.jpg"
        imageAlt="Nakshatra Shanti Puja"
        title="What is Nakshatra Shanti?"
        descriptions={[
          "Nakshatras are the 27 powerful star constellations that shape a person's mental, emotional, physical, and spiritual nature.",
          "If any Nakshatra is afflicted due to malefic planets, inauspicious placements, or karmic imbalance, it may cause:",
        ]}
        cardTitle="Effects of Afflicted Nakshatra"
        cardContent="Sudden obstacles, unwanted fears or anxiety, delayed marriage, problems in career or education, emotional instability, constant confusion, health issues, negative thoughts, and lack of focus & inner peace. Nakshatra Shanti Puja helps balance these energies and brings harmony, stability, and protection. Each Nakshatra has its own deity and mantra, and Acharya Kartike Guru Ji performs the puja accordingly."
        imagePosition="right"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <EffectsSection
        title="Effects – Benefits of Nakshatra Shanti Puja"
        subtitle="This powerful puja brings relief from negative Nakshatra effects and restores balance"
        effects={effects}
        footerCardText="Each Nakshatra has its own deity and mantra, and Acharya Kartike Guru Ji performs the puja accordingly."
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <TypesSection
        title="Types Based on Nakshatra"
        subtitle="Nakshatra Shanti Puja is performed based on the devotee's birth star. The 27 Nakshatras include:"
        types={types}
        footerText="Each Nakshatra has its own deity and mantra, and Acharya Kartike Guru Ji performs the puja accordingly."
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
        accentColor="#FBDCAB"
      />
      
      <WhyChooseSection
        title="Why Choose Acharya Kartike Guru Ji?"
        subtitle="Your Trusted Specialist for Nakshatra Shanti Puja"
        items={whyChoose}
        bottomImageSrc="/nakshatra-shanti.jpg"
        bottomImageAlt="Acharya Kartike Guru Ji performing Nakshatra Shanti Puja"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <TestimonialsSection
        title="Testimonials – Devotees' Experiences"
        subtitle="Real experiences from devotees who have benefited from Nakshatra Shanti Puja"
        testimonials={testimonials}
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
        accentColor="#FBDCAB"
      />
    </div>
  )
}

