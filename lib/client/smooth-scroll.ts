import Lenis from 'lenis'

// Global Lenis instance
let lenis: Lenis | null = null

export const initSmoothScroll = () => {
  if (typeof window === 'undefined') return null

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  })

  return lenis
}

export const getSmoothScrollInstance = () => lenis

export const scrollTo = (
  target: string | number,
  options?: { offset?: number; duration?: number }
) => {
  if (!lenis) return

  if (typeof target === 'string') {
    const element = document.querySelector(target) as HTMLElement
    if (element) {
      lenis.scrollTo(element, {
        offset: options?.offset || 0,
        duration: options?.duration,
      })
    }
  } else {
    lenis.scrollTo(target, {
      duration: options?.duration,
    })
  }
}

export const scrollToTop = (duration?: number) => {
  scrollTo(0, { duration })
}

export const scrollToBottom = (duration?: number) => {
  if (!lenis) return
  scrollTo(document.body.scrollHeight, { duration })
}

export const destroySmoothScroll = () => {
  if (lenis) {
    lenis.destroy()
    lenis = null
  }
}
