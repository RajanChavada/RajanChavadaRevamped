"use client"

import { useState, useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Smartphone, Globe, Code2, Database, BarChart3, Languages, Dumbbell } from "lucide-react"
import RadialOrbitalTimeline, { TimelineItem } from "@/components/ui/radial-orbital-timeline"

const projects = [
  {
    title: "Plyce - Local Restaurant Discovery",
    description:
      "React Native iOS app streamlining restaurant discovery with location-based search and Google Cloud Places API integration.",
    image: "/restaurant-discovery-app.jpg",
    tech: ["React Native", "FastAPI", "Google Cloud", "iOS Development"],
    github: "https://github.com/RajanChavada/Plyce",
    featured: true,
    category: "Mobile App",
    icon: Smartphone,
  },
  {
    title: "Chill Bill - Financial Wellness Platform",
    description:
      "Gen Z financial literacy platform merging budgeting with mental health support, featuring sentiment analysis and gamified progress tracking.",
    image: "/financial-wellness-app-dashboard.png",
    tech: ["React", "TypeScript", "Cloudflare Workers", "Llama 2", "Plaid API"],
    github: "https://github.com/RajanChavada/Chill-Bill",
    featured: true,
    category: "Web App",
    icon: Globe,
  },
  {
    title: "FitCheck - Outfit Rating System",
    description: "AI-powered outfit rating and recommendation system with computer vision for style analysis.",
    image: "/fashion-outfit-rating-app.jpg",
    tech: ["Python", "Computer Vision", "Machine Learning", "Flask"],
    github: "https://github.com/RajanChavada/FitCheck",
    featured: false,
    category: "AI/ML",
    icon: Code2,
  },
  {
    title: "FinSightGPT - Trading Analysis Tool",
    description: "AI-powered financial analysis tool providing market insights and trading recommendations.",
    image: "/financial-trading-analysis-dashboard.jpg",
    tech: ["Python", "GPT API", "Financial Data", "React"],
    github: "https://github.com/RajanChavada/FInSightGPT",
    featured: false,
    category: "AI/ML",
    icon: BarChart3,
  },
  {
    title: "Arnold - Fitness Tracking App",
    description: "Comprehensive fitness tracking application with workout planning and progress monitoring.",
    image: "/fitness-tracking-app-interface.png",
    tech: ["React Native", "Node.js", "MongoDB", "Health APIs"],
    github: "https://github.com/RajanChavada/Arnold",
    featured: false,
    category: "Mobile App",
    icon: Dumbbell,
  },
  {
    title: "ASL Translator",
    description: "Real-time American Sign Language translation using computer vision and machine learning.",
    image: "/sign-language-translation-app.png",
    tech: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
    github: "https://github.com/RajanChavada/asl-translator",
    featured: false,
    category: "AI/ML",
    icon: Languages,
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
      date: "2024",
      content: project.description,
      category: project.category,
      icon: project.icon || Code2,
      relatedIds: [(index + 1) % filteredProjects.length + 1],
      status: "completed",
      energy: 60 + (index * 15) % 40,
      github: project.github,
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
