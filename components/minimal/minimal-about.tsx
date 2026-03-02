import Link from "next/link"
import { AboutBlurbWithModals } from "./about-blurb-with-modals"

export function MinimalAbout() {
  return (
    <section id="learn-more" className="py-12">
      <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
        Learn more about me
      </h2>
      <div className="mb-4">
        <AboutBlurbWithModals />
      </div>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/about"
          className="text-foreground text-base hover:underline"
        >
          About →
        </Link>
        <a
          href="/Rajan_Chavada_Resume_Summer2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground text-base hover:text-foreground transition-colors"
        >
          Resume →
        </a>
      </div>
    </section>
  )
}
