export interface Project {
  title: string
  tagline: string
  description: string
  image: string
  github?: string
  demo?: string
  linkedin?: string
}

export const projects: Project[] = [
  {
    title: "PhysioPoint",
    tagline: "Apple Swift Student Challenge 2026",
    description:
      "PhysioPoint is designed for individuals who need physiotherapy or rehabilitation but face barriers like cost, access, or intimidation around clinical care. It empowers people to begin and maintain recovery on their own terms with structured, guided programs. Uses ARKit body tracking to measure joint angles in real time—performing the same assessment a physiotherapist performs manually—because recovery should not depend on what someone can afford.",
    image: "/images/physiopoint-mockup.png",
    github: "https://github.com/RajanChavada/PhysioPoint",
    demo: "https://www.youtube.com/watch?v=2WARVVFpDEo",
  },
  {
    title: "NVIDIA Alert Triage",
    tagline: "Agentic SRE layer",
    description:
      "Agentic SRE layer that automates the observability crawl to reduce MTTR. Cyclic multi-agent workflow powered by NVIDIA Nemotron-70B that acts as a lead engineer. Manages DCGM metrics, Kubernetes pod states, Kafka partition lags, and distributed logs. ~60% MTTR reduction with real-time GPU/VRAM/thermal view, XID error detection, and ranked remediation plans.",
    image: "/images/nvidia-triage-screenshot.png",
    github: "https://lnkd.in/e7ZAgfuY",
    demo: "https://lnkd.in/eBPmv7AQ",
  },
  {
    title: "Badge",
    tagline: "U of T Hacks 2026 Winner",
    description:
      "Vectorizing professional identity for meaningful connections at hackathons, conferences, and career fairs. PCA on 728-dimensional vector → 3D knowledge graph with cosine similarity between user and recruiter/company. AI-extracted identity from resume (Gemini) generates personalized talking points per company. ~86% of recruiters said conversations felt less transactional.",
    image: "/images/badge-screenshot.png",
    github: "https://github.com/RajanChavada/Badge",
    demo: "https://badge-sigma.vercel.app",
    linkedin:
      "https://www.linkedin.com/feed/update/urn:li:activity:7420663481743425536/",
  },
  {
    title: "Plyce",
    tagline: "Restaurant Discovery",
    description:
      "Local restaurant discovery app built with React Native, FastAPI, and Google Cloud. iOS deployment with real-time discovery and recommendations.",
    image: "/images/plyce-screenshot.png",
    github: "https://github.com/RajanChavada/Plyce",
  },
  {
    title: "Chill Bill",
    tagline: "Financial Wellness",
    description:
      "Financial wellness platform with React, TypeScript, Cloudflare Workers, Llama 2, and Plaid API integration for personal finance insights.",
    image: "/financial-wellness-app-dashboard.png",
    github: "https://github.com/RajanChavada/Chill-Bill",
  },
  {
    title: "FitCheck",
    tagline: "AI Outfit Rating",
    description:
      "AI-powered outfit rating app using Python, Computer Vision, and ML. Flask backend for real-time fashion recommendations.",
    image: "/fashion-outfit-rating-app.jpg",
    github: "https://github.com/RajanChavada/FitCheck",
  },
]
