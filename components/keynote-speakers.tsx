import { SectionHeading } from "./section-heading"
import { Sparkles } from "lucide-react"

export function KeynoteSpeakers() {
  return (
    <section id="keynotes" className="relative isolate overflow-hidden border-t border-border/60">
      <div className="absolute inset-0 -z-10">
        <img
          src="/shenyang/liaoning-tower.jpg"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading
          eyebrow="Keynotes"
          title="Keynote Speakers"
          description="We are committed to inviting distinguished experts from around the globe with prestigious experience in time series analytics and AI for Health."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Coming soon cards — keep two placeholders to match the 2 keynotes mentioned in the proposal */}
          {[1, 2].map((i) => (
            <div
              key={i}
              className="group relative flex items-center gap-5 overflow-hidden rounded-[10px] border-2 border-dashed border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex h-20 w-20 flex-none items-center justify-center rounded-full border border-border bg-muted">
                <Sparkles className="h-6 w-6 text-muted-foreground" aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium uppercase tracking-widest text-accent">Keynote #{i}</p>
                <h3 className="mt-1 font-serif text-2xl text-foreground">Coming soon</h3>
                <p className="mt-1 text-sm text-muted-foreground">Speaker announcement to be released.</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          More speakers will be announced soon. Stay tuned for updates.
        </p>
      </div>
    </section>
  )
}
