import { TrendingUp, Heart, Users, Brain, Award, Shield, CheckCircle2, Phone } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export const mantras = [
  "ॐ रहवे नमः ।",
  "ॐ केतवे नमः ।",
  "ॐ नागेन्द्र हाराय त्रिलोचनाय",
  "ॐ नमः शिवाय",
  "ॐ कालसर्प दोष निवारणाय नमः"
]

export interface Effect {
  icon: LucideIcon
  title: string
  items: string[]
}

export const effects: Effect[] = [
  {
    icon: TrendingUp,
    title: "Career & Business Issues",
    items: [
      "Frequent job changes",
      "Unexplainable delays in promotion",
      "Business losses or unstable income"
    ]
  },
  {
    icon: Heart,
    title: "Financial Struggles",
    items: [
      "Sudden expenses",
      "Savings not growing",
      "Unexpected financial setbacks"
    ]
  },
  {
    icon: Users,
    title: "Relationship & Family Problems",
    items: [
      "Delayed marriage",
      "Disputes in family",
      "Lack of peace and harmony"
    ]
  },
  {
    icon: Heart,
    title: "Health-Related Issues",
    items: [
      "Stress, anxiety, fear",
      "Sleep problems",
      "Chronic or unexplained health issues"
    ]
  },
  {
    icon: Brain,
    title: "Mental & Spiritual Effects",
    items: [
      "Feeling stuck in life",
      "Low confidence",
      "Recurring nightmares",
      "Lack of clarity and direction"
    ]
  }
]

export const types = [
  "Anant Kaal Sarp Dosh",
  "Kulik Kaal Sarp Dosh",
  "Vasuki Kaal Sarp Dosh",
  "Shankhpal Kaal Sarp Dosh",
  "Padma Kaal Sarp Dosh",
  "Mahapadma Kaal Sarp Dosh",
  "Takshak Kaal Sarp Dosh",
  "Karkotak Kaal Sarp Dosh",
  "Shankhchoor Kaal Sarp Dosh",
  "Ghatak Kaal Sarp Dosh",
  "Vishdhar Kaal Sarp Dosh",
  "Sheshnag Kaal Sarp Dosh"
]

export interface KaalSarpType {
  name: string
  description: string
  image: string
  icon?: string
}

export const kaalSarpTypes: KaalSarpType[] = [
  {
    name: "Anant Kaal Sarp Dosh",
    description: "Causes delays in success, instability in career, and lack of focus.",
    image: "/kaal.png",
    icon: "🐍"
  },
  {
    name: "Kulik Kaal Sarp Dosh",
    description: "Brings financial struggles and frequent losses.",
    image: "/kaal.png",
    icon: "🐍"
  },
  {
    name: "Vasuki Kaal Sarp Dosh",
    description: "Creates health issues, anxiety, and emotional imbalance.",
    image: "/kaal.png",
    icon: "🐍"
  },
  {
    name: "Shankhpal Kaal Sarp Dosh",
    description: "Affects family relations and mental peace.",
    image: "/kaal.png",
    icon: "🐍"
  },
  {
    name: "Padma Kaal Sarp Dosh",
    description: "Causes obstacles in education and personal growth.",
    image: "/kaal.png",
    icon: "🐍"
  },
  {
    name: "Mahapadma Kaal Sarp Dosh",
    description: "Results in lack of opportunities and repeated failures.",
    image: "/kaal.png",
    icon: "🐍"
  },
  {
    name: "Takshak Kaal Sarp Dosh",
    description: "Leads to property disputes, legal issues, and misunderstandings.",
    image: "/kaal.png",
    icon: "🐍"
  },
  {
    name: "Karkotak Kaal Sarp Dosh",
    description: "Creates fear, depression, and psychological pressure.",
    image: "/kaal.png",
    icon: "🐍"
  },
  {
    name: "Shankhchoor Kaal Sarp Dosh",
    description: "Affects financial stability and career progress.",
    image: "/kaal.png",
    icon: "🐍"
  },
  {
    name: "Ghatak Kaal Sarp Dosh",
    description: "Causes legal complications and constant conflicts.",
    image: "/kaal.png",
    icon: "🐍"
  },
  {
    name: "Vishdhar Kaal Sarp Dosh",
    description: "Leads to marriage delays and relationship troubles.",
    image: "/kaal.png",
    icon: "🐍"
  },
  {
    name: "Sheshnag Kaal Sarp Dosh",
    description: "Creates sudden problems in life, lack of stability, and spiritual disconnect.",
    image: "/kaal.png",
    icon: "🐍"
  }
]

export interface WhyChooseItem {
  icon: LucideIcon
  title: string
  description: string
}

export const whyChoose: WhyChooseItem[] = [
  {
    icon: Award,
    title: "20+ Years of Experience",
    description: "Guru Ji has performed thousands of successful Kaal Sarp Dosh Nivaran Poojas."
  },
  {
    icon: Shield,
    title: "Authentic Trimbakeshwar Vidhi",
    description: "Pooja performed strictly as per ancient Puranic methods."
  },
  {
    icon: Award,
    title: "Certified & Highly Trained",
    description: "Guru Ji is authorized by the Trimbakeshwar Temple Trust."
  },
  {
    icon: Users,
    title: "Personal Guidance",
    description: "Complete assistance before, during, and after the puja, including kundli analysis."
  },
  {
    icon: CheckCircle2,
    title: "Affordable & Transparent",
    description: "No hidden charges. Complete pooja package available."
  },
  {
    icon: Phone,
    title: "Online & Offline Booking Available",
    description: "Hassle-free booking with full support for out-of-town devotees."
  }
]

export interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Rohan S.",
    location: "Mumbai",
    rating: 5,
    text: "After performing the Kaal Sarp Dosh Puja with Acharya Kartike Guru Ji, my career started improving within a month. Feeling grateful!"
  },
  {
    name: "Priya K.",
    location: "Pune",
    rating: 5,
    text: "Guru Ji guided us very well. The pooja was done with complete Vedic rituals. Highly recommended!"
  },
  {
    name: "Arvind P.",
    location: "Bengaluru",
    rating: 5,
    text: "I was facing continuous problems in my business. After the puja at Trimbakeshwar, things became stable. Thank you Guru Ji."
  }
]

