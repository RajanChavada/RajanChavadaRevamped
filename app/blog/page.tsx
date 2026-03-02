import Link from "next/link"
import type { Metadata } from "next"
import { BlogPostList } from "@/components/blog-post-list"
import { MinimalFooter } from "@/components/minimal"
import { ArrowLeft } from "lucide-react"
import { getBlogPosts } from "@/lib/get-blog-posts"

export const metadata: Metadata = {
  title: "Blog | Rajan Chavada",
  description: "Articles on AI, finance, trading, and software development.",
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <main className="min-h-screen bg-ivory">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-16">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sage hover:text-forest-green transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-3xl font-bold text-forest-green mb-2">Blog</h1>
          <p className="text-sage text-sm">
            Thoughts on AI, finance, trading, and software development
          </p>
        </div>

        {/* Blog posts */}
        <div className="space-y-6">
          <BlogPostList posts={posts} />
        </div>

        <MinimalFooter />
      </div>
    </main>
  )
}
