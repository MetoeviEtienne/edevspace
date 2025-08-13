import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Cloud, Database, Shield, Zap, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services EDevSpace - Développement Web, Mobile & Cloud | Solutions Digitales",
  description:
    "Découvrez nos services : développement web, applications mobiles, solutions cloud, cybersécurité et consulting IT. Transformez votre entreprise avec EDevSpace.",
  keywords: [
    "développement web",
    "applications mobiles",
    "solutions cloud",
    "cybersécurité",
    "consulting IT",
    "React",
    "Next.js",
    "React Native",
    "AWS",
    "transformation digitale",
  ],
  openGraph: {
    title: "Services EDevSpace - Solutions Digitales Complètes",
    description:
      "Développement web, applications mobiles, solutions cloud et cybersécurité. Nos experts transforment vos défis en opportunités.",
    url: "https://edevspace.com/services",
    images: [
      {
        url: "/services-overview.jpg",
        width: 1200,
        height: 630,
        alt: "Services EDevSpace - Développement et Solutions Digitales",
      },
    ],
  },
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Développement Web",
      description: "Applications web modernes et performantes",
      features: [
        "Sites web responsives",
        "Applications web progressives (PWA)",
        "E-commerce sur mesure",
        "Systèmes de gestion de contenu",
        "Intégrations API",
      ],
      technologies: ["React", "Next.js", "Vue.js", "Node.js", "TypeScript"],
    },
    {
      icon: Smartphone,
      title: "Applications Mobile",
      description: "Apps natives et cross-platform",
      features: [
        "Applications iOS et Android",
        "Développement React Native",
        "Applications Flutter",
        "Optimisation des performances",
        "Publication sur les stores",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
    },
    {
      icon: Cloud,
      title: "Solutions Cloud",
      description: "Infrastructure scalable et sécurisée",
      features: [
        "Migration vers le cloud",
        "Architecture microservices",
        "Déploiement automatisé",
        "Monitoring et alertes",
        "Optimisation des coûts",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    },
    {
      icon: Database,
      title: "Gestion de Données",
      description: "Solutions de base de données optimisées",
      features: [
        "Conception de bases de données",
        "Migration de données",
        "Optimisation des performances",
        "Sauvegarde et récupération",
        "Analytics et reporting",
      ],
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "BigQuery"],
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Protection et conformité",
      features: [
        "Audit de sécurité",
        "Authentification sécurisée",
        "Chiffrement des données",
        "Conformité RGPD",
        "Tests de pénétration",
      ],
      technologies: ["OAuth", "JWT", "SSL/TLS", "Firewall", "Monitoring"],
    },
    {
      icon: Zap,
      title: "Consulting IT",
      description: "Accompagnement stratégique",
      features: [
        "Audit technique",
        "Stratégie digitale",
        "Formation des équipes",
        "Optimisation des processus",
        "Transformation agile",
      ],
      technologies: ["Agile", "DevOps", "CI/CD", "Git", "Jira"],
    },
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Organization",
      name: "EDevSpace",
      url: "https://edevspace.com",
    },
    serviceType: "Digital Transformation Services",
    description:
      "Services complets de développement web, applications mobiles, solutions cloud, cybersécurité et consulting IT pour la transformation digitale des entreprises.",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services EDevSpace",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="font-serif font-black text-4xl md:text-6xl mb-6">
                Nos <span className="text-brand-purple">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Solutions taillées pour l'ère numérique. Nous transformons vos défis en opportunités.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <article key={index}>
                  <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-brand-purple/50 h-full">
                    <CardHeader>
                      <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-purple/20 transition-colors">
                        <service.icon className="h-8 w-8 text-brand-purple" aria-hidden="true" />
                      </div>
                      <CardTitle className="font-serif font-bold text-xl">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-3">Fonctionnalités :</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <Check className="h-4 w-4 text-brand-purple mr-2 flex-shrink-0" aria-hidden="true" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">Technologies :</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-brand-purple/10 text-brand-purple text-xs rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Notre Processus</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Une méthodologie éprouvée pour garantir le succès de vos projets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl" aria-label="Étape 1">
                    1
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">Analyse</h3>
                <p className="text-gray-300 text-sm">
                  Nous analysons vos besoins et définissons ensemble les objectifs du projet.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl" aria-label="Étape 2">
                    2
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">Conception</h3>
                <p className="text-gray-300 text-sm">
                  Nous concevons l'architecture et les maquettes de votre solution.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl" aria-label="Étape 3">
                    3
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">Développement</h3>
                <p className="text-gray-300 text-sm">Nous développons votre solution avec les meilleures pratiques.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl" aria-label="Étape 4">
                    4
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">Livraison</h3>
                <p className="text-gray-300 text-sm">Nous déployons et vous accompagnons dans la prise en main.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-purple">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif font-black text-3xl md:text-4xl text-white mb-6">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-brand-purple hover:bg-gray-100 px-8 py-3"
                >
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-brand-purple px-8 py-3 bg-transparent"
                >
                  Voir nos réalisations
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
