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
  Users,
  TrendingUp,
  Heart,
  Shield,
  Sparkles,
  Flame,
  Award,
  CheckCircle2,
  BookOpen,
  Clock,
  UserCheck,
  MapPin,
} from "lucide-react";
import type {
  Effect,
  WhyChooseItem,
  Testimonial,
  TypeItem,
} from "@/components/pooja-sections";

const mantras = [
  "ॐ पितृदेवताभ्यो नमः",
  "ॐ नमो भगवते वासुदेवाय",
  "ॐ त्र्यंबकेश्वराय नमः",
];

const effects: Effect[] = [
  {
    icon: Users,
    title: "Pitra Dosh Removal",
    items: ["Removes ancestral curses and karmic blockages"],
  },
  {
    icon: Users,
    title: "Family Harmony",
    items: ["Reduces conflicts and ensures peace at home"],
  },
  {
    icon: TrendingUp,
    title: "Career & Financial Improvement",
    items: ["Obstacles get removed and stability increases"],
  },
  {
    icon: Heart,
    title: "Health & Emotional Relief",
    items: ["Reduces chronic problems and mental stress"],
  },
  {
    icon: Shield,
    title: "Spiritual Protection",
    items: ["Brings blessings from ancestors and divine guidance"],
  },
];

const types: TypeItem[] = [
  {
    name: "Tripindi Shraddh for Last Three Generations",
    description:
      "Performed for ancestors of the last three generations to remove Pitra Dosh and provide peace to wandering souls.",
    image: "/pind.png",
    icon: "🙏",
  },
  {
    name: "Tripindi for Unnatural Death",
    description:
      "Especially recommended when death occurred unnaturally (accident, suicide, sudden death).",
    image: "/pind.png",
    icon: "🕉️",
  },
  {
    name: "Tripindi for Improper Shraddh",
    description:
      "When ancestors didn't receive proper shraddh rituals, this ritual brings peace to departed souls.",
    image: "/pind.png",
    icon: "⚡",
  },
  {
    name: "Tripindi for Repeated Obstacles",
    description:
      "When there are repeated life obstacles, Tripindi Shraddh unlocks blessings for the entire family.",
    image: "/pind.png",
    icon: "🌟",
  },
];

const whyChoose: WhyChooseItem[] = [
  {
    icon: MapPin,
    title: "Ancient Vedic Rituals Followed",
    description:
      "One of the few authentic places for Tripindi Shraddh with powerful spiritual energy of Jyotirlinga.",
  },
  {
    icon: Award,
    title: "20+ Years of Experience",
    description:
      "Expert in ancestor rituals and karmic shanti with accurate Puranic method.",
  },
  {
    icon: CheckCircle2,
    title: "Authorized Trimbakeshwar Pandit",
    description:
      "Conducted only by trained, authorized pandits at Trimbakeshwar Jyotirlinga.",
  },
  {
    icon: BookOpen,
    title: "Accurate Puranic Method",
    description:
      "Performed with complete Vedic mantras and accurate procedures for maximum relief.",
  },
  {
    icon: UserCheck,
    title: "Personalized Guidance",
    description:
      "Guru Ji provides personalized guidance for your family's specific needs.",
  },
  {
    icon: Clock,
    title: "Complete Arrangements",
    description:
      "Affordable puja packages with complete arrangements for out-station devotees.",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Pooja S.",
    location: "Jaipur",
    rating: 5,
    text: "After Tripindi, our family issues reduced drastically. Grateful to Guru Ji.",
  },
  {
    name: "Rahul M.",
    location: "Nashik",
    rating: 5,
    text: "We saw improvements in finances and peace at home after the puja.",
  },
  {
    name: "Priya K.",
    location: "Surat",
    rating: 5,
    text: "Tripindi Shraddh brought peace to our ancestors and our family. Highly recommend Guru Ji's services.",
  },
];

export default function Tripindi() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBDCAB" }}>
      <HomeSection
        badgeText="TRIPINDI SHRADDH – TRIMBAKESHWAR"
        title="Tripindi Shraddh in Trimbakeshwar"
        descriptions={[
          "Tripindi Shraddh is a powerful Vedic ritual performed to pacify ancestors whose souls are unsatisfied due to improper rituals, early death, or unfulfilled desires. When ancestral energies are disturbed, it results in Pitra Dosh and repeated obstacles in the family.",
          "Trimbakeshwar Jyotirlinga is one of the only places in India where Tripindi Shraddh is performed as per ancient Puranic traditions.",
          "Acharya Kartike Guru Ji performs this ritual with complete Vedic mantras and accurate procedures for maximum relief.",
        ]}
        imageSrc="/tripindi.png"
        imageAlt="Tripindi Shraddh in Trimbakeshwar"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />

      <MarqueeSection
        items={mantras}
        icon={Flame}
        subtitle="Tripindi Shraddh Mantras"
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
      />

      <IntroSection
        imageSrc="/tripindi.jpg"
        imageAlt="Tripindi Shraddh"
        title="What is Tripindi Shraddh?"
        descriptions={[
          "Tripindi Shraddh is performed for ancestors of the last three generations to:",
        ]}
        cardTitle="When is Tripindi Shraddh Recommended?"
        cardContent="Tripindi is especially recommended when: there is no male member to perform shraddh, death occurred unnaturally (accident, suicide, sudden death), ancestors didn't receive proper shraddh rituals, or there are repeated life obstacles. This ritual brings peace to departed souls and unlocks blessings for the entire family. It helps remove Pitra Dosh, provide peace to wandering or unsatisfied souls, clear karmic blockages, and restore family harmony."
        imagePosition="right"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />

      <EffectsSection
        title="Benefits of Tripindi Shraddh"
        subtitle="This powerful ritual brings relief from ancestral doshas and restores family harmony"
        effects={effects}
        footerCardText="Tripindi Shraddh brings peace to departed souls and unlocks blessings for the entire family."
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />

      <TypesSection
        title="Types of Tripindi Shraddh"
        subtitle="Performed for different situations and needs"
        types={types}
        footerText="Each ritual is performed with complete Vedic mantras and accurate procedures by Acharya Kartike Guru Ji."
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
        accentColor="#FBDCAB"
      />

      <WhyChooseSection
        title="Why Choose Acharya Kartike Guru Ji?"
        subtitle="Your Trusted Expert for Tripindi Shraddh at Trimbakeshwar"
        items={whyChoose}
        bottomImageSrc="/tripindi.jpg"
        bottomImageAlt="Acharya Kartike Guru Ji performing Tripindi Shraddh"
        textColor="#9B251E"
        accentColor="#FBDCAB"
      />

      <TestimonialsSection
        title="Testimonials – Devotees' Experiences"
        subtitle="Real experiences from devotees who have benefited from Tripindi Shraddh"
        testimonials={testimonials}
        backgroundColor="#9B251E"
        textColor="#FBDCAB"
        accentColor="#FBDCAB"
      />
    </div>
  );
}
