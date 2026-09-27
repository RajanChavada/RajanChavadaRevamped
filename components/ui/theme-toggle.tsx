"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to paper theme" : "Switch to blueprint theme"}
      title={isDark ? "paper" : "blueprint"}
      className="h-8 border-[1.5px] border-border-strong px-2 font-mono text-[11px] text-text-primary transition-colors duration-150 hover:bg-highlight hover:text-[#1b1914]"
    >
      {mounted ? (isDark ? "paper" : "blueprint") : "·····"}
    </button>
  )
}
