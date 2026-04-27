import { SectionHeading } from "./section-heading"

export function About() {
  return (
    <section id="about" className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading eyebrow="About" title="About the workshop" />

        <div className="mt-14 grid gap-12 md:grid-cols-5">
          <div className="space-y-5 text-pretty text-[15.5px] leading-[1.75] text-muted-foreground md:col-span-3 md:text-[17px]">
            <p>
              Medical time series analytics, including modeling, mining, and interpreting longitudinal physiological
              and clinical data, plays a vital role in modern health applications. The rapid growth of digital health
              technologies has generated large volumes of heterogeneous time series data, bringing new opportunities as
              well as challenges such as irregular temporal sampling, multimodal integration, and privacy constraints.
            </p>
            <p>
              Recently, <span className="text-foreground">foundation models</span>, including large language models and
              multimodal pre-trained models, have emerged as a promising paradigm for addressing these challenges by
              enabling more generalizable and scalable solutions across diverse healthcare tasks.
            </p>
            <p>
              This half-day workshop at <span className="text-foreground">IEEE ICDM 2026</span> brings together
              researchers, practitioners, and clinicians to discuss recent advances, open challenges, and practical
              opportunities. The program features keynote talks by leading experts, peer-reviewed paper presentations,
              and a panel discussion.
            </p>
          </div>

          <aside className="space-y-5 md:col-span-2">
            <figure className="overflow-hidden rounded-md border border-border bg-card">
              <img
                src="/shenyang/mukden-palace.jpg"
                alt="Mukden Palace in Shenyang, the host city of ICDM 2026"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="flex items-center justify-between border-t border-border px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <span>Host city</span>
                <span className="text-foreground/80">Shenyang</span>
              </figcaption>
            </figure>
          </aside>
        </div>
      </div>
    </section>
  )
}
