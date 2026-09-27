import Link from "next/link"
import { format } from "date-fns"
import type { ListedPost } from "@/lib/posts"

export function PostList({ posts }: { posts: ListedPost[] }) {
  return (
    <ul className="divide-y divide-dashed divide-border border-y-[1.5px] border-border-strong">
      {posts.map((post) => {
        const inner = (
          <>
            <span className="shrink-0 pt-1 font-mono text-[12px] text-text-muted sm:w-24">
              {format(new Date(post.date), "MMM yyyy")}
            </span>
            <span className="flex-1">
              <span className="block font-display text-[1.45rem] leading-snug group-hover:text-accent">
                {post.title}
              </span>
              {post.description && (
                <span className="mt-1 line-clamp-2 block text-[14.5px] leading-relaxed text-text-secondary">
                  {post.description}
                </span>
              )}
            </span>
            <span className="shrink-0 pt-1 font-mono text-[11px] text-text-muted">
              {post.external ? "medium ↗" : post.readTime}
            </span>
          </>
        )
        const className = "group flex flex-col gap-1 py-5 sm:flex-row sm:gap-5"
        return (
          <li key={post.href}>
            {post.external ? (
              <a href={post.href} target="_blank" rel="noopener noreferrer" className={className}>
                {inner}
              </a>
            ) : (
              <Link href={post.href} className={className}>
                {inner}
              </Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}
