import { SectionHeading } from "./section-heading"

const sights = [
  {
    src: "/shenyang/north-tomb.jpg",
    title: "Zhaoling (North Tomb)",
    caption: "UNESCO World Heritage site from the early Qing dynasty.",
  },
  {
    src: "/shenyang/skyline.jpg",
    title: "City Skyline",
    caption: "The modern commercial core of northeastern China.",
  },
  {
    src: "/shenyang/zhongshan-square.jpg",
    title: "Zhongshan Square",
    caption: "A historic landmark in the heart of downtown Shenyang.",
  },
]

export function HostCity() {
  return (
    <section id="venue" className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
        <SectionHeading eyebrow="Host City" title="Shenyang, China" />

        <p className="mt-6 max-w-2xl text-pretty text-[15.5px] leading-relaxed text-muted-foreground md:text-[16.5px]">
          IEEE ICDM 2026 will be held in Shenyang, the historic capital of Liaoning Province and one of the
          major cultural and industrial hubs of northeastern China. The city combines Qing-dynasty heritage with
          a vibrant modern skyline.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sights.map((s) => (
            <li
              key={s.title}
              className="group overflow-hidden rounded-md border border-border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.src || "/placeholder.svg"}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Shenyang
                </p>
                <h3 className="mt-1.5 font-serif text-lg text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.caption}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
