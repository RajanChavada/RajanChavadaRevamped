"use client"

import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Github, ExternalLink, Linkedin } from "lucide-react"
import type { Project } from "@/lib/project-data"

interface ProjectModalProps {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100vw-2rem)] max-w-2xl max-h-[90vh] overflow-hidden p-0 gap-0">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr]">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px] bg-muted/30">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
          <div className="flex flex-col p-4 sm:p-6 pr-12 overflow-y-auto max-h-[60vh] md:max-h-[90vh] overscroll-contain">
            <DialogHeader className="p-0 text-left">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                {project.tagline}
              </p>
              <DialogTitle className="font-serif text-xl text-foreground">
                {project.title}
              </DialogTitle>
            </DialogHeader>
            <p className="text-muted-foreground text-base mt-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-border">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              )}
              {project.linkedin && (
                <a
                  href={project.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground hover:text-muted-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
