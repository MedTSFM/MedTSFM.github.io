import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react"
// 引入刚刚创建的 Client Component (请根据您的实际路径调整 import)
import PrintButton from "./PrintButton"

export const metadata: Metadata = {
  title: "Call for Papers · MedTSFM @ IEEE ICDM 2026",
  description:
    "Printable poster for the International Workshop on Medical Time Series Analytics and Foundation Models, co-located with IEEE ICDM 2026 in Shenyang, China.",
}

// URL encoded into the QR code. Change this if the workshop site moves.
const WORKSHOP_URL = "https://medtsfm.github.io/"
const QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=480x480&margin=0&qzone=2&data=${encodeURIComponent(
  WORKSHOP_URL,
)}`

export default function PosterPage() {
  return (
    <main className="min-h-screen bg-secondary/40 py-8 md:py-12 print:bg-background print:py-0">
      {/* Toolbar (hidden in print) */}
      <div className="mx-auto mb-6 flex max-w-5xl items-center justify-between px-4 md:px-6 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to workshop site
        </Link>

        {/* 这里使用抽离出来的客户端组件 */}
        <PrintButton />
      </div>

      {/* Poster sheet */}
      <article className="mx-auto max-w-5xl bg-background px-8 py-10 shadow-sm ring-1 ring-border md:px-14 md:py-14 print:max-w-none print:px-12 print:py-12 print:shadow-none print:ring-0">
        {/* Title */}
        <header>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            IEEE ICDM 2026 · Workshop
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-[1.05] tracking-tight text-primary md:text-[54px] lg:text-[62px]">
            Call for Papers at MedTSFM{" "}
            <span className="text-foreground">(ICDM&rsquo;26 Workshop)</span>
          </h1>

          <p className="mt-5 flex items-baseline gap-3 text-lg md:text-xl">
            <span className="inline-block h-1.5 w-1.5 translate-y-[-3px] rounded-full bg-foreground" aria-hidden />
            <span className="font-medium text-foreground">Deadline:</span>
            <span className="font-semibold text-[var(--accent-red,#c0392b)]" style={{ color: "#c0392b" }}>
              TBA
            </span>
          </p>
        </header>

        {/* Hero image with overlay */}
        <section className="relative mt-8 overflow-hidden rounded-md ring-1 ring-border">
          <div className="relative aspect-[21/10]">
            <img
              src="/shenyang/mukden-palace.jpg"
              alt="Mukden Palace in Shenyang, host city of IEEE ICDM 2026"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Dark wash for legible white text */}
            <div
              className="absolute inset-0"
              aria-hidden
              style={{
                background:
                  "linear-gradient(to bottom, rgba(15, 23, 42, 0.55) 0%, rgba(15, 23, 42, 0.45) 50%, rgba(15, 23, 42, 0.7) 100%)",
              }}
            />
            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
              <h2 className="max-w-3xl font-serif text-2xl leading-snug tracking-tight md:text-[32px] lg:text-[38px]">
                The International Workshop on Medical Time Series Analytics and Foundation Models
              </h2>

              <dl className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" aria-hidden />
                  <dt className="sr-only">Date</dt>
                  <dd>Date: November 2026</dd>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" aria-hidden />
                  <dt className="sr-only">Format</dt>
                  <dd>Format: Half-day</dd>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" aria-hidden />
                  <dt className="sr-only">Place</dt>
                  <dd>Place: Shenyang, China</dd>
                </div>
              </dl>

              <Link
                href="/"
                className="mt-6 inline-flex items-center justify-center rounded-sm bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 print:hidden"
              >
                Read More
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom: QR + About */}
        <section className="mt-10 grid gap-10 md:grid-cols-[180px_1fr] md:gap-14">
          {/* QR */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="rounded-md border border-border bg-background p-3">
              <img
                src={QR_SRC || "/placeholder.svg"}
                alt={`QR code linking to ${WORKSHOP_URL}`}
                className="h-36 w-36"
              />
            </div>
            <a
              href={WORKSHOP_URL}
              className="mt-3 text-base font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
            >
              Workshop Site
            </a>
          </div>

          {/* About */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-5 w-[3px] bg-primary" aria-hidden />
              <h3 className="text-lg font-semibold tracking-tight text-foreground">About</h3>
            </div>
            <div className="mt-4 space-y-4 text-[14.5px] leading-[1.75] text-muted-foreground">
              <p>
                Medical time series analytics — modeling, mining, and interpreting longitudinal physiological and
                clinical data — plays a vital role in modern healthcare. The rapid growth of digital health
                technologies has generated large volumes of heterogeneous time series (EEG, ECG, EMG, ultrasound
                video, clinical notes), bringing new opportunities as well as challenges such as irregular sampling,
                multimodal integration, and privacy constraints. Foundation models and LLMs have recently emerged as a
                promising paradigm for scalable and generalizable solutions to these problems.
              </p>
              <p>
                This half-day workshop at <span className="text-foreground">IEEE ICDM 2026</span> in Shenyang brings
                together researchers, practitioners, and clinicians to discuss recent advances, open challenges, and
                practical opportunities. The program features keynote talks by leading experts, peer-reviewed paper
                presentations, and a panel discussion. Outstanding contributions will be recognized with a{" "}
                <span className="text-foreground">Best Paper Award</span>, and selected papers will be invited for
                extended submission to a special journal issue.
              </p>
            </div>
          </div>
        </section>

        {/* Footer stripe */}
        <footer className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border pt-5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:flex-row md:items-center">
          <span>MedTSFM · IEEE ICDM 2026 Workshop</span>
          <span>Shenyang · China · November 2026</span>
        </footer>
      </article>
    </main>
  )
}
