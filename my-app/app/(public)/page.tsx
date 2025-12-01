import HeroSection from "./_components/hero-section"
import MantrasMarquee from "./_components/mantras-marquee"
import PoojasList from "./_components/poojas-list"
import AboutPanditJi from "./_components/about-pandit-ji"
import WhyChooseUs from "./_components/why-choose-us"
import StatsSection from "./_components/stats-section"
import Testimonials from "./_components/testimonials"
import CallToAction from "./_components/call-to-action"

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBDCAB" }}>
      {/* Hero Section - Full width auto-sliding */}
      <HeroSection />

      {/* Marquee of Mantras */}
      <MantrasMarquee />

      {/* Poojas List with Auto-switching Tabs */}
      <PoojasList />

      {/* About Pandit Ji */}
      <AboutPanditJi />

      {/* Marquee of Mantras (Second Time) */}
      <MantrasMarquee />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <CallToAction />
    </div>
  )
}
