'use client'

import { ArrowRight } from 'lucide-react'

import Link from 'next/link'
import type React from 'react'
import { SheetClose } from '@/components/ui/sheet'
import type { NavItem } from '../types/navigation'

interface MobileNavItemProps {
  item: NavItem
}

export function MobileNavItem({ item }: MobileNavItemProps) {
  const Icon = item.icon

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = item.href.replace('#', '')
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Close the mobile menu first, then scroll
      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 300) // Small delay to allow sheet to close
    }
  }

  return (
    <SheetClose asChild>
      <Link
        href={item.href}
        onClick={handleClick}
        className="group flex items-center gap-4 rounded-xl bg-white/8 backdrop-blur-md border border-white/15 p-4 shadow-lg hover:bg-white/15 hover:scale-[1.02] transition-all duration-300 ease-out active:scale-95"
      >
        <div className="rounded-lg bg-white/20 p-2">
          {Icon && (
            <Icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-200" />
          )}
        </div>
        <div className="flex-1">
          <div className="font-medium text-white">{item.label}</div>
          {item.description && <div className="text-xs text-white/60">{item.description}</div>}
        </div>
        <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-200" />
      </Link>
    </SheetClose>
  )
}
