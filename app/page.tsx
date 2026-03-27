import { HeroSection } from "@/components/sections/hero"
import { PillarsSection } from "@/components/sections/pillars"
import { MacrosSection } from "@/components/sections/macros"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { AiChatSection } from "@/components/sections/ai-chat"
import { DifferenceSection } from "@/components/sections/difference"
import { SocialProofSection } from "@/components/sections/social-proof"
import { FinalCtaSection } from "@/components/sections/final-cta"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <MacrosSection />
      <HowItWorksSection />
      <AiChatSection />
      <DifferenceSection />
      <SocialProofSection />
      <FinalCtaSection />
    </>
  )
}
