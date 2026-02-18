"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
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
      return "from-purple-500/30 to-violet-500/30 border-purple-500/50 text-purple-100"
    case "Intermediate":
      return "from-blue-500/30 to-cyan-500/30 border-blue-500/50 text-blue-100"
    case "Working":
      return "from-yellow-500/30 to-orange-500/30 border-yellow-500/50 text-yellow-100"
    default:
      return "from-gray-500/30 to-slate-500/30 border-gray-500/50 text-gray-100"
  }
}

// Position skills in a cloud around the center of the container
// Returns top/left as percentages (0-100) of the container
function getCloudPositions(count: number) {
  const positions: { top: number; left: number; scale: number; delay: number }[] = []
  const centerX = 50
  const centerY = 50

  // 3 concentric rings with increasing radii (in % of container)
  const rings = [
    { rx: 18, ry: 16, count: Math.min(6, count), startAngle: -30 },
    { rx: 32, ry: 28, count: Math.min(8, Math.max(0, count - 6)), startAngle: 10 },
    { rx: 44, ry: 38, count: Math.max(0, count - 14), startAngle: -15 },
  ]

  let idx = 0
  rings.forEach((ring) => {
    for (let i = 0; i < ring.count; i++) {
      const angle = ring.startAngle + (360 / ring.count) * i
      const rad = (angle * Math.PI) / 180
      positions.push({
        left: centerX + Math.cos(rad) * ring.rx,
        top: centerY + Math.sin(rad) * ring.ry,
        scale: 0.85 + Math.random() * 0.25,
        delay: idx * 0.06,
      })
      idx++
    }
  })

  return positions
}

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const filteredSkills =
    selectedCategory === "all" ? skills : skills.filter((skill) => skill.category === selectedCategory)

  const cloudPositions = useMemo(() => getCloudPositions(filteredSkills.length), [filteredSkills.length])

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Technologies and tools I work with to build exceptional software solutions
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md border ${selectedCategory === category.value
                ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-600 dark:text-white shadow-lg scale-105"
                : "bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10 text-purple-600 dark:text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 hover:scale-105"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* 3D Skills Cloud */}
        <Card className="w-full min-h-[600px] md:min-h-[650px] bg-black/[0.96] relative overflow-hidden border-purple-500/20">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="rgba(147, 51, 234, 0.6)"
          />

          {/* Desktop layout */}
          <div className="hidden md:block h-full min-h-[650px] relative">
            {/* Left content - absolute positioned so it doesn't affect layout */}
            <div className="absolute left-0 top-0 w-[260px] p-8 z-20 flex flex-col justify-center h-full">
              <h3 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                My Tech Stack
              </h3>
              <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
                An interactive cloud of the technologies I use daily. Hover over any skill to see my proficiency level.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="flex items-center gap-1.5 text-xs text-purple-300">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  Advanced
                </span>
                <span className="flex items-center gap-1.5 text-xs text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                  Intermediate
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                  Beginner
                </span>
              </div>
            </div>

            {/* Full-area Spline Robot */}
            <div className="absolute inset-0 z-0">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>

            {/* Skills cloud overlay - covers entire card */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill, index) => {
                  const pos = cloudPositions[index]
                  if (!pos) return null
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: pos.scale,
                      }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: pos.delay,
                      }}
                      style={{
                        position: 'absolute',
                        top: `${pos.top}%`,
                        left: `${pos.left}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      className="pointer-events-auto cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <motion.div
                        animate={{
                          y: [0, -8, 0],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.15,
                        }}
                        className="relative"
                      >
                        <LiquidButton
                          className={`text-sm py-2 bg-gradient-to-r ${getLevelColor(skill.level)} backdrop-blur-sm transition-all duration-300 whitespace-nowrap ${hoveredSkill === skill.name ? "scale-125 shadow-purple-500/50 shadow-xl ring-2 ring-purple-400/50" : ""
                            }`}
                        >
                          <span className="mr-2 text-lg">{skill.icon}</span>
                          {skill.name}
                        </LiquidButton>

                        {/* Hover tooltip */}
                        <AnimatePresence>
                          {hoveredSkill === skill.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 5 }}
                              className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap border border-purple-500/30 shadow-lg"
                            >
                              {skill.level} Level
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden flex flex-col min-h-[600px]">
            {/* Robot scene */}
            <div className="relative h-[300px]">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>

            {/* Mobile heading */}
            <div className="px-6 py-4">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                My Tech Stack
              </h3>
            </div>

            {/* Skills grid on mobile */}
            <div className="px-6 pb-6 flex flex-wrap gap-2 justify-center">
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <LiquidButton
                      className={`text-xs py-1.5 bg-gradient-to-r ${getLevelColor(skill.level)} shadow-md`}
                    >
                      <span className="mr-1.5">{skill.icon}</span>
                      {skill.name}
                    </LiquidButton>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </Card>

        {/* AWS Certification Card */}
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
