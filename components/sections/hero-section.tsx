'use client'

import { Plus } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import BackgroundEffects from '../shared/background-effects'
import DecorativeDots from '../shared/decorative-dots'

export default function Component() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top - show navbar
        setIsNavbarVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold - hide navbar
        setIsNavbarVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
  <motion.section 
    className="relative min-h-screen overflow-hidden z-0 transition-all duration-300 ease-out" 
    style={{ 
      background: '#001B6A0A',
      paddingTop: isNavbarVisible ? '5rem' : '1rem' // 80px when navbar visible, 16px when hidden
    }}
    animate={{
      paddingTop: isNavbarVisible ? '5rem' : '1rem'
    }}
    transition={{ duration: 0.3 }}
  >

      {/* Hero Section */}
      <section className="relative z-20 px-6 h-[calc(85dvh-1rem)]">
        <div className="max-w-7xl h-full mx-auto grid lg:grid-cols-2 gap-6 lg:gap-12 items-center z-10">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative space-y-4 lg:space-y-6"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-4 py-2 text-xs font-medium uppercase tracking-wider text-gray-700 shadow-sm ring-1 ring-gray-200"
            >
              NDIS CONSULTANCY EXPERTS
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl lg:text-6xl font-bold leading-tight text-slate-900"
            >
              Empowering <span className="text-primary-gold">NDIS</span>
              <span className="block">
                <span className="text-primary-gold">Providers</span> Through
              </span>
              <span className="block">Expert Guidance</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-600 max-w-xl"
            >
              Holistic support services for NDIS participants and providers. Building capacity
              through compliance, operational excellence, and person-centred care.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="default"
                  className="bg-transparent hover:bg-primary hover:text-white text-black outline outline-primary !px-8 py-6 rounded-full text-base cursor-pointer"
                >
                  <span className="">Discover More</span>
                  <Plus className="h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
             {/* Additional Decorative Dots */}
            <DecorativeDots 
              rows={8}
              columns={4}
              width={64}
              height={128}
              // dotRadius={2.5}
              dotColor="#93C5FD"
              className="absolute -bottom-1/5 -left-2/5 w-6 aspect-square"
              animationDelay={1}
              keyPrefix="hero-side-dot"
            />
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[50vh] lg:h-full lg:px-12 py-2 lg:py-20"
          >
            {/* Decorative Elements */}
            <DecorativeDots 
              rows={8}
              columns={4}
              width={64}
              height={128}
              className="absolute top-1/8 left-0 w-6 aspect-square"
              animationDelay={0.8}
              keyPrefix="hero-dot"
            />

            {/* Main Image Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="relative max-w-5/6 mx-auto h-full rounded-t-full shadow-2xl p-4 transform z-0 rotate-0 outline-4 outline-[#001B6A]"
            >
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
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute bottom-0 right-0 bg-primary p-3"
              >
                <Image
                  src="/icons/hero_map_icon.svg"
                  alt="Decorative dot"
                  width={12}
                  height={12}
                  className="w-18 h-full"
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                  className="absolute right-0 bottom-0 translate-x-11 translate-y-11 w-10 h-10 bg-secondary-gold transform rotate-0"
                />
              </motion.div>
            </motion.div>

           
          </motion.div>

        </div>
      </section>
      <motion.div
        initial={{ opacity: 0, scale: 2, x: -200, y: -200 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <BackgroundEffects top='0%' left='1%' size='500' zIndex={5} className='-translate-x-2/5 -translate-y-2/5'/>
        <BackgroundEffects top='0%' right='0%' size='400' zIndex={5} className='!opacity-80 translate-x-2/5 -translate-y-2/5'/>
         {/* Right column grid background effect */}
            <BackgroundEffects 
              bottom='-3%' 
              left='45%' 
              size='400' 
              zIndex={5} 
              className='!opacity-50'
              gradient="radial-gradient(50% 50% at 50% 50%, rgba(91, 74, 249, 0.5) 0%, rgba(36, 107, 253, 0.5) 0.01%, rgba(255, 255, 255, 0) 100%)"
            />
        {/* background: radial-gradient(50% 50% at 50% 50%, rgba(91, 74, 249, 0.5) 0%, rgba(36, 107, 253, 0.5) 0.01%, rgba(255, 255, 255, 0) 100%);
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className='absolute inset-0 z-10 backdrop-blur-md' 
      />
    </motion.section>
  )
}
