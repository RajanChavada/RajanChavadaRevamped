import Image from "next/image"
import { AboutBlurbWithModals } from "./about-blurb-with-modals"
import { List } from "lucide-react"

const currentlyReading = [
  {
    title: "Three AI-agents walk into a bar... 'Lord of the Flies' tribalism emerges among smart AI-Agents",
    url: "https://arxiv.org/abs/2602.23093",
  },
  {
    title: "Building Effective AI Agents",
    url: "https://www.anthropic.com/engineering/building-effective-agents",
  },
  {
    title: "Beyond prompts: AI agents",
    url: "https://fonctionlabs.com/blog/when-to-use-agents",
  },
  {
    title: "You Don't Need a Mac mini to Run OpenClaw: VPS‑First Agent Ops for Everyday Devs",
    url: "https://dev.to/shahdeep/you-dont-need-a-mac-mini-to-run-openclaw-vps-first-agent-ops-for-everyday-devs-3jg7",
  },
]

const currentlyLearning = [
  "Agentic Coding with Skills files and context engineering",
  "AR-based programming to detect human skeletons for rehab triage and remediation",
  "Machine learning research in biotechnology and financial services",
  "Automatic triage and remediation of SRE bottlenecks from NVIDIA DGX GPU",
  "LangChain and LangGraph agentic workflows",
  "Skiing and skating",
]

const projects = [
  { name: "PhysioPoint", image: "/images/physiopoint-mockup.png" },
  { name: "NVIDIA Alert Triage", image: "/images/nvidia-triage-screenshot.png" },
  { name: "Badge", image: "/images/badge-screenshot.png" },
  { name: "Plyce", image: "/images/plyce-screenshot.png" },
  { name: "Chill Bill", image: "/financial-wellness-app-dashboard.png" },
  { name: "FitCheck", image: "/fashion-outfit-rating-app.jpg" },
]

export function MinimalAboutPage() {
  return (
    <div className="space-y-16">
      <section id="about">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
          About
        </h2>
        <p className="text-foreground text-lg leading-relaxed max-w-xl mb-6">
          Who made this website?
        </p>
        <AboutBlurbWithModals />
        <p className="text-muted-foreground text-base mt-6">
          Full resume and work history is available upon request,{" "}
          <a
            href="mailto:RajanChavada111@gmail.com"
            className="text-foreground hover:underline"
          >
            email me
          </a>
          !
        </p>

        <div className="mt-10">
          <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <List className="h-5 w-5" />
            Currently reading
          </h3>
          <ul className="list-disc list-outside pl-6 space-y-2 text-muted-foreground text-base">
            {currentlyReading.map((item) => (
              <li key={item.url} className="pl-1">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground underline underline-offset-2 transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="font-serif text-lg font-bold text-foreground mb-4">
            Currently learning
          </h3>
          <ul className="list-disc list-outside pl-6 space-y-2 text-muted-foreground text-base">
            {currentlyLearning.map((item) => (
              <li key={item} className="pl-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="works">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
          Works
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed max-w-xl mb-10">
          I started programming several years ago and made it my career. My
          roles have spanned the entire stack — from building sleek, responsive
          websites to architecting robust backends and designing intuitive UIs.
          Here are some projects and recent ideas I&apos;ve been working on.
        </p>

        <div className="space-y-12 max-w-xl">
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
              PhysioPoint — Apple Swift Student Challenge 2026
            </h3>
            <p className="text-muted-foreground text-sm italic mb-2">
              Rehabilitation without the cost, from the comfort of your own home
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-2">
              iOS/iPadOS app for individuals who need physiotherapy but face barriers like cost or access. Uses ARKit body tracking to measure joint angles in real time—performing the same assessment a physiotherapist performs manually.
            </p>
            <p className="text-muted-foreground text-xs">
              SwiftUI, ARKit, RealityKit, on-device AI (iOS 26 Foundation Models)
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
              NVIDIA Alert Triage & Incident Response Agent
            </h3>
            <p className="text-muted-foreground text-sm italic mb-2">
              Agentic SRE layer that automates the &quot;observability crawl&quot; to reduce MTTR
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-2">
              Cyclic multi-agent workflow powered by NVIDIA Nemotron-70B. Live tooling via Prometheus, Kafka, Elasticsearch. ~60% MTTR reduction, real-time GPU/VRAM/thermal view, XID error detection.
            </p>
            <p className="text-muted-foreground text-xs">
              LangChain, LangGraph, NVIDIA NIM, Kafka, Postgres, MCP
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
              Badge — U of T Hacks 2026 Winner
            </h3>
            <p className="text-muted-foreground text-sm italic mb-2">
              Vectorizing myself for meaningful connections
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-2">
              Professional identity for hackathons and career fairs. PCA on 728-dimensional vector → 3D knowledge graph. AI-extracted identity from resume generates personalized talking points. ~86% of recruiters said conversations felt less transactional.
            </p>
            <p className="text-muted-foreground text-xs">
              React, TypeScript, Convex, Clerk, Gemini API, ElevenLabs, Snowflake
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
              Legacy projects
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Plyce (restaurant discovery), Chill Bill (financial wellness), FitCheck (AI outfit rating), FinSightGPT (trading analysis), Arnold (fitness tracking), ASL Translator (sign language).
            </p>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mt-8 mb-4">
          A collage of my works
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <div
              key={p.name}
              className="relative aspect-video rounded overflow-hidden border border-border"
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="connect">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
          Connect
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed max-w-xl mb-6">
          I currently reside in <strong className="text-foreground">Toronto, ON</strong>,{" "}
          <strong className="text-foreground">UTC-5</strong>.
        </p>
        <p className="text-muted-foreground text-base mb-4">
          The best way to reach me is by email to{" "}
          <a
            href="mailto:RajanChavada111@gmail.com"
            className="text-foreground hover:underline"
          >
            RajanChavada111@gmail.com
          </a>
          . You can also find me on{" "}
          <a
            href="https://github.com/RajanChavada"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:underline"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/rajan-chavada/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>

      <section id="colophon">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
          Colophon
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
          This website is made with Next.js. Typeset in Libre Baskerville and
          Source Sans 3. Styling with Tailwind CSS. Icons by Lucide. Deployed on
          Vercel.
        </p>
      </section>
    </div>
  )
}
