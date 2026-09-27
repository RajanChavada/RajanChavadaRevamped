export const links = {
  email: "mailto:RajanChavada111@gmail.com",
  resume: "/resume.pdf",
  github: "https://github.com/RajanChavada",
  linkedin: "https://www.linkedin.com/in/rajan-chavada/",
  medium: "https://medium.com/@rajanchavada",
  devpost: "https://devpost.com/JimmyChavada",
  x: "https://x.com/RajanChavada",
}

export const socials: { label: string; href: string }[] = [
  { label: "github", href: links.github },
  { label: "linkedin", href: links.linkedin },
  { label: "medium", href: links.medium },
  { label: "devpost", href: links.devpost },
  { label: "x", href: links.x },
]

export const currently = "shipping canary deploys at Bree (YC)"

export interface Role {
  company: string
  team?: string
  role: string
  dates: string
  summary: string
  proudOf: string
  details: string[]
}

export const roles: Role[] = [
  {
    company: "Bree",
    team: "Y Combinator",
    role: "Software Engineer Intern",
    dates: "Sep 2026 – now",
    summary:
      "One of two backend engineers on a small founding team. I own the weekly release train: CI/CD, canaries on Lambda and API Gateway, and whatever shows up in Datadog at 11pm.",
    proudOf: "p99 API latency down 35%",
    details: [
      "Staged rollouts route 40%+ of live traffic through canaries, so 100k+ users never see a bad deploy.",
      "Tracked down latency bottlenecks across the TypeScript and Python backend without breaking the financial math.",
      "Deploys went from ~5 minutes to under 1.",
    ],
  },
  {
    company: "RBC Borealis AI",
    team: "RBC's AI research lab",
    role: "ML Software Engineer Intern",
    dates: "Jan – Aug 2026",
    summary:
      "Sat between researchers and GPUs. Moved credit-capacity model retraining onto NVIDIA Triton and built the dev environment every researcher on the team now starts from.",
    proudOf: "12GB model → 170MB (70x smaller)",
    details: [
      "Inference time cut 44% after the Triton migration, working directly with researchers on architecture changes.",
      "Built the devcontainer system from scratch: multi-hour manual setup became one-click GPU provisioning.",
      "Distributed training pipelines on PyTorch + RUN:AI so compute gets allocated instead of fought over.",
      "Pitched Rosetta to the lab; other engineers on the team now use it.",
    ],
  },
  {
    company: "Intact Insurance",
    role: "Site Reliability Engineering Intern",
    dates: "Sep – Dec 2025",
    summary:
      "Wrote Terraform so app teams could stop filing tickets for infrastructure and just provision it themselves, compliant by default.",
    proudOf: "provisioning time down 65%",
    details: [
      "Reusable AWS modules for networking, permissions and access control.",
      "With a senior security engineer, turned a manual compliance review into a pipeline that clusters error patterns across the container fleet, reaching 95% compliance.",
    ],
  },
  {
    company: "RBC Amplify",
    team: "Hedge fund research",
    role: "AI Engineer Intern",
    dates: "May – Aug 2025",
    summary:
      "Built an agentic research system that reads SEC filings and live news so traders don't have to before a client meeting. It's now patent-pending.",
    proudOf: "trader prep: 6 hours → 2",
    details: [
      "LangChain + FastAPI backend, React/TypeScript frontend, Dockerized on OpenShift.",
      "Most of the work was turning vague stakeholder asks into a spec people could actually sign off on.",
      "I wrote about filing the patent at 21 on Medium.",
    ],
  },
  {
    company: "RBC Capital Markets",
    role: "Software Engineer Intern",
    dates: "May – Aug 2024",
    summary:
      "Built the React component library traders now see every day, plus a ranking service that flags which news actually moves the market.",
    proudOf: "30+ components, 100+ daily traders",
    details: [
      "Reusable React/TypeScript components used across multiple business lines; page loads got faster along the way.",
      "Regression-based ranking service on Snowflake + ClickHouse, served via FastAPI to 3 trading desks, 95%+ accuracy on signal-to-movement for high-impact news days.",
    ],
  },
  {
    company: "RBC Global Equities",
    role: "Software Engineer Intern",
    dates: "May – Aug 2023",
    summary:
      "My first internship. Built a CVE triage platform so engineers could see which vulnerabilities actually mattered, instead of scrolling a spreadsheet.",
    proudOf: "triage time down 40%",
    details: [
      "React + FastAPI, auto-ingesting MySQL and JIRA on a schedule.",
      "Adopted across 3 trading desks and 100+ Capital Markets engineering teams.",
    ],
  },
]

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  part: string
  name: string
  status: string
  stamp: string
  line: string
  body: string
  proof: string
  stack: string
  links: ProjectLink[]
  video?: { src: string; poster: string; label: string }
  snippet?: string
  note?: string
}

