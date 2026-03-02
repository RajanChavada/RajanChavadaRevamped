"use client"

const sections = [
  { id: "about", label: "About" },
  { id: "works", label: "Works" },
  { id: "connect", label: "Connect" },
  { id: "colophon", label: "Colophon" },
]

export function OnThisPageNav() {
  return (
    <nav className="sticky top-24">
      <h3 className="font-serif text-lg font-bold text-foreground mb-4">
        On This Page
      </h3>
      <ol className="list-decimal list-inside space-y-2 text-muted-foreground text-base">
        {sections.map((section, i) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="hover:text-foreground transition-colors"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
