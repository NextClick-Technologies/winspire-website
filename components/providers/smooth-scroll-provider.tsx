'use client'

import { useEffect } from 'react'
import { destroySmoothScroll, initSmoothScroll } from '@/lib/client/smooth-scroll'

/**
 * Provider component to initialize smooth scroll on client side
 * This must be wrapped in a client component and placed early in the component tree
 */
export function SmoothScrollProvider() {
  useEffect(() => {
    const lenis = initSmoothScroll()
    if (!lenis) return

    function raf(time: number) {
      if (lenis) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
    }

    requestAnimationFrame(raf)

    return () => {
      destroySmoothScroll()
    }
  }, [])

  return null
}
