import { SectionHeading } from "./section-heading"

const relatedWorkshops = [
  { name: "STIntelligence@CIKM'25", href: "https://stintelligence.github.io/" },
  { name: "CREATE@MICCAI'25", href: "https://sites.google.com/view/create-miccai-2025" },
  { name: "EARTH@MICCAI'24", href: "https://conferences.miccai.org/2024/en/EARTH-Workshop.html" },
]

export function Committee() {
  return (
    <section id="committee" className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading eyebrow="Committee" title="Workshop chairs and related workshops" />

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Web Chair</p>
              <div className="mt-5 flex items-center gap-5">
                <img
                  src="/organizers/bochuang-yang.jpg"
                  alt="Bochuang Yang"
                  className="h-20 w-20 flex-shrink-0 rounded-full border border-border object-cover object-[90%_60%]"
                />
                <div>
                  <h3 className="font-serif text-xl text-foreground">Bochuang Yang</h3>
                  <p className="mt-1 text-[14px] text-muted-foreground">CAIR, HKISI-CAS, Hong Kong</p>
                  <p className="mt-1 text-[14px] text-muted-foreground">
                    Maintaining the workshop website and communications.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Publicity Chair</p>
              <div className="mt-5 flex items-center gap-5">
                <img
                  src="/organizers/junyu-chen.jpg"
                  alt="Junyu Chen"
                  className="h-20 w-20 flex-shrink-0 rounded-full border border-border object-cover object-[50%_35%]"
                />
                <div>
                  <h3 className="font-serif text-xl text-foreground">Junyu Chen</h3>
                  <p className="mt-1 text-[14px] text-muted-foreground">CAIR, HKISI-CAS, Hong Kong</p>
                  <p className="mt-1 text-[14px] text-muted-foreground">
                    Leading workshop publicity and outreach across the community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Related workshops</p>
            <ul className="mt-5 space-y-3">
              {relatedWorkshops.map((w) => (
                <li key={w.name} className="text-[14px] leading-relaxed">
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                  >
                    {w.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
