import { Clock, Moon, Sparkles, Zap } from "lucide-react"
import Image from "next/image"

const pillars = [
  {
    icon: Clock,
    name: "Pace of Aging",
    color: "#57897D",
    description: "See if your meals are speeding up or slowing down your biological clock.",
  },
  {
    icon: Moon,
    name: "Sleep Quality",
    color: "#0928A5",
    description: "Find out which foods support deep rest and which ones disrupt it.",
  },
  {
    icon: Sparkles,
    name: "Skin & Youth",
    color: "#FF9500",
    description: "Track how your diet affects collagen, hydration, and cellular repair.",
  },
  {
    icon: Zap,
    name: "Energy",
    color: "#FF577F",
    description: "Know which meals fuel you for hours and which cause a crash.",
  },
]

export function PillarsSection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            One meal. Four insights.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every photo you take is analyzed across four dimensions of your health.
          </p>
        </div>
        
        {/* Pillars Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div 
              key={pillar.name}
              className="rounded-2xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div 
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${pillar.color}15` }}
              >
                <pillar.icon 
                  className="h-6 w-6" 
                  style={{ color: pillar.color }}
                  strokeWidth={1.5}
                />
              </div>
              <h3 
                className="mt-4 text-lg font-semibold"
                style={{ color: pillar.color }}
              >
                {pillar.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* App Screenshot */}
        <div className="mt-16 flex justify-center">
          <Image
            src="/screenshots/meal-results.png"
            alt="Poma AI meal analysis showing avocado toast making you age slower with Sleep, Youth, and Energy scores"
            width={320}
            height={650}
            className="h-auto w-[280px] md:w-[320px]"
          />
        </div>
      </div>
    </section>
  )
}
