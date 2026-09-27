import { cn } from "@/lib/utils"

interface SectionTitleProps {
  index: string
  title: React.ReactNode
  note?: string
  className?: string
}

export function SectionTitle({ index, title, note, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-10 flex flex-wrap items-end gap-x-4 gap-y-1", className)}>
      <span className="mono-label pb-2">§ {index}</span>
      <h2 className="text-[2.4rem] leading-none sm:text-[2.75rem]">{title}</h2>
      {note && <span className="hand pb-1 text-[20px] text-accent">{note}</span>}
    </div>
  )
}
