import type React from "react"
import type { Metadata } from "next"
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-libre-sans",
})

export const metadata: Metadata = {
  title: "Rajan Chavada - Software Developer",
  description: "Portfolio of Rajan Chavada - Software Developer & Cloud Solutions Architect",
  generator: "v0.app",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${libreBaskerville.variable} ${sourceSans.variable} ${GeistMono.variable} antialiased overflow-x-hidden`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="rajan-theme">
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
