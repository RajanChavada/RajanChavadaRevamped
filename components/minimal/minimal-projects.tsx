"use client"

import { useState } from "react"
import { Linkedin, ExternalLink, ChevronRight } from "lucide-react"
import { projects } from "@/lib/project-data"
import { ProjectModal } from "./project-modal"

const linkedInUrl = "https://www.linkedin.com/in/rajan-chavada/"

export function MinimalProjects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <section id="projects" className="py-12">
      <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
        Projects
      </h2>
      <p className="text-muted-foreground text-base mb-8 max-w-2xl">
        A few of my recent personal works.
      </p>

      <div className="space-y-4">
        {projects.map((project, i) => (
          <button
            key={i}
            onClick={() => openModal(project)}
            className="w-full text-left group rounded-lg border border-border bg-card/50 px-4 py-4 min-h-[44px] hover:border-muted-foreground/30 hover:bg-card/80 transition-all duration-200 touch-manipulation active:bg-card/90"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  {project.tagline}
                </p>
                <h3 className="font-semibold text-foreground group-hover:underline">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {project.description}
                </p>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0 group-hover:text-foreground transition-colors" />
            </div>
          </button>
        ))}

        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 w-full text-left rounded-lg border border-border bg-card/50 px-4 py-4 hover:border-[#0a66c2]/40 hover:bg-[#0a66c2]/5 transition-all duration-200"
        >
          <div className="w-10 h-10 rounded-full bg-[#0a66c2]/20 flex items-center justify-center shrink-0">
            <Linkedin className="h-5 w-5 text-[#0a66c2]" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <p className="text-sm text-muted-foreground">
              Let&apos;s connect on LinkedIn
            </p>
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />
        </a>
      </div>

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  )
}
