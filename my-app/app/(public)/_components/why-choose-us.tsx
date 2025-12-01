"use client"

import { Award, CheckCircle2, BookOpen, UserCheck, DollarSign, Clock } from "lucide-react"

const features = [
  {
    title: "20+ Years of Experience",
    titleHindi: "20+ वर्षों का अनुभव",
    description: "Performed thousands of successful pujas with proven results",
    descriptionHindi: "सिद्ध परिणामों के साथ हजारों सफल पूजाएं की हैं",
    icon: Award,
    color: "#9B251E"
  },
  {
    title: "Certified Trimbakeshwar Pandit",
    titleHindi: "प्रमाणित त्र्यंबकेश्वर पंडित",
    description: "Authorized priest recognized for authentic Vedic knowledge",
    descriptionHindi: "प्रामाणिक वैदिक ज्ञान के लिए मान्यता प्राप्त अधिकृत पुजारी",
    icon: CheckCircle2,
    color: "#9B251E"
  },
  {
    title: "Accurate Vidhi",
    titleHindi: "सटीक विधि",
    description: "Every puja is done as per Puranic and Vedic traditions",
    descriptionHindi: "प्रत्येक पूजा पौराणिक और वैदिक परंपराओं के अनुसार की जाती है",
    icon: BookOpen,
    color: "#9B251E"
  },
  {
    title: "Personal Guidance",
    titleHindi: "व्यक्तिगत मार्गदर्शन",
    description: "Guru Ji provides detailed explanations and remedies for each devotee",
    descriptionHindi: "गुरु जी प्रत्येक भक्त के लिए विस्तृत स्पष्टीकरण और उपचार प्रदान करते हैं",
    icon: UserCheck,
    color: "#9B251E"
  },
  {
    title: "Affordable Pricing",
    titleHindi: "सस्ती कीमत",
    description: "No hidden charges, complete support throughout your visit",
    descriptionHindi: "कोई छुपी हुई फीस नहीं, आपकी यात्रा के दौरान पूर्ण सहायता",
    icon: DollarSign,
    color: "#9B251E"
  },
  {
    title: "Online & Offline Options",
    titleHindi: "ऑनलाइन और ऑफलाइन विकल्प",
    description: "Attend in person or join via video call",
    descriptionHindi: "व्यक्तिगत रूप से उपस्थित हों या वीडियो कॉल के माध्यम से जुड़ें",
    icon: Clock,
    color: "#9B251E"
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FBDCAB" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#9B251E" }}>
            Why Choose Us
            <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2">हमें क्यों चुनें</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#9B251E", opacity: 0.9 }}>
            Experience the difference of authentic Vedic rituals performed with devotion and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="border-2 transition-all hover:scale-105 hover:shadow-xl h-full rounded-2xl p-6 relative overflow-hidden"
                style={{ 
                  borderColor: "#9B251E", 
                  background: "linear-gradient(135deg, rgba(251, 220, 171, 0.9) 0%, rgba(255, 245, 230, 0.9) 100%)",
                  backdropFilter: "blur(10px)"
                }}
              >
                {/* Decorative gradient overlay */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 opacity-20 rounded-full blur-2xl"
                  style={{ backgroundColor: "#9B251E" }}
                />
                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                  <div 
                    className="p-4 rounded-full transition-transform duration-300 hover:scale-110"
                    style={{ 
                      backgroundColor: "#9B251E",
                      boxShadow: "0 8px 20px rgba(155, 37, 30, 0.3)"
                    }}
                  >
                    <Icon className="h-8 w-8" style={{ color: "#FBDCAB" }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "#9B251E" }}>
                    {feature.title}
                  </h3>
                  <p className="text-base font-semibold mb-2" style={{ color: "#9B251E", opacity: 0.9 }}>
                    {feature.titleHindi}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#9B251E", opacity: 0.85 }}>
                    {feature.description}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "#9B251E", opacity: 0.75 }}>
                    {feature.descriptionHindi}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

