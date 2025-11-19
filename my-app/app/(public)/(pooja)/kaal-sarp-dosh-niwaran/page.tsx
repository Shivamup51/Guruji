import HomeSection from "./_components/home-section"    
import MarqueeSection from "./_components/marquee-section"
import IntroSection from "./_components/intro-section"
import EffectsSection from "./_components/effects-section"
import TypesSection from "./_components/types-section"
import WhyChooseSection from "./_components/why-choose-section"
import TestimonialsSection from "./_components/testimonials-section"

export default function KaalSarpDoshNiwaranPooja() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FBDCAB" }}>
      <HomeSection />
      <MarqueeSection />
      <IntroSection />
      <EffectsSection />
      <TypesSection />
      <WhyChooseSection />
      <TestimonialsSection />
    </div>
  )
}
