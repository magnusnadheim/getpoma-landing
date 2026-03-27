import { Camera, Cpu, TrendingUp } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    number: "1",
    icon: Camera,
    title: "Snap",
    description: "Take a photo of your meal. Breakfast, lunch, dinner, snack. Anything.",
  },
  {
    number: "2",
    icon: Cpu,
    title: "Analyze",
    description: "AI identifies every ingredient and calculates its biological impact and full macro breakdown.",
  },
  {
    number: "3",
    icon: TrendingUp,
    title: "Track",
    description: "Watch your pace of aging, wellness scores, and nutrition trends over days, weeks, and months.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Three steps. Zero effort.
          </h2>
        </div>
        
        {/* Steps */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <step.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>
              <div className="mt-4 text-sm font-medium text-primary">
                Step {step.number}
              </div>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* App Screenshots */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          <Image
            src="/screenshots/camera.png"
            alt="Poma AI camera view identifying ingredients like tomatoes, balsamico, and avocado in a salad"
            width={320}
            height={650}
            className="h-auto w-[260px] md:w-[300px]"
          />
          <Image
            src="/screenshots/insights.png"
            alt="Poma AI insights view showing weekly macros tracking with calories, proteins, carbs, and fats"
            width={320}
            height={650}
            className="h-auto w-[260px] md:w-[300px]"
          />
        </div>
      </div>
    </section>
  )
}
