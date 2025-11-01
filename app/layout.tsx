import type React from "react"
import type { Metadata } from "next"
import { Inter, Work_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Professional Labor Services | Skilled Workers Center",
  description: "Quality labor and worker services for your projects. Experienced professionals ready to help.",
  generator: "v0.app",
  other: {
    "font-link": "https://cdn.fontcdn.ir/css?v=4.2.1&file=IRANSans.css",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.fontcdn.ir/css?v=4.2.1&file=IRANSans.css"
        />
      </head>
      <body className={`${inter.variable} ${workSans.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
