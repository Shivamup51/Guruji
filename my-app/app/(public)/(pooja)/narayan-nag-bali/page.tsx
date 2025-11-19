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
  Shield,
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
  "ॐ नारायणाय नमः",
  "ॐ नागदेवताभ्यो नमः",
  "ॐ त्र्यंबकेश्वराय नमः",
  "ॐ नमः शिवाय",
]

const effects: Effect[] = [
  {
    icon: Users,
    title: "Removal of Pitru Dosh",
    items: [
      "Brings peace to ancestors and removes karmic obstacles",
    ],
  },
  {
    icon: TrendingUp,
    title: "Financial & Business Growth",
    items: [
      "Stability returns and wealth flow improves",
    ],
  },
  {
    icon: Users,
    title: "Family Peace",
    items: [
      "Resolves frequent disputes and misunderstandings",
    ],
  },
  {
    icon: Shield,
    title: "Protection from Negative Energies",
    items: [
      "Powerful shield against sudden problems & misfortune",
    ],
  },
  {
    icon: TrendingUp,
    title: "Career & Marriage Improvement",
    items: [
      "Delays are removed, and progress becomes smoother",
    ],
  },
  {
    icon: Sparkles,
    title: "Spiritual Healing",
    items: [
      "Brings emotional calmness and reduces hidden fears",
    ],
  },
]

const types: TypeItem[] = [
  {
    name: "Narayan Bali",
    description: "Performed to release the soul of ancestors, remove Pitru Dosh, and resolve unfinished karmas.",
    image: "/narayan-nag-bali.jpg",
    icon: "🙏",
  },
  {
    name: "Nag Bali",
    description: "Performed to get rid of doshas created by killing snakes and to neutralize negative planetary effects of Rahu–Ketu.",
    image: "/narayan-nag-bali.jpg",
    icon: "🐍",
  },
  {
    name: "Pitru Dosh Nivaran Puja",
    description: "Special ritual to remove ancestral doshas and bring peace to departed souls.",
    image: "/narayan-nag-bali.jpg",
    icon: "🕉️",
  },
  {
    name: "Kaal Sarp Dosh Nivaran",
    description: "Powerful remedy for Kaal Sarp Dosh and related planetary afflictions.",
    image: "/narayan-nag-bali.jpg",
    icon: "⚡",
  },
  {
    name: "Tripindi Shraddha",
    description: "Ancestral ritual performed to honor and pacify departed ancestors.",
    image: "/narayan-nag-bali.jpg",
    icon: "🕯️",
  },
]

const whyChoose: WhyChooseItem[] = [
  {
    icon: Award,
    title: "Specialized in Narayan Nagbali & Pitru Dosh Puja",
    description: "Expert in performing these complex and powerful rituals.",
  },
  {
    icon: Award,
    title: "20+ Years of Vedic Expertise",
    description: "Extensive experience in ancestral and karmic dosha shanti.",
  },
  {
    icon: CheckCircle2,
    title: "Authorized Trimbakeshwar Pandit",
    description: "Certified and trusted by thousands of devotees.",
  },
  {
    icon: BookOpen,
    title: "Accurate Performance of the 3-Day Ritual",
    description: "Complete ritual performed with authentic Vedic methods and proper mantras.",
  },
  {
    icon: TrendingUp,
    title: "Affordable & Clear Pricing",
    description: "Transparent cost with no hidden charges.",
  },
  {
    icon: UserCheck,
    title: "Complete Guidance for Stay, Food, and Preparation",
    description: "Guru Ji assists with all arrangements for the 3-day ritual.",
  },
]

const testimonials: Testimonial[] = [
  {
    name: "Anant K.",
    location: "Bengaluru",
    rating: 5,
    text: "My business completely changed after the Narayan Nagbali Puja. Most powerful ritual.",
  },
  {
    name: "Meera S.",
    location: "Delhi",
    rating: 5,
    text: "We performed this for Pitru Dosh. Our family problems reduced drastically.",
  },
  {
    name: "Sagar N.",
    location: "Nashik",
    rating: 5,
    text: "Guru Ji's puja vidhi is very accurate. Felt deep spiritual relief.",
  },
]

export default function NarayanNagBali() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBDCAB" }}>
      <HomeSection
        badgeText="NARAYAN NAGBALI PUJA – TRIMBAKESHWAR"
        title="Narayan Nagbali Puja in Trimbakeshwar"
        descriptions={[
          "Narayan Nagbali is one of the most powerful and important rituals performed only at Trimbakeshwar Jyotirlinga. This puja is specially done to remove Pitru Dosh, Kaal Sarp negative effects, accidental death dosha, and ancestral karmic issues.",
          "Acharya Kartike Guru Ji is a highly experienced priest who performs the complete 3-day ritual with authentic Vedic methods.",
        ]}
        imageSrc="/narayan-nag-bali.jpg"
        imageAlt="Narayan Nagbali Puja in Trimbakeshwar"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <MarqueeSection
        items={mantras}
        icon={Flame}
        subtitle="Narayan Nagbali Mantras"
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
      />
      
      <IntroSection
        imageSrc="/narayan-nag-bali.jpg"
        imageAlt="Narayan Nagbali Puja"
        title="What is Narayan Nagbali Puja?"
        descriptions={[
          "Narayan Nagbali Puja is a combination of two rituals:",
        ]}
        cardTitle="Narayan Bali & Nag Bali"
        cardContent="Narayan Bali is performed to release the soul of ancestors, remove Pitru Dosh, and resolve unfinished karmas. Nag Bali is performed to get rid of doshas created by killing snakes (intentionally or unintentionally) and to neutralize negative planetary effects of Rahu–Ketu. These rituals help devotees overcome: sudden financial losses, family disputes, delayed marriage, health problems, business failures, recurring obstacles, emotional stress, and unseen negative energies. It is the only puja that directly addresses karmic and ancestral blockages."
        imagePosition="right"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <EffectsSection
        title="Effects – Benefits of Narayan Nagbali Puja"
        subtitle="This powerful 3-day ritual brings relief from karmic and ancestral doshas"
        effects={effects}
        footerCardText="Narayan Nagbali Puja is the only puja that directly addresses karmic and ancestral blockages."
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <TypesSection
        title="Types / Related Rituals at Trimbakeshwar"
        subtitle="Powerful rituals performed by Acharya Kartike Guru Ji"
        types={types}
        footerText="Each ritual is performed with authentic Vedic methods and complete 3-day procedures."
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
        accentColor="#FBDCAB"
      />
      
      <WhyChooseSection
        title="Why Choose Acharya Kartike Guru Ji?"
        subtitle="Your Trusted Expert for Narayan Nagbali Puja"
        items={whyChoose}
        bottomImageSrc="/narayan-nag-bali.jpg"
        bottomImageAlt="Acharya Kartike Guru Ji performing Narayan Nagbali Puja"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />
      
      <TestimonialsSection
        title="Testimonials – Devotees' Experiences"
        subtitle="Real experiences from devotees who have benefited from Narayan Nagbali Puja"
        testimonials={testimonials}
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
        accentColor="#FBDCAB"
      />
    </div>
  )
}
