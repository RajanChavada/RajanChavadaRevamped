import { promises as fs } from "fs"
import path from "path"
import { MDXRemote } from "next-mdx-remote/rsc"
import matter from "gray-matter"
import { format } from "date-fns"
import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
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
  img: (props) => <img {...props} className="w-full rounded-lg my-8 shadow-md" />,
  a: (props) => (
    <a {...props} target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline hover:text-purple-800" />
  ),
  code: (props) => <code {...props} className="bg-muted px-2 py-1 rounded text-sm font-mono" />,
  pre: (props) => <pre {...props} className="bg-muted p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm" />,
  h1: (props) => <h1 {...props} className="text-4xl font-bold text-foreground mt-8 mb-4" />,
  h2: (props) => <h2 {...props} className="text-3xl font-bold text-foreground mt-8 mb-4" />,
  h3: (props) => <h3 {...props} className="text-2xl font-bold text-foreground mt-6 mb-3" />,
  p: (props) => <p {...props} className="text-muted-foreground leading-relaxed mb-4 text-lg" />,
  ul: (props) => <ul {...props} className="list-disc list-inside text-muted-foreground mb-4 space-y-2" />,
  ol: (props) => <ol {...props} className="list-decimal list-inside text-muted-foreground mb-4 space-y-2" />,
  li: (props) => <li {...props} className="text-muted-foreground" />,
  blockquote: (props) => <blockquote {...props} className="border-l-4 border-purple-600 pl-4 py-2 italic text-muted-foreground my-6 bg-muted/50 p-4 rounded" />,
  table: (props) => <div className="overflow-x-auto my-6"><table {...props} className="min-w-full border border-border rounded-lg" /></div>,
  th: (props) => <th {...props} className="border border-border bg-muted px-4 py-2 text-left font-semibold" />,
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
        <Navigation />
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Post not found</h1>
            <Link href="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to blog
              </Button>
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
          <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          {frontmatter.image && (
            <img src={frontmatter.image} alt={frontmatter.title} className="w-full h-64 sm:h-80 object-cover rounded-lg mb-8 shadow-lg" />
          )}

          {frontmatter.category && (
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-700 dark:text-purple-100 rounded-full text-sm">
                {frontmatter.category}
              </span>
            </div>
          )}

          <header className="mb-8 border-b border-border pb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">{frontmatter.title}</h1>
            {frontmatter.description && (
              <p className="text-xl text-muted-foreground mb-6 text-pretty">{frontmatter.description}</p>
            )}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{format(frontmatter.date, "MMMM dd, yyyy")}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{frontmatter.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{frontmatter.readTime}</span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <MDXRemote source={content} components={mdxComponents} />
          </div>

          <footer className="border-t border-border pt-8 mt-12">
            <p className="text-muted-foreground mb-4">
              Questions or feedback? Reach out on{" "}
              <a href="https://linkedin.com/in/rajan-chavada" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline hover:text-purple-800">LinkedIn</a>
              {" "}or{" "}
              <a href="https://github.com/RajanChavada" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline hover:text-purple-800">GitHub</a>.
            </p>
            <Link href="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all posts
              </Button>
            </Link>
          </footer>
        </div>
      </article>
      <Footer />
    </main>
  )
}
