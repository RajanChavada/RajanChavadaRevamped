import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "Plyce",
    description: "Local Restaurant Discovery — React Native, FastAPI, Google Cloud, iOS",
    image: "/restaurant-discovery-app.jpg",
    github: "https://github.com/RajanChavada/Plyce",
  },
  {
    title: "Chill Bill",
    description: "Financial Wellness Platform — React, TypeScript, Cloudflare Workers, Llama 2, Plaid API",
    image: "/financial-wellness-app-dashboard.png",
    github: "https://github.com/RajanChavada/Chill-Bill",
  },
  {
    title: "FitCheck",
    description: "AI-powered outfit rating — Python, Computer Vision, ML, Flask",
    image: "/fashion-outfit-rating-app.jpg",
    github: "https://github.com/RajanChavada/FitCheck",
  },
  {
    title: "FinSightGPT",
    description: "Trading analysis tool — Python, GPT API, React",
    image: "/financial-trading-analysis-dashboard.jpg",
    github: "https://github.com/RajanChavada/FInSightGPT",
  },
  {
    title: "Arnold",
    description: "Fitness tracking app — React Native, Node.js, MongoDB",
    image: "/fitness-tracking-app-interface.png",
    github: "https://github.com/RajanChavada/Arnold",
  },
  {
    title: "ASL Translator",
    description: "Real-time sign language translation — Python, OpenCV, TensorFlow",
    image: "/sign-language-translation-app.png",
    github: "https://github.com/RajanChavada/asl-translator",
  },
]

export function MinimalProjects() {
  return (
    <section className="py-12">
      <h2 className="font-serif text-xl font-bold text-forest-green mb-6">Projects</h2>
      <p className="text-olive text-sm mb-8">
        A few screengrabs from some of my recent personal works.
      </p>
      <div className="space-y-10">
        {projects.map((project, i) => (
          <div key={i} className="space-y-3">
            <div className="relative w-full aspect-video max-w-2xl rounded overflow-hidden bg-ivory/50 border border-sage/30">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
            <div>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-forest-green hover:underline"
              >
                {project.title}
              </Link>
              <p className="text-sage text-sm mt-1">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
