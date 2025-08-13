import { BadgeCheck, Handshake, Target } from 'lucide-react'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-transparent outline-0 outline-blue-600">
      <div
        className="pointer-events-none absolute -z-10 inset-y-0 right-0 w-1/2 bg-gradient-to-b from-amber-50/60 to-white"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-24">
        {/* Left image with decorative shapes */}
        <div className="relative order-2 mt-10 flex items-center justify-center lg:order-1 lg:mt-0 w-full h-auto min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[600px] lg:h-full">
          <div className="relative flex flex-1 w-full h-full max-w-none aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto">
            {/* Soft shapes behind the photo */}
            {/* <div className="absolute -left-12 -top-10 h-24 w-24 rounded-full bg-blue-50" aria-hidden="true" />
            <div className="absolute -right-8 bottom-10 h-20 w-20 rotate-45 rounded-lg bg-amber-400" aria-hidden="true" />
            <div className="absolute -left-6 bottom-0 h-0 w-0 border-l-[36px] border-l-blue-900 border-t-[24px] border-t-transparent border-b-[24px] border-b-transparent rounded-sm" aria-hidden="true" /> */}
            {/* Main person image */}
            {/* <div
              className="w-0 h-0
                     border-l-[100px] border-l-transparent
                     border-r-[100px] border-r-transparent
                     border-b-[173.2px] border-b-blue-500
                     mx-auto fuchsia-300/80" // Center the triangle
              style={{
                // The height of an equilateral triangle with side 's' is s * sqrt(3) / 2
                // If border-left/right is 100px (half of base 's'), then 's' is 200px.
                // Height = 200 * sqrt(3) / 2 = 100 * 1.732 = 173.2px.
                // This ensures it's a true equilateral triangle.
              }}
            ></div> */}
            {/* <div
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'blue',
                clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
              }}
            ></div>
            <div
          className="w-0 h-0
                     border-t-[100px] border-t-transparent
                     border-b-[100px] border-b-transparent
                     border-l-[150px] border-l-red-500
                     mx-auto" // Center the triangle
        ></div> */}
            <div className="relative w-full h-full p-2 sm:p-3 shadow-none ring-0 ring-slate-200 outline-0 outline-lime-400">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="490"
                height="553"
                viewBox="0 0 490 553"
                fill="none"
                className="absolute inset-0 w-full z-10"
                aria-hidden="true"
              >
                <path
                  d="M61.405 547.07L469.607 310.335C496.43 294.778 496.357 256.018 469.469 240.566L60.3521 5.41744C33.4699 -10.0341 -0.0588989 9.41193 0.000335693 40.4203L0.91507 512.297C0.974274 543.305 34.582 562.62 61.405 547.07Z"
                  fill="#246BFD"
                  fill-opacity="0.13"
                />
              </svg> */}
              {/* <div
              className='w-full aspect-square rotate-180 absolute z-10 inset-x-3.5 top-0 bg-blue-500/40'
              style={{
                clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
              }} />
            <div
              className='w-full aspect-square rotate-270 absolute z-10 -right-3.5 bottom-0 bg-blue-500/40'
              style={{
                clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
              }} /> */}
              {/* <div className='bg-amber-600 aspect-square w-4 z-10 mx-auto inset-0 translate-x-13 rounded-full my-auto absolute'/> */}
              <Image
                src="/images/about-section-hero-with-svg-banner.png"
                alt="Winspire consultant ready to assist providers"
                fill
                // width={380}
                // height={520}
                style={{ objectFit: 'contain'}}
                className="rounded-lg sm:rounded-xl object-cover relative z-15 -translate-y-1 sm:-translate-y-2"
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
            <span className="text-amber-500">Winspire</span> is a critical component of{' '}
            <span className="text-amber-500">Consulting</span> businesses
          </h2>

          <p className="mt-4 max-w-2xl text-slate-600">
            Winspire Consultancy provides in‑depth and holistic support services to participants
            with disabilities and providers under the National Disability Insurance Scheme (NDIS).
            We deliver support through direct engagements, collaborations with healthcare providers,
            and referrals from NDIS and Community services.
          </p>

          {/* Vision and Mission */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <div className="mb-3 inline-flex aspect-square w-16 items-center justify-center bg-[#F8F9FC] text-blue-700 [border-radius:10px_40px_40px_40px]">
                <Image src='/icons/our-vision-icon.svg' width={40} height={40} style={{ objectFit: 'contain' }} alt="Bubble Background Icon" className='max-w-10 aspect-square' />
              </div>
              <h3 className="text-base font-semibold text-slate-900">Our Vision</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Enriching growth for service providers and service users through collaboration and
                engagement of all stakeholders.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <div className="mb-3 inline-flex aspect-square w-16 items-center justify-center bg-[#F8F9FC] text-blue-700 [border-radius:10px_40px_40px_40px]">
                <Image src='/icons/our-mission-icon.svg' width={40} height={40} style={{ objectFit: 'contain' }} alt="Bubble Background Icon" className='max-w-10 aspect-square' />
              </div>
              <h3 className="text-base font-semibold text-slate-900">Our Mission</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Partnering with individuals, service providers and other stakeholders to deliver
                person‑centred and service‑centred services that promote practical, safe and
                responsive services.
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
