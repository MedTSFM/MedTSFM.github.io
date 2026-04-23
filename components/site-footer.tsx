import { MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-border/60">
      <div className="absolute inset-0 -z-10">
        <img
          src="/shenyang/zhongshan-square.jpg"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/75" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-serif text-lg text-primary-foreground">
                M
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold">MedTSFM</p>
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  ICDM 2026 Workshop
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              The International Workshop on Medical Time Series Analytics and Foundation Models, co-located with IEEE
              ICDM 2026.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" aria-hidden />
            <span>Hosted in Shenyang, China · December 2026</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} MedTSFM Workshop. All rights reserved.</p>
          <p>
            Website maintained by <span className="text-foreground">Bochuang Yang</span> (Web Chair).
          </p>
        </div>
      </div>
    </footer>
  )
}
