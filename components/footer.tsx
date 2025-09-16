import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">Let's Connect</h3>
            <p className="text-muted-foreground max-w-md mx-auto text-pretty">
              I'm always interested in new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:RajanChavada111@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/rajan-chavada/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>

          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/RajanChavada" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://medium.com/@rajanchavada" target="_blank" rel="noopener noreferrer">
                <FileText className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="text-center pt-8 border-t border-border w-full">
            <p className="text-sm text-muted-foreground flex items-center justify-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Rajan Chavada
            </p>
            <p className="text-xs text-muted-foreground mt-2">© 2024 Rajan Chavada. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
