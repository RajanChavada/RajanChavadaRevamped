import { promises as fs } from "fs"
import path from "path"
import Link from "next/link"
import matter from "gray-matter"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogPostList } from "@/components/blog-post-list"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Rajan Chavada",
  description: "Articles on AI, finance, trading, and software development.",
}

interface BlogPostRaw {
  slug: string
  title: string
  description: string
  date: Date
  author: string
  image?: string
  category?: string
  readTime?: string
}

interface BlogPostSerialized {
  slug: string
  title: string
  description: string
  date: string
  author: string
  image?: string
  category?: string
  readTime?: string
}

async function getBlogPosts(): Promise<BlogPostSerialized[]> {
  const contentDir = path.join(process.cwd(), "content/blog")

  try {
    const files = await fs.readdir(contentDir)
    const posts: BlogPostRaw[] = []

    for (const file of files) {
      if (!file.endsWith(".mdx")) continue

      const filePath = path.join(contentDir, file)
      const fileContent = await fs.readFile(filePath, "utf-8")
      const { data, content } = matter(fileContent)

      // Calculate read time (average 200 words per minute)
      const wordCount = content.split(/\s+/).length
      const readTime = `${Math.ceil(wordCount / 200)} min read`

      // Handle date - gray-matter may return Date object or string
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
        date: postDate,
        author: data.author || "Rajan Chavada",
        image: data.image,
        category: data.category || "General",
        readTime,
      })
    }

    // Sort by date (newest first)
    return posts
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .map((p) => ({
        ...p,
        date: p.date.toISOString(),
      }))
  } catch (error) {
    console.error("Error reading blog posts:", error)
    // Return empty array if content directory doesn't exist yet
    return []
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Home */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Thoughts on AI, finance, trading, and software development
            </p>
          </div>

          {/* Blog posts grid */}
          <div className="space-y-6">
            <BlogPostList posts={posts} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
