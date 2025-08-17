"use client"

import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"
import { scrollToTop } from "../lib/smooth-scroll"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const handleScrollToTop = () => {
    scrollToTop(3) // Very fast 0.05 second duration for instant feel
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 hover:cursor-pointer"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}
