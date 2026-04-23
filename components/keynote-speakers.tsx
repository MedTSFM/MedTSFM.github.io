import { SectionHeading } from "./section-heading"

export function KeynoteSpeakers() {
  return (
    <section id="keynotes" className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading
          eyebrow="Keynotes"
          title="Keynote speakers"
          description="We are committed to inviting distinguished experts from around the globe with prestigious experience in time series analytics and AI for health."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-start gap-6">
              <div className="flex h-24 w-24 flex-none items-center justify-center rounded-full border border-dashed border-border bg-secondary text-muted-foreground">
                <span className="font-serif text-xl">{i}</span>
              </div>
              <div className="min-w-0 pt-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Keynote #{i}</p>
                <h3 className="mt-2 font-serif text-2xl text-foreground">To be announced</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  Speaker and talk title will be released shortly. More invited speakers are coming soon.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
