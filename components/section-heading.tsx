export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary">
          <span className="h-px w-6 bg-primary/60" aria-hidden />
          {eyebrow}
        </div>
      )}
      <h2 className="border-l-4 border-primary pl-4 font-serif text-balance text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
      )}
    </div>
  )
}
