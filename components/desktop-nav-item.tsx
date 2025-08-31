'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { NavItem } from '../types/navigation'

interface DesktopNavItemProps {
  item: NavItem
  index: number
}

export function DesktopNavItem({ item, index }: DesktopNavItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = item.href.replace('#', '')
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
      whileHover={{ y: -2 }}
    >
      <Link
        href={item.href}
        onClick={handleClick}
        className={`text-blue-950/95 hover:text-tertiary-background px-3 py-2 rounded-xl font-medium transition-all duration-50 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-accent-secondary`}
      >
        {item.label}
      </Link>
    </motion.div>
  )
}
