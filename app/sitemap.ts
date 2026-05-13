import type { MetadataRoute } from "next"
import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"

const SITE = "https://chavada.vercel.app"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: new Date(), priority: 1 },
    { url: `${SITE}/about`, lastModified: new Date(), priority: 0.9 },
    { url: `${SITE}/blog`, lastModified: new Date(), priority: 0.8 },
  ]

  const contentDir = path.join(process.cwd(), "content/blog")
  try {
    const files = await fs.readdir(contentDir)
    const posts: MetadataRoute.Sitemap = []
    for (const file of files) {
      if (!file.endsWith(".mdx")) continue
      const slug = file.replace(".mdx", "")
      const raw = await fs.readFile(path.join(contentDir, file), "utf-8")
      const { data } = matter(raw)
      const date =
        data.date instanceof Date
          ? data.date
          : typeof data.date === "string"
            ? new Date(data.date)
            : new Date()
      posts.push({
        url: `${SITE}/blog/${slug}`,
        lastModified: date,
        priority: 0.6,
      })
    }
    return [...staticRoutes, ...posts]
  } catch {
    return staticRoutes
  }
}
