"use client"

import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function WhyChooseUs() {
  const { t } = useLanguage()

  const benefits = [t.benefit1, t.benefit2, t.benefit3, t.benefit4, t.benefit5, t.benefit6, t.benefit7, t.benefit8]

  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="mb-6 text-balance font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-5xl">
              {t.whyChooseUs}
            </h2>
            <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground">{t.whyChooseUsDesc}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-secondary" />
                  <span className="leading-relaxed text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-secondary/10">
              <img
                src="/diverse-group-of-construction-workers-and-laborers.jpg"
                alt="Professional workers"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-accent p-6 text-accent-foreground shadow-xl">
              <div className="text-4xl font-bold font-[family-name:var(--font-heading)]">15+</div>
              <div className="text-sm">{t.yearsOfExperience}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
