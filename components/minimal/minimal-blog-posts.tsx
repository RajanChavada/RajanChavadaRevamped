import Link from "next/link"
import { format } from "date-fns"

interface BlogPost {
  slug: string
  title: string
  date: string
}

export function MinimalBlogPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <section className="py-12">
        <h2 className="font-serif text-xl font-bold text-forest-green mb-6">Posts</h2>
        <p className="text-sage text-sm">No posts yet. Check back soon.</p>
      </section>
    )
  }

  return (
      <section className="py-12">
        <h2 className="font-serif text-xl font-bold text-forest-green mb-6">Posts</h2>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-forest-green hover:underline"
            >
              {post.title}
            </Link>
            <span className="text-sage text-sm ml-2">
              {format(new Date(post.date), "MMM d, yyyy")}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href="/blog"
        className="inline-block mt-4 text-sage text-sm hover:underline"
      >
        See all posts →
      </Link>
    </section>
  )
}
