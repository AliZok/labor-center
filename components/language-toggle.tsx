"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "hy" : "en")}
      className="fixed top-4 right-4 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      {language === "en" ? "🇦🇲 Հայերեն" : "🇬🇧 English"}
    </Button>
  )
}
