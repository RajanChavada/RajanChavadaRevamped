"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Mail, Linkedin } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`space-y-8 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="relative inline-block">
            <Image
              src="/images/rajan-headshot.jpg"
              alt="Rajan Chavada"
              width={200}
              height={200}
              className="rounded-2xl mx-auto mb-8 animate-float shadow-2xl"
              priority
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance">
              <span className="text-purple-600 dark:text-purple-400 drop-shadow-lg">Rajan</span>{" "}
              <span className="text-pink-600 dark:text-pink-400 drop-shadow-lg">Chavada</span>
            </h1>
            <p className="text-xl sm:text-2xl text-purple-600 dark:text-purple-300 max-w-3xl mx-auto text-balance font-medium drop-shadow-sm">
              Software Developer & Cloud Solutions Architect
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Passionate about building scalable solutions and creating exceptional user experiences. Currently working
              at Intact Insurance as a Cloud Technical Advisor.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("experience")}
              className="group backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30 text-purple-700 dark:text-purple-100 rounded-full"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="backdrop-blur-md bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:from-purple-500/20 hover:to-pink-500/20 text-purple-700 dark:text-purple-100 rounded-full"
            >
              <a href="mailto:RajanChavada111@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="backdrop-blur-md bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:from-purple-500/20 hover:to-pink-500/20 text-purple-700 dark:text-purple-100 rounded-full"
            >
              <a href="https://www.linkedin.com/in/rajan-chavada/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </section>
  )
}
