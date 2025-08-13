"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Users } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="font-serif font-black text-4xl md:text-6xl mb-6">
              Innovons <span className="text-brand-purple">Ensemble</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Prêt à transformer votre vision en réalité numérique ? Contactez-nous pour démarrer votre projet.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif font-bold text-2xl">Parlez-nous de votre projet</CardTitle>
                  <p className="text-muted-foreground">
                    Remplissez ce formulaire et nous vous recontacterons dans les 24 heures.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company">Entreprise</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="service">Service souhaité *</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="mt-1 w-full px-3 py-2 border border-border rounded-md bg-background"
                        >
                          <option value="">Sélectionnez un service</option>
                          <option value="web">Développement Web</option>
                          <option value="mobile">Application Mobile</option>
                          <option value="cloud">Solutions Cloud</option>
                          <option value="consulting">Consulting IT</option>
                          <option value="other">Autre</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="budget">Budget estimé</Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="mt-1 w-full px-3 py-2 border border-border rounded-md bg-background"
                        >
                          <option value="">Sélectionnez un budget</option>
                          <option value="5k-15k">5k€ - 15k€</option>
                          <option value="15k-30k">15k€ - 30k€</option>
                          <option value="30k-50k">30k€ - 50k€</option>
                          <option value="50k+">50k€+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Décrivez votre projet *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="mt-1"
                        placeholder="Parlez-nous de votre projet, vos objectifs, vos contraintes..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-brand-purple hover:bg-brand-purple/90">
                      <Send className="mr-2 h-5 w-5" />
                      Envoyer ma demande
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif font-bold text-xl">Informations de Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-brand-purple mt-1" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">etiennemetoevi82@gmail.com</div>
                      <div className="text-muted-foreground">etienne.metoevi@edevspace.com</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-brand-purple mt-1" />
                    <div>
                      <div className="font-medium">Téléphone</div>
                      <div className="text-muted-foreground">+33 1 23 45 67 89</div>
                      <div className="text-muted-foreground">+33 6 12 34 56 78</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-brand-purple mt-1" />
                    <div>
                      <div className="font-medium">Adresse</div>
                      <div className="text-muted-foreground">
                        123 Avenue des Champs-Élysées
                        <br />
                        75008 Paris, France
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-brand-purple mt-1" />
                    <div>
                      <div className="font-medium">Horaires</div>
                      <div className="text-muted-foreground">
                        Lun - Ven : 9h00 - 18h00
                        <br />
                        Sam : 10h00 - 16h00
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif font-bold text-xl">Actions Rapides</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Chat en direct
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Calendar className="mr-2 h-4 w-4" />
                    Planifier un appel
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Users className="mr-2 h-4 w-4" />
                    Rencontrer l'équipe
                  </Button>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-brand-purple text-white">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="font-serif font-bold text-lg mb-2">Réponse Garantie</h3>
                  <p className="text-purple-100 text-sm">
                    Nous nous engageons à vous répondre dans les 24 heures ouvrées.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Questions Fréquentes</h2>
            <p className="text-xl text-gray-300">Trouvez rapidement les réponses à vos questions.</p>
          </div>

          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-lg mb-2 text-white">
                  Combien de temps prend un projet typique ?
                </h3>
                <p className="text-gray-300">
                  La durée varie selon la complexité, mais la plupart de nos projets sont livrés entre 4 et 12 semaines.
                  Nous établissons un planning détaillé dès le début du projet.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-lg mb-2 text-white">
                  Proposez-vous un support après livraison ?
                </h3>
                <p className="text-gray-300">
                  Oui, nous offrons un support technique complet avec différents niveaux de service selon vos besoins.
                  Maintenance, mises à jour et évolutions sont incluses dans nos contrats.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-serif font-bold text-lg mb-2 text-white">
                  Comment se déroule le processus de développement ?
                </h3>
                <p className="text-gray-300">
                  Nous suivons une méthodologie agile avec des sprints de 2 semaines. Vous êtes impliqué à chaque étape
                  avec des démonstrations régulières et des points de validation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
