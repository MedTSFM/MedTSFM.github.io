import { SectionHeading } from "./section-heading"

const program = [
  { time: "9:00 - 9:10", event: "Opening and Welcome" },
  { time: "9:10 - 9:30", event: "Keynote #1" },
  { time: "9:30 - 10:10", event: "Session 1: Paper Presentations" },
  { time: "10:10 - 10:30", event: "Coffee Break" },
  { time: "10:30 - 10:50", event: "Keynote #2" },
  { time: "10:50 - 11:30", event: "Session 2: Paper Presentations" },
  { time: "11:30 - 11:45", event: "Panel Discussion" },
  { time: "11:45 - 12:00", event: "Award Ceremony & Closing Remark" },
]

export function Schedule() {
  return (
    <section id="schedule" className="border-b border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <SectionHeading
          eyebrow="Schedule"
          title="Tentative Program"
          descriptionClassName="max-w-none"
          className="max-w-none"
          description="The workshop is an in-person half-day event featuring invited talks, paper presentations, and discussion."
        />

        <div className="mt-8 max-w-3xl overflow-hidden rounded-md border border-border bg-card">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-secondary/60 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                <th scope="col" className="w-[150px] px-4 py-3">
                  Time
                </th>
                <th scope="col" className="px-4 py-3">
                  Event
                </th>
              </tr>
            </thead>
            <tbody>
              {program.map((row) => (
                <tr key={row.time} className="border-b border-border last:border-b-0">
                  <td className="whitespace-nowrap px-4 py-3 font-mono text-base text-primary">{row.time}</td>
                  <td className="px-4 py-3 text-base text-foreground md:text-[17px]">{row.event}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
