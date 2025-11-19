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
  Users,
  TrendingUp,
  Heart,
  Sparkles,
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
  "ॐ पितृदेवताभ्यो नमः",
  "ॐ नमः शिवाय",
  "ॐ नारायणाय नमः",
]

const effects: Effect[] = [
  {
    icon: Users,
    title: "Removal of Ancestral Blockages",
    items: [
      "Brings peace to ancestors and removes hidden karmic burdens",
    ],
  },
  {
    icon: Users,
    title: "Improved Family Happiness",
    items: [
      "Reduces disputes and brings unity",
    ],
  },
  {
    icon: TrendingUp,
    title: "Financial Stability",
    items: [
      "Removes repeated obstacles and losses",
    ],
  },
  {
    icon: Heart,
    title: "Marriage & Relationship Relief",
    items: [
      "Ideal for delayed marriage and relationship instability",
    ],
  },
  {
    icon: Heart,
    title: "Health & Emotional Peace",
    items: [
      "Helps overcome chronic health issues and mental stress",
    ],
  },
  {
    icon: Sparkles,
    title: "Divine Blessings",
    items: [
      "Increases fortune, luck, and overall positivity",
    ],
  },
]

const types: TypeItem[] = [
  {
    name: "Pitra Dosh Nivaran Puja",
    description: "Primary ritual to remove Pitra Dosh and bring peace to ancestors.",
    image: "/pitra-dosh-shanti.jpg",
    icon: "🙏",
  },
  {
    name: "Narayan Bali",
    description: "Powerful ritual to release unsatisfied ancestral souls and remove karmic blockages.",
    image: "/pitra-dosh-shanti.jpg",
    icon: "🕉️",
  },
  {
    name: "Tripindi Shraddh",
    description: "Performed for ancestors of last three generations to provide peace to wandering souls.",
    image: "/pitra-dosh-shanti.jpg",
    icon: "⚡",
  },
  {
    name: "Nandi Shraddh",
    description: "Special shraddh ritual performed to honor and pacify departed ancestors.",
    image: "/pitra-dosh-shanti.jpg",
    icon: "🌟",
  },
  {
    name: "Tarpan & Pind Daan",
    description: "Ancestral offerings to satisfy departed souls and remove Pitra Dosh.",
    image: "/pitra-dosh-shanti.jpg",
    icon: "🕯️",
  },
]

const whyChoose: WhyChooseItem[] = [
  {
    icon: Award,
    title: "20+ Years of Experience",
    description: "Expert in Trimbakeshwar ancestor rituals and karmic remedies.",
  },
  {
    icon: CheckCircle2,
    title: "Expert in Trimbakeshwar Ancestor Rituals",
    description: "Specialized knowledge in Pitra Dosh and ancestral karma remedies.",
  },
  {
    icon: BookOpen,
    title: "Accurate Vedic Mantras & Procedure",
    description: "Performed with complete Vedic rituals and proper mantras for maximum relief.",
  },
  {
    icon: TrendingUp,
    title: "Affordable Packages",
    description: "Complete arrangements with transparent pricing and no hidden charges.",
  },
  {
    icon: UserCheck,
    title: "Support for Out-Station Devotees",
    description: "Complete assistance with stay, timing, and samagri arrangements.",
  },
  {
    icon: Clock,
    title: "Personalized Guidance",
    description: "Guru Ji suggests the correct puja after checking your kundli and family history.",
  },
]

const testimonials: Testimonial[] = [
  {
    name: "Rekha T.",
    location: "Mumbai",
    rating: 5,
    text: "This puja completely changed our family environment. We felt immediate peace.",
  },
  {
    name: "Aadesh R.",
    location: "Bhopal",
    rating: 5,
    text: "Guru Ji is very knowledgeable. Our financial issues improved after the ritual.",
  },
  {
    name: "Sunita M.",
    location: "Indore",
    rating: 5,
    text: "Pitra Dosh was causing marriage delays in our family. After the puja, everything improved. Thank you Guru Ji!",
  },
]

export default function PitarDoshShanti() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBDCAB" }}>
      <HomeSection
        badgeText="PITRA DOSH SHANTI PUJA – TRIMBAKESHWAR"
        title="Pitra Dosh Shanti Puja in Trimbakeshwar"
        descriptions={[
          "Pitra Dosh is one of the most common and impactful doshas in Vedic astrology. It occurs due to unfulfilled desires of ancestors, karmic imbalances, or improper shraddh rituals. This dosh causes obstacles in family life, finances, marriage, health, and overall growth.",
          "Performing Pitra Dosh Shanti Puja at Trimbakeshwar Jyotirlinga is the most effective remedy because the divine energy of Lord Shiva helps release ancestral souls and remove karmic burdens.",
        ]}
        imageSrc="/pitra-dosh-shanti.jpg"
        imageAlt="Pitra Dosh Shanti Puja in Trimbakeshwar"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <MarqueeSection
        items={mantras}
        icon={Flame}
        subtitle="Pitra Dosh Shanti Mantras"
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
      />
      
      <IntroSection
        imageSrc="/pitra-dosh-shanti.jpg"
        imageAlt="Pitra Dosh Shanti Puja"
        title="What is Pitra Dosh?"
        descriptions={[
          "Pitra Dosh appears in a kundli due to:",
        ]}
        cardTitle="Effects of Pitra Dosh"
        cardContent="People suffering from Pitra Dosh often face: constant financial struggles, marriage delays, health issues in the family, recurring conflicts, sudden problems or losses, and mental stress and emotional imbalance. Pitra Dosh appears due to ancestors not receiving proper shraddh, sudden or unnatural deaths, family disputes & broken lineage, karmic debts from past lives, or curses or unresolved energies. Pitra Dosh Shanti Puja helps relieve these issues and brings blessings from ancestors."
        imagePosition="right"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <EffectsSection
        title="Effects – Benefits of Pitra Dosh Shanti"
        subtitle="This powerful puja brings relief from ancestral doshas and restores family harmony"
        effects={effects}
        footerCardText="Pitra Dosh Shanti Puja helps relieve ancestral issues and brings blessings from ancestors."
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <TypesSection
        title="Types of Pitra Dosh Puja"
        subtitle="Different rituals performed to remove Pitra Dosh"
        types={types}
        footerText="Acharya Kartike Guru Ji suggests the correct puja after checking your kundli and family history."
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
        accentColor="#FBDCAB"
      />
      
      <WhyChooseSection
        title="Why Choose Acharya Kartike Guru Ji?"
        subtitle="Your Trusted Specialist for Pitra Dosh Shanti Puja"
        items={whyChoose}
        bottomImageSrc="/pitra-dosh-shanti.jpg"
        bottomImageAlt="Acharya Kartike Guru Ji performing Pitra Dosh Shanti Puja"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <TestimonialsSection
        title="Testimonials – Devotees' Experiences"
        subtitle="Real experiences from devotees who have benefited from Pitra Dosh Shanti Puja"
        testimonials={testimonials}
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
        accentColor="#FBDCAB"
      />
    </div>
  )
}
