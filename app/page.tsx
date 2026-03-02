import { getBlogPosts } from "@/lib/get-blog-posts"
import {
  MinimalNav,
  MinimalHero,
  MinimalExperience,
  MinimalProjects,
  MinimalBlogPosts,
  MinimalAbout,
  MinimalFooter,
} from "@/components/minimal"

export default async function Home() {
  const posts = await getBlogPosts()

  return (
    <main className="min-h-screen bg-background">
      <MinimalNav />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <MinimalHero />
        <MinimalExperience />
      </div>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <MinimalProjects />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <MinimalBlogPosts
          posts={posts.map((p) => ({
            slug: p.slug,
            title: p.title,
            date: p.date,
            category: p.category,
          }))}
        />
        <MinimalAbout />
        <MinimalFooter />
      </div>
    </main>
  )
}
