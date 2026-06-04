import { SectionHeading } from "./section-heading"

export function About() {
  return (
    <section id="about" className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <SectionHeading eyebrow="About" title="About the Workshop" />

        <div className="mt-10 grid gap-8 md:grid-cols-5 md:items-stretch">
          <div className="space-y-4 text-pretty text-justify text-base leading-[1.75] text-muted-foreground hyphens-auto md:col-span-3 md:text-[18px]">
            <p>
              Medical time series analytics plays a vital role in clinical decision support, early warning, and
              continuous patient monitoring. The rapid growth of digital health technologies has generated large
              volumes of heterogeneous physiological and clinical signals, raising challenges in irregular sampling,
              multimodal integration, scalability, and privacy.
            </p>
            <p>
              Recently, <span className="text-foreground">foundation models</span>, including large language models and
              multimodal pre-trained models, offer a promising route toward more generalizable and scalable healthcare
              intelligence. This half-day workshop at <span className="text-foreground">IEEE ICDM 2026</span> brings
              together researchers, practitioners, and clinicians to discuss recent advances, open challenges, and
              practical paths for trustworthy medical foundation models.
            </p>
          </div>

          <aside className="md:col-span-2 md:h-full">
            <figure className="overflow-hidden rounded-md border border-border bg-card md:flex md:h-full md:flex-col">
              <div className="relative aspect-[4/3] md:aspect-auto md:flex-1">
                <img
                  src="/shenyang/mukden-palace.jpg"
                  alt="Mukden Palace in Shenyang, the host city of ICDM 2026"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <figcaption className="flex items-center justify-between border-t border-border px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <span>Host City</span>
                <span className="text-foreground/80">Shenyang</span>
              </figcaption>
            </figure>
          </aside>
        </div>
      </div>
    </section>
  )
}
