'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function MissionSection() {
  return (
    <section className="relative overflow-hidden z-0">
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:grid lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-20">
        {/* Left: Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-7 z-30"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-slate-600 shadow-sm ring-1 ring-slate-200"
          >
            Our Mission
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
          >
            Why <span className="text-amber-500">Winspire</span> Consultancy?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl text-slate-600"
          >
            Based in Western Australia, Winspire Consultancy has supported newly established and
            existing NDIS providers, as well as Community Service providers, for the past two years.
            Our consulting team brings 7+ years of combined experience across compliance and risk
            analysis, operational advice, internal audit, and manager training. We work with
            providers of different sizes and needs, and we focus on building long‑term relationships
            that continue to deliver value through collaboration.
          </motion.p>
        </motion.div>

        {/* Right: Image Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 lg:col-span-5 lg:mt-0 z-30"
        >
          <motion.div 
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-3xl bg-gradient-to-b from-amber-200 to-[#F8F9FC] via-80% via-[#F8F9FC] pt-4 px-5 shadow-none ring-0 ring-amber-200"
          >
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/our-mission.webp"
                alt="Team collaborating on NDIS operations and compliance"
                width={560}
                height={360}
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>

            {/* Subtle decorative dots */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="pointer-events-none absolute -right-6 -bottom-6 grid h-20 w-20 grid-cols-5 gap-1 opacity-30"
            >
              {Array.from({ length: 25 }).map((_, i) => (
                <motion.span
                  key={`mission-dot-${i}-${Math.floor(i / 5)}-${i % 5}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + (i * 0.02) }}
                  viewport={{ once: true }}
                  className="h-1.5 w-1.5 rounded bg-amber-300"
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='z-20 bg-tertiary/80 absolute inset-0'
      />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Image 
          src={'/icons/tron-legacy-image.svg'} 
          alt='Tron Legacy Image' 
          width={600} 
          height={1200} 
          style={{ objectFit: 'cover'}} 
          className='absolute bottom-0 -right-20 z-10' 
        />
      </motion.div>
    </section>
  )
}
