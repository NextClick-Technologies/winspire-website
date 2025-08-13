'use client'

import { useCallback } from 'react'
import {
  getSmoothScrollInstance,
  scrollTo,
  scrollToBottom,
  scrollToTop,
} from '../lib/smooth-scroll'

export const useSmoothScroll = () => {
  const scrollToElement = useCallback(
    (target: string | number, options?: { offset?: number; duration?: number }) => {
      scrollTo(target, options)
    },
    []
  )

  const scrollToTopSmooth = useCallback((duration?: number) => {
    scrollToTop(duration)
  }, [])

  const scrollToBottomSmooth = useCallback((duration?: number) => {
    scrollToBottom(duration)
  }, [])

  const getLenisInstance = useCallback(() => {
    return getSmoothScrollInstance()
  }, [])

  return {
    scrollTo: scrollToElement,
    scrollToTop: scrollToTopSmooth,
    scrollToBottom: scrollToBottomSmooth,
    getLenisInstance,
  }
}
