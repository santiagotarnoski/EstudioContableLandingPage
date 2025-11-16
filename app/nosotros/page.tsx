'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Award, Target, Heart, Sparkles } from 'lucide-react'
import Wave from '@/components/Wave'
import Image from 'next/image'
import { VALUES, TEAM, SITE_CONFIG } from '@/constants'

export default function NosotrosPage() {
  const iconMap = {
    'Misión': Award,
    'Visión': Target,
    'Valores': Heart,
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
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles size={16} className="text-purple-300" />
              <span className="text-sm font-semibold text-purple-200">NUESTRO EQUIPO</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6 leading-tight">
              Sobre{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-sky-300 font-semibold">
                Nosotros
              </span>
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed font-sans">
              Más de 15 años de experiencia asesorando empresas de todos los tamaños. 
              Conocé nuestra{' '}
              <span className="font-semibold text-green-300">historia, valores y el equipo</span> que hace posible nuestro trabajo.
            </p>
          </motion.div>
        </div>
        
        {/* Bottom Wave */}
        <div className="pointer-events-none -mb-px">
          <Wave className="text-white" height="120" />
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((value, index) => {
              const Icon = iconMap[value.title as keyof typeof iconMap] || Award
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="card text-center relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-full -mr-20 -mt-20 opacity-50 group-hover:opacity-70 transition-opacity" />
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-xl flex items-center justify-center mx-auto mb-6 shadow-medium group-hover:scale-110 transition-transform">
                      <Icon size={36} />
                    </div>
                    <h2 className="heading-3 mb-4">{value.title}</h2>
                    <p className="text-muted leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Nuestro Equipo</h2>
            <p className="text-body max-w-2xl mx-auto">
              Profesionales altamente capacitados comprometidos con tu éxito
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {TEAM.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card text-center overflow-hidden group"
              >
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-emerald-100 group-hover:ring-emerald-300 transition-all">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-4xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <h3 className="heading-3 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-semibold mb-4">{member.role}</p>
                <p className="text-muted">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-2 mb-12 text-center">Nuestro Compromiso</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Profesionalismo en cada servicio',
                'Transparencia total en costos y procesos',
                'Tecnología de última generación',
                'Atención personalizada',
                'Cumplimiento normativo garantizado',
                'Comunicación clara y constante',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle size={24} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-body">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

