"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Cloud Technical Advisor I",
    company: "Intact Insurance",
    location: "Toronto, ON",
    period: "Sept 2025 – Present",
    date: "2025",
    description:
      "Automated provisioning & maintenance of AWS infrastructure (IAM, EC2, S3, ELB) with Terraform, cutting manual effort by 40%. Collaborate with 10+ cross-functional teams to assess cloud requirements and deliver tailored infrastructure.",
    skills: ["AWS", "Terraform", "OCP", "ROSA", "Infrastructure as Code"],
    side: "right",
  },
  {
    title: "Quantitative Software/AI Engineer",
    company: "Royal Bank of Canada | Amplify",
    location: "Toronto, ON",
    period: "May 2025 – Aug 2025",
    date: "2025",
    description:
      "Engineered patent-pending multi-agent pipelines with LangChain/LangGraph, improving front-office research efficiency by 30%. Delivered dynamic natural language to ECharts feature for RBC Aiden, adopted by 18,000+ traders.",
    skills: ["LangChain", "LangGraph", "ECharts", "CI/CD", "Docker", "OCP"],
    side: "left",
  },
  {
    title: "Full-Stack Software Engineer Intern (Client Services)",
    company: "Royal Bank of Canada | Capital Markets",
    location: "Toronto, ON",
    period: "May 2024 – Aug 2024",
    date: "2024",
    description:
      "Led development of 25+ production client-facing applications. Utilized DOM refactoring, lazy loading, and JS bundle reduction to reduce application latency times by 10%, driving client retention.",
    skills: ["React", "Node.js", "JavaScript", "Performance Optimization", "Jenkins"],
    side: "right",
  },
  {
    title: "Full-Stack Software Engineer Intern (Trading & Execution Services)",
    company: "Royal Bank of Canada | Capital Markets",
    location: "Toronto, ON",
    period: "May 2023 – Aug 2023",
    date: "2023",
    description:
      "Created a full-stack automation system for JIRA CVE's, eliminating repetitive workflows and reducing team overhead by 35%. Deployed a Flask + React.js app integrated with Jenkins-based CI/CD pipelines.",
    skills: ["Flask", "React.js", "JIRA API", "Python", "Automation", "CI/CD"],
    side: "left",
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
                    top: `${(index + 1) * 25}%`,
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

                          <p className="text-muted-foreground text-sm text-pretty">{exp.description}</p>

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
