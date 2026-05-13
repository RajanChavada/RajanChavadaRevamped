import type React from "react"
import type { Metadata, Viewport } from "next"
import { Libre_Baskerville, Source_Sans_3, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baskerville",
  display: "swap",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://chavada.vercel.app"),
  title: {
    default: "Rajan Chavada — ML Software Engineer",
    template: "%s | Rajan Chavada",
  },
  description:
    "ML Software Engineer working on agentic AI and production systems. Patent-pending agentic RAG shipping to 18,000+ traders at RBC. Building open-source agentic-coding tooling (Rosetta, Neurovn).",
  keywords: [
    "Rajan Chavada",
    "ML Software Engineer",
    "Agentic AI",
    "LangGraph",
    "RAG",
    "RBC Borealis AI",
    "Rosetta",
    "Neurovn",
  ],
  authors: [{ name: "Rajan Chavada" }],
  creator: "Rajan Chavada",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://chavada.vercel.app",
    title: "Rajan Chavada — ML Software Engineer",
    description:
      "ML Software Engineer · Agentic AI · Production Systems. Patent-pending agentic RAG shipping to 18,000+ traders at RBC.",
    siteName: "Rajan Chavada",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajan Chavada — ML Software Engineer",
    description:
      "ML Software Engineer · Agentic AI · Production Systems. Patent-pending agentic RAG shipping to 18,000+ traders at RBC.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#0F0F0E" },
  ],
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rajan Chavada",
  jobTitle: "ML Software Engineer",
  url: "https://chavada.vercel.app",
  sameAs: [
    "https://github.com/RajanChavada",
    "https://www.linkedin.com/in/rajan-chavada/",
    "https://medium.com/@rajanchavada",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Western Ontario",
  },
  worksFor: {
    "@type": "Organization",
    name: "Borealis AI (RBC)",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${baskerville.variable} ${sourceSans.variable} ${jetbrains.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-bg-elevated focus:px-4 focus:py-2 focus:rounded focus:border focus:border-accent"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
