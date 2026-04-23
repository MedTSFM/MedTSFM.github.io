import { SectionHeading } from "./section-heading"

export function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden border-t border-border/60">
      <div className="absolute inset-0 -z-10">
        <img
          src="/shenyang/mukden-palace.jpg"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading eyebrow="About" title="About the Workshop" />

        <div className="mt-10 grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3 space-y-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-[17px]">
            <p>
              Medical time series analytics — modeling, mining, and interpreting longitudinal physiological and clinical
              data — plays a vital role in modern health applications. The rapid growth of digital health technologies
              has generated large volumes of heterogeneous time series data, bringing new opportunities as well as
              challenges such as irregular temporal sampling, multimodal integration, and privacy constraints.
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

          <aside className="md:col-span-2">
            <div className="academic-card p-6">
              <h3 className="font-serif text-2xl text-foreground">At a glance</h3>
              <dl className="mt-5 divide-y divide-border text-sm">
                <div className="flex items-center justify-between py-3">
                  <dt className="text-muted-foreground">Format</dt>
                  <dd className="font-medium text-foreground">Half-day · In-person</dd>
                </div>
                <div className="flex items-center justify-between py-3">
                  <dt className="text-muted-foreground">Keynotes</dt>
                  <dd className="font-medium text-foreground">2</dd>
                </div>
                <div className="flex items-center justify-between py-3">
                  <dt className="text-muted-foreground">Accepted Papers</dt>
                  <dd className="font-medium text-foreground">≥ 8</dd>
                </div>
                <div className="flex items-center justify-between py-3">
                  <dt className="text-muted-foreground">Expected Attendees</dt>
                  <dd className="font-medium text-foreground">50+</dd>
                </div>
                <div className="flex items-center justify-between py-3">
                  <dt className="text-muted-foreground">Special Award</dt>
                  <dd className="font-medium text-foreground">Best Paper Award</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
