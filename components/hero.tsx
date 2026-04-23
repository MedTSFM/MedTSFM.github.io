import { Calendar, MapPin, Clock } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative border-b border-border/60 bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 px-4 md:grid-cols-12 md:px-6">
        {/* Left: copy */}
        <div className="md:col-span-7 md:pr-10 lg:pr-14 py-20 md:py-28 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            MedTSFM · IEEE ICDM 2026
          </p>

          <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
            The International Workshop on Medical Time Series Analytics and Foundation Models
          </h1>

          <div className="mt-8 h-px w-20 bg-border" aria-hidden />

          <dl className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" aria-hidden />
              <dt className="sr-only">Date</dt>
              <dd>December 2026</dd>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" aria-hidden />
              <dt className="sr-only">Format</dt>
              <dd>Half-day, in-person</dd>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" aria-hidden />
              <dt className="sr-only">Location</dt>
              <dd>Shenyang, China</dd>
            </div>
          </dl>

          <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-[17px]">
            A half-day workshop at IEEE ICDM 2026 bringing together researchers, practitioners, and clinicians to
            discuss recent advances, open challenges, and practical opportunities in medical time series modeling and
            healthcare foundation models.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#cfp"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Call for Papers
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Read more
            </a>
          </div>
        </div>

        {/* Right: Shenyang photo, clearly visible */}
        <div className="relative md:col-span-5 md:-mr-4 lg:-mr-6">
          <div className="relative h-64 overflow-hidden border-t border-border/60 md:h-full md:border-l md:border-t-0">
            <img
              src="/shenyang/imperial-palace.jpg"
              alt="Shenyang Imperial Palace (Mukden Palace), the host city of IEEE ICDM 2026"
              className="h-full w-full object-cover"
            />
            {/* Very subtle wash to harmonize with page tone; image still clearly readable */}
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
              style={{
                background:
                  "linear-gradient(to left, rgba(255,255,255,0) 60%, rgba(255,255,255,0.35) 100%)",
              }}
            />
            <figcaption className="absolute bottom-3 right-3 rounded-sm bg-background/90 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground backdrop-blur-sm">
              Shenyang · Mukden Palace
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  )
}
