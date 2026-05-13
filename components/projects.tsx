"use client"

import { useState } from "react"
import { ArrowUpRight, ChevronDown, Github, Package } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { TechChip } from "@/components/ui/tech-chip"
import { cn } from "@/lib/utils"

interface ProjectLink {
  label: string
  href: string
  primary?: boolean
}

interface Tier1Project {
  title: string
  subtitle: string
  description: React.ReactNode
  codeBlock?: { language: string; code: string }
  tech: string[]
  links: ProjectLink[]
}

interface Tier2Project {
  title: string
  badge?: string
  description: string
  tech: string[]
  links: ProjectLink[]
}

interface LegacyProject {
  name: string
  description: string
  tech: string
  href?: string
}

const tier1Projects: Tier1Project[] = [
  {
    title: "Rosetta",
    subtitle:
      "2,000+ downloads · adopted at RBC Borealis AI · interest from engineers at Google, Meta, Confluent",
    description: (
      <>
        Open-source agentic-coding CLI. One command provisions agentic-coding rules,
        MCP server hooks, and IDE prompts across 9 IDEs — Cursor, Windsurf, Claude Code,
        and more. Multi-module Node.js npm package. Onboarded 2,000+ technical and
        non-technical developers to agentic-coding workflows. Pitched to and adopted
        internally by RBC Borealis AI.
      </>
    ),
    codeBlock: {
      language: "bash",
      code: "npx rosettablueprint init",
    },
    tech: ["Node.js", "TypeScript", "npm", "MCP"],
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/rosettablueprint", primary: true },
      { label: "GitHub", href: "https://github.com/RajanChavada/rosetta" },
    ],
  },
  {
    title: "Neurovn",
    subtitle: "Open source · published to PyPI · live alpha at neurovn-alpha.vercel.app",
    description: (
      <>
        Python SDK and CLI for tracing agentic AI workflows. Decorator-based
        instrumentation (<code className="rounded bg-bg-subtle px-1.5 py-0.5 font-mono text-[0.85em]">@trace.agent</code>,{" "}
        <code className="rounded bg-bg-subtle px-1.5 py-0.5 font-mono text-[0.85em]">@trace.tool</code>) captures
        sessions, token usage, and tool calls across multi-agent pipelines. Paired with a
        drag-and-drop visual canvas that costs and computes P95 latency for any cyclic or
        DAG agent graph before a single API call, using Tarjan's SCC + topological sort
        with Rust-bound tiktoken for instant token accounting.
      </>
    ),
    codeBlock: {
      language: "python",
      code: `from neurovn import trace

@trace.agent(name="Research Agent", model="gpt-4o")
async def research(query: str): ...

@trace.tool(name="Web Search", tool_category="mcp_server")
async def web_search(query: str): ...`,
    },
    tech: [
      "Python",
      "TypeScript",
      "LangGraph",
      "Tarjan's SCC",
      "Rust-bound tiktoken",
      "PyPI",
    ],
    links: [
      { label: "Live app", href: "https://neurovn-alpha.vercel.app/", primary: true },
      { label: "PyPI", href: "https://pypi.org/project/neurovn/" },
      { label: "GitHub", href: "https://github.com/RajanChavada/neurovn" },
    ],
  },
  {
    title: "Agentic RAG for Hedge Funds",
    subtitle: "Patent-pending (RBC, 2025) · in production across 18,000+ RBC traders · ~6 hours saved per workflow",
    description: (
      <>
        The first agentic AI system to operate over proprietary client data — trade
        details, holdings, and regulated disclosures — combined with external siloed
        sources (Snowflake, RavenPack, Bloomberg, FactSet, 13F filings) and surfaced for
        hedge fund managers. The novel contribution: hierarchical orchestrator-based
        LangGraph workflows with human-in-the-loop validation and structured tool
        orchestration in a regulated financial environment. No prior system applied
        agentic AI over this class of client data; the patent covers the orchestration
        pattern.
      </>
    ),
    tech: [
      "FastAPI",
      "LangGraph",
      "Kafka",
      "Snowflake",
      "RavenPack",
      "Bloomberg API",
      "FactSet",
      "RAG",
      "HITL validation",
    ],
    links: [
      {
        label: "LinkedIn write-up",
        href: "https://www.linkedin.com/in/rajan-chavada/",
        primary: true,
      },
    ],
  },
]

const tier2Projects: Tier2Project[] = [
  {
    title: "PhysioPoint",
    badge: "Apple Swift Student Challenge 2026",
    description:
      "ARKit body-tracking app for physiotherapy and rehabilitation. Measures joint angles in real time — performing the same assessment a physiotherapist performs manually — for people who can't access or afford clinical care.",
    tech: ["SwiftUI", "ARKit", "RealityKit", "iOS 26 Foundation Models"],
    links: [{ label: "GitHub", href: "https://github.com/RajanChavada" }],
  },
  {
    title: "NVIDIA Alert Triage",
    badge: "Agentic SRE for GPU clusters",
    description:
      "Cyclic multi-agent workflow powered by NVIDIA Nemotron-70B that acts as a lead engineer for GPU training clusters. Manages DCGM metrics, Kubernetes pod states, Kafka partition lags, distributed logs. ~60% MTTR reduction with real-time GPU/VRAM/thermal view, XID error detection, and ranked remediation plans.",
    tech: ["LangChain", "LangGraph", "NVIDIA NIM", "Kafka", "Postgres", "MCP"],
    links: [{ label: "GitHub", href: "https://github.com/RajanChavada" }],
  },
  {
    title: "Badge",
    badge: "U of T Hacks 2026 Winner",
    description:
      "Vectorizing professional identity for hackathons, conferences, and career fairs. PCA on 728-dimensional vector → 3D knowledge graph with cosine similarity between user and recruiter/company. AI-extracted identity from résumés (Gemini) generates personalized talking points per company. ~86% of recruiters said conversations felt less transactional.",
    tech: ["React", "TypeScript", "Convex", "Clerk", "Gemini API", "ElevenLabs", "Snowflake"],
    links: [{ label: "GitHub", href: "https://github.com/RajanChavada" }],
  },
]

