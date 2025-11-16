import Link from 'next/link'
import { SITE_CONFIG } from '@/constants'
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}`

  return (
    <footer className="bg-gradient-to-br from-sky-900 via-indigo-900 to-purple-900 text-slate-50 relative overflow-hidden">
      {/* Top Wave - White separator */}
      <div className="pointer-events-none -mt-px">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-[80px] md:h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'rotate(180deg)' }}
        >
          <path
            fill="white"
            d="M0,192L48,186.7C96,181,192,171,288,165.3C384,160,480,160,576,176C672,192,768,224,864,240C960,256,1056,256,1152,240C1248,224,1344,192,1392,176L1440,160L1440,320L0,320Z"
          />
        </svg>
      </div>
      <div className="relative z-10 bg-gradient-to-br from-sky-900 via-indigo-900 to-purple-900">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">{SITE_CONFIG.shortName}</h3>
            <p className="text-slate-300 mb-4">
              {SITE_CONFIG.tagline}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-emerald-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-emerald-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios#contabilidad-general" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Contabilidad General
                </Link>
              </li>
              <li>
                <Link href="/servicios#liquidacion-impuestos" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Liquidación de Impuestos
                </Link>
              </li>
              <li>
                <Link href="/servicios#asesoramiento-pymes" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Asesoramiento PyMEs
                </Link>
              </li>
              <li>
                <Link href="/servicios#planificacion-fiscal" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Planificación Fiscal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-emerald-400 flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-slate-300 hover:text-emerald-400 transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-emerald-400 flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-slate-300 hover:text-emerald-400 transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors text-sm font-medium shadow-lg hover:shadow-xl"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-indigo-800/50 mt-12 pt-8 text-center text-slate-300">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Todos los derechos reservados.</p>
        </div>
      </div>
      </div>
    </footer>
  )
}


