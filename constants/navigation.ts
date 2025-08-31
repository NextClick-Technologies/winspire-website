import { Home, Info, Phone, Wrench } from 'lucide-react'
import type { NavItem } from '../types/navigation'

export const navigationItems: NavItem[] = [
  {
    href: '#hero',
    label: 'Home',
    description: 'Welcome page',
    icon: Home,
  },
  {
    href: '#about',
    label: 'About Us',
    description: 'Our story',
    icon: Info,
  },
  {
    href: '#services',
    label: 'Services',
    description: 'What we offer',
    icon: Wrench,
  },
  {
    href: '#contact',
    label: 'Contact',
    description: 'Get in touch',
    icon: Phone,
  },
]
