import { promises as fs } from "fs"
import path from "path"
import { MDXRemote } from "next-mdx-remote/rsc"
import matter from "gray-matter"
import { format, parseISO } from "date-fns"
import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft, Clock, Calendar, User } from "lucide-react"

interface BlogPostProps {
  params: Promise<{
    slug: string
  }>
}

interface PostFrontmatter {
  title?: string
  description?: string
  date?: string
  author?: string
  image?: string
  category?: string
  readTime: string
  [key: string]: unknown
}

interface Post {
  frontmatter: PostFrontmatter
  content: string
}

// Custom MDX components styled to match your site theme
const mdxComponents = {
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <img
      src={src}
      alt={alt || "Blog image"}
      className="w-full rounded-lg my-8 shadow-md"
    />
  ),
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-600 dark:text-purple-400 underline hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
    >
      {children}
    </a>
  ),
  code: ({ children }: { children?: React.ReactNode }) => (
    <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-foreground">
      {children}
    </code>
  ),
  pre: ({ children }: { children?: React.ReactNode }) => (
    <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm border border-border">
      {children}
    </pre>
  ),
  h1: ({ children }: { children?: React.ReactNode }) => (
    <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-10 mb-4">{children}</h1>
  ),
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-10 mb-4">{children}</h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-3">{children}</h3>
  ),
  h4: ({ children }: { children?: React.ReactNode }) => (
    <h4 className="text-lg sm:text-xl font-semibold text-foreground mt-6 mb-2">{children}</h4>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="text-muted-foreground leading-relaxed mb-6 text-base sm:text-lg">{children}</p>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2 text-base sm:text-lg">
      {children}
    </ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="list-decimal list-inside text-muted-foreground mb-6 space-y-2 text-base sm:text-lg">
      {children}
    </ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="leading-relaxed">{children}</li>
  ),
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="border-l-4 border-purple-500 pl-4 py-2 italic text-muted-foreground my-6 bg-purple-500/5 p-4 rounded-r-lg">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-border" />,
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }: { children?: React.ReactNode }) => (
    <em className="italic">{children}</em>
  ),
}

async function getPost(slug: string): Promise<Post | null> {
  const contentDir = path.join(process.cwd(), "content/blog")
  const filePath = path.join(contentDir, `${slug}.mdx`)

  try {
    const fileContent = await fs.readFile(filePath, "utf-8")
    const { data, content } = matter(fileContent)

    // Calculate read time
    const wordCount = content.split(/\s+/).length
    const readTime = `${Math.ceil(wordCount / 200)} min read`

    return {
      frontmatter: {
        ...data,
        readTime,
      } as PostFrontmatter,
      content,
    }
  } catch (error) {
    return null
  }
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: "Post not found | Rajan Chavada",
    }
  }

  return {
    title: `${post.frontmatter.title} | Rajan Chavada`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: post.frontmatter.image ? [post.frontmatter.image] : [],
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author || "Rajan Chavada"],
    },
    twitter: {
      card: "summary_large_image",
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
        <Navigation />
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Post not found</h1>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const { frontmatter, content } = post

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <article className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          {/* Header image */}
          {frontmatter.image && (
            <div className="mb-8">
              <img
                src={frontmatter.image}
                alt={frontmatter.title}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          )}

          {/* Category badge */}
          {frontmatter.category && (
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-700 dark:text-purple-100 rounded-full text-sm">
                {frontmatter.category}
              </span>
            </div>
          )}

          {/* Title and metadata */}
          <header className="mb-10 pb-8 border-b border-border">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              {frontmatter.title}
            </h1>
            
            {frontmatter.description && (
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 text-pretty">
                {frontmatter.description}
              </p>
            )}
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
              {frontmatter.date && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{format(parseISO(frontmatter.date), "MMMM dd, yyyy")}</span>
                </div>
              )}
              {frontmatter.author && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{frontmatter.author}</span>
                </div>
              )}
              {frontmatter.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{frontmatter.readTime}</span>
                </div>
              )}
            </div>
          </header>

          {/* Content */}
          <div className="prose-custom">
            <MDXRemote source={content} components={mdxComponents} />
          </div>

          {/* Footer */}
          <footer className="border-t border-border pt-8 mt-12">
            <p className="text-muted-foreground mb-6">
              Questions or feedback? Reach out on{" "}
              <a
                href="https://linkedin.com/in/rajan-chavada"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline"
              >
                LinkedIn
              </a>{" "}
              or{" "}
              <a 
                href="https://github.com/RajanChavada" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline"
              >
                GitHub
              </a>
              .
            </p>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all posts
            </Link>
          </footer>
        </div>
      </article>

      <Footer />
    </main>
  )
}
