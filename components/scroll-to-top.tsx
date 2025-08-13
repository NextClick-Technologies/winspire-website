'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { scrollToTop } from '../lib/smooth-scroll'

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

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleScrollToTop = () => {
    scrollToTop(1000) // 1 second duration
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}
