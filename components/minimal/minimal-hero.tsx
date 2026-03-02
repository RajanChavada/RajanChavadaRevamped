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
        <blockquote className="text-muted-foreground text-lg border-l-2 border-muted-foreground pl-4 italic">
          Perhaps you want to learn more about me?
        </blockquote>
        <div className="flex justify-center mt-8">
          <Image
            src="/images/rajan-portrait.png"
            alt="Rajan Chavada"
            width={120}
            height={120}
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
          />
        </div>
      </div>
    </section>
  )
}
