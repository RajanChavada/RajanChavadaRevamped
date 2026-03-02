import type { Metadata } from "next"
import { MinimalNav } from "@/components/minimal/minimal-nav"
import { OnThisPageNav } from "@/components/minimal/on-this-page-nav"
import { MinimalAboutPage } from "@/components/minimal/minimal-about-page"

export const metadata: Metadata = {
  title: "About | Rajan Chavada",
  description: "About Rajan Chavada - Software Developer & Cloud Solutions Architect",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <MinimalNav />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-12">
          <aside className="order-2 lg:order-1">
            <OnThisPageNav />
          </aside>
          <article className="order-1 lg:order-2">
            <MinimalAboutPage />
          </article>
        </div>
      </div>
    </main>
  )
}
