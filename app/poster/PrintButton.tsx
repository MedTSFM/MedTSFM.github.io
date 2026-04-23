'use client'

import { Printer } from "lucide-react"

export default function PrintButton() {
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        if (typeof window !== "undefined") window.print()
      }}
      className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
    >
      <Printer className="h-3.5 w-3.5" />
      Print / Save as PDF
    </button>
  )
}
