import { SectionHeading } from "./section-heading"

type Person = {
  name: string
  title: string
  affiliation: string
  photo: string
  href?: string
}

const organizers: Person[] = [
  {
    name: "Chenxi Liu",
    title: "General Chair · Assistant Professor",
    affiliation: "CAIR, HKISI-CAS, Hong Kong",
    photo: "/organizers/chenxi-liu.jpg",
  },
  {
    name: "Jinlin Wu",
    title: "General Chair · Assistant Professor",
    affiliation: "CAIR, HKISI-CAS, Hong Kong",
    photo: "/organizers/jinlin-wu.jpg",
  },
  {
    name: "Kang Zhou",
    title: "General Chair · Assistant Professor",
    affiliation: "CAIR, HKISI-CAS, Hong Kong",
    photo: "/organizers/kang-zhou.jpg",
  },
  {
    name: "Dong Yi",
    title: "General Chair · Senior Scientist",
    affiliation: "CAIR, HKISI-CAS, Hong Kong",
    photo: "/organizers/dong-yi.jpg",
  },
  {
    name: "Zhen Lei",
    title: "General Chair · Professor, IEEE/IAPR Fellow",
    affiliation: "CAIR, HKISI-CAS, Hong Kong",
    photo: "/organizers/zhen-lei.jpg",
  },
  {
    name: "Hongbin Liu",
    title: "General Chair · Director",
    affiliation: "CAIR, HKISI-CAS, Hong Kong",
    photo: "/organizers/hongbin-liu.jpg",
  },
  {
    name: "Gaofeng Meng",
    title: "General Chair · Professor",
    affiliation: "CAIR, HKISI-CAS, Hong Kong",
    photo: "/organizers/gaofeng-meng.jpg",
  },
  {
    name: "Junyu Chen",
    title: "Organizer",
    affiliation: "",
    photo: "/organizers/junyu-chen.jpg",
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
              <div className="relative h-36 w-36 overflow-hidden rounded-full border border-border bg-muted">
                <img
                  src={p.photo || "/placeholder.svg"}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="mt-5 font-serif text-lg text-foreground">{p.name}</h3>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                {p.title}
              </p>
              {p.affiliation && (
                <p className="mt-2 text-[13px] leading-snug text-muted-foreground">{p.affiliation}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
