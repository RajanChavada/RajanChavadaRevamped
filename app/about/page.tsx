import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/ui/section-heading"
import { Award, BookOpen, GraduationCap, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description:
    "Rajan Chavada — ML Software Engineer building production agentic AI systems. Currently at Borealis AI. Toronto / UTC-5.",
}

interface RecognitionItem {
  title: string
  description: string
  year?: string
}

const recognition: RecognitionItem[] = [
  {
    title: "Patent-pending",
    description:
      "Agentic orchestration for regulated financial systems (RBC Capital Markets)",
    year: "2025",
  },
  {
    title: "U of T Hacks — Winner",
    description: "Badge: vectorized professional identity for career fairs",
    year: "2026",
  },
  {
    title: "Apple Swift Student Challenge",
    description: "PhysioPoint: ARKit physiotherapy assessment",
    year: "2026",
  },
  {
    title: "RBC Borealis AI",
    description: "Rosetta adopted internally; pitched to a 140-engineer lab",
  },
  {
    title: "Western AI — Executive",
    description: "Led CNN-based ASL translator team",
  },
  {
    title: "Western Design Thinking — Executive",
    description: "Pitched GPS car-theft solution to the Dean of Engineering",
  },
]

const reading = [
  {
    title: "The Bitter Lesson",
    author: "Rich Sutton",
    href: "http://www.incompleteideas.net/IncIdeas/BitterLesson.html",
  },
  {
    title: "Reflexion: Language Agents with Verbal Reinforcement Learning",
    author: "Shinn et al.",
    href: "https://arxiv.org/abs/2303.11366",
  },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
  },
]

const learning = [
  "Distributed training internals (PyTorch FSDP, DeepSpeed)",
  "Tarjan's SCC and graph algorithms for agent workflow optimization",
  "Triton kernels and CUDA fundamentals",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg-page">
      <Navigation />

      <article id="main" className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <header className="mb-12">
            <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-text-muted">
              About
            </p>
            <h1 className="mt-2 font-display text-[2.25rem] leading-tight tracking-tight text-text-primary sm:text-[2.5rem]">
              Rajan Chavada
            </h1>
            <p className="mt-3 text-[15px] text-text-secondary">
              ML Software Engineer · Agentic AI · Production Systems
            </p>
          </header>

          <section className="prose-editorial">
            <p>
              I&apos;m an ML software engineer who likes the part of the work where you
              ship something other engineers actually use. Right now I&apos;m at{" "}
              <a
                href="https://www.borealisai.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Borealis AI
              </a>{" "}
              working on model-serving infrastructure. Before that, I helped build a
              patent-pending agentic system that&apos;s now shipping to 18,000+ traders
              at RBC. On the side I maintain{" "}
              <a
                href="https://www.npmjs.com/package/rosettablueprint"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rosetta
              </a>{" "}
              (2,000+ downloads) and{" "}
              <a
                href="https://neurovn-alpha.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Neurovn
              </a>{" "}
              — open-source tooling for agentic coding and workflow tracing.
            </p>
          </section>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-bg-elevated p-5">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" strokeWidth={2} />
                <h2 className="font-display text-[16px] text-text-primary">Based</h2>
              </div>
              <p className="mt-2 text-[14.5px] text-text-secondary">
                Toronto, ON · UTC-5
              </p>
            </div>
            <div className="rounded-lg border border-border bg-bg-elevated p-5">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-accent" strokeWidth={2} />
                <h2 className="font-display text-[16px] text-text-primary">School</h2>
              </div>
              <p className="mt-2 text-[14.5px] text-text-secondary">
                BSc Computer Science · University of Western Ontario · Class of 2027
              </p>
            </div>
          </div>

          <div className="mt-16">
            <SectionHeading
              eyebrow="Recognition"
              title="Talks & awards"
              className="mb-6"
            />
            <ul className="divide-y divide-border border-y border-border">
              {recognition.map((item) => (
                <li
                  key={item.title}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <div className="flex items-start gap-3">
                    <Award
                      className="mt-1 h-4 w-4 shrink-0 text-accent"
                      strokeWidth={2}
                    />
                    <div>
                      <h3 className="font-display text-[15.5px] leading-snug text-text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-[14px] text-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {item.year && (
                    <span className="ml-7 font-mono text-[12px] text-text-muted sm:ml-0">
                      {item.year}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <SectionHeading
              eyebrow="Currently reading"
              title="On my desk"
              className="mb-6"
            />
            <ul className="space-y-3">
              {reading.map((r) => (
                <li
                  key={r.title}
                  className="flex items-start gap-3 text-[15px] text-text-primary"
                >
                  <BookOpen className="mt-1 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                  <div>
                    {r.href ? (
                      <a
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent-hover hover:underline"
                      >
                        {r.title}
                      </a>
                    ) : (
                      <span>{r.title}</span>
                    )}
                    <span className="text-text-secondary"> — {r.author}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <SectionHeading
              eyebrow="Currently learning"
              title="What's on the bench"
              className="mb-6"
            />
            <ul className="space-y-2">
              {learning.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] text-text-primary"
                >
                  <span className="mt-2.5 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 rounded-lg border border-border bg-bg-subtle p-5">
            <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-text-muted">
              Colophon
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
              Built with Next.js. Typeset in Libre Baskerville, Source Sans 3, and
              JetBrains Mono. Icons by Lucide. Hosted on Vercel. Single-accent
              monochrome — no gradients, no glass.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