export const projects: Project[] = [
  {
    part: "RC-001",
    name: "Neurovn",
    status: "live alpha",
    stamp: "Solo build",
    line: "Know what your agent costs before it runs.",
    body:
      "Drop agents, tools and conditions on a canvas and Neurovn estimates token cost and latency for the whole graph, loops included, before a single API call happens. It covers 3,500+ models across 700+ providers, and a Python SDK traces real runs so you can check the estimate against reality.",
    proof: "Inbound interest from Google Cloud engineers.",
    stack: "React · TypeScript · Node.js · Python SDK · graph algorithms",
    links: [
      { label: "live app", href: "https://neurovn-alpha.vercel.app/" },
      { label: "github", href: "https://github.com/RajanChavada/Neurovn" },
      { label: "pypi", href: "https://pypi.org/project/neurovn/" },
    ],
    video: { src: "/demos/neurovn.mp4", poster: "/demos/neurovn.jpg", label: "Neurovn demo" },
    note: "started because nobody at work could tell me what our agents cost",
  },
  {
    part: "RC-002",
    name: "CacheLane",
    status: "on npm",
    stamp: "Shipping",
    line: "Stop coding agents from burning your API budget.",
    body:
      "A tiered, fail-open caching layer for Claude Code sessions. It sits between the agent and the API, prunes and caches what it safely can, and gets out of the way when it can't. Co-designed with Aditya Tripuraneni; the team uses it daily.",
    proof: "3,000+ npm downloads.",
    stack: "Node.js · TypeScript · SQLite · MCP",
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/cachelane" },
      { label: "github", href: "https://github.com/Aditya-Tripuraneni/CacheLane" },
    ],
    video: { src: "/demos/cachelane.mp4", poster: "/demos/cachelane.jpg", label: "CacheLane demo" },
    snippet: "npm i -g cachelane && cachelane install",
  },
  {
    part: "RC-003",
    name: "Rosetta",
    status: "on npm",
    stamp: "Adopted",
    line: "Write your agent rules once. Use them in 9 IDEs.",
    body:
      "A CLI that translates agentic-coding configs between Cursor, Claude Code, Windsurf and six others from one master spec. I pitched it at Borealis AI and other engineers on the team picked it up.",
    proof: "2,000+ npm downloads.",
    stack: "Node.js · TypeScript · MCP",
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/rosettablueprint" },
      { label: "github", href: "https://github.com/RajanChavada/Rosetta" },
    ],
    snippet: "npx rosettablueprint init",
  },
  {
    part: "RC-004",
    name: "Agentic research at RBC",
    status: "internal",
    stamp: "Patent pending",
    line: "SEC filings and live news, read for you before the client call.",
    body:
      "A multi-agent research system for hedge-fund coverage at RBC Amplify. It pulls filings and news, reconciles them, and hands traders a brief. It's internal, so there's no demo, but the patent application covers how it's orchestrated.",
    proof: "Trader prep time went from 6 hours to 2.",
    stack: "LangChain · FastAPI · React · Docker · OpenShift",
    links: [
      {
        label: "the patent story",
        href: "https://medium.com/@rajanchavada/i-filed-a-patent-at-21-during-my-internship-heres-what-nobody-tells-you-about-the-process-896278594b53",
      },
    ],
  },
]

