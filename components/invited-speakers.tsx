import { ExternalLink, FileText } from "lucide-react"
import { SectionHeading } from "./section-heading"

type Speaker = {
  name: string
  title?: string
  affiliation: string[]
  photo: string
  href: string
  talk?: {
    title: string
    subtitle?: string
    section: "Abstract" | "Biography"
    text: string
    materialHref: string
  }
}

const speakers: Speaker[] = [
  {
    name: "Yujun Yan",
    title: "Assistant Professor",
    affiliation: ["Department of Computer Science", "Dartmouth College"],
    photo: "/speakers/yujun-yan.png",
    href: "https://sites.google.com/umich.edu/yujunyan/home",
    talk: {
      title: "From Medical Signals to Multimodal Intelligence",
      materialHref: "/speakers/yujun-yan-talk.pdf",
      section: "Abstract",
      text:
        "Medical and physiological signals provide valuable insights into human health, cognition, and perception. " +
        "Advances in deep learning have enabled increasingly effective analysis of these signals, yet fully exploiting the information they encode remains challenging. " +
        "On the one hand, medical signals exhibit complex patterns and dependencies that require specialized modeling approaches. " +
        "On the other hand, recent advances in pretrained foundation models offer new opportunities to interpret physiological signals and translate the information they encode into other modalities. " +
        "Together, these developments raise an important question: how can we effectively model medical signals while leveraging the capabilities of foundation models to enable richer forms of understanding?",
    },
  },
  {
    name: "Jiyang Pan",
    title: "Professor, Chief Physician",
    affiliation: [
      "Sleep Medicine Center · Department of Psychiatry",
      "The First Affiliated Hospital of Jinan University",
    ],
    photo: "/speakers/jiyang-pan.png",
    href: "https://faculty.jnu.edu.cn/lcyxy/pjy_en/list.psp",
    talk: {
      title: "What Does Sleep Medicine Need from Artificial Intelligence?",
      subtitle: "From AI-Assisted Diagnosis to Personalized Treatment",
      materialHref: "/speakers/jiyang-pan-talk.pdf",
      section: "Biography",
      text:
        "Dr. Jiyang Pan is a distinguished Professor of Psychiatry and Sleep Medicine, and Chair Emeritus, Department of Psychiatry, and Director, the Sleep Medicine Center at The First Affiliated Hospital of Jinan University. " +
        "In 2003, Dr. Pan was awarded a fellowship by the American Academy of Sleep Medicine to receive specialized clinical training in sleep medicine at the University of Pennsylvania Medical Center, under the guidance of Professor Allan Pack, an internationally renowned sleep medicine expert. " +
        "Dr. Pan's current clinical and research interests include: sleep disorders, depressive disorders, bipolar disorder, and anxiety disorders, with a particular focus on their psychobiology and clinical pharmacology.",
    },
  },
]

export function InvitedSpeakers() {
  return (
    <section id="invited-speakers" className="scroll-mt-24 border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <SectionHeading eyebrow="Speakers" title="Keynote Speakers" />

        <ul className="mx-auto mt-10 max-w-5xl divide-y divide-border">
          {speakers.map((speaker) => (
            <li key={speaker.name} className="grid items-start gap-y-5 py-9 first:pt-0 last:pb-0 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-x-12">
              <div className="mx-auto aspect-[4/5] w-44 max-w-full overflow-hidden rounded-md border border-border bg-white md:w-60">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  width={200}
                  height={250}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className={speaker.talk ? "text-center md:col-start-1 md:row-start-2 md:flex md:flex-col md:items-center md:self-end" : "text-center md:self-center md:text-left"}>
                <h3 className="font-sans text-xl font-semibold tracking-tight text-foreground">
                  {speaker.name}
                </h3>
                {speaker.title && (
                  <p className="mt-1 text-[11px] font-semibold tracking-[0.15em] text-primary">
                    {speaker.title}
                  </p>
                )}
                <p className="mt-2 space-y-2 text-[13px] leading-snug text-muted-foreground">
                  {speaker.affiliation.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <a
                  href={speaker.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex h-9 items-center gap-2 rounded-sm border border-border px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-secondary"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Homepage</span>
                </a>
              </div>
              {speaker.talk && (
                <div className="@container min-w-0 text-left md:col-start-2 md:row-start-1 md:row-span-2 md:flex md:flex-col md:items-start md:self-stretch">
                  <header className="w-full border-b border-primary/30 pb-3">
                    <h4 className={`text-[22px] font-semibold leading-tight tracking-tight text-foreground ${speaker.talk.subtitle ? "@min-[38rem]:tracking-[-0.065em] @min-[40.25rem]:tracking-[-0.04em]" : ""}`}>
                      Title: {speaker.talk.title}
                    </h4>
                    {speaker.talk.subtitle && (
                      <p className="mt-2 text-pretty text-base leading-snug text-muted-foreground lg:text-lg">
                        {speaker.talk.subtitle}
                      </p>
                    )}
                  </header>
                  <h5 className="mt-4 text-lg font-semibold text-foreground">{speaker.talk.section}</h5>
                  <p className="mt-2 text-justify text-base leading-[30px] text-muted-foreground md:grow">{speaker.talk.text}</p>
                  <a
                    href={speaker.talk.materialHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex min-h-9 items-center gap-2 rounded border border-primary/25 bg-primary/5 px-3 py-1.5 text-sm font-semibold text-primary transition-colors hover:border-primary/50 hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <FileText aria-hidden="true" className="size-4" />
                    Talk Materials
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
