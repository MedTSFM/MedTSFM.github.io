import { SectionHeading } from "./section-heading"

const pc = [
  { name: "Sebastien Ourselin", affiliation: "King's College London, UK" },
  { name: "Flora Salim", affiliation: "University of New South Wales, Australia" },
  { name: "Yuhuan Lu", affiliation: "Harvard University, USA" },
  { name: "Hao Miao", affiliation: "PolyU, Hong Kong, China" },
  { name: "Yousef Yeganeh", affiliation: "TUM, Germany" },
  { name: "Cheng Long", affiliation: "NTU, Singapore" },
  { name: "Shaohua Kevin Zhou", affiliation: "USTC, China" },
  { name: "Yanda Meng", affiliation: "KAUST, Saudi Arabia" },
]

const relatedWorkshops = [
  { name: "STIntelligence@CIKM'25", stats: "~20 submissions · 5 acceptances · 50+ attendees" },
  { name: "CREATE@MICCAI'25", stats: "10 acceptances · 10 keynotes · 60+ attendees" },
  { name: "EARTH@MICCAI'24", stats: "5 acceptances · 7 keynotes · 30+ attendees" },
]

export function Committee() {
  return (
    <section id="committee" className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading
          eyebrow="Committee"
          title="Program committee"
          description="Our committee encompasses members from various countries and regions, including scholars and industry experts from academia, industry, and hospitals."
        />

        <ul className="mt-12 grid gap-x-10 gap-y-3 md:grid-cols-2">
          {pc.map((m) => (
            <li
              key={m.name}
              className="flex items-baseline justify-between gap-4 border-b border-border py-3"
            >
              <span className="font-medium text-foreground">{m.name}</span>
              <span className="text-right text-[13.5px] text-muted-foreground">{m.affiliation}</span>
            </li>
          ))}
        </ul>

        {/* Chairs + Related Workshops */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Web Chair</p>
              <div className="mt-5 flex items-center gap-5">
                <img
                  src="/organizers/bochuang-yang.jpg"
                  alt="Bochuang Yang"
                  className="h-20 w-20 flex-shrink-0 rounded-full object-cover object-[90%_60%] border border-border"
                />
                <div>
                  <h3 className="font-serif text-xl text-foreground">Bochuang Yang</h3>
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
                  className="h-20 w-20 flex-shrink-0 rounded-full object-cover border border-border"
                />
                <div>
                  <h3 className="font-serif text-xl text-foreground">Junyu Chen</h3>
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
                  <span className="text-foreground">{w.name}</span>
                  <span className="text-muted-foreground"> · {w.stats}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
