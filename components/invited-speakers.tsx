import { ExternalLink } from "lucide-react"
import { SectionHeading } from "./section-heading"

type Speaker = {
  name: string
  title?: string
  affiliation: string[]
  photo: string
  href: string
}

const speakers: Speaker[] = [
  {
    name: "Yujun Yan",
    title: "Assistant Professor",
    affiliation: ["Department of Computer Science", "Dartmouth College"],
    photo: "/speakers/yujun-yan.png",
    href: "https://sites.google.com/umich.edu/yujunyan/home",
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
  },
]

export function InvitedSpeakers() {
  return (
    <section id="invited-speakers" className="scroll-mt-24 border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <SectionHeading eyebrow="Speakers" title="Keynote Speakers" />

        <ul className="mx-auto mt-10 grid max-w-3xl gap-x-12 gap-y-10 sm:grid-cols-2">
          {speakers.map((speaker) => (
            <li key={speaker.name} className="flex flex-col items-center text-center">
              <div className="aspect-[4/5] w-[12.5rem] overflow-hidden rounded-md border border-border bg-white">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  width={200}
                  height={250}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="mt-5 font-sans text-lg font-semibold tracking-tight text-foreground">
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
