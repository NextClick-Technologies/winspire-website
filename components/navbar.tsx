"use client"

import Link from "next/link"
import { Mail, Menu, Home, Info, Wrench, Phone, Sparkles, Calendar, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { useEffect, useState } from "react"

export default function EnhancedMobileNav() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top - show navbar
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold - hide navbar
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6 }
      }}
      className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[98svw] lg:w-full px-3 sm:px-4 pointer-events-none transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-6xl pointer-events-auto">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-between gap-4 rounded-none bg-white/10 backdrop-blur-md shadow-xl ring-1 ring-white/20 px-4 sm:px-0 md:pl-6 max-lg:py-2 py-0 border border-white/20"
        >
          {/* Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0 hover:scale-105 transition-all duration-300 ease-out"
            >
              <div className="bg-blue-900 text-white px-3 py-2 rounded font-bold text-lg leading-none select-none shadow-lg">
                WC
              </div>
              <span className="text-blue-950/95 font-semibold text-sm tracking-wide hidden sm:inline">WINSPIRE</span>
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={item.href}
                  className={`text-blue-950/95 hover:text-blue-950/95 hover:bg-white/15 px-3 py-2 rounded-xl font-medium transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg ${
                    item.href === "/contact" ? "hover:text-white hover:bg-accent" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
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
              <div className="font-medium text-[13px]">admin@email.com</div>
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
                    <Menu className="h-5 w-5 text-white" />
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
                    style={{ animationDelay: "1s" }}
                  />
                  <div
                    className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl animate-pulse"
                    style={{ animationDelay: "2s" }}
                  />
                </div>

                <SheetHeader className="pb-6">
                  <SheetTitle className="sr-only">Navigation</SheetTitle>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-900 text-white px-3 py-2 rounded font-bold text-lg leading-none select-none shadow-lg">
                      WC
                    </div>
                    <div>
                      <div className="text-white font-semibold text-base tracking-wide">WINSPIRE</div>
                      <div className="text-white/70 text-xs">Professional Services</div>
                    </div>
                  </div>

                  {/* <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-3 shadow-lg">
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <Mail className="h-4 w-4 text-white" />
                      <div>
                        <div className="font-medium">Need assistance?</div>
                        <div className="text-xs text-white/70">admin@email.com</div>
                      </div>
                    </div>
                  </div> */}
                </SheetHeader>

                <div className="space-y-4 px-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-amber-400/20 backdrop-blur-md border border-white/20 px-3 py-1.5 text-xs font-medium shadow-lg">
                    <Sparkles className="h-3.5 w-3.5 text-white" />
                    <span className="text-white">Quick Navigation</span>
                  </div>

                  <nav className="space-y-2">
                    <SheetClose asChild>
                      <Link
                        href="/"
                        className="group flex items-center gap-4 rounded-xl bg-white/8 backdrop-blur-md border border-white/15 p-4 shadow-lg hover:bg-white/15 hover:scale-[1.02] transition-all duration-300 ease-out active:scale-95"
                      >
                        <div className="rounded-lg bg-white/20 p-2">
                          <Home className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-200" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-white">Home</div>
                          <div className="text-xs text-white/60">Welcome page</div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-200" />
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link
                        href="/about"
                        className="group flex items-center gap-4 rounded-xl bg-white/8 backdrop-blur-md border border-white/15 p-4 shadow-lg hover:bg-white/15 hover:scale-[1.02] transition-all duration-300 ease-out active:scale-95"
                      >
                        <div className="rounded-lg bg-white/20 p-2">
                          <Info className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-200" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-white">About Us</div>
                          <div className="text-xs text-white/60">Our story</div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-200" />
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link
                        href="/services"
                        className="group flex items-center gap-4 rounded-xl bg-white/8 backdrop-blur-md border border-white/15 p-4 shadow-lg hover:bg-white/15 hover:scale-[1.02] transition-all duration-300 ease-out active:scale-95"
                      >
                        <div className="rounded-lg bg-white/20 p-2">
                          <Wrench className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-200" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-white">Services</div>
                          <div className="text-xs text-white/60">What we offer</div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-200" />
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link
                        href="/contact"
                        className="group flex items-center gap-4 rounded-xl bg-white/8 backdrop-blur-md border border-white/15 p-4 shadow-lg hover:bg-white/15 hover:scale-[1.02] transition-all duration-300 ease-out active:scale-95"
                      >
                        <div className="rounded-lg bg-white/20 p-2">
                          <Phone className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-200" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-white">Contact</div>
                          <div className="text-xs text-white/60">Get in touch</div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-200" />
                      </Link>
                    </SheetClose>
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
                    <p className="text-center text-xs text-white/60 mt-3">Free 30-minute discovery call</p>
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
