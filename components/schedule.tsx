import { SectionHeading } from "./section-heading"

const program = [
  { time: "9:00 - 9:10", event: "Opening and welcome" },
  { time: "9:10 - 9:30", event: "Keynote #1" },
  { time: "9:30 - 10:10", event: "Session 1: Paper presentations" },
  { time: "10:10 - 10:30", event: "Coffee break" },
  { time: "10:30 - 10:50", event: "Keynote #2" },
  { time: "10:50 - 11:30", event: "Session 2: Paper presentations" },
  { time: "11:30 - 11:45", event: "Panel discussion" },
  { time: "11:45 - 12:00", event: "Award ceremony & closing remark" },
]

export function Schedule() {
  return (
    <section id="schedule" className="border-b border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading
          eyebrow="Schedule"
          title="Tentative program"
          descriptionClassName="max-w-none text-[13px] lg:whitespace-nowrap xl:text-sm"
          className="max-w-none"
          description="The workshop is an in-person half-day event, featuring invited talks, paper presentations, and discussions. We are committed to inviting distinguished experts from around the globe with prestigious experience in time series analytics and AI for health."
        />

        <div className="mt-12 overflow-hidden rounded-md border border-border bg-card">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-secondary/60 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                <th scope="col" className="w-[220px] px-6 py-4">
                  Time
                </th>
                <th scope="col" className="px-6 py-4">
                  Event
                </th>
              </tr>
            </thead>
            <tbody>
              {program.map((row) => (
                <tr key={row.time} className="border-b border-border last:border-b-0">
                  <td className="whitespace-nowrap px-6 py-4 font-mono text-sm text-primary">{row.time}</td>
                  <td className="px-6 py-4 text-[15px] text-foreground">{row.event}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
