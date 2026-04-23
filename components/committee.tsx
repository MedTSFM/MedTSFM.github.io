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

export function Committee() {
  return (
    <section id="committee" className="relative isolate overflow-hidden border-t border-border/60 bg-secondary/40">
      <div className="absolute inset-0 -z-10">
        <img
          src="/shenyang/winter-park.jpg"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/85 backdrop-blur-[2px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading
          eyebrow="Committee"
          title="Program Committee"
          description="Our committee encompasses members from various countries and regions, including scholars and industry experts from academia, industry, and hospitals."
        />

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
          {pc.map((m) => (
            <li
              key={m.name}
              className="academic-card flex items-baseline justify-between gap-4 px-5 py-4"
            >
              <span className="font-medium text-foreground">{m.name}</span>
              <span className="text-right text-sm text-muted-foreground">{m.affiliation}</span>
            </li>
          ))}
        </ul>

        {/* Web Chair */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="academic-card flex items-center gap-5 p-6 md:p-8">
            <img
              src="/organizers/bochuang-yang.jpg"
              alt="Bochuang Yang"
              className="h-24 w-24 flex-shrink-0 rounded-full object-cover object-[90%_60%] ring-1 ring-border"
            />
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-primary">Web Chair</p>
              <h3 className="mt-2 font-serif text-2xl text-foreground">Bochuang Yang</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Maintaining the workshop website and communications.
              </p>
            </div>
          </div>
          <div className="academic-card p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-widest text-primary">Related Workshops</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="text-foreground">STIntelligence@CIKM&apos;25</span> · ~20 submissions · 5 acceptances ·
                50+ attendees
              </li>
              <li>
                <span className="text-foreground">CREATE@MICCAI&apos;25</span> · 10 acceptances · 10 keynotes · 60+
                attendees
              </li>
              <li>
                <span className="text-foreground">EARTH@MICCAI&apos;24</span> · 5 acceptances · 7 keynotes · 30+
                attendees
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
