import { SectionHeading } from "./section-heading"

const topics = [
  "Modeling of medical time-series data (EEG, EOG, EMG, ECG)",
  "Foundation models and LLMs for healthcare analytics",
  "Spatial time series (ultrasound image and medical video) analytics",
  "Multimodal healthcare data mining, cross-modal representation learning, and alignment",
  "Trustworthy, interpretable, and privacy-preserving healthcare data intelligence",
  "Real-world healthcare applications, clinical decision support, and digital health systems",
  "Benchmark datasets, surveys, tutorials, and open-source resources for medical time series",
]

const dates = [
  { label: "Paper submission deadline", value: "TBA" },
  { label: "Paper acceptance notification", value: "TBA" },
  { label: "Camera-ready submission deadline", value: "TBA" },
  { label: "Workshop date", value: "TBA" },
]

export function CallForPapers() {
  return (
    <section id="cfp" className="border-b border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading
          eyebrow="Call for Papers"
          title="Submit your research"
          titleClassName="whitespace-nowrap text-2xl sm:text-3xl md:text-[2.6rem]"
          descriptionClassName="max-w-none text-sm lg:whitespace-nowrap xl:text-[15px]"
          className="max-w-none"
          description="We invite original research contributions on all aspects of medical time series analytics and foundation models. Selected papers will be invited for extended submission to a special journal issue."
        />

        {/* Subtle Shenyang accent band */}
        <figure className="mt-12 overflow-hidden rounded-md border border-border">
          <div className="relative aspect-[24/5]">
            <img
              src="/shenyang/skyline.jpg"
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
        </figure>

        <div className="mt-12 space-y-12">
          {/* Theme & Topics */}
          <div>
            <h3 className="font-serif text-xl text-foreground md:text-2xl">Theme and topics</h3>
            <p className="mt-3 max-w-none text-[15px] leading-relaxed text-muted-foreground">
              The workshop encourages submissions of innovative solutions for a broad range of medical time series
              intelligence and healthcare foundation models. Topics of interest include, but are not limited to:
            </p>
            <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {topics.map((t) => (
                <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                  <span className="mt-[0.55rem] h-1 w-1 flex-none rounded-full bg-primary" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-px w-full bg-border" aria-hidden />

          {/* Objectives */}
          <div>
            <h3 className="font-serif text-xl text-foreground md:text-2xl">Objectives and goals</h3>
            <div className="mt-3 max-w-none space-y-3 text-[15px] leading-relaxed text-muted-foreground">
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
            <h3 className="font-serif text-xl text-foreground md:text-2xl">Submission guidelines</h3>
            <div className="mt-3 max-w-none space-y-3 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Manuscripts should be submitted in PDF format following the standard IEEE ICDM template. Full papers
                cannot exceed 9 pages; short papers cannot exceed 4 pages, including references and appendices.
              </p>
              <p>
                This workshop follows a <span className="text-foreground">single-blind</span> review process. The
                submission link will be announced shortly. For any questions, please contact the organizers.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-border" aria-hidden />

          {/* Participation */}
          <div>
            <h3 className="font-serif text-xl text-foreground md:text-2xl">Participation and selection</h3>
            <p className="mt-3 max-w-none text-[15px] leading-relaxed text-muted-foreground">
              The workshop welcomes researchers and practitioners from academia, industry, and hospitals interested in
              health analytics and foundation models. Submissions will be peer-reviewed based on relevance and quality.
              A <span className="text-foreground">Best Paper Award</span> will be determined
              through peer review and presentation evaluation.
            </p>
          </div>

          <div className="h-px w-full bg-border" aria-hidden />

          {/* Important dates */}
          <div>
            <h3 className="font-serif text-xl text-foreground md:text-2xl">Important dates</h3>
            <ul className="mt-5 max-w-2xl divide-y divide-border rounded-md border border-border bg-card">
              {dates.map((d) => (
                <li key={d.label} className="flex items-center justify-between gap-4 px-5 py-4 text-[15px]">
                  <span className="text-muted-foreground">{d.label}</span>
                  <span className="font-medium text-foreground">{d.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
