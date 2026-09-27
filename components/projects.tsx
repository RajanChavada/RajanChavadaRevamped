import { DemoVideo } from "@/components/demo-video"
import { SectionTitle } from "@/components/section-title"
import { projects, sideBuilds } from "@/lib/site"

export function Projects() {
  return (
    <section id="built" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle index="01" title="Things I've built" note="(and still maintain)" />

        <ul className="space-y-16">
          {projects.map((p, i) => (
            <li key={p.part} className="sheet p-5 sm:p-7">
              <div className="flex items-start justify-between gap-4 border-b border-dashed border-border pb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
                <span>
                  part no. {p.part} · status: <span className="text-text-primary">{p.status}</span>
                </span>
                <span className="hidden sm:inline">sheet {i + 1}/{projects.length}</span>
              </div>

              <div className="mt-5 flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-[2.4rem] leading-none sm:text-[2.8rem]">{p.name}</h3>
                <span className="stamp mt-2">{p.stamp}</span>
              </div>

              <p className="mt-3 text-[1.15rem] font-medium leading-snug text-text-primary">{p.line}</p>
              <p className="mt-4 text-[15.5px] leading-[1.7] text-text-secondary">{p.body}</p>

              {p.video && (
                <div className="mt-8">
                  <DemoVideo {...p.video} />
                </div>
              )}

              {p.snippet && (
                <pre className="mt-6 overflow-x-auto border-[1.5px] border-dashed border-border bg-bg-subtle px-4 py-3 font-mono text-[13px] text-text-primary">
                  <span className="select-none text-accent">$ </span>
                  {p.snippet}
                </pre>
              )}

              <dl className="mt-6 grid gap-x-6 gap-y-2 font-mono text-[12px] sm:grid-cols-[88px_1fr]">
                <dt className="text-text-muted">proof</dt>
                <dd className="text-text-primary">{p.proof}</dd>
                <dt className="text-text-muted">made of</dt>
                <dd className="text-text-secondary">{p.stack}</dd>
                <dt className="text-text-muted">links</dt>
                <dd className="flex flex-wrap gap-x-4 gap-y-1">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-primary underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </dd>
              </dl>

              {p.note && (
                <p className="hand mt-5 rotate-[-1deg] text-[20px] leading-tight text-accent">↳ {p.note}</p>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-20">
          <p className="mono-label">also on the bench · hackathons & older builds</p>
          <ul className="mt-4 divide-y divide-dashed divide-border border-y border-dashed border-border">
            {sideBuilds.map((b) => (
              <li key={b.name}>
                <a
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-4"
                >
                  <span className="shrink-0 font-display text-[1.35rem] leading-none group-hover:text-accent sm:w-44">
                    {b.name}
                  </span>
                  <span className="flex-1 text-[14.5px] text-text-secondary">{b.what}</span>
                  {b.tag && <span className="shrink-0 font-mono text-[11px] text-accent">{b.tag}</span>}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 font-mono text-[12px] text-text-muted">
            more on{" "}
            <a href="https://devpost.com/JimmyChavada" target="_blank" rel="noopener noreferrer" className="ink-link">
              devpost
            </a>{" "}
            and{" "}
            <a href="https://github.com/RajanChavada" target="_blank" rel="noopener noreferrer" className="ink-link">
              github
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
