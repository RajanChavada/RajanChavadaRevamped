import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ExternalLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  showArrow?: boolean
}

export function ExternalLink({ href, children, className, showArrow = true }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-0.5 text-accent transition-colors duration-150 hover:text-accent-hover hover:underline",
        className,
      )}
    >
      <span>{children}</span>
      {showArrow && <ArrowUpRight className="h-3 w-3" strokeWidth={2} />}
    </a>
  )
}
