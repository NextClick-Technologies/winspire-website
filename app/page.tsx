import AboutSection from '../components/sections/about-section'
import FooterSection from '../components/sections/footer-section'
import HeroSection from '../components/sections/hero-section'
import MissionSection from '../components/sections/mission-section'
import ServicesSection from '../components/sections/services-section'

export default function Page() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ServicesSection />
      <FooterSection />
    </main>
  )
}
