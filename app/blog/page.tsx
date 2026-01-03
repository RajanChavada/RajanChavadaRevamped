import { promises as fs } from "fs"
import path from "path"
import Link from "next/link"
import { parseISO, format } from "date-fns"
import matter from "gray-matter"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Rajan Chavada",
  description: "Articles on AI, finance, trading, and software development.",
}

interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  image?: string
  category?: string
  readTime?: string
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const contentDir = path.join(process.cwd(), "content/blog")
  
  try {
    const files = await fs.readdir(contentDir)
    const posts: BlogPost[] = []

    for (const file of files) {
      if (!file.endsWith(".mdx")) continue

      const filePath = path.join(contentDir, file)
      const fileContent = await fs.readFile(filePath, "utf-8")
      const { data, content } = matter(fileContent)

      // Calculate read time (average 200 words per minute)
      const wordCount = content.split(/\s+/).length
      const readTime = `${Math.ceil(wordCount / 200)} min read`

      posts.push({
        slug: file.replace(".mdx", ""),
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        author: data.author || "Rajan Chavada",
        image: data.image,
        category: data.category || "General",
        readTime,
      })
    }

    // Sort by date (newest first)
    return posts.sort((a, b) => parseISO(b.date).getTime() - parseISO(a.date).getTime())
  } catch (error) {
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
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">No posts yet. Check back soon!</p>
                <p className="text-sm text-muted-foreground">
                  In the meantime, check out my{" "}
                  <a 
                    href="https://medium.com/@rajanchavada" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    Medium articles
                  </a>
                </p>
              </div>
            ) : (
              posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <div className="flex-1 order-2 sm:order-1">
                          {/* Category badge */}
                          {post.category && (
                            <div className="flex items-center gap-2 mb-3">
                              <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-700 dark:text-purple-100 rounded-full text-sm">
                                {post.category}
                              </span>
                            </div>
                          )}

                          {/* Title */}
                          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3 text-balance group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {post.title}
                          </h2>

                          {/* Description */}
                          <p className="text-muted-foreground mb-4 text-pretty leading-relaxed text-sm sm:text-base line-clamp-2">
                            {post.description}
                          </p>

                          {/* Meta info */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                              <span>{format(parseISO(post.date), "MMM dd, yyyy")}</span>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>

                            <Button
                              size="sm"
                              className="backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30 text-purple-700 dark:text-purple-100 rounded-full w-fit"
                            >
                              Read Article
                              <ArrowRight className="ml-2 h-3 w-3" />
                            </Button>
                          </div>
                        </div>

                        {/* Thumbnail */}
                        {post.image && (
                          <div className="flex-shrink-0 order-1 sm:order-2">
                            <div className="w-full h-48 sm:w-32 sm:h-24 lg:w-40 lg:h-28 rounded-lg overflow-hidden bg-muted">
                              <img
                                src={post.image}
                                alt={`Thumbnail for ${post.title}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
