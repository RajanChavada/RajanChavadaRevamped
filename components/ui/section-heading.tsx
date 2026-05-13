import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10", className)}>
      {eyebrow && (
        <p className="mb-2 font-mono text-[12px] uppercase tracking-[0.12em] text-text-muted">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[1.875rem] leading-tight tracking-tight text-text-primary sm:text-[2rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-[15px] text-text-secondary">{description}</p>
      )}
    </div>
  )
}
