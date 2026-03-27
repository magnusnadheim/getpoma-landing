import { Button } from "@/components/ui/button"
import Image from "next/image"

export function FinalCtaSection() {
  return (
    <section className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 text-center">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Your longevity journey starts with your next meal.
            </h2>
            <div className="mt-8">
              <Button 
                asChild 
                size="lg" 
                className="h-14 rounded-2xl bg-primary px-8 text-base font-medium text-primary-foreground hover:bg-primary/90"
              >
                <a 
                  href="https://apps.apple.com/app/poma-ai/id6748758285" 
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
          <Image
            src="/screenshots/hero.png"
            alt="Poma AI app showing your pace of aging in Balance with Sleep, Youth, and Energy scores"
            width={320}
            height={650}
            className="h-auto w-[280px] md:w-[320px]"
          />
        </div>
      </div>
    </section>
  )
}
