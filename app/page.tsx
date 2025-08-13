import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Smartphone, Cloud, Users, Award, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EDevSpace",
    url: "https://edevspace.vercel.app/",
    logo: "https://i.pinimg.com/736x/87/9c/e6/879ce61027d9d2048860558e325107d4.jpg",
    description:
      "EDevSpace offre des services de développement web, applications mobiles et solutions cloud pour la transformation digitale des entreprises.",
    founder: {
      "@type": "Person",
      name: "METOEVI S. Etienne",
      jobTitle: "Directeur et Fondateur",
      email: "etiennemetoevi82@gmail.com",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-1-23-45-67-89",
      contactType: "customer service",
      email: "etiennemetoevi82@gmail.com",
    },
    sameAs: ["https://www.linkedin.com/in/etienne-metoevi-197931315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "https://x.com/EDevcode?t=2Blb0LwR4Y9o764KTVdcHA&s=09"],
    services: ["Développement Web", "Applications Mobiles", "Solutions Cloud", "Transformation Digitale"],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-purple-900/20 dark:from-purple-900/40 dark:via-purple-800/20 dark:to-purple-900/40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-serif font-black text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
                Empowering Your
                <span className="text-purple-600 block">Digital Transformation</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Chez EDevSpace, nous fusionnons technologie et créativité pour redéfinir les possibilités. Votre vision,
                notre expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                    Découvrir nos services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
                    Voir notre portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4 text-foreground">
                Solutions Taillées pour l'Ère Numérique
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Nous offrons une gamme complète de services pour propulser votre entreprise vers l'avenir.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article>
                <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-purple-600/50 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600/20 transition-colors">
                      <Code className="h-8 w-8 text-purple-600" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif font-bold text-xl mb-4 text-foreground">Développement Web</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Applications web modernes et performantes, conçues avec les dernières technologies pour optimiser
                      votre présence en ligne.
                    </p>
                  </CardContent>
                </Card>
              </article>

              <article>
                <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-purple-600/50 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600/20 transition-colors">
                      <Smartphone className="h-8 w-8 text-purple-600" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif font-bold text-xl mb-4 text-foreground">Applications Mobile</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Applications natives et cross-platform pour iOS et Android, optimisées pour l'expérience
                      utilisateur et les performances.
                    </p>
                  </CardContent>
                </Card>
              </article>

              <article>
                <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-purple-600/50 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600/20 transition-colors">
                      <Cloud className="h-8 w-8 text-purple-600" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif font-bold text-xl mb-4 text-foreground">Solutions Cloud</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Infrastructure cloud scalable et sécurisée pour accompagner votre croissance et optimiser vos
                      coûts opérationnels.
                    </p>
                  </CardContent>
                </Card>
              </article>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/50" aria-labelledby="stats-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="stats-heading" className="sr-only">
              Nos statistiques de performance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-serif font-black text-purple-600 mb-2" aria-label="50 projets réalisés">
                  50+
                </div>
                <div className="text-muted-foreground">Projets Réalisés</div>
              </div>
              <div>
                <div
                  className="text-4xl font-serif font-black text-purple-600 mb-2"
                  aria-label="98 pourcent de satisfaction client"
                >
                  98%
                </div>
                <div className="text-muted-foreground">Satisfaction Client</div>
              </div>
              <div>
                <div
                  className="text-4xl font-serif font-black text-purple-600 mb-2"
                  aria-label="Plus de 5 années d'expérience"
                >
                  5+
                </div>
                <div className="text-muted-foreground">Années d'Expérience</div>
              </div>
              <div>
                <div
                  className="text-4xl font-serif font-black text-purple-600 mb-2"
                  aria-label="Support technique 24 heures sur 24, 7 jours sur 7"
                >
                  24/7
                </div>
                <div className="text-muted-foreground">Support Technique</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4 text-foreground">
                Pourquoi Choisir EDevSpace ?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Notre approche unique combine expertise technique et vision créative.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Équipe Experte</h3>
                  <p className="text-muted-foreground">
                    Une équipe de développeurs passionnés et expérimentés, dirigée par METOEVI Etienne.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Qualité Garantie</h3>
                  <p className="text-muted-foreground">
                    Nous nous engageons à livrer des solutions de haute qualité, testées et optimisées.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Innovation Continue</h3>
                  <p className="text-muted-foreground">
                    Nous restons à la pointe des technologies pour vous offrir les meilleures solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif font-black text-3xl md:text-4xl text-white mb-6">
              Prêt à Transformer Votre Vision en Réalité ?
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
                  Démarrer un projet
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 bg-transparent"
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
