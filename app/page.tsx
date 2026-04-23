import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { CallForPapers } from "@/components/call-for-papers"
import { KeynoteSpeakers } from "@/components/keynote-speakers"
import { Schedule } from "@/components/schedule"
import { Organizers } from "@/components/organizers"
import { Committee } from "@/components/committee"
import { HostCity } from "@/components/host-city"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <About />
      <CallForPapers />
      <KeynoteSpeakers />
      <Schedule />
      <Organizers />
      <Committee />
      <HostCity />
      <SiteFooter />
    </main>
  )
}
