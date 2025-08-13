import { GeistMono } from 'geist/font/mono'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import ScrollToTop from '../components/scroll-to-top'
import SmoothScroll from '../components/smooth-scroll'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${plusJakartaSans.style.fontFamily};
  --font-sans: ${plusJakartaSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className={`${plusJakartaSans.className}`}>
        <SmoothScroll />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
