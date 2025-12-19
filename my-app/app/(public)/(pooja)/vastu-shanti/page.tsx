"use client";

import {
  HomeSection,
  MarqueeSection,
  IntroSection,
  EffectsSection,
  TypesSection,
  WhyChooseSection,
  TestimonialsSection,
} from "@/components/pooja-sections";
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
  Home,
  Sun,
} from "lucide-react";
import type {
  Effect,
  WhyChooseItem,
  Testimonial,
  TypeItem,
} from "@/components/pooja-sections";

const mantras = [
  "ॐ वास्तुपुरुषाय नमः",
  "ॐ अनुग्रहाय नमः",
  "ॐ शांतिः शांतिः शांतिः",
  "ॐ नमः शिवाय",
];

const effects: Effect[] = [
  {
    icon: Home,
    title: "Household Harmony",
    items: [
      "Removes architectural & directional defects",
      "Creates a protective shield for the home",
      "Ensures peace among family members",
    ],
  },
  {
    icon: TrendingUp,
    title: "Financial Prosperity",
    items: [
      "Attracts wealth and new opportunities",
      "Removes obstacles in business growth",
      "Brings stability to household finances",
    ],
  },
  {
    icon: Heart,
    title: "Health & Well-being",
    items: [
      "Reduces stress and mental tension",
      "Promotes better sleep and recovery",
      "Enhances positive vibrations in living spaces",
    ],
  },
  {
    icon: Shield,
    title: "Protection from Evil Eye",
    items: [
      "Neutralizes 'Buri Nazar' or negative energies",
      "Protects against sudden losses or accidents",
      "Purifies the environment of the property",
    ],
  },
];

const types: TypeItem[] = [
  {
    name: "Griha Pravesh Vastu Shanti",
    description:
      "Performed before moving into a new house to seek divine blessings.",
    image: "/vastu-1.png",
    icon: "🏠",
  },
  {
    name: "Office & Shop Vastu Puja",
    description:
      "For success in business, customer attraction, and financial gains.",
    image: "/vastu-2.png",
    icon: "🏢",
  },
  {
    name: "Remedial Vastu Shanti",
    description:
      "Performed in existing properties to fix Vastu defects without demolition.",
    image: "/vastu-1.png",
    icon: "🛠️",
  },
  {
    name: "Land/Plot Puja",
    description:
      "Seeking permission from Bhumi Devi before starting construction.",
    image: "/vastu-2.png",
    icon: "🏗️",
  },
];

const whyChoose: WhyChooseItem[] = [
  {
    icon: Award,
    title: "20+ Years Experience",
    description: "Specialist in Vastu Shastra and traditional Vedic remedies.",
  },
  {
    icon: CheckCircle2,
    title: "Authorized Trimbakeshwar Pandit",
    description: "Certified priest following authentic Puranic rituals.",
  },
  {
    icon: BookOpen,
    title: "Vastu Analysis",
    description: "Guru Ji provides site analysis before performing the puja.",
  },
  {
    icon: Sparkles,
    title: "Complete Ritual Samagri",
    description: "Everything from Havan to Kalash Sthapana is managed by us.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description:
      "Thousands of families have experienced peace after Guru Ji's Vastu Puja.",
  },
  {
    icon: Clock,
    title: "Booking Convenience",
    description: "Easy online/offline booking with complete guidance.",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Rajesh K.",
    location: "Mumbai",
    rating: 5,
    text: "We performed Vastu Shanti before moving into our new flat. The atmosphere feels so light and positive now. Thank you Guru Ji.",
  },
  {
    name: "Meera D.",
    location: "Nashik",
    rating: 5,
    text: "My showroom was facing losses. After Guru Ji's Office Vastu Puja, business has improved significantly.",
  },
  {
    name: "Vikram S.",
    location: "Thane",
    rating: 5,
    text: "The way Guru Ji explained the Vastu defects and fixed them through mantras was amazing. Highly recommend him.",
  },
];

export default function VastuShanti() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBDCAB" }}>
      <HomeSection
        badgeText="VASTU SHANTI PUJA – TRIMBAKESHWAR"
        title="Vastu Shanti Puja in Trimbakeshwar"
        descriptions={[
          "Vastu Shanti Puja is a sacred Vedic ritual performed to appease the Vastu Purush (the deity of the house) and seek blessings for a positive, healthy, and prosperous living environment. It is essential when moving into a new home, renovating, or if the inhabitants are facing continuous health, financial, or relationship issues.",
          "At Trimbakeshwar Jyotirlinga, Vastu Shanti is performed with deep spiritual Vedic chants, making it highly effective for purifying old or new properties.",
          "Acharya Kartike Guru Ji is an expert in Vastu rituals, ensuring that every corner of your property is filled with positive energy and divine protection.",
        ]}
        imageSrc="/vastu.png"
        imageAlt="Vastu Shanti Puja in Trimbakeshwar"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />

      <MarqueeSection
        items={mantras}
        icon={Flame}
        subtitle="Vastu Purusha Mantra"
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
      />

      <IntroSection
        imageSrc="/vastu-shanti.jpg"
        imageAlt="Vastu Shanti Ritual"
        title="What is Vastu Shanti Puja?"
        descriptions={[
          "Vastu Shastra is the ancient Indian science of architecture. Vastu Shanti Puja is performed to balance the five elements—Earth, Water, Fire, Air, and Space—within a building.",
          "This puja is highly recommended if your property has directional defects (Vastu Dosh) or if it was built without following Vastu principles.",
        ]}
        cardTitle="Why Perform Vastu Shanti?"
        cardContent="It removes negative energies, brings prosperity, ensuring mental peace, and protects the family from health hazards. Performing this puja at Trimbakeshwar, where Lord Shiva resides as the Lord of Elements, provides unparalleled spiritual results and long-term stability for the house owners."
        imagePosition="right"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />

      <EffectsSection
        title="Benefits of Vastu Shanti Puja"
        subtitle="Experience a transformation in your living or working space with these benefits:"
        effects={effects}
        footerCardText="Vastu Shanti restores the natural flow of energy, bringing harmony and success to the inhabitants."
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />

      <TypesSection
        title="Our Vastu Services"
        subtitle="Specialized rituals for every property type"
        types={types}
        footerText="Each ritual is performed strictly according to Vedic traditions and your property's specific needs."
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
        accentColor="#FBDCAB"
      />

      <WhyChooseSection
        title="Why Choose Acharya Kartike Guru Ji?"
        subtitle="Expert Guidance for Your Property's Peace"
        items={whyChoose}
        bottomImageSrc="/vastu-shanti.jpg"
        bottomImageAlt="Acharya Kartike Guru Ji performing Vastu Shanti"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />

      <TestimonialsSection
        title="Devotees' Success Stories"
        subtitle="How Vastu Shanti changed the lives of these families"
        testimonials={testimonials}
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
        accentColor="#FBDCAB"
      />
    </div>
  );
}
