import Link from "next/link"
import { format } from "date-fns"

interface BlogPost {
  slug: string
  title: string
  date: string
  category?: string
}

interface MinimalBlogPostsProps {
  posts: BlogPost[]
  showAllLink?: boolean
}

export function MinimalBlogPosts({ posts, showAllLink = true }: MinimalBlogPostsProps) {
  if (posts.length === 0) {
    return (
      <section id="posts" className="py-12">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
          Posts
        </h2>
        <p className="text-muted-foreground text-base">No posts yet. Check back soon.</p>
      </section>
    )
  }

  return (
    <section id="posts" className="py-12">
      <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
        Posts
      </h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="text-foreground hover:underline text-base flex-1 min-w-0"
            >
              {post.title}
              {post.category && (
                <span className="text-muted-foreground italic ml-1">
                  {" "}
                  {post.category}
                </span>
              )}
            </Link>
            <span className="text-muted-foreground text-base sm:ml-4 sm:shrink-0 flex items-center gap-2">
              <span className="hidden sm:inline text-muted-foreground/50">
                — — — — — — — — — —
              </span>
              {format(new Date(post.date), "MMM d, yyyy")}
            </span>
          </li>
        ))}
      </ul>
      {showAllLink && (
        <Link
          href="/blog"
          className="inline-block mt-6 text-muted-foreground text-base hover:text-foreground transition-colors"
        >
          See all posts →
        </Link>
      )}
    </section>
  )
}
