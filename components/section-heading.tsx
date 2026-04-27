export function SectionHeading({
  eyebrow,
  title,
  description,
  titleClassName,
  descriptionClassName,
  className,
  align = "left",
}: {
  eyebrow?: string
  title: string
  description?: string
  titleClassName?: string
  descriptionClassName?: string
  className?: string
  align?: "left" | "center"
}) {
  const isCenter = align === "center"
  return (
    <div className={[isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className].filter(Boolean).join(" ")}>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2
        className={[
          "font-serif text-balance text-3xl font-normal leading-tight tracking-tight text-foreground md:text-[2.6rem]",
          titleClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {title}
      </h2>
      <div
        className={
          isCenter
            ? "mx-auto mt-5 h-px w-16 bg-primary"
            : "mt-5 h-px w-16 bg-primary"
        }
        aria-hidden
      />
      {description && (
        <p
          className={[
            "mt-6 text-pretty text-base leading-relaxed text-muted-foreground md:text-[17px]",
            descriptionClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {description}
        </p>
      )}
    </div>
  )
}
