import Link from "next/link"
import { SectionTitle } from "@/components/section-title"
import { PostList } from "@/components/post-list"
import { getAllPosts } from "@/lib/posts"

export async function Writing() {
  const posts = (await getAllPosts()).slice(0, 4)

  return (
    <section id="writing" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle index="04" title="Writing" note="when I have something to say" />
        <PostList posts={posts} />
        <Link href="/blog" className="ink-link mt-6 inline-block font-mono text-[13px]">
          all posts →
        </Link>
      </div>
    </section>
  )
}
