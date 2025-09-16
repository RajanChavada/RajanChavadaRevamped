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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`space-y-6 sm:space-y-8 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="relative inline-block">
            <Image
              src="/images/rajan-headshot.jpg"
              alt="Rajan Chavada"
              width={160}
              height={160}
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-2xl mx-auto mb-6 sm:mb-8 animate-float shadow-2xl object-cover"
              priority
            />
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
              <span className="text-purple-600 dark:text-purple-400 drop-shadow-lg">Rajan</span>{" "}
              <span className="text-pink-600 dark:text-pink-400 drop-shadow-lg">Chavada</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-purple-600 dark:text-purple-300 max-w-3xl mx-auto text-balance font-medium drop-shadow-sm">
              Software Developer & Cloud Solutions Architect
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
              Passionate about building scalable solutions and creating exceptional user experiences. Currently working
              at Intact Insurance as a Cloud Technical Advisor.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 px-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("experience")}
              className="w-full sm:w-auto group backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30 text-purple-700 dark:text-purple-100 rounded-full"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto backdrop-blur-md bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:from-purple-500/20 hover:to-pink-500/20 text-purple-700 dark:text-purple-100 rounded-full"
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
              className="w-full sm:w-auto backdrop-blur-md bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:from-purple-500/20 hover:to-pink-500/20 text-purple-700 dark:text-purple-100 rounded-full"
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
