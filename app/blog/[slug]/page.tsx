import { promises as fs } from "fs"
import path from "path"
import { MDXRemote } from "next-mdx-remote/rsc"
import matter from "gray-matter"
import { format } from "date-fns"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { MinimalNav } from "@/components/minimal/minimal-nav"
import { MinimalFooter } from "@/components/minimal"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import type { MDXComponents } from "mdx/types"

interface BlogPostProps {
  params: Promise<{ slug: string }>
}

interface PostFrontmatter {
  title: string
  description: string
  date: Date
  author: string
  image?: string
  category?: string
  readTime: string
}

interface Post {
  frontmatter: PostFrontmatter
  content: string
  sections: { id: string; title: string; level: number }[]
}

function extractHeadings(content: string): { id: string; title: string; level: number }[] {
  const headings: { id: string; title: string; level: number }[] = []
  const regex = /^(#{2,3})\s+(.+)$/gm
  let match
  while ((match = regex.exec(content)) !== null) {
    const level = match[1].length
    const title = match[2].trim()
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/-$/, "")
    headings.push({ id, title, level })
  }
  return headings
}

const mdxComponents: MDXComponents = {
  img: (props) => (
    <span className="block my-6">
      <img {...props} className="w-full rounded-lg border border-border" />
    </span>
  ),
  a: (props) => (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground underline underline-offset-2 hover:text-muted-foreground transition-colors"
    />
  ),
  code: (props) => (
    <code {...props} className="bg-muted px-2 py-1 rounded text-sm font-mono" />
  ),
  pre: (props) => (
    <pre
      {...props}
      className="bg-muted p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm border border-border"
    />
  ),
  h1: (props) => (
    <h1 {...props} className="font-serif text-3xl font-bold text-foreground mt-10 mb-4" />
  ),
  h2: (props) => {
    const title = typeof props.children === "string" ? props.children : ""
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "")
    return (
      <h2
        {...props}
        id={id}
        className="font-serif text-xl font-bold text-foreground mt-10 mb-3 scroll-mt-24"
      />
    )
  },
  h3: (props) => {
    const title = typeof props.children === "string" ? props.children : ""
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "")
    return (
      <h3
        {...props}
        id={id}
        className="font-serif text-lg font-bold text-foreground mt-6 mb-2 scroll-mt-24"
      />
    )
  },
  p: (props) => <p {...props} className="text-muted-foreground leading-relaxed mb-4 text-base" />,
  ul: (props) => (
    <ul {...props} className="list-disc list-outside pl-6 space-y-2 text-muted-foreground mb-4" />
  ),
  ol: (props) => (
    <ol {...props} className="list-decimal list-outside pl-6 space-y-2 text-muted-foreground mb-4" />
  ),
  li: (props) => <li {...props} className="pl-1 text-muted-foreground" />,
  blockquote: (props) => (
    <blockquote
      {...props}
      className="border-l-2 border-muted-foreground pl-4 py-2 italic text-muted-foreground my-6 bg-muted/30 rounded-r"
    />
  ),
  table: (props) => (
    <div className="overflow-x-auto my-6">
      <table {...props} className="min-w-full border border-border rounded-lg" />
    </div>
  ),
  th: (props) => (
    <th {...props} className="border border-border bg-muted px-4 py-2 text-left font-semibold" />
  ),
  td: (props) => <td {...props} className="border border-border px-4 py-2" />,
  strong: (props) => <strong {...props} className="font-semibold text-foreground" />,
  hr: () => <hr className="my-8 border-border" />,
}

async function getPost(slug: string): Promise<Post | null> {
  const contentDir = path.join(process.cwd(), "content/blog")
  const filePath = path.join(contentDir, `${slug}.mdx`)

  try {
    const fileContent = await fs.readFile(filePath, "utf-8")
    const { data, content } = matter(fileContent)

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

    const sections = extractHeadings(content)

    return {
      frontmatter: {
        title: data.title || "Untitled",
        description: data.description || "",
        date: postDate,
        author: data.author || "Rajan Chavada",
        image: data.image,
        category: data.category,
        readTime,
      },
      content,
      sections,
    }
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return { title: "Post not found" }
  }

  return {
    title: `${post.frontmatter.title} | Rajan Chavada`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: post.frontmatter.image ? [post.frontmatter.image] : [],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <MinimalNav />
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center max-w-2xl mx-auto px-6">
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
              Post not found
            </h1>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
          </div>
        </div>
        <MinimalFooter />
      </main>
    )
  }

  const { frontmatter, content, sections } = post

  return (
    <main className="min-h-screen bg-background">
      <MinimalNav />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-base"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 lg:gap-12">
          <aside className="order-2 lg:order-1">
            <nav className="sticky top-20 sm:top-24">
              <h3 className="font-serif text-lg font-bold text-foreground mb-4">
                On This Page
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground text-sm">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="hover:text-foreground transition-colors"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
              {frontmatter.category && (
                <div className="mt-6">
                  <span className="inline-block px-3 py-1 border border-border rounded text-xs uppercase tracking-wide text-muted-foreground">
                    {frontmatter.category}
                  </span>
                </div>
              )}
            </nav>
          </aside>

          <article className="order-1 lg:order-2">
            {frontmatter.image && (
              <div className="relative w-full aspect-video max-w-2xl rounded-lg overflow-hidden border border-border mb-8">
                <Image
                  src={frontmatter.image}
                  alt={frontmatter.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>
            )}

            <header className="mb-10">
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                {frontmatter.title}
              </h1>
              {frontmatter.description && (
                <p className="text-muted-foreground text-base mb-6 text-pretty">
                  {frontmatter.description}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {format(frontmatter.date, "MMM d, yyyy")}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {frontmatter.readTime}
                </span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <MDXRemote source={content} components={mdxComponents} />
            </div>

            <footer className="border-t border-border pt-8 mt-12">
              <p className="text-muted-foreground text-sm mb-4">
                Questions or feedback? Reach out on{" "}
                <a
                  href="https://linkedin.com/in/rajan-chavada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-2 hover:text-muted-foreground"
                >
                  LinkedIn
                </a>{" "}
                or{" "}
                <a
                  href="https://github.com/RajanChavada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-2 hover:text-muted-foreground"
                >
                  GitHub
                </a>
                .
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to all posts
              </Link>
            </footer>
          </article>
        </div>
      </div>
      <MinimalFooter />
    </main>
  )
}
