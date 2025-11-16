'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react'
import { SITE_CONFIG } from '@/constants'
import Wave from '@/components/Wave'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}`

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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
            className="text-center max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles size={16} className="text-purple-300" />
              <span className="text-sm font-semibold text-purple-200">CONTACTO</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-sky-300 font-semibold">
                Contactanos
              </span>
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed font-sans">
              Estamos aquí para ayudarte. Envíanos tu consulta y te responderemos 
              a la brevedad, o contactanos directamente por{' '}
              <span className="font-semibold text-green-300">WhatsApp</span>.
            </p>
          </motion.div>
        </div>
        
        {/* Bottom Wave */}
        <div className="pointer-events-none -mb-px">
          <Wave className="text-white" height="120" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h2 className="heading-2 mb-6">Información de Contacto</h2>
              <p className="text-body mb-8">
                Podés contactarnos por cualquiera de estos medios. 
                Estamos disponibles de lunes a viernes de 9:00 a 18:00.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Dirección</h3>
                    <p className="text-muted">{SITE_CONFIG.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Teléfono</h3>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-muted hover:text-emerald-600 transition-colors">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-muted hover:text-emerald-600 transition-colors">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  Abrir WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card">
                <h2 className="heading-2 mb-6">Envíanos un Mensaje</h2>
                
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
                  >
                    <CheckCircle size={24} className="text-green-600" />
                    <p className="text-green-800 font-medium">
                      ¡Mensaje enviado! Te responderemos pronto.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-800 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-800 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-800 mb-2">
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="+54 3765 24-6043"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-800 mb-2">
                      Servicio de interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    >
                      <option value="">Seleccionar servicio</option>
                      <option value="contabilidad-general">Contabilidad General</option>
                      <option value="liquidacion-impuestos">Liquidación de Impuestos</option>
                      <option value="asesoramiento-pymes">Asesoramiento PyMEs</option>
                      <option value="planificacion-fiscal">Planificación Fiscal</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-800 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      placeholder="Cuéntanos sobre tu consulta..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send size={20} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

