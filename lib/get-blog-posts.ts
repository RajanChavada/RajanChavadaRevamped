import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  image?: string
  category?: string
  readTime?: string
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const contentDir = path.join(process.cwd(), "content/blog")

  try {
    const files = await fs.readdir(contentDir)
    const posts: { slug: string; title: string; description: string; date: Date; author: string; image?: string; category?: string; readTime: string }[] = []

    for (const file of files) {
      if (!file.endsWith(".mdx")) continue

      const filePath = path.join(contentDir, file)
      const fileContent = await fs.readFile(filePath, "utf-8")
      const { data, content } = matter(fileContent)

      const wordCount = content.split(/\s+/).length
      const readTime = `${Math.ceil(wordCount / 200)} min read`

      let postDate: Date
      if (data.date instanceof Date) {
        postDate = data.date
      } else if (typeof data.date === "string") {
        postDate = new Date(data.date)
      } else {
        postDate = new Date()
      }

      posts.push({
        slug: file.replace(".mdx", ""),
        title: data.title || "Untitled",
        description: data.description || "",
        date: postDate,
        author: data.author || "Rajan Chavada",
        image: data.image,
        category: data.category || "General",
        readTime,
      })
    }

    return posts
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .map((p) => ({
        ...p,
        date: p.date.toISOString(),
      }))
  } catch (error) {
    console.error("Error reading blog posts:", error)
    return []
  }
}
