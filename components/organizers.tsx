import { ExternalLink } from "lucide-react"
import { SectionHeading } from "./section-heading"

type Person = {
  name: string
  title: string
  affiliation: string | string[]
  photo: string
  href?: string
  photoClass?: string
  photoFrameClass?: string
}

const organizers: Person[] = [
  {
    name: "Chenxi Liu",
    title: "Assistant Professor",
    affiliation: [
      "Centre for Artificial Intelligence and Robotics",
      "Hong Kong Institute of Science & Innovation, CAS",
    ],
    photo: "/organizers/chenxi-liu.png",
    href: "https://chenxiliu-hnu.github.io/homepage/",
  },
  {
    name: "Jinlin Wu",
    title: "Assistant Professor",
    affiliation: [
      "Centre for Artificial Intelligence and Robotics",
      "Hong Kong Institute of Science & Innovation, CAS",
    ],
    photo: "/organizers/jinlin-wu.png",
    href: "https://kimwu1994.github.io/jinlin.github.io/",
    photoClass: "object-contain",
    photoFrameClass: "bg-white",
  },
  // {
  //   name: "Kang Zhou",
  //   title: "General Chair · Assistant Professor",
  //   affiliation: "CAIR, HKISI-CAS, Hong Kong SAR",
  //   photo: "/organizers/kang-zhou.png",
  //   href: "https://charleskangzhou.github.io/",
  //   photoClass: "object-contain",
  //   photoFrameClass: "bg-white",
  // },
  {
    name: "Dong Yi",
    title: "Professor",
    affiliation: [
      "Centre for Artificial Intelligence and Robotics",
      "Hong Kong Institute of Science & Innovation, CAS",
    ],
    photo: "/organizers/dong-yi.png",
    href: "https://scholar.google.com/citations?user=iga8Z4AAAAAJ&hl=en",
    photoClass: "object-contain",
    photoFrameClass: "bg-white",
  },
  {
    name: "Zhen Lei",
    title: "Professor, IEEE/IAPR Fellow",
    affiliation: [
      "Centre for Artificial Intelligence and Robotics",
      "Hong Kong Institute of Science & Innovation, CAS",
    ],
    photo: "/organizers/zhen-lei.png",
    href: "https://scholar.google.com/citations?user=cuJ3QG8AAAAJ&hl=en",
    photoClass: "object-contain",
    photoFrameClass: "bg-white",
  },
  {
    name: "Hongbin Liu",
    title: "Professor",
    affiliation: [
      "Centre for Artificial Intelligence and Robotics",
      "Hong Kong Institute of Science & Innovation, CAS",
    ],
    photo: "/organizers/hongbin-liu.png",
    href: "https://scholar.google.com/citations?user=ybmGRfIAAAAJ&hl=en",
    photoClass: "object-contain",
    photoFrameClass: "bg-white",
  },
  {
    name: "Gaofeng Meng",
    title: "Professor",
    affiliation: [
      "Centre for Artificial Intelligence and Robotics",
      "Hong Kong Institute of Science & Innovation, CAS",
    ],
    photo: "/organizers/gaofeng-meng.png",
    href: "https://people.ucas.edu.cn/~gfmeng",
    photoClass: "object-contain",
    photoFrameClass: "bg-white",
  },
]

export function Organizers() {
  return (
    <section id="organizers" className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <SectionHeading eyebrow="Organizers" title="Workshop Organizers" />

        <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
          {organizers.map((p) => (
            <li
              key={p.name}
              className="flex flex-col items-center text-center"
            >
              <div
                className={[
                  "relative aspect-[2/3] w-[12.5rem] overflow-hidden rounded-md border border-border bg-white",
                  p.photoFrameClass,
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <img
                  src={p.photo || "/placeholder.svg"}
                  alt={p.name}
                  className={["h-full w-full object-cover", p.photoClass].filter(Boolean).join(" ")}
                />
              </div>

              <h3 className="mt-5 font-sans text-lg font-semibold tracking-tight text-foreground">{p.name}</h3>
              <p className="mt-1 text-[11px] font-semibold tracking-[0.15em] text-primary">
                {p.title}
              </p>
              {p.affiliation && (
                <p className="mt-2 space-y-2 text-[13px] leading-snug text-muted-foreground">
                  {(Array.isArray(p.affiliation) ? p.affiliation : [p.affiliation]).map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              )}
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex h-9 items-center gap-2 rounded-sm border border-border px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-secondary"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Homepage</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
