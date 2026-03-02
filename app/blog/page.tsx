import Link from "next/link"
import type { Metadata } from "next"
import { MinimalNav, MinimalBlogPosts, MinimalFooter } from "@/components/minimal"
import { ArrowLeft } from "lucide-react"
import { getBlogPosts } from "@/lib/get-blog-posts"

export const metadata: Metadata = {
  title: "Blog | Rajan Chavada",
  description: "Articles on AI, finance, trading, and software development.",
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <main className="min-h-screen bg-background">
      <MinimalNav />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 text-base"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-2">Blog</h1>
          <p className="text-muted-foreground text-base">
            Thoughts on AI, finance, trading, and software development
          </p>
        </div>

        {/* Blog posts — dashed format */}
        <MinimalBlogPosts
          posts={posts.map((p) => ({
            slug: p.slug,
            title: p.title,
            date: p.date,
            category: p.category,
          }))}
          showAllLink={false}
        />

        <MinimalFooter />
      </div>
    </main>
  )
}
