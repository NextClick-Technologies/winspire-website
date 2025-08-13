import HeroSection from "../components/sections/hero-section"
import AboutSection from "../components/sections/about-section"
import MissionSection from "../components/sections/mission-section"
import ServicesSection from "../services-section"
import FooterSection from "../components/sections/footer-section"

export default function Page() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ServicesSection />
      <FooterSection />
    </div>
  )
}
