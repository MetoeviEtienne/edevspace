import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ED</span>
              </div>
              <span className="font-serif font-black text-xl">EDevSpace</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nous transformons vos idées en solutions numériques innovantes. Votre partenaire de confiance pour la
              transformation digitale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
                  Équipe
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Développement Web</span>
              </li>
              <li>
                <span className="text-gray-300">Applications Mobile</span>
              </li>
              <li>
                <span className="text-gray-300">Consulting IT</span>
              </li>
              <li>
                <span className="text-gray-300">Transformation Digitale</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-brand-purple" />
                <span className="text-gray-300 text-sm">etiennemetoevi82@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-purple" />
                <span className="text-gray-300 text-sm">+22959411467</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-brand-purple" />
                <span className="text-gray-300 text-sm">Bénin, Cotonou</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <Link href="https://www.linkedin.com/in/etienne-metoevi-197931315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-300 hover:text-brand-purple transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://x.com/EDevcode?t=2Blb0LwR4Y9o764KTVdcHA&s=09" className="text-gray-300 hover:text-brand-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/MetoeviEtienne" className="text-gray-300 hover:text-brand-purple transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
         <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} EDevSpace. Tous droits réservés. Dirigé par METOEVI Etienne.
        </p>
        </div>
      </div>
    </footer>
  )
}
