const experiences = [
  {
    title: "ML/AI & Infrastructure Scientist",
    company: "Borealis AI | Royal Bank of Canada",
    period: "Dec 2025 – Present",
  },
  {
    title: "Cloud Engineer",
    company: "Intact Insurance",
    period: "Sept 2025 – Dec 2025",
  },
  {
    title: "Quantitative Software/AI Engineer",
    company: "Royal Bank of Canada | Amplify",
    period: "May 2025 – Aug 2025",
  },
  {
    title: "Full-Stack Software Engineer Intern (Client Services)",
    company: "Royal Bank of Canada | Capital Markets",
    period: "May 2024 – Aug 2024",
  },
  {
    title: "Full-Stack Software Engineer Intern (Global Equities)",
    company: "Royal Bank of Canada | Capital Markets",
    period: "May 2023 – Aug 2023",
  },
]

export function MinimalExperience() {
  return (
    <section className="py-12">
      <h2 className="font-serif text-xl font-bold text-forest-green mb-6">Experience</h2>
      <ul className="space-y-3">
        {experiences.map((exp, i) => (
          <li key={i} className="flex flex-wrap items-baseline gap-x-2">
            <span className="font-medium text-forest-green">{exp.title}</span>
            <span className="text-sage text-sm">— {exp.company}</span>
            <span className="text-olive text-sm">{exp.period}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
