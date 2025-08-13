import { Plus } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Component() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-amber to-amber-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-900 text-white px-3 py-2 rounded font-bold text-lg">WC</div>
          <span className="text-blue-900 font-semibold text-sm">WINSPIRE</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-700 hover:text-blue-900 font-medium">
            Home
          </a>
          <a href="/about" className="text-gray-700 hover:text-blue-900 font-medium">
            About Us
          </a>
          <a href="/services" className="text-gray-700 hover:text-blue-900 font-medium">
            Services
          </a>
          <a href="/contact" className="text-gray-700 hover:text-blue-900 font-medium">
            Contact
          </a>
        </nav>

        <div className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm">
          <div className="flex items-center space-x-2">
            <span>💬</span>
            <div>
              <div className="text-xs">Need help?</div>
              <div className="font-medium">admin@email.com</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 h-[85dvh] border-0 border-amber-400">
        <div className="max-w-7xl h-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 outline-0 outline-red-500">
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

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>2+ Years Trusted Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Family-Owned & Personal</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                className="bg-transparent hover:bg-blue-800 hover:text-white text-black outline outline-[#001B6A] !px-8 py-6 rounded-full text-base"
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
            <div className="relative max-w-5/6 mx-auto h-full rounded-t-full p-4 transform rotate-0 outline-4 outline-[#001B6A]">
              <div className="bg-transparent absolute inset-0 -z-5 rounded-t-full h-full translate-x-6 -translate-y-6 overflow-hidden outline outline-transparent">
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
    </section>
  )
}
