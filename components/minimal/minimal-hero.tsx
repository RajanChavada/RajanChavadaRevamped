import Image from "next/image"

export function MinimalHero() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-2xl">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2">
          Rajan Chavada
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-6">
          Software Developer & Cloud Solutions Architect
        </p>
        <blockquote className="text-muted-foreground text-lg border-l-2 border-muted-foreground pl-4 italic mb-8">
          Perhaps you want to learn more about me?
        </blockquote>
        <div className="flex justify-center">
          <Image
            src="/images/rc-logo.png"
            alt="RC Logo"
            width={64}
            height={64}
            className="w-16 h-16 opacity-90"
          />
        </div>
      </div>
    </section>
  )
}
