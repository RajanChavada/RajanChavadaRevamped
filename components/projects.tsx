"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Plyce - Local Restaurant Discovery",
    description:
      "React Native iOS app streamlining restaurant discovery with location-based search and Google Cloud Places API integration.",
    image: "/restaurant-discovery-app.jpg",
    tech: ["React Native", "FastAPI", "Google Cloud", "iOS Development"],
    github: "https://github.com/RajanChavada/Plyce",
    featured: true,
  },
  {
    title: "Chill Bill - Financial Wellness Platform",
    description:
      "Gen Z financial literacy platform merging budgeting with mental health support, featuring sentiment analysis and gamified progress tracking.",
    image: "/financial-wellness-app-dashboard.png",
    tech: ["React", "TypeScript", "Cloudflare Workers", "Llama 2", "Plaid API"],
    github: "https://github.com/RajanChavada/Chill-Bill",
    featured: true,
  },
  {
    title: "FitCheck - Outfit Rating System",
    description: "AI-powered outfit rating and recommendation system with computer vision for style analysis.",
    image: "/fashion-outfit-rating-app.jpg",
    tech: ["Python", "Computer Vision", "Machine Learning", "Flask"],
    github: "https://github.com/RajanChavada/FitCheck",
    featured: false,
  },
  {
    title: "FinSightGPT - Trading Analysis Tool",
    description: "AI-powered financial analysis tool providing market insights and trading recommendations.",
    image: "/financial-trading-analysis-dashboard.jpg",
    tech: ["Python", "GPT API", "Financial Data", "React"],
    github: "https://github.com/RajanChavada/FInSightGPT",
    featured: false,
  },
  {
    title: "Arnold - Fitness Tracking App",
    description: "Comprehensive fitness tracking application with workout planning and progress monitoring.",
    image: "/fitness-tracking-app-interface.png",
    tech: ["React Native", "Node.js", "MongoDB", "Health APIs"],
    github: "https://github.com/RajanChavada/Arnold",
    featured: false,
  },
  {
    title: "ASL Translator",
    description: "Real-time American Sign Language translation using computer vision and machine learning.",
    image: "/sign-language-translation-app.png",
    tech: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
    github: "https://github.com/RajanChavada/asl-translator",
    featured: false,
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

  return (
    <section id="projects" className="py-20">
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
                className={`whitespace-nowrap px-4 py-2 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-105 ${
                  selectedTech === tech
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className={`project-card group cursor-pointer ${project.featured ? "ring-2 ring-primary/20" : ""} ${
                index % 3 === 1 ? "md:mt-8" : ""
              } ${index % 4 === 3 ? "lg:mt-16" : ""}`}
              style={{
                transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (Math.random() * 2)}deg)`,
              }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {project.featured && <Badge className="absolute top-3 left-3 bg-primary">Featured</Badge>}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground mb-4 text-sm text-pretty">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={`text-xs cursor-pointer transition-colors bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-700 dark:text-purple-100 hover:from-purple-500/30 hover:to-pink-500/30 ${
                        selectedTech === tech ? "ring-2 ring-purple-500/50" : ""
                      }`}
                      onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="backdrop-blur-md bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-500/50 text-purple-700 dark:text-purple-100 rounded-full"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
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
