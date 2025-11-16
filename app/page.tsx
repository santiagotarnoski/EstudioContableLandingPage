'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Sparkles, Zap, Shield, TrendingUp, HelpCircle, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import Wave from '@/components/Wave'
import FAQAccordion from '@/components/FAQAccordion'
import {
  SERVICES,
  WHY_CHOOSE_US,
  WORK_PROCESS,
  TESTIMONIALS,
  FAQS,
  SERVICE_PACKAGES,
  SITE_CONFIG,
} from '@/constants'
import * as Icons from 'lucide-react'

export default function Home() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=Hola!%20Quiero%20agendar%20una%20consulta.`

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-900 via-indigo-800 to-purple-700 text-white overflow-visible pb-32 md:pb-40">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-purple-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10 pt-24 md:pt-28 section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Accent badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-2 mb-6"
              >
                <Sparkles size={16} className="text-purple-300" />
                <span className="text-sm font-semibold text-purple-200">100% ONLINE</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-heading font-bold tracking-tight mb-6 leading-tight">
                Simplificá tus{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-sky-300 font-semibold">
                  impuestos
                </span>
                <br />
                con{' '}
                <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                  soluciones contables
                </span>{' '}
                modernas
              </h1>
              
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed font-sans max-w-xl">
                Gestioná tu contabilidad, liquidá impuestos y optimizá tu carga fiscal desde cualquier lugar. 
                Servicios contables profesionales para{' '}
                <span className="font-semibold text-green-300">emprendedores</span> y{' '}
                <span className="font-semibold text-green-300">PyMEs</span>.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-6 mb-6">
                <Link 
                  href="/contacto" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Ver Planes
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link
                  href="/servicios"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  Agendar Consulta
                </Link>
              </div>
              
              <div className="text-sm text-indigo-200 font-sans">
                ✓ Soluciones contables para emprendedores y pymes
              </div>
            </motion.div>
            
            {/* Dashboard Card - Overlapping Wave */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative md:translate-y-16 md:-mb-16"
            >
              <div className="relative">
                {/* Subtle glow under card with hero gradient colors */}
                <div className="absolute inset-x-10 bottom-0 h-16 bg-emerald-400/40 blur-3xl -z-10" />
                <div className="absolute inset-x-5 bottom-0 h-12 bg-indigo-400/30 blur-2xl -z-10" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-purple-400/20 blur-xl -z-10" />
                
                {/* Main dashboard card - Glass style integrated with gradient */}
                <motion.div 
                  className="relative rounded-3xl bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-xl shadow-2xl border border-white/40 p-4 md:p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative h-[420px] md:h-[480px] rounded-2xl overflow-hidden bg-gradient-to-br from-sky-500/5 via-indigo-500/5 to-purple-500/5">
                    {/* Modern Dashboard Content */}
                    <div className="absolute inset-0 p-4 md:p-6">
                      <div className="space-y-4 h-full flex flex-col">
                        {/* Top bar - Window controls */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                            <div className="w-3 h-3 rounded-full bg-green-400/80" />
                          </div>
                          <div className="text-xs font-semibold text-white/90 backdrop-blur-sm bg-white/10 px-2 py-1 rounded-md border border-white/20">Dashboard Contable</div>
                          <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full border border-white/50 shadow-sm" />
                        </div>
                        
                        {/* Metric chips row */}
                        <div className="grid grid-cols-3 gap-2 md:gap-3">
                          <div className="rounded-xl bg-white/90 backdrop-blur-md px-3 py-2 text-center border border-white/60 shadow-md">
                            <div className="text-lg md:text-xl font-bold text-emerald-600">15+</div>
                            <div className="text-xs text-slate-600 font-semibold">Años</div>
                          </div>
                          <div className="rounded-xl bg-white/90 backdrop-blur-md px-3 py-2 text-center border border-white/60 shadow-md">
                            <div className="text-lg md:text-xl font-bold text-sky-600">500+</div>
                            <div className="text-xs text-slate-600 font-semibold">Clientes</div>
                          </div>
                          <div className="rounded-xl bg-white/90 backdrop-blur-md px-3 py-2 text-center border border-white/60 shadow-md">
                            <div className="text-lg md:text-xl font-bold text-purple-600">100%</div>
                            <div className="text-xs text-slate-600 font-semibold">Online</div>
                          </div>
                        </div>
                        
                        {/* Main chart area */}
                        <div className="flex-1 grid grid-cols-3 gap-3">
                          {/* Large chart */}
                          <div className="col-span-2 rounded-xl bg-gradient-to-r from-emerald-500/90 to-sky-500/90 p-4 flex flex-col justify-between">
                            <div className="text-white/90 text-sm font-semibold mb-2">Ingresos Mensuales</div>
                            <div className="flex items-end gap-2 h-24">
                              <div className="flex-1 bg-white/30 rounded-t-md h-16" />
                              <div className="flex-1 bg-white/40 rounded-t-md h-20" />
                              <div className="flex-1 bg-white/30 rounded-t-md h-12" />
                              <div className="flex-1 bg-white/50 rounded-t-md h-24" />
                              <div className="flex-1 bg-white/40 rounded-t-md h-20" />
                              <div className="flex-1 bg-white/30 rounded-t-md h-14" />
                            </div>
                          </div>
                          
                          {/* Side cards */}
                          <div className="col-span-1 space-y-3">
                            <div className="rounded-xl bg-white/90 backdrop-blur-md border border-white/60 p-3 shadow-md">
                              <div className="text-xs text-slate-500 mb-1">Balance</div>
                              <div className="text-lg font-bold text-slate-800">$125K</div>
                              <div className="text-xs text-emerald-600 font-semibold mt-1">↑ 12%</div>
                            </div>
                            <div className="rounded-xl bg-white/90 backdrop-blur-md border border-white/60 p-3 shadow-md">
                              <div className="text-xs text-slate-500 mb-1">Gastos</div>
                              <div className="text-lg font-bold text-slate-800">$45K</div>
                              <div className="text-xs text-sky-600 font-semibold mt-1">↓ 5%</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Bottom stats */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="rounded-lg bg-white/90 backdrop-blur-md border border-white/60 p-2 shadow-md">
                            <div className="text-xs text-slate-500">IVA</div>
                            <div className="text-sm font-bold text-slate-700">$8,500</div>
                          </div>
                          <div className="rounded-lg bg-white/90 backdrop-blur-md border border-white/60 p-2 shadow-md">
                            <div className="text-xs text-slate-500">Ganancias</div>
                            <div className="text-sm font-bold text-slate-700">$12,300</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Wave separator */}
        <Wave className="text-slate-50" />
      </section>

      {/* Plans Section */}
      <section className="section-padding bg-white relative overflow-hidden pb-24 md:pb-32">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">
              <span className="inline-block bg-emerald-500 text-white px-3 py-1 rounded-md text-2xl md:text-3xl font-bold mr-2">
                Planes
              </span>
              que se adaptan a tu negocio
            </h2>
            <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mt-3 mb-4" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-sans">
              Elegí el plan perfecto para tu empresa. Todos incluyen{' '}
              <span className="font-semibold text-emerald-600">soporte profesional</span> y{' '}
              <span className="font-semibold text-emerald-600">gestión online</span>.
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
                className="relative rounded-3xl bg-white shadow-xl p-8 border border-slate-100 hover:shadow-2xl transition-all duration-300"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Más Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-bold mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-sky-600 mb-2">{pkg.price}</p>
                  <p className="text-sm text-slate-500 font-sans">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600 font-sans">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/543765246043?text=${encodeURIComponent(`Hola! Me interesa el Plan ${pkg.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Contratar Plan
                </a>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <Wave className="text-white" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white relative">
        {/* Decorative dots pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-2 h-2 bg-purple-500 rounded-full" />
          <div className="absolute top-40 right-40 w-2 h-2 bg-indigo-500 rounded-full" />
          <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-sky-500 rounded-full" />
          <div className="absolute bottom-40 right-20 w-2 h-2 bg-purple-500 rounded-full" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">
              ¿Por qué{' '}
              <span className="inline-block bg-gradient-to-r from-sky-600 to-indigo-600 text-white px-3 py-1 rounded-md font-bold">
                {SITE_CONFIG.shortName}
              </span>
              ?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full mx-auto mt-3 mb-4" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-sans">
              Más de <span className="font-semibold text-sky-600">15 años de experiencia</span> respaldan nuestro compromiso con la{' '}
              <span className="font-semibold text-sky-600">excelencia contable</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, index) => {
              const IconComponent = (Icons[item.icon as keyof typeof Icons] as any) || Icons.Award
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="relative rounded-2xl bg-white border-2 border-sky-200 p-6 text-center group hover:border-purple-400 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-indigo-500 text-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-slate-800">{item.title}</h3>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Nuestros Servicios Section */}
      <section className="relative bg-gradient-to-br from-sky-800 via-indigo-700 to-purple-700 text-white overflow-hidden">
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
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10 section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">
              Nuestros{' '}
              <span className="inline-block bg-green-400 text-slate-900 px-4 py-1 rounded-lg font-bold">
                SERVICIOS
              </span>
            </h2>
            <div className="w-16 h-1 bg-green-400 rounded-full mx-auto mt-3 mb-4" />
            <p className="text-lg text-indigo-200 max-w-2xl mx-auto font-sans">
              Soluciones contables completas adaptadas a las{' '}
              <span className="font-semibold text-green-300">necesidades de tu negocio</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const IconComponent = (Icons[service.icon as keyof typeof Icons] as any) || Icons.BarChart3
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 hover:bg-white/15 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-sm text-indigo-200 font-sans leading-relaxed">{service.shortDescription}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
        
        {/* Bottom Wave - White separator */}
        <div className="pointer-events-none -mb-px">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-[80px] md:h-[120px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M0,192L48,186.7C96,181,192,171,288,165.3C384,160,480,160,576,176C672,192,768,224,864,240C960,256,1056,256,1152,240C1248,224,1344,192,1392,176L1440,160L1440,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* ¿Cómo trabajamos? Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-slate-800">
              ¿Cómo{' '}
              <span className="inline-block bg-purple-500 text-white px-3 py-1 rounded-md font-bold">
                trabajamos
              </span>
              ?
            </h3>
            <div className="w-16 h-1 bg-purple-400 rounded-full mx-auto mt-3 mb-4" />
            <p className="text-slate-600 max-w-2xl mx-auto font-sans">
              Un proceso estructurado para garantizar el{' '}
              <span className="font-semibold text-purple-600">éxito de tu gestión contable</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {WORK_PROCESS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                      {step.step}
                </div>
                <h4 className="text-xl font-heading font-bold mb-3 text-slate-800">{step.title}</h4>
                <p className="text-sm text-slate-600 font-sans leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative bg-gradient-to-br from-sky-800 via-indigo-700 to-purple-700 text-white overflow-hidden">
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

        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4 text-white">
              Lo que dicen nuestros{' '}
              <span className="inline-block bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-3 py-1 rounded-md font-bold">
                clientes
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full mx-auto mt-3 mb-4" />
            <p className="text-lg text-indigo-200 max-w-2xl mx-auto font-sans">
              Testimonios reales de{' '}
              <span className="font-semibold text-sky-300">empresas que confían en nosotros</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Bottom Wave - White separator */}
        <div className="pointer-events-none -mb-px">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-[80px] md:h-[120px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M0,192L48,186.7C96,181,192,171,288,165.3C384,160,480,160,576,176C672,192,768,224,864,240C960,256,1056,256,1152,240C1248,224,1344,192,1392,176L1440,160L1440,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">
              <span className="inline-block bg-emerald-500 text-white px-3 py-1 rounded-full text-sm md:text-base font-semibold mr-2">
                Preguntas
              </span>
              frecuentes
            </h2>
            <div className="w-16 h-1 bg-emerald-500 rounded-full mx-auto mt-3 mb-4" />
            <p className="text-slate-500 max-w-2xl mx-auto font-sans">
              Respuestas a las consultas más comunes sobre nuestros servicios
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Info Card */}
              <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              className="md:col-span-1"
            >
              <div className="rounded-2xl bg-white shadow-md border border-slate-100 p-6 h-full flex flex-col justify-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <HelpCircle size={32} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-800 mb-3 text-center">
                  ¿Tenés dudas?
                </h3>
                <p className="text-slate-600 text-center font-sans">
                  Encontrá las respuestas más comunes a las consultas sobre nuestros servicios contables.
                </p>
              </div>
              </motion.div>

            {/* Right Column - FAQ Items */}
            <div className="md:col-span-2 space-y-4">
              {FAQS.map((faq, index) => (
                <FAQAccordion key={index} faq={faq} index={index} />
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom text-center relative z-10 mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-6 text-slate-800">
              ¿Listo para{' '}
              <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-md font-bold">
                optimizar
              </span>
              {' '}tu contabilidad?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto mt-3 mb-6" />
            <p className="text-xl text-slate-600 mb-8 font-sans">
              Agenda una{' '}
              <span className="font-semibold text-emerald-600">consulta gratuita</span> y descubre cómo podemos ayudarte a{' '}
              <span className="font-semibold text-emerald-600">hacer crecer tu negocio</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contacto" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Agendar Consulta Gratuita
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:border-purple-400 hover:text-purple-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Wave separator before footer - gradient container with white wave */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-br from-sky-900 via-indigo-900 to-purple-900 overflow-hidden">
          <Wave className="text-white" height="80" />
        </div>
      </section>
    </>
  )
}

