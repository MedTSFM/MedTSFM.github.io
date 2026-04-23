import { Calendar, MapPin, Clock } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden border-b border-border/60">
      {/* Background: Shenyang Imperial Palace with a deep blue academic overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/shenyang/imperial-palace.jpg"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.22_0.06_250)]/82" />
        <div
          className="absolute inset-0 opacity-30"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, oklch(0.22 0.06 250 / 0.7), oklch(0.35 0.12 250 / 0.4))",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32 lg:py-40">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/75">
            MedTSFM — IEEE ICDM 2026
          </p>

          <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.1] tracking-tight text-white md:text-5xl lg:text-[3.75rem]">
            The International Workshop on Medical Time Series Analytics and Foundation Models
          </h1>

          <div className="mt-8 h-px w-20 bg-white/50" aria-hidden />

          <dl className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 opacity-70" aria-hidden />
              <dt className="sr-only">Date</dt>
              <dd>December 2026</dd>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 opacity-70" aria-hidden />
              <dt className="sr-only">Format</dt>
              <dd>Half-day, in-person</dd>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 opacity-70" aria-hidden />
              <dt className="sr-only">Location</dt>
              <dd>Shenyang, China</dd>
            </div>
          </dl>

          <p className="mt-10 max-w-2xl text-pretty text-base leading-relaxed text-white/80 md:text-[17px]">
            A half-day workshop at IEEE ICDM 2026 bringing together researchers, practitioners, and clinicians to
            discuss recent advances, open challenges, and practical opportunities in medical time series modeling and
            healthcare foundation models.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#cfp"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[oklch(0.22_0.06_250)] transition-colors hover:bg-white/90"
            >
              Call for Papers
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-md border border-white/40 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
