import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProofPillProps {
  icon?: LucideIcon
  children: React.ReactNode
  className?: string
}

export function ProofPill({ icon: Icon, children, className }: ProofPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-elevated px-3.5 py-1.5 text-[13px] font-medium leading-none text-text-primary transition-colors duration-150 hover:border-text-muted hover:bg-bg-subtle",
        className,
      )}
    >
      {Icon && <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={2} />}
      <span>{children}</span>
    </span>
  )
}
