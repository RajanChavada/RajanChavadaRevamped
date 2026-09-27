import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionTitle } from "@/components/section-title"
import { links } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description:
    "Rajan Chavada: CS at Western, backend at Bree (YC), previously ML infra at RBC Borealis AI. Builds developer tools on the side.",
}

const recognition = [
  { year: "2025", title: "Patent pending", what: "agentic orchestration over regulated financial data, from my RBC Amplify internship" },
  { year: "2026", title: "UofT Hacks, winner", what: "Badge: vectorized professional identity for career fairs" },
  { year: "2026", title: "Apple Swift Student Challenge", what: "PhysioPoint: ARKit physiotherapy assessment" },
  { year: "2026", title: "Rosetta at Borealis AI", what: "pitched to the lab, picked up by engineers on the team" },
  { year: "", title: "Western AI, executive", what: "led the CNN-based ASL translator team" },
  { year: "", title: "Western Design Thinking, executive", what: "pitched a GPS car-theft idea to the Dean of Engineering" },
]

const reading = [
  { title: "The Bitter Lesson", author: "Rich Sutton", href: "http://www.incompleteideas.net/IncIdeas/BitterLesson.html" },
  { title: "Reflexion: Language Agents with Verbal Reinforcement Learning", author: "Shinn et al.", href: "https://arxiv.org/abs/2303.11366" },
  { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann" },
]

const learning = [
  "distributed training internals (PyTorch FSDP, DeepSpeed)",
  "graph algorithms for agent workflows (Tarjan's SCC and friends)",
  "Triton kernels and CUDA fundamentals",
]

const facts = [
  { k: "based", v: "Toronto, ON · UTC−5 · open to US/Canada" },
  { k: "school", v: "B.Sc. Computer Science, Western University · May 2027 · 3.7 GPA" },
  { k: "now", v: "Software Engineer Intern at Bree (YC)" },
  { k: "off the clock", v: "markets (I used to day trade, badly, then less badly), hackathons, writing" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <article id="main" className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="mono-label">page 2 · about</p>
          <h1 className="mt-4 text-[3.2rem] leading-[0.95] sm:text-[4.2rem]">
            Hi, I&apos;m <span className="italic">Rajan</span>.
          </h1>

          <div className="prose-editorial mt-8 text-[17.5px]">
            <p>
              I like the part of engineering where something leaves my laptop and other people start depending
              on it. Most of what I&apos;ve built came from being annoyed at something at work: nobody knew what
              our agents cost, so I built <a href="https://neurovn-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">Neurovn</a>.
              Our agent configs didn&apos;t work across IDEs, so I built{" "}
              <a href="https://www.npmjs.com/package/rosettablueprint" target="_blank" rel="noopener noreferrer">Rosetta</a>.
              Claude Code kept eating our API budget, so Aditya and I built{" "}
              <a href="https://www.npmjs.com/package/cachelane" target="_blank" rel="noopener noreferrer">CacheLane</a>.
            </p>
            <p>
              At work I&apos;ve bounced between the model side and the infrastructure side: shrinking and serving
              models on GPUs at RBC Borealis AI, writing Terraform at Intact, building a research agent at RBC
              that became a patent application, and now keeping deploys boring at Bree.
            </p>
          </div>

          <dl className="sheet mt-10 grid gap-x-6 gap-y-3 p-5 font-mono text-[13px] sm:grid-cols-[120px_1fr]">
            <span className="tape" aria-hidden />
            {facts.map((f) => (
              <div key={f.k} className="contents">
                <dt className="text-accent">{f.k}</dt>
                <dd className="text-text-primary">{f.v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-20">
            <SectionTitle index="A" title="Recognition" note="the fridge-magnet section" />
            <ul className="divide-y divide-dashed divide-border border-y-[1.5px] border-border-strong">
              {recognition.map((r) => (
                <li key={r.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-5">
                  <span className="shrink-0 font-mono text-[12px] text-text-muted sm:w-12">{r.year || "·"}</span>
                  <span className="flex-1">
                    <span className="block font-display text-[1.35rem] leading-snug">{r.title}</span>
                    <span className="text-[14.5px] text-text-secondary">{r.what}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-20 grid gap-12 sm:grid-cols-2">
            <div>
              <p className="mono-label">on my desk</p>
              <ul className="mt-4 space-y-3 text-[15px]">
                {reading.map((r) => (
                  <li key={r.title}>
                    {r.href ? (
                      <a href={r.href} target="_blank" rel="noopener noreferrer" className="ink-link">
                        {r.title}
                      </a>
                    ) : (
                      <span className="text-text-primary">{r.title}</span>
                    )}
                    <span className="block font-mono text-[12px] text-text-muted">{r.author}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mono-label">on the bench</p>
              <ul className="mt-4 space-y-2 text-[15px] text-text-primary">
                {learning.map((l) => (
                  <li key={l} className="flex gap-2">
                    <span className="text-accent">□</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
              <p className="hand mt-4 text-[19px] text-text-muted">checkboxes stay empty until I ship something with it</p>
            </div>
          </div>

          <div className="mt-20 border-[1.5px] border-dashed border-border p-5">
            <p className="mono-label">colophon</p>
            <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">
              Next.js on Vercel. Set in Instrument Serif, Inter Tight, JetBrains Mono and Caveat for the
              handwriting. Graph paper by day, blueprint by night. Demo clips are real screen recordings.
              Find the source on{" "}
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="ink-link">
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
