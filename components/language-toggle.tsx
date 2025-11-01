"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import type { Language } from "@/lib/translations"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const languages: Language[] = ["en", "hy", "fa"]
  const currentIndex = languages.indexOf(language)
  const nextLanguage = languages[(currentIndex + 1) % languages.length]

  const getLanguageLabel = (lang: Language) => {
    switch (lang) {
      case "en":
        return "🇬🇧 English"
      case "hy":
        return "🇦🇲 Հայերեն"
      case "fa":
        return "🇮🇷 فارسی"
      default:
        return lang
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(nextLanguage)}
      className="fixed top-4 right-4 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      {getLanguageLabel(language)}
    </Button>
  )
}
