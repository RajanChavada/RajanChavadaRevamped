"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { getExperienceById } from "@/lib/experience-data"
import { Badge } from "@/components/ui/badge"

interface ExperienceModalProps {
  experienceId: string | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ExperienceModal({
  experienceId,
  open,
  onOpenChange,
}: ExperienceModalProps) {
  const experience = experienceId ? getExperienceById(experienceId) : null

  if (!experience) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100vw-2rem)] max-w-lg max-h-[85vh] overflow-y-auto overscroll-contain">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl text-foreground">
            {experience.title}
          </DialogTitle>
          <p className="text-muted-foreground text-base">
            {experience.company}
            {experience.location && ` · ${experience.location}`}
          </p>
          <p className="text-muted-foreground text-sm">{experience.period}</p>
        </DialogHeader>
        <div className="space-y-4 pt-2">
          <ul className="space-y-2 text-foreground text-base list-disc list-inside">
            {experience.bullets.map((bullet, i) => (
              <li key={i} className="leading-relaxed">
                {bullet}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm font-normal"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
