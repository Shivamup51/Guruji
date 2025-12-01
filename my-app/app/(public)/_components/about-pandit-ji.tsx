"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Sparkles } from "lucide-react"

export default function AboutPanditJi() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#9B251E" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image
              src="/acharya-kartike-guru-ji.jpg"
              alt="Pandit Kartike Guru Ji Trimbakeshwar"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: "#FBDCAB", color: "#9B251E" }}>
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">ABOUT PANDIT JI</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: "#FBDCAB" }}>
              Pandit Kartike Guru Ji
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2">पंडित कार्तिके गुरु जी</span>
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed" style={{ color: "#FBDCAB", opacity: 0.95 }}>
              Trimbakeshwar में प्रामाणिक वैदिक पूजा सेवाएं प्रदान करने वाले अनुभवी पंडित
            </p>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#FBDCAB", opacity: 0.9 }}>
              Pandit Kartike Guru Ji is one of the most respected and experienced Vedic priests in Trimbakeshwar Jyotirlinga, specializing in all major Shanti Pujas including Kaal Sarp Dosh Puja, Narayan Nagbali, Tripindi Shraddh, Mahamrityunjay Jaap, Pitra Dosh Shanti, Vastu Shanti, Grah Shanti, Nakshatra Shanti, and Yog Shanti.
            </p>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#FBDCAB", opacity: 0.9 }}>
              20+ वर्षों के अनुभव के साथ, गुरु जी ने भारत और दुनिया भर के हजारों भक्तों का मार्गदर्शन किया है, प्रामाणिक वैदिक अनुष्ठानों के माध्यम से जीवन की बाधाओं को दूर करने में मदद की है।
            </p>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#FBDCAB", opacity: 0.9 }}>
              With over 20+ years of experience, Guru Ji has guided thousands of devotees from India and across the world, helping them overcome life obstacles through ancient and authentic Vedic rituals.
            </p>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#FBDCAB", opacity: 0.9 }}>
              वह अपनी विनम्रता, गहरे आध्यात्मिक ज्ञान, सटीक मंत्र जाप और भगवान शिव के प्रति शुद्ध भक्ति के लिए जाने जाते हैं।
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 font-semibold"
                style={{ backgroundColor: "#FBDCAB", color: "#9B251E", fontWeight: "600" }}
                onClick={() => window.location.href = "/contact-us"}
              >
                <span style={{ color: "#9B251E" }}>Contact Us</span>
                <span className="ml-2 text-sm" style={{ color: "#9B251E" }}>संपर्क करें</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 font-semibold"
                style={{ borderColor: "#FBDCAB", color: "#FBDCAB", backgroundColor: "transparent", fontWeight: "600" }}
                onClick={() => window.open("https://wa.me/917888012103", "_blank")}
              >
                <MessageCircle className="h-5 w-5 mr-2" style={{ color: "#FBDCAB" }} />
                <span style={{ color: "#FBDCAB" }}>WhatsApp</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 font-semibold"
                style={{ borderColor: "#FBDCAB", color: "#FBDCAB", backgroundColor: "transparent", fontWeight: "600" }}
                onClick={() => window.open("tel:+917888012103")}
              >
                <Phone className="h-5 w-5 mr-2" style={{ color: "#FBDCAB" }} />
                <span style={{ color: "#FBDCAB" }}>+91 7888012103</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

