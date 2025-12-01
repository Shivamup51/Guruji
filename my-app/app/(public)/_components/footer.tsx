"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, ArrowRight } from "lucide-react"

const services = [
  { name: "Kaal Sarp Dosh Nivaran", href: "/kaal-sarp-dosh-niwaran" },
  { name: "Narayan Nagbali Puja", href: "/narayan-nag-bali" },
  { name: "Tripindi Shraddh", href: "/tripindi" },
  { name: "Pitra Dosh Nivaran", href: "/pitar-dosh-shanti" },
  { name: "Mahamrityunjay Jaap", href: "/mahamrutunjay-jaap" },
  { name: "Grah Shanti Puja", href: "/grah-shanti" },
  { name: "Yog Shanti Puja", href: "/yog-shanti" },
  { name: "Nakshatra Shanti", href: "/nakshatra-shanti" },
  { name: "Vastu Shanti Puja", href: "/vastu-shanti" },
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact-us" },
]

const socialMedia = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
]

export default function Footer() {
  return (
    <footer className="w-full" style={{ backgroundColor: "#9B251E" }}>
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg" style={{ backgroundColor: "#FBDCAB" }}>
                  <span className="text-2xl font-bold" style={{ color: "#9B251E" }}>शिव</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: "#FBDCAB" }}>
                    Pandit Kartike Guru Ji
                  </h3>
                  <p className="text-sm" style={{ color: "#FBDCAB", opacity: 0.9 }}>
                    त्र्यंबकेश्वर पंडित
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#FBDCAB", opacity: 0.9 }}>
                Authentic Vedic puja services at Trimbakeshwar Jyotirlinga. 20+ years of experience in performing traditional rituals with devotion and expertise.
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "#FBDCAB", opacity: 0.8 }}>
                त्र्यंबकेश्वर ज्योतिर्लिंग में प्रामाणिक वैदिक पूजा सेवाएं। 20+ वर्षों का अनुभव, भक्ति और विशेषज्ञता के साथ पारंपरिक अनुष्ठान करना।
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold" style={{ color: "#FBDCAB" }}>
                Quick Links
                <span className="block text-sm font-normal mt-1" style={{ color: "#FBDCAB", opacity: 0.9 }}>
                  त्वरित लिंक
                </span>
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm hover:opacity-80 transition-opacity flex items-center gap-2"
                      style={{ color: "#FBDCAB", opacity: 0.9 }}
                    >
                      <ArrowRight className="h-3 w-3" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold" style={{ color: "#FBDCAB" }}>
                Our Services
                <span className="block text-sm font-normal mt-1" style={{ color: "#FBDCAB", opacity: 0.9 }}>
                  हमारी सेवाएं
                </span>
              </h4>
              <ul className="space-y-2 max-h-64 overflow-y-auto">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-sm hover:opacity-80 transition-opacity flex items-center gap-2"
                      style={{ color: "#FBDCAB", opacity: 0.9 }}
                    >
                      <ArrowRight className="h-3 w-3" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & CTA */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold" style={{ color: "#FBDCAB" }}>
                Contact Us
                <span className="block text-sm font-normal mt-1" style={{ color: "#FBDCAB", opacity: 0.9 }}>
                  संपर्क करें
                </span>
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:+917888012103"
                  className="flex items-center gap-3 text-sm hover:opacity-80 transition-opacity"
                  style={{ color: "#FBDCAB", opacity: 0.9 }}
                >
                  <div className="p-2 rounded-lg" style={{ backgroundColor: "#FBDCAB" }}>
                    <Phone className="h-4 w-4" style={{ color: "#9B251E" }} />
                  </div>
                  <span>+91 7888012103</span>
                </a>
                <a
                  href="https://wa.me/917888012103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:opacity-80 transition-opacity"
                  style={{ color: "#FBDCAB", opacity: 0.9 }}
                >
                  <div className="p-2 rounded-lg" style={{ backgroundColor: "#FBDCAB" }}>
                    <MessageCircle className="h-4 w-4" style={{ color: "#9B251E" }} />
                  </div>
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-3 text-sm hover:opacity-80 transition-opacity"
                  style={{ color: "#FBDCAB", opacity: 0.9 }}
                >
                  <div className="p-2 rounded-lg" style={{ backgroundColor: "#FBDCAB" }}>
                    <Mail className="h-4 w-4" style={{ color: "#9B251E" }} />
                  </div>
                  <span>Email Us</span>
                </a>
                <div className="flex items-start gap-3 text-sm" style={{ color: "#FBDCAB", opacity: 0.9 }}>
                  <div className="p-2 rounded-lg" style={{ backgroundColor: "#FBDCAB" }}>
                    <MapPin className="h-4 w-4" style={{ color: "#9B251E" }} />
                  </div>
                  <div>
                    <p>Trimbakeshwar Jyotirlinga</p>
                    <p>Nashik, Maharashtra</p>
                    <p className="text-xs mt-1" style={{ opacity: 0.8 }}>
                      त्र्यंबकेश्वर ज्योतिर्लिंग, नासिक
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 space-y-2">
                <Button
                  size="sm"
                  className="w-full text-sm font-semibold"
                  style={{ backgroundColor: "#FBDCAB", color: "#9B251E" }}
                  onClick={() => window.location.href = "/contact-us"}
                >
                  Book Puja Now
                  <span className="ml-1 text-xs">पूजा बुक करें</span>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full text-sm font-semibold border-2"
                  style={{ borderColor: "#FBDCAB", color: "#FBDCAB", backgroundColor: "transparent" }}
                  onClick={() => window.open("tel:+917888012103")}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="border-t" style={{ borderColor: "rgba(251, 220, 171, 0.2)" }}>
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium" style={{ color: "#FBDCAB", opacity: 0.9 }}>
                  Follow Us:
                </span>
                {socialMedia.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:opacity-80 transition-opacity"
                      style={{ backgroundColor: "#FBDCAB" }}
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" style={{ color: "#9B251E" }} />
                    </a>
                  )
                })}
              </div>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="text-sm" style={{ color: "#FBDCAB", opacity: 0.8 }}>
                  © {new Date().getFullYear()} Pandit Kartike Guru Ji. All rights reserved.
                </p>
                <p className="text-xs mt-1" style={{ color: "#FBDCAB", opacity: 0.7 }}>
                  पंडित कार्तिके गुरु जी। सभी अधिकार सुरक्षित।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

