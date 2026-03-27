import Image from "next/image"

export function MacrosSection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Macro View Screenshot */}
          <div className="order-2 flex-shrink-0 lg:order-1">
            <Image
              src="/screenshots/macro-view.png"
              alt="Poma AI macro tracking view showing 1669 kcal with proteins, carbs, and fats breakdown"
              width={320}
              height={650}
              className="h-auto w-[260px] md:w-[300px]"
            />
          </div>
          
          {/* Text Content */}
          <div className="order-1 max-w-xl text-center lg:order-2 lg:text-left">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Calories and macros, automatically.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Poma tracks your calories, protein, carbs, and fats from every meal photo. No manual logging, no barcode scanning. Just your camera.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Swipe between your longevity scores and your daily macros on the home screen. Set personalized targets based on your body, or let Poma calculate them for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
