import {
  ClipboardCheck,
  ShieldCheck,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SvgIcon, Icons } from '@/components/ui/icons'

type Service = {
  title: string
  icon?: React.ElementType
  customIcon?: keyof typeof Icons
  multiline?: string[]
}

const topRow: Service[] = [
  { title: 'Operational planning and advice', customIcon: 'ADVICE' },
  { title: 'Compliance and Risk Analysis', customIcon: 'IDENTIFICATION' },
  { title: 'Review- Internal and external incident reports', customIcon: 'PERFORMANCE_REVIEW' },
  { title: 'End year reporting and support planning', customIcon: 'CALENDAR' },
]

const bottomRow: Service[] = [
  { title: 'NDIS audit preparation- Desktop assessment', customIcon: 'FRAME' },
  { title: 'NDIS Certification audit (Stage 2)- Combined onsite and offsite', customIcon: 'INTERNET' },
  { title: 'Follow- up review(offsite)', customIcon: 'SATISFACTION' },
]

function ServiceCard({ item }: { item: Service }) {
  return (
    <Card className="rounded-2xl border-slate-200 bg-white h-full shadow-lg transition hover:shadow-md">
      <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:p-8">
        <span className="inline-flex aspect-square w-18 items-center justify-center rounded-full bg-blue-50 text-primary">
          {item.customIcon ? (
            <SvgIcon 
              name={Icons[item.customIcon]} 
              size={52}
              className="p-1"
            />
          ) : item.icon ? (
            <item.icon className="h-6 w-6" aria-hidden="true" />
          ) : null}
        </span>
        <h3 className="text-base font-semibold leading-snug text-slate-900">{item.title}</h3>
      </CardContent>
    </Card>
  )
}

export default function ServicesSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className="relative bg-transparent outline outline-amber-500"
    >
      {/* Top copy */}
      <div className="mx-auto max-w-5xl px-6 py-16 text-center lg:py-20">
        <div className="mx-auto mb-4 inline-flex items-center rounded-full bg-slate-50 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-slate-600 ring-1 ring-slate-200">
          Our Services
        </div>
        <h2 id="services-heading" className="text-3xl font-bold text-slate-900 sm:text-4xl">
          The <span className="text-amber-500">Services</span> We Offer
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-slate-600">
          We are a small family‑owned company, proud to provide high‑quality service and continuous
          engagement through regular communication with our clients.
        </p>
        <p className="mx-auto mt-2 max-w-4xl text-slate-600">
          The NDIS and Community Services space is multi‑layered and can feel overwhelming. Winspire
          Consultancy supports, strengthens, and builds capacity for both participants and
          providers.
        </p>
      </div>

      {/* Grid */}
      <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-12 z-10">
        {/* Decorative elements */}
        <div className="absolute -top-8 right-8 z-0">
          <SvgIcon 
            name={Icons.OUR_MISSION}
            size={64}
            className="opacity-10 rotate-12"
          />
        </div>
        <div className="absolute top-1/3 -left-4 z-0">
          <SvgIcon 
            name={Icons.BUBBLE_BG}
            size={48}
            className="opacity-20"
          />
        </div>

        {/* Row 1: 4 cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topRow.map((s) => (
            <ServiceCard key={s.title} item={s} />
          ))}
        </div>

        {/* Row 2: 3 cards, centered on large screens */}
        <div className="mt-6 lg:max-w-10/12 mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:justify-items-center">
          {bottomRow.map((s) => (
            <div key={s.title} className="w-full outline-0 outline-lime-600">
              <ServiceCard item={s} />
            </div>
          ))}
        </div>
      </div>

      {/* Subtle backdrop divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 translate-y-1/6 outline-0 outline-fuchsia-600 bg-slate-50 z-0" aria-hidden="true">
        <SvgIcon 
          name={Icons.LIGHT_BULB}
          size={84}
          className='absolute -top-1/12 left-6 z-30'
        />
        {/* Additional decorative elements */}
        <SvgIcon 
          name={Icons.BLUE_TRIANGLE}
          size={56}
          className='absolute top-8 right-12 z-10 opacity-30'
        />
        <SvgIcon 
          name={Icons.YELLOW_TRIANGLE}
          size={72}
          className='absolute bottom-16 right-1/4 z-10 opacity-20 rotate-45'
        />
        <SvgIcon 
          name={Icons.OUR_VISION}
          size={96}
          className='absolute top-1/4 left-1/3 z-5 opacity-10'
        />
      </div>
    </section>
  )
}
