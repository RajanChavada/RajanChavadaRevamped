import Link from "next/link"

export function MinimalAbout() {
  return (
    <section className="py-12">
      <h2 className="font-serif text-xl font-bold text-forest-green mb-4">Learn more about me</h2>
      <p className="text-olive text-sm max-w-xl leading-relaxed mb-4">
        Passionate about building scalable solutions and creating exceptional user experiences.
        Currently at Borealis AI | RBC as an ML/AI & Infrastructure Scientist.
        Background in full-stack, cloud, and quantitative engineering.
      </p>
      <Link
        href="/Rajan_Chavada_Resume_Summer2026.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sage text-sm hover:underline"
      >
        Resume →
      </Link>
    </section>
  )
}
