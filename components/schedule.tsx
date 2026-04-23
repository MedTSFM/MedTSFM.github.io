import { SectionHeading } from "./section-heading"

const program = [
  { time: "9:00 – 9:10", event: "Opening and Welcome" },
  { time: "9:10 – 9:30", event: "Keynote #1" },
  { time: "9:30 – 10:10", event: "Session 1: Four Paper Presentations" },
  { time: "10:10 – 10:30", event: "Coffee Break" },
  { time: "10:30 – 10:50", event: "Keynote #2" },
  { time: "10:50 – 11:30", event: "Session 2: Four Paper Presentations" },
  { time: "11:30 – 11:45", event: "Panel Discussion" },
  { time: "11:45 – 12:00", event: "Award Ceremony & Closing Remark" },
]

export function Schedule() {
  return (
    <section id="schedule" className="relative isolate overflow-hidden border-t border-border/60">
      <div className="absolute inset-0 -z-10">
        <img
          src="/shenyang/north-tomb.jpg"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading
          eyebrow="Schedule"
          title="Tentative Program"
          description="The workshop is organized as an in-person half-day event, featuring invited talks, paper presentations, and discussions."
        />

        <div className="academic-card mt-10 overflow-hidden">
          <ul className="divide-y divide-border">
            {program.map((row, i) => (
              <li
                key={row.time}
                className="grid grid-cols-1 gap-2 px-5 py-5 md:grid-cols-[200px_1fr] md:items-center md:px-8"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-sm tracking-tight text-primary">{row.time}</span>
                </div>
                <span className="text-pretty text-[15px] text-foreground md:text-base">{row.event}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
