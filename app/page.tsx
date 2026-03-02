import { getBlogPosts } from "@/lib/get-blog-posts"
import {
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
    <main className="min-h-screen bg-ivory">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-16">
        <MinimalHero />
        <MinimalExperience />
        <MinimalProjects />
        <MinimalBlogPosts
          posts={posts.map((p) => ({
            slug: p.slug,
            title: p.title,
            date: p.date,
          }))}
        />
        <MinimalAbout />
        <MinimalFooter />
      </div>
    </main>
  )
}
