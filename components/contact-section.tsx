"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="get-in-touch" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-5xl">
            {t.getInTouch}
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.contactDescription}
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                {t.phone}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">+374 XX XXX XXX</p>
              <p className="text-sm text-muted-foreground">{t.phoneHours}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                {t.email}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">info@laborcenter.am</p>
              <p className="text-sm text-muted-foreground">{t.emailSupport}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {t.location}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t.locationAddress}</p>
              <p className="text-muted-foreground">{t.locationCity}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
