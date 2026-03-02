export interface Experience {
  id: string
  title: string
  company: string
  period: string
  location?: string
  bullets: string[]
  skills: string[]
}

export const experiences: Experience[] = [
  {
    id: "experience-borealis",
    title: "ML/AI & Infrastructure Scientist",
    company: "Borealis AI | Royal Bank of Canada",
    period: "Dec 2025 – Present",
    location: "Toronto, ON",
    bullets: [
      "Led migration of 3 mission-critical credit capacity ML models to NVIDIA DGX A100/H100 OCP cluster; zero-downtime cutover, 99.95% uptime.",
      "Reduced P95 inference latency 25%, 2× throughput via GPU model serving (dynamic batching, quantization).",
      "Improved deployment velocity 60% with GitHub Actions, OpenShift rollout automation.",
      "mTLS sidecar configs, real-time monitoring for 99.9%+ SLA.",
    ],
    skills: ["PyTorch", "TensorFlow", "Triton", "Kubernetes", "OpenShift", "GitHub Actions", "mTLS"],
  },
  {
    id: "experience-intact",
    title: "Cloud Engineer",
    company: "Intact Insurance",
    period: "Sept 2025 – Dec 2025",
    location: "Toronto, ON",
    bullets: [
      "Reduced manual provisioning 65% with Terraform modules for 190+ AWS accounts.",
      "ETL pipelines into Amazon Bedrock for cloud optimization insights.",
      "Vulnerability management across 50+ K8s/OpenShift clusters, 95% compliance, SageMaker anomaly detection.",
    ],
    skills: ["AWS", "Terraform", "Kubernetes", "OpenShift", "Amazon Bedrock", "SageMaker"],
  },
  {
    id: "experience-rbc-amplify",
    title: "Quantitative Software/AI Engineer",
    company: "Royal Bank of Canada | Amplify",
    period: "May 2025 – Aug 2025",
    location: "Toronto, ON",
    bullets: [
      "Multi-agent research assistant over Snowflake (FastAPI), 60% research efficiency, 10k+ daily queries.",
      "Kafka pipelines processing 50k+ articles/day, sub-second latency for 18k+ users.",
      "50% CI/CD reduction via Docker, Tekton across 8 K8s/OpenShift clusters.",
      "Prophet/XGBoost forecasting services, 3× throughput.",
    ],
    skills: ["FastAPI", "Snowflake", "Kafka", "Docker", "Tekton", "Prophet", "XGBoost"],
  },
  {
    id: "experience-rbc-client-services",
    title: "Full-Stack Software Engineer Intern (Client Services)",
    company: "Royal Bank of Canada | Capital Markets",
    period: "May 2024 – Aug 2024",
    location: "Toronto, ON",
    bullets: [
      "AI chatbot with RBC LLM gateway + vector search (RAG), 22% support ticket reduction.",
      "Semantic search over investor portal docs.",
      "Lighthouse CI for React trading platform (4,500 DAU).",
    ],
    skills: ["React", "RAG", "Vector Search", "Lighthouse CI", "LLM"],
  },
  {
    id: "experience-rbc-global-equities",
    title: "Full-Stack Software Engineer Intern (Global Equities)",
    company: "Royal Bank of Canada | Capital Markets",
    period: "May 2023 – Aug 2023",
    location: "Toronto, ON",
    bullets: [
      "CVE triage platform (React.js, Flask), 30% production error reduction, ~40% triage time cut.",
      "Priority-based caching for P1 CVE streaming, 99.8% SLA, 3 regional desks.",
    ],
    skills: ["Flask", "React.js", "REST API", "Python", "Automation", "CI/CD"],
  },
]

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find((e) => e.id === id)
}
