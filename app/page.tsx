import type { Metadata } from 'next'

import AboutSectionSSR from '@/components/sections/about-section-ssr'
import HeroSectionSSR from '@/components/sections/hero-section-ssr'
import MissionSectionSSR from '@/components/sections/mission-section-ssr'
import ServicesSectionSSR from '@/components/sections/services-section-ssr'
import FooterSectionSSR from '@/components/sections/footer-section-ssr'

import { pageMetadata } from '@/lib/server/metadata'

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
}

export default function HomePage() {
  return (
    <main>
      <HeroSectionSSR />
      <AboutSectionSSR />
      <MissionSectionSSR />
      {/* <ServicesSectionSSR /> */}
      {/* <FooterSectionSSR /> */}
    </main>
  )
}
