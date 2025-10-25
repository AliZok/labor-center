"use client"

import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LanguageToggle } from "@/components/language-toggle"

export default function Home() {
  return (
    <main>
      <LanguageToggle />
      <Hero />
      <Services />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
      {/* Thin blue line with Armenian flag blue color at top of header */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-[#0033A0] z-50"></div>
    </main>
  )
}
