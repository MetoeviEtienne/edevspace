import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PortfolioPage() {
  const projects = [
    {
      title: "ECommerce Platform",
      category: "E-commerce",
      description: "Plateforme e-commerce complète avec gestion des stocks, paiements sécurisés et analytics avancés.",
      image: "/modern-ecommerce-dashboard.png",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      features: ["Paiements sécurisés", "Gestion des stocks", "Analytics", "Mobile responsive"],
      status: "Terminé",
      client: "Retail Solutions Inc.",
      year: "2024",
      duration: "4 mois",
    },
    {
      title: "HealthCare App",
      category: "Santé",
      description: "Application mobile pour la gestion des rendez-vous médicaux et le suivi des patients.",
      image: "/healthcare-mobile-app.png",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      features: ["Rendez-vous en ligne", "Téléconsultation", "Dossiers patients", "Notifications"],
      status: "En cours",
      client: "MediCare Plus",
      year: "2024",
      duration: "6 mois",
    },
    {
      title: "FinTech Dashboard",
      category: "Finance",
      description: "Tableau de bord financier avec analyses en temps réel et gestion de portefeuille.",
      image: "/financial-dashboard.png",
      technologies: ["React", "D3.js", "Python", "AWS"],
      features: ["Analytics temps réel", "Gestion portefeuille", "Rapports automatisés", "API intégrations"],
      status: "Terminé",
      client: "InvestPro",
      year: "2023",
      duration: "5 mois",
    },
    {
      title: "Learning Management System",
      category: "Éducation",
      description: "Plateforme d'apprentissage en ligne avec cours interactifs et suivi des progrès.",
      image: "/online-learning-platform.png",
      technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
      features: ["Cours interactifs", "Vidéoconférence", "Évaluations", "Certificats"],
      status: "Terminé",
      client: "EduTech Academy",
      year: "2023",
      duration: "7 mois",
    },
    {
      title: "IoT Monitoring Platform",
      category: "IoT",
      description: "Plateforme de monitoring pour appareils IoT avec alertes et visualisation des données.",
      image: "/iot-monitoring-dashboard.png",
      technologies: ["Angular", "Node.js", "InfluxDB", "Docker"],
      features: ["Monitoring temps réel", "Alertes automatiques", "Visualisation données", "API REST"],
      status: "En cours",
      client: "SmartCity Solutions",
      year: "2024",
      duration: "8 mois",
    },
    {
      title: "Restaurant Management",
      category: "Restauration",
      description: "Système complet de gestion de restaurant avec commandes, inventaire et analytics.",
      image: "/restaurant-management-system-interface.png",
      technologies: ["React", "Express.js", "PostgreSQL", "Redis"],
      features: ["Gestion commandes", "Inventaire", "Point de vente", "Rapports"],
      status: "Terminé",
      client: "Bistro Chain",
      year: "2023",
      duration: "3 mois",
    },
  ]

  const categories = ["Tous", "E-commerce", "Santé", "Finance", "Éducation", "IoT", "Restauration"]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="font-serif font-black text-4xl md:text-6xl mb-6">
              Notre <span className="text-brand-purple">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos réalisations et les solutions innovantes que nous avons créées pour nos clients.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Tous" ? "default" : "outline"}
                className={category === "Tous" ? "bg-brand-purple hover:bg-brand-purple/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-border hover:border-brand-purple/30 overflow-hidden bg-card"
              >
                <div className="relative">
                  <div className="aspect-[16/10] bg-muted overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-background/90 backdrop-blur-sm text-foreground border-border"
                    >
                      {project.category}
                    </Badge>
                    <Badge
                      variant={project.status === "Terminé" ? "default" : "secondary"}
                      className={
                        project.status === "Terminé" ? "bg-green-500/90 text-white" : "bg-orange-500/90 text-white"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif font-bold text-2xl mb-2 text-foreground group-hover:text-brand-purple transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span>{project.year}</span>
                        <span>•</span>
                        <span>{project.duration}</span>
                        <span>•</span>
                        <span>{project.client}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm mb-3 text-foreground">Fonctionnalités clés</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-brand-purple rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-3 text-foreground">Technologies utilisées</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs rounded-full font-medium border border-brand-purple/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-border">
                    <Button size="sm" className="flex-1 bg-brand-purple hover:bg-brand-purple/90 text-white">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Voir le projet
                    </Button>
                    <Button size="sm" variant="outline" className="border-border hover:bg-muted bg-transparent">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Nos Réalisations en Chiffres</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Des résultats concrets qui témoignent de notre expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-serif font-black text-brand-purple mb-2">50+</div>
              <div className="text-gray-300">Projets Livrés</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-black text-brand-purple mb-2">25+</div>
              <div className="text-gray-300">Clients Satisfaits</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-black text-brand-purple mb-2">15+</div>
              <div className="text-gray-300">Secteurs d'Activité</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-black text-brand-purple mb-2">98%</div>
              <div className="text-gray-300">Taux de Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Ce Que Disent Nos Clients</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leurs témoignages reflètent notre engagement envers l'excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-brand-purple mb-2">{"★".repeat(5)}</div>
                  <p className="text-muted-foreground italic">
                    "EDevSpace a transformé notre vision en une plateforme e-commerce exceptionnelle. Leur expertise
                    technique et leur approche collaborative ont dépassé nos attentes."
                  </p>
                </div>
                <div>
                  <div className="font-medium">Marie Dupont</div>
                  <div className="text-sm text-muted-foreground">CEO, Retail Solutions Inc.</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-brand-purple mb-2">{"★".repeat(5)}</div>
                  <p className="text-muted-foreground italic">
                    "L'équipe d'EDevSpace a livré notre application mobile dans les délais avec une qualité
                    irréprochable. Un partenaire de confiance pour nos projets futurs."
                  </p>
                </div>
                <div>
                  <div className="font-medium">Jean Martin</div>
                  <div className="text-sm text-muted-foreground">CTO, MediCare Plus</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-brand-purple mb-2">{"★".repeat(5)}</div>
                  <p className="text-muted-foreground italic">
                    "Professionnalisme, créativité et expertise technique. EDevSpace a su comprendre nos besoins et
                    créer une solution parfaitement adaptée à notre secteur."
                  </p>
                </div>
                <div>
                  <div className="font-medium">Sophie Bernard</div>
                  <div className="text-sm text-muted-foreground">Directrice, InvestPro</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-black text-3xl md:text-4xl text-white mb-6">Votre Projet Sera le Prochain</h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Rejoignez nos clients satisfaits et transformez votre vision en réalité numérique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-brand-purple hover:bg-gray-100 px-8 py-3">
              <Link href="/contact" className="flex items-center">
                Démarrer un projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-purple px-8 py-3 bg-transparent"
            >
              <Link href="/services">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
