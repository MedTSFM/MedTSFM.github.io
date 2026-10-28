import { SectionHeading } from "./section-heading"

const program = [
  { time: "13:00 - 13:10", event: "Opening and Welcome" },
  { time: "13:10 - 13:45", event: "Keynote Talk #1" },
  { time: "13:45 - 14:10", event: "Paper Presentations - Session 1" },
  { time: "14:10 - 14:45", event: "Keynote #Talk 2" },
  { time: "14:45 - 15:10", event: "Paper Presentations - Session 2" },
  { time: "15:10 - 15:20", event: "Award Ceremony" },
  { time: "15:20 - 15:35", event: "Closing Remark" },
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
