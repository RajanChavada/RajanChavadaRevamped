import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PostList } from "@/components/post-list"
import { getAllPosts } from "@/lib/posts"
import { links } from "@/lib/site"

export const metadata: Metadata = {
  title: "Writing",
  description: "Rajan Chavada on building with AI, filing a patent at 21, and what day trading taught him.",
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen">
      <Navigation />

      <div id="main" className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="mono-label">page 3 · writing</p>
          <h1 className="mt-4 text-[3.2rem] leading-[0.95] sm:text-[4.2rem]">
            Notes, <span className="italic">longhand.</span>
          </h1>
          <p className="mt-5 max-w-xl text-[16px] text-text-secondary">
            Engineering, AI tooling, and a few older posts about money and markets. Some live here, the newer
            ones live on{" "}
            <a href={links.medium} target="_blank" rel="noopener noreferrer" className="ink-link">
              Medium
            </a>
            .
          </p>

          <div className="mt-12">
            {posts.length === 0 ? (
              <p className="text-[15px] text-text-secondary">Nothing here yet.</p>
            ) : (
              <PostList posts={posts} />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
