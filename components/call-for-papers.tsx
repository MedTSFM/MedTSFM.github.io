import { SectionHeading } from "./section-heading"
import { FileText, Users, CalendarClock } from "lucide-react"

const topics = [
  "Modeling of medical time-series data (EEG, EOG, EMG, ECG)",
  "Foundation models and LLMs for healthcare analytics",
  "Spatial Time Series (ultrasound image and medical video) analytics",
  "Multimodal healthcare data mining, cross-modal representation learning, and alignment",
  "Trustworthy, interpretable, and privacy-preserving healthcare data intelligence",
  "Real-world healthcare applications, clinical decision support, and digital health systems",
  "Benchmark datasets, surveys, tutorials, and open-source resources for medical time series",
]

const dates = [
  { label: "Paper submission deadline", value: "TBA" },
  { label: "Paper acceptance notification", value: "TBA" },
  { label: "Camera-ready submission deadline", value: "TBA" },
  { label: "Workshop date", value: "December 2026" },
]

export function CallForPapers() {
  return (
    <section id="cfp" className="relative isolate border-t border-border/60 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/shenyang/skyline.jpg"
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading
          eyebrow="Call for Papers"
          title="Submit your research"
          description="We invite original research contributions on all aspects of medical time series analytics and foundation models. Selected papers will be invited for extended submission to a special journal issue."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Topics */}
          <div className="academic-card lg:col-span-2 p-6 md:p-8">
            <div className="flex items-center gap-2 text-primary">
              <FileText className="h-5 w-5" aria-hidden />
              <h3 className="font-serif text-2xl text-foreground">Topics of Interest</h3>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {topics.map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-primary"
                    aria-hidden
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important dates */}
          <div className="academic-card p-6 md:p-8">
            <div className="flex items-center gap-2 text-primary">
              <CalendarClock className="h-5 w-5" aria-hidden />
              <h3 className="font-serif text-2xl text-foreground">Important Dates</h3>
            </div>
            <ul className="mt-6 divide-y divide-border">
              {dates.map((d) => (
                <li key={d.label} className="flex items-start justify-between gap-4 py-3 text-sm">
                  <span className="text-muted-foreground">{d.label}</span>
                  <span className="font-medium text-foreground">{d.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Submission guidelines */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="academic-card p-6 md:p-8">
            <div className="flex items-center gap-2 text-primary">
              <FileText className="h-5 w-5" aria-hidden />
              <h3 className="font-serif text-2xl text-foreground">Submission Guidelines</h3>
            </div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                Manuscripts should be submitted in PDF format following the standard IEEE ICDM template. Full papers
                cannot exceed 9 pages; short papers cannot exceed 4 pages, including references and appendices.
              </p>
              <p>
                This workshop follows a <span className="text-foreground">single-blind</span> review process. Submission
                link will be announced shortly.
              </p>
            </div>
          </div>

          <div className="academic-card p-6 md:p-8">
            <div className="flex items-center gap-2 text-primary">
              <Users className="h-5 w-5" aria-hidden />
              <h3 className="font-serif text-2xl text-foreground">Participation & Selection</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The workshop welcomes researchers and practitioners from academia, industry, and hospitals interested in
              health analytics and foundation models. Submissions will be peer-reviewed by the Program Committee based
              on relevance and quality. A <span className="text-foreground">Best Paper Award</span> will be determined
              through peer review and presentation evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
