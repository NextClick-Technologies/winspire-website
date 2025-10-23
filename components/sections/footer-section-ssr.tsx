'use client';
import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/lib/icons'
import SvgIcon from '@/components/shared/svg-icon'

export function FooterSectionSSR() {
  return (
    <footer id="contact" className="mt-0 bg-white">
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
                action="#"
                className="lg:col-span-6"
              >
                <div className="flex w-full overflow-hidden rounded-xl bg-white ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-blue-700">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Your e-mail address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="Your e-mail address"
                    className="flex-1 h-12 border-0 px-4 focus:ring-0 focus:outline-none"
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
                <SvgIcon name={Icons.LOGO} size={{ width: 124, height: 36 }} />
              </div>
              <p className="max-w-sm text-blue-100/80">
                We pride ourselves on high‑quality service and continuous engagement through clear,
                regular communication.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-blue-100/80">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-blue-100/80">
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Compliance
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Audit Preparation
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Operations
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-blue-100/80">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:admin@winspireconsultancy.com.au"
                    className="hover:text-white transition-colors"
                  >
                    admin@winspireconsultancy.com.au
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+61123456789" className="hover:text-white transition-colors">
                    +61 (0) 123 456 789
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="my-8 border-t border-blue-800 origin-left"
          />

          {/* Social & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
          >
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/winspire-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100/60 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/winspireconsultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100/60 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/winspireconsultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100/60 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/winspireconsultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-blue-100/60">
              &copy; {new Date().getFullYear()} Winspire Consultancy. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSectionSSR
