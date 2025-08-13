import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "EDevSpace - Développement Web & Applications Mobiles | Transformation Digitale",
  description:
    "EDevSpace, dirigé par METOEVI Etienne, offre des services de développement web, applications mobiles et solutions cloud. Transformez votre vision digitale avec notre expertise technique.",
  keywords: [
    "développement web",
    "applications mobiles",
    "solutions cloud",
    "transformation digitale",
    "EDevSpace",
    "METOEVI Etienne",
    "développement logiciel",
    "programmation",
    "technologie",
  ],
  authors: [{ name: "METOEVI Etienne", url: "https://edevspace.com" }],
  creator: "EDevSpace",
  publisher: "EDevSpace",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://edevspace.com"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
  openGraph: {
    title: "EDevSpace - Empowering Your Digital Transformation",
    description:
      "Solutions de développement web et mobile sur mesure. Dirigé par METOEVI Etienne, nous transformons vos idées en réalité digitale.",
    url: "https://edevspace.com",
    siteName: "EDevSpace",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EDevSpace - Transformation Digitale",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDevSpace - Développement Web & Mobile",
    description:
      "Transformez votre vision digitale avec EDevSpace. Développement web, applications mobiles et solutions cloud.",
    images: ["/og-image.jpg"],
    creator: "@edevspace",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${openSans.variable}`} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://edevspace.com" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        <meta name="ICBM" content="46.603354, 1.888334" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider defaultTheme="dark" storageKey="edevspace-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
