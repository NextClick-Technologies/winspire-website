import {
  BadgeCheck,
  CalendarClock,
  ClipboardCheck,
  ClipboardList,
  FileSearch,
  RefreshCcw,
  ShieldCheck,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

type Service = {
  title: string
  icon: React.ElementType
  multiline?: string[]
}

const topRow: Service[] = [
  { title: 'Operational planning and advice', icon: ClipboardList },
  { title: 'Compliance and Risk Analysis', icon: ShieldCheck },
  { title: 'Review- Internal and external incident reports', icon: FileSearch },
  { title: 'End year reporting and support planning', icon: CalendarClock },
]

const bottomRow: Service[] = [
  { title: 'NDIS audit preparation- Desktop assessment', icon: ClipboardCheck },
  { title: 'NDIS Certification audit (Stage 2)- Combined onsite and offsite', icon: BadgeCheck },
  { title: 'Follow- up review(offsite)', icon: RefreshCcw },
]

function ServiceCard({ item }: { item: Service }) {
  const Icon = item.icon
  return (
    <Card className="rounded-2xl border-slate-200 bg-white h-full shadow-sm transition hover:shadow-md">
      <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:p-8">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-700">
          <Icon className="h-6 w-6" aria-hidden="true" />
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
      className="relative bg-transparent outline-0 outline-amber-500"
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
      <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-12">
        {/* Row 1: 4 cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topRow.map((s) => (
            <ServiceCard key={s.title} item={s} />
          ))}
        </div>

        {/* Row 2: 3 cards, centered on large screens */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:justify-items-center">
          {bottomRow.map((s) => (
            <div key={s.title} className="w-full outline-0 outline-lime-600">
              <ServiceCard item={s} />
            </div>
          ))}
        </div>
      </div>

      {/* Subtle backdrop divider */}
      {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-slate-50" aria-hidden="true" /> */}
    </section>
  )
}
