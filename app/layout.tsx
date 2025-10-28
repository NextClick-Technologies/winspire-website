import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/navbar";
import FooterSection from "@/components/sections/footer";
import ScrollToTop from "../components/scroll-to-top";
import SmoothScroll from "../components/smooth-scroll";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
  preload: true,   
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Winspire Consultancy",
  description: "Winspire Consultancy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://rybbit.exactli.io" />
        <link rel="preconnect" href="https://umami.nmcyber.com" />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
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
        <Navbar />
        {children}
        <FooterSection />
        <ScrollToTop />
         <Script
          async
          defer
          src='https://umami.nmcyber.com/script.js'
          data-website-id='042c63bb-33a2-4e27-8ddd-a2a1c448bc59'
        />
          <Script
            src="https://rybbit.exactli.io/api/script.js"
            async
            data-site-id="5"
            data-track-errors="true"
            data-session-replay="true"
            strategy="lazyOnload"
          />
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
