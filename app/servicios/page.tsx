'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SERVICES, SERVICE_PACKAGES, SITE_CONFIG } from '@/constants'
import * as Icons from 'lucide-react'
import Wave from '@/components/Wave'

export default function ServiciosPage() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}`

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-sky-900 via-indigo-800 to-purple-700 text-white overflow-hidden pt-24 md:pt-28 pb-32 md:pb-40">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-purple-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10 py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles size={16} className="text-purple-300" />
              <span className="text-sm font-semibold text-purple-200">SERVICIOS PROFESIONALES</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6 leading-tight">
              Nuestros{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-sky-300 font-semibold">
                Servicios
              </span>{' '}
              Contables
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed font-sans">
              Soluciones integrales adaptadas a las{' '}
              <span className="font-semibold text-green-300">necesidades específicas de tu negocio</span>. 
              Desde contabilidad básica hasta planificación fiscal estratégica.
            </p>
          </motion.div>
        </div>
        
        {/* Bottom Wave */}
        <div className="pointer-events-none -mb-px">
          <Wave className="text-white" height="120" />
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white relative pt-12 md:pt-16 pb-0">
        <div className="container-custom">
          <div className="space-y-24">
            {SERVICES.map((service, index) => {
              const IconComponent = (Icons[service.icon as keyof typeof Icons] as any) || Icons.BarChart3
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.1 }}
                  className="grid lg:grid-cols-2 gap-12 items-start"
                >
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} flex flex-col`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 text-white rounded-xl flex items-center justify-center shadow-lg">
                        <IconComponent size={32} />
                      </div>
                      <h2 className="heading-2">{service.title}</h2>
                    </div>
                    <p className="text-body mb-8">{service.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="font-semibold text-slate-800 mb-4 text-lg">Beneficios:</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <CheckCircle size={22} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="text-muted text-lg">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-800 mb-4 text-lg">Ideal para:</h3>
                      <div className="flex flex-wrap gap-3">
                        {service.idealFor.map((type, i) => (
                          <span
                            key={i}
                            className="px-5 py-2.5 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-semibold border border-emerald-200"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} flex items-center`}>
                    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-large">
                      {service.image ? (
                        <>
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                        </>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                          <div className="text-center text-white p-8">
                            <IconComponent size={64} className="mx-auto mb-4 opacity-90" />
                            <p className="text-xl font-semibold">
                              Servicio personalizado según tus necesidades
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
        
        {/* Wave separator - parte de la sección blanca */}
        <div className="pointer-events-none -mb-px">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-[80px] md:h-[120px]"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: 'rotate(180deg)', display: 'block' }}
          >
            <path
              fill="white"
              d="M0,192L48,186.7C96,181,192,171,288,165.3C384,160,480,160,576,176C672,192,768,224,864,240C960,256,1056,256,1152,240C1248,224,1344,192,1392,176L1440,160L1440,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* Packages */}
      <section id="paquetes" className="section-padding bg-white relative -mt-px">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4 text-slate-800">
              Paquetes de{' '}
              <span className="inline-block bg-emerald-500 text-white px-4 py-1 rounded-lg font-bold">
                SERVICIOS
              </span>
            </h2>
            <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mt-3 mb-4" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-sans">
              Elige el paquete que mejor se adapte a las{' '}
              <span className="font-semibold text-emerald-600">necesidades de tu negocio</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SERVICE_PACKAGES.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`rounded-3xl bg-white shadow-xl border border-slate-100 p-6 md:p-8 relative transition-all duration-300 ${pkg.popular ? 'ring-2 ring-emerald-500 shadow-2xl' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Más Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="heading-3 mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-emerald-600 mb-2">{pkg.price}</p>
                  <p className="text-muted text-sm">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`${whatsappUrl}?text=Hola!%20Me%20interesa%20el%20paquete%20${pkg.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Consultar Paquete
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

