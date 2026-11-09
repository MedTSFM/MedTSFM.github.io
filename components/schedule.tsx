// import { Calendar, Clock } from "lucide-react"
import { SectionHeading } from "./section-heading"

type ProgramItem = {
  start: string
  end: string
  event: string
  papers?: { title: string; authors: string; sourceWorkshop?: string }[]
}

const program: ProgramItem[] = [
  { start: "13:00", end: "13:10", event: "Opening and Welcome" },
  {
    start: "13:10",
    end: "14:00",
    event: "Paper Presentations — Session 1",
    papers: [
      {
        title: "Alert-List Concordance for Evaluating Imputation Strategies in ICU Sepsis Prediction",
        authors: "Priyanka Siddappa, University of Massachusetts Lowell",
        sourceWorkshop: "DMBIH",
      },
      {
        title: "IARA: Irregularity-Aware Representation Adaptation for Clinical Time Series",
        authors: "Shengbin Liu, Xinjiang University",
      },
      {
        title: "SCENARIODIFF: A Scenario-level Guidance Framework for Multimodal Time Series Forecasting",
        authors: "Tuan-Binh Tran, VinUniversity",
      },
      {
        title: "Privacy-Preserving Multi-View Healthcare Data Imputation via Adaptive Diffusion",
        authors: "Huanchang Ma, Northeast Normal University",
      },
      {
        title: "Reference-Calibrated Residual Auditing for Backdoor Inspection in Time-Series Forecasting",
        authors: "Jian Liu, Beihang University",
      },
    ],
  },
  { start: "14:00", end: "14:35", event: "Keynote Talk by Prof. Jiyang Pan" },
  {
    start: "14:35",
    end: "15:20",
    event: "Paper Presentations — Session 2",
    papers: [
      {
        title: "CheXFuse: Guided Differential Joint Attention Fusion for Robust Multimodal Chest X-Ray Classification in Data-Scarce Medical Settings",
        authors: "Muntaqim Ahmed Raju, University of Massachusetts Lowell",
        sourceWorkshop: "DMBIH",
      },
      {
        title: "ZeEEG: Zentropy-Guided Conditional EEG Generation for Sleep Stage Augmentation with Local Semantic Uncertainty",
        authors: "Jiacheng Lyu, Xidian University; Heriot-Watt University",
      },
      {
        title: "LoaDiff: Conditional Generation of Electricity Consumption Time Series for Energy Analytics",
        authors: "Mariia Baranova, EDF R&D; Université Paris Cité",
      },
      {
        title: "Beyond Accuracy: Evaluating Performance and Energy Trade-offs in EEG-Based ADHD Classification",
        authors: "Aleksandra Kawala-Sterniuk, Wrocław University of Science and Technology",
        sourceWorkshop: "DMBIH",
      },
    ],
  },
  { start: "15:20", end: "15:30", event: "Award Ceremony and Closing Remarks" },
]

export function Schedule() {
  return (
    <section id="schedule" className="scroll-mt-24 border-b border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <SectionHeading
          eyebrow="Schedule"
          title="Workshop Program"
          descriptionClassName="max-w-none text-left!"
          className="max-w-none"
          description="The workshop is an in-person half-day event featuring invited talks, paper presentations, and discussion."
        />

        {/* <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
            <time dateTime="2026-11-12">November 12, 2026</time>
          </p>
          <p className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
            All times in China Standard Time (UTC+8)
          </p>
        </div> */}

        <div className="mt-5 overflow-hidden rounded-md border border-border bg-card">
          <table className="block w-full border-collapse text-left sm:table">
            <caption className="sr-only">
              MedTSFM workshop agenda for November 12, 2026. All times in China Standard Time (UTC+8).
            </caption>
            <thead className="hidden sm:table-header-group">
              <tr className="border-b border-border bg-secondary/60 text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                <th scope="col" className="w-[190px] px-5 py-3 md:w-[210px] md:px-6">
                  Time
                </th>
                <th scope="col" className="px-5 py-3 md:px-6">
                  Event
                </th>
              </tr>
            </thead>
            <tbody className="block sm:table-row-group">
              {program.map((row) => (
                <tr
                  key={row.start}
                  className={`block border-b border-border last:border-b-0 sm:table-row ${row.papers ? "bg-primary/[0.035]" : ""}`}
                >
                  <th scope="row" className="block whitespace-nowrap px-5 pt-4 text-left align-top font-mono text-base font-normal text-primary sm:table-cell sm:py-4 md:px-6">
                    <time dateTime={`2026-11-12T${row.start}:00+08:00`}>{row.start}</time>
                    <span> - </span>
                    <time dateTime={`2026-11-12T${row.end}:00+08:00`}>{row.end}</time>
                  </th>
                  <td className="block min-w-0 px-5 pt-2 pb-4 align-top sm:table-cell sm:py-4 md:px-6">
                    <h3 className="text-base font-semibold leading-normal text-foreground md:text-lg">
                      {row.event}
                    </h3>
                    {row.papers && (
                      <ul className="mt-3 divide-y divide-border/80 border-t-2 border-primary/30 pt-3">
                        {row.papers.map((paper) => (
                          <li key={paper.title} className="py-3 first:pt-0 last:pb-0">
                            <h4 className="text-[15px] font-semibold italic leading-normal text-foreground md:text-base">
                              {paper.title}
                              {paper.sourceWorkshop && (
                                <span
                                  className="ml-2 inline-flex rounded border border-primary/20 bg-primary/10 px-1.5 py-0.5 align-middle text-[10px] font-semibold not-italic leading-none tracking-wide text-primary"
                                  title={`Transferred from the ${paper.sourceWorkshop} workshop`}
                                >
                                  <span className="sr-only"> — transferred from the </span>
                                  {paper.sourceWorkshop}
                                  <span className="sr-only"> workshop</span>
                                </span>
                              )}
                            </h4>
                            <p className="mt-1 text-sm leading-normal text-muted-foreground md:text-[15px]">
                              {paper.authors}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
