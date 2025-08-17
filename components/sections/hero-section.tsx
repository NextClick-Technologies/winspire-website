import { Plus } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import BackgroundEffects from '../shared/background-effects'

export default function Component() {
  return (
  <section className="relative min-h-screen overflow-hidden z-0" style={{ background: '#001B6A0A' }}>

      {/* Hero Section */}
      <section className="relative z-20 px-6 h-[85dvh] border-2 border-amber-400">
        <div className="max-w-7xl h-full mx-auto grid lg:grid-cols-2 gap-12 items-center z-10 outline-4 outline-lime-500">
          {/* Left Content */}
          <div className="space-y-6 outline-4 outline-red-500">
            <div className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-4 py-2 text-xs font-medium uppercase tracking-wider text-gray-700 shadow-sm ring-1 ring-gray-200">
              NDIS CONSULTANCY EXPERTS
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-slate-900">
              Empowering <span className="text-[#F5C71D]">NDIS</span>
              <span className="block">
                <span className="text-[#F5C71D]">Providers</span> Through
              </span>
              <span className="block">Expert Guidance</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              Holistic support services for NDIS participants and providers. Building capacity
              through compliance, operational excellence, and person-centred care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                className="bg-transparent hover:bg-primary hover:text-white text-black outline outline-primary !px-8 py-6 rounded-full text-base cursor-pointer"
              >
                <span className="">Discover More</span>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-full lg:px-12 py-12 lg:py-20 outline-0 outline-fuchsia-500">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 grid grid-cols-4 gap-1">
              {Array.from({ length: 16 }).map((_, i) => (
                <div
                  key={`decorative-dot-hero-${i}-${Math.floor(i / 4)}-${i % 4}`}
                  className="w-1.25 aspect-square bg-blue-500 rounded-full"
                ></div>
              ))}
            </div>

            {/* Main Image Container */}
            <div className="relative max-w-5/6 mx-auto h-full rounded-t-full shadow-2xl p-4 transform z-0 rotate-0 outline-4 outline-[#001B6A]">
              <div className="bg-transparent absolute inset-0 -z-10 rounded-t-full h-full translate-x-5 -translate-y-5 overflow-hidden outline outline-transparent">
                <Image
                  src="/images/hero_image.webp"
                  alt="Supportive NDIS consultation meeting inside an office"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small Chart Icon */}
              <div className="absolute bottom-0 right-0 bg-[#001B6A] p-3">
                <Image
                  src="/icons/hero_map_icon.svg"
                  alt="Decorative dot"
                  width={12}
                  height={12}
                  className="w-18 h-full"
                />
                <div className="absolute right-0 bottom-0 translate-x-11 translate-y-11 w-10 h-10 bg-[#F8BC26] transform rotate-0"></div>
              </div>
            </div>

            {/* Additional Decorative Dots */}
            <div className="absolute top-1/2 -right-4 overflow-hidden w-12 h-12 grid grid-cols-3 gap-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={`side-dot-hero-${i}-${Math.floor(i / 3)}-${i % 3}`}
                  className="w-2 h-2 bg-blue-300 rounded-full"
                ></div>
              ))}
            </div>

          </div>

        </div>
      </section>
      <BackgroundEffects top='0%' left='1%' size='500' zIndex={5} className='-translate-x-2/5 -translate-y-2/5'/>
      <div className='absolute inset-0 z-10 backdrop-blur-md border-6 border-fuchsia-700' />
    </section>
  )
}
