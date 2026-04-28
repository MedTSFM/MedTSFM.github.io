import { MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary font-serif text-lg text-primary-foreground">
                M
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-foreground">MedTSFM</p>
                <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  ICDM 2026 Workshop
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              The International Workshop on Medical Time Series Analytics and Foundation Models, co-located with IEEE
              ICDM 2026.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" aria-hidden />
            <span>Hosted in Shenyang, China · November 2026</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} MedTSFM Workshop. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <a
              href="/poster/"
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
            >
              Call for papers poster
            </a>
            <span>
              Website maintained by <span className="text-foreground">Bochuang Yang</span> (Web Chair).
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
