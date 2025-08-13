"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import { useState } from "react"

export default function FooterSection() {
  const [email, setEmail] = useState("")

  function onSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Demo only — replace with your submit handler or server action
    alert(`Thanks! We'll keep you posted at: ${email}`)
    setEmail("")
  }

  return (
    <footer className="mt-0 bg-white">
      {/* Newsletter Bar */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-12">
          <div className="relative -mb-16 rounded-2xl bg-amber-400 px-6 py-8 shadow-sm ring-1 ring-amber-300 sm:px-8">
            <div className="grid items-center gap-6 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h3 className="text-2xl font-semibold text-blue-950">
                  Subscribe To Our Newsletter
                </h3>
              </div>
              <form onSubmit={onSubscribe} className="lg:col-span-6">
                <div className="flex w-full overflow-hidden rounded-xl bg-white ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-blue-700">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Your e-mail address
                  </label>
                  <Input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="Your e-mail address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 border-0 focus-visible:ring-0"
                  />
                  <Button type="submit" className="h-12 rounded-none rounded-r-xl bg-blue-900 px-6 text-white hover:bg-blue-800">
                    Submit Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-blue-900 pt-24 text-blue-50">
        <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <div className="mb-4 inline-flex items-center space-x-2">
                <div className="rounded bg-white px-3 py-2 font-bold text-blue-900">WC</div>
                <span className="text-white/90">WINSPIRE</span>
              </div>
              <p className="max-w-sm text-blue-100/80">
                We pride ourselves on high‑quality service and continuous engagement through clear, regular communication.
              </p>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-amber-300" />
                  <a href="tel:+6123456765" className="hover:underline">
                    (+123) 123 456 765
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-amber-300" />
                  <a href="mailto:info@winspire.com" className="hover:underline">
                    info@winspire.com
                  </a>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <a href="#" aria-label="Facebook" className="rounded bg-white/10 p-2 hover:bg-white/20">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" aria-label="Twitter" className="rounded bg-white/10 p-2 hover:bg-white/20">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" aria-label="Instagram" className="rounded bg-white/10 p-2 hover:bg-white/20">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" aria-label="LinkedIn" className="rounded bg-white/10 p-2 hover:bg-white/20">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Links: Our Services */}
            <div className="lg:col-span-3">
              <h4 className="mb-4 font-semibold text-white">Our services</h4>
              <ul className="space-y-3 text-sm text-blue-100/90">
                {[
                  "Operational planning and advice",
                  "Compliance and Risk Analysis",
                  "Internal and external incident report reviews",
                  "End year reporting and support planning",
                  "NDIS audit preparation (Desktop)",
                  "NDIS Certification audit (Stage 2)",
                  "Follow‑up review (offsite)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 text-amber-300" />
                    <a href="#" className="hover:underline">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links: Other */}
            <div className="lg:col-span-2">
              <h4 className="mb-4 font-semibold text-white">Other</h4>
              <ul className="space-y-3 text-sm text-blue-100/90">
                {["About", "Our Mission", "Resources", "FAQs", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent blog */}
            <div className="lg:col-span-3">
              <h4 className="mb-4 font-semibold text-white">Recent blog</h4>
              <div className="space-y-5">
                {[1, 2].map((i) => (
                  <a key={i} href="#" className="group flex gap-4 rounded-lg p-2 hover:bg-white/5">
                    <div className="overflow-hidden rounded bg-white">
                      <Image
                        src="/placeholder.svg?height=60&width=80"
                        alt="Blog thumbnail"
                        width={80}
                        height={60}
                        className="h-[60px] w-[80px] object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs text-blue-200">June 19, 2025</div>
                      <div className="font-medium text-blue-50 group-hover:underline">
                        The standard chunk of Lorem Ipsum
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-blue-100/80 lg:flex-row lg:px-12">
            <div>© 2025 | All Rights Reserved</div>
            <div className="flex gap-6">
              <a href="#" className="hover:underline">Terms & Conditions</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
