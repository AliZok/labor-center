"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useLanguage } from "@/contexts/language-context"
import type { Language } from "@/lib/translations"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const languages: Language[] = ["en", "hy", "fa"]

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
    <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
      <SelectTrigger
        size="sm"
        className="fixed top-4 right-4 z-50 w-fit bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <SelectValue placeholder={getLanguageLabel(language)} />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang} value={lang}>
            {getLanguageLabel(lang)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
