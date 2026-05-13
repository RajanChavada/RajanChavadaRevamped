import Link from "next/link"
import { ArrowUpRight, Linkedin } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"

interface MediumPost {
  title: string
  description: string
  href: string
  date: string
  badge?: string
}

const featuredPosts: MediumPost[] = [
  {
    title: "I filed a patent at 21 during my internship",
    description:
      "What nobody tells you about the process — the legal mechanics, the corporate politics, and the technical writing that actually matters.",
    href: "https://medium.com/@rajanchavada/i-filed-a-patent-at-21-during-my-internship-heres-what-nobody-tells-you-about-the-process-896278594b53",
    date: "2026",
    badge: "Patent process",
  },
  {
    title: "140 engineers",
    description:
      "Lessons from pitching internal tooling to a 140-engineer lab — what got cut, what got adopted, and the shape of the slide that landed.",
    href: "https://medium.com/@rajanchavada/140-engineers-f4ce6795564d",
    date: "2026",
    badge: "Engineering org",
  },
  {
    title: "How I Use AI as a Developer",
    description:
      "A context-engineering framework for working with LLMs day to day — what the model needs to see, what to leave out, and where to draw the boundary.",
    href: "https://medium.com/@rajanchavada/how-i-use-ai-as-a-developer-12a4d1c1de76",
    date: "Dec 2024",
    badge: "Engineering",
  },
]

interface VideoLink {
  title: string
  description: string
  href: string
}

const linkedinVideos: VideoLink[] = [
  {
    title: "Rosetta — agentic-coding CLI walkthrough",
    description:
      "Live demo of provisioning agentic-coding rules and MCP hooks across 9 IDEs with one command.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7452774760721182721/",
  },
  {
    title: "Neurovn — visual canvas for agentic AI",
    description:
      "Drag-and-drop agent graphs that compute cost and P95 latency before a single API call.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7458277062433386496/",
  },
]

export function Writing() {
  return (
    <section id="writing" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Writing"
          title="Recent posts"
          description="Long-form on Medium · short clips on LinkedIn."
        />

        <ul className="divide-y divide-border border-y border-border">
          {featuredPosts.map((post) => (
            <li key={post.href}>
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 py-5 transition-colors duration-150 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
              >
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    {post.badge && (
                      <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
                        {post.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-1 font-display text-[1.125rem] leading-snug text-text-primary group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-text-secondary">
                    {post.description}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2 text-[13px] text-text-muted sm:pt-1">
                  <span className="font-mono">{post.date}</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-text-muted">
            LinkedIn demos
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {linkedinVideos.map((video) => (
              <li key={video.href}>
                <a
                  href={video.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-lg border border-border bg-bg-elevated p-4 transition-colors duration-150 hover:border-text-muted"
                >
                  <div className="flex items-start gap-2.5">
                    <Linkedin className="h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                    <span className="font-display text-[15px] leading-snug text-text-primary group-hover:text-accent">
                      {video.title}
                    </span>
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">
                    {video.description}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px]">
          <Link href="/blog" className="text-accent hover:text-accent-hover hover:underline">
            All on-site posts →
          </Link>
          <a
            href="https://medium.com/@rajanchavada"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover hover:underline"
          >
            All posts on Medium →
          </a>
        </div>
      </div>
    </section>
  )
}
