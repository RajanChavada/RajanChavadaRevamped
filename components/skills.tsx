"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"

const skills = [
  { name: "Python", level: "Advanced", icon: "🐍", category: "language" },
  { name: "JavaScript", level: "Advanced", icon: "🟨", category: "language" },
  { name: "TypeScript", level: "Advanced", icon: "🔷", category: "language" },
  { name: "React", level: "Advanced", icon: "⚛️", category: "frontend" },
  { name: "Node.js", level: "Advanced", icon: "🟢", category: "backend" },
  { name: "Next.js", level: "Advanced", icon: "▲", category: "frontend" },
  { name: "AWS", level: "Advanced", icon: "☁️", category: "cloud" },
  { name: "Docker", level: "Advanced", icon: "🐳", category: "devops" },
  { name: "Terraform", level: "Advanced", icon: "🏗️", category: "devops" },
  { name: "PostgreSQL", level: "Advanced", icon: "🐘", category: "database" },
  { name: "MongoDB", level: "Intermediate", icon: "🍃", category: "database" },
  { name: "Redis", level: "Intermediate", icon: "🔴", category: "database" },
  { name: "Kubernetes", level: "Intermediate", icon: "⚙️", category: "devops" },
  { name: "TensorFlow", level: "Intermediate", icon: "🧠", category: "ai" },
  { name: "LangChain", level: "Advanced", icon: "🔗", category: "ai" },
  { name: "React Native", level: "Advanced", icon: "📱", category: "mobile" },
  { name: "Flask", level: "Intermediate", icon: "🌶️", category: "backend" },
  { name: "FastAPI", level: "Intermediate", icon: "⚡", category: "backend" },
  { name: "Vue.js", level: "Intermediate", icon: "💚", category: "frontend" },
  { name: "Java", level: "Intermediate", icon: "☕", category: "language" },
  { name: "C++", level: "Intermediate", icon: "⚡", category: "language" },
  { name: "Go", level: "Beginner", icon: "🐹", category: "language" },
]

const categories = [
  { name: "All", value: "all" },
  { name: "Languages", value: "language" },
  { name: "Frontend", value: "frontend" },
  { name: "Backend", value: "backend" },
  { name: "Cloud", value: "cloud" },
  { name: "DevOps", value: "devops" },
  { name: "Database", value: "database" },
  { name: "AI/ML", value: "ai" },
  { name: "Mobile", value: "mobile" },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case "Advanced":
      return "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
    case "Intermediate":
      return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
    case "Working":
      return "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
    default:
      return "bg-gradient-to-r from-gray-500 to-slate-500 text-white"
  }
}

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const filteredSkills =
    selectedCategory === "all" ? skills : skills.filter((skill) => skill.category === selectedCategory)

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Technologies and tools I work with to build exceptional software solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md border ${
                selectedCategory === category.value
                  ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-600 dark:text-white shadow-lg scale-105"
                  : "bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10 text-purple-600 dark:text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 hover:scale-105"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="relative min-h-[400px] flex flex-wrap justify-center items-center gap-4 p-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`relative transition-all duration-500 cursor-pointer ${
                hoveredSkill === skill.name ? "scale-125 z-10" : "hover:scale-110"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (Math.random() * 10 - 5)}deg)`,
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <Badge
                className={`text-sm px-4 py-2 ${getLevelColor(skill.level)} shadow-lg border-0 animate-fade-in-up`}
              >
                <span className="mr-2 text-lg">{skill.icon}</span>
                {skill.name}
              </Badge>

              {hoveredSkill === skill.name && (
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card text-card-foreground px-3 py-1 rounded-lg shadow-lg text-xs whitespace-nowrap border animate-fade-in-up">
                  {skill.level} Level
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-card"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto project-card">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">AWS Certified Cloud Practitioner</h3>
              <p className="text-muted-foreground mb-4">Credential ID: AWS04546214</p>
              <Badge
                variant="outline"
                className="text-sm bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 border-orange-300 dark:border-orange-600 text-orange-800 dark:text-orange-200"
              >
                Certified August 2024
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
