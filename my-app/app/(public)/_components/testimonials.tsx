"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    nameHindi: "राजेश कुमार",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "Guru Ji performed Kaal Sarp Dosh Puja for me. The results were amazing - my life obstacles started clearing within months. Highly recommended!",
    textHindi: "गुरु जी ने मेरे लिए काल सर्प दोष पूजा की। परिणाम अद्भुत थे - मेरी जीवन की बाधाएं महीनों के भीतर साफ होने लगीं। अत्यधिक अनुशंसित!",
    pooja: "Kaal Sarp Dosh Puja"
  },
  {
    name: "Priya Sharma",
    nameHindi: "प्रिया शर्मा",
    location: "Delhi",
    rating: 5,
    text: "Narayan Nagbali Puja changed our family's life. We had been facing financial and health issues for years. After the puja, everything improved significantly.",
    textHindi: "नारायण नागबली पूजा ने हमारे परिवार का जीवन बदल दिया। हम वर्षों से वित्तीय और स्वास्थ्य समस्याओं का सामना कर रहे थे। पूजा के बाद, सब कुछ काफी सुधर गया।",
    pooja: "Narayan Nagbali Puja"
  },
  {
    name: "Amit Patel",
    nameHindi: "अमित पटेल",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "Grah Shanti Puja was performed with such devotion. Guru Ji explained everything clearly and the entire process was very transparent. Great experience!",
    textHindi: "ग्रह शांति पूजा इतनी भक्ति के साथ की गई। गुरु जी ने सब कुछ स्पष्ट रूप से समझाया और पूरी प्रक्रिया बहुत पारदर्शी थी। शानदार अनुभव!",
    pooja: "Grah Shanti Puja"
  },
  {
    name: "Sunita Devi",
    nameHindi: "सुनीता देवी",
    location: "Pune, Maharashtra",
    rating: 5,
    text: "Mahamrityunjay Jaap helped me recover from a serious health issue. The power of the mantra and Guru Ji's devotion is truly remarkable.",
    textHindi: "महामृत्युंजय जाप ने मुझे एक गंभीर स्वास्थ्य समस्या से उबरने में मदद की। मंत्र की शक्ति और गुरु जी की भक्ति वास्तव में उल्लेखनीय है।",
    pooja: "Mahamrityunjay Jaap"
  },
  {
    name: "Vikram Singh",
    nameHindi: "विक्रम सिंह",
    location: "Jaipur, Rajasthan",
    rating: 5,
    text: "Tripindi Shraddh brought peace to our family. The ancestral issues we were facing are now resolved. Thank you Guru Ji!",
    textHindi: "त्रिपिंडी श्राद्ध ने हमारे परिवार में शांति लाई। हम जिन पैतृक मुद्दों का सामना कर रहे थे, वे अब हल हो गए हैं। धन्यवाद गुरु जी!",
    pooja: "Tripindi Shraddh"
  },
  {
    name: "Anjali Mehta",
    nameHindi: "अंजलि मेहता",
    location: "Surat, Gujarat",
    rating: 5,
    text: "Vastu Shanti Puja removed all negative energies from our home. We feel much more positive and peaceful now. Excellent service!",
    textHindi: "वास्तु शांति पूजा ने हमारे घर से सभी नकारात्मक ऊर्जा दूर कर दी। अब हम बहुत अधिक सकारात्मक और शांतिपूर्ण महसूस करते हैं। उत्कृष्ट सेवा!",
    pooja: "Vastu Shanti Puja"
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#9B251E" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#FBDCAB" }}>
            What Our Devotees Say
            <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2">हमारे भक्त क्या कहते हैं</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#FBDCAB", opacity: 0.9 }}>
            Real experiences from devotees who found peace and solutions through our puja services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 transition-all hover:scale-105 hover:shadow-xl h-full"
              style={{ borderColor: "#FBDCAB", backgroundColor: "#FBDCAB" }}
            >
              <CardContent className="pt-6 pb-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Quote className="h-6 w-6" style={{ color: "#9B251E" }} />
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" style={{ color: "#9B251E" }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-base leading-relaxed font-semibold" style={{ color: "#9B251E" }}>
                    {testimonial.text}
                  </p>
                  <p className="text-sm leading-relaxed font-medium" style={{ color: "#9B251E" }}>
                    {testimonial.textHindi}
                  </p>
                  <div className="pt-4 border-t-2" style={{ borderColor: "#9B251E" }}>
                    <p className="font-bold text-lg mb-1" style={{ color: "#9B251E" }}>
                      {testimonial.name}
                    </p>
                    <p className="text-sm font-bold mb-2" style={{ color: "#9B251E" }}>
                      {testimonial.nameHindi}
                    </p>
                    <p className="text-sm font-semibold mb-2" style={{ color: "#9B251E" }}>
                      {testimonial.location}
                    </p>
                    <p className="text-sm font-bold mt-2" style={{ color: "#9B251E" }}>
                      {testimonial.pooja}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

