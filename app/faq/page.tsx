import type { Metadata } from "next"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ - Poma AI",
  description: "Frequently asked questions about Poma AI, the health app that analyzes your meals and tracks biological aging.",
}

const faqs = [
  {
    question: "What does Poma AI do?",
    answer: "Poma AI analyzes photos of your meals using AI and scores their biological impact across four areas: aging, sleep, skin health, and energy. It also tracks your calories, protein, carbs, and fats automatically. Instead of just counting calories, it shows you how your food affects how fast your body ages.",
  },
  {
    question: "How does the AI analysis work?",
    answer: "When you snap a photo, the AI identifies every ingredient in your meal, evaluates each one based on current nutritional science, and calculates personalized impact scores and macro breakdowns based on your profile: your age, weight, height, activity level, diet, and any allergies.",
  },
  {
    question: "What is the Pace of Aging?",
    answer: "A score that shows whether your meals are making you age faster or slower than your baseline. Below 1.0x means you're aging slower. Above 1.0x means faster. It updates with every meal you log.",
  },
  {
    question: "Does it track calories and macros?",
    answer: "Yes. Every meal photo is analyzed for calories, protein, carbs, and fats. You can swipe between your longevity scores and your daily macro breakdown on the home screen. Targets are personalized based on your body, and you can adjust them anytime.",
  },
  {
    question: "Is it free?",
    answer: "Poma AI offers a free trial on the yearly plan. After the trial, you can continue with a monthly or yearly subscription.",
  },
  {
    question: "What data do you collect?",
    answer: "We collect your email, name, health profile (height, weight, diet, allergies, activity level), and meal photos for app functionality. We never sell your data, serve ads, or track you. See our full Privacy Policy for details.",
  },
  {
    question: "Does it work outside of iOS?",
    answer: "Poma AI is currently available on iOS only.",
  },
  {
    question: "How is this different from calorie counting apps?",
    answer: "Calorie counters measure energy input. Poma measures biological impact: how each ingredient affects inflammation, oxidative stress, sleep chemistry, skin repair, and metabolic health. You also get full calorie and macro tracking, but that is the supporting layer, not the whole story.",
  },
  {
    question: "Who makes Poma AI?",
    answer: "Poma AI is made by Bare Mitt AS, based in Norway. Contact us at magnus@baremitt.no.",
  },
]

export default function FaqPage() {
  return (
    <div className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Frequently Asked Questions
        </h1>
        
        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
