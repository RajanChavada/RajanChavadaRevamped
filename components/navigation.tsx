"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { currently, links as site } from "@/lib/site"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "work" },
  { href: "/about", label: "about" },
  { href: "/blog", label: "writing" },
  { href: site.resume, label: "resume" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b-[1.5px] border-border-strong bg-bg-page/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-3 px-4 sm:px-6"
      >
        <div className="flex min-w-0 items-center gap-3">
          <Link
            href="/"
            aria-label="Rajan Chavada, home"
            className="flex h-8 w-8 shrink-0 -rotate-3 items-center justify-center border-[1.5px] border-border-strong bg-highlight font-display text-[18px] leading-none text-[#1b1914] shadow-[2px_2px_0_0_var(--border-strong)] transition-transform hover:rotate-3"
          >
            rc.
          </Link>
          <p className="hidden truncate font-mono text-[11px] text-text-muted md:block">
            <span className="text-accent">●</span> currently: {currently}
            <span className="caret" aria-hidden />
          </p>
        </div>

        <div className="flex items-center gap-1 sm:gap-3">
          <ul className="flex items-center">
            {links.map((link) => {
              const isFile = link.href.endsWith(".pdf")
              const isActive =
                !isFile &&
                (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href))
              const className = cn(
                "px-2 py-1 font-mono text-[12.5px] transition-colors duration-150 sm:px-2.5",
                isActive
                  ? "text-text-primary underline decoration-accent decoration-2 underline-offset-[6px]"
                  : "text-text-secondary hover:text-text-primary",
              )
              return (
                <li key={link.href}>
                  {isFile ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className={className} aria-current={isActive ? "page" : undefined}>
                      {link.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
