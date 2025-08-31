import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  href: string
  label: string
  description?: string
  icon?: LucideIcon
}
