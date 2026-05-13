import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react"

const socials = [
  { label: "GitHub", href: "https://github.com/RajanChavada", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rajan-chavada/", icon: Linkedin },
  { label: "Medium", href: "https://medium.com/@rajanchavada", icon: ExternalLink },
  { label: "Email", href: "mailto:RajanChavada111@gmail.com", icon: Mail },
  { label: "Resume", href: "/resume.pdf", icon: FileText },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="font-display text-[15px] text-text-primary">
          Handcrafted by Rajan Chavada.
        </p>
        <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 text-[14px] text-text-secondary transition-colors duration-150 hover:text-text-primary"
              >
                <s.icon className="h-3.5 w-3.5" strokeWidth={2} />
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
