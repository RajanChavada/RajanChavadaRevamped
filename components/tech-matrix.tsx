import { SectionHeading } from "@/components/ui/section-heading"
import { TechChip } from "@/components/ui/tech-chip"

interface TechRow {
  label: string
  items: string[]
}

const techRows: TechRow[] = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "Swift", "C++", "SQL", "Java"],
  },
  {
    label: "AI / ML",
    items: [
      "LangGraph",
      "LangChain",
      "PyTorch",
      "NVIDIA Triton",
      "NVIDIA NIM",
      "RAG",
      "Vector DBs",
      "MCP",
    ],
  },
  {
    label: "Backend",
    items: ["FastAPI", "Node.js", "Flask", "Kafka", "Postgres", "Supabase", "Snowflake"],
  },
  {
    label: "Frontend",
    items: ["Next.js", "React", "React Native", "SwiftUI", "Tailwind"],
  },
  {
    label: "Cloud & Infra",
    items: [
      "AWS",
      "GCP",
      "Kubernetes",
      "OpenShift",
      "Terraform",
      "GitHub Actions",
      "KServe",
      "Airflow",
    ],
  },
  {
    label: "Observability",
    items: ["Grafana", "Prometheus", "DCGM", "OpenTelemetry"],
  },
]

export function TechMatrix() {
  return (
    <section id="tech" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Stack"
          title="Tech I work with"
          description="Daily drivers across model serving, agentic systems, and production infra."
        />

        <dl className="space-y-6">
          {techRows.map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6"
            >
              <dt className="font-mono text-[12px] uppercase tracking-[0.1em] text-text-muted sm:w-36 sm:shrink-0 sm:pt-1.5">
                {row.label}
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {row.items.map((item) => (
                  <TechChip key={item}>{item}</TechChip>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