export interface SideBuild {
  name: string
  what: string
  tag?: string
  href?: string
}

export const sideBuilds: SideBuild[] = [
  {
    name: "Badge",
    what: "résumés → vectors → a 3D map of who you should talk to at a career fair",
    tag: "UofT Hacks winner",
    href: links.devpost,
  },
  {
    name: "PhysioPoint",
    what: "ARKit app that measures joint angles like a physiotherapist would",
    tag: "Swift Student Challenge",
    href: links.github,
  },
  {
    name: "NVIDIA alert triage",
    what: "multi-agent on-call engineer for GPU clusters on Nemotron-70B",
    href: links.github,
  },
  {
    name: "Plyce",
    what: "local restaurant discovery for iOS",
    href: "https://github.com/RajanChavada/Plyce",
  },
  {
    name: "Chill Bill",
    what: "financial wellness app for Gen Z",
    href: "https://github.com/RajanChavada/Chill-Bill",
  },
  {
    name: "ASL translator",
    what: "CNN sign-language translator, Western AI team",
    href: "https://github.com/RajanChavada/asl-translator",
  },
]

export interface OssPr {
  repo: string
  stars?: string
  what: string
  href: string
}

export const ossPrs: OssPr[] = [
  {
    repo: "crawl4ai",
    stars: "73k★",
    what: "deleted 1,900+ lines of dead code (an unreachable duplicate file and two orphaned functions)",
    href: "https://github.com/unclecode/crawl4ai/pull/2042",
  },
  {
    repo: "haystack",
    stars: "26k★",
    what: "four test cases were silently sharing one pytest ID; gave them their own",
    href: "https://github.com/deepset-ai/haystack/pull/11866",
  },
  {
    repo: "opik",
    what: "Bedrock pricing lookups broke on version-pinned model names; added a regex fallback",
    href: "https://github.com/comet-ml/opik/pull/7339",
  },
  {
    repo: "camel-ai",
    what: "Anthropic rate-limit errors no longer crash the ChatAgent retry loop",
    href: "https://github.com/camel-ai/camel",
  },
  {
    repo: "langfuse",
    what: "removed retired feature-preview plumbing",
    href: "https://github.com/langfuse/langfuse",
  },
]

export const toolbox: { label: string; items: string }[] = [
  { label: "write in", items: "Python, TypeScript, SQL, Java, Swift" },
  { label: "build with", items: "React, Next.js, FastAPI, Node, LangChain, PyTorch" },
  { label: "ship on", items: "AWS, GCP, Docker, Kubernetes, OpenShift, Terraform, GitHub Actions" },
  { label: "watch with", items: "Datadog, Grafana, Prometheus, NVIDIA Triton, RUN:AI" },
]

export interface ExternalPost {
  title: string
  description: string
  href: string
  date: string
}

export const mediumPosts: ExternalPost[] = [
  {
    title: "140 Engineers, Not One Knew What Their Agentic Workflow Was Costing.",
    description: "Why I started building Neurovn, and what happened when I asked a lab of 140 engineers a simple question.",
    href: "https://medium.com/@rajanchavada/140-engineers-f4ce6795564d",
    date: "2026-04-15",
  },
  {
    title: "I Filed a Patent at 21 During My Internship.",
    description: "What nobody tells you about the process: the legal back-and-forth, the politics, and the writing that actually matters.",
    href: "https://medium.com/@rajanchavada/i-filed-a-patent-at-21-during-my-internship-heres-what-nobody-tells-you-about-the-process-896278594b53",
    date: "2026-04-14",
  },
  {
    title: "How I Use AI as a Developer",
    description: "The context I give models, what I leave out, and where I stop letting them drive.",
    href: "https://medium.com/@rajanchavada/how-i-use-ai-as-a-developer-9a281884e5eb",
    date: "2025-12-21",
  },
]
