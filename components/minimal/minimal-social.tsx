import { Github, Linkedin, FileText } from "lucide-react"

const links = [
  { href: "https://github.com/RajanChavada", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/rajan-chavada/", label: "LinkedIn", icon: Linkedin },
  { href: "https://medium.com/@rajanchavada", label: "Medium", icon: FileText },
]

export function MinimalSocial() {
  return (
    <div className="flex items-center gap-6 pt-8">
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sage hover:text-forest-green transition-colors flex items-center gap-2"
          aria-label={label}
        >
          <Icon className="h-4 w-4" />
          <span className="text-sm">{label}</span>
        </a>
      ))}
    </div>
  )
}
