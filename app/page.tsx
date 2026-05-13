import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { TechMatrix } from "@/components/tech-matrix"
import { Writing } from "@/components/writing"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-page">
      <Navigation />
      <div id="main">
        <Hero />
        <Projects />
        <Experience />
        <TechMatrix />
        <Writing />
      </div>
      <Footer />
    </main>
  )
}
