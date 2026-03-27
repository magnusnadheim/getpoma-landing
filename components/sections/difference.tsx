import Image from "next/image"

export function DifferenceSection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Text Content */}
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              This is not just a calorie counter.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Most food apps obsess over calories and macros. Poma gives you that, and goes deeper. It measures how your food affects the speed at which your body ages, looking at inflammation, oxidative stress, metabolic impact, and cellular repair across every ingredient.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Personalized to your body, your goals, and your biology.
            </p>
          </div>
          
          {/* Ingredient Detail Screenshot */}
          <div className="flex-shrink-0">
            <Image
              src="/screenshots/ingredient-detail.png"
              alt="Poma AI ingredient detail showing Pace of Aging analysis with ingredient tags and health insights"
              width={320}
              height={650}
              className="h-auto w-[260px] md:w-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
