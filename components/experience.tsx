"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

interface Role {
  company: string
  affiliation?: string
  role: string
  dates: string
  location: string
  headline: string
  details: string
}

const roles: Role[] = [
  {
    company: "Borealis AI",
    affiliation: "RBC AI Research Lab",
    role: "ML Software Engineering Intern",
    dates: "Dec 2025 – Apr 2026",
    location: "Vancouver, BC (Remote)",
    headline:
      "Cut inference latency 25% and doubled throughput on the client-capacity model server via KServe + NVIDIA Triton. Migrated 3 production model pipelines to the AI Farm H100 cluster with 99.95% uptime on mission-critical endpoints.",
    details:
      "KServe with serverless NVIDIA Triton · GitHub Actions CI/CD onto H100 cluster · Airflow inference schedules with Grafana + Prometheus · Celery / worker / Flower pods on OpenShift behind a FastAPI gateway with mTLS ingress and cert-based auth.",
  },
  {
    company: "Intact Insurance",
    affiliation: "AWS",
    role: "Site Reliability Engineering Intern",
    dates: "Sept 2025 – Dec 2025",
    location: "Toronto, ON",
    headline:
      "Built Terraform IaC libraries spanning 190+ AWS accounts, cutting infrastructure provisioning time by 65%. Hit 95% cloud-cost compliance coverage and cut security audit latency by 75% across 50+ Kubernetes clusters.",
    details:
      "Amazon Bedrock ETL pipelines for cost optimization · DaemonSet vulnerability scanning · 190+ account scope.",
  },
  {
    company: "Royal Bank of Canada",
    affiliation: "Amplify (Hedge Funds Research)",
    role: "Software Engineering Intern",
    dates: "May 2025 – Aug 2025",
    location: "New York, NY (Remote)",
    headline:
      "Patent-pending agentic orchestration system. Now in production across 18,000+ front-office traders at RBC Capital Markets, saving ~6 hours of manual research per trader workflow.",
    details:
      "First-of-its-kind agentic AI application over proprietary client data — trade details, holdings, and regulated disclosures — combined with external sources (Snowflake, RavenPack, Bloomberg, FactSet, 13F filings). Hierarchical orchestrator-based LangGraph workflow with human-in-the-loop validation gates and structured tool orchestration. FastAPI + Kafka stack. The patent covers the novel application of agentic AI over regulated client data in a financial services environment.",
  },
  {
    company: "Royal Bank of Canada",
    affiliation: "Capital Markets (Client Services)",
    role: "Software Engineering Intern",
    dates: "May 2024 – Aug 2024",
    location: "New York, NY (Remote)",
    headline:
      "Built a RAG agent over 300,000+ financial documents on RBC's internal LLM gateway. Cut client support ticket triage by 22% and powered a 4,500 DAU dashboard.",
    details:
      "LLM-driven analysis + summarized insights surface · React + Node.js components powering mission-critical client-facing dashboards · Lighthouse CI profiled across 12+ build configurations.",
  },
  {
    company: "Royal Bank of Canada",
    affiliation: "Global Equities",
    role: "Software Engineering Intern",
    dates: "May 2023 – Aug 2023",
    location: "Toronto, ON",
    headline:
      "Built a full-stack CVE triage platform adopted across 3 trading desks (45+ traders) and 100+ Capital Markets engineering teams. Cut developer triage time by 40% and prod errors by 30%.",
    details:
      "React + FastAPI · auto-ingested MySQL + JIRA REST API on a cron schedule · TTL caching + priority-based alert routing for 99.8% on-call SLA.",
  },
]

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Quantified outcomes — click any role to expand."
        />

        <ul className="divide-y divide-border border-y border-border">
          {roles.map((role, idx) => {
            const isOpen = openIndex === idx
            return (
              <li key={`${role.company}-${role.dates}`}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="group flex w-full items-start gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1">
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <h3 className="font-display text-[1.1rem] leading-snug text-text-primary">
                        {role.company}
                        {role.affiliation && (
                          <span className="font-sans text-[13px] font-normal text-text-secondary">
                            {" "}
                            · {role.affiliation}
                          </span>
                        )}
                      </h3>
                      <p className="font-mono text-[12px] text-text-muted">
                        {role.dates}
                      </p>
                    </div>
                    <p className="mt-1 text-[14px] text-text-secondary">
                      {role.role} · {role.location}
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed text-text-primary">
                      {role.headline}
                    </p>

                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-4 rounded-md bg-bg-subtle px-4 py-3 text-[14.5px] leading-relaxed text-text-secondary">
                          {role.details}
                        </p>
                      </div>
                    </div>
                  </div>

                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border text-text-muted transition-colors duration-150 group-hover:border-text-muted group-hover:text-text-primary">
                    {isOpen ? (
                      <Minus className="h-3.5 w-3.5" strokeWidth={2} />
                    ) : (
                      <Plus className="h-3.5 w-3.5" strokeWidth={2} />
                    )}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
