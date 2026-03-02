"use client"

import { useState } from "react"
import { experiences } from "@/lib/experience-data"
import { ExperienceModal } from "./experience-modal"

export function MinimalExperience() {
  const [modalId, setModalId] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = (id: string) => {
    setModalId(id)
    setModalOpen(true)
  }

  return (
    <>
      <section id="experience" className="py-12">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
          Experience
        </h2>
        <ul className="space-y-4">
          {experiences.map((exp) => (
            <li key={exp.id}>
              <button
                onClick={() => openModal(exp.id)}
                className="text-left w-full group py-2 px-2 -mx-2 rounded-md hover:bg-muted/50 transition-colors min-h-[44px] flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1 touch-manipulation"
              >
                <span className="font-medium text-foreground text-base sm:text-lg group-hover:underline">
                  {exp.title}
                </span>
                <span className="text-muted-foreground text-sm sm:text-base">
                  {exp.company} ({exp.period})
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>
      <ExperienceModal
        experienceId={modalId}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  )
}
