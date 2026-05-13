import { promises as fs } from "fs"
import path from "path"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import matter from "gray-matter"
import { format } from "date-fns"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
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
}

const mdxComponents: MDXComponents = {
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img {...props} />
  ),
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
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return (
      <main className="min-h-screen bg-bg-page">
        <Navigation />
        <div className="flex min-h-[60vh] items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-display text-3xl text-text-primary">Post not found</h1>
            <Link
              href="/blog"
              className="mt-4 inline-flex items-center gap-1.5 text-[14px] text-accent hover:text-accent-hover hover:underline"
            >
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
              Back to writing
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const { frontmatter, content } = post

  return (
    <main className="min-h-screen bg-bg-page">
      <Navigation />
      <article id="main" className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[13px] text-text-secondary transition-colors duration-150 hover:text-text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
            Writing
          </Link>

          <header className="mt-8 mb-10 border-b border-border pb-8">
            {frontmatter.category && (
              <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-text-muted">
                {frontmatter.category}
              </p>
            )}
            <h1 className="mt-2 font-display text-[2.25rem] leading-tight tracking-tight text-text-primary sm:text-[2.5rem]">
              {frontmatter.title}
            </h1>
            {frontmatter.description && (
              <p className="mt-3 text-[16px] leading-relaxed text-text-secondary">
                {frontmatter.description}
              </p>
            )}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-text-muted">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" strokeWidth={2} />
                {format(frontmatter.date, "MMMM d, yyyy")}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                {frontmatter.readTime}
              </span>
            </div>
          </header>

          <div className="prose-editorial">
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>

          <footer className="mt-16 border-t border-border pt-8 text-[14.5px] text-text-secondary">
            <p>
              Questions or feedback? Reach out on{" "}
              <a
                href="https://www.linkedin.com/in/rajan-chavada/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover hover:underline"
              >
                LinkedIn
              </a>{" "}
              or{" "}
              <a
                href="https://github.com/RajanChavada"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover hover:underline"
              >
                GitHub
              </a>
              .
            </p>
            <Link
              href="/blog"
              className="mt-6 inline-flex items-center gap-1.5 text-accent hover:text-accent-hover hover:underline"
            >
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
              All posts
            </Link>
          </footer>
        </div>
      </article>
      <Footer />
    </main>
  )
}
