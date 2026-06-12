import { SectionHeading } from "./section-heading"

const programCommittee = [
  { name: "Khushan Adatiya", affiliation: "Google Cloud AI, USA" },
  { name: "Han Li", affiliation: "Technical University of Munich, Germany" },
  { name: "Hao Miao", affiliation: "The Hong Kong Polytechnic University, Hong Kong SAR" },
  { name: "Yuhuan Lu", affiliation: "Boston Children’s Hospital and Harvard Medical School, USA" },
  { name: "Xiaocao Ouyang", affiliation: "Southwestern University of Finance and Economics, China" },
  { name: "Jinpeng Li", affiliation: "Hong Kong Institute of Science & Innovation, CAS, Hong Kong SAR" },
  { name: "YongKyung Oh", affiliation: "Medical & Imaging Informatics Radiological Sciences, UCLA, USA" },
  {
    name: "Yanteng Zhang",
    affiliation: "TReNDS Center (Georgia Institute of Technology, Georgia State University, Emory), USA",
  },
]

export function ProgramCommittee() {
  return (
    <section id="program-committee" className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <SectionHeading eyebrow="Program Committee" title="Program Committee" />

        <ul className="mt-8 grid gap-x-10 gap-y-5 md:grid-cols-2">
          {programCommittee.map((member) => (
            <li key={member.name} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" aria-hidden />
              <div>
                <h3 className="font-sans text-base font-semibold tracking-tight text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-[14px] leading-relaxed text-muted-foreground">
                  {member.affiliation}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
