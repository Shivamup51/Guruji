"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Marquee from "@/components/marquee"
import { 
  Award, 
  CheckCircle2, 
  BookOpen, 
  UserCheck, 
  TrendingUp, 
  Clock,
  Phone,
  MessageCircle,
  Sparkles,
  Heart,
  Flame,
  Shield,
  HeartHandshake,
  DollarSign,
  Calendar,
  Brain,
  AlertCircle,
  Zap,
  ArrowRight,
  Star,
  Moon,
  Home,
  Users,
  ScrollText,
  Activity
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    name: "Kaal Sarp Dosh Puja",
    description: "Remove obstacles caused by Kaal Sarp Dosh and restore peace in life",
    icon: Shield,
    href: "/kaal-sarp-dosh-niwaran",
    color: "#9B251E"
  },
  {
    name: "Narayan Nagbali Puja",
    description: "Powerful 3-day ritual to remove Pitru Dosh and ancestral karmic issues",
    icon: Star,
    href: "/narayan-nag-bali",
    color: "#9B251E"
  },
  {
    name: "Tripindi Shraddh",
    description: "Pacify ancestors and remove Pitru Dosh for family harmony",
    icon: HeartHandshake,
    href: "/tripindi",
    color: "#9B251E"
  },
  {
    name: "Pitra Dosh Nivaran Puja",
    description: "Remove ancestral curses and bring blessings from ancestors",
    icon: Users,
    href: "/pitar-dosh-shanti",
    color: "#9B251E"
  },
  {
    name: "Mahamrityunjay Jaap",
    description: "Powerful healing mantra for health, protection, and longevity",
    icon: Activity,
    href: "/mahamrutunjay-jaap",
    color: "#9B251E"
  },
  {
    name: "Grah Shanti Puja",
    description: "Balance planetary energies and reduce negative planetary effects",
    icon: Moon,
    href: "/grah-shanti",
    color: "#9B251E"
  },
  {
    name: "Yog Shanti Puja",
    description: "Neutralize harmful yogs and restore balance in your kundli",
    icon: ScrollText,
    href: "/yog-shanti",
    color: "#9B251E"
  },
  {
    name: "Nakshatra Shanti",
    description: "Calm your birth star and remove negative Nakshatra effects",
    icon: Star,
    href: "/nakshatra-shanti",
    color: "#9B251E"
  },
  {
    name: "Vastu Shanti Puja",
    description: "Remove negative energies from your home, office, or property",
    icon: Home,
    href: "/vastu-shanti",
    color: "#9B251E"
  },
]

const whyTrust = [
  {
    name: "20+ Years of Expertise",
    description: "Performed thousands of successful pujas with proven results. With decades of experience, Guru Ji has helped countless devotees overcome life obstacles through authentic Vedic rituals.",
    icon: "🏆",
    image: "/vastu-1.png",
  },
  {
    name: "Certified Trimbakeshwar Pandit",
    description: "Authorized priest recognized for authentic Vedic knowledge. Certified by Trimbakeshwar Temple Trust, ensuring all rituals follow traditional and sacred procedures.",
    icon: "✅",
    image: "/vastu-1.png",
  },
  {
    name: "Accurate Vidhi",
    description: "Every puja is done as per Puranic and Vedic traditions. Complete adherence to ancient scriptures ensures maximum spiritual benefits and divine blessings.",
    icon: "📖",
    image: "/vastu-1.png",
  },
  {
    name: "Personal Guidance & Kundli Analysis",
    description: "Guru Ji provides detailed explanations and remedies for each devotee. Every puja is personalized based on your horoscope and specific needs.",
    icon: "👤",
    image: "/vastu-1.png",
  },
  {
    name: "Affordable & Transparent Pricing",
    description: "No hidden charges, complete support throughout your visit. Transparent pricing with affordable packages for all devotees.",
    icon: "💰",
    image: "/vastu-1.png",
  },
  {
    name: "Online & Offline Puja Options",
    description: "Attend in person or join via video call. Flexible options to participate in pujas from anywhere in the world.",
    icon: "📱",
    image: "/vastu-1.png",
  },
]

const mantras = [
  "ॐ नमः शिवाय",
  "ॐ त्र्यंबकेश्वराय नमः",
  "ॐ नारायणाय नमः",
  "ॐ पितृदेवताभ्यो नमः",
  "ॐ ग्रहाणां शान्ति-कारणाय नमः",
  "ॐ नवग्रह देवताभ्यो नमः",
]

const reliefAreas = [
  { text: "Ancestral karma", icon: HeartHandshake },
  { text: "Planetary doshas", icon: Shield },
  { text: "Financial struggles", icon: DollarSign },
  { text: "Marriage delays", icon: Heart },
  { text: "Health issues", icon: HeartHandshake },
  { text: "Mental stress", icon: Brain },
  { text: "Sudden obstacles", icon: AlertCircle },
  { text: "Negative energies", icon: Zap },
]

