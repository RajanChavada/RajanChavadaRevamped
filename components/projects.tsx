"use client"

import { useState, useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Smartphone, Cpu, Users, Globe, Code2 } from "lucide-react"
import RadialOrbitalTimeline, { TimelineItem } from "@/components/ui/radial-orbital-timeline"

const projects = [
  {
    title: "PhysioPoint",
    description:
      "Apple Swift Student Challenge 2026. iOS/iPadOS rehabilitation app—recovery without the cost, from home. ARKit body tracking measures joint angles in real time, performing the same assessment a physiotherapist does manually.",
    image: "/images/physiopoint-mockup.png",
    tech: ["Swift", "SwiftUI", "ARKit", "RealityKit", "iOS"],
    github: "https://github.com/RajanChavada/PhysioPoint",
    demo: "https://www.youtube.com/watch?v=2WARVVFpDEo",
    featured: true,
    category: "Mobile / AR",
    icon: Smartphone,
  },
  {
    title: "NVIDIA Alert Triage Agent",
    description:
      "Agentic SRE layer powered by NVIDIA Nemotron-70B. LangGraph cyclic multi-agent workflow automates the observability crawl across DCGM, Kubernetes, Kafka, and Elasticsearch. ~60% MTTR reduction.",
    image: "/images/nvidia-triage-screenshot.png",
    tech: ["LangChain", "LangGraph", "NVIDIA NIM", "Kafka", "MCP"],
    github: "https://lnkd.in/e7ZAgfuY",
    demo: "https://lnkd.in/eBPmv7AQ",
    featured: true,
    category: "AI / SRE",
    icon: Cpu,
  },
  {
    title: "Badge",
    description:
      "U of T Hacks 2026 Winner. Vectorizing professional identity—PCA on 728-dim vector → 3D knowledge graph. AI-extracted identity from resume generates talking points. ~86% of recruiters said conversations felt less transactional.",
    image: "/images/badge-screenshot.png",
    tech: ["React", "TypeScript", "Convex", "Gemini", "Snowflake"],
    github: "https://github.com/RajanChavada/Badge",
    demo: "https://badge-sigma.vercel.app",
    videoEmbed: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7420663481743425536",
    featured: true,
    category: "Web App",
    icon: Users,
  },
  {
    title: "Plyce",
    description: "React Native iOS app for local restaurant discovery with location-based search and Google Cloud Places API.",
    image: "/images/plyce-screenshot.png",
    tech: ["React Native", "FastAPI", "Google Cloud", "iOS"],
    github: "https://github.com/RajanChavada/Plyce",
    featured: false,
    category: "Mobile App",
    icon: Globe,
  },
  {
    title: "Chill Bill",
    description: "Gen Z financial literacy platform merging budgeting with mental health support, sentiment analysis, and gamified progress tracking.",
    image: "/financial-wellness-app-dashboard.png",
    tech: ["React", "TypeScript", "Cloudflare Workers", "Llama 2", "Plaid API"],
    github: "https://github.com/RajanChavada/Chill-Bill",
    featured: false,
    category: "Web App",
    icon: Globe,
  },
  {
    title: "FitCheck",
    description: "AI-powered outfit rating and recommendation system with computer vision for style analysis.",
    image: "/fashion-outfit-rating-app.jpg",
    tech: ["Python", "Computer Vision", "Machine Learning", "Flask"],
    github: "https://github.com/RajanChavada/FitCheck",
    featured: false,
    category: "AI/ML",
    icon: Code2,
  },
]

const allTechnologies = Array.from(new Set(projects.flatMap((project) => project.tech)))

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  const displayedProjects = showAll ? projects : projects.slice(0, 6)
  const filteredProjects = selectedTech
    ? displayedProjects.filter((project) => project.tech.includes(selectedTech))
    : displayedProjects

  const timelineData: TimelineItem[] = useMemo(() => {
    return filteredProjects.map((project, index) => ({
      id: index + 1,
      title: project.title,
      date: "2025",
      content: project.description,
      category: project.category,
      icon: project.icon || Code2,
      relatedIds: [(index + 1) % filteredProjects.length + 1],
      status: "completed",
      energy: 60 + (index * 15) % 40,
      github: project.github,
      demo: project.demo,
      videoEmbed: project.videoEmbed,
    }))
  }, [filteredProjects])

  return (
    <section id="projects" className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A collection of projects showcasing my skills in full-stack development, AI/ML, and mobile applications
          </p>
        </div>

        <div className="mb-12 overflow-hidden">
          <div className="flex space-x-8 animate-scroll">
            {[...allTechnologies, ...allTechnologies].map((tech, index) => (
              <button
                key={`${tech}-${index}`}
                onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                className={`whitespace-nowrap px-4 py-2 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-105 ${selectedTech === tech
                  ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-100 shadow-lg"
                  : "bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10 text-foreground hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10"
                  }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {selectedTech && (
          <div className="text-center mb-8">
            <Badge variant="outline" className="text-sm">
              Showing projects with: {selectedTech}
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedTech(null)}
              className="ml-2 backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10"
            >
              Clear filter
            </Button>
          </div>
        )}

        <div className="w-full">
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>

        {projects.length > 6 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="backdrop-blur-md bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-500/50 text-purple-700 dark:text-purple-100 rounded-full"
            >
              {showAll ? "Show Less" : `View All ${projects.length} Projects`}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
