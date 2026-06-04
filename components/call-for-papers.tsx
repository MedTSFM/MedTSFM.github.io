import { SectionHeading } from "./section-heading"

const topics = [
  "Medical Time-Series Modeling (EEG, EOG, EMG, ECG)",
  "Foundation Models and LLMs for Healthcare",
  "Spatial Medical Time Series (Ultrasound and Video)",
  "Multimodal Healthcare Data Mining and Alignment",
  "Trustworthy, Interpretable, and Privacy-Preserving Health AI",
  "Clinical Decision Support and Digital Health Applications",
  "Benchmarks, Surveys, Tutorials, and Open Resources",
]

const dates = [
  { label: "Paper Submission Deadline", value: "September 5, 2026" },
  { label: "Paper Acceptance Notification", value: "September 30, 2026" },
  { label: "Camera-Ready Submission Deadline", value: "October 15, 2026" },
  { label: "Workshop Date", value: "TBA" },
]

export function CallForPapers() {
  return (
    <section id="cfp" className="border-b border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <SectionHeading
          eyebrow="Call for Papers"
          title="Submit Your Research"
          titleClassName="whitespace-nowrap text-[15px] sm:text-xl md:text-[2rem]"
          descriptionClassName="w-full max-w-none text-base leading-relaxed md:text-[18px]"
          className="max-w-none"
          description="We invite original research on medical time series analytics, healthcare foundation models, and their clinical applications. Selected papers will be invited for extended submission to a special journal issue."
        />

        {/* Subtle Shenyang accent band */}
        {/* <figure className="mt-12 overflow-hidden rounded-md border border-border">
          <div className="relative aspect-[24/5]">
            <img
              src="/shenyang/zhongshan-square.jpg"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/10 to-background/70" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-foreground/80">
              <span>IEEE ICDM 2026</span>
              <span>Shenyang · China</span>
            </figcaption>
          </div>
        </figure> */}

        <div className="mt-8 space-y-7">
          {/* Theme & Topics */}
          <div>
            <h3 className="font-['Times_New_Roman',Times,serif] text-xl font-semibold tracking-normal text-foreground md:text-2xl">Theme and Topics</h3>
            <p className="mt-3 max-w-none text-justify text-base leading-relaxed text-muted-foreground hyphens-auto md:text-[18px]">
              We welcome methods, systems, benchmarks, and applications for medical time series and healthcare
              foundation models. Topics include, but are not limited to:
            </p>
            <ul className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {topics.map((t, i) => (
                <li
                  key={t}
                  className={[
                    "flex gap-3 text-base leading-relaxed text-muted-foreground md:text-[18px]",
                    i % 2 === 1 && "sm:ml-auto sm:w-[90%]",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <span className="mt-[0.55rem] h-1 w-1 flex-none rounded-full bg-primary" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-px w-full bg-border" aria-hidden />

          {/* Submission guidelines */}
          <div>
            <h3 className="font-['Times_New_Roman',Times,serif] text-xl font-semibold tracking-normal text-foreground md:text-2xl">Submission Guidelines</h3>
            <div className="mt-3 max-w-none space-y-3 text-justify text-base leading-relaxed text-muted-foreground hyphens-auto md:text-[18px]">
              <p>
                Please submit papers through the official ICDM workshop submission system at{" "}
                <a
                  href="https://wi-lab.com/cyberchair/2026/icdm26/scripts/submit.php?subarea=S12&undisplay_detail=1&wh=/cyberchair/2026/icdm26/scripts/ws_submit.php"
                  className="text-primary"
                >
                  ICDM 2026 Workshop Submission Portal
                </a>
                .
              </p>
              <p>
                Manuscripts should be submitted in PDF format following the standard{" "}
                <a
                  href="https://www.ieee.org/conferences/publishing/templates"
                  className="text-primary"
                >
                  IEEE ICDM template
                </a>
                . Full papers cannot exceed 10 pages; short papers cannot exceed 4 pages, including references and any appendices.
              </p>
              <p>
                This workshop follows a <span className="text-foreground">single-blind</span> review process. For any
                questions, please feel free to contact{" "}
                <a href="mailto:chenxi.liu@cair-cas.org.hk" className="text-primary">
                  Dr. Chenxi Liu
                </a>
                . A <span className="text-foreground">Best Paper Award</span> will be selected based on review and
                presentation evaluation.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-border" aria-hidden />

          {/* Important dates */}
          <div id="important-dates" className="scroll-mt-24">
            <h3 className="font-['Times_New_Roman',Times,serif] text-xl font-semibold tracking-normal text-foreground md:text-2xl">Important Dates</h3>
            <ul className="mt-5 max-w-2xl divide-y divide-border rounded-md border border-border bg-card">
              {dates.map((d) => (
                <li
                  key={d.label}
                  className="grid grid-cols-[minmax(0,1fr)_max-content] items-start gap-4 px-5 py-4 text-base md:text-[18px]"
                >
                  <span className="text-muted-foreground">{d.label}</span>
                  <span className="whitespace-nowrap text-right font-medium text-foreground">{d.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
