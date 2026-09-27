import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"
import { mediumPosts } from "@/lib/site"

export interface ListedPost {
  title: string
  description: string
  date: string
  href: string
  external: boolean
  category?: string
  readTime?: string
}

export async function getLocalPosts(): Promise<ListedPost[]> {
  const contentDir = path.join(process.cwd(), "content/blog")
  let files: string[] = []
  try {
    files = await fs.readdir(contentDir)
  } catch {
    return []
  }

  const posts: ListedPost[] = []
  for (const file of files) {
    if (!file.endsWith(".mdx")) continue
    const raw = await fs.readFile(path.join(contentDir, file), "utf-8")
    const { data, content } = matter(raw)
    if (data.draft === true) continue
    const date = data.date instanceof Date ? data.date : new Date(data.date ?? Date.now())
    posts.push({
      title: data.title || "Untitled",
      description: data.description || "",
      date: date.toISOString(),
      href: `/blog/${file.replace(/\.mdx$/, "")}`,
      external: false,
      category: data.category,
      readTime: `${Math.ceil(content.split(/\s+/).length / 200)} min`,
    })
  }
  return posts
}

export async function getAllPosts(): Promise<ListedPost[]> {
  const local = await getLocalPosts()
  const localTitles = new Set(local.map((p) => p.title.toLowerCase()))
  const external: ListedPost[] = mediumPosts
    .filter((p) => !localTitles.has(p.title.toLowerCase()))
    .map((p) => ({
      title: p.title,
      description: p.description,
      date: new Date(p.date).toISOString(),
      href: p.href,
      external: true,
      category: "Medium",
    }))
  return [...local, ...external].sort((a, b) => +new Date(b.date) - +new Date(a.date))
}
