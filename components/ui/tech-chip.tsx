import { cn } from "@/lib/utils"

interface TechChipProps {
  children: React.ReactNode
  className?: string
}

export function TechChip({ children, className }: TechChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-bg-page px-2.5 py-1 text-[13px] font-medium leading-none text-text-secondary transition-colors duration-150 hover:bg-bg-subtle hover:text-text-primary",
        className,
      )}
    >
      {children}
    </span>
  )
}
