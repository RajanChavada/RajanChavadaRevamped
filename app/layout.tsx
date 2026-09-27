import type React from "react"
import type { Metadata, Viewport } from "next"
import { Instrument_Serif, Inter_Tight, JetBrains_Mono, Caveat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
})

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-caveat",
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
    default: "Rajan Chavada · builds things engineers keep using",
    template: "%s | Rajan Chavada",
  },
  description:
    "Rajan Chavada builds developer tools and production AI systems. Backend at Bree (YC), previously ML infra at RBC Borealis AI. Made Neurovn, CacheLane and Rosetta.",
  keywords: [
    "Rajan Chavada",
    "ML Software Engineer",
    "Agentic AI",
    "LangGraph",
    "RAG",
    "RBC Borealis AI",
    "Bree",
    "CacheLane",
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
    title: "Rajan Chavada",
    description:
      "I build tools engineers actually keep using. Neurovn, CacheLane, Rosetta. Backend at Bree (YC).",
    siteName: "Rajan Chavada",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajan Chavada",
    description:
      "I build tools engineers actually keep using. Neurovn, CacheLane, Rosetta. Backend at Bree (YC).",
    creator: "@RajanChavada",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F1E6" },
    { media: "(prefers-color-scheme: dark)", color: "#0F2138" },
  ],
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rajan Chavada",
  jobTitle: "Software Engineer",
  url: "https://chavada.vercel.app",
  sameAs: [
    "https://github.com/RajanChavada",
    "https://www.linkedin.com/in/rajan-chavada/",
    "https://medium.com/@rajanchavada",
    "https://devpost.com/JimmyChavada",
    "https://x.com/RajanChavada",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Western Ontario",
  },
  worksFor: {
    "@type": "Organization",
    name: "Bree",
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
        className={`${instrument.variable} ${interTight.variable} ${jetbrains.variable} ${caveat.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-bg-elevated focus:px-4 focus:py-2 focus:border focus:border-border-strong"
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
