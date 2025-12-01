"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Shield, Star, HeartHandshake, Users, Activity, Moon, ScrollText, Home } from "lucide-react"
import Link from "next/link"

const poojaCategories = [
  {
    name: "Kaal Sarp Dosh",
    nameHindi: "काल सर्प दोष",
    poojas: [
      {
        title: "Kaal Sarp Dosh Nivaran Puja",
        titleHindi: "काल सर्प दोष निवारण पूजा",
        description: "Remove obstacles caused by Kaal Sarp Dosh and restore peace in life",
        descriptionHindi: "काल सर्प दोष से होने वाली बाधाओं को दूर करें",
        image: "/kaal.png",
        href: "/kaal-sarp-dosh-niwaran",
        icon: Shield
      }
    ]
  },
  {
    name: "Pitru Dosh",
    nameHindi: "पितृ दोष",
    poojas: [
      {
        title: "Narayan Nagbali Puja",
        titleHindi: "नारायण नागबली पूजा",
        description: "Powerful 3-day ritual to remove Pitru Dosh and ancestral karmic issues",
        descriptionHindi: "पितृ दोष और पूर्वजों के कर्मिक मुद्दों को दूर करने के लिए शक्तिशाली 3-दिवसीय अनुष्ठान",
        image: "/narayan-nag-bali.jpg",
        href: "/narayan-nag-bali",
        icon: Star
      },
      {
        title: "Tripindi Shraddh",
        titleHindi: "त्रिपिंडी श्राद्ध",
        description: "Pacify ancestors and remove Pitru Dosh for family harmony",
        descriptionHindi: "पूर्वजों को शांत करें और परिवार की सद्भाव के लिए पितृ दोष दूर करें",
        image: "/tripindi.jpg",
        href: "/tripindi",
        icon: HeartHandshake
      },
      {
        title: "Pitra Dosh Nivaran Puja",
        titleHindi: "पितृ दोष निवारण पूजा",
        description: "Remove ancestral curses and bring blessings from ancestors",
        descriptionHindi: "पैतृक श्राप दूर करें और पूर्वजों से आशीर्वाद प्राप्त करें",
        image: "/pitar-dosh.jpg",
        href: "/pitar-dosh-shanti",
        icon: Users
      }
    ]
  },
  {
    name: "Shanti Pujas",
    nameHindi: "शांति पूजा",
    poojas: [
      {
        title: "Mahamrityunjay Jaap",
        titleHindi: "महामृत्युंजय जाप",
        description: "Powerful healing mantra for health, protection, and longevity",
        descriptionHindi: "स्वास्थ्य, सुरक्षा और दीर्घायु के लिए शक्तिशाली उपचार मंत्र",
        image: "/mahamrutunjay-jaap.jpg",
        href: "/mahamrutunjay-jaap",
        icon: Activity
      },
      {
        title: "Grah Shanti Puja",
        titleHindi: "ग्रह शांति पूजा",
        description: "Balance planetary energies and reduce negative planetary effects",
        descriptionHindi: "ग्रहों की ऊर्जा को संतुलित करें और नकारात्मक ग्रह प्रभावों को कम करें",
        image: "/grah-shanti.jpg",
        href: "/grah-shanti",
        icon: Moon
      },
      {
        title: "Yog Shanti Puja",
        titleHindi: "योग शांति पूजा",
        description: "Neutralize harmful yogs and restore balance in your kundli",
        descriptionHindi: "हानिकारक योगों को निष्क्रिय करें और अपनी कुंडली में संतुलन बहाल करें",
        image: "/yog-shanti.jpg",
        href: "/yog-shanti",
        icon: ScrollText
      },
      {
        title: "Nakshatra Shanti",
        titleHindi: "नक्षत्र शांति",
        description: "Calm your birth star and remove negative Nakshatra effects",
        descriptionHindi: "अपने जन्म नक्षत्र को शांत करें और नकारात्मक नक्षत्र प्रभावों को दूर करें",
        image: "/nakshatra-shanti.jpg",
        href: "/nakshatra-shanti",
        icon: Star
      },
      {
        title: "Vastu Shanti Puja",
        titleHindi: "वास्तु शांति पूजा",
        description: "Remove negative energies from your home, office, or property",
        descriptionHindi: "अपने घर, कार्यालय या संपत्ति से नकारात्मक ऊर्जा दूर करें",
        image: "/vastu-shanti.jpg",
        href: "/vastu-shanti",
        icon: Home
      }
    ]
  }
]

