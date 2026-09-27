"use client"

import { useState } from "react"
import { SectionTitle } from "@/components/section-title"
import { roles } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Experience() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle index="02" title="Work log" note="six internships, zero coffee runs" />

        <ol className="relative border-l-[1.5px] border-border-strong">
          {roles.map((r, idx) => {
            const isOpen = open === idx
            return (
              <li key={`${r.company}-${r.dates}`} className="relative pb-10 pl-6 last:pb-0 sm:pl-8">
                <span
                  aria-hidden
                  className={cn(
                    "absolute -left-[7px] top-2 h-3 w-3 rotate-45 border-[1.5px] border-border-strong",
                    idx === 0 ? "bg-accent" : "bg-bg-page",
                  )}
                />
                <p className="font-mono text-[12px] text-text-muted">{r.dates}</p>
                <h3 className="mt-1 text-[1.9rem] leading-tight">
                  {r.company}
                  {r.team && <span className="ml-2 font-sans text-[14px] text-text-muted">/ {r.team}</span>}
                </h3>
                <p className="font-mono text-[12.5px] text-text-secondary">{r.role}</p>
                <p className="mt-3 text-[15.5px] leading-relaxed text-text-primary">{r.summary}</p>
                <p className="hand mt-2 text-[21px] leading-none text-accent">★ {r.proudOf}</p>

                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <ul className="mt-4 space-y-2 border-l-2 border-dashed border-accent/50 pl-4 text-[14.5px] leading-relaxed text-text-secondary">
                      {r.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="mt-3 font-mono text-[12px] text-text-muted underline decoration-dotted underline-offset-4 hover:text-accent"
                >
                  {isOpen ? "− fold notes" : "+ open notes"}
                </button>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
