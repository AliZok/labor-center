"use client"

import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-xl font-bold text-foreground">{t.laborCenter}</h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{t.footerDescription}</p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-foreground">{t.quickLinks}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  {t.services}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  {t.aboutUs}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-foreground">{t.services}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t.construction}</li>
              <li>{t.generalLabor}</li>
              <li>{t.warehouse}</li>
              <li>{t.maintenance}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
