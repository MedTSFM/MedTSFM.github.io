import { Calendar, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="px-4 pt-6 md:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-b-2xl shadow-lg">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/shenyang/imperial-palace.jpg"
            alt="Shenyang Imperial Palace at golden hour"
            className="h-full w-full object-cover"
          />
          {/* Dark gradient for readable white text */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/65 to-primary/60" />
        </div>

        <div className="px-6 py-20 md:px-14 md:py-28 lg:py-32">
          <div className="max-w-3xl text-white">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              MedTSFM @ IEEE ICDM 2026
            </div>

            <h1 className="font-serif text-balance text-4xl leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
              The International Workshop on Medical Time Series Analytics and Foundation Models
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/90 md:text-lg">
              A half-day workshop bringing together researchers, practitioners, and clinicians to discuss recent
              advances, open challenges, and practical opportunities in medical time series modeling and healthcare
              foundation models.
            </p>

            <dl className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/95">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" aria-hidden />
                <dt className="sr-only">Date</dt>
                <dd className="font-medium">December 2026</dd>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden />
                <dt className="sr-only">Location</dt>
                <dd className="font-medium">Shenyang, China</dd>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-white" aria-hidden />
                <dd className="font-medium">Half-day · In-person</dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#cfp"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                Call for Papers
              </a>
              <a
                href="#schedule"
                className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                View Schedule
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
