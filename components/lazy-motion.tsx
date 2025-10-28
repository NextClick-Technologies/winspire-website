// Create a new file: components/lazy-motion.tsx
'use client'

import dynamic from 'next/dynamic'
import { motion as Motion } from 'framer-motion'

export const motion = {
  div: dynamic(() => import('framer-motion').then(mod => mod.motion.div), {
    ssr: false,
    loading: () => <div />,
  }),
  section: dynamic(() => import('framer-motion').then(mod => mod.motion.section), {
    ssr: false,
    loading: () => <section />,
  }),
  // Add other motion components as needed
}