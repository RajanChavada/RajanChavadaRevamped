"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "ML/AI & Infrastructure Scientist",
    company: "Borealis AI | Royal Bank of Canada",
    location: "Toronto, ON",
    period: "Dec 2025 – Present",
    date: "2025",
    bullets: [
      "Led migration of 3 mission-critical credit capacity ML models to a new NVIDIA DGX A100/H100 OCP cluster by reconfiguring Triton inference endpoints, K8 deployments, and CI/CD pipelines, resulting in zero-downtime cutover and 99.95% production uptime during cluster deprecation.",
      "Reduced P95 inference latency by 25% and increased throughput 2× by optimizing GPU-based model serving (dynamic batching, quantization, container tuning) and conducting structured load/performance testing prior to release.",
      "Improved deployment velocity by 60% by automating model build, validation, and OpenShift rollout workflows using GitHub Actions, YAML configurations, and containerized PyTorch/TensorFlow services, cutting release cycles from days to hours.",
      "Enhanced production reliability and security by implementing mTLS sidecar configurations and real-time monitoring for SLA enforcement (99.9%+), reducing incident detection time by 40% and ensuring encrypted service-to-service communication.",
    ],
    skills: ["PyTorch", "TensorFlow", "Triton", "Kubernetes", "OpenShift", "GitHub Actions", "mTLS"],
    side: "right",
  },
  {
    title: "Cloud Engineer",
    company: "Intact Insurance",
    location: "Toronto, ON",
    period: "Sept 2025 – Dec 2025",
    date: "2025",
    bullets: [
      "Reduced manual infrastructure provisioning time by 65% by designing Terraform modules for 190+ AWS accounts, enabling self-service infrastructure-as-code and accelerating ML workload deployment.",
      "Built ETL pipelines that ingested infrastructure telemetry and system logs into Amazon Bedrock (generative AI service), enabling autonomous insights and recommendations for cloud optimization and compliance checks.",
      "Deployed vulnerability management automation across 50+ Kubernetes/OpenShift clusters via DaemonSet, achieving 95% compliance coverage and cutting security audit time by 75% using SageMaker-based anomaly detection and automated remediation workflows.",
    ],
    skills: ["AWS", "Terraform", "Kubernetes", "OpenShift", "Amazon Bedrock", "SageMaker"],
    side: "left",
  },
  {
    title: "Quantitative Software/AI Engineer",
    company: "Royal Bank of Canada | Amplify",
    location: "Toronto, ON",
    period: "May 2025 – Aug 2025",
    date: "2025",
    bullets: [
      "Designed and shipped a multi-agent research assistant over Snowflake using Python (FastAPI) microservices and well-defined APIs, improving research efficiency by 60% for 10,000+ daily internal queries and integrating multiple LLM tools.",
      "Built Kafka-based data pipelines processing 50k+ daily articles with automated performance monitoring, maintaining sub-second latency for 18,000+ users in a large distributed environment, and feeding downstream ML ranking models.",
      "Reduced CI/CD deployment time by 50% by containerizing services with multi-stage Docker builds and Tekton pipelines across 8 Kubernetes/OpenShift clusters, accelerating safe rollout of new ML and backend components.",
      "Developed and optimized forecasting services (Prophet/XGBoost) to achieve 3× higher throughput while preserving accuracy, balancing performance, cost, and maintainability for batch inference workloads.",
    ],
    skills: ["FastAPI", "Snowflake", "Kafka", "Docker", "Tekton", "Prophet", "XGBoost"],
    side: "right",
  },
  {
    title: "Full-Stack Software Engineer Intern (Client Services)",
    company: "Royal Bank of Canada | Capital Markets",
    location: "Toronto, ON",
    period: "May 2024 – Aug 2024",
    date: "2024",
    bullets: [
      "Built a client-facing AI chatbot leveraging RBC's internal LLM gateway and a vector search database (semantic embeddings) to provide RAG-powered responses to investor service inquiries, reducing support tickets by 22%.",
      "Implemented semantic search and vector-optimized queries over investor portal documentation, enabling the chatbot to retrieve contextually relevant answers with high precision for common client questions about trading platforms and account management.",
      "Built tooling and performance monitoring for the React-based trading platform serving 4,500 DAU, using Lighthouse CI to profile 12+ configs and catch performance regressions before release.",
    ],
    skills: ["React", "RAG", "Vector Search", "Lighthouse CI", "LLM"],
    side: "left",
  },
  {
    title: "Full-Stack Software Engineer Intern (Global Equities)",
    company: "Royal Bank of Canada | Capital Markets",
    location: "Toronto, ON",
    period: "May 2023 – Aug 2023",
    date: "2023",
    bullets: [
      "Engineered internal CVE triage platform with React.js, Flask REST API, and weekly cron scheduling parsing P1 CVE data from Microsoft SSMS across 6+ sources, cutting production errors by 30% and developer triage time by ~40%.",
      "Designed priority-based caching routing layer to stream P1 CVE to on-call engineers, reducing MTTA by 30% and achieving 99.8% SLA compliance with global equities trading schedule across 3 regional trading desks.",
    ],
    skills: ["Flask", "React.js", "REST API", "Python", "Automation", "CI/CD"],
    side: "right",
  },
]

export function Experience() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            My journey in software development and cloud architecture
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform -translate-x-1/2 hidden md:block" />

          {experiences.map(
            (_, index) =>
              index < experiences.length - 1 && (
                <div
                  key={`line-${index}`}
                  className="absolute left-1/2 w-0.5 h-12 bg-gradient-to-b from-purple-400 to-pink-400 transform -translate-x-1/2 hidden md:block"
                  style={{
                    top: `${(index + 1) * (100 / experiences.length)}%`,
                  }}
                />
              ),
          )}

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative transition-all duration-700 ${
                  visibleItems.includes(index) ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-8"
                }`}
              >
                <div
                  className="absolute left-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-background transform -translate-x-1/2 z-10 cursor-pointer animate-pulse-slow hidden md:block shadow-lg"
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                />

                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 text-sm font-semibold text-primary hidden md:block">
                  {exp.date}
                </div>

                <div className={`flex ${exp.side === "left" ? "justify-start" : "justify-end"}`}>
                  <div className={`w-full md:w-5/12 ${exp.side === "left" ? "md:pr-8" : "md:pl-8"}`}>
                    <Card
                      className={`project-card transition-all duration-300 ${hoveredItem === index ? "scale-105 shadow-xl" : ""}`}
                    >
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h3>
                            <div className="flex flex-col space-y-1 text-muted-foreground">
                              <div className="flex items-center">
                                <Building2 className="h-4 w-4 mr-2" />
                                <span className="text-sm">{exp.company}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span className="text-sm">{exp.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-2" />
                                <span className="text-sm">{exp.period}</span>
                              </div>
                            </div>
                          </div>

                          <ul className="space-y-2 text-muted-foreground text-sm text-pretty list-disc list-inside">
                            {exp.bullets.map((bullet, i) => (
                              <li key={i}>{bullet}</li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <Badge
                                key={skill}
                                className="text-xs bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-700 dark:text-purple-100 hover:from-purple-500/30 hover:to-pink-500/30"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
