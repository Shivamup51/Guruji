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
  Heart,
  TrendingUp,
  Users,
  Shield,
  Flame,
  Award,
  CheckCircle2,
  BookOpen,
  Clock,
  Sparkles,
} from "lucide-react"
import type { Effect, WhyChooseItem, Testimonial, TypeItem } from "@/components/pooja-sections"

const mantras = [
  "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे",
  "ॐ ग्रहाणां शान्ति-कारणाय नमः",
  "ॐ नवग्रह देवताभ्यो नमः",
  "ॐ नमः शिवाय",
]

const effects: Effect[] = [
  {
    icon: Heart,
    title: "Health Benefits",
    items: [
      "Relief from chronic illnesses",
      "Protection from sudden accidents",
      "Mental peace and emotional balance",
    ],
  },
  {
    icon: TrendingUp,
    title: "Career & Financial Growth",
    items: [
      "Removes obstacles in job",
      "Stabilizes business",
      "Attracts opportunities and prosperity",
    ],
  },
  {
    icon: Users,
    title: "Family & Relationship Harmony",
    items: [
      "Reduces conflicts",
      "Helps in delayed marriage",
      "Brings stability and positivity",
    ],
  },
  {
    icon: Shield,
    title: "Protection from Malefic Planets",
    items: [
      "Especially helpful for: Shani Sade Sati / Dhaiyya, Rahu & Ketu Dosh, Manglik Dosh, Sun/Moon affliction, Guru Chandal Dosh",
    ],
  },
]

const types: TypeItem[] = [
  {
    name: "Navgrah Shanti Puja",
    description: "For overall planetary balance and life stability.",
    image: "/grah-shanti.jpg",
    icon: "🪐",
  },
  {
    name: "Shani Shanti Puja",
    description: "Recommended during Sade Sati, Dhaiyya, or Saturn malefic effects.",
    image: "/grah-shanti.jpg",
    icon: "🪐",
  },
  {
    name: "Rahu–Ketu Shanti Puja",
    description: "For removing confusion, fear, delays, and sudden losses.",
    image: "/grah-shanti.jpg",
    icon: "🌙",
  },
  {
    name: "Mangal Dosh Shanti",
    description: "For marriage problems, anger issues, and relationship imbalance.",
    image: "/grah-shanti.jpg",
    icon: "🔥",
  },
  {
    name: "Guru Chandal Dosh Puja",
    description: "For improving career, education, and stability.",
    image: "/grah-shanti.jpg",
    icon: "⭐",
  },
  {
    name: "Surya & Chandra Shanti Puja",
    description: "For confidence, emotional balance, and mental peace.",
    image: "/grah-shanti.jpg",
    icon: "☀️",
  },
]

const whyChoose: WhyChooseItem[] = [
  {
    icon: Award,
    title: "20+ Years Experience",
    description: "Expert in all Vedic planetary remedies and Shanti pujas.",
  },
  {
    icon: CheckCircle2,
    title: "Authorized Trimbakeshwar Pandit",
    description: "Certified and trusted by thousands of devotees.",
  },
  {
    icon: BookOpen,
    title: "Accurate Rituals",
    description: "Performed with proper mantras, samagri, and Vedic procedures.",
  },
  {
    icon: Sparkles,
    title: "Personal Horoscope Analysis",
    description: "Guru Ji checks kundli before recommending the right Shanti Puja.",
  },
  {
    icon: TrendingUp,
    title: "Affordable Ritual Packages",
    description: "Transparent cost with no hidden charges.",
  },
  {
    icon: Clock,
    title: "Online/Offline Puja Booking",
    description: "Join from anywhere with video darshan option.",
  },
]

const testimonials: Testimonial[] = [
  {
    name: "Suman P.",
    location: "Nagpur",
    rating: 5,
    text: "Grah Shanti Puja brought immediate relief to my financial issues. Guru Ji's guidance changed everything.",
  },
  {
    name: "Amit V.",
    location: "Jaipur",
    rating: 5,
    text: "My Saturn problems reduced drastically after the Shani Shanti Puja. Very grateful!",
  },
  {
    name: "Kiran S.",
    location: "Pune",
    rating: 5,
    text: "I was facing delays in marriage. Guru Ji performed Mangal Dosh Puja, and things improved quickly.",
  },
]

export default function GrahShanti() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBDCAB" }}>
      <HomeSection
        badgeText="GRAH SHANTI PUJA – TRIMBAKESHWAR"
        title="Grah Shanti Puja in Trimbakeshwar"
        descriptions={[
          "Grah Shanti Puja is a powerful Vedic ritual performed to reduce the negative effects of planets and bring peace, prosperity, and harmony into one's life. When planets like Saturn, Rahu, Ketu, Mars, or Sun are malefic in a person's kundli, they create obstacles, delays, financial losses, health issues, or emotional disturbance.",
          "At Trimbakeshwar Jyotirlinga, Grah Shanti Puja is performed with high spiritual energy, making it extremely effective.",
          "Acharya Kartike Guru Ji is a respected and experienced Vedic priest who performs Navgrah Shanti Puja, Rahu–Ketu Shanti, Shani Shanti, and Manglik Dosh Nivaran with complete Vedic vidhi.",
        ]}
        imageSrc="/grah-shanti.jpg"
        imageAlt="Grah Shanti Puja in Trimbakeshwar"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <MarqueeSection
        items={mantras}
        icon={Flame}
        subtitle="Navgrah Shanti Mantra"
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
      />
      
      <IntroSection
        imageSrc="/grah-shanti.jpg"
        imageAlt="Grah Shanti Puja"
        title="What is Grah Shanti Puja?"
        descriptions={[
          "According to Vedic astrology, nine planets (Navgrahas) influence every aspect of human life—health, career, relationships, finance, and overall destiny.",
          "When any graha becomes weak or negatively placed, it leads to:",
        ]}
        cardTitle="Common Effects of Malefic Planets"
        cardContent="Continuous obstacles, delays in marriage, job or business issues, bad health, stress, fear, or mental imbalance, and sudden accidents or losses. Grah Shanti Puja helps balance these planetary energies and reduces their harmful effects. Performing it in Trimbakeshwar, a sacred Jyotirlinga blessed by Lord Shiva, multiplies the benefits."
        imagePosition="right"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <EffectsSection
        title="Effects – Benefits of Grah Shanti Puja"
        subtitle="This puja brings major relief in life by calming negative planetary energies."
        effects={effects}
        footerCardText="Grah Shanti Puja restores balance and brings blessings, peace, and happiness into life."
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <TypesSection
        title="Types of Grah Shanti Puja"
        subtitle="Short & Easy Listing"
        types={types}
        footerText="Each puja is performed as per the individual's horoscope by Acharya Kartike Guru Ji."
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
        accentColor="#FBDCAB"
      />
      
      <WhyChooseSection
        title="Why Choose Acharya Kartike Guru Ji?"
        subtitle="Your Trusted Vedic Priest for Grah Shanti Puja"
        items={whyChoose}
        bottomImageSrc="/grah-shanti.jpg"
        bottomImageAlt="Acharya Kartike Guru Ji performing Grah Shanti Puja"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <TestimonialsSection
        title="Testimonials – Devotees' Experiences"
        subtitle="Real experiences from devotees who have benefited from Grah Shanti Puja"
        testimonials={testimonials}
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
        accentColor="#FBDCAB"
      />
    </div>
  )
}
