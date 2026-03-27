import { MessageCircle } from "lucide-react"
import Image from "next/image"

export function AiChatSection() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* App Screenshot */}
          <div className="order-2 flex-shrink-0 lg:order-1">
            <Image
              src="/screenshots/chat.png"
              alt="Poma AI chat showing conversation about açaí bowl, discussing aging effects and protein content"
              width={320}
              height={650}
              className="h-auto w-[280px] md:w-[320px]"
            />
          </div>
          
          {/* Text Content */}
          <div className="order-1 max-w-xl text-center lg:order-2 lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <MessageCircle className="h-4 w-4" />
              AI Chat
            </div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ask anything about your meals.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Curious how a meal affects your aging? Want to know if you&apos;re getting enough protein? Just ask. Poma&apos;s AI gives you personalized advice based on your food history and health goals.
            </p>
            <ul className="mt-6 space-y-3 text-base text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Get instant answers about nutrition and longevity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Ask follow-up questions about any meal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>Receive suggestions to improve your scores</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
