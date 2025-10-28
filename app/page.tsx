import dynamic from 'next/dynamic'
import HeroSection from '../components/sections/hero-section'
import { getBlurData } from '@/lib/get-blur-data';

const AboutSection = dynamic(() => import('../components/sections/about-section'))
const MissionSection = dynamic(() => import('../components/sections/mission-section'))
const ServicesSection = dynamic(() => import('../components/sections/services-section'))

export default async function Page() {
    const heroBlur = await getBlurData('/images/hero_image.webp');
  return (
    <main>
      <HeroSection blurDataURL={heroBlur} />
      <AboutSection />
      <MissionSection />
      <ServicesSection />
    </main>
  )
}
