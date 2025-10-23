'use client'

/**
 * Client-side scroll detection utilities
 * Used for navbar hide/show and scroll-to-top visibility
 */

export function useScrollVisibility(
  threshold: number = 100,
  hiddenThreshold: number = 100
) {
  return {
    isVisible: true,
    shouldHide: false,
    scrollY: 0,
  }
}

export function getScrollDirection(
  currentScrollY: number,
  lastScrollY: number,
  threshold: number = 100
): 'up' | 'down' {
  if (currentScrollY < lastScrollY || currentScrollY < threshold) {
    return 'up'
  }
  return 'down'
}
