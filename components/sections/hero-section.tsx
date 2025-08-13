import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Plus } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-900 text-white px-3 py-2 rounded font-bold text-lg">WC</div>
          <span className="text-blue-900 font-semibold text-sm">WINSPIRE</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">
            About Us
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">
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
      <main className="px-6  border-4 border-amber-400">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 outline outline-red-500">
            <div className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-4 py-2 text-xs font-medium uppercase tracking-wider text-gray-700 shadow-sm ring-1 ring-gray-200">
              NDIS CONSULTANCY EXPERTS
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-slate-900">
              Empowering <span className="text-amber-500">NDIS</span>
              <span className="block">
                <span className="text-amber-500">Providers</span> Through
              </span>
              <span className="block">Expert Guidance</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              Holistic support services for NDIS participants and providers. Building capacity through compliance, operational excellence, and person-centred care.
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
              <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full text-base">
                <span className="mr-2">Discover More</span>
                <Plus className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full text-lg bg-transparent"
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:px-12 py-12 lg:py-20 outline-4 outline-fuchsia-500">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 grid grid-cols-4 gap-1">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-blue-200 rounded-full"></div>
              ))}
            </div>

            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-amber-400 rounded-lg transform rotate-12"></div>

            {/* Main Image Container */}
            <div className="relative bg-blue-900 max-w-5/6 rounded-t-full p-4 transform rotate-0 outline-4 outline-yellow-600">
              <div className="bg-white rounded-t-full overflow-hidden outline-4 outline-red-600">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Supportive NDIS consultation meeting inside an office"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Small Chart Icon */}
              <div className="absolute -bottom-4 -right-4 bg-blue-800 p-3 rounded-lg">
                <div className="w-8 h-8 text-white">📊</div>
              </div>
            </div>

            {/* Additional Decorative Dots */}
            <div className="absolute top-1/2 -right-8 w-12 h-12 grid grid-cols-3 gap-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-blue-300 rounded-full"></div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
