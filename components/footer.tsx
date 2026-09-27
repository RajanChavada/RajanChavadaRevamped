import { links, socials } from "@/lib/site"

const changelog = [
  { v: "v3.0", note: "rebuilt as a notebook. fewer badges, more handwriting." },
  { v: "v2.0", note: "editorial serif phase." },
  { v: "v1.0", note: "a portfolio template, like everyone else." },
]

export function Footer() {
  return (
    <footer className="mt-12 border-t-[1.5px] border-border-strong bg-bg-page/80">
      <div className="mx-auto grid max-w-3xl gap-10 px-4 py-12 sm:grid-cols-[1.2fr_1fr] sm:px-6">
        <div>
          <p className="text-[2rem] leading-tight">
            Building something? <br />
            <a href={links.email} className="ink-link italic">
              Say hi.
            </a>
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[12.5px]">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary transition-colors hover:text-accent"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
            <li>
              <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary transition-colors hover:text-accent"
              >
                resume.pdf
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mono-label">changelog</p>
          <ul className="mt-3 space-y-1.5 font-mono text-[12px] text-text-secondary">
            {changelog.map((c) => (
              <li key={c.v} className="flex gap-3">
                <span className="text-accent">{c.v}</span>
                <span>{c.note}</span>
              </li>
            ))}
          </ul>
          <p className="hand mt-5 text-[19px] text-text-muted">
            made by hand in Toronto, Next.js underneath
          </p>
        </div>
      </div>
    </footer>
  )
}
