"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ArrowRight, Sparkles } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FBDCAB" }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#9B251E", color: "#FBDCAB" }}>
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium">GET STARTED TODAY</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "#9B251E" }}>
          Begin Your Spiritual Journey
          <span className="block text-3xl sm:text-4xl lg:text-5xl mt-4">अपनी आध्यात्मिक यात्रा शुरू करें</span>
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: "#9B251E", opacity: 0.9 }}>
          Connect with Pandit Kartike Guru Ji for authentic Vedic puja services at Trimbakeshwar. Experience the power of traditional rituals and find peace in your life.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "#9B251E", opacity: 0.85 }}>
          त्र्यंबकेश्वर में प्रामाणिक वैदिक पूजा सेवाओं के लिए पंडित कार्तिके गुरु जी से जुड़ें। पारंपरिक अनुष्ठानों की शक्ति का अनुभव करें और अपने जीवन में शांति पाएं।
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button
            size="lg"
            className="text-lg px-8 py-6 font-semibold"
            style={{ backgroundColor: "#9B251E", color: "#FBDCAB", fontWeight: "600" }}
            onClick={() => window.location.href = "/contact-us"}
          >
            <span style={{ color: "#FBDCAB" }}>Book Your Puja Now</span>
            <span className="ml-2 text-sm" style={{ color: "#FBDCAB" }}>अभी पूजा बुक करें</span>
            <ArrowRight className="ml-2 h-5 w-5" style={{ color: "#FBDCAB" }} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 font-semibold"
            style={{ 
              borderColor: "#9B251E", 
              color: "#9B251E", 
              backgroundColor: "#FBDCAB",
              fontWeight: "600"
            }}
            onClick={() => window.open("tel:+917888012103")}
          >
            <Phone className="h-5 w-5 mr-2" style={{ color: "#9B251E" }} />
            <span style={{ color: "#9B251E" }}>Call: +91 7888012103</span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 font-semibold"
            style={{ 
              borderColor: "#9B251E", 
              color: "#9B251E", 
              backgroundColor: "#FBDCAB",
              fontWeight: "600"
            }}
            onClick={() => window.open("https://wa.me/917888012103", "_blank")}
          >
            <MessageCircle className="h-5 w-5 mr-2" style={{ color: "#9B251E" }} />
            <span style={{ color: "#9B251E" }}>WhatsApp Us</span>
          </Button>
        </div>

        <div className="mt-12 p-6 rounded-2xl" style={{ backgroundColor: "#9B251E" }}>
          <p className="text-lg font-semibold mb-2" style={{ color: "#FBDCAB" }}>
            Available for consultation and puja booking
          </p>
          <p className="text-base" style={{ color: "#FBDCAB", opacity: 0.9 }}>
            Trimbakeshwar Jyotirlinga, Nashik, Maharashtra
          </p>
          <p className="text-sm mt-2" style={{ color: "#FBDCAB", opacity: 0.8 }}>
            त्र्यंबकेश्वर ज्योतिर्लिंग, नासिक, महाराष्ट्र
          </p>
        </div>
      </div>
    </section>
  )
}

