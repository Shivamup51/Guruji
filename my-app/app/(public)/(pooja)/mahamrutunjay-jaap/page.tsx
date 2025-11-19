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
  Shield,
  Sparkles,
  Award,
  CheckCircle2,
  Flame,
  Clock,
  Users,
  BookOpen,
  Star,
} from "lucide-react"
import type { Effect, WhyChooseItem, Testimonial, TypeItem } from "@/components/pooja-sections"

const mantras = [
  "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय माऽमृतात्॥",
  "ॐ नमः शिवाय",
  "महामृत्युंजय महामंत्रो नमः शिवाय",
  "त्र्यंबकं यजामहे",
]

const effects: Effect[] = [
  {
    icon: Heart,
    title: "Health & Healing",
    items: [
      "Reduces the impact of chronic diseases",
      "Helps in recovery during major illness",
      "Strengthens mental and emotional stability",
    ],
  },
  {
    icon: Shield,
    title: "Protection from Negativity",
    items: [
      "Removes unseen obstacles",
      "Protects against evil influences & negative energies",
      "Gives courage, peace, and inner strength",
    ],
  },
  {
    icon: Sparkles,
    title: "Spiritual Growth",
    items: [
      "Enhances meditation",
      "Brings divine Shiva blessings",
      "Cleanses bad karma",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Life Stability",
    items: [
      "Reduces fear & anxiety",
      "Prevents sudden accidents or misfortunes",
      "Improves overall well-being and harmony",
    ],
  },
]

const types: TypeItem[] = [
  {
    name: "108 Times Jaap",
    description: "Ideal for mental peace, clarity, and daily protection.",
    image: "/mahamrutunjay-jaap.jpg",
    icon: "🕉️",
  },
  {
    name: "11000 Times Jaap (Ekadash Jaap)",
    description: "Recommended for health recovery, stress relief, and spiritual cleansing.",
    image: "/mahamrutunjay-jaap.jpg",
    icon: "🔥",
  },
  {
    name: "1.25 Lakh Jaap (125,000 Chants)",
    description: "A powerful anushthan performed for severe problems and long-term healing.",
    image: "/mahamrutunjay-jaap.jpg",
    icon: "⚡",
  },
  {
    name: "Mahamrityunjay Havan",
    description: "Performed after the jaap to purify the environment and offer gratitude to Lord Shiva.",
    image: "/mahamrutunjay-jaap.jpg",
    icon: "🕯️",
  },
]

const whyChoose: WhyChooseItem[] = [
  {
    icon: Award,
    title: "20+ Years of Experience",
    description: "Performed thousands of Maha Mrityunjay Jaap & Anushthan successfully.",
  },
  {
    icon: CheckCircle2,
    title: "Certified Trimbakeshwar Pandit",
    description: "Authorized by the Trimbakeshwar Temple Trust.",
  },
  {
    icon: BookOpen,
    title: "Complete Vedic Procedure",
    description: "Jaap is performed with purity, discipline, and correct pronunciation.",
  },
  {
    icon: Users,
    title: "Personalized Rituals",
    description: "Guru Ji suggests the correct jaap count based on your horoscope and medical/emotional condition.",
  },
  {
    icon: Sparkles,
    title: "Clean, Peaceful Pooja Setup",
    description: "Sacred environment with all arrangements done by the temple team.",
  },
  {
    icon: Clock,
    title: "Online / Offline Booking Available",
    description: "Devotees can join in person or connect through video for blessings.",
  },
]

const testimonials: Testimonial[] = [
  {
    name: "Neha S.",
    location: "Delhi",
    rating: 5,
    text: "We booked Mahamrityunjay Jaap for my father's health. Within weeks, his recovery improved greatly. Blessed to have Guru Ji's guidance.",
  },
  {
    name: "Vikas T.",
    location: "Hyderabad",
    rating: 5,
    text: "The purity and discipline of the jaap at Trimbakeshwar were beyond expectations. Felt deep peace and healing.",
  },
  {
    name: "Devika M.",
    location: "Ahmedabad",
    rating: 5,
    text: "Guru Ji is very humble and knowledgeable. The jaap helped me overcome anxiety and fear. Highly recommended!",
  },
]

export default function MahamrutunjayJaap() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBDCAB" }}>
      <HomeSection
        badgeText="MAHAMRITYUNJAY JAAP – TRIMBAKESHWAR"
        title="Mahamrityunjay Jaap in Trimbakeshwar"
        descriptions={[
          "The Mahamrityunjay Mantra, also known as the \"Mrityu Conqueror Mantra\", is one of the most powerful Vedic mantras dedicated to Lord Shiva. This sacred chanting protects devotees from health problems, accidents, negativity, sudden obstacles, and life-threatening situations.",
          "Performed at Trimbakeshwar Jyotirlinga, this jaap removes fear, brings healing, enhances longevity, and fills life with peace and divine blessings.",
          "Acharya Kartike Guru Ji is a highly respected and experienced pandit who performs Mahamrityunjay Jaap, Anushthan, and Havan with complete Vedic rituals.",
        ]}
        imageSrc="/mahamrutunjay-jaap.jpg"
        imageAlt="Mahamrityunjay Jaap in Trimbakeshwar"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <MarqueeSection
        items={mantras}
        icon={Flame}
        subtitle="Maha Mrityunjaya Mantra"
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
      />
      
      <IntroSection
        imageSrc="/mahamrutunjay-jaap.jpg"
        imageAlt="Mahamrityunjay Jaap"
        title="What is Mahamrityunjay Jaap?"
        descriptions={[
          "The Mahamrityunjay Mantra is a divine healing mantra revealed to Rishi Markandeya. It is chanted to seek protection from Lord Shiva against untimely death, diseases, mental stress, and negative energies.",
          "This mantra is especially recommended for:",
        ]}
        cardTitle="Who Should Perform This Jaap?"
        cardContent="People suffering from major illnesses, those facing mental tension or depression, individuals dealing with continuous accidents or obstacles, and anyone seeking peace, strength, and long life. Performing the jaap in Trimbakeshwar, one of the holiest Jyotirlingas, amplifies the spiritual benefits many times."
        imagePosition="right"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <EffectsSection
        title="Effects – Benefits of Mahamrityunjay Jaap"
        subtitle="Regular or professional chanting of this mantra brings powerful healing and spiritual protection:"
        effects={effects}
        footerCardText="Each jaap is performed following strict Vedic rituals by Acharya Kartike Guru Ji in Trimbakeshwar."
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <TypesSection
        title="Types of Mahamrityunjay Jaap"
        subtitle="Short & Effective"
        types={types}
        footerText="Each jaap is performed following strict Vedic rituals by Acharya Kartike Guru Ji in Trimbakeshwar."
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
        accentColor="#FBDCAB"
      />
      
      <WhyChooseSection
        title="Why Choose Acharya Kartike Guru Ji?"
        subtitle="Your Trusted Priest for Mahamrityunjay Jaap"
        items={whyChoose}
        bottomImageSrc="/mahamrutunjay-jaap.jpg"
        bottomImageAlt="Acharya Kartike Guru Ji performing Mahamrityunjay Jaap"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <TestimonialsSection
        title="Testimonials – Devotees' Experiences"
        subtitle="Real experiences from devotees who have benefited from Mahamrityunjay Jaap"
        testimonials={testimonials}
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
        accentColor="#FBDCAB"
      />
    </div>
  )
}

