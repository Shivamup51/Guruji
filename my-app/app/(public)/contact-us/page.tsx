"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock,
  Send,
  Sparkles,
  Loader2
} from "lucide-react"
import { sendWhatsAppMessage } from "./actions"

const poojaServices = [
  "Kaal Sarp Dosh Puja",
  "Narayan Nagbali Puja",
  "Tripindi Shraddh",
  "Pitra Dosh Nivaran Puja",
  "Mahamrityunjay Jaap",
  "Grah Shanti Puja",
  "Yog Shanti Puja",
  "Nakshatra Shanti",
  "Vastu Shanti Puja",
  "Rudrabhishek",
  "Traditional Tarpan, Pind Daan & Shraddh",
  "Other / Not Sure",
]

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    poojaService: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate required fields
      if (!formData.name || !formData.phone || !formData.message) {
        alert("Please fill in all required fields (Name, Phone, and Message)")
        setIsSubmitting(false)
        return
      }

      // Call server action
      const result = await sendWhatsAppMessage({
        name: formData.name,
        phone: formData.phone,
        poojaService: formData.poojaService || undefined,
        message: formData.message
      })

      if (result.success && result.url) {
        // Open WhatsApp with the message
        window.open(result.url, "_blank")
        
        // Reset form
        setFormData({
          name: "",
          phone: "",
          poojaService: "",
          message: ""
        })
        
        // Show success message
        alert("Opening WhatsApp with your message...")
      } else {
        alert(result.message || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBDCAB" }}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FBDCAB" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#9B251E", color: "#FBDCAB" }}>
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">CONTACT US</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: "#9B251E" }}>
              Get in Touch with Us
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-4">संपर्क करें</span>
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#9B251E", opacity: 0.9 }}>
              Connect with Acharya Kartike Guru Ji for authentic Vedic puja services at Trimbakeshwar. We're here to guide you on your spiritual journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#9B251E" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-2 text-center" style={{ borderColor: "#FBDCAB", backgroundColor: "#FBDCAB" }}>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: "#9B251E" }}>
                    <Phone className="h-6 w-6" style={{ color: "#FBDCAB" }} />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2" style={{ color: "#9B251E" }}>
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-2" style={{ color: "#9B251E", opacity: 0.9 }}>
                  Call us directly
                </p>
                <a 
                  href="tel:+917888012103" 
                  className="text-lg font-semibold hover:opacity-80 transition-opacity"
                  style={{ color: "#9B251E" }}
                >
                  +91 7888012103
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 text-center" style={{ borderColor: "#FBDCAB", backgroundColor: "#FBDCAB" }}>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: "#9B251E" }}>
                    <MessageCircle className="h-6 w-6" style={{ color: "#FBDCAB" }} />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2" style={{ color: "#9B251E" }}>
                  WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-2" style={{ color: "#9B251E", opacity: 0.9 }}>
                  Message us on WhatsApp
                </p>
                <a 
                  href="https://wa.me/917888012103" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold hover:opacity-80 transition-opacity"
                  style={{ color: "#9B251E" }}
                >
                  Chat Now
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 text-center" style={{ borderColor: "#FBDCAB", backgroundColor: "#FBDCAB" }}>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: "#9B251E" }}>
                    <MapPin className="h-6 w-6" style={{ color: "#FBDCAB" }} />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2" style={{ color: "#9B251E" }}>
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base" style={{ color: "#9B251E", opacity: 0.9 }}>
                  Trimbakeshwar Jyotirlinga, Nashik, Maharashtra
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 text-center" style={{ borderColor: "#FBDCAB", backgroundColor: "#FBDCAB" }}>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: "#9B251E" }}>
                    <Clock className="h-6 w-6" style={{ color: "#FBDCAB" }} />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2" style={{ color: "#9B251E" }}>
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base" style={{ color: "#9B251E", opacity: 0.9 }}>
                  Available for consultation and puja booking
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FBDCAB" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#9B251E" }}>
              Send Us a Message
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#9B251E", opacity: 0.9 }}>
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <Card className="border-2" style={{ borderColor: "#9B251E", backgroundColor: "#FBDCAB" }}>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium" style={{ color: "#9B251E" }}>
                      Your Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="border-2"
                      style={{ borderColor: "#9B251E", backgroundColor: "#fff" }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" style={{ color: "#9B251E" }}>
                      Phone Number *
                    </label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number (e.g., +91 9876543210)"
                      className="border-2"
                      style={{ borderColor: "#9B251E", backgroundColor: "#fff" }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" style={{ color: "#9B251E" }}>
                    Puja Service Interested In
                  </label>
                  <Select value={formData.poojaService} onValueChange={(value) => setFormData({ ...formData, poojaService: value })}>
                    <SelectTrigger 
                      className="w-full h-12 text-base border-2"
                      style={{ 
                        borderColor: "#9B251E", 
                        backgroundColor: "#fff",
                        color: "#9B251E"
                      }}
                    >
                      <SelectValue placeholder="Select a Pooja Service..." />
                    </SelectTrigger>
                    <SelectContent 
                      style={{ 
                        backgroundColor: "#fff",
                        borderColor: "#9B251E"
                      }}
                    >
                      {poojaServices.map((service, index) => (
                        <SelectItem 
                          key={index} 
                          value={service}
                          className="py-3"
                          style={{ color: "#9B251E" }}
                        >
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" style={{ color: "#9B251E" }}>
                    Message *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements or ask any questions..."
                    rows={5}
                    className="border-2"
                    style={{ borderColor: "#9B251E", backgroundColor: "#fff" }}
                  />
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="text-lg px-8 py-6"
                    style={{ backgroundColor: "#9B251E", color: "#FBDCAB" }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-2"
                    style={{ borderColor: "#9B251E", color: "#9B251E" }}
                    onClick={() => window.open("https://wa.me/917888012103", "_blank")}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp Instead
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#9B251E" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#FBDCAB" }}>
              Quick Actions
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#FBDCAB", opacity: 0.9 }}>
              Choose the most convenient way to reach us
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              style={{ backgroundColor: "#FBDCAB", color: "#9B251E" }}
              onClick={() => window.open("tel:+917888012103")}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Button>
            <Button
              size="lg"
              className="text-lg px-8 py-6"
              style={{ backgroundColor: "#25D366", color: "#fff" }}
              onClick={() => window.open("https://wa.me/917888012103", "_blank")}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2"
              style={{ borderColor: "#FBDCAB", color: "#FBDCAB" }}
              onClick={() => window.location.href = "/about"}
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

