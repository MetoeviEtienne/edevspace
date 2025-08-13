import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "À Propos d'EDevSpace - Notre Histoire & Vision | METOEVI Etienne",
  description:
    "Découvrez l'histoire d'EDevSpace, fondée par METOEVI Etienne. Notre mission, vision et valeurs pour transformer votre entreprise avec des solutions digitales innovantes.",
  keywords: [
    "à propos EDevSpace",
    "METOEVI Etienne",
    "histoire entreprise",
    "mission vision valeurs",
    "transformation digitale",
    "leadership technologique",
  ],
  openGraph: {
    title: "À Propos d'EDevSpace - Notre Histoire & Vision",
    description:
      "Fondée par METOEVI Etienne, EDevSpace fusionne technologie et créativité pour redéfinir les possibilités du numérique.",
    url: "https://edevspace.com/about",
    images: [
      {
        url: "https://i.pinimg.com/736x/21/ea/f2/21eaf23f111d9de2ce23a6a90c034188.jpg",
        width: 800,
        height: 600,
        alt: "METOEVI Etienne - Directeur et Fondateur d'EDevSpace",
      },
    ],
  },
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "EDevSpace",
      founder: {
        "@type": "Person",
        name: "METOEVI Etienne",
        jobTitle: "Directeur et Fondateur",
        image: "https://i.pinimg.com/736x/b7/35/2d/b7352d3855ba4f19a78545327b24848c.jpg",
      },
      foundingDate: "2019",
      description:
        "EDevSpace fusionne technologie et créativité pour redéfinir les possibilités du numérique et accompagner les entreprises dans leur transformation digitale.",
      mission:
        "Transformer les idées en solutions numériques innovantes qui propulsent nos clients vers le succès dans l'économie digitale.",
      vision:
        "Devenir le partenaire de référence pour la transformation digitale, reconnu pour notre excellence technique et notre approche humaine.",
      values: ["Innovation", "Intégrité", "Collaboration", "Excellence"],
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
                À Propos d'<span className="text-brand-purple">EDevSpace</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Nous fusionnons technologie et créativité pour redéfinir les possibilités du numérique.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">Notre Histoire</h2>
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Fondée par <strong className="text-foreground">METOEVI Etienne</strong>, EDevSpace est née d'une
                    vision simple : démocratiser l'accès aux technologies de pointe pour toutes les entreprises, quelle
                    que soit leur taille.
                  </p>
                  <p>
                    Avec plus de 5 années d'expérience dans le développement logiciel et la transformation digitale,
                    notre équipe s'est forgée une réputation d'excellence et d'innovation.
                  </p>
                  <p>
                    Aujourd'hui, nous accompagnons des entreprises du monde entier dans leur transformation numérique,
                    en créant des solutions sur mesure qui répondent à leurs besoins spécifiques.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-brand-purple/20 to-gray-800/20 rounded-2xl overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/0a/a4/fa/0aa4fac21d02e9e3e40d918111b7fae2.jpg"
                    alt="METOEVI Etienne - Directeur EDevSpace, expert en transformation digitale"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Nos Valeurs Fondamentales</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ce qui nous guide dans chaque projet et chaque décision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article>
                <Card className="bg-gray-800 border-gray-700 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-brand-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="h-8 w-8 text-brand-purple" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif font-bold text-xl mb-4 text-white">Mission</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Transformer les idées en solutions numériques innovantes qui propulsent nos clients vers le succès
                      dans l'économie digitale.
                    </p>
                  </CardContent>
                </Card>
              </article>

              <article>
                <Card className="bg-gray-800 border-gray-700 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-brand-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Eye className="h-8 w-8 text-brand-purple" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif font-bold text-xl mb-4 text-white">Vision</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Devenir le partenaire de référence pour la transformation digitale, reconnu pour notre excellence
                      technique et notre approche humaine.
                    </p>
                  </CardContent>
                </Card>
              </article>

              <article>
                <Card className="bg-gray-800 border-gray-700 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-brand-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="h-8 w-8 text-brand-purple" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif font-bold text-xl mb-4 text-white">Valeurs</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Innovation, intégrité, collaboration et excellence. Nous plaçons nos clients au cœur de tout ce
                      que nous faisons.
                    </p>
                  </CardContent>
                </Card>
              </article>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Leadership</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Rencontrez la personne qui guide notre vision et notre stratégie.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="aspect-square bg-gradient-to-br from-brand-purple/10 to-gray-100 overflow-hidden">
                      <img
                        src="https://i.pinimg.com/736x/21/ea/f2/21eaf23f111d9de2ce23a6a90c034188.jpg"
                        alt="METOEVI Etienne - Directeur & Fondateur d'EDevSpace, expert en développement logiciel"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="font-serif font-bold text-2xl mb-6">METOEVI Etienne</h3>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          Passionné de technologie depuis plus de 10 ans, Etienne a fondé EDevSpace avec la conviction
                          que la technologie doit servir l'humain et les entreprises.
                        </p>
                        <p>
                          Expert en développement full-stack et en architecture logicielle, il guide notre équipe vers
                          l'excellence technique tout en maintenant une approche centrée sur les besoins clients.
                        </p>
                        <p>
                          Sa vision stratégique et son leadership inspirant font de lui le moteur de notre croissance et
                          de notre innovation continue.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 bg-brand-purple text-white" aria-labelledby="company-stats">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="company-stats" className="font-serif font-bold text-3xl md:text-4xl mb-4">
                EDevSpace en Chiffres
              </h2>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                Notre croissance témoigne de la confiance de nos clients.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-serif font-black mb-2" aria-label="Plus de 50 projets livrés">
                  50+
                </div>
                <div className="text-purple-100">Projets Livrés</div>
              </div>
              <div>
                <div
                  className="text-4xl md:text-5xl font-serif font-black mb-2"
                  aria-label="98 pourcent de satisfaction client"
                >
                  98%
                </div>
                <div className="text-purple-100">Satisfaction Client</div>
              </div>
              <div>
                <div
                  className="text-4xl md:text-5xl font-serif font-black mb-2"
                  aria-label="Plus de 15 technologies maîtrisées"
                >
                  15+
                </div>
                <div className="text-purple-100">Technologies Maîtrisées</div>
              </div>
              <div>
                <div
                  className="text-4xl md:text-5xl font-serif font-black mb-2"
                  aria-label="Support disponible 24 heures sur 24, 7 jours sur 7"
                >
                  24/7
                </div>
                <div className="text-purple-100">Support Disponible</div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
