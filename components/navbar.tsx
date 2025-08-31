'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Mail, Menu } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Icons } from '@/lib/icons'
import { DesktopNavItem } from '../components/desktop-nav-item'
import { MobileNavItem } from '../components/mobile-nav-item'
import { navigationItems } from '../constants/navigation'
import SvgIcon from './shared/svg-icon'

export default function EnhancedMobileNav() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      }}
      className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[98svw] lg:w-full px-3 sm:px-4 pointer-events-none transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
      }`}
    >
      <div className="mx-auto max-w-6xl pointer-events-auto">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-between gap-4 rounded-none bg-white backdrop-blur-md shadow-xl ring-1 ring-white/20 px-4 sm:px-0 md:pl-6 max-lg:py-2 py-0 border border-white/20"
        >
          {/* Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/"
              className="flex items-stretch gap-0 shrink-0 hover:scale-105 transition-all duration-300 ease-out"
            >
              <div className="rounded bg-transparent font-bold text-lg leading-none select-none shadow-none">
                <SvgIcon name={Icons.LOGO} size={{ width: 90, height: 24 }} />
              </div>
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigationItems.map((item, index) => (
              <DesktopNavItem key={item.href} item={item} index={index} />
            ))}
          </nav>

          {/* Help / Contact (desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="hidden lg:flex items-center gap-2 bg-blue-950/85 backdrop-blur-md border-none outline-none text-white px-3 py-4 rounded-none text-xs shadow-lg hover:bg-accent hover:text-primary transition-all duration-300 ease-out cursor-pointer"
          >
            <Mail className="h-4 w-4 text-white" />
            <div className="leading-tight">
              <div className="opacity-90">Need help?</div>
              <div className="font-medium text-[13px]">admin@winspireconsultancy.com.au</div>
            </div>
          </motion.div>

          {/* Mobile menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-blue-900 border border-blue-400/30 hover:bg-blue-800/90 hover:scale-110 transition-all duration-300 ease-out shadow-lg"
                  >
                    <Menu className="aspect-square w-5 text-white" />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 border-none bg-white/5 backdrop-blur-xl shadow-2xl border-l border-white/10"
              >
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
                  <div
                    className="absolute top-1/3 -left-20 h-48 w-48 rounded-full bg-amber-400/15 blur-3xl animate-pulse"
                    style={{ animationDelay: '1s' }}
                  />
                  <div
                    className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl animate-pulse"
                    style={{ animationDelay: '2s' }}
                  />
                </div>

                <SheetHeader className="pb-6">
                  <SheetTitle className="sr-only">Navigation</SheetTitle>
                  <div className="flex items-center gap-3 mb-4">
                    <SvgIcon name={Icons.LOGO} size={{ width: 56, height: 20 }} />
                    <div>
                      <div className="text-white/70 text-xs">Professional Services</div>
                    </div>
                  </div>
                </SheetHeader>

                <div className="space-y-4 px-4">
                  <nav className="space-y-2">
                    {navigationItems.map((item) => (
                      <MobileNavItem key={item.href} item={item} />
                    ))}
                  </nav>

                  <div className="pt-4 border-t border-white/10">
                    <SheetClose asChild>
                      <Link
                        href="/contact"
                        className="group relative overflow-hidden flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600/90 to-amber-500/90 backdrop-blur-md border border-white/30 px-6 py-4 font-semibold text-white shadow-2xl shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all duration-300 ease-out hover:shadow-blue-500/30"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-amber-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Calendar className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="relative">Book Consultation</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </SheetClose>
                    <p className="text-center text-xs text-white/60 mt-3">
                      Free 30-minute discovery call
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
