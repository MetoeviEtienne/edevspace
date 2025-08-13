import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, Clock, Users, Award } from "lucide-react"

export default function StagePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-purple/10 text-brand-purple px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase className="h-4 w-4" />
              Opportunités de Stage
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Rejoignez Notre Équipe
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Développez vos compétences avec EDevSpace. Nous offrons des stages enrichissants dans le développement
              web, mobile et les solutions cloud.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Faire Votre Stage Chez EDevSpace ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-brand-purple mx-auto mb-4" />
                  <CardTitle>Encadrement Expert</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Travaillez directement avec notre équipe expérimentée dirigée par METOEVI Etienne
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Award className="h-12 w-12 text-brand-purple mx-auto mb-4" />
                  <CardTitle>Projets Réels</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Participez à des projets clients réels et construisez un portfolio professionnel
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Clock className="h-12 w-12 text-brand-purple mx-auto mb-4" />
                  <CardTitle>Flexibilité</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Horaires flexibles adaptés à votre emploi du temps académique</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Formulaire de Demande de Stage</CardTitle>
                <CardDescription>Remplissez ce formulaire pour postuler à un stage chez EDevSpace</CardDescription>
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
                  <Label htmlFor="school">École/Université *</Label>
                  <Input id="school" placeholder="Nom de votre établissement" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="level">Niveau d'études *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez votre niveau" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bac+2">Bac+2 (BTS, DUT)</SelectItem>
                      <SelectItem value="bac+3">Bac+3 (Licence)</SelectItem>
                      <SelectItem value="bac+4">Bac+4 (Master 1)</SelectItem>
                      <SelectItem value="bac+5">Bac+5 (Master 2)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="domain">Domaine d'intérêt *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisissez un domaine" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Développement Web</SelectItem>
                      <SelectItem value="mobile">Développement Mobile</SelectItem>
                      <SelectItem value="cloud">Solutions Cloud</SelectItem>
                      <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                      <SelectItem value="devops">DevOps</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Durée souhaitée</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Durée du stage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-month">1 mois</SelectItem>
                      <SelectItem value="2-months">2 mois</SelectItem>
                      <SelectItem value="3-months">3 mois</SelectItem>
                      <SelectItem value="6-months">6 mois</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">Lettre de motivation *</Label>
                  <Textarea
                    id="motivation"
                    placeholder="Expliquez pourquoi vous souhaitez faire votre stage chez EDevSpace..."
                    className="min-h-32"
                    required
                  />
                </div>

                <Button className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white">
                  Envoyer ma Candidature
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
