import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Text Content */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-foreground">Snap your food.</span>
              <br />
              <span className="font-serif text-primary text-5xl sm:text-6xl md:text-7xl">Slow aging.</span>
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Poma AI analyzes your meals and shows you how they affect your biological aging, sleep, skin, and energy. Calories and macros included. Just take a photo.
            </p>
            <div className="mt-8">
              <Button 
                asChild 
                size="lg" 
                className="h-14 rounded-2xl bg-primary px-8 text-base font-medium text-primary-foreground hover:bg-primary/90"
              >
                <a 
                  href="https://apps.apple.com/app/poma-ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Image
                    src="/appstore.png"
                    alt=""
                    width={22}
                    height={22}
                    className="h-5 w-5 brightness-0 invert"
                  />
                  Download on the App Store
                </a>
              </Button>
            </div>
          </div>
          
          {/* App Screenshot */}
          <div className="flex-shrink-0">
            <Image
              src="/screenshots/hero.png"
              alt="Poma AI app showing your pace of aging in Balance with Sleep, Youth, and Energy scores"
              width={320}
              height={650}
              className="h-auto w-[280px] md:w-[320px]"
              priority
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
