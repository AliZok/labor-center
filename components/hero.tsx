"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground">
            <Users className="h-4 w-4" />
            <span>{t.professionalLaborServices}</span>
          </div>
          <h1 className="mb-6 text-balance font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
            {t.heroTitle}
          </h1>
          <p className="mb-8 text-pretty text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
            {t.heroDescription}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 group"
              onClick={() => scrollToSection('get-in-touch')}
            >
              {t.getStartedToday}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => scrollToSection('our-services')}
            >
              {t.viewOurServices}
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
    </section>
  )
}