const legacyProjects: LegacyProject[] = [
  {
    name: "Plyce",
    description: "Local restaurant discovery, iOS",
    tech: "React Native · FastAPI · GCP",
    href: "https://github.com/RajanChavada/Plyce",
  },
  {
    name: "Chill Bill",
    description: "Financial wellness for Gen Z",
    tech: "React · Cloudflare Workers · Llama 2 · Plaid",
    href: "https://github.com/RajanChavada/Chill-Bill",
  },
  {
    name: "FitCheck",
    description: "AI outfit rating",
    tech: "Python CV · Flask",
    href: "https://github.com/RajanChavada/FitCheck",
  },
  {
    name: "FinSightGPT",
    description: "Trading analysis tool",
    tech: "Python · GPT API · React",
    href: "https://github.com/RajanChavada/FInSightGPT",
  },
  {
    name: "Arnold",
    description: "Fitness tracking app",
    tech: "React Native · Node.js · MongoDB",
    href: "https://github.com/RajanChavada/Arnold",
  },
  {
    name: "ASL Translator",
    description: "CNN-based sign-language translator (Western AI team)",
    tech: "Python · OpenCV · TensorFlow",
    href: "https://github.com/RajanChavada/asl-translator",
  },
]

function ProjectLinkRow({ links }: { links: ProjectLink[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {links.map((link, idx) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-1 text-[14px] font-medium transition-colors duration-150",
            link.primary
              ? "text-accent hover:text-accent-hover"
              : "text-text-secondary hover:text-text-primary",
          )}
        >
          {link.label === "GitHub" && <Github className="h-3.5 w-3.5" strokeWidth={2} />}
          {(link.label === "npm" || link.label === "PyPI") && (
            <Package className="h-3.5 w-3.5" strokeWidth={2} />
          )}
          <span>{link.label}</span>
          <ArrowUpRight className="h-3 w-3" strokeWidth={2} />
        </a>
      ))}
    </div>
  )
}

export function Projects() {
  const [showLegacy, setShowLegacy] = useState(false)

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Tier 1"
          title="Open source & production"
          description="Differentiated work that shipped to real users."
        />

        <ul className="space-y-12">
          {tier1Projects.map((project) => (
            <li
              key={project.title}
              className="rounded-xl border border-border bg-bg-elevated p-6 sm:p-7"
            >
              <header>
                <h3 className="font-display text-[1.4rem] leading-tight text-text-primary">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] text-text-secondary">{project.subtitle}</p>
              </header>

              <div className="mt-5 text-[15.5px] leading-[1.65] text-text-primary">
                {project.description}
              </div>

              {project.codeBlock && (
                <pre className="mt-5 overflow-x-auto rounded-lg border border-border bg-bg-subtle px-4 py-3 font-mono text-[13.5px] leading-relaxed text-text-primary">
                  <code>{project.codeBlock.code}</code>
                </pre>
              )}

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <TechChip key={t}>{t}</TechChip>
                ))}
              </div>

              <div className="mt-6 border-t border-border pt-5">
                <ProjectLinkRow links={project.links} />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Tier 2"
            title="Hackathons & showcases"
            description="Built fast, judged externally, recognized."
          />

          <ul className="grid gap-6 sm:grid-cols-2">
            {tier2Projects.map((project) => (
              <li
                key={project.title}
                className="rounded-xl border border-border bg-bg-elevated p-5 sm:p-6"
              >
                <header>
                  <h3 className="font-display text-[1.2rem] leading-tight text-text-primary">
                    {project.title}
                  </h3>
                  {project.badge && (
                    <p className="mt-1 text-[12.5px] font-medium text-accent">{project.badge}</p>
                  )}
                </header>

                <p className="mt-4 text-[14.5px] leading-relaxed text-text-primary">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <TechChip key={t}>{t}</TechChip>
                  ))}
                </div>

                <div className="mt-5 border-t border-border pt-4">
                  <ProjectLinkRow links={project.links} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <button
            type="button"
            onClick={() => setShowLegacy(!showLegacy)}
            className="flex w-full items-center justify-between border-b border-border pb-3 text-left"
            aria-expanded={showLegacy}
          >
            <span className="font-display text-[1.125rem] text-text-primary">
              Legacy projects
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-text-muted transition-transform duration-200",
                showLegacy && "rotate-180",
              )}
              strokeWidth={2}
            />
          </button>

          {showLegacy && (
            <ul className="mt-4 divide-y divide-border">
              {legacyProjects.map((p) => (
                <li key={p.name} className="py-3">
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
                    >
                      <span className="text-[15px] font-medium text-text-primary group-hover:text-accent">
                        {p.name}{" "}
                        <span className="font-normal text-text-secondary">— {p.description}</span>
                      </span>
                      <span className="font-mono text-[12px] text-text-muted">{p.tech}</span>
                    </a>
                  ) : (
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <span className="text-[15px] text-text-primary">
                        {p.name}{" "}
                        <span className="text-text-secondary">— {p.description}</span>
                      </span>
                      <span className="font-mono text-[12px] text-text-muted">{p.tech}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
