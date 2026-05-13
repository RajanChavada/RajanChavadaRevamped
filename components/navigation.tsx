"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { cn } from "@/lib/utils"

interface NavLink {
  href: string
  label: string
}

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Writing" },
  { href: "/resume.pdf", label: "Resume" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg-page/85 backdrop-blur supports-[backdrop-filter]:bg-bg-page/70">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-3 px-4 sm:px-6"
      >
        <Link
          href="/"
          className="whitespace-nowrap font-display text-[15px] font-bold tracking-tight text-text-primary sm:text-[16px]"
        >
          Rajan Chavada
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="flex items-center">
            {links.map((link) => {
              const isExternal = link.href.endsWith(".pdf")
              const isActive =
                !isExternal &&
                (link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href))

              const className = cn(
                "px-1.5 py-1.5 text-[13px] font-medium transition-colors duration-150 sm:px-3 sm:text-[14px]",
                isActive
                  ? "text-accent"
                  : "text-text-secondary hover:text-text-primary",
              )

              if (isExternal) {
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              }

              return (
                <li key={link.href}>
                  <Link href={link.href} className={className}>
                    {link.label}
                  </Link>
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
