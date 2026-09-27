import { SectionTitle } from "@/components/section-title"
import { ossPrs, toolbox } from "@/lib/site"

export function OpenSource() {
  return (
    <section id="open-source" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle index="03" title="Fixes in other people's code" note="all merged" />

        <ul className="space-y-3">
          {ossPrs.map((pr) => (
            <li key={pr.repo}>
              <a
                href={pr.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 border-[1.5px] border-dashed border-border bg-bg-elevated/70 px-4 py-3 transition-colors hover:border-border-strong"
              >
                <span className="mt-0.5 shrink-0 rotate-[-3deg] border-[1.5px] border-accent px-1.5 py-0.5 font-mono text-[10px] font-semibold tracking-[0.14em] text-accent">
                  MERGED
                </span>
                <span className="flex-1">
                  <span className="font-mono text-[13px] text-text-primary group-hover:text-accent">
                    {pr.repo}
                  </span>
                  {pr.stars && <span className="ml-2 font-mono text-[11px] text-text-muted">{pr.stars}</span>}
                  <span className="mt-0.5 block text-[14.5px] text-text-secondary">{pr.what}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <p className="mono-label">toolbox</p>
          <dl className="mt-4 space-y-2 font-mono text-[13px]">
            {toolbox.map((t) => (
              <div key={t.label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
                <dt className="shrink-0 text-accent sm:w-28">{t.label}</dt>
                <dd className="text-text-secondary">{t.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
