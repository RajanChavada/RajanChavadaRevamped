import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { OpenSource } from "@/components/open-source"
import { Writing } from "@/components/writing"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="main">
        <Hero />
        <Projects />
        <Experience />
        <OpenSource />
        <Writing />
      </div>
      <Footer />
    </main>
  )
}
