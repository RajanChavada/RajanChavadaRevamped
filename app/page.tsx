import { getBlogPosts } from "@/lib/get-blog-posts"
import { MinimalNav } from "../components/minimal/minimal-nav"
import { MinimalHero } from "../components/minimal/minimal-hero"
import { MinimalExperience } from "../components/minimal/minimal-experience"
import { MinimalProjects } from "../components/minimal/minimal-projects"
import { MinimalBlogPosts } from "../components/minimal/minimal-blog-posts"
import { MinimalAbout } from "../components/minimal/minimal-about"
import { MinimalFooter } from "../components/minimal/minimal-footer"

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
