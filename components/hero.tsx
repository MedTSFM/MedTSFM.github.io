import { Calendar, Clock, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden border-b border-border/60 bg-foreground text-white">
      <img
        src="/shenyang/skyline.jpg"
        alt="Shenyang skyline, the host city of IEEE ICDM 2026"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_38%]"
      />
      <div className="absolute inset-0 -z-10 bg-black/35" aria-hidden />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(30,64,132,0.55),rgba(0,0,0,0.04)_45%,rgba(30,64,132,0.45))]"
        aria-hidden
      />

      <div className="mx-auto flex min-h-[500px] max-w-6xl flex-col items-center justify-center px-4 py-16 text-center md:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/90 md:text-base">
          MedTSFM · IEEE ICDM 2026
        </p>

        <h1 className="mt-6 max-w-5xl font-sans text-4xl font-semibold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] md:text-5xl lg:text-[2.75rem]">
          The International Workshop on Medical Time Series Analytics and Foundation Models
        </h1>

        <div className="mt-8 h-px w-24 bg-white/75" aria-hidden />

        <dl className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-medium text-white/92 md:text-base">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-white" aria-hidden />
            <dt className="sr-only">Date</dt>
            <dd>November 2026</dd>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-white" aria-hidden />
            <dt className="sr-only">Format</dt>
            <dd>Half-day, in-person</dd>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-white" aria-hidden />
            <dt className="sr-only">Location</dt>
            <dd>Shenyang, China</dd>
          </div>
        </dl>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#cfp"
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/90"
          >
            Call for Papers
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-md border border-white/70 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/15"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  )
}