interface WhyTrustItem {
  name: string
  description: string
  icon: string
  image: string
}

function WhyTrustCarousel({ whyTrust }: { whyTrust: WhyTrustItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % whyTrust.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [whyTrust.length])

  const currentItem = whyTrust[currentIndex]

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
      {/* Content on the left */}
      <div className="space-y-6">
        <div className="transition-all duration-500 ease-in-out">
          <div className="flex items-center gap-3 mb-4">
            {currentItem.icon && <span className="text-4xl">{currentItem.icon}</span>}
            <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: "#FBDCAB" }}>
              {currentItem.name}
            </h3>
          </div>
          <p className="text-lg sm:text-xl leading-relaxed" style={{ color: "#FBDCAB", opacity: 0.95 }}>
            {currentItem.description}
          </p>
        </div>
        
        {/* Indicator dots */}
        <div className="flex gap-2 justify-center lg:justify-start pt-4">
          {whyTrust.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8"
                  : "opacity-50 hover:opacity-75"
              }`}
              style={{
                backgroundColor: "#FBDCAB",
                opacity: index === currentIndex ? 1 : 0.5
              }}
              aria-label={`Go to ${item.name}`}
            />
          ))}
        </div>
      </div>

      {/* Image on the right */}
      <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src={currentItem.image}
          alt={currentItem.name}
          fill
          className="object-cover transition-opacity duration-500"
          priority={currentIndex === 0}
        />
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBDCAB" }}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FBDCAB" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: "#9B251E", color: "#FBDCAB" }}>
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">ABOUT ACHARYA KARTIKE GURU JI</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "#9B251E" }}>
                About Acharya Kartike Guru Ji
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed" style={{ color: "#9B251E", opacity: 0.9 }}>
                Your Trusted Vedic Priest for Kaal Sarp Dosh, Narayan Nagbali, Pitru Dosh, Tripindi, and Shanti Pujas
              </p>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#9B251E", opacity: 0.85 }}>
                Acharya Kartike Guru Ji is one of the most respected and experienced Vedic priests in Trimbakeshwar Jyotirlinga, specializing in all major Shanti Pujas including Kaal Sarp Dosh Puja, Narayan Nagbali, Tripindi Shraddh, Mahamrityunjay Jaap, Pitra Dosh Shanti, Vastu Shanti, Grah Shanti, Nakshatra Shanti, and Yog Shanti.
              </p>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#9B251E", opacity: 0.85 }}>
                With over 20+ years of experience, Guru Ji has guided thousands of devotees from India and across the world, helping them overcome life obstacles through ancient and authentic Vedic rituals.
              </p>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#9B251E", opacity: 0.85 }}>
                He is known for his humility, deep spiritual knowledge, accurate mantra chanting, and pure devotion toward Lord Shiva.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6"
                  style={{ backgroundColor: "#9B251E", color: "#FBDCAB" }}
                  onClick={() => window.location.href = "/contact-us"}
                >
                  Contact Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2"
                  style={{ borderColor: "#9B251E", color: "#9B251E" }}
                  onClick={() => window.open("https://wa.me/917888012103", "_blank")}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/pandit-ji.jpg"
                alt="Acharya Kartike Guru Ji"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-8" style={{ backgroundColor: "#9B251E" }}>
        <div className="overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]">
            {mantras.map((mantra, index) => (
              <div key={index} className="flex items-center gap-8 px-8">
                <span className="text-2xl sm:text-3xl font-semibold whitespace-nowrap" style={{ color: "#FBDCAB" }}>
                  {mantra}
                </span>
                <Flame className="h-6 w-6" style={{ color: "#FBDCAB" }} />
              </div>
            ))}
          </Marquee>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm font-medium" style={{ color: "#FBDCAB", opacity: 0.9 }}>
            Sacred Mantras for Divine Blessings
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#9B251E" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#FBDCAB", color: "#9B251E" }}>
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">OUR MISSION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#FBDCAB" }}>
              Who We Are
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-4" style={{ color: "#FBDCAB", opacity: 0.9 }}>
              We provide authentic, affordable, and result-oriented puja services at Trimbakeshwar.
            </p>
            <p className="text-base max-w-3xl mx-auto mb-8" style={{ color: "#FBDCAB", opacity: 0.85 }}>
              Our mission is to help devotees find relief from:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {reliefAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <Card key={index} className="border-2 transition-all hover:scale-105 hover:shadow-xl" style={{ borderColor: "#FBDCAB", backgroundColor: "#FBDCAB" }}>
                  <CardContent className="pt-6 pb-6">
                    <div className="flex flex-col items-center gap-3">
                      <div className="p-3 rounded-full" style={{ backgroundColor: "#9B251E" }}>
                        <Icon className="h-6 w-6" style={{ color: "#FBDCAB" }} />
                      </div>
                      <p className="text-center font-semibold text-base" style={{ color: "#9B251E" }}>
                        {area.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <div className="mt-12 text-center">
            <Card className="inline-block border-2 px-8 py-6" style={{ borderColor: "#FBDCAB", backgroundColor: "#FBDCAB" }}>
              <p className="text-lg font-semibold" style={{ color: "#9B251E" }}>
                Every puja is performed with strict adherence to Vedic scriptures, Shastras, and Trimbakeshwar temple traditions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FBDCAB" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#9B251E", color: "#FBDCAB" }}>
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">OUR SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#9B251E" }}>
              What We Offer
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-4" style={{ color: "#9B251E", opacity: 0.9 }}>
              Acharya Kartike Guru Ji specializes in authentic Vedic rituals performed with devotion and expertise
            </p>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "#9B251E", opacity: 0.85 }}>
              Each puja is performed with complete Vedic procedures, proper mantras, and pure samagri at Trimbakeshwar Jyotirlinga
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link key={index} href={service.href}>
                  <Card className="border-2 transition-all hover:scale-105 hover:shadow-2xl h-full group cursor-pointer" style={{ borderColor: "#9B251E", backgroundColor: "#fff" }}>
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-4 rounded-xl" style={{ backgroundColor: "#9B251E" }}>
                          <Icon className="h-6 w-6" style={{ color: "#FBDCAB" }} />
                        </div>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" style={{ color: "#9B251E", opacity: 0.6 }} />
                      </div>
                      <CardTitle className="text-xl mb-2 group-hover:underline" style={{ color: "#9B251E" }}>
                        {service.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base leading-relaxed mb-4" style={{ color: "#9B251E", opacity: 0.8 }}>
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "#9B251E" }}>
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-2 text-center" style={{ borderColor: "#9B251E", backgroundColor: "#fff" }}>
              <CardContent className="pt-6 pb-6">
                <div className="text-3xl font-bold mb-2" style={{ color: "#9B251E" }}>20+</div>
                <p className="text-sm font-medium" style={{ color: "#9B251E", opacity: 0.8 }}>
                  Years of Experience
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 text-center" style={{ borderColor: "#9B251E", backgroundColor: "#fff" }}>
              <CardContent className="pt-6 pb-6">
                <div className="text-3xl font-bold mb-2" style={{ color: "#9B251E" }}>1000+</div>
                <p className="text-sm font-medium" style={{ color: "#9B251E", opacity: 0.8 }}>
                  Successful Pujas
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 text-center" style={{ borderColor: "#9B251E", backgroundColor: "#fff" }}>
              <CardContent className="pt-6 pb-6">
                <div className="text-3xl font-bold mb-2" style={{ color: "#9B251E" }}>11+</div>
                <p className="text-sm font-medium" style={{ color: "#9B251E", opacity: 0.8 }}>
                  Types of Pujas
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="inline-block border-2 px-8 py-6" style={{ borderColor: "#9B251E", backgroundColor: "#fff" }}>
              <p className="text-lg font-semibold" style={{ color: "#9B251E" }}>
                We perform all rituals with dedication, proper mantras, and complete samagri.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Devotees Trust Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#9B251E" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#FBDCAB", color: "#9B251E" }}>
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">WHY CHOOSE US</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#FBDCAB" }}>
              Why Devotees Trust Guru Ji
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: "#FBDCAB", opacity: 0.9 }}>
              Experience the difference of authentic Vedic rituals performed with devotion and expertise
            </p>
          </div>
          
          <WhyTrustCarousel whyTrust={whyTrust} />
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FBDCAB" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#9B251E", color: "#FBDCAB" }}>
            <Heart className="h-4 w-4" />
            <span className="text-sm font-medium">Our Purpose</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "#9B251E" }}>
            Our Mission
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed mb-6" style={{ color: "#9B251E", opacity: 0.9 }}>
            We aim to bring peace, protection, prosperity, and spiritual healing to every devotee who seeks blessings at Trimbakeshwar.
          </p>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#9B251E", opacity: 0.85 }}>
            Our goal is to make every ritual meaningful, powerful, and life-transforming.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              style={{ backgroundColor: "#9B251E", color: "#FBDCAB" }}
              onClick={() => window.location.href = "/contact-us"}
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2"
              style={{ borderColor: "#9B251E", color: "#9B251E" }}
              onClick={() => window.open("tel:+917888012103")}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call: 7888012103
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

