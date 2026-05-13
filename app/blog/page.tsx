import { promises as fs } from "fs"
import path from "path"
import Link from "next/link"
import matter from "gray-matter"
import { format } from "date-fns"
import type { Metadata } from "next"
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Writing",
  description: "Long-form on AI, agentic systems, finance, and engineering practice.",
}

interface BlogPostSerialized {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category?: string
}

async function getBlogPosts(): Promise<BlogPostSerialized[]> {
  const contentDir = path.join(process.cwd(), "content/blog")

  try {
    const files = await fs.readdir(contentDir)
    const posts: Array<BlogPostSerialized & { sortDate: number }> = []

    for (const file of files) {
      if (!file.endsWith(".mdx")) continue

      const filePath = path.join(contentDir, file)
      const fileContent = await fs.readFile(filePath, "utf-8")
      const { data, content } = matter(fileContent)

      if (data.draft === true) continue

      const wordCount = content.split(/\s+/).length
      const readTime = `${Math.ceil(wordCount / 200)} min read`

      let postDate: Date
      if (data.date instanceof Date) {
        postDate = data.date
      } else if (typeof data.date === "string") {
        postDate = new Date(data.date)
      } else {
        postDate = new Date()
      }

      posts.push({
        slug: file.replace(".mdx", ""),
        title: data.title || "Untitled",
        description: data.description || "",
        date: postDate.toISOString(),
        readTime,
        category: data.category,
        sortDate: postDate.getTime(),
      })
    }

    return posts
      .sort((a, b) => b.sortDate - a.sortDate)
      .map(({ sortDate, ...rest }) => rest)
  } catch {
    return []
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <main className="min-h-screen bg-bg-page">
      <Navigation />

      <div id="main" className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-text-secondary transition-colors duration-150 hover:text-text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
            Home
          </Link>

          <header className="mt-8 mb-12">
            <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-text-muted">
              Writing
            </p>
            <h1 className="mt-2 font-display text-[2.25rem] leading-tight tracking-tight text-text-primary sm:text-[2.5rem]">
              Posts
            </h1>
            <p className="mt-3 text-[15px] text-text-secondary">
              On-site posts. Long-form lives on{" "}
              <a
                href="https://medium.com/@rajanchavada"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover hover:underline"
              >
                Medium
              </a>
              .
            </p>
          </header>

          {posts.length === 0 ? (
            <p className="text-[15px] text-text-secondary">
              No posts yet. Check back soon — or read me on{" "}
              <a
                href="https://medium.com/@rajanchavada"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover hover:underline"
              >
                Medium
              </a>
              .
            </p>
          ) : (
            <ul className="divide-y divide-border border-y border-border">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
                  >
                    <div className="flex-1">
                      {post.category && (
                        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-text-muted">
                          {post.category}
                        </p>
                      )}
                      <h2 className="mt-1 font-display text-[1.25rem] leading-snug text-text-primary group-hover:text-accent">
                        {post.title}
                      </h2>
                      {post.description && (
                        <p className="mt-2 line-clamp-2 text-[14.5px] leading-relaxed text-text-secondary">
                          {post.description}
                        </p>
                      )}
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-1 text-[13px] text-text-muted sm:pt-1">
                      <span className="font-mono">
                        {format(new Date(post.date), "MMM d, yyyy")}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" strokeWidth={2} />
                        {post.readTime}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
