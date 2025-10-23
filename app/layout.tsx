import { GeistMono } from 'geist/font/mono'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'

import { NavbarClient } from '@/components/client/navbar-client'
import { ScrollToTopClient } from '@/components/client/scroll-to-top-client'
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { baseMetadata, SITE_NAME, SITE_DESCRIPTION } from '@/lib/server/metadata'
import { ANALYTICS_SCRIPT_URL, ANALYTICS_WEBSITE_ID } from '@/lib/server/constants'

import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  ...baseMetadata,
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
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
        <Script
          async
          defer
          src={ANALYTICS_SCRIPT_URL}
          data-website-id={ANALYTICS_WEBSITE_ID}
        />
      </head>
      <body className={`${plusJakartaSans.className}`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SmoothScrollProvider />
          <NavbarClient />
          {children}
          <ScrollToTopClient />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
