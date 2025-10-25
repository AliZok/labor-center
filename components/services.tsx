"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Hammer, Package, Truck, Building2, Wrench, HardHat } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Building2,
      title: t.constructionWorkers,
      description: t.constructionDesc,
    },
    {
      icon: HardHat,
      title: t.generalLabor,
      description: t.generalLaborDesc,
    },
    {
      icon: Wrench,
      title: t.maintenanceStaff,
      description: t.maintenanceDesc,
    },
    {
      icon: Package,
      title: t.warehouseWorkers,
      description: t.warehouseDesc,
    },
    {
      icon: Truck,
      title: t.logisticsSupport,
      description: t.logisticsDesc,
    },
    {
      icon: Hammer,
      title: t.specializedTrades,
      description: t.specializedDesc,
    },
  ]

  return (
    <section id="our-services" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground md:text-5xl">
            {t.ourServices}
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.servicesDescription}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border transition-all hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-[family-name:var(--font-heading)]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
