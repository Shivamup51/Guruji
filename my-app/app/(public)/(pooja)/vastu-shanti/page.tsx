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
  Sparkles,
  TrendingUp,
  Users,
  Heart,
  Shield,
  Flame,
  Award,
  CheckCircle2,
  BookOpen,
  Clock,
  UserCheck,
} from "lucide-react"
import type { Effect, WhyChooseItem, Testimonial, TypeItem } from "@/components/pooja-sections"

const mantras = [
  "ॐ वास्तुपुरुषाय नमः",
  "ॐ नमः शिवाय",
  "ॐ शान्तिः शान्तिः शान्तिः",
]

const effects: Effect[] = [
  {
    icon: Sparkles,
    title: "Positive Energy Activation",
    items: [
      "Removes negativity and blesses the property with divine vibrations",
    ],
  },
  {
    icon: TrendingUp,
    title: "Financial Stability",
    items: [
      "Improves business growth, wealth flow, and success",
    ],
  },
  {
    icon: Users,
    title: "Family Peace & Harmony",
    items: [
      "Reduces conflicts and enhances relationships",
    ],
  },
  {
    icon: Heart,
    title: "Health Improvements",
    items: [
      "Protects residents from stress, illness, and emotional issues",
    ],
  },
  {
    icon: Shield,
    title: "Protection from Vastu Dosha",
    items: [
      "Especially helpful for irregular plots, wrong room placements, or past negative events",
    ],
  },
]

const types: TypeItem[] = [
  {
    name: "Home Vastu Shanti",
    description: "For new or existing houses.",
    image: "/vastu-shanti.jpg",
    icon: "🏠",
  },
  {
    name: "Office / Shop Vastu Shanti",
    description: "For business growth and positivity.",
    image: "/vastu-shanti.jpg",
    icon: "🏢",
  },
  {
    name: "Factory / Industrial Vastu Shanti",
    description: "For productivity and protection.",
    image: "/vastu-shanti.jpg",
    icon: "🏭",
  },
  {
    name: "Land / Plot Shanti Puja",
    description: "Before construction or purchase.",
    image: "/vastu-shanti.jpg",
    icon: "🌳",
  },
]

const whyChoose: WhyChooseItem[] = [
  {
    icon: Award,
    title: "20+ Years of Experience",
    description: "Expert in Vastu, Grah, and Shanti rituals.",
  },
  {
    icon: CheckCircle2,
    title: "Certified Trimbakeshwar Pandit",
    description: "Trusted by thousands of devotees nationwide.",
  },
  {
    icon: BookOpen,
    title: "Accurate Vedic Rituals",
    description: "Performed with complete samagri and proper mantras.",
  },
  {
    icon: UserCheck,
    title: "Personalized Vastu Assessment & Remedies",
    description: "Guru Ji analyzes your property and suggests the right remedies.",
  },
  {
    icon: TrendingUp,
    title: "Affordable Puja Packages",
    description: "Transparent pricing with no hidden charges.",
  },
  {
    icon: Clock,
    title: "Online/Offline Puja Options Available",
    description: "Join via video call or attend the puja in person.",
  },
]

const testimonials: Testimonial[] = [
  {
    name: "Rajat P.",
    location: "Pune",
    rating: 5,
    text: "After Vastu Shanti, our home felt peaceful and positive instantly.",
  },
  {
    name: "Komal S.",
    location: "Mumbai",
    rating: 5,
    text: "Perfect puja performed by Guru Ji. We saw improvements in finances within weeks.",
  },
  {
    name: "Vikram D.",
    location: "Ahmedabad",
    rating: 5,
    text: "Guru Ji's Vastu Shanti Puja transformed our office space. Business started growing immediately after the ritual.",
  },
]

export default function VastuShanti() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBDCAB" }}>
      <HomeSection
        badgeText="VASTU SHANTI PUJA – TRIMBAKESHWAR"
        title="Vastu Shanti Puja in Trimbakeshwar"
        descriptions={[
          "Vastu Shanti Puja is performed to remove the negative energies, doshas, and imbalances present in a home, office, or property. When a space is built without following proper Vastu principles or has been affected by past events, it creates problems like financial loss, disputes, health issues, stress, and lack of peace.",
          "Trimbakeshwar Jyotirlinga is a sacred and powerful place for conducting Vastu Shanti Puja, ensuring long-term harmony and prosperity.",
          "Acharya Kartike Guru Ji performs the puja with complete Vedic rituals for homes, new properties, offices, factories, and commercial spaces.",
        ]}
        imageSrc="/vastu-shanti.jpg"
        imageAlt="Vastu Shanti Puja in Trimbakeshwar"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <MarqueeSection
        items={mantras}
        icon={Flame}
        subtitle="Vastu Shanti Mantras"
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
      />
      
      <IntroSection
        imageSrc="/vastu-shanti.jpg"
        imageAlt="Vastu Shanti Puja"
        title="What is Vastu Shanti Puja?"
        descriptions={[
          "According to Vastu Shastra, the five elements (Earth, Water, Fire, Air, Space) govern the energy flow of any building.",
          "When these elements are disturbed or misaligned, they cause:",
        ]}
        cardTitle="Effects of Vastu Dosha"
        cardContent="Stress & mental imbalance, financial instability, misunderstandings in family, health problems, delays in success, negative vibrations, and constant disputes or failures. Vastu Shanti Puja purifies the space, removes doshas, and attracts positivity, wealth, and well-being."
        imagePosition="right"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <EffectsSection
        title="Effects – Benefits of Vastu Shanti Puja"
        subtitle="This powerful puja brings positive energy and removes Vastu doshas from your property"
        effects={effects}
        footerCardText="Vastu Shanti Puja purifies the space, removes doshas, and attracts positivity, wealth, and well-being."
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <TypesSection
        title="Types of Vastu Shanti Puja"
        subtitle="Short & Clear"
        types={types}
        footerText="Each puja is performed with complete Vedic rituals by Acharya Kartike Guru Ji in Trimbakeshwar."
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
        accentColor="#FBDCAB"
      />
      
      <WhyChooseSection
        title="Why Choose Acharya Kartike Guru Ji?"
        subtitle="Your Trusted Expert for Vastu Shanti Puja"
        items={whyChoose}
        bottomImageSrc="/vastu-shanti.jpg"
        bottomImageAlt="Acharya Kartike Guru Ji performing Vastu Shanti Puja"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <TestimonialsSection
        title="Testimonials – Devotees' Experiences"
        subtitle="Real experiences from devotees who have benefited from Vastu Shanti Puja"
        testimonials={testimonials}
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
        accentColor="#FBDCAB"
      />
    </div>
  )
}
