import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Articles } from "@/components/articles"
import { Footer } from "@/components/footer"
import { FloatingSocial } from "@/components/floating-social"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="articles">
        <Articles />
      </div>
      <Footer />
      <FloatingSocial />
    </main>
  )
}
