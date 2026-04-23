import { SectionHeading } from "./section-heading"

type Person = {
  name: string
  title: string
  affiliation: string
  photo: string
  href?: string
}

// Replace each `photo` path by placing a matching image file at public/<path>
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
    <section id="organizers" className="relative isolate overflow-hidden border-t border-border/60 bg-background">
      <div className="absolute inset-0 -z-10">
        <img
          src="/shenyang/olympic-center.jpg"
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-[0.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading eyebrow="Organizers" title="Workshop Organizers" />

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {organizers.map((p) => (
            <li key={p.name} className="group flex flex-col items-center text-center">
              {/* Photo frame — replace the file at `photo` to show a real portrait */}
              <div className="relative h-40 w-40 overflow-hidden rounded-full border border-border bg-muted shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:ring-2 group-hover:ring-primary/30">
                <img
                  src={p.photo || "/placeholder.svg"}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border/60" />
              </div>

              <h3 className="mt-5 font-serif text-xl text-foreground">{p.name}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-primary">{p.title}</p>
              {p.affiliation && (
                <p className="mt-1 text-sm leading-snug text-muted-foreground">{p.affiliation}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
