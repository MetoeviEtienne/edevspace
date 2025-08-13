import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Code,
  Smartphone,
  Cloud,
  Palette,
  Database,
  Shield,
  Clock,
  Users,
  Award,
  CheckCircle,
  Star,
  Calendar,
  BookOpen,
  Target,
} from "lucide-react"

export default function FormationPage() {
  const formations = [
    {
      icon: Code,
      title: "Développement Web Full-Stack",
      duration: "3 mois",
      level: "Débutant à Avancé",
      description: "Maîtrisez React, Next.js, Node.js et les bases de données pour devenir un développeur complet",
      price: "1 500€",
      modules: ["HTML/CSS/JavaScript", "React & Next.js", "Node.js & Express", "Bases de données", "Déploiement"],
      popular: true,
      students: 150,
      rating: 4.9,
    },
    {
      icon: Smartphone,
      title: "Développement Mobile",
      duration: "2 mois",
      level: "Intermédiaire",
      description: "Créez des applications mobiles performantes avec React Native et Flutter",
      price: "1 200€",
      modules: ["React Native", "Flutter", "API Integration", "App Store", "Performance"],
      popular: false,
      students: 89,
      rating: 4.8,
    },
    {
      icon: Cloud,
      title: "Solutions Cloud & DevOps",
      duration: "2 mois",
      level: "Avancé",
      description: "Maîtrisez AWS, Docker, Kubernetes et les pratiques DevOps modernes",
      price: "1 800€",
      modules: ["AWS Services", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
      popular: false,
      students: 67,
      rating: 4.7,
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      duration: "1.5 mois",
      level: "Débutant",
      description: "Apprenez le design thinking, Figma et créez des interfaces utilisateur exceptionnelles",
      price: "900€",
      modules: ["Design Thinking", "Figma", "Prototypage", "User Research", "Design System"],
      popular: false,
      students: 124,
      rating: 4.9,
    },
    {
      icon: Database,
      title: "Base de Données & API",
      duration: "1 mois",
      level: "Intermédiaire",
      description: "Maîtrisez SQL, NoSQL, REST et GraphQL pour gérer efficacement les données",
      price: "800€",
      modules: ["SQL Avancé", "MongoDB", "REST API", "GraphQL", "Optimisation"],
      popular: false,
      students: 78,
      rating: 4.6,
    },
    {
      icon: Shield,
      title: "Cybersécurité Web",
      duration: "2 mois",
      level: "Avancé",
      description: "Sécurisez vos applications et apprenez les techniques de tests de pénétration",
      price: "1 600€",
      modules: ["Sécurité Web", "Pentesting", "OWASP", "Cryptographie", "Audit Sécurité"],
      popular: false,
      students: 45,
      rating: 4.8,
    },
  ]

  const advantages = [
    {
      icon: Award,
      title: "Certification Reconnue",
      description: "Obtenez une certification valorisée par les entreprises",
    },
    {
      icon: Users,
      title: "Formateurs Experts",
      description: "Apprenez avec des professionnels expérimentés du secteur",
    },
    {
      icon: Target,
      title: "Projets Pratiques",
      description: "Travaillez sur des projets réels pour votre portfolio",
    },
    {
      icon: BookOpen,
      title: "Support Continu",
      description: "Bénéficiez d'un accompagnement personnalisé",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-purple/10 text-brand-purple px-4 py-2 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="h-4 w-4" />
              Formations Professionnelles Certifiantes
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Développez Vos Compétences Tech
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Formations pratiques et certifiantes dispensées par nos experts. Apprenez les technologies les plus
              demandées du marché avec un accompagnement personnalisé.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-brand-purple" />
                <span>500+ étudiants formés</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-brand-purple" />
                <span>4.8/5 de satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-brand-purple" />
                <span>Certification reconnue</span>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Choisir Nos Formations ?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-6">
                    <advantage.icon className="h-12 w-12 text-brand-purple mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Formations Grid */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Formations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {formations.map((formation, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                >
                  {formation.popular && (
                    <Badge className="absolute top-4 right-4 bg-brand-purple text-white">Populaire</Badge>
                  )}
                  <CardHeader>
                    <formation.icon className="h-12 w-12 text-brand-purple mb-4" />
                    <CardTitle className="text-lg">{formation.title}</CardTitle>
                    <CardDescription>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4" />
                          <span>{formation.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Target className="h-4 w-4" />
                          <span>{formation.level}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4" />
                          <span>{formation.students} étudiants</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{formation.rating}/5</span>
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{formation.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Modules inclus :</h4>
                      <div className="flex flex-wrap gap-1">
                        {formation.modules.map((module, moduleIndex) => (
                          <Badge key={moduleIndex} variant="secondary" className="text-xs">
                            {module}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-brand-purple">{formation.price}</span>
                      <Button size="sm" className="bg-brand-purple hover:bg-brand-purple/90">
                        S'inscrire
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Inscription aux Formations</h2>
              <p className="text-muted-foreground">
                Remplissez ce formulaire pour vous inscrire à nos formations. Notre équipe vous contactera sous 24h.
              </p>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-brand-purple" />
                  Demande d'Inscription
                </CardTitle>
                <CardDescription>Tous les champs marqués d'un * sont obligatoires</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom *</Label>
                    <Input id="firstName" placeholder="Votre prénom" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom *</Label>
                    <Input id="lastName" placeholder="Votre nom" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="votre.email@exemple.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input id="phone" type="tel" placeholder="+33 6 12 34 56 78" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Niveau d'expérience *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez votre niveau" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Débutant</SelectItem>
                      <SelectItem value="intermediate">Intermédiaire</SelectItem>
                      <SelectItem value="advanced">Avancé</SelectItem>
                      <SelectItem value="expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Formations souhaitées * (sélectionnez une ou plusieurs)</Label>
                  <div className="grid gap-3 max-h-48 overflow-y-auto p-2 border rounded-md">
                    {formations.map((formation, index) => (
                      <div key={index} className="flex items-start space-x-3 p-2 hover:bg-muted/50 rounded">
                        <Checkbox id={`formation-${index}`} className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor={`formation-${index}`} className="text-sm font-medium cursor-pointer">
                            {formation.title}
                          </Label>
                          <div className="text-xs text-muted-foreground mt-1">
                            {formation.duration} • {formation.price}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">Objectifs et motivations</Label>
                  <Textarea
                    id="motivation"
                    placeholder="Décrivez vos objectifs professionnels et pourquoi vous souhaitez suivre ces formations..."
                    className="min-h-32"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">Disponibilités préférées</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Quand souhaitez-vous commencer ?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">Dès que possible</SelectItem>
                      <SelectItem value="1-month">Dans 1 mois</SelectItem>
                      <SelectItem value="2-months">Dans 2 mois</SelectItem>
                      <SelectItem value="3-months">Dans 3 mois</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium mb-1">Engagement qualité</p>
                      <p className="text-muted-foreground">
                        Nous nous engageons à vous recontacter sous 24h et à vous proposer un parcours personnalisé.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white h-12 text-lg">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  Envoyer ma Demande d'Inscription
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
