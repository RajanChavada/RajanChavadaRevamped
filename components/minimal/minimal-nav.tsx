"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Moon, Sun, ArrowLeft } from "lucide-react"

const homeNavItems = [
  { label: "Home", href: "/", anchor: null },
  { label: "Experience", href: "/", anchor: "experience" },
  { label: "Projects", href: "/", anchor: "projects" },
  { label: "Posts", href: "/", anchor: "posts" },
  { label: "About", href: "/about", anchor: null },
]

const subPageNavItems = [
  { label: "About", href: "/about" },
]

export function MinimalNav() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const isHomePage = pathname === "/"

  const scrollTo = (anchor: string) => {
    const el = document.getElementById(anchor)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap min-w-0">
            {isHomePage ? (
              homeNavItems.map((item) => (
                <span key={item.label}>
                  {item.anchor ? (
                    <button
                      onClick={() => scrollTo(item.anchor!)}
                      className="text-foreground hover:text-muted-foreground transition-colors text-base py-2 min-h-[44px] touch-manipulation"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-foreground hover:text-muted-foreground transition-colors text-base py-2 min-h-[44px] touch-manipulation inline-flex items-center"
                    >
                      {item.label}
                    </Link>
                  )}
                </span>
              ))
            ) : (
              <>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors text-base"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Home
                </Link>
                {subPageNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-foreground hover:text-muted-foreground transition-colors text-base"
                  >
                    {item.label}
                  </Link>
                ))}
              </>
            )}
          </div>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 min-w-[44px] min-h-[44px] rounded-md text-foreground hover:bg-muted transition-colors shrink-0 touch-manipulation"
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 dark:hidden" />
            <Moon className="h-4 w-4 hidden dark:block" />
          </button>
        </div>
      </div>
    </nav>
  )
}
