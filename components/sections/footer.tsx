'use client'

import { ArrowRight, Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function FooterSection() {
  const [email, setEmail] = useState('')

  function onSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Demo only — replace with your submit handler or server action
    alert(`Thanks! We'll keep you posted at: ${email}`)
    setEmail('')
  }

  return (
    <footer className="mt-0 bg-white">
      {/* Newsletter Bar */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative -mb-16 rounded-2xl bg-amber-400 px-6 py-8 shadow-sm ring-1 ring-amber-300 sm:px-8"
          >
            <div className="grid items-center gap-6 lg:grid-cols-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-6"
              >
                <h3 className="text-2xl font-semibold text-blue-950">
                  Subscribe To Our Newsletter
                </h3>
              </motion.div>
              <motion.form 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                onSubmit={onSubscribe} 
                className="lg:col-span-6"
              >
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
                  <Button
                    type="submit"
                    className="h-12 rounded-none rounded-r-xl bg-blue-900 px-6 text-white hover:bg-blue-800"
                  >
                    Submit Now
                  </Button>
                </div>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-blue-900 pt-24 text-blue-50">
        <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-10">
            {/* Brand */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="mb-4 inline-flex items-center space-x-2">
                <div className="rounded bg-white px-3 py-2 font-bold text-blue-900">WC</div>
                <span className="text-white/90">WINSPIRE</span>
              </div>
              <p className="max-w-sm text-blue-100/80">
                We pride ourselves on high‑quality service and continuous engagement through clear,
                regular communication.
              </p>

              <div className="mt-4 space-y-2 text-sm">
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <Phone className="h-4 w-4 text-amber-300" />
                  <a href="tel:+6123456765" className="hover:underline">
                    (+123) 123 456 765
                  </a>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4 text-amber-300" />
                  <a href="mailto:info@winspire.com" className="hover:underline">
                    info@winspire.com
                  </a>
                </motion.div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                {[
                  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
                  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
                  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
                  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
                ].map(({ href, label, icon: Icon }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="rounded bg-white/10 p-2 hover:bg-white/20"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links: Our Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <h4 className="mb-4 font-semibold text-white">Our Services</h4>
              <ul className="space-y-3 text-sm text-blue-100/90">
                {[
                  'Operational planning and advice',
                  'Compliance and Risk Analysis',
                  'Internal and external incident report reviews',
                  'End year reporting and support planning',
                  'NDIS audit preparation (Desktop)',
                  'NDIS Certification audit (Stage 2)',
                  'Follow‑up review (offsite)',
                ].map((item, index) => (
                  <motion.li 
                    key={item} 
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="mt-0.5 h-4 w-4 text-amber-300" />
                    <span className="hover:underline cursor-pointer">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Links: Quick Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3 text-sm text-blue-100/90">
                {['About', 'Our Mission', 'Resources', 'FAQs', 'Contact'].map((item, index) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <a
                      href={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="hover:underline"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-blue-100/80 lg:flex-row lg:px-12"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              © 2025 | All Rights Reserved
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              {['Terms & Conditions', 'Privacy Policy', 'Contact Us'].map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href={`/${item.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`} 
                    className="hover:text-secondary-gold hover:scale-105 transition-all duration-300"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
