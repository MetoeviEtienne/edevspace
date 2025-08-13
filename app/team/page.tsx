import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Github, Mail } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "METOEVI Etienne",
      role: "Directeur & Fondateur",
      bio: "Visionnaire et leader technique avec plus de 10 ans d'expérience. Expert en architecture logicielle et transformation digitale.",
      skills: ["Leadership", "Architecture", "Strategy", "Full-Stack"],
      initials: "ME",
      photo: "https://i.pinimg.com/736x/b7/35/2d/b7352d3855ba4f19a78545327b24848c.jpg",
    },
    {
      name: "Sarah DUBOIS",
      role: "Lead Developer Frontend",
      bio: "Spécialiste React et UX/UI avec une passion pour créer des interfaces utilisateur exceptionnelles.",
      skills: ["React", "TypeScript", "UI/UX", "Next.js"],
      initials: "SD",
      photo: "/french-woman-developer-headshot.png",
    },
    {
      name: "Marc BERNARD",
      role: "Senior Backend Developer",
      bio: "Expert en développement backend et architecture cloud, spécialisé dans les solutions scalables.",
      skills: ["Node.js", "Python", "AWS", "Microservices"],
      initials: "MB",
      photo: "/placeholder-5ua6r.png",
    },
    {
      name: "Lisa MARTIN",
      role: "Mobile Developer",
      bio: "Développeuse mobile passionnée, experte en React Native et Flutter pour créer des apps performantes.",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      initials: "LM",
      photo: "/young-woman-mobile-developer-headshot.png",
    },
    {
      name: "Thomas LEROY",
      role: "DevOps Engineer",
      bio: "Spécialiste DevOps et infrastructure cloud, garantit la fiabilité et la performance de nos solutions.",
      skills: ["Docker", "Kubernetes", "CI/CD", "Monitoring"],
      initials: "TL",
      photo: "/bearded-devops-headshot.png",
    },
    {
      name: "Emma GARCIA",
      role: "UX/UI Designer",
      bio: "Designer créative qui transforme les idées complexes en expériences utilisateur intuitives et engageantes.",
      skills: ["Figma", "Design System", "Prototyping", "User Research"],
      initials: "EG",
      photo: "/creative-designer-headshot.png",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="font-serif font-black text-4xl md:text-6xl mb-6">
              Notre <span className="text-brand-purple">Équipe</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Rencontrez les talents qui donnent vie à vos projets numériques.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Une Équipe d'Experts Passionnés</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Chaque membre de notre équipe apporte son expertise unique pour créer des solutions exceptionnelles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-brand-purple/50"
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-105 transition-transform border-4 border-brand-purple/20">
                      <img
                        src={member.photo || "/placeholder.svg"}
                        alt={`Photo de ${member.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {index === 0 && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">👑</span>
                      </div>
                    )}
                  </div>

                  <h3 className="font-serif font-bold text-xl mb-2">{member.name}</h3>
                  <p className="text-brand-purple font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{member.bio}</p>

                  <div className="mb-6">
                    <h4 className="font-medium text-sm mb-3">Compétences :</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-brand-purple/10 text-brand-purple text-xs rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3">
                    <button className="w-8 h-8 bg-gray-100 hover:bg-brand-purple hover:text-white rounded-full flex items-center justify-center transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className="w-8 h-8 bg-gray-100 hover:bg-brand-purple hover:text-white rounded-full flex items-center justify-center transition-colors">
                      <Twitter className="h-4 w-4" />
                    </button>
                    <button className="w-8 h-8 bg-gray-100 hover:bg-brand-purple hover:text-white rounded-full flex items-center justify-center transition-colors">
                      <Github className="h-4 w-4" />
                    </button>
                    <button className="w-8 h-8 bg-gray-100 hover:bg-brand-purple hover:text-white rounded-full flex items-center justify-center transition-colors">
                      <Mail className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Notre Culture d'Entreprise</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Les valeurs qui nous unissent et nous motivent au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">Innovation</h3>
              <p className="text-gray-300 text-sm">
                Nous repoussons constamment les limites pour créer des solutions avant-gardistes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">Collaboration</h3>
              <p className="text-gray-300 text-sm">
                Le travail d'équipe et la communication ouverte sont au cœur de notre réussite.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">Excellence</h3>
              <p className="text-gray-300 text-sm">
                Nous visons l'excellence dans chaque ligne de code et chaque interaction client.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-serif font-bold text-lg mb-2">Apprentissage</h3>
              <p className="text-gray-300 text-sm">
                Nous investissons dans la formation continue pour rester à la pointe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-brand-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-black text-3xl md:text-4xl text-white mb-6">Rejoignez Notre Équipe</h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Vous partagez notre passion pour l'innovation ? Nous sommes toujours à la recherche de talents
            exceptionnels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-purple hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
              Voir nos offres d'emploi
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-brand-purple px-8 py-3 rounded-lg font-medium transition-colors">
              Candidature spontanée
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
