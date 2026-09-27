import { PencilTrail } from "@/components/pencil-trail"
import { links, socials } from "@/lib/site"

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-20 pb-20 sm:pt-28 sm:pb-24">
      <PencilTrail />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <p className="mono-label animate-subtle-rise">
          notebook no. 3 · toronto, on · utc−5
        </p>

        <h1 className="animate-subtle-rise mt-5 text-[3.6rem] leading-[0.95] sm:text-[5.5rem]">
          Rajan <span className="italic">Chavada</span>
        </h1>

        <p className="mt-8 max-w-xl text-[1.3rem] leading-snug text-text-primary sm:text-[1.45rem]">
          I build tools that engineers{" "}
          <span className="marker">actually keep using</span>.
        </p>

        <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-text-secondary">
          Right now I&apos;m on the backend at <span className="text-text-primary">Bree (YC)</span>. Before
          that I was moving models onto GPUs at <span className="text-text-primary">RBC Borealis AI</span>,
          and before that I built a research agent at RBC that ended up patent-pending. Nights and weekends
          go to Neurovn, CacheLane and Rosetta. I study CS at Western, class of &apos;27.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#built"
            className="sheet inline-flex items-center gap-2 bg-text-primary px-4 py-2 font-mono text-[13px] text-bg-page transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--text-primary)", color: "var(--bg-page)" }}
          >
            see what I&apos;ve built ↓
          </a>
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="sheet inline-flex items-center gap-2 px-4 py-2 font-mono text-[13px] text-text-primary transition-transform hover:-translate-y-0.5"
          >
            resume.pdf
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[12.5px]">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary underline decoration-border decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="hand pointer-events-none absolute -bottom-10 right-6 hidden rotate-[-4deg] text-[21px] text-accent sm:block">
          ← try scribbling on the grid
        </p>
      </div>
    </section>
  )
}
