"use client"

import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LanguageToggle } from "@/components/language-toggle"

export default function Home() {
  return (
    <main className="min-h-screen">
      <LanguageToggle />
      <Hero />
      <Services />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </main>
  )
}
