'use client'

import { BadgeCheck } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import SvgIcon from '../shared/svg-icon'
import { Icons } from '../shared/icons'

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="pointer-events-none absolute -z-10 inset-y-0 right-0 w-1/2 bg-gradient-to-b from-amber-50/60 to-white"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-24">
        {/* Left image with decorative shapes */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative order-2 mt-10 flex items-center justify-center lg:order-1 lg:mt-0 w-full h-auto min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[600px] lg:h-full"
        >
          <div className="relative flex flex-1 w-full h-full max-w-none aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto">
            {/* Soft shapes behind the photo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute right-4/8 top-0 h-24 w-24 rounded-full bg-blue-50" 
              aria-hidden="true" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute right-8 top-1/3 z-20 rotate-0" 
              aria-hidden="true"
            >
              <SvgIcon name={Icons.YELLOW_TRIANGLE} size={100} />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0, rotate: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="absolute right-1/2 translate-x-1/4 translate-y-1/8 mx-auto bottom-0 z-20 w-32 aspect-square" 
              aria-hidden="true"
            >
             <SvgIcon name={Icons.BLUE_TRIANGLE} size={96} />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative w-full h-full p-2 sm:p-3 shadow-none ring-0 ring-slate-200 outline-0 outline-lime-400"
            >
              <Image
                src="/images/about-section-hero-with-svg-banner.png"
                alt="Winspire consultant ready to assist providers"
                fill
                style={{ objectFit: 'contain'}}
                className="rounded-lg sm:rounded-xl object-cover relative z-15 -translate-y-1 sm:-translate-y-2"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-slate-600 shadow-sm ring-1 ring-slate-200"
          >
            About Us
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            <span className="text-amber-500">Winspire</span> is a critical component of{' '}
            <span className="text-amber-500">Consulting</span> businesses
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl text-slate-600"
          >
            Winspire Consultancy provides in‑depth and holistic support services to participants
            with disabilities and providers under the National Disability Insurance Scheme (NDIS).
            We deliver support through direct engagements, collaborations with healthcare providers,
            and referrals from NDIS and Community services.
          </motion.p>

          {/* Vision and Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 grid gap-6 sm:grid-cols-2"
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-none p-0 bg-transparent">
                <CardContent className="p-5">
                  <motion.div 
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="mb-3 inline-flex aspect-square w-16 items-center justify-center bg-[#F8F9FC] text-blue-700 [border-radius:10px_40px_40px_40px]"
                  >
                    <SvgIcon name={Icons.OUR_VISION} size={36} />
                  </motion.div>
                  <h3 className="text-base font-semibold text-slate-900">Our Vision</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Enriching growth for service providers and service users through collaboration and
                    engagement of all stakeholders.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-none p-0 bg-transparent">
                <CardContent className="p-5">
                  <motion.div 
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="mb-3 inline-flex aspect-square w-16 items-center justify-center bg-[#F8F9FC] text-blue-700 [border-radius:10px_40px_40px_40px]"
                  >
                     <SvgIcon name={Icons.OUR_MISSION} size={36} />
                  </motion.div>
                  <h3 className="text-base font-semibold text-slate-900">Our Mission</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Partnering with individuals, service providers and other stakeholders to deliver
                    person‑centred and service‑centred services that promote practical, safe and
                    responsive services.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  )
}
