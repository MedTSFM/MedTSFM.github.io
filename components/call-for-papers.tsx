import { SectionHeading } from "./section-heading"

const topics = [
  "Modeling of Medical Time-Series Data (EEG, EOG, EMG, ECG)",
  "Foundation Models and LLMs for Healthcare Analytics",
  "Spatial Time Series (Ultrasound Image and Medical Video) Analytics",
  "Multimodal Healthcare Data Mining, Cross-Modal Representation Learning, and Alignment",
  "Trustworthy, Interpretable, and Privacy-Preserving Healthcare Data Intelligence",
  "Real-World Healthcare Applications, Clinical Decision Support, and Digital Health Systems",
  "Benchmark Datasets, Surveys, Tutorials, and Open-Source Resources for Medical Time Series",
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
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading
          eyebrow="Call for Papers"
          title="Submit Your Research"
          titleClassName="whitespace-nowrap text-[15px] sm:text-xl md:text-[2rem]"
          descriptionClassName="w-full max-w-none text-[15px] leading-relaxed md:text-base"
          className="max-w-none"
          description="We invite original research contributions on all aspects of medical time series analytics and foundation models. Selected papers will be invited for extended submission to a special journal issue."
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

        <div className="mt-12 space-y-12">
          {/* Theme & Topics */}
          <div>
            <h3 className="font-sans text-xl font-semibold tracking-tight text-foreground md:text-2xl">Theme and Topics</h3>
            <p className="mt-3 max-w-none text-justify text-[15px] leading-relaxed text-muted-foreground hyphens-auto">
              The workshop encourages submissions of innovative solutions for a broad range of medical time series
              intelligence and healthcare foundation models. Topics of interest include, but are not limited to:
            </p>
            <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {topics.map((t, i) => (
                <li
                  key={t}
                  className={[
                    "flex gap-3 text-[15px] leading-relaxed text-muted-foreground",
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

          {/* Objectives */}
          <div>
            <h3 className="font-sans text-xl font-semibold tracking-tight text-foreground md:text-2xl">Objectives and Goals</h3>
            <div className="mt-3 max-w-none space-y-3 text-justify text-[15px] leading-relaxed text-muted-foreground hyphens-auto">
              <p>
                The continued digitization of healthcare and the accompanying deployment of biomedical sensing
                technologies generate increasingly massive amounts of medical time series data, fueling applications
                such as clinical decision support, disease early-warning, and continuous patient monitoring. Mining
                actionable insights from these heterogeneous signals poses unique challenges — irregular sampling,
                cross-modal integration, scalability, and privacy.
              </p>
              <p>
                Our objective is to provide a platform for researchers, practitioners, and clinicians from data mining,
                machine learning, and clinical sciences to explore the opportunities offered by foundation models, and
                to discuss their promise and ethical implications for real-world healthcare.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-border" aria-hidden />

          {/* Submission guidelines */}
          <div>
            <h3 className="font-sans text-xl font-semibold tracking-tight text-foreground md:text-2xl">Submission Guidelines</h3>
            <div className="mt-3 max-w-none space-y-3 text-justify text-[15px] leading-relaxed text-muted-foreground hyphens-auto">
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
                Manuscripts should be submitted in PDF format following the standard IEEE ICDM template, see{" "}
                <a
                  href="https://www.ieee.org/conferences/publishing/templates"
                  className="text-primary"
                >
                  https://www.ieee.org/conferences/publishing/templates
                </a>
                . Full papers cannot exceed 9 pages; short papers cannot exceed 4 pages, including references and appendices.
              </p>
              <p>
                This workshop follows a <span className="text-foreground">single-blind</span> review process. For any
                questions, please feel free to contact{" "}
                <a href="mailto:chenxi.liu@cair-cas.org.hk" className="text-primary">
                  Dr. Chenxi Liu
                </a>
                .
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-border" aria-hidden />

          {/* Participation */}
          <div>
            <h3 className="font-sans text-xl font-semibold tracking-tight text-foreground md:text-2xl">Participation and Selection</h3>
            <p className="mt-3 max-w-none text-justify text-[15px] leading-relaxed text-muted-foreground hyphens-auto">
              The workshop welcomes researchers and practitioners from academia, industry, and hospitals interested in
              health analytics and foundation models. Submissions will be peer-reviewed based on relevance and quality.
              A <span className="text-foreground">Best Paper Award</span> will be determined
              through peer review and presentation evaluation.
            </p>
          </div>

          <div className="h-px w-full bg-border" aria-hidden />

          {/* Important dates */}
          <div id="important-dates" className="scroll-mt-24">
            <h3 className="font-sans text-xl font-semibold tracking-tight text-foreground md:text-2xl">Important Dates</h3>
            <ul className="mt-5 max-w-2xl divide-y divide-border rounded-md border border-border bg-card">
              {dates.map((d) => (
                <li
                  key={d.label}
                  className="grid grid-cols-[minmax(0,1fr)_max-content] items-start gap-4 px-5 py-4 text-[15px]"
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
