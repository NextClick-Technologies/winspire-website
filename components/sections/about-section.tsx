import Image from "next/image"
import { BadgeCheck, Handshake, Target } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-b from-amber-50/60 to-white" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-24">
        {/* Left image with decorative shapes */}
        <div className="relative order-2 mt-10 flex items-center justify-center lg:order-1 lg:mt-0">
          <div className="relative">
            {/* Soft shapes behind the photo */}
            <div className="absolute -left-12 -top-10 h-24 w-24 rounded-full bg-blue-50" aria-hidden="true" />
            <div className="absolute -right-8 bottom-10 h-20 w-20 rotate-45 rounded-lg bg-amber-400" aria-hidden="true" />
            <div className="absolute -left-6 bottom-0 h-0 w-0 border-l-[36px] border-l-blue-900 border-t-[24px] border-t-transparent border-b-[24px] border-b-transparent rounded-sm" aria-hidden="true" />
            {/* Main person image */}
            <div className="relative rounded-2xl bg-white/80 p-3 shadow-sm ring-1 ring-slate-200">
              <Image
                src="/placeholder.svg?height=520&width=380"
                alt="Winspire consultant ready to assist providers"
                width={380}
                height={520}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-slate-600 shadow-sm ring-1 ring-slate-200">
            About Us
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            <span className="text-amber-500">Winspire</span>{" "}
            is a critical component of <span className="text-amber-500">Consulting</span> businesses
          </h2>

          <p className="mt-4 max-w-2xl text-slate-600">
            Winspire Consultancy provides in‑depth and holistic support services to participants with disabilities and
            providers under the National Disability Insurance Scheme (NDIS). We deliver support through direct
            engagements, collaborations with healthcare providers, and referrals from NDIS and Community services.
          </p>

          {/* Vision and Mission */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">Our Vision</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Enriching growth for service providers and service users through collaboration and engagement of all
                stakeholders.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <Handshake className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">Our Mission</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Partnering with individuals, service providers and other stakeholders to deliver person‑centred and
                service‑centred services that promote practical, safe and responsive services.
              </p>
            </div>
          </div>

          {/* Small trust row */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-blue-700" /> 7+ years combined expertise
            </span>
            <span className="inline-flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-blue-700" /> Based in Western Australia
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
