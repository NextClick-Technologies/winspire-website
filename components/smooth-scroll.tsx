'use client'

import { useEffect } from 'react'
import { destroySmoothScroll, initSmoothScroll } from '../lib/smooth-scroll'

export default function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = initSmoothScroll()

    if (!lenis) return

    // Listen for the scroll event and update the progress
    lenis.on('scroll', () => {
      // You can add custom scroll event handling here if needed
    })

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      if (lenis) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
    }

    requestAnimationFrame(raf)

    // Cleanup function
    return () => {
      destroySmoothScroll()
    }
  }, [])

  return null // This component doesn't render anything
}
