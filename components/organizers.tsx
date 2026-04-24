import { ExternalLink } from "lucide-react"
import { SectionHeading } from "./section-heading"

type Person = {
  name: string
  title: string
  affiliation: string
  photo: string
  href?: string
  photoClass?: string
  photoFrameClass?: string
}

const organizers: Person[] = [
  {
    name: "Chenxi Liu",
    title: "General Chair · Assistant Professor",
    affiliation: "CAIR, HKISI-CAS, Hong Kong",
    photo: "/organizers/chenxi-liu.png",
    href: "https://chenxiliu-hnu.github.io/homepage/",
  },
  {
    name: "Jinlin Wu",
    title: "General Chair · Assistant Professor",
    affiliation: "CAIR, HKISI-CAS, Hong Kong",
    photo: "/organizers/jinlin-wu.png",
    href: "https://kimwu1994.github.io/jinlin.github.io/",
    photoClass: "object-contain",
    photoFrameClass: "bg-white",
  },
  {
    name: "Kang Zhou",
    title: "General Chair · Assistant Professor",
    affiliation: "CAIR, HKISI-CAS, Hong Kong",
    photo: "/organizers/kang-zhou.png",
    href: "https://charleskangzhou.github.io/",
    photoClass: "object-contain",
    photoFrameClass: "bg-white",
  },
  {
    name: "Dong Yi",
    title: "General Chair · Senior Scientist",
    affiliation: "CAIR, HKISI-CAS, Hong Kong",
    photo: "/organizers/dong-yi.png",
    href: "https://scholar.google.com/citations?user=iga8Z4AAAAAJ&hl=en",
    photoClass: "object-contain",
    photoFrameClass: "bg-white",
  },
  {
    name: "Zhen Lei",
    title: "General Chair · Professor, IEEE/IAPR Fellow",
    affiliation: "CAIR, HKISI-CAS, Hong Kong",
    photo: "/organizers/zhen-lei.png",
    href: "https://scholar.google.com/citations?user=cuJ3QG8AAAAJ&hl=en",
    photoClass: "object-contain",
    photoFrameClass: "bg-white",
  },
  {
    name: "Hongbin Liu",
    title: "General Chair · Director",
    affiliation: "CAIR, HKISI-CAS, Hong Kong",
    photo: "/organizers/hongbin-liu.jpg",
    href: "https://scholar.google.com/citations?user=REPLACE_HONGBIN_LIU",
  },
  {
    name: "Gaofeng Meng",
    title: "General Chair · Professor",
    affiliation: "CAIR, HKISI-CAS, Hong Kong",
    photo: "/organizers/gaofeng-meng.jpg",
    href: "https://scholar.google.com/citations?user=REPLACE_GAOFENG_MENG",
  },
]

export function Organizers() {
  return (
    <section id="organizers" className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading eyebrow="Organizers" title="Workshop organizers" />

        <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {organizers.map((p) => (
            <li key={p.name} className="flex flex-col items-center text-center">
              <div
                className={[
                  "relative aspect-[4/5] w-36 overflow-hidden rounded-md border border-border bg-white",
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

              <h3 className="mt-5 font-serif text-lg text-foreground">{p.name}</h3>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                {p.title}
              </p>
              {p.affiliation && (
                <p className="mt-2 text-[13px] leading-snug text-muted-foreground">{p.affiliation}</p>
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
