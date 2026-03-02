"use client"

import { useState } from "react"
import { ExperienceModal } from "./experience-modal"

const blurbParts: (string | { text: string; experienceId: string; noBreak?: boolean })[] = [
  "My name is Rajan. I'm a software engineer whose entire purpose in life is to put myself in uncomfortable positions—in the best way possible. I've worked over 16 months at 5 different internships: from ",
  { text: "full-stack software engineer at RBC Capital Markets", experienceId: "experience-rbc-global-equities" },
  ", ",
  { text: "did this again the following year", experienceId: "experience-rbc-client-services" },
  ", ",
  { text: "transitioned into RBC Amplify as an AI software engineer", experienceId: "experience-rbc-amplify", noBreak: true },
  ", then into ",
  { text: "cloud/DevOps engineering", experienceId: "experience-intact" },
  ", and now an ",
  { text: "AI/ML scientist software engineer", experienceId: "experience-borealis" },
  ".",
]

export function AboutBlurbWithModals() {
  const [modalId, setModalId] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = (id: string) => {
    setModalId(id)
    setModalOpen(true)
  }

  return (
    <>
      <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
        {blurbParts.map((part, i) =>
          typeof part === "string" ? (
            <span key={i}>{part}</span>
          ) : (
            <span key={i} className={part.noBreak ? "whitespace-nowrap" : undefined}>
              <button
                onClick={() => openModal(part.experienceId)}
                className="text-foreground hover:underline underline-offset-2 font-medium"
              >
                {part.text}
              </button>
            </span>
          )
        )}
      </p>
      <ExperienceModal
        experienceId={modalId}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  )
}
