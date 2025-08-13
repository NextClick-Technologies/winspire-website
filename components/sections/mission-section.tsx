import Image from "next/image"

export default function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:grid lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-20">
        {/* Left: Copy */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-slate-600 shadow-sm ring-1 ring-slate-200">
            Our Mission
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Why <span className="text-amber-500">Winspire</span> Consultancy?
          </h2>

          <p className="mt-4 max-w-2xl text-slate-600">
            Based in Western Australia, Winspire Consultancy has supported newly established and existing NDIS providers,
            as well as Community Service providers, for the past two years. Our consulting team brings 7+ years of combined
            experience across compliance and risk analysis, operational advice, internal audit, and manager training.
            We work with providers of different sizes and needs, and we focus on building long‑term relationships that
            continue to deliver value through collaboration.
          </p>
        </div>

        {/* Right: Image Card */}
        <div className="mt-10 lg:col-span-5 lg:mt-0">
          <div className="relative rounded-3xl bg-gradient-to-br from-amber-100 to-amber-50 p-2 shadow-sm ring-1 ring-amber-200">
            <div className="rounded-2xl bg-white p-2">
              <Image
                src="/placeholder.svg?height=360&width=560"
                alt="Team collaborating on NDIS operations and compliance"
                width={560}
                height={360}
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>

            {/* Subtle decorative dots */}
            <div className="pointer-events-none absolute -right-6 -bottom-6 grid h-20 w-20 grid-cols-5 gap-1 opacity-30">
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} className="h-1.5 w-1.5 rounded bg-amber-300" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