export default function PoojasList() {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % poojaCategories.length)
    }, 5000) // Auto-switch every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const currentCategory = poojaCategories[activeTab]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FBDCAB" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#9B251E" }}>
            Our Puja Services
            <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2">हमारी पूजा सेवाएं</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#9B251E", opacity: 0.9 }}>
            Authentic Vedic rituals performed with devotion and expertise
          </p>
        </div>

        {/* Futuristic Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {poojaCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative px-8 py-4 font-semibold text-lg transition-all duration-500 overflow-hidden ${
                index === activeTab
                  ? "scale-110"
                  : "opacity-70 hover:opacity-90"
              }`}
              style={{
                background: index === activeTab 
                  ? "linear-gradient(135deg, #9B251E 0%, #C0302A 100%)"
                  : "linear-gradient(135deg, rgba(251, 220, 171, 0.3) 0%, rgba(255, 255, 255, 0.5) 100%)",
                color: index === activeTab ? "#FBDCAB" : "#9B251E",
                border: `2px solid ${index === activeTab ? "#FBDCAB" : "#9B251E"}`,
                borderRadius: "20px",
                boxShadow: index === activeTab 
                  ? "0 10px 30px rgba(155, 37, 30, 0.4), 0 0 20px rgba(251, 220, 171, 0.2)"
                  : "0 4px 15px rgba(155, 37, 30, 0.1)"
              }}
            >
              {index === activeTab && (
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: "radial-gradient(circle at 50% 50%, #FBDCAB 0%, transparent 70%)",
                    animation: "pulse 2s ease-in-out infinite"
                }}
                />
              )}
              <span className="relative z-10 block">{category.name}</span>
              <span className="relative z-10 block text-sm mt-1">{category.nameHindi}</span>
            </button>
          ))}
        </div>

        {/* Futuristic Pooja Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCategory.poojas.map((pooja, index) => {
            const Icon = pooja.icon
            return (
              <Link key={index} href={pooja.href}>
                <div 
                  className="relative group cursor-pointer h-full transition-all duration-500 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, rgba(251, 220, 171, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "24px",
                    border: "2px solid rgba(155, 37, 30, 0.3)",
                    overflow: "hidden",
                    boxShadow: "0 8px 32px rgba(155, 37, 30, 0.1)"
                  }}
                >
                  {/* Animated Background Gradient */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(135deg, rgba(155, 37, 30, 0.1) 0%, rgba(251, 220, 171, 0.1) 100%)"
                    }}
                  />
                  
                  {/* Glowing Border Effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      borderRadius: "24px",
                      padding: "2px",
                      background: "linear-gradient(135deg, #9B251E, #FBDCAB, #9B251E)",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude"
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-6">
                    {/* Icon and Title Section */}
                    <div className="mb-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div 
                          className="relative p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                          style={{
                            background: "linear-gradient(135deg, #9B251E 0%, #C0302A 100%)",
                            boxShadow: "0 8px 20px rgba(155, 37, 30, 0.3)"
                          }}
                        >
                          <Icon className="h-6 w-6" style={{ color: "#FBDCAB" }} />
                          <div 
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                              background: "radial-gradient(circle at center, rgba(251, 220, 171, 0.3) 0%, transparent 70%)"
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 
                            className="text-xl font-bold mb-2 transition-colors duration-300"
                            style={{ color: "#9B251E" }}
                          >
                            {pooja.title}
                          </h3>
                          <p 
                            className="text-sm font-semibold"
                            style={{ color: "#9B251E", opacity: 0.8 }}
                          >
                            {pooja.titleHindi}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="space-y-3 mb-6">
                      <p 
                        className="text-base leading-relaxed"
                        style={{ color: "#9B251E", opacity: 0.85 }}
                      >
                        {pooja.description}
                      </p>
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ color: "#9B251E", opacity: 0.7 }}
                      >
                        {pooja.descriptionHindi}
                      </p>
                    </div>

                    {/* CTA Section */}
                    <div 
                      className="flex items-center justify-between pt-4 border-t transition-all duration-300"
                      style={{ 
                        borderColor: "rgba(155, 37, 30, 0.2)",
                        color: "#9B251E"
                      }}
                    >
                      <span className="text-sm font-semibold">Learn More</span>
                      <div 
                        className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"
                        style={{
                          background: "linear-gradient(135deg, #9B251E 0%, #C0302A 100%)",
                          boxShadow: "0 4px 15px rgba(155, 37, 30, 0.3)"
                        }}
                      >
                        <ArrowRight className="h-5 w-5" style={{ color: "#FBDCAB" }} />
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div 
                      className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                      style={{
                        background: "radial-gradient(circle, #9B251E 0%, transparent 70%)",
                        borderRadius: "50%",
                        transform: "translate(30%, -30%)"
                      }}
                    />
                    <div 
                      className="absolute bottom-0 left-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                      style={{
                        background: "radial-gradient(circle, #FBDCAB 0%, transparent 70%)",
                        borderRadius: "50%",
                        transform: "translate(-30%, 30%)"
                      }}
                    />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

