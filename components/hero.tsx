import Link from "next/link"
import { FileText, Github, Linkedin, ExternalLink as ExternalIcon, Sparkles, Package, Activity } from "lucide-react"
import { ProofPill } from "@/components/ui/proof-pill"

export function Hero() {
  return (
    <section id="hero" className="pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="animate-subtle-rise">
          <h1 className="font-display text-[2.75rem] leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-[3.75rem]">
            Rajan Chavada
          </h1>
          <p className="mt-4 text-base text-text-secondary sm:text-lg">
            ML Software Engineer · Agentic AI · Production Systems
          </p>
        </div>

        <ul className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
          <li>
            <ProofPill icon={Sparkles}>
              Patent-pending agentic RAG — 18,000+ RBC traders
            </ProofPill>
          </li>
          <li>
            <ProofPill icon={Package}>
              Rosetta · 2,000+ downloads · adopted at RBC Borealis AI
            </ProofPill>
          </li>
          <li>
            <ProofPill icon={Activity}>
              Neurovn · open-source agentic tracing SDK on PyPI
            </ProofPill>
          </li>
        </ul>

        <p className="mt-8 text-[15px] text-text-secondary">
          BSc Computer Science @ Western · class of 2027 · Toronto, ON
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors duration-150 hover:bg-accent-hover"
          >
            <FileText className="h-4 w-4" strokeWidth={2} />
            Resume
          </a>
          <a
            href="https://github.com/RajanChavada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-text-primary transition-colors duration-150 hover:bg-bg-subtle"
          >
            <Github className="h-4 w-4" strokeWidth={2} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rajan-chavada/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-text-primary transition-colors duration-150 hover:bg-bg-subtle"
          >
            <Linkedin className="h-4 w-4" strokeWidth={2} />
            LinkedIn
          </a>
          <a
            href="https://medium.com/@rajanchavada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-text-primary transition-colors duration-150 hover:bg-bg-subtle"
          >
            <ExternalIcon className="h-4 w-4" strokeWidth={2} />
            Medium
          </a>
        </div>
      </div>
    </section>
  )
}
